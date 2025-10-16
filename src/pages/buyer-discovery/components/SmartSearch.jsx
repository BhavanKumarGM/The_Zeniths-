import React from 'react';

const SmartSearch = ({ onSearch }) => {
	return (
		<div className="w-full">
			<input
				type="search"
				placeholder="Search farms, produce, or locations..."
				className="w-full px-4 py-2 rounded-lg border"
				onChange={(e) => onSearch?.(e.target.value)}
			/>
		</div>
	);
};

export default SmartSearch;
