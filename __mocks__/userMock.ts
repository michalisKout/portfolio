import { build, fake } from '@jackfranklin/test-data-bot';

const contetfulTextField = {
  data: {},
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'test value',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
  ],
  nodeType: 'document',
};

export const mockDataBuilder = build<any>('data', {
  fields: {
    description: contetfulTextField,
    profileImageUrl: fake((f) => f.random.alphaNumeric()),
    projects: Array(3)
      .fill(null)
      .map((item) => ({
        title: fake((f) => f.name.title()),
        stack: fake((f) => f.address.city()),
        link: fake((f) => f.name.title()),
        imageUrl: fake((f) => f.image.imageUrl(10)),
      })),
    job: {
      description: contetfulTextField,
      imageUrl: fake((f) => f.image.imageUrl(10)),
    },
  },
});

export default {
  description: contetfulTextField,
  profileImageUrl: 'url',
  projects: Array(3)
    .fill(null)
    .map((item) => ({
      title: 'title',
      stack: 'stack',
      link: 'link',
      imageUrl: 'image url',
    })),
  job: {
    description: contetfulTextField,
    imageUrl: 'image url',
  },
};
