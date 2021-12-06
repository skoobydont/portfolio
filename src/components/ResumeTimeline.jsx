import React, { useState } from 'react';
import PropTypes from 'prop-types';
// MUI
import { makeStyles, useMediaQuery } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import IconButton from '@material-ui/core/IconButton';
// Icons
import CloseIcon from '@material-ui/icons/Close';
// Custom
import resume from '../resume.json';
// Styles
const useStyles = makeStyles((theme) => ({
  mobileRow: {
    margin: theme.spacing(1),
    marginTop: '0px',
  },
  desktopRow: {
    margin: `${theme.spacing(1)}px auto`,
    width: theme.spacing(75),
  },
  rowAction: {
    padding: theme.spacing(1),
    '& .MuiAccordionSummary-content': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      /* this is so the title text doesnt inherit
        unwanted margin when expanded */
      margin: '12px 0px',
    },
  },
  mobileRowAction: {
    '& .MuiAccordionSummary-content': {
      flexDirection: 'column',
    },
  },
  empName: {
    textAlign: 'start',
  },
  title: {
    textAlign: 'end',
  },
  doubleTitle: {
    marginTop: theme.spacing(1),
  },
  rowDescription: {
    flexDirection: 'column',
  },
  doubleDescription: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
  },
  descriptionList: {
    marginTop: '0px',
  },
}));
/**
 * Display Resume Work Experience In Timeline
 * @returns {Component}
 */
const ResumeTimeline = (props) => {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:600px)');
  const { handleClose } = props;
  const [expanded, setExpanded] = useState(null);
  /**
   * Format Date
   * @param {String | null} date the date to format
   * @returns {String} Month & Year | Present if current
   */
  const formatDate = (date) => {
    if (date !== null) {
      const theDate = new Date(date).toDateString().split(' ');
      return `${theDate[1]} ${theDate[3]}`
    } else {
      // if end date null, still there
      return 'Present';
    }
  }
  /**
   * Handle Accordion Change
   * @param {String} title which accordion to expand (null if same as expanded)
   * @fires setExpanded
   */
  const handleAccordionChange = (title) => {
    if (expanded !== title) {
      setExpanded(title);
    } else {
      setExpanded(null);
    }
  }
  /**
   * Resume Row
   * @param {Object} entry the resume entry to display within accordion 
   * @returns {Component} Resume Row Component
   */
  const ResumeRow = ({ entry, index }) => {
    const arrayTitle = Array.isArray(entry.title);
    return (
      <div className={mobile
        ? classes.mobileRow
        : classes.desktopRow}
      >
        <Accordion
          component={Card}
          expanded={expanded === entry.employer.name}
          onClick={() => handleAccordionChange(entry.employer.name)}
        >
          <AccordionSummary
            className={`${
              mobile ? classes.mobileRowAction : ''
            } ${classes.rowAction}`}
          >
            <div className={classes.empName}>
              <Typography>{entry.employer.name}</Typography>
              <Typography variant="body2">
                <i>
                  {entry.employer.city}
                  , {entry.employer.state}
                </i>
              </Typography>
            </div>
            <div className={classes.title}>
              {arrayTitle
                ? entry.title?.map((t, i) => (
                  <div
                    className={i % 2 !== 0 ? classes.doubleTitle : ''}
                    key={i}
                  >
                    {t.indexOf('/') > -1
                      ? (
                        <>
                          <Typography>{t?.split('/')[0]} /</Typography>
                          <Typography>{t?.split('/')[1]}</Typography>
                        </>
                      )
                      : <Typography>{t}</Typography>
                    }
                    <Typography variant="body2">
                      <i>
                        {`${formatDate(entry.startDate[t])}
                        - ${formatDate(entry.endDate[t])}`}
                      </i>
                    </Typography>
                  </div>
                ))
                : (
                  <>
                    <Typography>{entry.title}</Typography>
                    <Typography variant="body2">
                      <i>
                        {`${formatDate(entry.startDate)}
                        - ${formatDate(entry.endDate)}`}
                      </i>
                    </Typography>
                  </>
                )}
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.rowDescription}>
            {arrayTitle
              ? entry.title?.map((t, i) => (
                <div className={classes.doubleDescription} key={i}>
                  <Typography>{t}</Typography>
                  <ul className={classes.descriptionList}>
                    {entry.description[t]?.map((d) => (
                      <li>{d}</li>
                    ))}
                  </ul>
                </div>
              ))
              : (
                <div className={classes.doubleDescription}>
                  <ul className={classes.descriptionList}>
                    {entry.description?.map((d) => (
                      <li>{d}</li>
                    ))}
                  </ul>
                </div>
              )}
          </AccordionDetails>
        </Accordion>
        {index === resume.resume.length - 1
          ? (
            <IconButton onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
          )
          : null}
      </div>
    );
  };

  return (
    resume.resume?.length > 0
      ? resume.resume?.map((r, i) => (
          <ResumeRow
            entry={r}
            key={i}
            index={i}
          />
        ))
      : null
  );
};

ResumeTimeline.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ResumeTimeline;
