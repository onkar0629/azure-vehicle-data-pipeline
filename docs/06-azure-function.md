# 6. Azure Function — JSON Validation

## Course source
The course-supplied JavaScript is stored in [../function/blob-trigger/index.js](../function/blob-trigger/index.js).

## Behavior
1. Logs the function start.
2. Logs blob content.
3. Tries to parse trimmed text as JSON after replacing the first newline with a space.
4. On successful parse, assigns content to `context.bindings.stagingFolder`.
5. On parse failure, assigns content to `context.bindings.rejectedFolder`.
6. Logs completion.

## Important review notes
- JSON parsing validates syntax, not business schema.
- `replace("\\n", " ")` replaces only the first matching newline; test multiline JSON and avoid changing payload unnecessarily.
- Logging the entire payload can expose data and create noisy logs. Prefer safe metadata in production.
- Assigning a binding name in JavaScript does not define its destination. The binding must be configured in function metadata.
- The function uses the older Node.js v3 model. Confirm metadata and runtime/deployment compatibility before deploying to the current Function App.

## Configuration checklist
- [ ] Blob trigger input path and storage connection configured.
- [ ] Trigger points at the intended landing location.
- [ ] `stagingFolder` output binding configured.
- [ ] `rejectedFolder` output binding configured.
- [ ] Destination paths confirmed.
- [ ] Runtime and programming model compatibility verified.
- [ ] Valid and malformed payloads tested.
- [ ] Logs avoid secrets and unnecessary payload content.

See [09-testing.md](09-testing.md).