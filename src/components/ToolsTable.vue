<template>
    <div class="h3">
      工具栏
      <div>分组数：{{ this.speech_num }}</div>
    </div>



</template>

<script>
import axios from 'axios';
export default {
  name: 'ToolsTable',
  props: {
    msg: String
  },
  data(){
    return {
            idspee:"",
            speech_num:"",
        };
  },
  created() {
    let test = window.innerWidth;
    let test2 = window.innerHeight;
    // console.group(test2, test);
    this.send();
  },
  methods: {
    send() {
      let that = this;
      axios.get('/api/getAllSpeech')
        .then(response => {
          // console.log(response.data[0].id)
          that.idspee = response.data;
          that.speech_num = response.data.length;
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
