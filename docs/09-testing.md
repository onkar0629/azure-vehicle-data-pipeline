# 9. Testing Plan

Do not mark a test as passed until it has been run and the result verified.

| Test ID | Scenario | Expected result | Status |
|---|---|---|---|
| T-01 | ADF connects to S3 | Connection test succeeds | Not run |
| T-02 | Copy an existing S3 object to ADLS Gen2 | File appears at expected landing path | Not run |
| T-03 | Upload valid JSON to trigger path | Function runs and content reaches staging | Not run |
| T-04 | Upload malformed JSON to trigger path | Function runs and content reaches rejected path | Not run |
| T-05 | Upload multiline JSON | Parsing behaves as expected | Not run |
| T-06 | Load staging data into Azure SQL Database | Values and row counts reconcile | Not run |
| T-07 | Run full pipeline | Expected activities complete and outputs are verified | Not run |
| T-08 | Use invalid source prefix | Error is diagnosable | Not run |

## Samples
- Valid input: [../samples/valid-vehicle.json](../samples/valid-vehicle.json)
- Invalid input: [../samples/invalid-vehicle.json](../samples/invalid-vehicle.json)

## Evidence to record
For each test, record date/time and timezone, test filename, expected/actual result, ADF run ID or Function invocation, destination and verification method, sanitized error, and resolution. Do not include credentials or sensitive payloads.