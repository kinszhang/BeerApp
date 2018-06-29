import React from 'react';
import { fetchRandomBeer } from '../../actions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Background from '../../images/header_image.png';
//Above image from <a href="https://www.freepik.com/free-vector/beer-background_1536386.htm">Designed by Freepik</a>

const Header = props => (
  <div className="header row" style={{backgroundImage: `url(${Background})`}}>
    <div className="header--title text-center col-xs-12 col-sm-8">{props.title}</div>
    {!props.hasBackBtn && (
      <div className="header--btn-ctn col-xs-12 col-sm-4">
        <button
          className="action-btn"
          onClick={() => props.fetchRandomBeer()}
        >Checkout a Random Beer!</button>
      </div>
    )}
    {props.hasBackBtn && (
      <div className="header--btn-ctn col-xs-12 col-sm-4">
        <button
          className="action-btn"
          onClick={() => props.goBack()}
        >Try Another Beer (Go Back)</button>
      </div>
    )}
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  fetchRandomBeer: PropTypes.func.isRequired,
  goBack: PropTypes.func,
  hasBackBtn: PropTypes.bool,
};

Header.defaultProps = {
  hasBackBtn: false,
};

const mapDispatchToProps = dispatch => ({
  fetchRandomBeer: () => dispatch(fetchRandomBeer()),
});


export default connect(null, mapDispatchToProps)(Header);