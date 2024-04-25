<template>
    <div class="h3">
      总体概览
    </div>


</template>

<script>
export default {
  name: 'OverView',
  props: {
    msg: String
  },
  created() {
    let test = window.innerWidth;
    let test2 = window.innerHeight;
    console.group(test2, test);
  },
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
