const questions = [
	'What is EthAi?',
	'How can EthAi can help me as a Trader?',
	'Who can use EthAi?',
	'Hovv does EthAi track smart money flow?',
	'How does ensure data security?',
];

const Faq = () => {
	return (
		<div className='flex justify-center  items-center gap-32 px-56 my-24'>
			<h1 className=''>Frequently Asked Questions</h1>
			<div>
				{questions.map((question, index) => (
					<div key={index}>
						<h2>+ {question}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default Faq;
