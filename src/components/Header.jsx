import React from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import SITE from '../json-api/site.info.json';

const Header = () => {
	return <>
		<Navbar variant="dark" className="app-bg-primary shadow">
			<Container>
				<Navbar.Brand>{SITE.NAME}</Navbar.Brand>
				<Button className="app-btn-warning app-btn-hover border-0 shadow">Contact Us</Button>
			</Container>
		</Navbar>
	</>
}

export default Header;