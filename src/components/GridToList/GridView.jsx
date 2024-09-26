import React from 'react';

const GridView = ({ data }) => {
    return (
        <>
            <h4 className='grid-head'>Grid View</h4>
            <div className='grid-container'>
                {data.map(item => (
                    <div key={item.id} className='grid-box'>
                        <p>{item.name}</p>
                        <span>{item.mail}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GridView;