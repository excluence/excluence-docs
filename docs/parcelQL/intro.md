---
sidebar_position: 1
---

# ParcelQL Introduction

## Reason to develop

In contrast to other event indexers that are limited in serving diverse queries and often prioritize common ones like NFT metadata or owner history, the Flow ecosystem currently lacks matured API providers catering to these unique needs. 

However, our team saw an exciting opportunity during the Flow to the Future Hackathon 2, where we crafted a project — a marketplace aggregator akin to OpenSea Pro. This project indexed data from multiple NFT marketplaces on the Flow blockchain, offering a plethora of valuable API endpoints. These endpoints included NFT listing data, NFT purchase data, NFT owner history, marketplace sales and volume data, NFT rarity ranking, and much more.

So, we thought to experiment with an API provider where developers could write their query and extract the data from the event indexers. To realize this we needed a way for the users to send their SQL queries to our database and accepting raw SQL strings was pretty much an unfeasible solution since it will never turn into a real-world product.

To bring the concept of customizable queries to life, we explored a novel approach. Instead of accepting raw SQL strings, which posed challenges for real-world implementation, we devised a user-friendly solution—a simple Json-based query language. This language seamlessly translates into SQL statements, granting us control over what and how much data can be accessed.

## Features

As of now, ParcelQL supports the following features:
1. Column selection, Distinct column with Filters.
2. JSON data type query.
3. Joins
4. Aggregation and Window function.
5. Group by, Having, and Order by clauses.
6. Subquery and ON clause.
7. Offset and Limit.
8. Some functions like `DATE_TRUNC` and `interval`.