import InfoTitle from "./InfoTitle";

const InfoContent = () => (
  <div className="info--content--wrapper">
    <InfoTitle />
    <p className="info--content">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
      reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim
      expedita aperiam mollitia iure consectetur dicta tenetur, porro
      consequuntur saepe accusantium consequatur.
    </p>

    <div className="mt-8">
      <a href="#" className="info--button">
        Start Now
      </a>
    </div>
  </div>
);

export default InfoContent;
