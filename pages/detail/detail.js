// pages/detail/detail.js
import { ClassicModel } from '../../models/classic.js'

const classicModel = new ClassicModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 从 url 中 获取 id 参数
    const { id } = options;
    classicModel.getOne(id, (data) => {
      data.comments = data.comments.map((item) => {
        item.background = this.getRandomColor();
        return item;
      });

      this.setData({
        movie: data,
      });
    });
  },

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

});
