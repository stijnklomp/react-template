export default {
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		"<rootDir>/**/*.js",
		"<rootDir>/**/*.ts",
		"<rootDir>/**/*.jsx",
		"<rootDir>/**/*.tsx"
	],
	coverageDirectory: "<rootDir>/tests/unit/coverage",
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"/doc/",
		"/tests/",
		"/public/",
		"/diagnostics/"
	],
	coverageReporters: ["text", "json"],
	reporters: [
		"default",
		["jest-junit", { outputDirectory: "<rootDir>/tests/unit/reports" }]
	],
	testEnvironment: "node",
	testMatch: ["**/specs/**/*.[jt]s?(x)"]
}
