module.exports = {
	testEnvironment: "node",
	roots: ["<rootDir>/"],
	testMatch: ["**/test/*.test.ts", "**/lib/**/*.test.ts"],
	transform: {
		"^.+\\.tsx?$": "@swc/jest",
	},
};
