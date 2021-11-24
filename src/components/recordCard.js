import React from 'react';
import cardStyle from './recordCard.module.css';


const RecordCard = (props) => (
	<div className={cardStyle.container}>
		<h3>{props.title}</h3>
		<img className={cardStyle.picLink} src={props.picLink} />
	</div>
)

export default RecordCard;