module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
        '@vue/typescript/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    plugins: ['prettier'],
    rules: {
        'no-param-reassign': 0,
        'vue/require-default-prop': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'warn',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                '': 'never',
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.stories.*',
                    '**/.storybook/**/*.*',
                    '**/*.spec.ts',
                    '**/*.test.ts',
                ],
                peerDependencies: true,
            },
        ],
        'no-useless-space': 0,
        'import/prefer-default-export': 0,
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
            },
        },
    },
};
