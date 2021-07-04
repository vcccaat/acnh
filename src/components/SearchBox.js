import React from 'react';
import Translate from 'react-translate-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<form>
			<FontAwesomeIcon icon={faSearch} />
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
