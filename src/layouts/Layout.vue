<template>
  <div class="LayoutDefault">
    <nav >
   <Header />
    </nav>
    <main class="LayoutDefault__main ">
      <slot/>
    </main>
   
<Footer />
  </div>
  
</template>

<script>
import Footer from '../components/Footer.vue';
 //import TheNavBar from '@/components/TheNavBar.vue'
 //import TheFooter from '@/components/TheFooter.vue'
import Header from '../components/Header.vue';
export default {
 components: {Header, Footer},
  name: `LayoutDefault`,
 
};
</script>

<style >
.LayoutDefault__main{
  min-height:800px;
  background-attachment: fixed;

}
</style>



