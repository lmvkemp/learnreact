import {useState} from 'react';
import Star from './Star';

export default function StarRating({totalStars = 5}) {
	// return [
	// 	<Star selected={true} />,
	// 	<Star selected={false} />,
	// 	<Star selected={true} />,
	// 	<Star selected={true} />,
	// 	<Star selected={false} />,
	// ];
	const [selectedStars, setSelectedStars] = useState(0);
	return [...Array(totalStars)].map((e, i) => <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />);
}