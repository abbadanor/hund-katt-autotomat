<script setup lang="ts">
const props = defineProps<{
  steps: number
  stepIndex: number
}>()
</script>

<template>
  <div class="container">
    <ul class="progressbar">
      <li v-for="i in steps" :key="i" :class="stepIndex >= i ? 'active' : ''" />
    </ul>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 48px;
  max-width: 200px;
  z-index: 1;
}

ul {
  list-style: none;
  padding: 0;
}

.progressbar li{
  float: left;
  width: calc(100% / v-bind(steps));
  position: relative;
  text-align: center;
}

.progressbar li:before{
  content:"";
  width: 12px;
  height: 12px;
  display: block;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  line-height: 20px;
  background-color: rgb(102, 102, 102);
  text-align: center;
  font-weight: bold;
}

.progressbar li.active:before {
  background-color: rgb(66, 140, 255);
}

.progressbar li:after{
  content: '';
  position: absolute;
  width:100%;
  height: 3px;
  background: #555;
  top: 5px;
  left: -50%;
  z-index: -1;
}

.progressbar li.active:after{
  background-color: rgb(66, 140, 255);
}

.progressbar li:first-child:after{
content: none;
}
</style>
