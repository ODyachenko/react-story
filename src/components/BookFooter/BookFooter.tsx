import { BookNavigation } from './BookNavigation';
import { Soundtrack } from './Soundtrack';
import './styles.scss';

export const BookFooter = ({ bookRef }: any) => {
  const onClickNext = () => {
    bookRef.current.pageFlip().flipNext();
  };
  const onClickPrev = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  return (
    <div className="book__footer">
      <BookNavigation onClickNext={onClickNext} onClickPrev={onClickPrev} />
      <Soundtrack />
    </div>
  );
};
