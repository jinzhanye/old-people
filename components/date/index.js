// components/date/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    date: {
      type: String,
      value: '2018-08-19',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
      '十二月'
    ],
    year: '',
    month: '',
    day: '',
  },

  lifetimes: {
    attached() {
      const [year, month, day] = this.properties.date.split('-');
      this.setData({
        year,
        month:this.data.months[Number(month)-1],
        day,
      });
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {}
});
