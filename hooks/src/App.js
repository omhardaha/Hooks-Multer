import { UseRef } from "./Hooks/UseRef";
import { UseReducer } from "./Hooks/UseReducer";
import { UseContext } from "./Hooks/UseContext";
import { Multer } from "./Multer/Multer";
import "./app.css";
function App() {
	return (
		<>
			<div className="App" style={{ "text-align": "center" }}>
				React hooks
				{/* Uncomment Those Part U have to see  */}
				{/* <UseRef /> */}
				{/* <UseReducer /> */}
				{/* <UseContext /> */}
				<Multer/>
			</div>
		</>
	);
}

export default App;
