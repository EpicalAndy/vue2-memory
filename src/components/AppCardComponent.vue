<template>
  <div>
    <b-btn @click="toggleCard"
    :class="isOpened ? 'btn-info' : 'btn-secondary'">

      <b-icon v-if="isOpened"
              :icon="card.icon">
      </b-icon>

      <b-icon v-else
              icon="question">
      </b-icon>

    </b-btn>
  </div>

</template>

<script lang="ts">
import type { AppCard } from "@/models/app-card";
import type { PropType } from "vue";

export default {
  data: function () {
    return {
      isOpened: false,
    };
  },
  props: { card: { type: {} as PropType<AppCard> } },
  methods: {
    toggleCard() {
      this.isOpened = !this.isOpened;
    }
  },
  computed: {}

}
</script>

<style scoped>

</style>
