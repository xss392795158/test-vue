<template>
  <div>你好你好{{name}}</div>
</template>
<script>
/*
  以“.”开头，则看做相对模块请求，并根据文件系统上的目录结构解析；
  以“～”开头，则将其后的作为模块请求，可以引入 node_modules 中的资源；
  以“@”开头，则其后的内容也被解释为模块请求，“@”在 vue-cli 创建的项目中默认指向"/src"
*/
  export default {
    data: () => {
      return {
        name: 'xss',
        age: 23
      }
    },
    methods: {
      say(val) {
        console.log(val+', im ' + this.age)
      }
    },
    mounted() {
      this.say('im mounted')
    }
  } 
</script>