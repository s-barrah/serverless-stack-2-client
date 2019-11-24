const dev = {
    s3: {
        REGION: process.env.REGION,
        BUCKET: process.env.REACT_APP_S3_BUCKET_DEV
    },
    apiGateway: {
        REGION: process.env.REGION,
        URL: process.env.REACT_APP_URL_DEV
    },
    cognito: {
        REGION: process.env.REGION,
        USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID_DEV,
        APP_CLIENT_ID: process.env.REACT_APP_APP_CLIENT_ID_DEV,
        IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID_DEV
    },
    STRIPE_KEY: process.env.REACT_APP_URL_STRIPE_KEY_DEV,
};

const prod = {
    s3: {
        REGION: process.env.REGION,
        BUCKET: process.env.REACT_APP_S3_BUCKET_PROD
    },
    apiGateway: {
        REGION: process.env.REGION,
        URL: process.env.REACT_APP_URL_PROD
    },
    cognito: {
        REGION: process.env.REGION,
        USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID_PROD,
        APP_CLIENT_ID: process.env.REACT_APP_APP_CLIENT_ID_PROD,
        IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID_PROD
    },
    STRIPE_KEY: process.env.REACT_APP_URL_STRIPE_KEY_PROD,
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
