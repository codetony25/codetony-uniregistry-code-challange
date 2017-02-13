import React, { Component } from 'react';

class DetailView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newDomainName: props.domains[props.domainIndex].domain,
      newDomainPrice: props.domains[props.domainIndex].price
    }
  }

  handleFormSubmit = () => {
    const { domains, domainIndex, handleDomainSaveChanges } = this.props;

    domains[domainIndex].domain = this.state.newDomainName;
    domains[domainIndex].price = (this.state.newDomainPrice + '').replace('.', '');

    handleDomainSaveChanges(domains);
  };

  handleDomainNameChange = (ev) => {
    this.setState({
      newDomainName: ev.target.value
    });
  };

  handleDomainPriceChange = (ev) => {
    this.setState({
      newDomainPrice: ev.target.value
    });
  };

  render() {
    const { domainIndex, domains } = this.props;

    return (
      <div>
        <form
          className="form-horizontal"
          onSubmit={this.handleFormSubmit}
        >
          <div className="form-group">
            <label htmlFor="domain-name" className="col-sm-2 control-label">
              Domain name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="domain-name"
                defaultValue={domains[domainIndex].domain}
                onChange={this.handleDomainNameChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="col-sm-2 control-label">
              Registrant Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                defaultValue="john.smith@email.com"
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="price"
              className="col-sm-2 control-label"
            >
              Price
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="price"
                defaultValue={(domains[domainIndex].price / 100).toFixed(2)}
                onChange={this.handleDomainPriceChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div
              className="col-sm-offset-2 col-sm-10"
              style={{ textAlign: 'left' }}
            >
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

};

export default DetailView;
