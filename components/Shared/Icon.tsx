import React, { FC } from "react";
import twitter from "components/assets/twitter.svg";
import facebook from "components/assets/facebook.svg";
import linkedin from "components/assets/linkedin.svg";
import github from "components/assets/github.svg";
import isEmpty from "lodash/isEmpty";

const icons = {
  Linkedin: linkedin,
  Facebook: facebook,
  Twitter: twitter,
  Github: github,
} as const;

interface Props {
  iconType: keyof typeof icons;
}

const Icon: FC<Props> = ({ iconType }) => {
  const SvgIcon = icons[iconType];

  return !isEmpty(SvgIcon) ? (
    <span className="icon-svg">
      <SvgIcon />
    </span>
  ) : null;
};

export default Icon;
