<template>
  <div class="d-flex justify-content-between flex-wrap py-2">
    <app-card-component v-for="item in gameCards"
                        :card-id="item.id"
                        :key="item.id"
                        class="m-1">
    </app-card-component>
  </div>
</template>

<script lang="ts">
import AppCardComponent from "@/components/AppCardComponent.vue";
import { useCardsStore } from "@/stores/cards-store";
import type { AppGameCard } from "@/models/app-card";

export default {
  components: { AppCardComponent },
  data: function () {
    const useCards = useCardsStore();

    useCards.prepareGameCards();

    const gameCards: AppGameCard[] = useCards.gameCards;

    return { gameCards };
  }
}
</script>

<style scoped>

</style>
