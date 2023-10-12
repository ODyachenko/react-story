import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { BookCover } from '../BookCover/BookCover';
import { BookNavigation } from '../BookNavigation/BookNavigation';
import { PageList } from '../Pages/PageList';
import { StartsSlider } from '../StartsSlider/StartsSlider';
import { Context } from '../../Context/Context';

export const Book: FC = () => {
  const bookRef: any = useRef(null);
  const { setIsPlaying } = useContext(Context);
  const [rangeValue, setRangeValue] = useState('100');
  const [showSlider, setShowSlider] = useState(true);
  const [bookOptions, setBookOptions] = useState({
    orientation: '',
    isFixed: true,
    currentPage: 0,
  });

  useEffect(() => {
    if (rangeValue === '0') {
      bookRef.current.pageFlip().flipNext();
      setShowSlider(false);
      setIsPlaying(true);
    }
  }, [rangeValue]);

  useEffect(() => {
    if (bookOptions.currentPage === 0) {
      setRangeValue('100');
      setShowSlider(true);
    }
  }, [bookOptions.currentPage]);

  const onClickNext = () => {
    bookRef.current.pageFlip().flipNext();
  };
  const onClickPrev = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  const onFlip = (event: any) => {
    setBookOptions({ ...bookOptions, currentPage: event.data });
  };

  return (
    <main className="wrapper">
      <HTMLFlipBook
        className={'book'}
        ref={bookRef}
        width={471}
        height={589}
        size="fixed"
        minWidth={288}
        maxWidth={471}
        minHeight={428}
        maxHeight={589}
        style={{}}
        startPage={0}
        onFlip={onFlip}
        // onChangeOrientation={bookOptions.isPortrait}
        drawShadow={false}
        flippingTime={1000}
        usePortrait={false}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        clickEventForward={false}
        useMouseEvents={false}
        swipeDistance={30}
        showPageCorners={false}
        disableFlipByClick={false}
      >
        <BookCover />
        <PageList />
        <BookCover />
      </HTMLFlipBook>
      {!!bookOptions.currentPage && (
        <BookNavigation onClickNext={onClickNext} onClickPrev={onClickPrev} />
      )}
      <StartsSlider
        showSlider={showSlider}
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
      />
    </main>
  );
};
