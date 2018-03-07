import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';

import MenuIcon from 'material-ui-icons/Menu';
import BackIcon from 'material-ui-icons/ArrowBack';

import MenuList from './components/MenuList';
import Schedule from './scenes/Schedule';
import Event from './scenes/Event';
import Exhibits from './scenes/Exhibits';
import Building from './scenes/Building';
import FAQ from './scenes/FAQ';

import Information from './scenes/Information';
import Map from './scenes/Map';

import './styles.css';

const styles = {
  appBarRoot: {
    backgroundColor: '#f2f2f2',
  },
  iconColor: {
    color: '#404040',
  },
  iconRoot: {
    margin: 0,
    fontSize: '26px',
    color: '#404040',
  },
  title: {
    fontWeight: 600,
    fontSize: '1.8rem',
  },
};

class LiveApp extends Component {
  constructor() {
    super();

    this.state = {
      drawerOpen: false,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(open) {
    this.setState({
      drawerOpen: open,
    });
  }

  render() {
    const { classes } = this.props;
    const AppBarClasses = {
      colorPrimary: classes.appBarRoot,
    };

    let icon = (
      <MenuIcon
        className="menu-icon"
      />
    );
    let iconFn = () => this.toggleDrawer(true);

    if (this.props.showBackArrow) {
      const { history, backArrowTo } = this.props;
      icon = (
        <BackIcon
          className="menu-icon"
        />
      );
      iconFn = () => history.push(backArrowTo);
    }

    return (
      <div className="live-app">
        <Drawer open={this.state.drawerOpen} onClose={() => this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer(false)}
            onKeyDown={() => this.toggleDrawer(false)}
          >
            <MenuList />
          </div>
        </Drawer>

        <AppBar position="fixed" classes={AppBarClasses} >
          <Toolbar>
            <IconButton
              color="inherit"
              classes={{
                colorInherit: classes.iconColor,
                colorPrimary: classes.iconColor,
                colorSecondary: classes.iconColor,
                root: classes.iconRoot
              }}
              aria-label="open drawer"
              onClick={iconFn}
            >
              {icon}
            </IconButton>

            <div className="page-title">
              <Typography classes={{ root: classes.title }} type="headline">{this.props.pageTitle}</Typography>
            </div>
          </Toolbar>
        </AppBar>

        <div className="container">
          <Route path="/" exact component={Schedule} />
          <Route path="/event/:eventID" component={Event} />
          <Route path="/exhibits" exact component={Exhibits} />
          <Route path="/exhibits/:buildingID" component={Building} />
          <Route path="/faq" component={FAQ} />
          <Route path="/information" component={Information} />
          <Route path="/map" component={Map} />
          <Route path="/schedule" component={Map} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showBackArrow: state.appbar.showBackArrow,
  backArrowTo: state.appbar.backArrowTo,
  pageTitle: state.appbar.title,
});

const styledApp = withStyles(styles)(LiveApp);
export default withRouter(connect(mapStateToProps)(styledApp));
