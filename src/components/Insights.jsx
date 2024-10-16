const Insights = () => {
	return (
		<div className='flex flex-col gap-6 p-32  mx-40'>
			<div className='flex gap-4  h-[450px]'>
				<div className='text-wrap w-1/4 insight-card'>
					<div className='w-full aspect-square bg-[#0e8b9a] p-2 rounded  text-transparent  hover:text-white duration-500'>
						<div className='bg-[#15b6c9] w-full aspect-square rounded flex items-center justify-center'>
							<h2 className='text-3xl font-bold  text-center '>
								{'< >'}
							</h2>
						</div>
					</div>
					<h1>Trade Optimizer</h1>
					<p>
						Find the right moments to bug or sell, with personalized
						trade suggestions designed to help you make the most of
						every opportunity.
					</p>
				</div>
				<div className='w-2/4 gap-4  flex flex-col'>
					<div className='h-2/5 insight-card mb-1'>
						<h1>Market Insight</h1>
						<p>
							Stag ahead of the market. Get real-time updates on
							market trends, track top traders&apos; movements,
							and spot signals from key influencers.
						</p>
					</div>
					<div className='flex-grow insight-card flex justify-center items-center text-transparent hover:text-white duration-500'>
						<h1 className='font-bold text-5xl '> Our Features</h1>
					</div>
				</div>

				<div className='w-1/4 insight-card  '>
					<div className='risk-image w-fullduration-500'></div>
					<h1>Risk Gaurd</h1>
					<p>
						Get alerts on market swings and potential risks before
						theu impact your portfolio. This agent helps you
						navigate volatility and stay prepared for anything.
					</p>
				</div>
			</div>
			<div className='flex gap-4  h-48'>
				<div className='w-2/5 insight-card '>
					<h1>Portfolio Sync</h1>
					<p>
						Easily manage your portfolio. You&apos;ll always know
						what you own, how it&apos;s performing, and where
						it&apos;s headed.
					</p>
				</div>

				<div className='w-3/5 insight-card'>
					<h1>Opportunity Sync</h1>
					<p>
						Find exciting new projects, events and tokens that
						others might be missing. Identifying promising
						opportunities early, so gou never miss out on the next
						big thing.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Insights;
