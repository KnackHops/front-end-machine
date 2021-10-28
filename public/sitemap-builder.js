require('babel-register')({
    presets: ["es2015", "react"]
});

const router = require('./Router').default;
const siteMap = require('react-router-sitemap').default;

(
    new siteMap(router)
    .build('http://zaccs-panciteria.com')
    .save('./sitemap.xml')
)