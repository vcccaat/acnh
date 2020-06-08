import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<form>
			名称  <input
				className='w-50 searchbar'
				type='search'
				placeholder='Search here'
				onChange={searchChange}
			/>
		</form>	
	);
}

export default SearchBox;
