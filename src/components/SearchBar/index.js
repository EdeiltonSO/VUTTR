import React from "react";

import SearchField from "../SearchField";
import Checkbox from "../../components/Checkbox";
import { Container } from "./styles";

const SearchBar = () => {
	return (
		<Container>
			<SearchField />
			<Checkbox title="search in tags only" />
		</Container>
	);
};

export default SearchBar;
