const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false // 关闭 ESLint 检查，包括组件命名规则检查
});