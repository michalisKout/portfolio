import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Navigation from '../components/Navigation/Navigation';
import DarkModeProvider from 'core/providers/DarkModeProvider';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <link rel="shortcut icon" href="/favicon.ico" />
      <Navigation />
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
