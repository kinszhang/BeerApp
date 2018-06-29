import React from 'react';
import PropTypes from 'prop-types';
import { FadeLoader } from 'react-spinners';
import BeerNotFoundIcon from '../../images/placeholder.png';

const SPINNER_SETTINGS = {
  color: '#00B16A', //$color-grass-3
  height: 15,
  width: 5,
  margin: '2',
  radius: 2,
};

const Viewfinder = props => (
  <div className="viewfinder col-xs-12 col-sm-6 col-md-5 col-lg-6 row">
    {props.isLoading && !props.hasError && (
      <div className="viewfinder--spinner full-width">
        <FadeLoader
          color={SPINNER_SETTINGS.color}
          loading={props.isLoading}
          height={SPINNER_SETTINGS.height}
          width={SPINNER_SETTINGS.width}
          margin={SPINNER_SETTINGS.margin}
          radius={SPINNER_SETTINGS.radius}
        />
      </div>

    )}
    {!props.isLoading && (
      <img alt="beer_label" src={props.imgPath} className="viewfinder--image" />
    )}
    {props.hasError && (
      <img alt="404" src={BeerNotFoundIcon} className="viewfinder--image" />
    )}
  </div>
);


Viewfinder.propTypes = {
  imgPath: PropTypes.string,
};

Viewfinder.defaultProps = {
  imgPath: '',
};

export default Viewfinder;