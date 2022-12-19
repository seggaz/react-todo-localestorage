import React from 'react';
import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	const inputRef = useRef();
	console.log(newItem);
	
  return (
	<form className='addForm' onSubmit={handleSubmit}>
		<label htmlFor="additem">add item</label>
		<input 
			type="text"
			id="additem"
			ref={inputRef}
			autoFocus
			placeholder="add item"
			value={newItem}
			onChange={e => setNewItem(e.target.value) }
		 />
		 <button 
		 	type='submit'
			onClick={() => inputRef.current.focus()}
			aria-label='add item'
		 >
			<FaPlus />
		 </button>
	</form>
  )
}

export default AddItem