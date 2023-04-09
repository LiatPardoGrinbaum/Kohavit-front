import { Box } from "@mui/material";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const PageContainer = (props: Props) => {
  return (
    <Box
      id="treatments"
      minHeight="100vh"
      width="100%"
      sx={{
        position: "relative",
        // backgroundColor: "primary.light",
        backgroundImage: "linear-gradient(to right, #bba296 0%, white 100%)",
        // paddingTop: "2rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
      }}>
      {props.children}
    </Box>
  );
};

export default PageContainer;
