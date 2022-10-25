import React from 'react';

function PagesContent({ content }) {
  return (
    <>
      {content.map((page) => (
        <div key={page.id} className="dummy-content">
          {page.page}
        </div>
      ))}
    </>
  );
}

export default PagesContent;
