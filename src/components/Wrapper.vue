<template>
      <div class="wrapper mb-5">
  <h1 class="title">{{text}}</h1>
  </div>
</template>

<script>
export default {
 props: {

    text: {
      type: String,
      required: true,
    },   
}}
</script>

<style>
.wrapper {
  display: flex;
  padding-top: 50px;
  height: 10px;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 40px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #540032;

}

.title {
  background-image: url(https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_960_720.jpg);
  background-attachment: fixed;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>