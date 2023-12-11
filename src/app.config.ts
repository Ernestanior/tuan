export default defineAppConfig({
  pages: [
    'pages/food/index',
    'pages/index/index',
    'pages/user/index',
    'pages/room/index',
    'pages/game/index',
    'pages/gender/index',

  ],
  tabBar:{
    custom:true,
    color:"#8a8a8a",
    selectedColor:"#ff0000",
    backgroundColor:"#fafafa",
    borderStyle:"black",
    list:[
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'assets/tabbar/home-fill.png',
        iconPath: 'assets/tabbar/home.png',
        text: '首页2'
      },
      {
        pagePath: 'pages/food/index',
        selectedIconPath: 'assets/tabbar/menu-fill.png',
        iconPath: 'assets/tabbar/menu.png',
        text: '拼团2'
      },
      {
        pagePath: 'pages/room/index',
        selectedIconPath: 'assets/tabbar/shop-fill.png',
        iconPath: 'assets/tabbar/shop.png',
        text: '订单2'
      },
      {
        pagePath: 'pages/user/index',
        selectedIconPath: 'assets/tabbar/user-fill.png',
        iconPath: 'assets/tabbar/user.png',
        text: '个人中心2'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
