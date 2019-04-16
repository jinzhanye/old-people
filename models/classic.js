import { HTTP } from '../utils/http.js'

class ClassicModel extends HTTP {
  getList(successCb) {
    const list = wx.getStorageSync('classic');
    if (list) {
      successCb(list);
      return;
    }
    this.request({
      url: 'jq3mw',
      success(data) {
        wx.setStorageSync('classic', data);
        successCb(data);
      },
    })
  }
}

export { ClassicModel };
