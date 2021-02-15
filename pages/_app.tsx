import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Navigation from "../components/Navigation/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
