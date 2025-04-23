export const INITIAL_AMOUNT: number = 1_200_000;

export const INITIAL_TERM: number = 36;

export const BUSINESS_PERCENT: number = 0.2; // 20%

export const DEBOUNCE_TIME: number = 300;

export type ModeType = 'private' | 'business';

export interface RangeSliderProps {
  title: string;
  min: number;
  max: number;
  step: number;
  unit: string;
  minLabel: string;
  maxLabel: string;
  value: number;
  onChange: (value: number) => void;
}

interface GetSliderParams {
  amount: number;
  term: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  setTerm: React.Dispatch<React.SetStateAction<number>>;
}

export const getRangeSliders = (
  {
    amount,
    term,
    setAmount,
    setTerm,
  }: GetSliderParams,
): RangeSliderProps[] => [
  {
    title: 'Сумма микрокредита',
    min: 200_000,
    max: 4_000_000,
    step: 100_000,
    unit: '₸',
    minLabel: 'от 200 тыс',
    maxLabel: 'до 4 млн',
    value: amount,
    onChange: setAmount,
  },
  {
    title: 'Срок микрокредитования',
    min: 6,
    max: 36,
    step: 1,
    unit: 'мес.',
    minLabel: 'от 6 мес.',
    maxLabel: 'до 3 лет',
    value: term,
    onChange: setTerm,
  },
];
