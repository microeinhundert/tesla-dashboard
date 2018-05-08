module.exports = {
  root: true,
  'extends': [
    'plugin:vue/recommended',
    '@vue/airbnb'
  ],
  'rules': {
  // don't require .vue extension when importing
  'import/extensions': ['error', 'always', {
    'js': 'never',
    'vue': 'never'
  }],
  'one-var': ['error', 'always'],
  'max-len': 'off'
  }
}
