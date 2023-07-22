<template>
  <div class="d-flex justify-content-between flex-wrap py-2">
    <app-card-component v-for="item in gameCards"
                        :card-id="item.id"
                        :key="item.id"
                        class="m-1">
    </app-card-component>

    <app-game-over :show="isAllOpened"></app-game-over>
  </div>
</template>

<script lang="ts">
import AppCardComponent from "@/components/AppCardComponent.vue";
import { useCardsStore } from "@/stores/cards-store";
import type { AppGameCard } from "@/models/app-card";
import AppGameOver from "@/components/AppGameOver.vue";

const cardsStore = useCardsStore();

export default {
  components: { AppGameOver, AppCardComponent },
  data: function () {
    const useCards = useCardsStore();

    useCards.prepareGameCards();

    const gameCards: AppGameCard[] = useCards.gameCards;

    return { gameCards };
  },
  computed: {
    isAllOpened: function () {
      return cardsStore.successOpenedCards === cardsStore.cardsCount;
    }
  }
}
</script>

<style scoped>

</style>
