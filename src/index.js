import preact, { h } from "preact";
import "preact/debug";
import { useState } from "preact/hooks";
import "./style";
import "normalize.css";
import SynthGUI from "./components/SynthGUI";
import ScreenTooSmall from "./components/ScreenTooSmall";
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.onresize = () => setWindowWidth(window.innerWidth);

  const enoughScreenSpace = () => {
    return window.innerWidth >= 1000 ? <SynthGUI /> : <ScreenTooSmall />;
  };

  return <Provider store={store}>{enoughScreenSpace()}</Provider>;
}
