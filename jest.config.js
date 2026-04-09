const nextJest = require('next/jest')

const createNextJest = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createNextJest(customJestConfig)