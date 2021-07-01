import React from 'react';
import PhotoCard from './PhotoCard';

const data = [
	{
		title: 'me 2021',
		desc: 'showing off recreational clothes',
		url: '/nun.jpg',
	},
	{
		title: 'akward smile',
		desc: 'me greeting strangers',
		url: '/nacho.png',
	},
	{
		title: 'eagle powers',
		desc: 'the secret ingredient',
		url: '/eaglepowers.jpg',
	},
];

function PhotoGallery() {
	return (
		<div className="gallery">
			{data.map((i) => (
				<PhotoCard title={i.title} desc={i.desc} url={i.url} />
			))}
		</div>
	);
}

export default PhotoGallery;
