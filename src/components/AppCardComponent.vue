<template>
  <div>
    <b-card v-for="item in cards"
            class="d-inline-flex m-2">
      <b-icon :icon="item.icon"></b-icon>
    </b-card>
  </div>

</template>

<script lang="ts">
import type { AppCard } from "@/models/app-card";
import type { PropType } from "vue";

export default {
  data: function () {
    const data = {};

    return data;
  },
  props: { cards: { type: Array as PropType<Array<AppCard>> } }
}
</script>

<style scoped>

</style>
