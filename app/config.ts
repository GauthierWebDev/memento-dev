function getEnvironmentVariable<T = undefined>(key: string, defaultValue: T, formatter?: (data: string) => T): T {
  const value = process.env[key];
  
  if (value === undefined) return defaultValue;  
  if (formatter) return formatter(value);
  return value as T;
}

const PORT = getEnvironmentVariable<number>('PORT', 3000, (data) => parseInt(data, 10));
const HMR_PORT = getEnvironmentVariable<number>('HMR_PORT', PORT + 1, (data) => parseInt(data, 10));
const BASE_URL = getEnvironmentVariable<string>('BASE_URL', `http://localhost:${PORT}`);
const NODE_ENV = getEnvironmentVariable<string>('NODE_ENV', 'development');

export const config = {
  PORT,
  HMR_PORT,
  BASE_URL,
  NODE_ENV,
};