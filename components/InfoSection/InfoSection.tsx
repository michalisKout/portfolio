import InfoContent from './components/InfoContent';
import { FC, ReactNode } from 'react';

interface Props {
  mainContent: ReactNode;
  imgUrl: string;
}

const InfoSection: FC<Props> = ({ mainContent, imgUrl }) => (
  <section className="main--section info--container pt-20 pb-20">
    <div className="info--wrapper">
      <div className="lg:w-1/2">
        <div
          className="info--image"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        />
      </div>
      <InfoContent content={mainContent} />
    </div>
  </section>
);

export default InfoSection;
