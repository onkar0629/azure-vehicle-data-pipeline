# 2. Business Requirements

## Functional requirements

| ID | Requirement | Acceptance evidence |
|---|---|---|
| FR-01 | Read JSON files from configured S3 source | Connection test and successful copy run |
| FR-02 | Copy source files to ADLS Gen2 landing | File appears at expected landing path |
| FR-03 | Trigger validation when a blob arrives | Function invocation visible in logs |
| FR-04 | Parse incoming content as JSON | Valid syntax parses; malformed JSON is flagged |
| FR-05 | Route valid input to staging | Valid test file appears at configured destination |
| FR-06 | Route invalid input to rejected storage | Invalid test file appears at configured destination |
| FR-07 | Load staged data to Azure SQL Database | Row counts and values reconcile |
| FR-08 | Provide operational visibility | ADF run history and Function logs support diagnosis |

## Non-functional requirements
- **Security:** Never store credentials in source control; use Key Vault and least privilege.
- **Maintainability:** Version-control code, configuration examples, diagrams, and runbooks.
- **Reliability:** Distinguish invalid data from failures to process.
- **Traceability:** Record test input, expected/actual results, run or invocation reference, and date.
- **Cost awareness:** Use suitable low-cost learning settings and review idle resources.

## Assumptions to confirm
- Expected JSON schema and required fields are not yet defined.
- Exact source prefix and ADLS landing path must be confirmed from data.
- Staging/rejected paths and their output bindings must be confirmed.
- SQL schema and load strategy are pending documentation.