import React, { FC } from 'react';
import Project from './Project';
import PrimaryTitle from '../Shared/PrimaryTitle';

export type Projects = {
  title: string;
  link: string;
  stack: string;
  imageUrl: string;
}[];

interface Props {
  projects: Projects;
}

const Projects: FC<Props> = ({ projects }) => {
  return (
    <section className={'secondary--section'}>
      <div className={'flex justify-center pt-20'}>
        <PrimaryTitle title={'Some of my projects'} />
      </div>
      <div className={'projects--container'}>
        {projects.map((project, index) => (
          <Project key={`project_${index}`} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
