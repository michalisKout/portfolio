import InfoTitle from './InfoTitle';
import { FC, ReactNode } from 'react';

interface Props {
  content: ReactNode;
}

const InfoContent: FC<Props> = ({ content }) => (
  <div className="info--content--wrapper">
    <InfoTitle />
    <p className="info--content">{content}</p>
  </div>
);

export default InfoContent;
