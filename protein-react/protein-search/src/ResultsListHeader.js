import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./App.css";
const useStyles = makeStyles((theme) => ({}));

function ResultsListHeader() {
  const classes = useStyles();

  return (
    <Grid container item xs={12} direction="column">
      <Grid
        item
        container
        xs={12}
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid
          item
          xs={1}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Typography><strong>Status</strong></Typography>
        </Grid>
        <Grid
          item
          xs={3}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Typography><strong>Time</strong></Typography>
        </Grid>
        <Grid
          item
          xs={2}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Typography><strong>Location</strong></Typography>
        </Grid>
        <Grid
          item
          xs={6}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Typography><strong>Protein Name</strong></Typography>
        </Grid>
      </Grid>
      <Divider style={{ marginBottom: 10 }} />
    </Grid>
  );
}

export default ResultsListHeader;
