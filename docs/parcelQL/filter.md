---
sidebar_position: 4
---

# Filter

```ts
export type ParcelQLFilter =
    | { and: ParcelQLFilter[] }
    | { or: ParcelQLFilter[] }
    | CompFilter
```

## Simple comparison filter

Currently, ParcelQL supports following comparison operators
```ts
type ComparisonOps = '='| '>'| '<'| '>='|'<='|'<>'|'IN'|'NOT IN'|'LIKE'|'ILIKE'
```

```ts
export interface ComparisonFilterColumn
    extends Partial<ParcelQLSimpleColumnWithCase> {
    function?: ParcelQLAggregationFunction | ParcelQLColumnFunction;
    parameters?: (unknown | ParcelQLSimpleColumnWithCase)[];
}

interface _CompFilter {
    column: string | string[] | ComparisonFilterColumn;
    operator: ComparisonOps;
    type?: string | string[];
}

export type CompFilter = _CompFilter &
    (
        { value: unknown } 
        | { rightColumn: ComparisonFilterColumn }
    );
```

### 1. Comparing a column to value
Let's create a simple query to select even with `eventName` equal to `Deposit`.
```json
{
    ...,
    "filter": {
        "column": "eventName",
        "operator": "=",
        "value": "Deposit"
    }
}
```

### 2. Typecasting a column and comparing to a value

Query to select all `ListingCompleted` event with `salePrice > 10` 

```json
{
    ...,
    "filter": {
        "column": ["payload", "salePrice"],
        "type": "decimal",
        "operator" : ">",
        "value": 10
    }
}
```
