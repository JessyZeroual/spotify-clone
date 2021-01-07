module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-native", "prettier"],
  parserOptions: {
    sourceType: "module"
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react/prop-types": 0,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 0,
    "prettier/prettier": 2,
    "import/no-unresolved": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ]
  }
};
