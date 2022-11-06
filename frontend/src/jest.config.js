// Add any custom config to be passed to Jest
const customJestConfig = {
  root: './src',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    // Handle module aliases
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^pages/(.*)$': '<rootDir>/pages/$1',
    '^nqueens/(.*)$': '<rootDir>/nqueens/$1',
  },
  testEnvironment: 'node',
}

module.exports = customJestConfig;