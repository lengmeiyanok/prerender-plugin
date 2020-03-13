const Prerender = require('./build/prerender')

let vueConfig =  {
  publicPath: '/',
  outputDir: 'dist',
  configureWebpack:{
    plugins:[]
  }
}


if(process.env.NODE_ENV === 'production'){
  vueConfig.configureWebpack.plugins.push(Prerender(vueConfig.outputDir))
}


module.exports = vueConfig
