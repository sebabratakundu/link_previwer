import React from "react";
import {Button, FormControl, FormGroup, FormLabel, Offcanvas} from "react-bootstrap";

const Drawer = (drawerData) => {
	const {show, handleClose, metaData, setMetaData} = drawerData;

	const handleImageInput = (e) => {
		const value = URL.createObjectURL(e.currentTarget.files[0])
		const event = {
			currentTarget: {
				name: e.currentTarget.name,
				value
			}
		}

		handleInput(event);
	}

	const handleInput = (e) => {
		const {name, value} = e.currentTarget;
		let newMetaData = {
			[name]: value
		}

		if (name === 'ogTitle') {
			newMetaData.twitterTitle = value;
		}

		if (name === 'ogImage') {
			newMetaData.twitterImage = value;
		}

		setMetaData(oldMetaData => {
			return {
				...oldMetaData,
				...newMetaData
			}
		});
	}

	return <>
		<Offcanvas show={show} placement="end" onHide={handleClose} backdrop={false}>
			<Offcanvas.Header closeButton>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<FormGroup className="mb-3">
					<FormLabel>Title</FormLabel>
					<FormControl type="text" name="ogTitle" style={{fontSize: '0.8rem'}} value={metaData.ogTitle} onChange={(event) => {
						handleInput(event)
					}}/>
				</FormGroup>
				<FormGroup className="mb-3">
					<FormLabel>Description</FormLabel>
					<FormControl as="textarea" rows={3} name="ogDescription" style={{fontSize: '0.8rem'}} value={metaData.ogDescription}
								 onChange={(event) => {
									 handleInput(event)
								 }}/>
				</FormGroup>
				<FormGroup className="mb-3">
					<FormLabel>OG Image</FormLabel>
					<FormControl type="file" name="ogImage" accept="image/*" style={{fontSize: '0.8rem'}} onChange={(event) => {
						handleImageInput(event)
					}}/>
				</FormGroup>
				<Button className="app-btn-primary border-0 shadow mt-2">Reset</Button>
			</Offcanvas.Body>
		</Offcanvas>
	</>
}

export default Drawer;