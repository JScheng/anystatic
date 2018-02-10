module.exports = {
    "extends": ["eslint:recommended"],
    "rules": {
        semi: [2, 'never'],
        "no-console": ["error", {
            "allow": ["warn", "error", "info"]
        }]
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script"
    },
    "globals": {
    },
    "env": {
        "node": true,
        "es6": true,
        "mocha": true
    }
}