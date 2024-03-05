import dynamoose from 'dynamoose'
import AWS from 'aws-sdk'


const ddb = new dynamoose.aws.ddb.DynamoDB({
    "credentials": {
        "accessKeyId": "fakeMyKeyId",
        "secretAccessKey": "fakeSecretAccessKey"
    },
    "region": "ap-south-1"
});
dynamoose.aws.ddb.set(ddb) ;
dynamoose.aws.ddb.local() 

export default dynamoose