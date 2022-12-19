
import { ItemList } from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main className="content">
      {items.length ? (
        <>
          <ItemList 
		  	items={items} 
			handleCheck={handleCheck} 
			handleDelete={handleDelete} 
		/>
        </>
      ) : (
        <>
          <h1 className="list">List is empty Add new item...</h1>
        </>
      )}
    </main>
  );
};

export default Content;