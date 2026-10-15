# 4. Setup Guide

## Prerequisites
- Git, GitHub, and Visual Studio Code.
- Node.js/npm suitable for the selected Function App runtime.
- Azure subscription access to configure required resources.
- AWS identity with the minimum S3 permissions required by ADF.
- Access to ADF, ADLS Gen2, Key Vault, Azure Functions, and Azure SQL Database.

## Known resource names

| Service | Resource name |
|---|---|
| Resource group | `vehicle_project` |
| ADLS Gen2 | `vehicle0629` |
| Azure Data Factory | `azureadfvehicle` |
| Key Vault | `vehicle-key` |
| Function App | `vehicle-function` |
| S3 bucket | `iot-data-onkar` |

## Security practices
1. Store AWS secret access keys in Key Vault rather than source files.
2. Use the ADF managed identity for Key Vault access where supported.
3. Grant minimum necessary permissions for the required secret and S3 bucket.
4. Never commit `local.settings.json`, `.env`, AWS credential files, SAS tokens, or credential-bearing connection strings.
5. Redact credentials from screenshots before sharing.

## Function development
The course function uses the Node.js v3 model. Before deploying:
- Check local Node.js and npm versions.
- Install the Azure Functions extension for VS Code.
- Verify programming-model/runtime compatibility for the target Function App.
- Confirm trigger metadata, output bindings, and paths.
- Keep local-only settings out of Git.

Document regions, paths, dataset names, and non-secret settings. Do not record secret values.