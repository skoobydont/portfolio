import React, { useState } from 'react';
import { useHistory } from 'react-router';
import makeStyles from '@mui/styles/makeStyles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// Lab
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
// Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// Utils
import displayAddress from '../utilities/displayAddress';
import { capitalize } from '../utilities/formatUtil';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& button.MuiIconButton-root': {
      paddingLeft: theme.spacing(0),
    },
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  deets: {
    display: 'flex',
    flexDirection: 'column',
  },
  deetHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  subheader: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    marginTop: theme.spacing(4),
    borderRadius: theme.spacing(1),
    boxShadow: '0px 2px 6px #FFF',
  },
  topMobile: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ProductPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const [expandTL, setExpandTL] = useState('');
  const propInfo = history?.location?.state?.activeProperty;
  /**
   * Mobile? maxWidth: 415px
   * @type {boolean} - is the current viewpoint mobile?
   */
  const mobile = useMediaQuery('(max-width:415px)');
  /**
   * Handle Expanding Timeline Accordions
   * @param {int} panel panel index
   * @fires setExpandTL to new panel or close
   */
  const handleExpandTL = (panel) => (e, newE) => setExpandTL(newE ? panel : false);
  // console.log('prop info', propInfo);
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <IconButton onClick={() => history.goBack()} size="large">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" component="h2" style={{ margin: 'auto' }}>
          {displayAddress(history?.location?.state?.activeProperty?.propertyInfo?.address)}
        </Typography>
      </div>
      <div className={classes.body}>
        <div className={
          mobile ? classes.mobileTop : classes.top
        }>
          <div className={classes.imgs}>
            {/* TODO: img file paths: meh good enough for now */}
            {propInfo?.images ? (
              <>
                <img
                  src={`${process.env.REACT_APP_URL_BASE}/${propInfo?.images?.[0]?.path}`}
                  alt={`${displayAddress(
                    propInfo?.propertyInfo.address
                  )}-pics`}
                />
              </>
            ) : null}
          </div>
          <div className={classes.deets}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <b>Property Info</b>
                  </TableCell>
                  <TableCell>
                    <Chip
                      color={
                        propInfo?.propertyInfo.vacant === 'occupied'
                          ? 'primary' : 'secondary'
                      }
                      label={
                        propInfo?.propertyInfo.vacant === 'occupied'
                          ? 'Occupied' : 'Vacant'}
                    />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <b>Occupancy</b>
                  </TableCell>
                  <TableCell>{propInfo?.propertyInfo.vacant}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Bath</b>
                  </TableCell>
                  <TableCell>{propInfo?.propertyInfo.bath}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Bedroom(s)</b>
                  </TableCell>
                  <TableCell>{propInfo?.propertyInfo.bedrooms}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Type</b>
                  </TableCell>
                  <TableCell>{propInfo?.propertyInfo.propertyType}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Sqft</b>
                  </TableCell>
                  <TableCell>{propInfo?.propertyInfo.sqft}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <b>Year Built</b>
                  </TableCell>
                  <TableCell>{propInfo?.propertyInfo.yearBuilt}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className={classes.numbers}>
          <h4 className={classes.subheader}>Quick Numbers</h4>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell noWrap>
                  <b>Token Info</b>
                </TableCell>
                <TableCell>
                  <Chip
                    label={propInfo?.status}
                    color={propInfo?.status !== 'sold out'
                      ? 'primary' : 'secondary'}
                  />
                </TableCell>
                <TableCell colSpan={2}>
                  <b>Investment Info</b>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  # Sold
                </TableCell>
                <TableCell>
                  {propInfo.tokenInfo.totalSold}
                </TableCell>
                <TableCell>
                  Total Investment
                </TableCell>
                <TableCell>
                  {propInfo.investmentInfo.totalInvestment}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  # Available
                </TableCell>
                <TableCell>
                  {propInfo.tokenInfo.totalAvailable
                    - propInfo.tokenInfo.totalSold}
                </TableCell>
                <TableCell>
                  $ / Token
                </TableCell>
                <TableCell>
                  {`$${+(propInfo.investmentInfo.totalInvestment
                    / propInfo.investmentInfo.totalTokens).toFixed(2)}`}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <h4 className={classes.subheader}>Project Timeline</h4>
          <Timeline>
            {Array.isArray(propInfo?.projectTimeline) ? (
              propInfo.projectTimeline?.sort((a, b) => 
                new Date(a.date) < new Date(b.date)
              )?.map((tl, i) => (
                <TimelineItem>
                  <TimelineOppositeContent style={{ marginTop: '12px' }}>
                    {tl?.date}
                  </TimelineOppositeContent>
                  <TimelineSeparator style={{ marginTop: '12px' }}>
                    <TimelineDot
                      color={i === 0
                        ? 'secondary' : 'primary'}
                    />
                    {i !== propInfo.projectTimeline.length - 1
                      ? <TimelineConnector /> : null}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Accordion
                      square
                      expanded={expandTL === i}
                      onChange={handleExpandTL(i)}
                    >
                      <AccordionSummary>
                        <b>{tl?.title}</b>
                      </AccordionSummary>
                      <AccordionDetails>
                        {tl?.description}
                      </AccordionDetails>
                    </Accordion>
                  </TimelineContent>
                </TimelineItem>
              ))
            ) : null}
          </Timeline>
        </div>
        <div>
          <h4 className={classes.subheader}>More Numbers</h4>
          <Table size="small">
            {propInfo?.financialInfo ? (
              Object.keys(propInfo.financialInfo).map((f, i) => (
                <TableRow>
                  {i % 2 === 0 ? (
                    <>
                      <TableCell>
                        {capitalize(Object.keys(propInfo.financialInfo)[i + 1])}
                      </TableCell>
                      <TableCell>
                        {propInfo.financialInfo[Object.keys(propInfo.financialInfo)[i + 1]]}
                      </TableCell>
                      <TableCell>
                        {capitalize(f)}
                      </TableCell>
                      <TableCell>
                        {propInfo.financialInfo[f]}
                      </TableCell>
                    </>
                  ) : null}
                </TableRow>
              ))
            ) : null}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
