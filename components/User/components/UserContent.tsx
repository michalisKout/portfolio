import { FC, ReactNode } from "react";

interface Props {
  content: ReactNode;
}
const UserContent: FC<Props> = ({ content }) => (
  <section className="user--content">{content && content}</section>
);

export default UserContent;
