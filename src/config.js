const dev = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-dcxed7uhe3p3"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://1kfcuktm80.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_EVoA0iV1j",
        APP_CLIENT_ID: "5894c3p6lun0gspv986k2aevjq",
        IDENTITY_POOL_ID: "us-east-1:446e2eee-f289-426e-a228-67b7899ae802"
    }
};

const prod = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-40xdf2xecpxp"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://debfogfruc.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_VwNCaH2Re",
        APP_CLIENT_ID: "18m0hpvrihsuv9ieb539hv0hqt",
        IDENTITY_POOL_ID: "us-east-1:b0552680-59c1-49aa-9637-c936a45c8b18"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
