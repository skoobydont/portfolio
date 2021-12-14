import React, { useState } from 'react';
// MUI
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
// Icons
import DocumentIcon from '@material-ui/icons/Description';
// Custom
import TLDR from '../components/TLDR';
import ResumeTimeline from '../components/ResumeTimeline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  accordion: {
    backgroundColor: theme.palette.background.default,
  },
  workExp: {
    '& .MuiAccordionSummary-content': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      /* this is so the title text doesnt inherit
        unwanted margin when expanded */
      margin: '12px 0px',
    },
  },
  workExpTitle: {
    marginLeft: theme.spacing(1),
    padding: '0px',
  },
  resumeList: {
    flexDirection: 'column',
    padding: '0px',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const [resumeExpand, setResumeExpand] = useState(false);
  const handleResumeExpand = () => setResumeExpand(!resumeExpand);
  return (
    <div className={classes.root}>
      {/* <TLDR /> */}
      <Accordion
        component={Card}
        expanded={resumeExpand}
        className={classes.accordion}
      >
        <AccordionSummary
          onClick={() => handleResumeExpand()}
          className={classes.workExp}
        >
          <DocumentIcon />
          <Typography className={classes.workExpTitle}>Work Experience</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.resumeList}>
          <ResumeTimeline
            handleClose={handleResumeExpand}
          />          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default LandingPage;
