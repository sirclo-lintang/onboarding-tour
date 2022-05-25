import "../styles/globals.css";
import type { AppProps } from "next/app";

import TourProvider from "../components/ui_palette/OnboardingTour/TourProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TourProvider>
      <Component {...pageProps} />
    </TourProvider>
  );
}

export default MyApp;
