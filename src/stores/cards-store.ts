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
    cardsCount: 20, // должно быть чётным положительным.
    comareTimeout: 2000, // Задержка показа 2-х карточек
    compareInProgress: false, // блокировщик обработки кликов елси идёт проверка на соответствие карточек
    attempts: 0, // Количство попыток открытия (пар)
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
    },
    successOpenedCards: (state) => {
      return state.gameCards.filter(item => item.isSuccess).length;
    }
  },
  actions: {
    prepareGameCards() {
      const srcCards = this.srcCards;
      const count = this.cardsCount / 2;

      let gameCards = [] as AppGameCard[];
      let temp = [] as AppCard[];
      let i = 0;

      while (count > i) {
        let item = getRandomArrItem(srcCards);

        i++;

        temp.push(item);
      }

      temp = temp.concat(temp);

      gameCards = temp.map((item, index) => {
        const card = Object.assign({ id: index }, item);

        return new GameCard(card);
      });

      this.gameCards = gameCards;
    },

    clickCard(id: number) {
      if (this.compareInProgress) {
        return;
      }

      this.addCardToPair(id);

      this.getGameCard(id).isOpened = true;

      if (this.pairCardIds.length === 2) {
        this.compareInProgress = true;

        this.addAttempt();

        setTimeout(() => {
          this.comparepairCardIds() && this.acceptCards();

          this.clearpairCardIds();

          this.compareInProgress = false;
        }, this.comareTimeout);
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
    },

    acceptCards() {
      this.firstPairCard.isSuccess = this.secondPairCard.isSuccess = true;
    },

    getGameCard(id: number): AppGameCard {
      return this.gameCards.find(item => item.id === id) as AppGameCard;
    },

    addAttempt() {
      this.attempts += 1;
    },
  }
});

function getRandomArrItem(arr: AppCard[]): AppCard {
  const max = arr.length - 1
  const index = random(0, max);

  return arr[index];
}

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
