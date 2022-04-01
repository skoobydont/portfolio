import React, { useState } from 'react';
import { useHistory } from 'react-router';
// MUI
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
// Icons
import BackIcon from '@mui/icons-material/ArrowBack';
// Custom
import PersonalSoftwareExp from '../components/personal/PersonalSoftwareExp';
import ProfessionalSoftwareExp from '../components/professional/ProfessionalSoftwareExp';
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
  // Experience State
  const [exp, setExp] = useState(true);
  /**
   * Handle Go Back to /porfolio
   * @fires history.goBack
   */
  const handleGoBack = () => history.goBack();
  /**
   * Handle Experience Toggle
   * @param {Object} event standard event obj
   * @fires setExp with event.target.checked
   */
  const handleExpToggle = (event) => {
    setExp(event.target.checked);
  };

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
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">
            {`${exp ? 'Professional' : 'Personal'} Experience`}
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={exp}
                  onChange={handleExpToggle}
                />
              }
              label="Software Experience"
            />
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default SoftwareExperiencePage;
