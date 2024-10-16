import Footer from './footer';
import Header from './header';
import tokenomicImage from '../assets/tokenomics.png';
import Faq from './Faq';
import Roadmap from './roadmap';
import About from './About';
import Explore from './Explore';
import Insights from './Insights';

const MainPage = () => {
	return (
		<main className='bg-[#00161d]  text-white'>
			<div
				className={`bg-[url("./assets/image_1.jpg")] bg-cover w-screen h-screen text-white text-xxl flex flex-col`}
			>
				<Header />
				<div className='flex flex-col justify-center items-center pt-36 text-5xl'>
					<h1>
						When Innovarion meets
						<span className='bg-sky-500 rounded-2xl p-1'>
							Investment
						</span>
					</h1>
					<p className='text-lg my-4'>
						Empowering Trading Through Advanced Technologies
					</p>
					<button className='text-lg bg-sky-500 p-3 rounded'>
						Open dApp
					</button>
				</div>
			</div>
			<Insights />
			<About />
			<div>
				<div>
					<img
						src={tokenomicImage}
						alt='tokenomics'
					/>
				</div>
			</div>
			<Roadmap />
			<Faq />
			<Explore />
			<Footer />
		</main>
	);
};

export default MainPage;
