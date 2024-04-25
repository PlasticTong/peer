<template>
  <div>
  <div class="font_all">
    <div class="tools">
      ControlPanel
      <ToolsTable></ToolsTable>
    </div>
    <div class="fast">
      FastRecall
      <FastRecall></FastRecall>
    </div> 
  </div>
  
  <!-- <FastRecall></FastRecall> -->
  <div class="font_all">
    <div class="over">
      OverView
      <OverView></OverView>
    </div>
    <div class="compare">
      CompareView
      <CompareView></CompareView>
    </div>
  </div>
</div>
</template>

<script>
import ToolsTable from './components/ToolsTable.vue';
import FastRecall from './components/FastRecall.vue';
import OverView from './components/OverView.vue';
import CompareView from './components/CompareView.vue'

export default {
  name: 'App',
  components: {
    ToolsTable,
    FastRecall,
    OverView,
    CompareView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tools {
  color: #999;
  /* 定义文字颜色为灰色 */
  width: 25%;
  height: 50%;
}
.fast {
  color: #999;
  margin-left: 10px;
  /* 定义文字颜色为灰色 */
  width: 75%;
  height: 50%;
}

.font_all {
  height: 100%;
  display: flex;
}

.over{
  color: #999;
  margin-right: 5px;
  /* 定义文字颜色为灰色 */
  width: 50%;
  height: 50%;
}

.compare{
  color: #999;
  margin-left: 5px;
  /* 定义文字颜色为灰色 */
  width: 50%;
  height: 50%;
}
</style>./components/ToolsTable.vue
