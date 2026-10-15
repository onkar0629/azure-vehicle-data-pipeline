# 1. Project Overview

## Purpose
This project demonstrates a practical ingestion pipeline for vehicle/IoT JSON files. Files originate in Amazon S3, are copied into Azure Data Lake Storage Gen2 (ADLS Gen2), validated, and prepared for downstream loading into Azure SQL Database.

## Business problem
Incoming files can be missing, malformed, or structurally invalid. Loading unvalidated files can cause downstream failures or unreliable reporting. The pipeline separates valid input from rejected input and records execution details for troubleshooting.

## Goals
- Automate source-to-cloud ingestion.
- Retain incoming files in a landing area.
- Validate JSON before downstream use.
- Separate valid and invalid content.
- Load staged data to a relational database.
- Keep implementation, architecture, and runbooks in version control.

## Scope
**In scope:** Amazon S3, Azure Data Factory, ADLS Gen2, Key Vault references, Azure Function blob trigger, staging/rejected routing, Azure SQL Database, testing and troubleshooting.

**Initial exclusions:** streaming analytics, complex BI, and infrastructure-as-code (may be added later).

## Status
In progress. Some cloud resources have been created during learning; Azure Function deployment and end-to-end behavior still need validation. Record test outcomes in [09-testing.md](09-testing.md).