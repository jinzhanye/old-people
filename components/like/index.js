// components/like/index.js
const LIKE_IMG_PATH = 'images/like.png';
const DIS_LIKE_IMG_PATH = 'images/like@dis.png';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 8,
    },
    like: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    img: DIS_LIKE_IMG_PATH,
  },

  observers: {
    like(isLike) {
      this.setData({
        img: isLike ? LIKE_IMG_PATH : DIS_LIKE_IMG_PATH,
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle() {
      this.triggerEvent('like', this.properties);
    }
  }
});
