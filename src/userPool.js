import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_UkGcr95ao",
    ClientId: "4sf4e4v0ead48led6gcuf0pip8"
}

export default new CognitoUserPool(poolData);