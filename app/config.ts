function getEnvironmentVariable<T = undefined>(key: string, defaultValue: T, formatter?: (data: string) => T): T {
  const value = process.env[key];
  
  if (value === undefined) return defaultValue;  
  if (formatter) return formatter(value);
  return value as T;
}

function getEnvironmentVariableOrThrow<T = undefined>(key: string, formatter?: (data: string) => T): T {
  const value = process.env[key];
  
  if (value === undefined) throw new Error(`Missing environment variable: ${key}`);
  if (formatter) return formatter(value);
  return value as T;
}

const PORT = getEnvironmentVariableOrThrow<number>('PORT', (data) => parseInt(data, 10));
const HMR_PORT = getEnvironmentVariableOrThrow<number>('HMR_PORT', (data) => parseInt(data, 10));
const BASE_URL = getEnvironmentVariable<string>('BASE_URL', `http://localhost:${PORT}`);
const NODE_ENV = getEnvironmentVariable<string>('NODE_ENV', 'development');

export const config = {
  PORT,
  HMR_PORT,
  BASE_URL,
  NODE_ENV,
};