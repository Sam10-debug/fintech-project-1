import logo from '../images/logo (2).png'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const NavBar = ({showMobileNav,setShowMobileNav,ShowMobileNav}) => {
	
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	return ( 
		<nav className="flex justify-between mx-auto  items-center px-4 md:px-12 py-8" data-aos="zoom-in">
			<img src={logo} alt="logo" className='w-[183px] h-[52px]' />
			<div className=" hidden nav-items md:flex items-center w-[65%]">
				<ul className="hidden md:flex text-white w-[70%]">
					<li className='px-6'><a href="#">Pricing</a></li>
					<li className='px-6'><a href="#">Resources</a></li>
					<li className='px-6'><a href="#">Payments</a></li>
					<li className='px-6'><a href="#">Integrations</a></li>
				</ul>
				<button className="hidden md:block w-[20%] h-[62px] font-semibold ml-auto">Get Started</button>
			</div>
			
			<svg onClick={ShowMobileNav} className="flex md:hidden" width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"/></svg>
		</nav>
	 );
}
 
export default NavBar;