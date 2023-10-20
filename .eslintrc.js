/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
    extends: 'airbnb',
    plugins: ['import'],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': ['off'],
    },
};
