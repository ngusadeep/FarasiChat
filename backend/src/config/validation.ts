// src/config/validation.ts
import * as Joi from 'joi';

export const validate = (config: Record<string, unknown>) => {
  const schema = Joi.object({
    
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development'),
    PORT: Joi.number().default(3000),

    APP_NAME: Joi.string().required(),
    APP_DESCRIPTION: Joi.string().required(),

    JWT_SECRET: Joi.string().required(),
    JWT_PREFIX: Joi.string().default('Bearer'),

    DB_TYPE: Joi.string().valid('postgres').required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().default(5432),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().allow('').required(),
    DB_DATABASE: Joi.string().required(),
    DB_SYNC: Joi.boolean().default(false),
    DB_LOGGING: Joi.boolean().default(false),
    DB_SSL: Joi.string().valid('true', 'false', 'prefer').default('false'),

    HF_API_URL: Joi.string().uri().optional(),
    HUGGINGFACE_API_KEY: Joi.string().optional(),
  });

  const { error, value } = schema.validate(config, {
    allowUnknown: true,
    abortEarly: false,
  });

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }
  return value;
};
