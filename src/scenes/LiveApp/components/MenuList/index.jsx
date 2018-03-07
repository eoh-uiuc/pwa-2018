import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import ScheduleIcon from 'material-ui-icons/Event';
import CarIcon from 'material-ui-icons/DirectionsCar';
import BuildIcon from 'material-ui-icons/Build';
// import FAQIcon from 'material-ui-icons/HelpOutline';
import InfoIcon from 'material-ui-icons/InfoOutline';

const ListText = (props) => {
  const styles = {
    textDecoration: 'none',
  };
  return (
    <ListItemText
      primary={
        <Link style={styles} to={props.to}>
          <Typography type="headline">{props.text}</Typography>
        </Link>
      }
      disableTypography
    />
  );
};

const MenuStyles = {
  root: {
    width: 250,
  },
};

const LogoStyles = {
  width: '100%',
  margin: '50px 0',
};

const MenuList = (props) => {
  const { classes } = props;

  return (
    <List className={classes.root} >
      <ListItem divider>
        <img style={LogoStyles} className="logo" src={require('assets/eoh-black-logo.png')} alt="EOH logo" />

      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <ScheduleIcon />
        </ListItemIcon>
        <ListText to="/" text="Schedule" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListText to="/exhibits" text="Exhibits" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <CarIcon />
        </ListItemIcon>
        <ListText to="/map" text="Parking" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListText to="/information" text="Information" />
      </ListItem>

      {/* <ListItem button>
        <ListItemIcon>
          <FAQIcon />
        </ListItemIcon>
        <ListText to="/faq" text="FAQ" />
      </ListItem> */}
    </List>
  );
};

export default withStyles(MenuStyles)(MenuList);
