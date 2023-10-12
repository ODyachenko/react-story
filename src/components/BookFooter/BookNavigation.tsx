import { FC } from 'react';
import { Btn } from '../../UI/Btn/Btn';

type BookNavigationProps = {
  onClickNext: () => void;
  onClickPrev: () => void;
};

export const BookNavigation: FC<BookNavigationProps> = ({
  onClickNext,
  onClickPrev,
}) => {
  return (
    <div className="book__navigation">
      <Btn direction="left" onClick={onClickPrev} />
      <Btn direction="right" onClick={onClickNext} />
    </div>
  );
};
