import React from 'react';
import { Ipage } from '../../../types';
import './styles.scss';

export const Page = React.forwardRef(
  ({ title, text, img, id }: Ipage, ref: any) => {
    return (
      <div className="page" ref={ref}>
        <div className="page__content">
          <h1 className="page__title">{title}</h1>
          <img className="page__img" src={img} alt="" />
          <p className="page__text">{text}</p>
          <span className="page__num">{id}</span>
        </div>
      </div>
    );
  }
);
