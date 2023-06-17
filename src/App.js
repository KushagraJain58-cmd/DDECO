import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Knowledge from './pages/Knowledge/Knowledge';
import Applications from './pages/Applications/Applications';
import Contact from './pages/Contact/Contact';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} exact />
			<Route path="/about" element={<About />} />
			<Route path="/knowledge" element={<Knowledge />} />
			<Route path="/products" element={<Products />} />
			<Route path="/applications" element={<Applications />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
}

export default App;
