import { useState } from 'react';

function useDropdown(items, initIndex = 0) {
	const [index, setIndex] = useState(initIndex);

	const handler = value => {
    const selectedIndex = items.findIndex(item => item.value === value);
		if (selectedIndex !== index) {
			setIndex(selectedIndex);
		}
	};

	return [
		index,
		items[index],
		handler
  ];
}

export default useDropdown;