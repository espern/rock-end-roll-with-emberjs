module.exports = {
  root: true,
  extends: ['peopledoc/ember-addon'],
  overrides: [
    {
      files: ['commitlint.config.js'],
      env: {
        browser: false,
        node: true
      },

      plugins: ['node']
    }
  ]
}
