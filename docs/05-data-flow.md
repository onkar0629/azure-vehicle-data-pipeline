# 5. Data Flow

## Stage 1 — Amazon S3 source
- Bucket recorded for this project: `iot-data-onkar`.
- Confirm an actual object key/prefix before configuring the ADF source.
- S3 prefixes are inferred from object keys; a folder-like prefix may not exist if no object matches it.

## Stage 2 — Azure Data Factory
- Linked service authenticates to S3.
- Source dataset identifies the actual bucket and object/prefix.
- Sink dataset points to ADLS Gen2 landing.
- ADF copy activity records status in Monitor.

## Stage 3 — ADLS Gen2 landing
Landing is intended to retain incoming files before validation. The discussed destination layout is `landingfolder/YYYY/MM/DD/`.

Example ADF expression for the sink folder:
```text
@concat('landingfolder/', formatDateTime(utcnow(), 'yyyy'), '/', formatDateTime(utcnow(), 'MM'), '/', formatDateTime(utcnow(), 'dd'), '/')
```
Confirm the expression is assigned to the intended sink path/dataset parameter. Do not use it for the S3 source unless the dated prefix exists there.

## Stage 4 — JSON validation
The course function trims the input and attempts `JSON.parse`, after replacing the first newline occurrence with a space. Parsing checks JSON syntax only, not required business fields or schema.

## Stage 5 — Routing
Intended outcome: valid JSON → staging; invalid JSON → rejected storage. Actual behavior depends on the Azure Function bindings and metadata as well as code.

## Stage 6 — SQL loading
ADF is intended to load staged data to Azure SQL Database. Add table definitions, mappings, load method, and reconciliation evidence once implemented.