import React, { useState } from 'react';
import FilterTwo from './FilterTwo';


const productsData = [
    { id: 1, name: 'Product 1', category: 'Category A', department: 'Dep 1' },
    { id: 2, name: 'Product 2', category: 'Category A', department: 'Dep 2' },
    { id: 3, name: 'Product 3', category: 'Category B', department: 'Dep 1' },
    { id: 4, name: 'Product 4', category: 'Category B', department: 'Dep 3' },
    { id: 5, name: 'Product 5', category: 'Category C', department: 'Dep 1' }
];

const Filter = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedDepartments, setSelectedDepartments] = useState([]);


    const handleCheckboxChange = (type, value) => {
        if (type === 'category') {
            setSelectedCategories(prevSelectedCategories => {
                const updatedCategories = prevSelectedCategories.includes(value)
                    ? prevSelectedCategories.filter(cat => cat !== value)
                    : [...prevSelectedCategories, value];
                console.log('Selected Categories:', updatedCategories);
                return updatedCategories;
            });
        } else if (type === 'department') {
            setSelectedDepartments(prevSelectedDepartments => {
                const updatedDepartments = prevSelectedDepartments.includes(value)
                    ? prevSelectedDepartments.filter(dep => dep !== value)
                    : [...prevSelectedDepartments, value];
                console.log('Selected Departments:', updatedDepartments);
                return updatedDepartments;
            });
        }
    };

    const filteredProducts = productsData.filter(product => {
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const departmentMatch = selectedDepartments.length === 0 || selectedDepartments.includes(product.department);
        return categoryMatch && departmentMatch;
    });

    return (
        <div>
            <h1>Product Filter</h1>
            <h5>Category</h5>
            <div>
                {['Category A', 'Category B', 'Category C'].map((category) => (
                    <div key={category}>
                        <input
                            type="checkbox"
                            id={category}
                            value={category}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCheckboxChange('category', category)} />
                        <label htmlFor={category}>{category}</label>
                    </div>
                ))}
            </div>
            <div>
                <h5>Department</h5>
                {['Dep 1', 'Dep 2', 'Dep 3'].map(department => (
                    <div key={department}>
                        <input
                            type="checkbox"
                            id={department}
                            value={department}
                            checked={selectedDepartments.includes(department)}
                            onChange={() => handleCheckboxChange('department', department)}
                        />
                        <label htmlFor={department}>{department}</label>
                    </div>
                ))}
            </div>
            <h3>Filterd Product</h3>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>{product.name} - {product.category} - {product.department}</li>
                ))}
            </ul>
            <FilterTwo />
        </div>
    )
}

export default Filter;