// Course-supplied Azure Functions Node.js v3-style function.
// Confirm compatibility with the target Function App before deployment.
module.exports = async function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob.");
    context.log("********Azure Function Started********");

    let result = true;

    try {
        context.log(myBlob.toString());
        JSON.parse(myBlob.toString().trim().replace("\n", " "));
    } catch (exception) {
        context.log(exception);
        result = false;
    }

    if (result) {
        context.bindings.stagingFolder = myBlob.toString();
        context.log("********File Copied to Staging Folder Successfully********");
    } else {
        context.bindings.rejectedFolder = myBlob.toString();
        context.log("********Invalid JSON File Copied to Rejected Folder Successfully********");
    }

    context.log("*******Azure Function Ended Successfully*******");
};