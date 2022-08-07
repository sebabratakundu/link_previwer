import React from 'react';
import '../stylesheets/footer.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import SITE from '../json-api/site.info.json';

const Footer = () => {
	return (
		<Container fluid className="pt-0 pt-lg-3 mt-0 mt-lg-4">
			<Row>
				<Col md={2}></Col>
				<Col md={8}>
					<div style={{backgroundImage: `url('https://azookers.sirv.com/Link%20Previewer/footer_note.png')`}}
						 className="footer-card app-bg-primary rounded-5 d-flex gap-3 flex-column justify-content-center align-items-center px-5">
						<h3 className="text-white text-center fw-bold">{SITE.FOOTER_NOTE}</h3>
						<Button className="app-btn-warning app-btn-hover border-0" size="lg">Preview Now</Button>
					</div>
				</Col>
				<Col md={2}></Col>
			</Row>
			<Row className="mt-5 pt-4 pt-lg-0">
				<Col md={12} className="p-0">
					<div className="bg-light p-3 text-center">
						<small>{SITE.COPY_WRITE}</small>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Footer;