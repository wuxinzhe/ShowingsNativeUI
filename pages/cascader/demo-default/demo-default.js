// pages/cascader/demo-default/demo-default.js
Component({
  data: {
    name: '级联选择器',
    des: '常用语地区选择',
    provinces: [{
      id: 1,
      label: '福建省',
      children: [{
        id: 11,
        label: '厦门市',
        children: [{
          id: 111,
          label: '思明区'
        }, {
          id: 112,
          label: '湖里区'
        }, {
          id: 113,
          label: '海沧区'
        }]
      }, {
        id: 12,
        label: '漳州市',
        children: [{
          id: 121,
          label: '芗城区'
        }, {
          id: 122,
          label: '龙海区'
        }]
      }]
    }, {
      id: 2,
      label: '浙江省',
      children: [{
        id: 21,
        label: '杭州市',
        children: [{
          id: 211,
          label: '余杭区'
        }, {
          id: 212,
          label: '富阳区'
        }]
      }, {
        id: 22,
        label: '宁波市',
        children: [{
          id: 221,
          label: '江东区'
        }, {
          id: 222,
          label: '江北区'
        }]
      }]
    }]
  }
})
