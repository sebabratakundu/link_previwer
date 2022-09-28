import React, {useEffect, useState} from 'react';
import Hero from "../components/Hero";
import axios from "axios";
import {toast} from "react-toastify";
import PreviewArea from "../components/PreviewArea";
import SITE from '../json-api/site.info.json';
import DrawerWrapper from "../components/DrawerWrapper";

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;

const Home = () => {
	const [input, setInput] = useState(`${SITE.DEFAULT_METADATA_URL}`);
	const [ogState, setOgState] = useState(false);
	const [previewError, setPreviewError] = useState(false);
	const [metaData, setMetaData] = useState({});

	const getMetaData = async () => {
		const isValid = validateUrl();

		if (!isValid) {
			return false;
		}

		try {
			setOgState(false);
			setPreviewError(false);
			const response = await axios({
				method: 'GET',
				params: {
					url: encodeURI(input)
				}
			});

			setOgState(true);
			setMetaData(response.data);
		} catch (e) {
			setPreviewError(true);
			setOgState(false);
			toast.error(e.response.data.message || 'Oops!');
		}
	}

	const validateUrl = () => {
		const urlRegEx = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig;

		if (urlRegEx.test(input)) {
			return true;
		}

		toast.error('Please enter a valid url');

		return false;
	}

	useEffect(() => {
		function fetchMetaData() {
			getMetaData();
		}

		fetchMetaData();
	}, [])

	return <>
		<Hero input={input} setInput={setInput} getMetaData={getMetaData}/>
		<PreviewArea previewError={previewError} previewState={ogState} metaData={metaData}/>
		{ogState && <DrawerWrapper metaData={metaData} handleMetaData={setMetaData} />}
	</>
}

export default Home;