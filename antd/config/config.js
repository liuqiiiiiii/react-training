// export default {};
// // 一开始它只是 export 了一个默认的空的对象 {}，并没有什么作用，但是在后面我们会用到。
// // 我们所说的页面是指由一个独立路由对应的 UI 界面

export default {
  singular: true,
  plugins: [
    ['umi-plugin-react', {
      // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
      antd: true
    }],
  ],
  routes: [{
    path: '/',
    component: './HelloWorld',
  }],
}
