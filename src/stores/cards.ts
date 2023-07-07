import { defineStore } from "pinia";
import { ref } from "vue";
import type { AppCard } from "@/models/app-card";

import appCards from '@/mock/cards.json'

export const useCardsStore = defineStore('cards', () => {
  const cards = ref(appCards as AppCard[]);

  return { cards };
})
