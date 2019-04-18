Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  testTap(event) {
    console.log(event);
    console.log('页面js没有 methods 对象');
  }
});
