import React, { useState, useEffect } from 'react';


const Search = ({ data = [] }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (query) => {
        setSearchTerm(query);
    }

    useEffect(() => {
        console.log('Data:', data);
        console.log('Search Term:', searchTerm);
    }, [data, searchTerm]);

    const filtered = data.filter(item => {
        const match = item.toLowerCase().includes(searchTerm.toLowerCase());
        console.log(`Filtering: "${item}" with search term "${searchTerm}" - Match: ${match}`);
        return match;
});

console.log('Filtered Data:', filtered);

    return (
        <div>
            <input type="text"
                placeholder='Search here...'
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}/>
            <ul>
                {filtered.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
};

export default Search;