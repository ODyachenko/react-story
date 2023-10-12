import { FC, useContext, useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { BookCover } from '../BookCover/BookCover';
import { PageList } from '../Pages/PageList';
import { StartsSlider } from '../StartsSlider/StartsSlider';
import { Context } from '../../Context/Context';
import { BookFooter } from '../BookFooter/BookFooter';

export const Book: FC = () => {
  const bookRef: any = useRef(null);
  const { setIsPlaying } = useContext(Context);
  const [rangeValue, setRangeValue] = useState('100');
  const [showSlider, setShowSlider] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (rangeValue === '0') {
      bookRef.current.pageFlip().flipNext();
      setShowSlider(false);
      setIsPlaying(true);
    }
  }, [rangeValue]);

  useEffect(() => {
    if (currentPage === 0) {
      setRangeValue('100');
      setShowSlider(true);
    }
  }, [currentPage]);

  const onFlip = (event: any) => {
    setCurrentPage(event.data);
  };

  return (
    <main className="container">
      <div className="wrapper">
        <HTMLFlipBook
          className={'book'}
          ref={bookRef}
          width={471}
          height={589}
          size="stretch"
          minWidth={288}
          maxWidth={471}
          minHeight={428}
          maxHeight={589}
          style={{ margin: 'auto' }}
          startPage={0}
          onFlip={onFlip}
          drawShadow={false}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={false}
          clickEventForward={false}
          useMouseEvents={false}
          swipeDistance={0}
          showPageCorners={false}
          disableFlipByClick={false}
        >
          <BookCover />
          <PageList />
          <BookCover />
          <StartsSlider
            showSlider={showSlider}
            rangeValue={rangeValue}
            setRangeValue={setRangeValue}
          />
        </HTMLFlipBook>
        {!!currentPage && <BookFooter bookRef={bookRef} />}
      </div>
    </main>
  );
};
