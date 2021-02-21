import { createClient } from 'contentful';

console.log(process.env.CONTENTFUL_SPACE_ID);
export default createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'test',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'test',
});
