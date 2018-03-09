import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBackArrow, hideBackArrow, setPage } from 'services/AppBar/actions';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';

import './styles.css';

const FoodTruck = (props) => (
  <Card className="food-card">
    <CardMedia
      image={props.image}
      style={{ height: '220px' }}
    />
    <CardContent>
      <h4>{props.name}</h4>
      {props.children}
    </CardContent>
    { props.href &&
      <CardActions>
        <Button
          href={props.href}
          size="large"
          color="primary"
          className="food-link"
        >
          More
        </Button>
      </CardActions>
    }
  </Card>
);

class Event extends Component {
  componentWillMount() {
    this.props.showBackArrow('/');
    this.props.setPage('Food Trucks');
  }

  componentWillUnmount() {
    this.props.hideBackArrow();
  }

  render() {
    return (
      <div className="event food">
        <h2 className="title">Food Trucks</h2>
        <FoodTruck
          name="Cracked"
          image={require('assets/cracked.jpg')}
          href="http://www.crackedongreen.com/"
        >
          <p>Lover of all things eggs, cheese & Bacon, Cracked has you covered morning, noon & Night</p>
        </FoodTruck>

        <FoodTruck
          name="Kona Ice"
          image={require('assets/kona.jpg')}
          href="https://www.facebook.com/KonaIceChampaign/"
        >
          <p>Flavoring your own shaved ice is pretty much the best thing ever. You can have as much of as many of our mouth-watering flavors as you want! Check out all of our amazing flavors.</p>
        </FoodTruck>

        <FoodTruck
          name="Fusilli Tony's Italian Food"
          image={require('assets/tonys.jpg')}
          href="https://www.facebook.com/FusilliTonys/"
        >
          <p>Fusilli Tony's Italian Food is a food truck operating in Champaign-Urbana featuring Italian Beef Sandwiches, Pasta, Salads, Sub Sandwiches, and Panini.</p>
        </FoodTruck>

        <FoodTruck
          name="Chester's Barbecue"
          image={require('assets/chesters.jpg')}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showBackArrow: (to) => dispatch(showBackArrow(to)),
  hideBackArrow: () => dispatch(hideBackArrow()),
  setPage: (pageTitle) => dispatch(setPage(pageTitle)),
});

export default connect(null, mapDispatchToProps)(Event);
