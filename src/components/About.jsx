const About = () => {
	return (
		<div className='flex flex-col p-32 text-center justify-center items-center'>
			<h1>About EthAi</h1>
			<p className='text-wrap text-cyan-600/80'>
				At EthAi, we&apos;re all about making crypto trading easier and
				more intuitive. We provide tools that help keep up with all
				market track top traders&apos; movements.
			</p>
			<button className='bg-white text-black px-4 py-2 rounded-sm w-fit'>
				Read More
			</button>
			<div className='grid grid-cols-2 bg-[#08252a] h-96 text-start mt-4 mx-52 p-20 rounded-lg '>
				<div className='h-fit p-4 '>
					<h1>Stay Ahead</h1>
					<p>No more guesswork—get clear, trustable insights.</p>
				</div>
				<div className='h-fit p-4'>
					<h1>Know Your Assets</h1>
					<p>
						Always stag on top of how gour investments are
						performing.
					</p>
				</div>
				<div className='h-fit p-4'>
					<h1>Simple, Not Overwehelming </h1>
					<p>
						Our tools are designed to make complex market analysis
						easy to understand and act on.
					</p>
				</div>
				<div className='h-fit p-4'>
					<h1>Future Proof</h1>
					<p>
						We&apos;re constantly improving, adding new features to
						help you make the most informed decisions possible.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
