import React from 'react'
import { Link } from 'react-router-dom';
import { Pie, PieChart, Tooltip } from 'recharts'
const Data = () => {
    const data01 = [
        { name: 'Tamilnadu', value: 13.1 },
        { name: 'Maharashtra', value: 19.8 },
        { name: 'Madhya pradesh', value: 7.6 },
        { name: 'Gujarat', value: 8.8 },
        { name: 'Karnatka', value: 8.9 },
        { name: 'Delhi', value: 9.5 },
        { name: 'West Bengal', value: 9.8 },
        { name: 'Uttar pradesh', value: 10.1 },
        { name: 'Andhra pradesh', value: 12.5 },
    ];


    return (
        <div className='container  text-center border border-primary rounded p-3 '>
            <div >
            <h2>States wise percentage distribution of e-waste generated every year:</h2>
            <PieChart width={1200} height={300}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8888d8"
                    label
                />

                <Tooltip />
            </PieChart>
        </div>
            <div >
                <Link to='/'><button type="button" class="btn btn-dark">See more</button></Link>
            </div>
        </div>

    )
}

export default Data
