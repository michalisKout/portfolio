import PrimaryTitle from "../Shared/PrimaryTitle";
import UserContent from "./components/UserContent";
import SocialMedia from "./components/SocialMedia";
import UserImage from "./components/UserImage";

const User = () => {
  return (
    <>
      <section className="user--section">
        <div className="user--inner-container">
          <div className="user--inner-wrapper">
            <div className="lg:w-1/2">
              <PrimaryTitle />
              <UserContent />
              <SocialMedia />
            </div>
            <UserImage />
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
