# 3. Architecture

## Logical flow
1. Vehicle/IoT JSON files are placed in Amazon S3.
2. Azure Data Factory (ADF) uses linked services to read S3 and write to ADLS Gen2.
3. ADF copies selected files to landing.
4. A blob-triggered Azure Function reads new content and attempts JSON parsing.
5. Valid and invalid content is routed to staging and rejected paths through configured output bindings.
6. ADF loads staged data into Azure SQL Database.
7. ADF Monitor and Function logs support diagnosis.

See [../architecture/architecture.mmd](../architecture/architecture.mmd).

## Current learning setup
- Resource group: `vehicle_project`
- ADLS Gen2 account: `vehicle0629` (hierarchical namespace enabled)
- ADF: `azureadfvehicle`
- Key Vault: `vehicle-key`
- Function App: `vehicle-function` (Flex Consumption; Node.js 22 selected)
- S3 bucket: `iot-data-onkar`

These notes record names from the learning setup, not proof that each service is fully configured.

## Implementation caveats
- The source dataset must point to an object/prefix that exists in S3. Date expressions belong on the sink if creating date-partitioned landing paths, unless the same prefix actually exists at source.
- Blob trigger storage connection, path, and output binding settings must be explicit.
- Output binding names alone do not create folders; they must match the function metadata.
- Course code uses the older Node.js v3 model. Validate its compatibility with the selected hosting plan/runtime before deployment.
- The diagram represents intended design, not verified end-to-end success.