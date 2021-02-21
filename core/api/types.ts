import { ContentfulClientApi, Entry } from "contentful";

export interface ICmsAPI {
  client: ContentfulClientApi;
  fetchEntries: (query: any) => void;
  getBlogPosts: (handler: (items: Entry<unknown>[]) => void) => void;
  getSinglePost: (slug: string) => void;
}
