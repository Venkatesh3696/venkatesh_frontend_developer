import Footer from './footer';
import Header from './header';
import RoadmapItem from './roadmapItem';

const roadmap = [];

const MainPage = () => {
	return (
		<main className='bg-[#00161d]  text-white'>
			<div
				className={`bg-[url("./assets/image_1.jpg")] bg-cover w-screen h-screen text-white text-xxl flex flex-col`}
			>
				<Header />
				<div className='flex flex-col justify-center items-center'>
					<h1>When Innovarion meets Investment</h1>
					<p>Empowering Trading Through Advanced Technologies</p>
					<button>Open dApp</button>
				</div>
			</div>
			<div className='flex flex-col gap-6 p-32  m-40'>
				<div className='flex gap-4  h-96'>
					<div className='text-wrap w-1/4 insight-card'>
						<img
							src=''
							alt='image'
						/>
						<h1>Trade Optimizer</h1>
						<p>
							Find the right moments to bug or sell, with
							personalized trade suggestions designed to help you
							make the most of every opportunity.
						</p>
					</div>
					<div className='w-2/4 gap-4 '>
						<div className='h-2/5 insight-card mb-1'>
							<h1>Market Insight</h1>
							<p>
								Stag ahead of the market. Get real-time updates
								on market trends, track top traders&apos;
								movements, and spot signals from key
								influencers.
							</p>
						</div>
						<div className='h-3/5 insight-card '></div>
					</div>

					<div className='w-1/4 insight-card '>
						<img
							src=''
							alt='image'
						/>
						<h1>Risk Gaurd</h1>
						<p>
							Get alerts on market swings and potential risks
							before theu impact your portfolio. This agent helps
							you navigate volatility and stay prepared for
							anything.
						</p>
					</div>
				</div>
				<div className='flex gap-4  h-48'>
					<div className='w-2/5 insight-card '>
						<h1>Portfolio Sync</h1>
						<p>
							Easily manage your portfolio. You&apos;ll always
							know what you own, how it&apos;s performing, and
							where it&apos;s headed.
						</p>
					</div>

					<div className='w-3/5 insight-card'>
						<h1>Opportunity Sync</h1>
						<p>
							Find exciting new projects, events and tokens that
							others might be missing. Identifying promising
							opportunities early, so gou never miss out on the
							next big thing.
						</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col p-32 text-center justify-center items-center'>
				<h1>About EthAi</h1>
				<p className='text-wrap'>
					At EthAi, we&apos;re all about making crypto trading easier
					and more intuitive. We provide tools that help keep up with
					all market track top traders&apos; movements.
				</p>
				<button className='bg-white text-black px-4 py-2 rounded-sm w-fit'>
					Read More
				</button>
				<div className='grid grid-cols-2 bg-[#08252a] h-96 text-start mt-4 p-20 rounded-lg '>
					<div className='border border-red-700 p-4  '>
						<h1>Stay Ahead</h1>
						<p>No more guesswork—get clear, trustable insights.</p>
					</div>
					<div className='border border-red-700 p-4'>
						<h1>Know Your Assets</h1>
						<p>
							Always stag on top of how gour investments are
							performing.
						</p>
					</div>
					<div className='border border-red-700 p-4'>
						<h1>Simple, Not Overwehelming </h1>
						<p>
							Our tools are designed to make complex market
							analysis easy to understand and act on.
						</p>
					</div>
					<div className='border border-red-700 p-4'>
						<h1>Future Proof</h1>
						<p>
							We&apos;re constantly improving, adding new features
							to help you make the most informed decisions
							possible.
						</p>
					</div>
				</div>
			</div>
			<div>
				<h1>Tokenomics</h1>
			</div>
			<div>
				<h1>Roadmap</h1>
				{/* {roadmap.map((item) => (
					<RoadmapItem
						key={item.name}
						details={item}
					/>
				))} */}
				<RoadmapItem />
				<RoadmapItem />
				<RoadmapItem />
			</div>
			<div className='flex flex-col justify-start items-center text-center border-solid border-blue-300 rounded-lg  m-32 p-20 gap-4 border-2 shadow-inner '>
				<h1 className='text-xl font-bold'>
					Explore Our <span className='text-blue-400'>dApp</span>
				</h1>
				<p className='text-balance'>
					EthAi is an Al-powered dApp designed to help traders make
					smarter, data-driven decisions. Bu tracking smart money
					flows, monitoring keu wallets, and providing real-time
					market insights, EthAi empowers users to stag ahead of
					trends. The platform offers intuitive Al features for asset
					recommendations, market analysis, and personalized crypto
					Q&A, making it the ultimate tool for both novice and
					experienced traders.
				</p>
				<button className='bg-slate-300  text-black w-fit p-2 rounded'>
					Open dApp
				</button>
			</div>
			<Footer />
		</main>
	);
};

export default MainPage;
