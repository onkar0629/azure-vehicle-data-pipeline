# 8. Security and Secrets

## Never commit
- AWS access keys or secret access keys.
- Azure service principal credentials or access tokens.
- Key Vault secret values, SAS tokens, SQL passwords, or credential-bearing connection strings.
- Local Azure Functions settings containing secrets.

A `.gitignore` rule helps but does not replace reviewing staged changes before each commit.

## Access patterns
- Use the ADF managed identity to retrieve Key Vault secrets where supported.
- Grant the identity only required secret-read permissions.
- Use bucket/prefix-scoped AWS IAM permissions where feasible.
- Give Azure resources only access required for their tasks.
- Review access policies after the course setup succeeds.

## Safe troubleshooting
Redact key IDs, secret values, tokens, SAS query strings, and passwords in screenshots and logs. Share error codes and non-secret configuration instead.

## If a secret leaks
Revoke or rotate it promptly. Deleting it from the latest version of a file does not necessarily remove it from Git history.