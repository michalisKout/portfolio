import FooterTitle from "./components/FooterTitle";
import Subscribe from "./components/Subscribe";
import PrimaryLink from "../Shared/PrimaryLink";
import NavItems from "../Shared/NavItems";

const Footer = () => (
  <footer className="footer">
    <div className="container py-6">
      <FooterTitle />
      <div className="flex justify-center mt-6">
        <Subscribe />
      </div>

      <hr className="breaking-line" />

      <div className="footer--menu">
        <PrimaryLink />

        <div className="footer--menu-wrapper">
          <NavItems
            wrapperClassName={"-mx-4"}
            itemClassName={"footer--menu--link"}
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
