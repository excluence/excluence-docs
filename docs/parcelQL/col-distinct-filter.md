---
sidebar_position: 3
---

# Column and Distinct


## Simple column selection

```ts
export type ParcelQLSimpleColumn = {
    column: string | string[];
    type?: string | string[];
};
```
Examples from the `flow_events` [table](http://localhost:3000/docs/intro#event-table).

### 1. Selecting single column

**Request Query**
```json
{
    "action": "query",
    "table": "flow_events",
    "columns": [
        {
            "column": "address"
        }
    ]
}
```
**Generated SQL**
```json
{
  "data": "select `address` from `flow_events`"
}
```


**Response**
```json
{
  "data": [
    {
      "address": "0xecfad18ba9582d4f"
    },
    {
      "address": "0x0b2a3299cc857e29"
    },
    ...
  ]
}
```

### 2. Selecting multiple columns
**Request Query**
```json
{
    "action": "query",
    "table": "flow_events",
    "columns": [
        {
            "column": "address"
        },
        {
            "column": "contract"
        }
    ]
}
```
**Generated SQL**
```json
{
  "data": "select `address`, `contract` from `flow_events`"
}
```

**Response**
```json
{
  "data": [
    {
      "address": "0xecfad18ba9582d4f",
      "contract": "A.ecfad18ba9582d4f.JoyrideMultiToken"
    },
    {
      "address": "0x0b2a3299cc857e29",
      "contract": "A.0b2a3299cc857e29.TopShot"
    },
    {
      "address": "0x0b2a3299cc857e29",
      "contract": "A.0b2a3299cc857e29.TopShot"
    },
    {
      "address": "0x0b2a3299cc857e29",
      "contract": "A.0b2a3299cc857e29.TopShot"
    },
    ...
  ]
}
```

### 3. Selecting all columns using `*`

**Request Query**
```json
{
    "action": "query",
    "table": "flow_events",
    "columns": [
        {
            "column": "*"
        }
    ]
}
```

**Generate SQL**
```json
{
  "data": "select * from `flow_events`"
}
```

**Response**
```json
{
  "data": [
    {
      "address": "0xecfad18ba9582d4f",
      "contractName": "JoyrideMultiToken",
      "contract": "A.ecfad18ba9582d4f.JoyrideMultiToken",
      "event": "A.ecfad18ba9582d4f.JoyrideMultiToken.JoyrideMultiTokenInfoEvent",
      "eventName": "JoyrideMultiTokenInfoEvent",
      "timestamp": "2023-07-23T14:51:14.827Z",
      "collectionId": "e8738554d413d79deb510342f45fa77b22210ed0470a715d17f33918ea386b97",
      "transactionId": "969f6aa1cc41b4ed020f4a2a8cc8a7c5e2c5550408444f0a68857fb113664c6b",
      "eventIndex": "4",
      "blockId": "8e169acb8e21cb93209036af13a0f5bd94cf23e9937c61ebf397172c0c4e8611",
      "blockHeight": "57301601",
      "payload": {
        "notes": "depositToken for userA.231cc0dbbcffc4b7.RLY.Vault"
      }
    },
    {
      "address": "0x0b2a3299cc857e29",
      "contractName": "TopShot",
      "contract": "A.0b2a3299cc857e29.TopShot",
      "event": "A.0b2a3299cc857e29.TopShot.MomentMinted",
      "eventName": "MomentMinted",
      "timestamp": "2023-07-23T14:51:14.827Z",
      "collectionId": "08bd5009d60ab9fed01e639dccc78fd79d445e0879c25f7f6293e0393955faf9",
      "transactionId": "4f53d086e7c80eac323d32654b6250c1f272ffe9c1c30bfb5a74c372eb4bde99",
      "eventIndex": "0",
      "blockId": "8e169acb8e21cb93209036af13a0f5bd94cf23e9937c61ebf397172c0c4e8611",
      "blockHeight": "57301601",
      "payload": {
        "setID": 90,
        "playID": 4046,
        "momentID": "43023669",
        "serialNumber": 7301,
        "subeditionID": 0
      }
    },
    ...
  ]
}
```

### 4. JSON data type selection

The payload data from event is stored in `jsonb` format. Let's have a look how we can use ParcelQL to select attribute from payload.

This is how `A.4eb8a10cb9f87357.NFTStorefrontV2.ListingCompleted` is stored in the database.
```json
{
      "address": "0x4eb8a10cb9f87357",
      "contractName": "NFTStorefrontV2",
      "contract": "A.4eb8a10cb9f87357.NFTStorefrontV2",
      "event": "A.4eb8a10cb9f87357.NFTStorefrontV2.ListingCompleted",
      "eventName": "ListingCompleted",
      "timestamp": "2023-07-23T14:36:36.814Z",
      "collectionId": "bf6c7237e02528a51143c2543a68d9e337f6d7f2308055751ae3d8f6167153c6",
      "transactionId": "2bcc3aa168c8e9f80cf0a3bee6e0efcfad59d57cd5a81ffa721de9827e3722b6",
      "eventIndex": "8",
      "blockId": "23dc7175fd1d5d52b3c349008d6df3e313653df24d0fa1ee74eb2d529b85aa53",
      "blockHeight": "57300898",
      "payload": {
        "nftID": "2",
        "expiry": "1733817600000",
        "nftType": {
          "kind": "Resource",
          "type": "",
          "fields": [
            {
              "id": "uuid",
              "type": {
                "kind": "UInt64"
              }
            },
            {
              "id": "id",
              "type": {
                "kind": "UInt64"
              }
            },
            {
              "id": "editionID",
              "type": {
                "kind": "UInt32"
              }
            },
            {
              "id": "serialNumber",
              "type": {
                "kind": "UInt64"
              }
            }
          ],
          "typeID": "A.eee6bdee2b2bdfc8.Basketballs.NFT",
          "initializers": []
        },
        "nftUUID": "71226420",
        "customID": "",
        "purchased": true,
        "salePrice": "10.00000000",
        "commissionAmount": "0.00000000",
        "listingResourceID": "1192177821",
        "commissionReceiver": null,
        "salePaymentVaultType": {
          "kind": "Resource",
          "type": "",
          "fields": [
            {
              "id": "uuid",
              "type": {
                "kind": "UInt64"
              }
            },
            {
              "id": "balance",
              "type": {
                "kind": "UFix64"
              }
            }
          ],
          "typeID": "A.ead892083b3e2c6c.DapperUtilityCoin.Vault",
          "initializers": []
        },
        "storefrontResourceID": "506239605"
      }
    }
```

Let's create a query to select all `A.4eb8a10cb9f87357.NFTStorefrontV2.ListingCompleted` and get their nft types. The `typeID` attribute in `payload.nftType` contains the resource address of NFT.

**Request Query**
```json
{
    "action": "query",
    "table": "flow_events",
    "columns": [
        {
            "column": ["payload", "nftType", "typeID"]
        }
    ],
    "filter": {
        "column": "event",
        "operator": "=",
        "value": "A.4eb8a10cb9f87357.NFTStorefrontV2.ListingCompleted"
    }
}
```

**Generated SQL**
```json
{
  "data": "select (`payload`->'nftType'->>'typeID') from `flow_events` where (`event` = 'A.4eb8a10cb9f87357.NFTStorefrontV2.ListingCompleted')"
}
```

**Response**
```json
{
  "data": [
        {
            "?column?": "A.eee6bdee2b2bdfc8.Basketballs.NFT"
        },
        {
            "?column?": "A.d0bcefdf1e67ea85.HWGarageCardV2.NFT"
        },
        {
            "?column?": "A.d0bcefdf1e67ea85.HWGarageCardV2.NFT"
        },
        {
            "?column?": "A.eee6bdee2b2bdfc8.Basketballs.NFT"
        },
        {
            "?column?": "A.eee6bdee2b2bdfc8.Basketballs.NFT"
        },
        {
            "?column?": "A.eee6bdee2b2bdfc8.Basketballs.NFT"
        },
        {
            "?column?": "A.eee6bdee2b2bdfc8.Basketballs.NFT"
        },
        {
            "?column?": "A.d0bcefdf1e67ea85.HWGarageCardV2.NFT"
        },
        ...
    ]
}
```

We can see the name `?column?`. In the upcoming section, we will be taught how to assign custom names to columns using the `alias` feature.
Furthermore, in the later part of the tutorial, we'll explore the usage of `distinct` to extract unique values and gain an understanding of the `filter` functionality.

### 5. Typecasting values

Performing typecasting is a vital functionality that proves useful in the Excluence API, particularly when handling significant numeric values stored as strings. Presently, ParcelQL offers support for typecasting to the following data types:

```ts
[
    // Numbers
    'integer',
    'smallint',
    'double precision',
    'decimal',
    'bigint',
    // Text and string
    'text',
    // Boolean
    'boolean',
    // Date and time
    'date',
    // Json
    'json',
    'jsonb'
]

```

To understand typecasting in ParcelQL, let's take the [A.4eb8a10cb9f87357.NFTStorefrontV2.ListingCompleted](http://localhost:3000/docs/parcelQL/col-distinct-filter#4-json-data-type-selection), in the payload `storefrontResourceID` is an `UInt64` value and stored as string in the database. Now, let's explore how you can efficiently convert this string value into an integer.

**Request Query**
```json
{
    "action": "query",
    "table": "flow_events",
    "columns": [
        {
            "column": ["payload", "listingResourceID"],
            "alias": "listingResourceID"
        },
        {
            "column": ["payload", "storefrontResourceID"],
            "type": "integer"
        }
    ],
    "filter": {
        "column": "event",
        "operator": "=",
        "value": "A.4eb8a10cb9f87357.NFTStorefrontV2.ListingCompleted"
    }
}
```

**Generated SQL**
```json
{
  "data": "select (`payload`->>'listingResourceID') as `listingResourceID`, (`payload`->>'storefrontResourceID')::integer from `flow_events` where (`event` = 'A.4eb8a10cb9f87357.NFTStorefrontV2.ListingCompleted')"
}
```

**Response**
```json
{
  "data": [
    {
      "listingResourceID": "1192177821",
      "int4": 506239605
    },
    {
      "listingResourceID": "1144944279",
      "int4": 995020166
    },
    {
      "listingResourceID": "1144944945",
      "int4": 995020166
    },
    {
      "listingResourceID": "1192178848",
      "int4": 506242189
    },
    {
      "listingResourceID": "1192179885",
      "int4": 506239605
    },
    ...
  ]
}
```
Upon examination, it becomes evident that the `storefrontResourceID` for the aforementioned event, with a corresponding `listingResourceID` of **"1192177821"** has been successfully transformed from a string into an integer data type.

`type` attribute in [ParcelQLSimpleColumn](http://localhost:3000/docs/parcelQL/col-distinct-filter#simple-column-selection) is a string array. The developers can chain the typecasting for example for converting any value to `{any value type} -> text -> decimal` the `type: ['text', 'decimal]` and it will generate typecasting SQL `::text::decimal`.