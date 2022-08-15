import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './views/home/Home';
import Pokemon from './views/pokemon/Pokemon';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:pokemon" element={<Pokemon />} />
			</Routes>
		</div>
	);
}

export default App;
