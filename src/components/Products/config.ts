export interface ProductsItems {
  id: number;
  title: string;
  price: string;
  description: string;
  button: string;
  className: string;
}

export const productsList: ProductsItems[] = [
  {
    id: 1,
    title: 'Микрокредит для ИП',
    price: 'До 4 000 000 ₸',
    description: ', без залога, на срок до 36 месяцев – малому бизнесу',
    button: 'Получить деньги',
    className: 'product product-1',
  },
  {
    id: 2,
    title: 'Микрокредит на любые цели',
    price: 'До 4 000 000 ₸',
    description: ' на срок до 36 месяцев – частным лицам',
    button: 'Получить деньги',
    className: 'product product-2',
  },
  {
    id: 3,
    title: 'Микрокредит для самозанятых',
    price: 'До 4 000 000 ₸',
    description: ', без залога, на срок до 36 месяцев – малому бизнесу',
    button: 'Получить деньги',
    className: 'product product-3',
  },
  {
    id: 4,
    title: 'Карта Лайт с кэшбэком',
    price: 'До 300 000 ₸',
    description: ' на цифровую карту – частным лицам',
    button: 'Получить карту',
    className: 'product product-4',
  },
];
