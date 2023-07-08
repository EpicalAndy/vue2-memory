<template>
  <div>
    <b-card class="d-inline-flex m-2">
      <b-icon :icon="card.icon"></b-icon>
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
  props: { card: { type: {} as PropType<AppCard> } }
}
</script>

<style scoped>

</style>
