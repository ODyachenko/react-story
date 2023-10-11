import React, { FC, useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { BookCover } from '../BookCover/BookCover';
import { BookNavigation } from '../BookNavigation/BookNavigation';
import { PageList } from '../Pages/PageList';

export const Book: FC = () => {
  const bookRef: any = useRef(null);
  const [bookOptions, setBookOptions] = useState({
    orientation: '',
    isFixed: true,
    currentPage: 0,
  });

  const getPageStatus = () => {
    const pageMap = {
      portrait: 'portrait',
      landscape: 'landscape',
    };
    const status = bookRef.current.pageFlip().getOrientation();
    setBookOptions({ ...bookOptions, orientation: status });
  };

  const onClickNext = () => {
    bookRef.current.pageFlip().flipNext();
  };
  const onClickPrev = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  const onFlip = (event: any) => {
    setBookOptions({ ...bookOptions, currentPage: event.data });
  };

  const onChangeState = (instance: any) => {
    // console.log("instance", instance);
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
        useMouseEvents={true}
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
    </main>
  );
};
