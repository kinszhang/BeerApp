import React from 'react';
import PropTypes from 'prop-types';

const Overview = props => (
  <div className="overview col-xs-12 col-sm-5 col-sm-offset-1">
    {props.isLoading && !props.hasError && (
      <React.Fragment>
        <div className="overview--main-title margin-top-lg margin-bottom-lg">Getting Data...</div>
        <div className="overview--state-handling">Sit back and relax! Your beer is coming!</div>
        <div className="overview--placeholder" />
      </React.Fragment>
    )}
    {!props.isLoading && (
      <React.Fragment>
        <div className="overview--main-title margin-bottom-lg">{props.name}</div>
        <div className="overview--title">
          <div>Description:</div>
          <div className="overview--desc margin-bottom-lg margin-top-sm">{props.desc}</div>
        </div>
        {props.breweries.map(brewery => (
            <div key={`Brewery-${brewery.id}`} className="overview--title margin-bottom-lg ios-fix">
              <div>Brewery:</div>
              <div className="overview--brewery margin-bottom-lg margin-top-sm" onClick={() => props.getBreweryDetail(brewery.id)}>
                <a className="overview--brewery__link">{brewery.name}</a>
              </div>
            </div>
          ))
        }
        {!props.startDate && props.isOrganic && <div className="overview--detail margin-bottom-lg">{`Is Organic: ${props.isOrganic}`}</div>}
        {props.startDate && <div className="overview--detail margin-bottom-lg">{`Start Date: ${props.startDate}`}</div>}
        <div className="overview--placeholder" />
      </React.Fragment>
    )}
    {props.hasError && (
      <React.Fragment>
        <div className="overview--main-title margin-top-lg margin-bottom-lg">Ooopsss...</div>
        <div className="overview--state-handling">We couldn't find the info you need, please try again!</div>
        <div className="overview--placeholder" />
      </React.Fragment>
    )}
  </div>
);


Overview.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  isOrganic: PropTypes.string,
  breweries: PropTypes.arrayOf(PropTypes.object),
  getBreweryDetail: PropTypes.func,
  startDate: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool,
};

Overview.defaultProps = {
  name: 'Beer Name',
  desc: '',
  isOrganic: 'N',
  breweries: [],
  startDate: '',
  hasError: false,
};

export default Overview;