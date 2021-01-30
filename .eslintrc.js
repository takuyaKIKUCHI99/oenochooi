module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    // ------- Plugins recommended common settings -------
    "airbnb/hooks",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "prettier/standard",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: "./tsconfig.eslint.json", // Path for TypeScript compile setting file
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    'prefer-arrow',
    "prettier",
    "react",
    "react-hooks",
  ],
  root: true, // To prevent from loading the settings in a parent directory
  rules: {
    // Whether or not to include blank lines between class member definitions
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    // Prohibit the use of the void operator as an expression
    "no-void": ["error", { allowAsStatement: true }],
    // To include a separating blank line between arbitrary syntax
    "padding-line-between-statements": [
      "error",
      {
        // Always add a separating blank line before 'return' statement
        blankLine: "always",
        prev: "*",
        next: "return",
      },
    ],
    // Prohibit the use of unused variables
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        // Allow only '_'
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "_",
        ignoreRestSiblings: false,
        varsIgnorePattern: "_",
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    // Unify function definition with Arrow function
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        // Add '.tsx' as eslint-config-airbnb limit with '.jsx' only
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": [
      "error",
      {
        // Allow writing that specifies the individual props
        html: "enforce",
        custom: "enforce",
        explicitSpread: "ignore",
      },
    ],
    // To avoid 'no-use-before-define' error, refer to the following link for details
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
  },
  // Overriding the settings for files that matches
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/prop-types": "off", // Disabling the rules to force the definition of propTypes
      },
    },
  ],
  // Additional sharing settings
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"], // To avoid an error for calling with an absolute path
      },
    },
  },
};
