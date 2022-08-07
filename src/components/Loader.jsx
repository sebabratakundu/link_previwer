import React from 'react';
import '../stylesheets/loader.css';
import {Col, Container, Row} from "react-bootstrap";

const Loader = ({height}) => {
	return (
		<>
			<Container style={{height}} fluid className="d-flex align-items-center justify-content-center">
				<Row>
					<Col md={12}>
						<div className="lds-ellipsis">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Loader;