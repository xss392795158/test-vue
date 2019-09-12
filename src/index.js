import Vue from 'vue';
import App from './App'

new Vue({
  // el: '#app',
  data: {
    // message: 'dsxs'
  },
  methods: {// 外层的
    
  },
  // props: {
  //   name:this.name,
  //   age:this.age
  // },
  render(h) {
    return h(App)
    /* return h('div', {// div 节点属性
      template: '',
      domProps: { // ok
        innerHTML: 'xxx',
        // value: 23
      },
      'class': '',
      style: {
        color: 'red',
        fontSize: '14px'
      },
      attrs: {
        type: String,
        innerHTML: ''
      },
      on: { // ok
        'click': function(event) {
          this.$router.push('页面地址')
        },
        input: function(event) {
          self.$emit('input',event.target.value)
        }
      }
    }, [// 内部内容

    ]) */
  }
}).$mount('#app')