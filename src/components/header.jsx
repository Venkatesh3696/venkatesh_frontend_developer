import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header className='w-screen flex flex-row-reverse py-10  mx-auto justify-between items-center mb-12 z-10 sticky'>
			<div className='basis-1/3 items-center flex flex-row justify-end pr-4 gap-4'>
				<NavLink to='/login'>Login</NavLink>
				<button>
					<NavLink
						to='/white-paper'
						className={'bg-sky-300 p-2 rounded-md'}
					>
						White Paper
					</NavLink>
				</button>
			</div>
			<ul className=' basis-1/3 text-xl  content-center bg-teal-950 p-2 rounded-full flex flex-row justify-around'>
				<NavLink to='/features'>Features</NavLink>
				<NavLink to='/why-us'>Why Us</NavLink>
				<NavLink to='/tokenomics'>Tokenomics</NavLink>
				<NavLink to='/roadmap'>Roadmap</NavLink>
			</ul>
			<span className='basis-1/3'></span>
		</header>
	);
};

export default Header;
