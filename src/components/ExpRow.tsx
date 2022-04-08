import React from 'react';
// MUI
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  expRow: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'row',
    padding: `${theme.spacing(1)} 0 0 ${theme.spacing(1)}`,
  },
}));

// Exp Row
const ExpRow = (props: ExpRowProps) => {
  const { title, children, icons } = props;
  const classes = useStyles();

  return (
    <Box component={Card} className={classes.expRow} data-testid={`expRow-${title}`}>
      <Box className={classes.header}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        {icons?.map((icon: IconArrayItem, i: number) => (
          <IconButton>
            <img src={icon.imgSrc} alt={icon.altTxt} />
          </IconButton>
        ))}
        {/** icon row? */}
      </Box>
      {children}
    </Box>
  )
};

interface ExpRowProps {
  title: string;
  children: any;
  icons: Array<IconArrayItem>,
};

interface IconArrayItem {
  altTxt: string;
  imgSrc: string;
};

export default ExpRow;
