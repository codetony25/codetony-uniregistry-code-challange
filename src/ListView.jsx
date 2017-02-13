import React, { Component } from 'react';
import DetailView from './DetailView';

class ListView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      domains: null,
      isDomainClicked: false
    };
  }

  componentDidMount() {
    let self = this;

    // Fetch mocked domain data
    $.getJSON( "../domains.json", function( data ) {
      const { domains } = data;
      self.setState({ domains });
    });
  }

  handleDomainClick = (domainIndex) => {
    this.setState({
      isDomainClicked: !this.state.isDomainClicked,
      domainIndexClicked: domainIndex
    });
  }

  handleDomainSaveChanges = () => {
    this.setState({
      isDomainClicked: !this.state.isDomainClicked
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', paddingBottom: 50 }}>
          Codetony's Code Challange from Uniregistry
        </h1>
        <table
          style={{ display: this.state.isDomainClicked ? 'none' : 'inline'}}
          className="table table-striped"
        >
          <thead>
          <tr>
            <th>Domain name</th>
            <th>Uniregistry</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {(() => {
            if (this.state.domains) {
              const uniregistryDomains = ['cars', 'lol'];

              return this.state.domains.map((item, index) => {

                // Get domain's extension
                let domainExtension = item.domain.split('.')[1];

                // Checks if domain is a uniregistry domain
                let isUniregistryDomain = uniregistryDomains.includes(domainExtension);
                let domainPrice = (item.price / 100).toFixed(2);

                return (
                  <tr key={index}>
                    <td style={{ color: '#71a38b', fontWeight: 'bold' }}>
                      <a href="#" onClick={this.handleDomainClick.bind(this, index)}>
                        {item.domain}
                      </a>
                    </td>
                    <td>
                      {isUniregistryDomain ?
                        (<i className="fa fa-check" style={{ color: '#41844f' }}></i>) : ''
                      }
                    </td>
                    <td style={{ fontWeight: 'bold' }}>
                      ${domainPrice}
                    </td>
                  </tr>
                )
              })
            } else {
              return null;
            }
          })()}
          </tbody>
        </table>
        <div
          style={{ display: this.state.isDomainClicked ? 'inline-block' : 'none', width: '40%' }}
        >
          {(() => {
            if (this.state.isDomainClicked) {
              return (
                <DetailView
                  domains={this.state.domains}
                  domainIndex={this.state.domainIndexClicked}
                  isDomainClicked={this.state.isDomainClicked}
                  handleDomainSaveChanges={this.handleDomainSaveChanges}
                />
              )
            }
          })()}
        </div>
      </div>
    );
  }

};

export default ListView;
