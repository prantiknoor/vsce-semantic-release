module.exports = {
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/exec",
        ["@semantic-release/git", {
            "assets": ["CHANGELOG.md", "package.json"],
            "message": "chore(release): ${nextRelease.version}\n\n${nextRelease.notes}"
        }]
    ],
    "prepareCmd": "yarn compile"
};
