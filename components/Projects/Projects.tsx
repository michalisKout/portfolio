import React, { FC } from 'react';
import Project from './Project';
import { EntryCollection } from 'contentful';
import PrimaryTitle from '../Shared/PrimaryTitle';

interface Props {
  projects: EntryCollection<any>[];
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
