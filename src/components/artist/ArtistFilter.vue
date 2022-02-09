<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control border border-primary"
      v-model="section"
      placeholder="artist name"
      aria-label="artist name"
      aria-describedby="basic-addon2"
    />
    <div class="input-group-append mb-5">
      <button class="btn btn-outline-secondary" @click="fetch" type="button">
        Search
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
//import sectionsData from "./sections"

export default {
  props: {
    modelValue: String,
    fetch: Function,
  },
  setup(props, { emit }) {
    const section = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });

    return {
      section,
    };
  },
  data() {
    return {
      sections: null,
    };
  },
  methods: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>
