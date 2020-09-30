module.exports = {
  extends: [
    'standard',
    'standard-react',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],
  parser: 'babel-eslint',
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
};
