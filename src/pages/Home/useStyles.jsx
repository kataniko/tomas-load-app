import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1440,
    marginTop: theme.spacing(2),
  },
 
  countryList: {
    "& .country-list": {
      marginTop: theme.spacing(2),
    },
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
