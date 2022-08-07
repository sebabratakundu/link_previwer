import '../stylesheets/preview.area.css';
import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SocialTabs from "./SocialTabs";
import Loader from "./Loader";
import Error from "./Error";

const PreviewArea = ({previewState, previewError, metaData}) => {
	return (
		<Container id="preview-area" className="py-5">
			<Row>
				<Col md={12}>
					{
						previewState ? <SocialTabs metaData={metaData}></SocialTabs> : (previewError ? <Error/> : <Loader height="100%"/>)
					}
				</Col>
			</Row>
		</Container>
	)
}

export default PreviewArea;
