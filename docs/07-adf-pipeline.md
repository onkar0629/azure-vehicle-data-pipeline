# 7. Azure Data Factory Pipeline

## Current learning setup
- Data Factory: `azureadfvehicle`
- Pipeline seen during setup: `ingestion_s3_adls`
- Dataset names mentioned: `Json1`, `s3_json_ds`
- S3 bucket: `iot-data-onkar`
- ADLS Gen2 account: `vehicle0629`

Confirm these values in ADF before treating them as an operational runbook.

## Intended design
1. Source dataset points at an existing S3 object/prefix.
2. Copy activity reads source files.
3. Sink dataset writes to ADLS Gen2 landing.
4. ADF Monitor is used to inspect activity output and errors.
5. Function validates newly landed blobs.
6. ADF loads validated/staged content into Azure SQL Database.

## S3 missing-prefix errors
Inspect the bucket and use an object key/prefix that actually exists. A date prefix like `2026/10/14/` fails if no objects use it. Apply date-based partitioning to the sink if required.

## Credentials and permissions
- Prefer Key Vault reference for the secret access key.
- Confirm the actual ADF managed identity has read access to the required Key Vault secret.
- AWS identity needs only the S3 actions required by the connector and source bucket; avoid unrestricted `s3:*` by default.

## Record after validation
Triggers, dataset parameters, source prefix, sink path, overwrite policy, retry/timeout settings, pipeline/activity run ID, test results, and SQL mapping.