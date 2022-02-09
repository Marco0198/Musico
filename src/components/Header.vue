<template>
  <div class="sticky-top">
    <nav
      style=" width: 100%; background: black"
      class="navbar navbar-expand-lg navbar-dark"
    >
      <a class="navbar-brand" href="/"> <wrapper :text="`Musico`"> </wrapper></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item ">
            <a class="nav-link" href="/"
              >Home <span ></span></a
            >
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/event"
              >Events <span></span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <router-view />
</template>

<script>
import Wrapper from './Wrapper.vue'
export default {
  name: "Header",
  components:{Wrapper}
};
</script>
