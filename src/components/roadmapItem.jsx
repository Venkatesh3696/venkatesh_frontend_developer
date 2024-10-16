const RoadmapItem = ({ details }) => {
	console.log(details);

	return (
		<div className='scroll-animation flex flex-row justify-center items-center  w-full h-80 px-60 my-14'>
			<div className='basis-1/2 p-4 '>
				<p className='bg-white text-black w-fit px-2 rounded'>
					PHASE {details.number}
				</p>
				<h2 className='text-xl mt-2'>{details.title}</h2>
				<ul className='p-4 list-disc'>
					{details.steps.map((step, index) => {
						return (
							<li key={index}>
								<p className='text-s'>{step}</p>
							</li>
						);
					})}
				</ul>
			</div>

			<img
				className='basis-1/2 w-full h-full blur-img'
				src={details.imageUrl}
				alt='roadmaps'
			/>
		</div>
	);
};

export default RoadmapItem;
