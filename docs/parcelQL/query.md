---
sidebar_position: 2
---

# ParcelQL Query

ParcelQL Query is an interface representing the core query object. It allows developers to define various components of SQL query.

With `ParcelQLQuery`, developers can build expressive and flexible SQL queries in type-safe manner. The interface provides a structure and comprehensive set of options to construct queries for various scenarios such as simple queries, sub-queries, aggregations, window function, joins, filtering and sorting. 

## ParcelQLQuery
```ts
type QueryAction = 'subquery' | 'temporary_table' | 'subquery';

export interface ParcelQLQuery<Q = QueryAction> {
    action: Q;
    table: string;
    columns?: ParcelQLColumn[];
    distinct?: ParcelQLDistinct;
    filter?: ParcelQLFilter;
    join?: ParcelQLJoin;
    group_by?: ParcelQLGroupBy;
    having?: ParcelQLFilter;
    order_by?: ParcelQLOrderBy;
    limit?: number;
    offset?: number;
}
```

### Action
```ts
type QueryAction = 'query' | 'temporary_table' | 'subquery';
```
Query action provides the context of query to parcelQL engine. The `query` action is allowed only at the root level, indicating the main query. All nested queries must use either the `subquery` or `temporary_table` action.

The `temporary_table` action is designed specifically for usage in joins, allowing developers to perform joins within subqueries. On the other hand, the subquery action is used to create subqueries.

ParcelQL supports one level of nested queries, meaning that only the main query can have a nested subquery. Subqueries inside a subquery are not supported.

Although `subquery` and `temporary_table` may appear similar, they serve different purposes. temporary_table was introduced to enable joins within subqueries while adhering to the constraint of one-level deep subqueries in ParcelQL.

Please note that the provided documentation is based on the current implementation of ParcelQL and may be subject to updates or changes in the future.


### Table

The table property in the ParcelQLQuery interface represents the name of the table (and in future CTE will be added) on which the query is to be performed. It can be specified as either a string representing the table name or as a nested ParcelQLQuery with the action set to subquery.

**NOTE**: In parcelQL engine the table is necessary to provide, but in the [Excluence's query endpoint](/docs/api-endpoints#2-query) table can be omitted if it's not a subquery, the backend will automatically populate it with `flow_events`. 

However, it's important to highlight that the [query preview endpoint](/docs/api-endpoints#1-query-preview) requires the table to be explicitly specified because it uses the pure ParcelQL engine to generate the response.

### Order By

```ts
interface OrderByExpr extends ParcelQLSimpleColumn {
    order?: ('ASC' |'DESC');
};

interface ParcelQLOrderBy {
    expressions: OrderByExpr[];
}
```

#### 1. Order by a single column

Assume if we want to order the result using `timestamp` in `DESC` order. 

**Request Query**
```json
{
    "action": "query",
    "table": "flow_events",
    "order_by": {
        "expressions": [
            {
                "column": "timestamp",
                "order": "DESC"
            }
        ]
    }
}
```

**Generated SQL**
```sql
select * from `flow_events` order by `timestamp` DESC;
```

#### 2. Order by multiple columns
Let's understand this by taking the [A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed](/docs/parcelQL/functions#ac1e4f4f4c4257510topshotmarketv3momentlisted). 

Now let's create a complex ordering system. Let's order the result using `timestamp` in `DESC` order and `price` in `ASC` order.

**Request Query**
```json
{
    "action": "query",
    "table": "flow_events",
    "filter": {
        "column": "event",
        "operator": "=",
        "value": "A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed"
    },
    "order_by": {
        "expressions": [
            {
                "column": "timestamp",
                "order": "DESC"
            },
            {
                "column": ["payload", "price"],
                "type": "decimal",
                "order": "ASC"
            }
        ]
    }
}
```

**Generated SQL**
```sql
select * from `flow_events` where (`event` = 'A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed') order by `timestamp` DESC, (`payload`->>'price')::decimal ASC;
```

You will learn about column, typecasting and other things in the next part of the lesson.

### Group by

```ts
type ParcelQLGroupBy = Omit<ParcelQLColumn, 'alias'>[];
```
Group by accepts an array of ParcelQLColumn. You can learn about ParcelQLColumn [here](/docs/parcelQL/col-distinct-filter#complex-column-selection-and-manipulation).

Let's use the [A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed](/docs/parcelQL/functions#ac1e4f4f4c4257510topshotmarketv3momentlisted) to understand this. We'll create a quey to group all the events by price.

**Request Query**
```json
{
    "action": "query",
    "table": "flow_events",
    "columns": [
        {
            "column": ["payload", "price"],
            "type": "decimal",
            "alias": "price"
        }
    ],
    "filter": {
        "column": "event",
        "operator": "=",
        "value": "A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed"
    },
    "group_by": [
        {
            "column":"price"
        }
    ]
}
```

**Generated SQL**
```sql
select (`payload`->>'price')::decimal as `price` from `flow_events` where (`event` = 'A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed') group by `price`;
```

### Having

Using having clause is same as using filter, but it's applied after the group by clause. You can learn about filter clause [here](/docs/parcelQL/filter.md).

### Limit and Offset

Limit and Offset are same as SQL. You can learn about them [here](https://www.postgresqltutorial.com/postgresql-limit/).

If we wanted to use limit on the `GroupBy` query we created above, we can do it like this:

**Request Query**
```json
{
    "action": "query",
    "table": "flow_events",
    "columns": [
        {
            "column": ["payload", "price"],
            "type": "decimal",
            "alias": "price"
        }
    ],
    "filter": {
        "column": "event",
        "operator": "=",
        "value": "A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed"
    },
    "group_by": [
        {
            "column":"price"
        }
    ],
    "limit": 4
}
```

**Generated SQL**
```sql
select (`payload`->>'price')::decimal as `price` from `flow_events` where (`event` = 'A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed') group by `price` limit 4'
```

**Response**
```json
{
  "data": [
    {
      "price": "1.00000000"
    },
    {
      "price": "2.00000000"
    },
    {
      "price": "3.00000000"
    },
    {
      "price": "4.00000000"
    }
  ]
}
```

Same way we can use `Offset`.

**Request Query**
```json
{
    "action": "query",
    "table": "flow_events",
    "columns": [
        {
            "column": ["payload", "price"],
            "type": "decimal",
            "alias": "price"
        }
    ],
    "filter": {
        "column": "event",
        "operator": "=",
        "value": "A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed"
    },
    "group_by": [
        {
            "column":"price"
        }
    ],
    "limit": 4,
    "offset": 2
}
```

**Generated SQL**
```sql
select (`payload`->>'price')::decimal as `price` from `flow_events` where (`event` = 'A.c1e4f4f4c4257510.TopShotMarketV3.MomentListed') group by `price` limit 4 offset 2;
```

**Response**
```json
{
  "data": [
    {
      "price": "3.00000000"
    },
    {
      "price": "4.00000000"
    },
    {
      "price": "5.00000000"
    },
    {
      "price": "6.00000000"
    }
  ]
}
```