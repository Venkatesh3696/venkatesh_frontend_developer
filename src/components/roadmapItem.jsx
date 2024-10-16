import React from 'react';
import imahge from '../assets/roadmap_1.jpg';

const RoadmapItem = ({ details }) => {
	details = {
		number: 1,
		title: 'Kicking Off',
		steps: [
			'Launch of EthAi: Officially',
			'Development of Core Al Agents',
			'User Onboarding Campaign',
			'Community Engagement Initiatives',
		],
		imageUrl:
			'https://res.cloudinary.com/dgcysjarm/image/upload/v1668014038/samples/landscapes/architecture-signs.jpg',
	};
	console.log(imahge);

	return (
		<div className='flex flex-row justify-between items-center  w-full h-96 border-red-600 border-4 p-6 my-14'>
			<div className='basis-1/2 border-green-500 border p-4 h-full'>
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
				className='basis-1/2 w-full h-full border-green-500 border '
				src={details.imageUrl}
				alt='roadmaps'
			/>
		</div>
	);
};

export default RoadmapItem;
