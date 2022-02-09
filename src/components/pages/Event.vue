<template>
  <Image-header :image="url" :title="`Find your prefered event  `" />
  <Wrapper :text="`have fan with your prefered artist`" />

  <div class="container">
    <h2 class="text-center mb-5   text-capitalize">
      Artist : <span class="text-primary">{{ section }}</span>
    </h2>
    <ArtistFilter v-model="section" :fetch="fetchEvent" />
    <!-- Start of loading animation -->

    <Loading v-if="loading" />

    <!-- End of loading animation -->

    <ArtistProfil v-if="!loading && !error" :artist="artist" />
    <NewsList v-if="!loading && !error" :posts="posts" />
    <div
      class="card text-dark ßshadow-lg p-3 mb-5 bg-white rounded"
      v-for="(venue, index) in events"
      :key="index"
    >
      <div class="d-flex align-items-center">
        <div class="image">
          {{ format_date(venue.datetime) }}
        </div>
        <div class="ml-3 w-100">
          <h4 class="mb-0 mt-0 font-weight-bold">Country</h4>
          <span class="font-weight-normal">{{ venue.venue.country }}</span>
          <a
            :href="venue.url"
            class="font-weight-normal btn btn-danger float-right"
          >
            Tickets available</a
          >
          <div class="p-2 mt-2 d-flex justify-content-between rounded stats">
            <div class="d-flex flex-column">
              <span class="articles">City</span>
              <span class="number1 font-weight-bold">{{
                venue.venue.city
              }}</span>
            </div>
            <div class="d-flex flex-column">
              <span class="articles">Location</span>
              <span class="number1 font-weight-bold"
                >{{ venue.venue.location }}
                </span
              >
            </div>
            <div class="d-flex flex-column">
              <span class="followers">Venue</span>
              <span class="number2 font-weight-bold">{{
                venue.venue.name
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start of error alert -->
    <Error v-if="error" :error="error" />
    <!-- End of error alert -->
  
  </div>

</template>

<script>
import axios from "axios";
import ArtistFilter from "../artist/ArtistFilter.vue";
import ArtistProfil from "../artist/ArtistProfil.vue";
import moment from "moment";
import Loading from "../Loading.vue";
import Error from "../Error.vue";
import ImageHeader from "../ImageHeader.vue";
import Wrapper from '../Wrapper.vue';

export default {
  components: {
    //  Layout,
    ArtistFilter,
    
    ArtistProfil,
    Loading,
    Error,
    ImageHeader,
    Wrapper,
  },
  data() {
    return {
      section: "maroon5",
      posts: [],
      venues: [],
      events: [],
      loading: false,
      error: null,
      artist: {},
      url: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg",
      title: "welcome to musico ",
    };
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("DD-MM-YYYY");
      }
    },
    async fetchEvent() {
      try {
        this.error = null;
        this.loading = true;
        const url2 = `https://rest.bandsintown.com/artists/${this.section}/events?app_id=1`;
        const response = await axios.get(url2);
        // console.log(response[0])
        // this.posts=response.data
        this.events = response.data;
        this.artist = response.data[0].artist;
        console.log(this.events);
      } catch (err) {
        if (err.response) {
          this.error = {
            title: "Server Response",
            message: err.message,
          };
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          };
        } else {
          // There's probably an error in your code
          this.error = {
            title: "oups!! ",
            message: "Artist not find please type correctly",
          };
        }
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchEvent();
  },
};
</script>
<style>
body{
  background: black;
}
</style>
