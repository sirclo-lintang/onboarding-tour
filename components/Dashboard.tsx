import { Typography, Box, Button } from "@mui/material";

import {
  useTourContext,
  Tour,
} from "../components/ui_palette/OnboardingTour/TourContext";

const Dashboard = () => {
  const { setTour, setRun } = useTourContext();

  const handleOpenTour = () => {
    setTour(Tour.ONBOARDING_CHANNEL);
    setRun(true);
  };

  return (
    <>
      <Box marginY="20px">
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenTour}
          disableElevation
        >
          Start Tour
        </Button>
      </Box>

      <Typography paragraph id="text1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>

      <Box display="flex" gap="50px">
        <Box
          id="channel1"
          marginY="20px"
          padding="50px"
          border="1px solid #269CD9"
          width="fit-content"
          bgcolor="white"
        >
          Tambah Channel 1
        </Box>
        <Box
          id="channel2"
          marginY="20px"
          padding="50px"
          border="1px solid #269CD9"
          width="fit-content"
          bgcolor="white"
        >
          Tambah Channel 2
        </Box>
      </Box>

      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Typography>
    </>
  );
};

export default Dashboard;
