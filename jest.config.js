module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["./node_modules/", "./public"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(jpg|jpeg|png|gif|svg)$": "jest-transform-stub",
  },
};
