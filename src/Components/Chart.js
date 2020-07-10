import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import CountryPicker from './CountryPicker.js';

export default function Chart() {
    const data=useState({});
  const country=useState("");
    const [dailyData, setDailyData] = useState({});
    useEffect(() => {
        async function getdata() {
            const response = await fetch('https://covid19.mathdro.id/api/daily');
            let data = await response.json();
            let modifieddata = data.map((dailyData) => ({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }))
            setDailyData(modifieddata);
        }
        getdata();
    }, [])
    const linechart = (
        dailyData.length ?
            (
                <Line data={{
                    labels: dailyData.map(({ date }) => date), datasets: [{ data: dailyData.map(({ confirmed }) => confirmed), label: 'Infected', borderColor: 'blue', fill: 'true' },
                    { data: dailyData.map(({ deaths }) => deaths), label: 'Deaths', borderColor: 'red', fill: 'true', backgroundColor: 'rgba(255,0,0,0.5)' }]
                }} />
            ) : null
    )
    return (
        <div className="container">
            
              <CountryPicker/>
            {linechart}
          
        </div>
    )
}
