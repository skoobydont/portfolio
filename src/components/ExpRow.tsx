import React from 'react';
// MUI
import makeStyles from '@mui/styles/makeStyles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  expRow: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(1),
  },
  header: {
    backgroundColor: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  desktop: {
    maxWidth: '750px',
  },
  content: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

// Exp Row
const ExpRow = (props: ExpRowProps) => {
  const { title, children, tech } = props;
  const classes = useStyles();
  const isMobile = useMediaQuery((t: any) => t.breakpoints.down('sm'));
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
    <Box
      component={Card}
      className={`${classes.expRow}${isMobile ? '' : ` ${classes.desktop}`}`}
      data-testid={`expRow-${title}`}
    >
      <Box className={classes.header}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box className={classes.content}>
        {children}
        <Box>
          {tech?.map((t: TechArrayItem, i: number) => (
            <Button
              key={i}
              onClick={() => handleClick(t.href)}
            >
              {t.text}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
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
