import mockup from '../images/mockup.png'
import group3 from '../images/Group 3.png'
import group4 from '../images/Group 4.png'
import play from '../images/cil_media-play.png'
import apple from '../images/foundation_social-apple.png'
import review from '../images/review.png'

const HeroSection = () => {
	return ( 
		<section className="flex flex-col md:flex-row px-12 pb-8">
			<div className="flex-1 ">
				<h1 className="text-[51.29px] leading-[76.93px] text-white w-4/5">Mobile banking that <img src={group4} alt="group3-image" /> helps you manage finances<img src={group3} alt="group3-image" /> </h1>
				<p className="text-body w-[90%] text-2xl leading-[150%]">Modern and secure service that allows you to manage account, make payments and transfer using your mobile device</p>
				<div className="flex w-full justify-between my-12">
					<div className="md:w-[45%] h-[70px] flex justify-center items-center  border-white border-[1px]  cursor-pointer">
						<img src={apple} alt="apple-image" className="w-[20px] h-[20px] mr-2" />
						<div className="flex flex-col">
							<span className="text-body">Download on the </span>
							<span className="text-white font-bold">App store</span>
						</div>
					</div>
					<div className="md:w-[45%] h-[70px] flex justify-center items-center border-white border-[1px] cursor-pointer">
						<img src={play} alt="play-image" className="w-[20px] h-[20px] mr-2" />
						<span className="text-body">Watch Demo</span>
					</div>
				</div>
				<img src={review} alt="review-image" className='' />
			</div>
			<div className="flex-1 flex justify-end items-center">
				<img src={mockup} alt="mockup-image" className="" />
			</div>
		</section>
	 );
}
 
export default HeroSection;