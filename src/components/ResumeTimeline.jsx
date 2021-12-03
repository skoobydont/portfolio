import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// Custom
import resume from '../resume.json';
// Styles
const useStyles = makeStyles((theme) => ({
  rowCard: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
}));
/**
 * Display Resume Work Experience In Timeline
 * @returns {Component}
 */
const ResumeTimeline = () => {
  const classes = useStyles();
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
  const ResumeRow = ({ entry }) => {
    return (
      <Card variant="elevation" className={classes.rowCard}>
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
          {Array.isArray(entry.title)
            ? entry.title?.map((t, i) => (
              <div className={i % 2 !== 0 ? classes.doubleTitle : ''}>
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
      </Card>
    );
  };

  return (
    resume.resume?.length > 0
      ? resume.resume?.map((r) => (
          <ResumeRow entry={r} />
        ))
      : null
  );
};

export default ResumeTimeline;
