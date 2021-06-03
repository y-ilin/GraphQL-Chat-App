module.exports = {
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: true,
  modulePaths: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/styleMock.js",
  },
};
