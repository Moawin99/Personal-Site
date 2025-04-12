import React from 'react';
import RecordCard from './recordCard';
import * as recordStyle from './recordContainer.module.css';
// import records from './records.js';

const records = [
	{
		title:	"The Greatest of Nat King Cole",
		picLink: "https://img.discogs.com/xoMk6rnAw05YdbWIpMxSLDXu7ag=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1806468-1254884127.jpeg.jpg"
	},
	{
		title: "Miles Davis Kind of Blue",
		picLink: "https://m.media-amazon.com/images/I/71dQKN2UEfL._SL1500_.jpg"
	},
	{
		title: "Cowboy Bebop",
		picLink: "https://cdn.vox-cdn.com/thumbor/vp34xX1t539zJeucbFDmZtZ93HQ=/0x0:3000x3000/1200x0/filters:focal(0x0:3000x3000):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/21640545/cowboy_bebop_original_series_soundtrack_vinyl_cover_3000.jpg"
	},
	{
		title: "Songs of the Islands",
		picLink: "https://img.discogs.com/W501jR12XKPVsk5930mgfOOokfw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-7899106-1451235642-4245.jpeg.jpg"
	},
	{
		title: "2014 Forest Hills Drives",
		picLink: "https://m.media-amazon.com/images/I/71v0b7YG+zL._SL1500_.jpg"
	},
	{
		title: "Christmas with Nat King Cole",
		picLink: "https://img.discogs.com/zK9-83JtyDCiNRbCA7XPhoPLOV0=/fit-in/600x595/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1819285-1482953139-7634.jpeg.jpg"
	},
	{
		title: "Merry Christmas",
		picLink: "https://m.media-amazon.com/images/I/71b702BjRuL._SL1500_.jpg"
	},
	{
		title: "Songs for swingin' lovers!",
		picLink: "https://m.media-amazon.com/images/I/71j7Wey9N3L._SL1077_.jpg"
	},
	{
		title: "Free Spirit",
		picLink: "https://upload.wikimedia.org/wikipedia/en/1/1b/Khalid_-_Free_Spirit.png"
	},
	{
		title: "Our Golden Favorites",
		picLink: "https://images-na.ssl-images-amazon.com/images/I/51NyMfZ0%2BaL._SY355_.jpg"
	},
	{
		title: "World Famous Music Treasures PAVAROTTI",
		picLink: "https://m.media-amazon.com/images/I/91RDhFXmuxL._SL1500_.jpg"
	},
	{
		title: "Songs the Whole World Loves PAVAROTTI",
		picLink: "https://img.discogs.com/yBxExP2XE8tRoQFl-2VQ6AdtVJk=/fit-in/600x602/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3596545-1489492160-4849.jpeg.jpg"
	},
	{
		title: "Hello Young Lovers",
		picLink: "https://img.discogs.com/2sX8920MtmJe_IQPZ5EjPTPDsR4=/fit-in/594x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-17123199-1611709177-8692.jpeg.jpg"
	},
	{
		title: "Edith Piaf Chante",
		picLink: "https://img.discogs.com/dBCCGRRZurRaQ6wvcjA1MFyiCOc=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-7160272-1435077395-8393.jpeg.jpg"
	},
	{
		title: "Famous Love Songs",
		picLink: "https://img.discogs.com/8tXvBiXrA_x9KjUV0jTTOd-DHiI=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-4767799-1508683643-3275.jpeg.jpg"
	},
	{
		title: "Apricot Princess",
		picLink: "https://m.media-amazon.com/images/I/71PuqTZtIEL._SL1000_.jpg"
	},
	{
		title: "Conversations With The Moon",
		picLink: "https://images.genius.com/6b5941d30629df29c40edfd1b145261b.1000x1000x1.png"
	}
];

const RecordBox = (props) => (
	<div id="records" className={recordStyle.container}>
		<h1 className={recordStyle.title}>My Record Collection!</h1>
		<div className={recordStyle.gridContainer}>
			{records.map((record) => (
				<RecordCard
				title={record.title}
				picLink={record.picLink}
				/>
			))}
		</div>
	</div>
)

export default RecordBox;