//components/SearchComponent.js
import React from 'react';

function SearchComponent({ searchCourse, productsearchUserFunction }) {
    return ( <
        header className = "App-header" >
        <
        h1 > Shopping Cart < /h1> <
        div className = "search-bar" >
        <
        input type = "text"
        placeholder = "Search for Products..."
        value = { searchCourse }
        onChange = { productsearchUserFunction }
        /> <
        /div> <
        /header>
    );
}

export default SearchComponent;