import { useEffect } from 'react';
import './App.css';
import MainPage from './components/main-page';

function App() {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log({ entry });
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				} else {
					entry.target.classList.remove('show');
				}
			});
		});

		const hiddenElements = document.querySelectorAll('.scroll-animation');
		console.log(hiddenElements);

		hiddenElements.forEach((el) => observer.observe(el));
	}, []);
	return (
		<div className='w-screen '>
			<MainPage />
		</div>
	);
}

export default App;
