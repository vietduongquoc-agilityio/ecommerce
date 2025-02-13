const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const customJestConfig = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/*.stories.tsx',
    '!**/*.props.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/pages/api/**',
    '!<rootDir>/types/**',
    '!**/*fileSystem.ts',
    '!<rootDir>/assets/**',
    '!<rootDir>/.storybook/**',
    '!<rootDir>/storybook-static/**',
    '!<rootDir>/.eslintrc.js',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@app/(.*)': '<rootDir>/app/$1',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@services/(.*)$': '<rootDir>/services/$1',
    '^@themes/(.*)$': '<rootDir>/themes/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@matched-type/(.*)$': '<rootDir>/types/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@store/(.*)$': '<rootDir>/store/$1',
    '^@mocks/(.*)$': '<rootDir>/__mocks__/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
