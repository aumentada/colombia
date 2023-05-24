import React from 'react';
import { Link } from 'react-router-dom';
import '.././App.css';
import denz from '.././denz.jpg';

const Home = () => {
	return (
		<section className="about">

			<h2>Mapa de viajes de Colombia</h2>
    		App para visualizar los lugares que has visitado en Colombia.
			<br></br>
			<br></br>

    This project was inspired by the  <div className="link" onClick={() => window.open('https://zhung.com.tw/japanex/')}>Japan↗</div> version and was built using ReactJS. 
    You can view the source code <div className="link" onClick={() => window.open('https://github.com/denzdelvillar/philippine-map-app')}>here↗</div>.

			<h2>Como usar</h2>

	El mapa está dividido en 32 departamentos de Colombia. Solo debes hacer click en un departamento y escoger el nivel de viaje correspondiente.

			<br></br>
			<br></br>


    Here&apos;s what each level represents:
			<br></br>
			<br></br>
			<li className="bullet"><b>Lived there</b> - you spent a significant portion of your life in that area.</li> 
			<li className="bullet"><b>Stayed there</b> - you slept at least a night in that area.</li> 
			<li className="bullet"><b>Visited there</b> - you spent some hours exploring the area.</li> 
			<li className="bullet"><b>Alighted there</b> - you just dropped off for a short stopover, layover, or transfer.</li> 
			<li className="bullet"><b>Passed there</b> - you passed by that area but did not set foot.</li> 
			<li className="bullet"><b>Never been there</b> - you need to travel there soon.</li> 

			<br></br>


    Your total score will be updated accordingly. You can then save the image and share on your social media.

			<br></br>
			<br></br>


    Click <Link className="link" to={'/map'}>here</Link> to view the map. Enjoy!

			<br></br>
			<br></br>
			<section className="asterisk">*Technically, there are only 82 provinces. Metro Manila is an administrative region.</section>


			<h2>About Me</h2>

			<img className="dp" src={denz} alt="me" />

    Hello there! My name is Denz and I am a Filipino software engineer currently based in Singapore.
			<br></br>
			<br></br>

    This is my first time dabbling with ReactJS, and I used chatGPT heavily to help me with this project. If you have any comments or if you want to contribute to this project, please do reach out! 

			<br></br>
			<br></br>

    Check out my socials: 
			<br></br>
			<div className="link" onClick={() => window.open('https://www.instagram.com/denzdelvillar')}>Instagram↗</div>
			<br></br>
			<div className="link" onClick={() => window.open('https://www.twitter.com/denzvryan')}>Twitter↗</div>
			<br></br>
			<div className="link" onClick={() => window.open('https://www.linkedin.com/in/denzdelvillar')}>LinkedIn↗</div>.

			<br></br>
			<br></br>

			<div className="flag-counter">
				<a href="https://info.flagcounter.com/RH4U"><img src="https://s01.flagcounter.com/count2/RH4U/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_12/viewers_Visitantes/labels_0/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0" /></a>
			</div>
		</section>
	);
};
  
export default Home;
  