import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<form>
			<i class="fa fa-search fa-lg"></i>  
			<input
				className='searchbar'
				type='search'
				placeholder=' 输入名称搜索'
				onChange={searchChange}
				value={searchfield}
			/>
		</form>	
	);
}

export default SearchBox;
