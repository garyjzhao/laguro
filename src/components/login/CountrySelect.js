import ApolloClient from "apollo-boost";
import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  label {
    margin-bottom: 5px;
  }
  select {
    margin-bottom: 16px;
    font-size: 1.25em;
    border: 1px solid #000;
    border-radius: var(--radius);
  }
`;
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

const GET_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

class CountrySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "US"
    };
  }

  onCountryChange(event) {
    this.setState({ country: event.target.value });
  }

  render() {
    return (
      <Query query={GET_COUNTRIES} client={client}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;
          return (
            <InputWrapper>
              <label htmlFor="countrySelect">Country </label>
              <select
                id="countrySelect"
                value={this.state.country}
                onChange={this.onCountryChange.bind(this)}
              >
                {data.countries.map(country => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </InputWrapper>
          );
        }}
      </Query>
    );
  }
}

export default CountrySelect;
