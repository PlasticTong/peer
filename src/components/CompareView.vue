<template>
  <div class="h3">
    对比视图
    <div>
      {{ idspee }}
    </div>
  </div>


</template>

<script>
import axios from 'axios';
export default {
  name: 'ComapareView',
  props: {
    msg: String
  },
  data(){
    return {
            idspee:""
        };
  },
  created() {
    let test = window.innerWidth;
    let test2 = window.innerHeight;
    this.send();
    // console.group(test2, test);
  },
  methods: {
    send() {
      let that = this;
      axios.get('/api/getAllSpeech')
        .then(response => {
          // console.log(response.data[0].id)
          that.idspee = response.data;
        })
        .catch(function (error) {
          // 请求失败处理
          console.log(error);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h3 {
  /* background-color: red; */
  /* width: 200px; 定义方框宽度 */
  /* height: 50%; */
  background-color: #f0f0f0;
  /* 定义方框背景颜色 */
  border-radius: 10px;
  /* 定义圆角大小 */
  padding: 10px;
  /* 定义内边距 */
}
</style>
