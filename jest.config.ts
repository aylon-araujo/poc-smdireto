import type { Config } from '@jest/types';

export default {
  roots: ['<rootDir>/tests'],
  coverageDirectory: 'coverage',
  collectCoverage: false,
  collectCoverageFrom: [
    'tests/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/styles/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/config/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/tests/**/*.[jt]sx', '**/?(*.)+(spec|test|tests).[tj]s?(x)'],
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.out/', '/public/'],
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest',
    '^.+\\.scss$': 'jest-scss-transform',
  },
  moduleNameMapper: {
    '@/tests/(.*)$': '<rootDir>/tests/$1',
    '@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.scss$': 'identity-obj-proxy',
    '^.+\\.css$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx|ts|tsx)$',
  ],
} as Config.InitialOptions;
