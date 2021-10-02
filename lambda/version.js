const aws = require('aws-sdk');
// import aws from 'aws-sdk';

const lambda = new aws.Lambda();

async function getCurrentVersionByAlias(alias) {
    const data = await lambda.getAlias({
        FunctionName: 'express_test',
        Name: alias || 'rolling' 
    }).promise();
    
    return data?.FunctionVersion
}
