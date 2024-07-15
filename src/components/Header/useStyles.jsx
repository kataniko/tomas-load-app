
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  title: {
    color: theme.palette.common.white,
    fontSize: "2rem",
    fontWeight: 600,
  },
  searchInput: {
    width: "100%",
    maxWidth: "300px",
    "& .MuiOutlinedInput-input": {
      color: theme.palette.common.white,
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.common.white,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.dark,
      },
    },
  },
  box2: {
    marginTop: 5,
    [theme.breakpoints.down("sm")]: {
      marginTop: 15,
    },
  },
  select: {
    minWidth: 150,
    color: theme.palette.common.white,
    "& .MuiInputLabel-root": {
      color: theme.palette.common.white,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.dark,
      },
    },
  },
}));

export default useStyles;
