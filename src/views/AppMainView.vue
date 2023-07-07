<template>
  <div >
    <app-card-component :cards="cards"
                        class="">

    </app-card-component>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import AppCardComponent from "@/components/AppCardComponent.vue";
import { useCardsStore } from "@/stores/cards";

export default {
  components: { AppCardComponent },
  data: function () {
    const useCards = useCardsStore();
    const cards = useCards.cards;


    return {cards};
  }
}
</script>

<style scoped>

</style>
