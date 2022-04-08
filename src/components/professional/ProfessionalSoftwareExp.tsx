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
        icons={[
          { altTxt: 'HTML5', imgSrc: '' },
          { altTxt: 'CSS', imgSrc: '' },
          { altTxt: 'JavaScript', imgSrc: '' },
        ]}
      >
        <Typography>Worked with a linen manufacturer to support digital marketing assets and websites.</Typography>
        <Typography>HTML5, CSS, JavaScript</Typography>
      </ExpRow>
      <ExpRow title="Front End Developer">
        <Typography>Assisted small digital marketing company with web site management and optimizations for 15+ clients.</Typography>
        <Typography>PHP, WordPress, HTML, CSS, JavaScript</Typography>
      </ExpRow>
      <ExpRow title="Software Engineer">
        <Typography>Worked as Full Stack developer for clients.</Typography>
        <Typography>Java, SpringBoot, JUnit, Angular, TypeScript</Typography>
      </ExpRow>
      <ExpRow title="Freelance Fullstack Developer">
        <Typography>Collaborated with restaurant owners to build out a content management system.</Typography>
        <Typography>PHP, WordPress, HTML, CSS, JavaScript</Typography>
      </ExpRow>
      <ExpRow title="Application Developer">
        <Typography>Joined a small team of developers to maintain and enhance legacy systems while also delivering new applications.</Typography>
        <Typography>PHP, Laravel, TypeScript, Material UI, JavaScript, React, Redux, Express, Jest, Docker</Typography>
      </ExpRow>
      <ExpRow title="Chief Information Technology Officer">
        <Typography>Starting as the only developer, I now also collaborate with business partners on all IT decisions.</Typography>
        <Typography>Algorand, MyAlgoConnect, React, JavaScript, Selenium</Typography>
      </ExpRow>
    </div>
  )
};

export default ProfessionalSoftwareExp;
