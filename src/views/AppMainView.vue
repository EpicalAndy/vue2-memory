<template>
  <div>
    <app-game-cards-component></app-game-cards-component>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import AppGameCardsComponent from "@/components/AppGameCardsComponent.vue";

export default Vue.extend({
  components: { AppGameCardsComponent }
})
</script>

<style scoped>

</style>
