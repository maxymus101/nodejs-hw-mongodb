import dotenv from 'dotenv';

dotenv.config();
export const getEnvVar = (name, defaultValue) => {
  const value = process.env[name];

  if (!value && !defaultValue) {
    throw new Error(`Missing eviroment variable >>> process.env['${name}']`);
  }
  if (value) {
    return value;
  }

  return defaultValue;
};
