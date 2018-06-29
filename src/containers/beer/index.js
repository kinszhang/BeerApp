import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRandomBeer, resetBeer } from '../../actions';
import Header from '../../components/header/header';
import Overview from '../../components/overview/overview';
import Viewfinder from "../../components/viewfinder/viewfinder";


class Beer extends Component {
  static propTypes = {
    fetchRandomBeer: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRandomBeer();
  }

  componentWillUnmount() {
    this.props.resetBeer();
  }

  goToBreweryPage = (breweryId) => {
    this.props.history.push(`/brewery/${breweryId}`);
  };

  render() {
    const { currentBeer, loadingState, errorState } = this.props;

    return (
      <div className="beer-overview container container-fluid">
        <Header
          title={"Random Beer App"}
        />
        <main className="row center-xs beer-overview--main">
          <Viewfinder
            imgPath={currentBeer.label}
            isLoading={loadingState}
            hasError={errorState}
          />
          <Overview
            name={currentBeer.name}
            desc={currentBeer.desc}
            isOrganic={currentBeer.isOrganic}
            breweries={currentBeer.breweries}
            getBreweryDetail={breweryId => this.goToBreweryPage(breweryId)}
            isLoading={loadingState}
            hasError={errorState}
          />
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentBeer: state.beer.currentBeer,
  loadingState: state.util.isLoading,
  errorState: state.util.hasError,
});

const mapDispatchToProps = dispatch => ({
  fetchRandomBeer: () => dispatch(fetchRandomBeer()),
  resetBeer: () => dispatch(resetBeer()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Beer);







