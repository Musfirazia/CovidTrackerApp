import React from 'react'
import Chart from './Chart.js'
import Carddata from './Card.js'
const { default: CountryPicker } = require("./CountryPicker");

class CountriesStats extends React.Component {
    state = {
        data: {},
        country: '',
    }
    globaldata= async(country)=>{
        const response = await fetch('https://covid19.mathdro.id/api/daily');
        let data = await response.json();
        let modifieddata = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        this.setState({ data: modifieddata ,country:""})
    }
    async componentDidMount() {
        this.globaldata();

    }
    handleCountryChange = async (country) => {
        if (country) {
            const response = await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
            const {confirmed,recovered,deaths,lastUpdate}= await response.json();
            let fetcheddata={
                confirmed:confirmed.value,
                recovered:recovered.value,
                deaths:deaths.value,
                lastUpdate:lastUpdate
            }
            this.setState({data:fetcheddata,country:country});
            console.log(fetcheddata)
      
        } 
        else{
         this.globaldata();
        }
    
    }

    render() {
         const { data,country } = this.state;
        return (
            <div >
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Carddata data={data}></Carddata>
                <Chart data={data}  country={country}/>
            </div>
        )
    }
}
export default CountriesStats