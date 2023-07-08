import { defineStore } from "pinia";
import { ref } from "vue";
import type { AppCard, AppGameCard } from "@/models/app-card";

import appCards from '@/mock/cards.json'

export const useCardsStore = defineStore('cards', {
  state: () => ({
    gameCards: [],
    srcCards: appCards as AppCard[],
    cardsCount: 16,
  }),
  actions: {
    prepareGameCards() {
      const srcCards = this.srcCards;
      const gameCards = [] as AppGameCard[];
      let count = this.cardsCount;
      let i = 0;

      while (count > i) {
        let item = Object.assign({id: i}, getRandomArrItem(srcCards));

        i++;

        gameCards.push(item);
      }

      this.gameCards = gameCards;
    }
  }
})

function getRandomArrItem(arr: AppCard[]): AppCard {
  const max = arr.length - 1
  const index = random(0, max);

  return arr[index];
}

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
