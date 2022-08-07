import React from 'react';
import '../stylesheets/facebook.card.css';

const FacebookCard = ({metaData}) => {
	return (
		<div className="facebook-card border-0">
			<div style={{backgroundImage: `url(${metaData.ogImage})`}} className="facebook-card__image"></div>
			<div className="facebook-card__text">
				<span className="facebook-card__link">{metaData.ogSiteName}</span>
				<div className="facebook-card__content">
					<div style={{marginTop: '5px'}}>
						<div className="facebook-card__title">{metaData.ogTitle}</div>
					</div>
					<span className="facebook-card__description">{metaData.ogDescription}</span>
				</div>
			</div>
		</div>
	)
}

export default FacebookCard;