export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "userPoolGroups": {
            "AdminGroupRole": "string"
        },
        "recipefrontend21bf653621bf6536": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        }
    },
    "function": {
        "recipefrontend21bf653621bf6536PostConfirmation": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        }
    },
    "api": {
        "recipefrontend": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}