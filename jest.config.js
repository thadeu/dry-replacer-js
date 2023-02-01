module.exports = {
  bail: true,
  forceExit: true,
  transform: { '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin' },
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
}