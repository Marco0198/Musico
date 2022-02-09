<template>
  <div class="App">
    <router-view/>
  </div>
</template>

<script>
//import VueSplash from './components/VueSplash.vue';

export default {
  components: {  },
  name: 'App',
  data() {
    return {
      layout: 'div',
    };
  },
};
</script>
<style>
body{
 
  background-attachment: fixed;
  background: black;
  color: white;
}
</style>