---
sidebar_position: 5
---

# Time, Aggregation and Window functions

These functions can be used normally within the [ParcelQLColumn](http://localhost:3000/docs/parcelQL/col-distinct-filter#complex-column-selection-and-manipulation).

Non-window functions accepts `function` and optional `parameters` properties, while window functions will requires extra `window` attribute. `parameters` is an array of values and column. You can use `alias` with functions.

## Time function
Currently, ParcelQL only supports these time functions:
```ts
type ParcelQLDateTimeFunction = ['DATE_TRUNC', 'DATE_PART'];
```
Let's create a query to fetch the day of `MomentMinted` event.

**Request Query**
```json
{
    "action": "query",
    "columns": [
        {
            "function": "DATE_TRUNC",
            "parameters": [
                "day",
                {
                    "column": "timestamp"
                }
            ]
        }
    ],
    "filter": {
        "column": "eventName",
        "operator": "=",
        "value": "MomentMinted"
    },
    "table": "flow_events"
}
```

**Generated SQL**
```json
{
  "data": "select DATE_TRUNC('day',`timestamp`) from `flow_events` where (`eventName` = 'MomentMinted')"
}
```

**Response**
```json
{
  "data": [
    {
      "date_trunc": "2023-07-23T00:00:00.000Z"
    },
    {
      "date_trunc": "2023-07-23T00:00:00.000Z"
    },
    ...
  ]
}
```

## Aggregation Function
```ts
type ParcelQLAggregationFunction = ['AVG','COUNT','SUM','MAX','MIN']
```

### A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed
```json
{
      "address": "0xc1e4f4f4c4257510",
      "contractName": "TopShotMarketV3",
      "contract": "A.c1e4f4f4c4257510.TopShotMarketV3",
      "event": "A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed",
      "eventName": "MomentListed",
      "timestamp": "2023-07-23T15:07:42.713Z",
      "collectionId": "d49007d33a4d9e7bb7f62e8e5ee9a2a719bc810b19b9e80cfc48731115a74bf0",
      "transactionId": "f9f0f6929117bfcabc287e0ba68313e6abd486325506d4f8c3af823619b531ad",
      "eventIndex": "0",
      "blockId": "18af3acc16b8640df83a521b515d9ed7fcd0b0f157580070a52c77dc6f5c40f1",
      "blockHeight": "57302386",
      "payload": {
        "id": "37183622",
        "price": "2.00000000",
        "seller": "0x6a3ca11512bd711d"
      }
    }
```

Let's calculate average listing price, total listings, max and min listing price  of TopShot Moments on date `2023-07-23`.

**Request Query**
```json
{
    "action": "query",
    "columns": [
        {
            "function": "AVG",
            "parameters": [
                {
                    "column": ["payload", "price"],
                    "type": "decimal"
                }
            ],
            "alias": "avg_price"
        },
        {
            "function": "MAX",
            "parameters": [
                {
                    "column": ["payload", "price"],
                    "type": "decimal"
                }
            ],
            "alias": "max_price"
        },
        {
            "function": "MIN",
            "parameters": [
                {
                    "column": ["payload", "price"],
                    "type": "decimal"
                }
            ],
            "alias": "min_price"
        },
        {
            "function": "COUNT",
            "parameters": [
                {
                    "column": "*"
                }
            ],
            "alias": "total_listings"
        }
    ],
     "filter": {
      "and": [
        {
        "column": "eventName",
        "operator": "=",
        "value": "MomentListed"
    },
    {
      "column": {
        "function": "DATE_TRUNC",
        "parameters": ["day", {"column": "timestamp"}]
      },
      "operator": "=",
      "value": "2023-07-23"
    }
        ]
    },
    "table": "flow_events"
}
```
**Generated SQL**
```json
{
  "data": "select AVG((`payload`->>'price')::decimal) as `avg_price`, MAX((`payload`->>'price')::decimal) as `max_price`, MIN((`payload`->>'price')::decimal) as `min_price`, COUNT(*) as `total_listings` from `flow_events` where ((`eventName` = 'MomentListed') AND (DATE_TRUNC('day',`timestamp`) = '2023-07-23'))"
}
```

**Response**
```json
{
  "data": [
    {
      "avg_price": "19.6855524079320113",
      "max_price": "1249.00000000",
      "min_price": "1.00000000",
      "total_listings": "353"
    }
  ]
}
```

## Window Function
