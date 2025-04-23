import amfokImg from 'assets/images/amfok.png';
import gerbImg from 'assets/images/gerb.png';
import visaImg from 'assets/images/visa.png';

export interface AwardItem {
  img: string;
  alt: string;
  text: string;
}

export const awardsItems: AwardItem[] = [
  {
    img: amfokImg,
    alt: 'Amfok Image',
    text: 'Являемся активным участником Ассоциации микрофинансовых организаций Казахстана (АМФОК)',
  },
  {
    img: gerbImg,
    alt: 'Gerb Image',
    text: 'Работаем по лицензии АРРФР № 02.21.0004.М. от 06.03.2023 г. на осуществление микрофинансовой деятельности',
  },
  {
    img: visaImg,
    alt: 'Visa Image',
    text: 'Компания Solva отмечена наградой Visa за первый карточный продукт, выпущенный МФО',
  },
];
