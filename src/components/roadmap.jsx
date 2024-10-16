import RoadmapItem from './roadmapItem';

const data = [
	{
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
	},
	{
		number: 2,
		title: 'Kicking Off',
		steps: [
			'Launch of EthAi: Officially',
			'Development of Core Al Agents',
			'User Onboarding Campaign',
			'Community Engagement Initiatives',
		],
		imageUrl:
			'https://res.cloudinary.com/dgcysjarm/image/upload/v1668014038/samples/landscapes/architecture-signs.jpg',
	},
	{
		number: 3,
		title: 'Kicking Off',
		steps: [
			'Launch of EthAi: Officially',
			'Development of Core Al Agents',
			'User Onboarding Campaign',
			'Community Engagement Initiatives',
		],
		imageUrl:
			'https://res.cloudinary.com/dgcysjarm/image/upload/v1668014038/samples/landscapes/architecture-signs.jpg',
	},
];
const Roadmap = () => {
	return (
		<div className=''>
			<h1 className='pl-44'>Roadmap</h1>
			{data.map((item) => (
				<RoadmapItem
					key={item.name}
					details={item}
				/>
			))}
		</div>
	);
};

export default Roadmap;
