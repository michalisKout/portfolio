import { createClient } from 'contentful';

export default createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'test',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'test',
});
