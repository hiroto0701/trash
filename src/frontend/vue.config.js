module.exports = {
  devServer: {
    watchOptions: {
      // 書いておかないと開発環境でHotReloadが働かない
      poll: true
    }
  },
}