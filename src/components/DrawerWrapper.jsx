import React, {useState} from "react";
import {Button} from "react-bootstrap";
import Drawer from "./Drawer";

const DrawerWrapper = (props) => {
	const [showDrawer, setShowDrawer] = useState(false);

	const drawerOpen = () => {
		setShowDrawer(true);
	}

	const drawerClose = () => {
		setShowDrawer(false);
	}

	return <>
		<div className="d-flex justify-content-center mb-3">
			<Button className="app-btn-warning app-btn-hover border-0 shadow" onClick={drawerOpen}>Customize</Button>
		</div>
		<Drawer show={showDrawer} handleClose={drawerClose} metaData={props.metaData}
				setMetaData={props.handleMetaData}></Drawer>
	</>
}

export default DrawerWrapper;
