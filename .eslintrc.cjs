module.exports = {
    env: {
        node: true,
    },
    extends: ['@nuxt/eslint-config', 'prettier'],
    rules: {
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        'vue/no-multiple-template-root': 'off',
        'no-undef': 'off',
        'vue/multi-word-component-names': 'off',
    },
};
