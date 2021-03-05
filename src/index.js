import { h } from 'preact';
import { useState } from 'preact/hooks';
import './style';
import 'normalize.css'
import SynthGUI from "./components/SynthGUI";
import ScreenTooSmall from "./components/ScreenTooSmall";

export default function App() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	window.onresize = () => setWindowWidth(window.innerWidth);

	const enoughScreenSpace = () => {
		return window.innerWidth >= 1080 ? <SynthGUI /> : <ScreenTooSmall />
	}

	return (
		<div>
			{enoughScreenSpace()}
		</div>
	);
}
