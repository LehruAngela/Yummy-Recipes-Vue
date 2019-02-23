<template>
  <div id="app">
    <router-view></router-view>
    <notifications width=50% position="top center"/>

  </div>
</template>

<script>
export default {
  name: 'app',

}
</script>

<style>
body {
  background-color: rgb(199, 212, 78);
  background-image: url(./assets/11.jpeg);
  background-size: 103em;
}
</style>
