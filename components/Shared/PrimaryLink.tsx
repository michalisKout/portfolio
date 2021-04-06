import React from 'react';

const PrimaryLink = ({ text = 'Michalis Koutridis' }: { text?: string }) => {
  return (
    <div>
      <a className="link-primary" href="#">
        {text}
      </a>
    </div>
  );
};

export default PrimaryLink;
