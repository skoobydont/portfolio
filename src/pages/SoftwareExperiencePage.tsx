import React, { useState } from 'react';
import { useHistory } from 'react-router';
// MUI
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BackIcon from '@mui/icons-material/ArrowBack';
// Custom
import ExpToggle from '../components/ExpToggle';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));

const SoftwareExperiencePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [exp, setExp] = useState('professional');
  /**
   * Handle Go Back to /porfolio
   * @fires history.goBack
   */
  const handleGoBack = () => history.goBack();
  
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Button
          onClick={() => handleGoBack()}
          variant="outlined"
          className={classes.button}
        >
          <BackIcon />
        </Button>
        <Typography>
          Learn More About Software Experience on this page
        </Typography>
      </div>
      <ExpToggle exp={exp} setExp={setExp} />
    </div>
  );
};

export default SoftwareExperiencePage;
