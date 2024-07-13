import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "75vh",
    gap: theme.spacing(4),
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  flagImage: {
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(1),
  },
  title: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    fontWeight: 600,
  },
  text: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
