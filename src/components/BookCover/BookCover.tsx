import React from 'react';

export const BookCover = React.forwardRef(
  (props: React.RefAttributes<unknown>, ref: React.Ref<any>) => {
    return (
      <>
        <div className="page page-cover" ref={ref} data-density="hard"></div>
      </>
    );
  }
);
