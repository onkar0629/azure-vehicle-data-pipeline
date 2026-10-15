# Azure SQL Database

The planned pipeline loads validated data from ADLS Gen2 staging into Azure SQL Database.

Before implementation, document:
- Server and database names (non-sensitive identifiers only).
- Table DDL and column types.
- Source-to-target mapping.
- Insert/upsert and incremental-load strategy.
- Error handling and retries.
- Row-count and data-quality reconciliation queries.

Never commit passwords or credential-bearing connection strings.