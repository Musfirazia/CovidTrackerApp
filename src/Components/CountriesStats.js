import React, { Component } from 'react'
import Chart from './Chart.js'
const { default: CountryPicker } = require("./CountryPicker");

class CountriesStats extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const response = await fetch('https://covid19.mathdro.id/api/daily');
        let data = await response.json();
        let modifieddata = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        this.setState({ data: modifieddata })

    }
    handleCountryChange = async (country) => {
        console.log(country)
    }

    render() {
        const { data } = this.state;
        return (
            <div >
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart />

            </div>
        )
    }
}
export default CountriesStats