import User from "../components/User/User";
import Footer from "../components/Footer/Footer";
import InfoSection from "../components/InfoSection/InfoSection";
import CmsAPI from "../core/api";
import { FC } from "react";
import { useDarkMode } from "core/providers/DarkModeProvider";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface Props {
  userDetails: Record<any, any>;
}
const Home: FC<Props> = ({ userDetails }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <main className={`${isDarkMode ? "dark" : ""}`}>
      <User
        imgUrl={userDetails.includes.Asset[0].fields.file.url}
        mainContent={documentToReactComponents(
          userDetails.items[0].fields.mainDescription
        )}
      />
      <InfoSection />
      <Footer />
    </main>
  );
};

export async function getStaticProps() {
  const userDetails = await CmsAPI.getUserDetails();

  return {
    props: { userDetails },
  };
}

export default Home;
