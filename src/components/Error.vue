<template>
    <div class="mt-12 mx-auto text-center alert alert-danger" v-if="error">
      <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
        {{ error.title }}
      </h3>
      <p class="p-4 text-lg font-bold text-red-900">{{ error.message }}</p>
    </div>
    <!-- End of error alert -->

</template>

<script>

export default {
props: {
    error: {
      type: Object,
      required: true,
    }
}
}
</script>

<style>

</style>