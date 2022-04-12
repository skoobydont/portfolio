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
// Tech List Urls
const HTML_URL = 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5';
const CSS_URL = 'https://developer.mozilla.org/en-US/docs/Web/CSS';
const JAVASCRIPT_URL = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
const PHP_URL = 'https://www.php.net/';
const WORDPRESS_URL = 'https://wordpress.org/';
const JAVA_URL = 'https://docs.oracle.com/en/java/index.html';
const SPRINGBOOT_URL = 'https://spring.io/projects/spring-boot';
const JUNIT_URL = 'https://junit.org/junit5/docs/current/user-guide/';
const ANGULAR_URL = 'https://angular.io/';
const TYPESCRIPT_URL = 'https://www.typescriptlang.org/';

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
          { text: 'JavaScript', href: JAVASCRIPT_URL },
        ]}
      >
        <Typography>Worked with a linen manufacturer to support digital marketing assets and websites.</Typography>
      </ExpRow>
      <ExpRow
        title="Front End Developer"
        tech={[
          { text: 'PHP', href: PHP_URL },
          { text: 'WordPress', href: WORDPRESS_URL },
          { text: 'HTML', href: HTML_URL },
          { text: 'CSS', href: CSS_URL },
          { text: 'JavaScript', href: JAVASCRIPT_URL },
        ]}
      >
        <Typography>Assisted small digital marketing company with web site management and optimizations for 15+ clients.</Typography>
      </ExpRow>
      <ExpRow
        title="Software Engineer"
        tech={[
          { text: 'Java', href: JAVA_URL },
          { text: 'SpringBoot', href: SPRINGBOOT_URL },
          { text: 'JUnit', href: JUNIT_URL },
          { text: 'Angular', href: ANGULAR_URL },
          { text: 'TypeScript', href: TYPESCRIPT_URL },
        ]}
      >
        <Typography>Worked as Full Stack developer for clients.</Typography>
      </ExpRow>
      <ExpRow
        title="Freelance Fullstack Developer"
        tech={[
          { text: 'PHP', href: PHP_URL },
          { text: 'WordPress', href: WORDPRESS_URL },
          { text: 'HTML', href: HTML_URL },
          { text: 'CSS', href: CSS_URL },
          { text: 'JavaScript', href: JAVASCRIPT_URL },
        ]}
      >
        <Typography>Collaborated with restaurant owners to build out a content management system.</Typography>
      </ExpRow>
      <ExpRow
        title="Application Developer"
        tech={[
          { text: 'PHP', href: PHP_URL },
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
