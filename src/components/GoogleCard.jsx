import '../stylesheets/google.card.css';
import React from 'react';

const GoogleCard = ({metaData}) => {
	return (
		<div className="google-card">
			<span className="google-card__title">{metaData.ogTitle}</span>
			<div className="google-card__url">
				<span className="google-card__url-title">{metaData.ogUrl}</span>
				<span className="google-card__url-arrow"></span>
			</div>
			<span className="google-card__description">{metaData.ogDescription}</span>
		</div>
	)
}

export default GoogleCard;