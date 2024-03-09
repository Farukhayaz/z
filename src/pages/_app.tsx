import Navbar from '../components/navbar';
import '../styles/globals.css';
// import "../styles/navbar.css"

interface MyAppProps {
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}

function MyApp({ Component, pageProps }: MyAppProps): JSX.Element {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
