import React, { FC } from 'react';

interface Props {
  title: string;
  link: string;
  stack: string;
  imageUrl: string;
}

const Project: FC<Props> = ({ title, link, stack, imageUrl }) => {
  const imageStyle = {
    width: 350,
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <article className="project--container">
      <div className={'project--image-wrapper'}>
        <div className="project--image" style={imageStyle} />
      </div>

      <div className="project--title-wrapper">
        <h3 className="project--title capitalize">{title}</h3>

        <div className="project--info-wrapper">
          <span className="font-bold text-gray-800 dark:text-gray-200 uppercase text-xs max-w-sm">
            {stack}
          </span>
          <a href={link} className="project--link">
            github
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
