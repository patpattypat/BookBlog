module.exports = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageDirectory: "coverage", // or any other directory you prefer
  coverageReporters: ["lcov", "text", "json"], // ensure 'lcov' is included
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Specify which files to collect coverage for
    "!src/**/*.test.{js,jsx,ts,tsx}", // Optional exclusion pattern if you don't want to cover test files
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest", // Ensure babel handles TypeScript files
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Setup jest-dom for extended matchers
  moduleNameMapper: {
    // If you are using absolute imports or aliased paths, configure them here.
  },
  testMatch: [
    "**/?(*.)+(spec|test).[jt]s?(x)", // Matches .test.tsx and .spec.tsx files
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(@testing-library/react|@testing-library/dom)/)",
  ],
};
