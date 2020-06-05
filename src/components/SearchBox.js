import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<form>
			名称  <input
				className='pa2 ba3 bg-white w-40 searchbar'
				type='search'
				placeholder='Search here'
				onChange={searchChange}
			/>
		</form>	
	);
}

export default SearchBox;