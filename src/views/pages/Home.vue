<template>
  <layout>
    <Image-header :image="url" :title="title" />
    <Wrapper :text="`This is a super exciting headline, don't you think!?`" />
    <Carousel />
    <Gallery />
    <Wrapper :text="`Woow music !!!`" />
  </layout>
</template>

<script>
import Carousel from "../../components/Carousel.vue";
import Gallery from "../../components/Gallery.vue";
import ImageHeader from "../../components/ImageHeader.vue";
import Wrapper from "../../components/Wrapper.vue";
import Layout from "../../layouts/Layout.vue";
export default {
  components: { Layout, Carousel, ImageHeader, Gallery, Wrapper },
  data() {
    return {
      url: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
      title: "welcome to musico ",
    };
  },
};
</script>
<style scoped></style>
