import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';

export default function Chart({ data: {confirmed, recovered, deaths }, country }) {

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
    const lineChart = (
        dailyData.length ?
            (
                <Line data={{
                    labels: dailyData.map(({ date }) => date), datasets: [{ data: dailyData.map(({ confirmed }) => confirmed), label: 'Infected', borderColor: 'blue', fill: 'true' },
                    { data: dailyData.map(({ deaths }) => deaths), label: 'Deaths', borderColor: 'red', fill: 'true', backgroundColor: 'rgba(255,0,0,0.5)' }]
                }} />
            ) : null
    )
    const barChart = (
        confirmed ?
            (<Bar
                data={
                    {
                        labels: ["Infected", "Recovered", "Deaths"],
                        datasets: [{
                            label: 'People',
                            backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                            data: [confirmed,recovered, deaths]
                        }]
                    }
                }
           options={{
               legend:{display:false},
               title:{display:true,text:`Current state in ${country}`},
           }}/>
            ):null
    );
    
    return (
        <div className="container">
{country ? barChart:lineChart}
        </div>
    )
}
