import React from 'react';
import '../stylesheets/twitter.card.css';

const TwitterCard = ({metaData}) => {
	return (
		<div className="twitter-card">
			<div style={{backgroundImage: `url(${metaData.twitterImage})`}} className="twitter-card__image"></div>
			<div className="twitter-card__text">
				<span
					className="twitter-card__title js-preview-title">{metaData.twitterTitle}</span>
				<span className="twitter-card__description">{metaData.ogDescription}</span>
				<span className="twitter-card__link">{metaData.ogSiteName}</span>
			</div>
		</div>
	)
}

export default TwitterCard;