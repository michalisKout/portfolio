import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Navigation from "../components/Navigation/Navigation";
import DarkModeProvider from "core/providers/DarkModeProvider";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <DarkModeProvider>
      <Navigation />
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
