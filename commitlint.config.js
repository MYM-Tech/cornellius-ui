module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [2, 'always', ['sentence-case']],
        'type-case': [2, 'always', ['start-case']],
        'type-enum': [
            2,
            'always',
            [
                'Chore',
                'Feat',
                'Fix',
                'Ui',
                'Upgrade',
                'Update',
                'Build',
                'Breaking',
                'Rollback',
                'Lint',
                'Test',
                'Refactor',
                'Clean',
                'Docs',
                'Access',
                'Review',
            ],
        ],
    },
};
