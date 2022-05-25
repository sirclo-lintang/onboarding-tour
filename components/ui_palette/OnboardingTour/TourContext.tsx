import { createContext, useContext } from "react";

export enum Tour {
  ONBOARDING_CHANNEL = "ONBOARDING_CHANNEL",
}

export type TourContextType = {
  tour?: Tour;
  setTour: React.Dispatch<React.SetStateAction<Tour | undefined>>;
  run: boolean;
  setRun: React.Dispatch<React.SetStateAction<boolean>>;
};

const tourContext = createContext<TourContextType>({
  tour: undefined,
  setTour: () => {},
  run: false,
  setRun: () => {},
});

export const useTourContext = () => useContext(tourContext);

export default tourContext;
