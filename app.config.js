const nunjucks = require('nunjucks');
const fetch = require('node-fetch');
const path = require('path');

nunjucks.configure('./views', {
  watch: true
});

module.exports = {
  data: () => ({
    title: 'Attics'
  }),
  models: {},
  compiler: (template, data) => (nunjucks.renderString(template, data))
}