const Explore = () => {
	return (
		<div className='flex flex-col justify-start items-center text-center border-solid border-blue-300 rounded-lg  m-32 p-20 gap-4 border-2 shadow-inner '>
			<h1 className='text-xl font-bold'>
				Explore Our <span className='text-blue-400'>dApp</span>
			</h1>
			<p className='text-balance'>
				EthAi is an Al-powered dApp designed to help traders make
				smarter, data-driven decisions. Bu tracking smart money flows,
				monitoring keu wallets, and providing real-time market insights,
				EthAi empowers users to stag ahead of trends. The platform
				offers intuitive Al features for asset recommendations, market
				analysis, and personalized crypto Q&A, making it the ultimate
				tool for both novice and experienced traders.
			</p>
			<button className='bg-slate-300  text-black w-fit p-2 rounded'>
				Open dApp
			</button>
		</div>
	);
};

export default Explore;
