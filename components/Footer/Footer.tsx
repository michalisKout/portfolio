import PrimaryLink from '../Shared/PrimaryLink';

const Footer = () => (
  <footer className="footer">
    <div className="container py-6">
      <hr className="breaking-line" />

      <div className="footer--menu">
        <PrimaryLink text={'michalis.koutridis@gmail.com'} />

        <div className="footer--menu-wrapper">
          Made with <a href="https://nextjs.org/"> next js </a>,
          <a href="https://www.typescriptlang.org/"> typescript </a>,
          <a href="https://tailwindcss.com/"> tailwindcss </a>,
          <a href="https://www.contentful.com/"> contentful</a> and
          <a href="https://merakiui.com/"> merakiui </a>.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
