module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended", 
    "plugin:vue/essential", 
    "plugin:@typescript-eslint/recommended", 
    "plugin:vue/vue3-recommended", 
    "eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": ["vue", "@typescript-eslint"],
  "rules": {}
};