// components/pager/index.js

const LEFT_IMG = 'images/triangle@left.png';
const LEFT_IMG_DIS = 'images/triangle.dis@left.png';

const RIGHT_IMG = 'images/triangle@right.png';
const RIGHT_IMG_DIS = 'images/triangle.dis@right.png';

Component({
  externalClasses: ['example-outer-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
    },
    hasPrev: {
      type: Boolean,
    },
    hasNext: {
      type: Boolean,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftImg: LEFT_IMG,
    rightImg: RIGHT_IMG,
  },

  observers: {
    hasPrev(_hasPrev) {
      this.setData({
        leftImg: _hasPrev ? LEFT_IMG : LEFT_IMG_DIS,
      });
    },
    hasNext(_hasNext) {
      this.setData({
        rightImg: _hasNext ? RIGHT_IMG : RIGHT_IMG_DIS,
      });
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapLeft(data) {
      if(!this.properties.hasPrev){
        return;
      }
      this.triggerEvent('prev');
    },
    onTapRight() {
      if(!this.properties.hasNext){
        return;
      }
      this.triggerEvent('next');
    }
  }
});
