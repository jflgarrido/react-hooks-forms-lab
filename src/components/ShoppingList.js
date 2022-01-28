import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchCategory, setSearchCategory] = useState("")
  const [newItem, setNewItem] = useState([])
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchCategory(event) {
    setSearchCategory(event.target.value)
  }

  function addNewItem(itemObj) {
    setNewItem([...newItem,itemObj])
  }

  const itemsToDisplay = items
    // category
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    // search term
    .filter((item) => item.name.toLowerCase().includes(searchCategory.toLowerCase()));
    


  return (
    <div className={"ShoppingList"}>
      {console.log(items)}
      <ItemForm onItemFormSubmit={addNewItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchCategory} searchChange={searchCategory}/>
      <ul className={"Items"}>
         {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
