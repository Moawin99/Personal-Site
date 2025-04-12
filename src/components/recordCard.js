import React from 'react';
import * as cardStyle from './recordCard.module.css';


const RecordCard = (props) => (
	<div className={cardStyle.container}>
		<h3>{props.title}</h3>
		<img alt={props.title} className={cardStyle.picLink} src={props.picLink} />
	</div>
)

export default RecordCard;