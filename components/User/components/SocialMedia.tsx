import React from "react";
import Icon from "components/Shared/Icon";

const SocialMedia = () => (
  <div className="user--social-medial--container">
    <a className="mx-2" href="#" aria-label="Twitter">
      <Icon iconType={"Twitter"} />
    </a>

    <a className="mx-2" href="#" aria-label="Facebook">
      <Icon iconType={"Facebook"} />
    </a>

    <a className="mx-2" href="#" aria-label="Linkden">
      <Icon iconType={"Linkedin"} />
    </a>

    <a className="mx-2" href="#" aria-label="Github">
      <Icon iconType={"Github"} />
    </a>
  </div>
);

export default SocialMedia;
