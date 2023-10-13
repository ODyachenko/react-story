import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { BookCover } from '../BookCover/BookCover';
import { PageList } from '../Pages/PageList';
import { StartsSlider } from '../StartsSlider/StartsSlider';
import { Context } from '../../Context/Context';
import { BookFooter } from '../BookFooter/BookFooter';

export const Book: FC = () => {
  const bookRef: any = useRef(null);
  const { setIsPlaying } = useContext(Context);
  const [bookOptions, setBookOptions]: React.ComponentState = useState({
    rangeValue: '100',
    showSlider: true,
    currentPage: 0,
  });

  useEffect(() => {
    if (bookOptions.rangeValue === '0') {
      bookRef.current?.pageFlip().flipNext();
      setBookOptions({ ...bookOptions, showSlider: false });
      setIsPlaying(true);
    }
  }, [bookOptions.rangeValue]);

  useEffect(() => {
    if (bookOptions.currentPage === 0) {
      setBookOptions({ ...bookOptions, rangeValue: '100', showSlider: true });
    }
  }, [bookOptions.currentPage]);

  const onFlip = (event: { data: any }) => {
    setBookOptions({ ...bookOptions, currentPage: event.data });
  };

  const setRangeValue = (value: string) => {
    setBookOptions({ ...bookOptions, rangeValue: value });
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
            showSlider={bookOptions.showSlider}
            rangeValue={bookOptions.rangeValue}
            setRangeValue={setRangeValue}
          />
        </HTMLFlipBook>
        {!!bookOptions.currentPage && <BookFooter bookRef={bookRef} />}
      </div>
    </main>
  );
};
