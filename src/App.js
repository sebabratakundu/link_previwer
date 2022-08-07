import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import React from 'react';
import {ToastContainer} from "react-toastify";
import {lazy, Suspense} from "react";
import Loader from "./components/Loader";

const BaseLayout = lazy(() => import('./layouts/Base.layout'));
const Home = lazy(() => import('./pages/Home'));

function App() {
	return (
		<>
			<Suspense fallback={<Loader height='100vh'/>}>
				<BaseLayout>
					<Home/>
					<ToastContainer
						position="top-right"
						autoClose={2000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</BaseLayout>
			</Suspense>
		</>
	);
}

export default App;
