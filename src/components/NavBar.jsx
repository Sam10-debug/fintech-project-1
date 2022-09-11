import logo from '../images/logo (2).png'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const NavBar = () => {
	
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<nav className="flex justify-between mx-auto  items-center px-4 md:px-12 py-8" data-aos="zoom-in">
			<img src={logo} alt="logo" className='w-[183px] h-[52px]' />
			<div className="nav-items flex items-center w-[65%]">
				<ul className="hidden md:flex text-white w-[70%]">
					<li className='px-6'><a href="#">Pricing</a></li>
					<li className='px-6'><a href="#">Resources</a></li>
					<li className='px-6'><a href="#">Payments</a></li>
					<li className='px-6'><a href="#">Integrations</a></li>
				</ul>
				<button className="hidden md:block w-[20%] h-[62px] font-semibold ml-auto">Get Started</button>
			</div>
		</nav>
	 );
}
 
export default NavBar;