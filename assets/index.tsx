import twitter from "assets/twitter.svg";
import facebook from "assets/facebook.svg";
import linkedin from "assets/linkedin.svg";
import github from "assets/github.svg";

const icons = {
  Linkedin: linkedin,
  Facebook: facebook,
  Twitter: twitter,
  Github: github,
} as const;

const Icon = ({ iconType }: { iconType: keyof typeof icons }) => {
  const SvgIcon = icons[iconType];
  return (
    <span className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
      <SvgIcon />
    </span>
  );
};

export default Icon;
