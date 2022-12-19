import Header from "./Header";
import AddItem from "./AddItem";
import Footer from "./Footer";
import Content from "./Content";
import SearchItems from "./SearchItems";
import { useState, useEffect } from "react";

function App() {
	const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
	const [newItem, setNewItem] = useState("");
	const [searchItem, setSearchItem] = useState("");
	// console.log(items)

	useEffect(() => {
		localStorage.setItem("shoppinglist", JSON.stringify(items));
	}, [items])

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = {id, checked: false, item};
		const listItems = [...items, myNewItem];
		setItems(listItems);
	};

	// console.log(items);
	const handleCheck = (id) => {
		const listItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item);
		setItems(listItems);
	};

	
	const handleDelete = (id) => {
		const listItems = items.filter(item => item.id !== id);
		setItems(listItems);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		setNewItem("");
	}
  return (
    <div className="App">
		<Header title='react-todo-list' />
		<AddItem 
		  	newItem={newItem} 
			setNewItem={setNewItem} 
			handleSubmit={handleSubmit}
		 />
		 <SearchItems
			searchItem={searchItem}
			setSearchItem={setSearchItem} 
		/>
		<Content 
			items={items.filter(item => (item.item).toLowerCase().includes(searchItem.toLowerCase()))}
			handleCheck={handleCheck}
			handleDelete={handleDelete}	
		/>
		<Footer length={items.length} /> 
    </div>
  );
}

export default App;
