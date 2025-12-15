import './Hero.css'; 

export default function Hero(){
	return(
		<section className="hero-section">
			<div className='container'> 
				<h1 className="title"> Your title here</h1>
				<p className="subtitle"> 
					Your headline here
				</p> 

                {/* if you want to add a bg-image */}
				{/* <img 
					src="/hero-bg.png"
					alt="description of bg"
				/> */}
			</div>
		</section>
	);
}