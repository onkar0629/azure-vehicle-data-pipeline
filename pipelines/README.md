# ADF Pipelines

Record pipeline names, datasets, linked services (names only), parameters, triggers, and actual run evidence here.

Current notes:
- Data Factory: `azureadfvehicle`
- Pipeline seen during setup: `ingestion_s3_adls`
- Dataset names mentioned: `Json1`, `s3_json_ds`

Do not commit exported definitions if they contain secrets or sensitive connection details. Prefer Key Vault references and managed identities.