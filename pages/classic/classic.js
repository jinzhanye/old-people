// pages/classic/classic.js
import { ClassicModel } from '../../models/classic.js'

const classicModel = new ClassicModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    periodicals: [],
    periodical: {},
    hasPrev: false,
    hasNext: false,
    idx: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    classicModel.getList((data) => {
      if (data.length) {
        this.setData({
          periodicals: data,
          periodical: data[0],
          hasNext: true,
        });
      }
    });
  },

  onLike() {
    const { likeStatus, favNums } = this.data.periodical;
    this.setData({
      periodical: {
        ...this.data.periodical,
        favNums: likeStatus ? favNums - 1 : favNums + 1,
        likeStatus: !likeStatus,
      },
    });
    setTimeout(() => {
      wx.showToast({
        title: 'update success',
        icon: 'success',
        duration: 1000,
      });
    }, 500);
  },

  updatePeriodical(idx) {
    console.log('updatePeriodical');
    this.setData({
      idx,
      periodical: this.data.periodicals[idx],
    });
  },

  onPrev() {
    const idx = this.data.idx - 1;
    this.updatePeriodical(idx);

    if (idx === 0) {
      this.setData({
        hasPrev: false,
        hasNext: true,
      });
    }
  },

  onNext() {
    const idx = this.data.idx + 1;
    this.updatePeriodical(idx);

    if (idx === this.data.periodicals.length - 1) {
      this.setData({
        hasPrev: true,
        hasNext: false,
      });
    }
  }
});
