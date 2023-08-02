---
sidebar_position: 1
---

# Introduction

Welcome to Excluence API, a powerful tool that allows developers to query Flow blockchain events data using SQL. This **Getting Started** guide will help you quickly get up to speed with using the **Excluence API** and make your first queries to access blockchain event data. 

Whether you're a seasoned blockchain developer or just starting, this documentation will provide the necessary information to interact with the API effectively.

### How does it work?

The Excluence API acts as a middleware between your application and the Flow blockchain. The best part? No need to embark on the arduous journey of creating your event indexer from scratch! With Excluence API's mesmerizing SQL queries, you can effortlessly summon the precise data you desire directly from our indexer.

Embrace the magic of abstraction as it weaves its charm, streamlining the entire process for you. Bid farewell to the worries of blockchain-specific intricacies! Now, you can focus wholeheartedly on crafting your extraordinary application, making it shine brighter than the stars.

### What makes Excluence unique?

* **User-defined queries**: In the realm of blockchain data, you've likely encountered indexers and other providers like, in Ethereum ecosystem Etherscan, Moralis from Ethereum, and the innovative The Graph protocol. While these sources serve well for general-purpose applications, they do come with a catch – their queries are limited and predefined. So, when you're dreaming up an application that demands custom queries, they may leave you wanting more.<br/><br/>We've opened the gates to an immense trove of historical events from the blockchain, granting you direct access. And the best part? You can effortlessly query this treasure trove using simple SQL, unlocking boundless possibilities for your application!
* **ParcelQL**: We're thrilled to introduce you to the magic of ParcelQL – our very own JSON SQL solution. With ParcelQL, developers like you can now write SQL queries in JSON format, effortlessly fetching data directly from our database. 

### Important information regarding the database

| Information Type | Value |
| -----------------|-------|
| Database Engine  | PostgreSQL |
| Name of Table    | flow_events |

* **NOTE**: Data types `UInt64`, `UFix64` or bigger will stored as string in the database, when constructing a query the developer must typecast them in the expected data type. This behavior comes into effect due to limitations of JS and FCL decoder. 

## Event Table
The structure of the table in the database.

| Column | Data Type | REST API Return Type | Description | Example |
|--------|-----------|----------------------|-------------|---------|
|address| string| string | The address where the vent emitting contract is stored with `0x` prefix. | 0x1d7e57aa55817448 |
|contractName| string | string | Name of the contract emitting event | NonFungibleToken|
|contract| string | string | Flow defined complete address of the contract | A.1d7e57aa55817448.NonFungibleToken |
|event| string | string | Flow defined complete name of the event | A.1d7e57aa55817448.NonFungibleToken.Deposit |
|eventName | string | string | Name of the event | Deposit |
|timestamp | DateTime | string | Timestamp of the block in which the event was emitted | 2023-07-23T00:00:00.000Z |
|[collectionId](https://developers.flow.com/tooling/fcl-js/api#getcollection) | string | string | Collection ID of the transaction |  |
|[transactionId](https://developers.flow.com/tooling/fcl-js/api#gettransaction) | string | string | Transaction ID of the event | |
|[eventIndex](https://developers.flow.com/tooling/fcl-js/api#event-object) | integer | number | Index of the event within the transaction | |
|[blockId](https://developers.flow.com/tooling/fcl-js/api#blockobject) | string | string | The id of the block |  |
|[blockHeight](https://developers.flow.com/tooling/fcl-js/api#blockobject) | bigint | string | The height of the block | |
|payload| jsonb | json | The data emitted from the event | {"id": "43023628", "to": "0xe1f2a091f7bb5245"} |

## How does the query work?

We want to shed some light on our choice of PostgreSQL as the underlying database for handling unstructured data payloads. The decision was made based on its commendable query performance, often surpassing that of MongoDB when working with the json data type.

But that's not all! PostgreSQL's prowess truly shines when it comes to performant time-series queries, making it an excellent choice for clients seeking efficient handling of such queries.

For reading more about how PostgreSQL Json queries work read on [PostgreSQL Json Functions](https://www.postgresql.org/docs/current/functions-json.html).

To understand better, let's have a look on simple query, how you can get all deposited `A.1e3c78c6d580273b.LNVCT.Deposit` on address `0x12a6f076d0752584`.

##### Request Query
```json
{
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
}
```
##### Generated SQL from above query
```sql
select * from `flow_events` where ((`event` = 'A.1e3c78c6d580273b.LNVCT.Deposit') AND ((`payload`->>'to') = '0x12a6f076d0752584'));
```

##### Response
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
    ...
  ]
}
```

This was just a simple query without much manipulation, but in complex queries like latest deposits or total deposit amount calculation can also be performed. To learn how to write complex SQL queries using **ParcelQL** move to next part.