// src/config/configuration.ts
export default () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT ?? '3000', 10),

  jwtSecret: process.env.JWT_SECRET,
  jwtPrefix: process.env.JWT_PREFIX || 'Bearer',

  app: {
    name: process.env.APP_NAME || 'FarasiChat',
    description: process.env.APP_DESCRIPTION || 'Swahili AI Assistant',
  },

  database: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'farasi',
    logging: process.env.DB_LOGGING === 'true',
    synchronize: process.env.DB_SYNC === 'true',
  },

  hf: {
    apiUrl: process.env.HF_API_URL,
    apiKey: process.env.HUGGINGFACE_API_KEY,
  },
});
