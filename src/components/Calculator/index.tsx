import {
  type FC, useCallback, useEffect, useState,
} from 'react';
import RangeSlider from 'components/Calculator/RangeSlider';
import Button from 'components/shared/Button';
import {
  BUSINESS_PERCENT,
  DEBOUNCE_TIME,
  getRangeSliders,
  INITIAL_AMOUNT,
  INITIAL_TERM, type ModeType,
} from 'components/Calculator/config';

import debounce from 'lodash/debounce';

const Calculator: FC = () => {
  const [amount, setAmount] = useState(INITIAL_AMOUNT);
  const [term, setTerm] = useState(INITIAL_TERM);
  const [mode, setMode] = useState<ModeType>('private');
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  const rangeSliders = getRangeSliders({
    amount, term, setAmount, setTerm,
  });

  const calculatePayment = useCallback(() => {
    const result = (mode === 'private')
      ? Math.round(amount / term)
      : Math.round((amount / term) * BUSINESS_PERCENT);

    setMonthlyPayment(result);
  }, [
    amount,
    term,
    mode,
  ]);

  useEffect(() => {
    const debouncedCalc = debounce(calculatePayment, DEBOUNCE_TIME);

    debouncedCalc();

    return () => debouncedCalc.cancel();
  }, [calculatePayment]);

  const format = (num: number):string => `${num.toLocaleString('ru-RU')} ₸`;

  return (
    <section className="calculator-section section">
      <h2 className="section-title">Рассчитайте условия на калькуляторе</h2>
      <div className="calc-button-wrapper">
        <button
          className={`calc-button ${mode === 'private' ? 'calc-button-active' : ''}`}
          onClick={() => setMode('private')}
        >
          Частным лицам
        </button>
        <button
          className={`calc-button ${mode === 'business' ? 'calc-button-active' : ''}`}
          onClick={() => setMode('business')}
        >
          Для бизнеса
        </button>
      </div>
      <div className="calc-slider-wrapper">
        <div className="calc-slider">
          <div className="calc-range-wrapper">
            {rangeSliders.map((element) => (
              <RangeSlider
                key={element.title}
                max={element.max}
                maxLabel={element.maxLabel}
                min={element.min}
                minLabel={element.minLabel}
                onChange={element.onChange}
                step={element.step}
                title={element.title}
                unit={element.unit}
                value={element.value}
              />
            ))}
          </div>

          <div className="calc-month-payment">
            <h3 className="calc-month-title">Ежемесячный платёж</h3>
            <p className="calc-month-number">{format(monthlyPayment)}</p>
            <Button className="calc-month-button" text="Получить деньги" />
          </div>
        </div>
        <p className="calc-disclaimer">
          Расчет калькулятора произведен по ставкам, действующим при условии оформления финансовой защиты к
          микрокредиту. Не является публичной
          офертой.
        </p>
      </div>
    </section>

  );
};

export default Calculator;
