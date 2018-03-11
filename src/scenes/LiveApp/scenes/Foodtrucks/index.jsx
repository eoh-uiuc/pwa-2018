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
    window.scrollTo(0,0);
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
          name="Burrito King"
          image={require('assets/burrito_king.jpg')}
          href="http://burritokingchampaign.com/"
        >
          <p>
            Burrito King is home of the best Mexican food in the Champaign-Urbana area. We are a favorite
            among students and locals. Whether you are looking for a delicious taco or burrito, whether for lunch,
            dinner or snack, we got the best food for you!!
          </p>
        </FoodTruck>

        <FoodTruck
          name="Juanito's Tacos"
          image={require('assets/juanitos.jpg')}
          href="https://www.facebook.com/pg/juanitostacos1"
        >
          <p>
            Grab a taco bowl with shredded lettuce, cheese, beans, sour cream or avocado.
            Choose from four choices types of meat: chorizo, chicken, beef or pork. All
            fresh and cooked to order.
          </p>
        </FoodTruck>

        <FoodTruck
          name="Fusilli Tony's Italian Food"
          image={require('assets/tonys.jpg')}
          href="https://www.facebook.com/FusilliTonys/"
        >
          <p>
            Fusilli Tony's Italian Food is a food truck operating in Champaign-Urbana featuring Italian Beef
            Sandwiches, Pasta, Salads, Sub Sandwiches, and Panini.
          </p>
        </FoodTruck>

        <FoodTruck
          name="Chester's Barbecue"
          image={require('assets/chesters.jpg')}
          href="https://www.facebook.com/chestersBBQ/"
        >
          <p>
            Try an applewood-pulled-pork sandwich, pulled-pork-BBQ nachos, and other delicious entrees
            at this pig-faced truck
          </p>
        </FoodTruck>
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
