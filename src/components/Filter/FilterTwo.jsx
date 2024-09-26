import React, { useState } from 'react';

const FilterTwo = () => {
    const [items, setItems] = useState([
        { id: 1, title: 'Apple', price: 20, date: new Date('2024-05-01') },
        { id: 2, title: 'Banana', price: 30, date: new Date('2024-05-03') },
        { id: 3, title: 'Grapes', price: 25, date: new Date('2024-05-02') },
    ]);

    const [filterOption, setFilterOption] = useState('newest');

    // Function to apply sorting logic based on the selected filter option
    const applySorting = () => {
        switch (filterOption) {
            case 'newest':
                return items.slice().sort((a, b) => b.date - a.date);
            case 'oldest':
                return items.slice().sort((a, b) => a.date - b.date);
            case 'priceHighToLow':
                return items.slice().sort((a, b) => b.price - a.price);
            case 'priceLowToHigh':
                return items.slice().sort((a, b) => a.price - b.price);
            case 'titleAZ':
                return items.slice().sort((a, b) => a.title.localeCompare(b.title));
            case 'titleZA':
                return items.slice().sort((a, b) => b.title.localeCompare(a.title));
            default:
                return items;
        }
    };


    // Function to handle filter option change
    const handleFilterChange = (option) => {
        setFilterOption(option);
    };
    return (
        <div>
            <h2>DropDown Filter</h2>
            <select value={filterOption} onChange={(e) => handleFilterChange(e.target.value)}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="priceHighToLow">Price High to Low</option>
                <option value="priceLowToHigh">Price Low to High</option>
                <option value="titleAZ">Title (A-Z)</option>
                <option value="titleZA">Title (Z-A)</option>
            </select>

            <ul>
                {applySorting().map(item => (
                    <li key={item.id}>
                        {item.title} - Price: {item.price} - Date: {item.date.toLocaleDateString()}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default FilterTwo;