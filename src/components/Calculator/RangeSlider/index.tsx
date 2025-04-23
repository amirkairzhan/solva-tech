import React, { type FC } from 'react';
import type { RangeSliderProps } from 'components/Calculator/config';

import { isNaN } from 'lodash';

const RangeSlider: FC<RangeSliderProps> = ({
  title,
  min,
  max,
  step,
  unit = '',
  value,
  minLabel,
  maxLabel,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(isNaN(value) ? 0 : Number(e.target.value));
  };

  const formatValue = (val: number) => {
    if (unit === '₸') {
      return `${val.toLocaleString('ru-RU')} ${unit}`;
    }

    return `${val} ${unit}`.trim();
  };

  return (
    <div className="range-slider-wrapper">
      <div className="range-header">
        <p className="range-title">{title}</p>
        <p className="range-value">{formatValue(value)}</p>
      </div>

      <input
        className="range-slider"
        max={max}
        min={min}
        onChange={handleChange}
        step={step}
        type="range"
        value={value}
      />

      <div className="range-labels">
        <p>{minLabel || formatValue(min)}</p>
        <p>{maxLabel || formatValue(max)}</p>
      </div>
    </div>
  );
};

export default RangeSlider;
