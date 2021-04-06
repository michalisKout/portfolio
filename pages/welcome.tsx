// @ts-nocheck
import User from '../components/User/User';
import Footer from '../components/Footer/Footer';
import InfoSection from '../components/InfoSection/InfoSection';
import CmsAPI from '../core/api';
import { FC } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GetStaticProps } from 'next';
import userMock from '__mocks__/userMock';
import Projects from '../components/Projects/Projects';
import { Document } from '@contentful/rich-text-types';
import { useDarkModeClassName } from '../core/hooks/utils/useDarkModeClassName';
import { EntryCollection } from 'contentful';

interface Props {
  data: {
    description: Document;
    profileImageUrl: string;
    projects: EntryCollection<any>;
    job: {
      description: Document;
      imageUrl: string;
    };
  };
}

const Welcome: FC<Props> = ({ data = userMock }) => {
  const darkModeClass = useDarkModeClassName();

  return (
    <main className={darkModeClass}>
      <InfoSection
        imgUrl={data?.profileImageUrl}
        mainContent={documentToReactComponents(data?.description as Document)}
      />
      <Projects projects={data?.projects as Projects} />
      <User
        imgUrl={data?.job.imageUrl}
        mainContent={documentToReactComponents(data?.job.description as Document)}
      />

      <Footer />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const userDetails = await CmsAPI.getUserDetails();
  const projects = await CmsAPI.getBlogPosts();
  const jobStatus = await CmsAPI.getJobStatus();

  const normalizedData = {
    description: userDetails?.items[0]?.fields?.mainDescription,
    profileImageUrl: userDetails?.includes?.Asset[0]?.fields?.file?.url,
    projects: projects.map((project) => ({
      title: project.fields?.postTitle,
      stack: project.fields?.stack,
      link: project.fields?.externalLink,
      imageUrl: project.fields.postImage.fields.file.url,
    })),
    job: {
      description: jobStatus.items[0].fields.jobDescription,
      imageUrl: jobStatus.items[0].fields.image.fields.file.url,
    },
  };

  return {
    props: { data: normalizedData },
  };
};

export default Welcome;
