<!--
 * @Author: 周楠
 * @Description:
 * @Date: 2022-12-27 10:33:58
 * @LastEditTime: 2022-12-28 14:42:19
 * @LastEditors: 周楠
-->


<template>
  <div id="app">
    <mainHeader />
  </div>
</template>

<script setup lang="ts">
import mainHeader from "./header/mainHeader.vue";

</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
