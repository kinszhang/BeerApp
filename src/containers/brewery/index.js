import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBrewery, resetBrewery } from '../../actions';
import Header from '../../components/header/header';
import Overview from '../../components/overview/overview';
import Viewfinder from "../../components/viewfinder/viewfinder";


class Brewery extends Component {
  static propTypes = {
    fetchBrewery: PropTypes.func.isRequired,
    resetBrewery: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { match } = this.props;
    this.props.fetchBrewery(match.params.id);
  }

  componentWillUnmount() {
    this.props.resetBrewery();
  }

  render() {
    const { currentBrewery, loadingState, errorState, history } = this.props;

    return (
      <div className="beer-overview container container-fluid">
        <Header
          title={"Random Beer App"}
          hasBackBtn={true}
          goBack={() => history.push('/')}
        />
        <main className="row center-xs beer-overview--main">
          <Viewfinder
            imgPath={currentBrewery.label}
            isLoading={loadingState}
            hasError={errorState}
          />
          <Overview
            name={currentBrewery.name}
            desc={currentBrewery.desc}
            startDate={currentBrewery.established}
            isLoading={loadingState}
            hasError={errorState}
          />
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentBrewery: state.brewery.currentBrewery,
  loadingState: state.util.isLoading,
  errorState: state.util.hasError,
});

const mapDispatchToProps = dispatch => ({
  fetchBrewery: id => dispatch(fetchBrewery(id)),
  resetBrewery: () => dispatch(resetBrewery()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Brewery);







