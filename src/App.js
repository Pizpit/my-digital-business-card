import './App.css';
import Photo from './components/Photo.js';
import CardHeader from './components/CardHeader.js';
import Buttons from './components/Buttons.js';
import About from './components/About.js';
import Interests from './components/Interests.js';
import Footer from './components/Footer.js';

function App() {
	return (
		<div className="App">
			<div className="card">
				<Photo />
				<CardHeader />
				<div className="card-container">
					<Buttons />
					<About />
					<Interests />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
