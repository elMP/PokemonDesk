module.exports = {
  preset: 'ts-jest',
  //preset: 'jsdom',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  }
};