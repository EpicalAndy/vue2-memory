import { defineStore } from "pinia";
import { ref } from "vue";
import type { AppCard, AppGameCard } from "@/models/app-card";

import appCards from '@/mock/cards.json'
import { GameCard } from "@/models/app-card";

export const useCardsStore = defineStore('cards', {
  state: () => ({
    gameCards: [] as AppGameCard[],
    srcCards: appCards as AppCard[],
    pairCardIds: [] as Array<number>,
    cardsCount: 16,
  }),
  getters: {
    firstPairCard: (state): AppGameCard => {
      const pair = state.pairCardIds;

      // @ts-ignore
      return pair[0] ? state.gameCards.find(item => item.id === pair[0]) : null;
    },
    secondPairCard: (state): AppGameCard => {
      const pair = state.pairCardIds;

      // @ts-ignore
      return pair[1] ? state.gameCards.find(item => item.id === pair[1]) : null;
    }
  },
  actions: {
    prepareGameCards() {
      const srcCards = this.srcCards;
      const gameCards = [] as AppGameCard[];

      let count = this.cardsCount;
      let i = 0;

      while (count > i) {
        const card = new GameCard({id: i + 1});

        let item = Object.assign(card, getRandomArrItem(srcCards));

        i++;

        gameCards.push(item);
      }

      this.gameCards = gameCards;
    },

    clickCard(id: number) {
      this.addCardToPair(id);

      this.getGameCard(id).isOpened = true;

      if (this.pairCardIds.length === 2) {
        this.comparepairCardIds() && this.acceptCards();

        this.clearpairCardIds();
      }
    },

    addCardToPair(id: number) {
      !this.pairCardIds.includes(id) && this.pairCardIds.push(id);
    },

    comparepairCardIds() {
      const first: AppGameCard = this.firstPairCard;
      const second: AppGameCard = this.secondPairCard;

      return first.value === second.value;
    },

    clearpairCardIds() {
      this.firstPairCard.isOpened = false;
      this.secondPairCard.isOpened = false;

      this.pairCardIds.splice(0, 2);
      console.log('clear');
    },

    acceptCards() {
      this.firstPairCard.isSuccess = this.secondPairCard.isSuccess = true;
    },

    getGameCard(id: number): AppGameCard {
      return this.gameCards.find(item => item.id === id) as AppGameCard;
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
