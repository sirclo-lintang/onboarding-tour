import { useState, useEffect } from "react";

import TourContext, { Tour } from "./TourContext";
import ChannelOnboardingTour from "./Tours/ChannelOnboardingTour";

const TourProvider = (props: any) => {
  const [tour, setTour] = useState<Tour>();
  const [run, setRun] = useState<boolean>(false);

  const renderTour = () => {
    switch (tour) {
      case Tour.ONBOARDING_CHANNEL:
        return <ChannelOnboardingTour />;
      default:
        return null;
    }
  };

  return (
    <TourContext.Provider value={{ tour, setTour, run, setRun }}>
      {props.children}
      {renderTour()}
    </TourContext.Provider>
  );
};

export default TourProvider;
