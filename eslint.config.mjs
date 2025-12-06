// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Custom overrides to keep repo lean while using Nuxt UI conventions
  rules: {
    // Relax super-opinionated template spacing rules
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['warn', {
      singleline: 10,
      multiline: 1
    }],

    // Allow occasional any in content-rich pages
    '@typescript-eslint/no-explicit-any': 'off'
  }
})
