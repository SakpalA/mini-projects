import React from 'react';
import Search from './Search';

const SearchData = () => {
    const data = ['apple', 'mango', 'banana', 'orange', 'pineapple', 'watermelon', 'kiwi', 'coconut', 'cherry', 'grape', 'pear'];
  return (
    <div>
        <Search data={data}/>
    </div>
  )
};

export default SearchData;