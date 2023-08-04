---
sidebar_position: 2
---

# API Endpoints

```http
Domain: https://api.excluence.com
```

## 1. Query Preview
```http 
POST /query/preview
```

The API offers a special endpoint that returns the generated SQL query for preview. By accessing this endpoint, you can effortlessly verify that ParcelQL is generating the expected SQL query for your request. This preview feature enables you to double-check the accuracy and correctness of the generated SQL, ensuring that it aligns perfectly with your intended query. It's a handy tool to streamline your development process and troubleshoot any potential discrepancies before executing the final query.

For example the previous query
```curl
curl -X POST https://api.excluence.com/query/preview
     -H "Content-Type: application/json"
     -d "{
            "action": "query",
            "table": "flow_events",
            "columns": [
                {
                    "column": "*"
                }
            ],
            "filter": {
                "and": [
                    {
                        "column": "event",
                        "operator": "=",
                        "value": "A.1e3c78c6d580273b.LNVCT.Deposit"
                    },
                    {
                        "column": ["payload", "to"],
                        "operator": "=",
                        "value": "0x12a6f076d0752584"
                    }
                ]
            }
    
            }"

```
Should return
```json
{
  "data": "select * from `flow_events` where ((`event` = 'A.1e3c78c6d580273b.LNVCT.Deposit') AND ((`payload`->>'to') = '0x12a6f076d0752584'))"
}
```

## 2. Query
```http 
POST /query
```

Welcome to our API, where the magic of querying data begins! Our API is designed to provide you with seamless access to a wealth of valuable data from various sources.

For example the previous query
```curl
curl -X POST https://api.excluence.com/query
     -H "Content-Type: application/json"
     -d "{
            "action": "query",
            "table": "flow_events",
            "columns": [
                {
                    "column": "*"
                }
            ],
            "filter": {
                "and": [
                    {
                        "column": "event",
                        "operator": "=",
                        "value": "A.1e3c78c6d580273b.LNVCT.Deposit"
                    },
                    {
                        "column": ["payload", "to"],
                        "operator": "=",
                        "value": "0x12a6f076d0752584"
                    }
                ]
            }
    
            }"

```

Should return
```json
{
  "data": [
    {
      "address": "0x1e3c78c6d580273b",
      "contractName": "LNVCT",
      "contract": "A.1e3c78c6d580273b.LNVCT",
      "event": "A.1e3c78c6d580273b.LNVCT.Deposit",
      "eventName": "Deposit",
      "timestamp": "2023-07-23T14:51:09.914Z",
      "collectionId": "c6e05c34ca759cbfcae350103aacb3433c9781768bc93c79fe5ae6b3c037e416",
      "transactionId": "00bfdaab6e079fe323dc2a611533e4a48cc8349dc1dd6fc9faadc326796c34bf",
      "eventIndex": "1",
      "blockId": "906fc8a3c035f5c78c5f0858a2fd853e85ae686cd511f461a0e0fde4ab401294",
      "blockHeight": "57301597",
      "payload": {
        "id": "75605919924289537",
        "to": "0x12a6f076d0752584"
      }
    },
    {
      "address": "0x1e3c78c6d580273b",
      "contractName": "LNVCT",
      "contract": "A.1e3c78c6d580273b.LNVCT",
      "event": "A.1e3c78c6d580273b.LNVCT.Deposit",
      "eventName": "Deposit",
      "timestamp": "2023-07-23T14:51:11.424Z",
      "collectionId": "90cd78e2dcce7f388f8da12e6a4ef5b6acd9348810bcff2c17a7949992e955c2",
      "transactionId": "9558f1d8eb9331ffd138dc20f1550decf7671229056de1aab314661ce2596c72",
      "eventIndex": "1",
      "blockId": "080ad08cb548ea1f38ff6f9a80b1d947874e699f8c6d4adac89c6862afe1b8ca",
      "blockHeight": "57301598",
      "payload": {
        "id": "75595680722255873",
        "to": "0x12a6f076d0752584"
      }
    },
    {
      "address": "0x1e3c78c6d580273b",
      "contractName": "LNVCT",
      "contract": "A.1e3c78c6d580273b.LNVCT",
      "event": "A.1e3c78c6d580273b.LNVCT.Deposit",
      "eventName": "Deposit",
      "timestamp": "2023-07-23T14:51:14.827Z",
      "collectionId": "800db76631b4b68103de048444220ee0433eb162e7066f624a997f8ec83e6b92",
      "transactionId": "d3e00bb6143de30eb5dc38d7daa1ed462ddb53f77b75723f5c8ef3bbf350def1",
      "eventIndex": "1",
      "blockId": "8e169acb8e21cb93209036af13a0f5bd94cf23e9937c61ebf397172c0c4e8611",
      "blockHeight": "57301601",
      "payload": {
        "id": "75601414503596033",
        "to": "0x12a6f076d0752584"
      }
    },
    ...
}
```

These API have some limitations and constraints which are explained in the next part.