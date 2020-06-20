import React from 'react';
import Translate from 'react-translate-component';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<form>
			<i class="fa fa-search fa-lg"></i>  
			<Translate 
				component='input'
				className='searchbar'
				type='search'
				attributes={{placeholder:'placeholder'}}
				onChange={searchChange}
				value={searchfield}
			/>
		</form>	
	);
}

export default SearchBox;
