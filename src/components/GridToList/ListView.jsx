import React from 'react';

const ListView = ({ data }) => {
    return (
        <>
            <h4 className='grid-head'>ListView</h4>
            <div className='list-container'>
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

export default ListView;