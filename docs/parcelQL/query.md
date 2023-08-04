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
    table: string | ParcelQLQuery<'subquery'>;
    columns?: ParcelQLColumn[];
    distinct?: ParcelQLDistinct;
    filter?: ParcelQLFilter;
    join?: ParcelQLJoin;
    group_by?: Omit<ParcelQLColumn, 'alias'>[];
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

The table property in the ParcelQLQuery interface represents the name of the table or a subquery on which the query is to be performed. It can be specified as either a string representing the table name or as a nested ParcelQLQuery with the action set to subquery.

**NOTE**: In parcelQL engine the table is necessary to provide, but in the [Excluence's query endpoint](http://localhost:3000/docs/api-endpoints#2-query) table can be omitted if it's not a subquery, the backend will automatically populate it with `flow_events`. 

However, it's important to highlight that the [query preview endpoint](http://localhost:3000/docs/api-endpoints#1-query-preview) requires the table to be explicitly specified because it uses the pure ParcelQL engine to generate the response.
