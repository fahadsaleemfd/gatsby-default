module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-styled-components/gatsby-browser.js'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false,"disableVendorPrefixes":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"src/images/icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"39a9fe633ec23c2c45c5bb2c6128705c"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
