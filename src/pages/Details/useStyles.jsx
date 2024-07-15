import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100%",
    gap: theme.spacing(2), // Reduce gap for smaller screens
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        gap: theme.spacing(1), // Further reduce gap for small screens
        padding: "20px 20px",
      },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(1), // Further reduce gap for small screens
      padding: "20px 20px",
    },
  },

  container2: {
    flex: "1 1 50%",
    [theme.breakpoints.down("md")]: {
        flex: "1 1 25%",
        display: "flex",
        alignItems: "center",
      },
    [theme.breakpoints.down("sm")]: {
      flex: "1 1 25%",
      display: "flex",
      alignItems: "center",
    },
  },

  background: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "1400px",
    width: "75%",
    height: "70%",
    border: 1,
    borderRadius: 20,
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(5px)",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      height: "auto",
    },
  },

  flagImage: {
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(1),
    maxWidth: "400px",
    maxHeight: "320px",
    marginBottom: theme.spacing(2), // Add margin bottom for spacing on small screens
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%", // Adjust width to fit smaller screens
    },
  },

  title: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    fontWeight: 600,
    textAlign: "initial",
    lineHeight: "2rem !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px !important",
    },
  },
  text: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
    textAlign: "initial",
    lineHeight: "2rem !important",
    width: "100% !important",
  },

  // Custom styles for specific parts
  label: {
    color: theme.palette.text.secondary, // Customize label color here
    fontWeight: 600,
    marginRight: theme.spacing(1),
  },

  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer2: {
    position: "absolute",
    top: 10,
    left: 10,
  },

  button: {
    marginLeft: "10px !important",
    marginBottom: "5px",
    height: "20px",
  },
}));

export default useStyles;
