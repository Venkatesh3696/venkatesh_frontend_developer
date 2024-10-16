import { FaInstagram } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import appLogo from '../assets/logo.png';

const Footer = () => {
	return (
		<footer className='p-32 flex justify-between items-center w-full border-4 border-red-800'>
			<div>
				<img
					src={appLogo}
					alt='logo'
					className='mb-6'
				/>
				<ul className='flex gap-6 '>
					<li>
						<a href='/telegram'>
							<FaTelegramPlane />
						</a>
					</li>
					<li>
						<a href='/insta'>
							<FaInstagram />
						</a>
					</li>
					<li>
						<a href='/twitter'>
							<FaXTwitter />
						</a>
					</li>
					<li>
						<a href='/facebook'>
							<FaFacebookF />
						</a>
					</li>
					<li>
						<a href='/discord'>
							<FaDiscord />
						</a>
					</li>
				</ul>
			</div>
			<div className='w-1/3'>
				<h1 className='text-xl mb-2 font-bold'>
					&quot;Designed for the traders of <br /> today,just like
					you.&quot;
				</h1>
				<div className='bg-black p-4 rounded-md gap-2 flex justify-between'>
					<input
						id='email'
						type='email'
						placeholder="What's your work email?"
						className='bg-black h-10 w-4/6 p-2 border-gray-500 border-2 rounded'
					/>
					<label htmlFor='email'></label>
					<button className='bg-gray-600 w-2/6 rounded'>
						Get Started
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
