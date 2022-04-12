import React from 'react';
// MUI
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
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
  img: {
    // maxWidth: '50px',
    // maxHeight: '50px',
    borderRadius: theme.spacing(1),
  },
}));

// Exp Row
const ExpRow = (props: ExpRowProps) => {
  const { title, children, tech } = props;
  const classes = useStyles();
  /**
   * Handle Click
   * @param url
   * @fires win.focus() url in new tab
   */
  const handleClick = (url: string) => {
    if (url.length < 1) return null;
    const win = window.open(url, "_blank");
    win?.focus();
  }
  return (
    <Box component={Card} className={classes.expRow} data-testid={`expRow-${title}`}>
      <Box className={classes.header}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        {tech?.map((t: TechArrayItem, i: number) => (
          <Button
            key={i}
            onClick={() => handleClick(t.href)}
          >
            {t.text}
          </Button>
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
  tech: Array<TechArrayItem>,
};

interface TechArrayItem {
  text: string;
  href: string;
};

export default ExpRow;
