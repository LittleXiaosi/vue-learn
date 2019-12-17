module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
      'no-console': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unused-vars': 'off',
      'vue/no-unused-vars': 'off',
      'no-useless-escape': 'off',
      'no-undef': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
