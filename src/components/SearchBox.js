import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<form>
			输入名称搜索  <input
				className='pa2 ba3 bg-white w-30 searchbar'
				type='search'
				placeholder='Search here'
				onChange={searchChange}
			/>
		</form>	
	);
}

export default SearchBox;