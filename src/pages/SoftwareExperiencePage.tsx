import React, { useState } from 'react';
import { useHistory } from 'react-router';
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
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: 'auto',
  },
}));

const SoftwareExperiencePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [exp, setExp] = useState('professional');
  const [order, setOrder] = useState('asc');
  const goBack = () => history.goBack();

  return (
    <div className={classes.root}>
      <ExpToggle
        exp={exp}
        setExp={setExp}
        professionalComponent={<ProfessionalExp />}
        personalComponent={<PersonalExp />}
        order={order}
        setOrder={setOrder}
        goBack={goBack}
      />
    </div>
  );
};

export default SoftwareExperiencePage;
