---
sidebar_position: 3
---

# Security, Constraints & Limitationss

### Row Limit

Currently, each query will return a maximum of 100 rows. We want to ensure a smooth experience for everyone, so while you're welcome to provide offset and limit values in your queries, please note that any limit value exceeding 100 will be automatically enforced to return a maximum of 100 rows.

### Access control

In order to ensure data security and integrity, we want to highlight a critical aspect of our setup. When running queries on the backend, the PostgresSQL user operates as a read-only user. This means that the user is granted read-only access solely to the `flow_events` table.

### Automatic timeout

Our ACL (Access Control List) rules on the Postgres side ensure that any attempt to execute a writable SQL injection query will be thwarted.

Additionally, while our backend already employs prepared statements for enhanced security, we've implemented an extra layer of defense against potential SQL Injection attacks. In cases where an SQL Injection attempt aims to perform heavy queries and potentially overload the system, an automatic timeout of 8 seconds will be enforced, all queries will be subjected to a set timeout of `8 seconds` to produce results. If a query exceeds this time limit, it will be automatically terminated to maintain system stability.

### Rate limit

For the smooth operation of our API and to ensure fair usage for all developers, we have set a rate limit on the API endpoint. Each client is allowed a maximum of `10 queries per minute`.

### Limited data
Currently the API is in prototyping stage and we only have indexed limited amount of data.