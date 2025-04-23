export interface FooterNavProps {
  title: string;
  link: string;
}

export const navLinks: FooterNavProps[] = [
  { title: 'О нас', link: '/' },
  { title: 'Документы', link: '/' },
  { title: 'Частным лицам', link: '/' },
  { title: 'Бизнесу', link: '/' },
  { title: 'Помощь', link: '/' },
  { title: 'Наш вклад в общество', link: '/' },
  { title: 'Женское дело', link: '/' },
  { title: 'Инвесторам', link: '/' },
  { title: 'Карта сайта', link: '/' },
  { title: 'Новости', link: '/' },
  { title: 'Контакты', link: '/' },
  { title: 'Финансовая грамотность', link: '/' },
];

export const footerForIndividuals: string[] = [
  'Карта Solva Lite',
  'Микрокредит онлайн',
  'Рефинансирование кредитов',
];

export const footerForBusiness: string[] = [
  'Для малого бизнеса',
  'Для самозанятых',
  'Микрокредит для ТОО',
  'Факторинг',
];
