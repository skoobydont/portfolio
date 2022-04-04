import React, { useState } from 'react';
// MUI
import makeStyles from '@mui/styles/makeStyles';
// Custom
import ExpToggle from '../components/ExpToggle';
import ProfessionalExp from '../components/professional/ProfessionalSoftwareExp';
import PersonalExp from '../components/personal/PersonalSoftwareExp';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },  
}));

const SoftwareExperiencePage = () => {
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

export default SoftwareExperiencePage;
