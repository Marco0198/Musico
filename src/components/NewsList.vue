<template>
  <div
    class="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center"
  >
    <TicketCard v-for="(post, index) in posts" :key="index" :post="posts" />
  </div>
</template>

<script>
import TicketCard from "./TicketCard.vue"
export default {
  props: {
    posts: {
      type: Object,
      required: true,
    },
  },
  components: {
    TicketCard,
  },
}
</script>
