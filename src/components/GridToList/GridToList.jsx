import React, { useState } from 'react';
import GridView from './GridView';
import ListView from './ListView';

const GridToList = () => {
    const [isGridView, setIsGridView] = useState(true);
    const data=[{id:1, name:"Item 1", mail:'item1.com'}, {id:2, name:'Item 2', mail:'item2.com'}, {id:3, name: 'Item 3', mail:'item3.com'}, {id:4, name:'Item 4', mail:'item4.com'}, {id:5, name:'Item 5', mail:'item5.com'}];

    // Function to toggle view mode
    const toggleViewMode = () =>{
        setIsGridView(prevState => !prevState);
    };

    // Function to switch to grid view
    const switchToGridView = () => {
        setIsGridView(true);
    }

    // Function to switch to list View
    const switchToListView = () => {
        setIsGridView(false);
    }

  return (
    <div>
        <h2>With Single Button</h2>
        <button onClick={toggleViewMode}>Toggle View</button>
        <h2>With Different Buttons</h2>
        <button onClick={switchToGridView}>Grid View</button>
        <button onClick={switchToListView}>List View</button>
        {isGridView ? <GridView data={data}/> : <ListView data={data}/>}
    </div>
  )
}

export default GridToList;