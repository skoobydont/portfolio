import React, { useState } from 'react';
// MUI
import makeStyles from '@mui/styles/makeStyles';
// Custom
import ExpToggle from '../components/ExpToggle';
import ProfessionalExp from '../components/professional/ProfessionalHardwareExp';
import PersonalExp from '../components/personal/PersonalHardwareExp';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
}));

const HardwareExperiencePage = () => {
  const classes = useStyles();
  const [exp, setExp] = useState('professional');
  
  return (
    <div className={classes.root}>
      <ExpToggle
        exp={exp}
        setExp={setExp}
        professionalComponent={<ProfessionalExp />}
        personalComponent={<PersonalExp />}
      />
    </div>
  );
};

export default HardwareExperiencePage;
