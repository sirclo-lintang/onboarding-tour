import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Joyride, {
  CallBackProps,
  STATUS,
  ACTIONS,
  Step,
  LIFECYCLE,
  TooltipRenderProps,
} from "react-joyride";

import { useTourContext } from "./TourContext";

type OnboardingTourProps = {
  steps: Step[];
};

const OnboardingTour = ({ steps }: OnboardingTourProps) => {
  const { run, setRun } = useTourContext();
  const [stepIndex, setStepIndex] = useState(0);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { action, index, status, lifecycle } = data;

    const isValidAction =
      (action === ACTIONS.NEXT || action === ACTIONS.PREV) &&
      lifecycle === LIFECYCLE.COMPLETE &&
      status !== STATUS.PAUSED;

    const isTourStopped =
      action === ACTIONS.CLOSE ||
      status === STATUS.FINISHED ||
      status === STATUS.SKIPPED;

    if (isValidAction) {
      const newStepIndex = index + (action === ACTIONS.PREV ? -1 : 1);
      return setStepIndex(newStepIndex);
    }

    if (isTourStopped) {
      setRun(false);
      setStepIndex(0);
      return;
    }
  };

  return (
    <Joyride
      continuous={true}
      run={run}
      tooltipComponent={Tooltip}
      steps={steps}
      stepIndex={stepIndex}
      scrollToFirstStep={true}
      showProgress={true}
      showSkipButton={true}
      callback={handleJoyrideCallback}
      disableOverlayClose
      styles={{
        options: {
          zIndex: 10000,
          arrowColor: "rgba(0, 0, 0, 0)",
          primaryColor: "#269CD9",
        },
      }}
    />
  );
};

const Tooltip = ({
  continuous,
  index,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps,
  size,
  isLastStep,
}: TooltipRenderProps) => (
  <Box {...tooltipProps} bgcolor="#FFFFFF" padding="16px 24px" maxWidth="450px">
    {/* Title */}
    <Box display="flex" justifyContent="space-between" alignItems="center">
      {step.title && (
        <Box marginBottom="8px">
          <Typography sx={{ color: "#269CD9" }}>{step.title}</Typography>
        </Box>
      )}

      <IconButton {...closeProps}>
        <CloseIcon />
      </IconButton>
    </Box>

    {/* Content */}
    <Box>{step.content}</Box>

    {/* Footer */}
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box>
        {index + 1} dari {size}
      </Box>

      <Box>
        {index > 0 && (
          <IconButton sx={{ border: "1px solid #ECF0F2" }} {...backProps}>
            <ArrowBackIcon />
          </IconButton>
        )}
        {!isLastStep && continuous && (
          <IconButton sx={{ border: "1px solid #ECF0F2" }} {...primaryProps}>
            <ArrowForwardIcon />
          </IconButton>
        )}
        {isLastStep && (
          <IconButton
            sx={{ border: "1px solid #ECF0F2", backgroundColor: "#1C9AEA" }}
            {...closeProps}
          >
            <DoneIcon sx={{ color: "#fff" }} />
          </IconButton>
        )}
      </Box>
    </Box>
  </Box>
);

export default OnboardingTour;
