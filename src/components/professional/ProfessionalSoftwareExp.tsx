import React from 'react';
// MUI
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
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

const ProfessionalSoftwareExp = () => {
  const classes = useStyles();

  return (
    <div
      data-testid="professionalSoftware"
      className={classes.root}
    >
      <Typography variant="h6">
        Professional Software Experience        
      </Typography>
      <ExpRow
        title="Developer Co-Op"
        tech={[
          { text: 'HTML', href: process.env.REACT_APP_HTML_URL },
          { text: 'CSS', href: process.env.REACT_APP_CSS_URL },
          { text: 'JavaScript', href: process.env.REACT_APP_JAVASCRIPT_URL },
        ]}
      >
        <Typography>Worked with a linen manufacturer to support digital marketing assets and websites.</Typography>
      </ExpRow>
      <ExpRow
        title="Front End Developer"
        tech={[
          { text: 'PHP', href: process.env.REACT_APP_PHP_URL },
          { text: 'WordPress', href: process.env.REACT_APP_WORDPRESS_URL },
          { text: 'HTML', href: process.env.REACT_APP_HTML_URL },
          { text: 'CSS', href: process.env.REACT_APP_CSS_URL },
          { text: 'JavaScript', href: process.env.REACT_APP_JAVASCRIPT_URL },
        ]}
      >
        <Typography>Assisted small digital marketing company with web site management and optimizations for 15+ clients.</Typography>
      </ExpRow>
      <ExpRow
        title="Software Engineer"
        tech={[
          { text: 'Java', href: process.env.REACT_APP_JAVA_URL },
          { text: 'SpringBoot', href: process.env.REACT_APP_SPRINGBOOT_URL },
          { text: 'JUnit', href: process.env.REACT_APP_JUNIT_URL },
          { text: 'Angular', href: process.env.REACT_APP_ANGULAR_URL },
          { text: 'TypeScript', href: process.env.REACT_APP_TYPESCRIPT_URL },
        ]}
      >
        <Typography>Worked as Full Stack developer for clients.</Typography>
      </ExpRow>
      <ExpRow
        title="Freelance Fullstack Developer"
        tech={[
          { text: 'PHP', href: process.env.REACT_APP_PHP_URL },
          { text: 'WordPress', href: process.env.REACT_APP_WORDPRESS_URL },
          { text: 'HTML', href: process.env.REACT_APP_HTML_URL },
          { text: 'CSS', href: process.env.REACT_APP_CSS_URL },
          { text: 'JavaScript', href: process.env.REACT_APP_JAVASCRIPT_URL },
        ]}
      >
        <Typography>Collaborated with restaurant owners to build out a content management system.</Typography>
      </ExpRow>
      <ExpRow
        title="Application Developer"
        tech={[
          { text: 'PHP', href: process.env.REACT_APP_PHP_URL },
          { text: 'Laravel', href: process.env.REACT_APP_LARAVEL_URL },
          { text: 'TypeScript', href: process.env.REACT_APP_TYPESCRIPT_URL },
          { text: 'Material UI', href: process.env.REACT_APP_MATERIALUI_URL },
          { text: 'JavaScript', href: process.env.REACT_APP_JAVASCRIPT_URL },
          { text: 'React', href: process.env.REACT_APP_REACT_URL },
          { text: 'Redux', href: process.env.REACT_APP_REDUX_URL },
          { text: 'Express', href: process.env.REACT_APP_EXPRESS_URL },
          { text: 'Jest', href: process.env.REACT_APP_JEST_URL },
          { text: 'Docker', href: process.env.REACT_APP_DOCKER_URL },
        ]}
      >
        <Typography>Joined a small team of developers to maintain and enhance legacy systems while also delivering new applications.</Typography>
      </ExpRow>
      <ExpRow
        title="Chief Information Technology Officer"
        tech={[
          { text: 'Algorand', href: process.env.REACT_APP_ALGORAND_URL },
          { text: 'MyAlgoConnect', href: process.env.REACT_APP_MYALGOCONNECT_URL },
          { text: 'React', href: process.env.REACT_APP_REACT_URL },
          { text: 'JavaScript', href: process.env.REACT_APP_JAVASCRIPT_URL },
          { text: 'Selenium', href: process.env.REACT_APP_SELENIUM_URL },
        ]}
      >
        <Typography>Starting as the only developer, I now also collaborate with business partners on all IT decisions.</Typography>
      </ExpRow>
    </div>
  )
};

export default ProfessionalSoftwareExp;
