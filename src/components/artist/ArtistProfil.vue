<template>
<!-- for card -->
<div class="card p-3 shadow-sm p-3 text-dark mb-1 bg-white rounded">
        <div class="d-flex align-items-center">
            <div class="image"> <img :src="artist.image_url" :alt="artist.image_url"  class="rounded" width="155"> </div>
            <div class="ml-3 w-100">
                <h4 class="mb-0 mt-0 font-weight-bold">{{artist.name}}</h4> <span class="font-weight-normal" >Artist Musician</span>
                <div class="p-2 mt-2 d-flex justify-content-between rounded  stats">
                    <div class="d-flex flex-column"> <span class="articles">Upcoming Events</span> <span class="number1 font-weight-bold">{{artist.upcoming_event_count}}</span> </div>
                    <div class="d-flex flex-column"> <span class="followers">Followers</span> <span class="number2 font-weight-bold">{{artist.tracker_count}}</span> </div>
                    <div class="d-flex flex-column"> <span class="rating">Rating</span> <span class="number3 font-weight-bold">8.9</span> </div>
                </div>
                <div class="button mt-2 d-flex flex-row align-items-center"> <a  class="btn btn-sm btn-lihgt w-100 ml-5 " :href="artist.facebook_page_url">Follow</a> </div>
            </div>
        </div>
        <div class=" mr-3">
  <i class="fa fa-twitter fa-x mr-3  icon-3d"></i>
  <i class="fa fa-facebook fa-x mr-3 icon-3d"></i>
  <i class="fa fa-instagram fa-x icon-3d"></i>
  <i class="fa fa-whatsapp fa-x ml-3 icon-3d"></i>
</div>
    </div>
<!-- for card end-->
</template>
<script>
export default {
    
    props: {
    artist: {
    type: Object,
      required: true,
    },
}}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap');
@import url(https://weloveiconfonts.com/api/?family=entypo);

[class*="entypo-"]:before {
  font-family: 'entypo', sans-serif;
}

*{
  font-family:"Open Sans condensed";
}


</style>