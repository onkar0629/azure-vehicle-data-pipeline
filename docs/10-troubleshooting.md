# 10. Troubleshooting

## S3 prefix not found
1. Browse the bucket and identify an actual object key.
2. Point the source dataset at that existing key/prefix.
3. Do not assume a dated prefix exists.
4. Apply date partitioning to the sink if that matches the design.

## AWS identity cannot list buckets
1. Confirm which operation the linked-service test invokes.
2. Determine if the connector can target a specific bucket or requires a list permission for testing.
3. Prefer narrow permissions; avoid unrestricted `s3:*` by default.
4. Retest after adjusting the policy.

## Key Vault access denied
1. Confirm whether the vault uses RBAC or access policies.
2. Ensure the principal is the actual ADF managed identity.
3. Grant only required secret-read permissions or role.
4. Allow for permission propagation, then retest.
5. Never share secret values in screenshots.

## Function code editor unavailable
Check hosting plan/runtime and use a supported local development/deployment workflow such as VS Code or Azure Functions Core Tools if needed. Confirm the deployed function metadata matches the programming model.

## Function triggers but routing fails
1. Verify trigger path and storage connection.
2. Confirm output binding names match `stagingFolder` and `rejectedFolder`.
3. Confirm destination paths and containers.
4. Test one small valid and one malformed input.
5. Distinguish syntax parsing from schema validation.

## General diagnosis
Find the failed activity or invocation, capture the sanitized error, identify the layer, change one setting at a time, rerun a small test, then record the verified root cause and fix.