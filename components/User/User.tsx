import PrimaryTitle from "../Shared/PrimaryTitle";
import UserContent from "./components/UserContent";
import SocialMedia from "./components/SocialMedia";
import UserImage from "./components/UserImage";
import { FC, ReactNode } from "react";

interface Props {
  mainContent: ReactNode;
  imgUrl: string;
}
const User: FC<Props> = ({ imgUrl, mainContent }) => {
  return (
    <>
      <section className="user--section">
        <div className="user--inner-container">
          <div className="user--inner-wrapper">
            <div className="lg:w-1/2">
              <PrimaryTitle />
              <UserContent content={mainContent} />
              <SocialMedia />
            </div>
            <UserImage imgUrl={imgUrl} />
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
