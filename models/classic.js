import { HTTP } from '../utils/http.js'

class ClassicModel extends HTTP {
  getList(successCb) {
    const list = wx.getStorageSync('classic');
    if (list) {
      successCb(list);
      return;
    }
    this.request({
      url: '1e67l8',
      success(data) {
        wx.setStorageSync('classic', data);
        successCb(data);
      },
    });
  }

  getOne(id, successCb) {
    const detail = wx.getStorageSync('detail');
    if(detail){
      successCb(detail);
      return;
    }
    this.request({
      url: `axgsk?id=${id}`,
      success(data) {
        wx.setStorageSync('detail', data);
        successCb(data);
      },
    });
  }
}

export { ClassicModel };
