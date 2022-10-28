module.exports = {
    env: {
        es6: true,
        node: true,
    },
    rules: {
        'max-len': [2, 160, 4, { ignoreUrls: true }],
        'no-console': 2,
        camelcase: 'off',
        'padded-blocks': 'off',
        indent: ['error', 4],
        'no-plusplus': 'off',
        'no-param-reassign': 'off',
        'import/no-extraneous-dependencies': 0,
        'no-await-in-loop': 'off',
        'no-continue': 'off',
        'no-mixed-operators': 'off',

    },
    extends: 'airbnb-base',
};
