const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        // backend url
        target:
            'https://www.fastmock.site/mock/5903235a886ef1aa2f446afbe614596e/api',
        // env.VITE_HTTP_MOCK && env.VITE_MOCK ? createMockServer() : 'https://store.antdv.com',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          ['^'+ '/api']: '',
        },
      },
    },
  },
})
