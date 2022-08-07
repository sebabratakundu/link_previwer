import React from 'react';
import '../stylesheets/hero.css';
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import SITE from '../json-api/site.info.json';

const Hero = ({input, setInput, getMetaData}) => {

	return (
		<Container
			fluid
			className="bg-light hero-section d-flex justify-content-center flex-column"
			style={{backgroundImage: `url(${SITE.IMAGE_CDN_PROVIDER}/${SITE.BANNER})`}}>
			<Container>
				<Row>
					<Col md={12} className="text-center">
						<h1 className="display-4 fw-bold">{SITE.HEADLINE}</h1>
						<p>{SITE.TAGLINE}</p>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col md={3}></Col>
					<Col md={6}>
						<InputGroup className="input-group-style">
							<Form.Control
								placeholder="Enter website url"
								value={input}
								onChange={(e) => setInput(e.target.value)}
							/>
							<Button onClick={getMetaData} className="app-btn-warning border-0">Preview</Button>
						</InputGroup>
					</Col>
					<Col md={3}></Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Hero;