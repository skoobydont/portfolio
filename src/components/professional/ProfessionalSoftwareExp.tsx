import React from 'react';
// MUI
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
// Icons
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';
// Custom
import ExpRow from '../ExpRow';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
}));
// Image Icon Urls
const HTML_URL = "https://developer.mozilla.org/en-US/docs/Glossary/HTML5";
const CSS_URL = "https://developer.mozilla.org/en-US/docs/Web/CSS";
const JS_URL = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";


const ProfessionalSoftwareExp = () => {
  /*/ Important details to cover:
    1. Project overview
    2. Technologies Used
    3. Growth area(s)

  */
  const classes = useStyles();
  return (
    <div
      data-testid="professionalSoftware"
      className={classes.root}
      id="professionalSoftware"
    >
      <Typography variant="h6">
        Professional Software Experience        
      </Typography>
      <ExpRow
        title="Developer Co-Op"
        tech={[
          { text: 'HTML', href: HTML_URL },
          { text: 'CSS', href: CSS_URL },
          { text: 'JavaScript', href: JS_URL },
        ]}
      >
        <Typography>Worked with a linen manufacturer to support digital marketing assets and websites.</Typography>
      </ExpRow>
      <ExpRow
        title="Front End Developer"
        tech={[
          { text: 'PHP', href: '' },
          { text: 'WordPress', href: '' },
          { text: 'HTML', href: '' },
          { text: 'CSS', href: '' },
          { text: 'JavaScript', href: '' },
        ]}
      >
        <Typography>Assisted small digital marketing company with web site management and optimizations for 15+ clients.</Typography>
      </ExpRow>
      <ExpRow
        title="Software Engineer"
        tech={[
          { text: 'Java', href: '' },
          { text: 'SpringBoot', href: '' },
          { text: 'JUnit', href: '' },
          { text: 'Angular', href: '' },
          { text: 'TypeScript', href: '' },
        ]}
      >
        <Typography>Worked as Full Stack developer for clients.</Typography>
      </ExpRow>
      <ExpRow
        title="Freelance Fullstack Developer"
        tech={[
          { text: 'PHP', href: '' },
          { text: 'WordPress', href: '' },
          { text: 'HTML', href: '' },
          { text: 'CSS', href: '' },
          { text: 'JavaScript', href: '' },
        ]}
      >
        <Typography>Collaborated with restaurant owners to build out a content management system.</Typography>
      </ExpRow>
      <ExpRow
        title="Application Developer"
        tech={[
          { text: 'PHP', href: '' },
          { text: 'Laravel', href: '' },
          { text: 'TypeScript', href: '' },
          { text: 'Material UI', href: '' },
          { text: 'JavaScript', href: '' },
          { text: 'React', href: '' },
          { text: 'Redux', href: '' },
          { text: 'Express', href: '' },
          { text: 'Jest', href: '' },
          { text: 'Docker', href: '' },
        ]}
      >
        <Typography>Joined a small team of developers to maintain and enhance legacy systems while also delivering new applications.</Typography>
      </ExpRow>
      <ExpRow
        title="Chief Information Technology Officer"
        tech={[
          { text: 'Algorand', href: '' },
          { text: 'MyAlgoConnect', href: '' },
          { text: 'React', href: '' },
          { text: 'JavaScript', href: '' },
          { text: 'Selenium', href: '' },
        ]}
      >
        <Typography>Starting as the only developer, I now also collaborate with business partners on all IT decisions.</Typography>
      </ExpRow>
    </div>
  )
};

export default ProfessionalSoftwareExp;
