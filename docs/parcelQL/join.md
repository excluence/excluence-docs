---
sidebar_position: 6
---

# Join

```ts
type JoinTypes = 'INNER' | 'LEFT' | 'RIGHT' | 'FULL';
```

```ts
export type ParcelQLJoin = {
    type: JoinTypes;
    on: ParcelQLFilter;
} & (
    | { table: string; alias?: string }
    | { table: ParcelQLQuery<'temporary_table'>; alias: string }
);
```

Tutorial will be added soon.