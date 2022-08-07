import React from "react";
import SITE from '../json-api/site.info.json';

const Error = () => {
  return (
	  <div className="facebook-card border-0 mx-auto">
		  <div style={{backgroundImage: `url('${SITE.CARD_PLACEHOLDER_IMAGE_URL}')`}} className="facebook-card__image"></div>
		  <div className="facebook-card__text">
			  <span className="facebook-card__link">Broken Link</span>
			  <div className="facebook-card__content">
				  <div style={{marginTop: '5px'}}>
					  <div className="facebook-card__title">Oops!</div>
				  </div>
				  <span className="facebook-card__description">Something went wrong</span>
			  </div>
		  </div>
	  </div>
  )
}

export default Error;