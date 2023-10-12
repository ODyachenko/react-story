import React, { FC } from 'react';
import './styles.scss';

type StartsSliderProps = {
  showSlider: boolean;
  rangeValue: string;
  setRangeValue: (event: any) => void;
};

export const StartsSlider = React.forwardRef(
  ({ showSlider, rangeValue, setRangeValue }: StartsSliderProps, ref: any) => {
    return (
      <div className={`content ${showSlider ? 'show' : ''}`}>
        <span className="start__endpoint">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <circle
              opacity="0.9"
              cx="24"
              cy="24"
              r="6"
              stroke="#FAECD1"
              strokeWidth="2"
            />
            <circle opacity="0.3" cx="24" cy="24" r="23.5" stroke="#FAECD1" />
          </svg>
        </span>
        <div className="equalizer">
          <input
            type="range"
            id="eqz"
            value={rangeValue}
            autoComplete="off"
            max="100"
            onChange={(event) => setRangeValue(event.target.value)}
          />
        </div>
        <span className="start__endpoint">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <circle
              opacity="0.9"
              cx="24"
              cy="24"
              r="6"
              stroke="#FAECD1"
              strokeWidth="2"
            />
            <circle opacity="0.3" cx="24" cy="24" r="23.5" stroke="#FAECD1" />
          </svg>
        </span>
      </div>
    );
  }
);
