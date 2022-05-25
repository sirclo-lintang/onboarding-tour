import { Step } from "react-joyride";
import OnboardingTour from "../OnboardingTour";

const ChannelOnboardingTour = () => {
  return <OnboardingTour steps={steps} />;
};

export default ChannelOnboardingTour;

const steps: Step[] = [
  {
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
    non enim praesent elementum facilisis leo vel.`,
    disableBeacon: true,
    placement: "right",
    target: "#drawer-menu",
    title: "Menu Channel Percakapan",
    showSkipButton: false,
  },
  {
    content: "You can interact with your own components through the spotlight",
    disableBeacon: true,
    placement: "bottom",
    target: "#text1",
    title: "Menu",
  },
  {
    content: "You can interact with your own components through the spotlight",
    disableBeacon: true,
    placement: "bottom",
    target: "#channel1",
    title: "Channel 1",
  },
  {
    content: "You can interact with your own components through the spotlight",
    disableBeacon: true,
    placement: "bottom",
    target: "#channel2",
    title: "Channel 2",
  },
];
