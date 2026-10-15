# Azure Vehicle Data Pipeline

An end-to-end learning project for ingesting vehicle/IoT JSON data from Amazon S3 into Azure Data Lake Storage Gen2, validating it with Azure Functions, and preparing staged data for Azure SQL Database.

**Status:** In progress. Not all components have been deployed or tested end to end.

## Intended flow
Amazon S3 → Azure Data Factory → ADLS Gen2 landing → Azure Function JSON validation → staging/rejected paths → Azure SQL Database.

## Repository structure
- `docs/`: requirements, architecture, setup, data flow, security, testing, troubleshooting
- `architecture/`: Mermaid diagram source
- `function/`: Azure Functions source and configuration templates
- `pipelines/`: ADF notes
- `sql/`: database implementation notes
- `samples/`: synthetic valid and invalid JSON inputs

## Current learning resources
| Resource | Name / notes |
|---|---|
| Resource group | `vehicle_project` |
| ADLS Gen2 | `vehicle0629` |
| Azure Data Factory | `azureadfvehicle` |
| Key Vault | `vehicle-key` |
| Function App | `vehicle-function` (Flex Consumption; Node.js 22 selected) |
| S3 bucket | `iot-data-onkar` |
| Azure SQL Database | To be documented after configuration |

Resource notes do not imply that each component is fully configured or tested.

## Security
Never commit AWS keys, Azure secrets, passwords, tokens, SAS URLs, or credential-bearing connection strings. Use Key Vault, managed identities, and least-privilege access.

## Compatibility note
The course function uses the older Azure Functions Node.js v3 model (`module.exports`, `context.bindings`, and `function.json`). The Function App was created with Node.js 22 on Flex Consumption. Confirm runtime and programming-model compatibility before deployment; do not assume the tutorial code will deploy unchanged.

See `docs/` for detailed documentation and `architecture/architecture.mmd` for the diagram source.
