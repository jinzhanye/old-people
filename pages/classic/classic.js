// pages/classic/classic.js
import { ClassicModel } from '../../models/classic.js'

const classicModel = new ClassicModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    periodical: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    classicModel.getList((data) => {
      if (data.length) {
        this.setData({
          periodical: data[0],
        });
      }
    });
  },

  onLike() {
    wx.showToast({
      title: 'update success',
      icon: 'success',
      duration: 1000,
    });
  }
});
