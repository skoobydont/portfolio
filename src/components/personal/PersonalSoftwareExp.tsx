import React from 'react';
// MUI
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
// Custom
import ExpRow from '../ExpRow';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: 'auto',
  },
}));

const PersonalSoftwareExp = () => {
  // Portfolio, College
  const classes = useStyles();

  return (
    <div data-testid="personalSoftware" className={classes.root}>
      <Typography>
        Personal Software Experience
      </Typography>
      <ExpRow
        title="College"
        tech={[
          { text: 'C#', href: process.env.REACT_APP_CSHARP_URL },
          { text: 'Java', href: process.env.REACT_APP_JAVA_URL }
        ]}
      >
        <Typography>
          I had multiple programming classes throughout college where we built desktop applications in C# and dove into OOP with Java.
        </Typography>
        <Typography>
          Checkout my <a href={process.env.REACT_APP_GITHUB_URL + '/college'} target="_blank">github</a> for code samples!
        </Typography>
      </ExpRow>
      <ExpRow
        title="This Portfolio!"
        tech={[
          { text: 'Bootstrap', href: process.env.REACT_APP_BOOTSTRAP_URL },
          { text: 'HTML', href: process.env.REACT_APP_HTML_URL },
          { text: 'React', href: process.env.REACT_APP_REACT_URL },
          { text: 'JavaScript', href: process.env.REACT_APP_JAVASCRIPT_URL },
          { text: 'Material UI', href: process.env.REACT_APP_MATERIALUI_URL },
          { text: 'TypeScript', href: process.env.REACT_APP_TYPESCRIPT_URL },
        ]}
      >
        <Typography>This started as a quick static portfolio site utilizing the Bootstrap framework</Typography>
        <Typography>I recently decided to revamp it with React &amp; Material UI (&amp; migrated to TypeScript)</Typography>
      </ExpRow>
    </div>
  )
};

export default PersonalSoftwareExp;
