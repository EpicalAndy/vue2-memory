export interface AppCard {
  value: string
  icon: string
}

export interface AppGameCard extends AppCard {
  id: number
  isOpened: boolean
  isSuccess: boolean
}

export class GameCard {
  id: number;
  value: string;
  isOpened: boolean;
  isSuccess: boolean;
  icon: string;
  constructor(data: any) {
    this.id = data?.id || -1;
    this.icon = data?.icon || '';
    this.value = data?.value || null;
    this.isOpened = false;
    this.isSuccess = false
  }
}
