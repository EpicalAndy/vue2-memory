<template>
  <b-modal id="modal-1" title="Победа!" v-model="show">
    <p class="my-4">Открыто карточек: {{ successCards }}</p>
    <p class="my-4">Число попыток: {{ attemptsCount }}</p>
  </b-modal>
</template>

<script>
import { useCardsStore } from "@/stores/cards-store";

const cardsStore = useCardsStore();
export default {
  name: 'AppGameOver',
  props: {
    show: Boolean
  },
  computed: {
    attemptsCount: () => cardsStore.attempts,

    successCards: () => cardsStore.successOpenedCards
  }
}
</script>

<style scoped>

</style>
