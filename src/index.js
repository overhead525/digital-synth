import { h } from 'preact';
import { useState } from 'preact/hooks';
import './style';
import 'normalize.css'
import SynthGUI from "./components/SynthGUI";
import ScreenTooSmall from "./components/ScreenTooSmall";

import { SoundSelectionContext } from "./contexts/SynthContexts";

export default function App() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	window.onresize = () => setWindowWidth(window.innerWidth);

	const enoughScreenSpace = () => {
		return window.innerWidth >= 1000 ? <SynthGUI /> : <ScreenTooSmall />
	}

	return (
		<div>
			<SoundSelectionContext.Provider value="sine">
			{enoughScreenSpace()}
			</SoundSelectionContext.Provider>
		</div>
	);
}
