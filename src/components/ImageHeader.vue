<template lang="">
  <div>
    <div class="row-hero">
      <img
        class="card-img image"
        :src="image"
        alt="Card image cap"
      />
      <div class="image-quote">
        <div class="home text-center">
       
          <h2><Wrapper :text="title" /></h2>
        </div>
      </div>
    </div>
  </div>
  <wrapper></wrapper>
</template>
<script>
import Wrapper from './Wrapper.vue'
export default {
 components:{Wrapper},
 props: {
     image:{type:String,
     required:true},
    title: {
      type: String,
      required: true,
    },  
     
}}
</script>
<style scoped>
.row-hero {
  height: 50rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.image {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 1400px;
  width: auto;
  background-size: cover;
  z-index: -1;
  transform: translateX(-50%) translateY(-80%);
  min-width: 100%;
  min-height: 100%;
}

.image-quote {
  padding-top: 200px;
  width: 100%;
  height: 85%;
  color: white;
  justify-content: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  background-size: cover;
}

.cointainer {
  padding-inline: 2em;
}
h2 {
  font-family: "Source Code Pro", monospace;
  white-space: nowrap;
  font-size: min(3rem, 7vw);
  margin-bottom: 1em;
  font-weight: 600;
  width: auto;
  position: relative;
}


.home  h2 {
  font-weight: 400;
  opacity: 0;
  transform: translateY(3em);
  animation: fader 1s ease-in 1s forwards;
}



@keyframes fader {
  to {
    opacity: 100;
    transform: translateY(0);
  }
}
</style>
