<template>
  <div>
    <b-btn @click="openCard"
           :class="cardClass">

      <b-icon v-if="isOpened || isSuccess"
              :icon="card.icon">
      </b-icon>

      <b-icon v-else
              icon="question">
      </b-icon>

    </b-btn>
  </div>

</template>

<script lang="ts">
import { useCardsStore } from "@/stores/cards-store";
import type { AppGameCard } from "@/models/app-card";

export default {
  data: function () {
    return {
      cardsStore: useCardsStore(),
      card: useCardsStore().getGameCard(this.cardId)
    };
  },
  props: { cardId: { type: Number } },
  methods: {
    openCard() {
      !this.card.isSuccess && this.cardsStore.clickCard(this.card.id);
    }
  },
  computed: {
    isOpened(): boolean {
      return this.card.isOpened;
    },
    isSuccess(): boolean {
      return this.card.isSuccess;
    },
    cardClass() {
      const isOpened: string = this.isOpened ? 'btn-info' : 'btn-secondary';
      const isSuccess: string = this.isSuccess ? 'btn-success' : '';

      return isSuccess || isOpened;
    }
  }

}
</script>

<style scoped>

</style>
