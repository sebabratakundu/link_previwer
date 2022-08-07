import '../stylesheets/socialtabs.css';
import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import GoogleCard from "./GoogleCard";
import FacebookCard from "./FacebookCard";
import TwitterCard from "./TwitterCard";
import IconButton from "./IconButton";
import tabs from '../json-api/social.tabs.json';

const SocialTabs = ({metaData}) => {
	return (
		<div>
			<Tabs
				defaultActiveKey="facebook"
				className="border-0 d-flex justify-content-center"
			>
				{
					tabs.map(tab => <Tab
						key={tab.id}
						eventKey={tab.eventKey}
						className=""
						title={<IconButton classes={tab.icon} />}>
						{
							tab.eventKey === 'google' ? <GoogleCard metaData={metaData}/> : (tab.eventKey === 'facebook' ? <FacebookCard metaData={metaData}/> : <TwitterCard metaData={metaData}/>)
						}
					</Tab>)
				}
			</Tabs>
		</div>
	)
}

export default SocialTabs;