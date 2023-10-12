import React, { FC } from 'react';

export const BookCover = React.forwardRef((props: any, ref: any) => {
  return (
    <>
      <div className="page page-cover" ref={ref} data-density="hard"></div>;
    </>
  );
});
