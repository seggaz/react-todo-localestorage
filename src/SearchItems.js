
const SearchItems = ({ searchItem, setSearchItem }) => {
	
  return (
	<form className="searchForm" onSubmit={e => e.preventDefault()}>
		<input 
			type="text"
			id="search"
			placeholder="search item"
			role="searchbox"
			value={searchItem}
			onChange={e => setSearchItem(e.target.value)}
		/>
	</form>
  )
}

export default SearchItems