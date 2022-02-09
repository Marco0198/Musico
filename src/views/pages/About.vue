<template>
  <layout>
    <Image-header :image="url" :title="title" />
    <div class="text-center container mt-5 mb-5">
      <h1 cla>About Us!</h1>
      <div class="words">
        <a href="">
          <img
            src="http://fgmlandscaping.com/_imgstore/4/1775944/page_about-us_fD5EVcQ5GgJqM8zD9iGMC/FB_JDYpc0h309S4qz1p-JjMqH-U.png"
            alt=""
          />
        </a>
        <h2>Create and Maintain a Beautiful Landscape with Our Help.</h2>
        <p>
          FGM Landscaping & Brick Pavers, also known as Freehold Grounds
          Maintenance, has been creating and maintaining fine landscapes for
          over 30 years. We pride ourselves on having a mix between positive
          customer relations & a high level of design skill. Owners of FGM Joe
          Spicuzza and Scott Kuffner, created this company in 1985 in Freehold,
          New Jersey. Our office is now located in Millstone New Jersey, after a
          successful start to the company and the need for a bigger workspace.
          We are determined to work with our customers in order to ensure they
          achieve the upmost satisfaction at an affordable price. We are ICPI
          certified, a licensed pesticide applicator business, and fully
          insured!
        </p>
      </div>
    </div>
    <Wrapper :text="text" />
    <Gallery />
  
  
  </layout>
</template>
<script>
import Gallery from "../../components/Gallery.vue";
import ImageHeader from "../../components/ImageHeader.vue";
import Wrapper from '../../components/Wrapper.vue';
import Layout from "../../layouts/Layout.vue";
export default {
  components: { Layout, ImageHeader,  Gallery, Wrapper },
  data() {
    return {
      url: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
      title: "About Musico ",
      text:"This is all about Music  Entraitenment`"
    };
  },
};
</script>
