import React from 'react';
// MUI
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// Custom
import ExpRow from '../ExpRow';
// IMGs
import ParentPC from '../../img/parentalPC.JPG';
import PrinterUpgrade from '../../img/printerUpgrades.JPG';
import OctopusPrint from '../../img/octopusPrint.JPG';
import VasePrint from '../../img/vasePrint.JPG';
import BulbasaurPrint from '../../img/bulbasaurPrint.JPG';
import CharmanderPrint from '../../img/charmanderPrint.JPG';
import SquirtlePrint from '../../img/squirtlePrint.JPG';
import EeveePrint from '../../img/eeveePrint.JPG';
import PiCluster from '../../img/piCluster.JPG';
// Declare styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  medImg: {
    maxHeight: '250px',
    maxWidth: '250px',
  },
  imgRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imgCol: {
    display: 'flex',
    flexDirection: 'column',
    '& img': {
      paddingRight: theme.spacing(1),
    },
  },
  smallImg: {
    maxHeight: '150px',
    maxWidth: '150px',    
  }
}));

/**
 * New Tab Image
 * @param props string & src
 * @returns {anchor} with image within
 */
const NewTabImg = (props: { src: string, text: string, imgSize: string }) => {
  const { src, text, imgSize } = props;
  // Declare classes use here instead of passing via props
  const classes = useStyles();
  // Only supporting small and medium picture sizes for now
  const imgClass = (size: string) => {
    switch(size) {
      case 'small': return classes.smallImg;
      case 'medium': return classes.medImg;
      default: return '';
    }
  };
  return (
    <a target="_blank" href={src}>
      <img
        src={src}
        alt={text}
        className={imgClass(imgSize)}
      />
    </a>
  );
}

const PersonalHardwareExp = () => {
  const classes = useStyles();

  return (
    <div data-testid="personalHardware" className={classes.root}>
      <Typography>
        Personal Hardware Experience
      </Typography>
      <ExpRow
        title="PC Building"
        tech={[{ text: 'PC Part Picker', href: 'https://pcpartpicker.com/' }]}
      >
        <Typography>The first desktop computer I built was the much needed upgrade for my parents home system.</Typography>
        <Box className={classes.imgRow}>
          <NewTabImg
            src={ParentPC}
            text="parental pc"
            imgSize="medium"
          />
        </Box>
        <Typography>I have since built myself a personal computer as well as assisted friends with their upgrades.</Typography>
        <Typography>PC Part Picker's System Builder is a fantastic resource to ensure hardware compatibility.</Typography>
      </ExpRow>
      <ExpRow
        title="3D Printer"
        tech={[
          { text: 'Ender 3', href: 'https://www.techradar.com/reviews/creality-ender-3' },
          { text: 'OctoPrint', href: 'https://octoprint.org/' },
        ]}
      >
        <Typography>I first assembled my 3d printer a few years ago and have printed a fair amount until the extruder malfunctioned.</Typography>
        <Box className={classes.imgRow}>
          <NewTabImg
            src={OctopusPrint}
            text="octopus print"
            imgSize="medium"
          />
          <Box className={classes.imgCol}>
            <Box className={classes.imgRow}>
              <NewTabImg
                src={EeveePrint}
                text="eevee print"
                imgSize="small"
              />
              <NewTabImg
                src={BulbasaurPrint}
                text="bulbasaur print"
                imgSize="small"
              />
            </Box>
            <Box className={classes.imgRow}>
              <NewTabImg
                src={CharmanderPrint}
                text="charmander print"
                imgSize="small"
              />
              <NewTabImg
                src={SquirtlePrint}
                text="squirtle print"
                imgSize="small"
              />              
            </Box>
          </Box>
          <NewTabImg
            src={VasePrint}
            text="vase print"
            imgSize="medium"
          />
        </Box>
        <Typography>I have since replaced the extruder &amp; plan to upgrade the printer with a new Z axis sensor + configuring OctoPrint.</Typography>
        <Box className={classes.imgRow}>
          <NewTabImg
            src={PrinterUpgrade}
            text="printer upgrades"
            imgSize="medium"
          />
        </Box>
      </ExpRow>
      <ExpRow
        title="Pi Cluster"
        tech={[
          { text: 'Raspberry Pi', href: 'https://www.raspberrypi.org/' },
          { text: 'K3S', href: 'https://k3s.io/' },
        ]}
      >
        {/* Pi Cluster & K3S Configuration */}
        <Typography>I may have gone overboard when I installed PoE hats on each pi &amp; supported the build with a 5 port PoE switch and hand-crafted cat5e cables.</Typography>
        <Box className={classes.imgRow}>
          <NewTabImg
            src={PiCluster}
            text="raspberry pi cluster"
            imgSize="medium"
          />
        </Box>
        <Typography>I became much more familiar with the terminal and Linux environment while installing necessary packages for k3s &amp; configuring SSH communication.</Typography>
        <Typography variant="caption"><a href="https://www.ansible.com/overview/how-ansible-works?hsLang=en-us" target="_blank">Ansible</a> is another fascinating tool I would love to spend time learning more.</Typography>
      </ExpRow>
    </div>
  );
};

export default PersonalHardwareExp;
