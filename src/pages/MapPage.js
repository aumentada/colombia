import React, { useState, useCallback, useRef, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { toJpeg } from 'html-to-image';

import Map from './Map';
import FacebookLogo from '../components/FacebookLogo';
import { FB_SHARE_URL } from '../utils/constants';
import '.././App.css';

import AppContext from '../context/app.context';

function MapPage () {
	const divRef = useRef(null);
	const location = useLocation();

	const [isResetMapToastVisible, setIsResetMapToastVisible] = useState(false);

	const { provinceLevels, setProvinceLevels } = useContext(AppContext);
  
	const noProvinceSelected = provinceLevels.every(level => level === 0);

	const fileName = 'colMap.jpg';
  
	const downloadJpg = useCallback(() => {
		if (divRef.current === null) {
			return;
		}
		toJpeg(divRef.current, { cacheBust: true })
			.then((dataUrl) => {
				const link = document.createElement('a');
				link.download = `${fileName}`;
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.log(err);
			});
	}, [divRef]);

	const handleFacebookShare = useCallback(() => {
		const navUrl = FB_SHARE_URL + window.location.href;
		window.open(navUrl, 'mywindow', 'width=350,height=250');
	}, [location.search]);
    
	const handleReset = () => {
		if (noProvinceSelected) {return;}

		setProvinceLevels(provinceLevels => provinceLevels.map(() => 0));
		setIsResetMapToastVisible(true);
		setTimeout(() => setIsResetMapToastVisible(false), 2500);
	};

	return (
		<section>
			<section className='Map-container'>
				<section className='Map-padding' ref={divRef}>
					<Map/>
				</section>

				<section className='Map-cta'>
					<section className='Map-cta-button-container'>
						<button className='save-image-button' onClick={downloadJpg}>Guardar Imagen</button>
						<button className='reset-button' onClick={handleReset} disabled={noProvinceSelected}>Resetear</button>
					</section>

					<button className='share-fb-button' onClick={handleFacebookShare}>
						<FacebookLogo />
                    Compartir
					</button>
				</section>
			</section>

			<section className="about">

				<h2>Mapa de viajes de Colombia</h2>
				App para visualizar los lugares que has visitado en Colombia.
				<br></br>

				<h2>Como usar</h2>
				El mapa está dividido en 32 departamentos de Colombia. Solo debes hacer click en un departamento y escoger el nivel de viaje correspondiente.
				<br></br>
				<br></br>

				Aquí está lo que representa cada nivel:

				<br></br>
				<br></br>

				<ul>
					<li className="bullet"><b>Viví ahí</b> - pasaste una parte significativa de tu vida en ese departamento.</li>
					<li className="bullet"><b>Me quede ahí</b> - pasaste al menos una noche en ese departamento.</li>
					<li className="bullet"><b>Visité ahí</b> - pasaste algunas horas explorando el departamento.</li>
					<li className="bullet"><b>Aterrice ahí</b> - solo hiciste escala en ese departamento.</li>
					<li className="bullet"><b>Pasé por ahí</b> - pasaste por ese departamento pero no te detuviste.</li>
					<li className="bullet"><b>Nunca estuve ahí</b> - no has estado en ese departamento, deberías ir pronto.</li>
				</ul>

				<br></br>
				Tu puntaje total se actualizará de acuerdo a tus respuestas. Puedes guardar la imagen y compartirla en tus redes sociales.

				<br></br>
				<br></br>


				<h2>Acerca de</h2>

				Este proyecto está basado en la versión de <div className="link" onClick={() => window.open('https://www.my-philippines-travel-level.com/')}>Filipinas↗</div>, que a su vez está basado en la versión de <div className="link" onClick={() => window.open('https://zhung.com.tw/japanex/')}>Japón↗</div> y fue construido usando ReactJS.

				<br></br>

				<div className="link" onClick={() => window.open('https://github.com/aumentada/colombia')}>Código fuente↗</div>.

				<br></br>

				Versión Colombiana adaptada por  <div className="link" onClick={() => window.open('https://www.linkedin.com/in/santiaguf/')}>Santiago Bernal↗</div>. y <div className="link" onClick={() => window.open('https://www.linkedin.com/in/jasmin-eliana-osorio-osorio/')}>Eliana Osorio.↗</div>
				el mapa de Colombia en formato SVG es cortesia de
				<br></br>
				<br></br>

				<div className="flag-counter">
					<a href="https://info.flagcounter.com/RH4U"><img src="https://s01.flagcounter.com/count2/RH4U/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_12/viewers_Visitantes/labels_0/pageviews_1/flags_0/percent_0/" alt="Flag Counter" border="0" /></a>
				</div>
			</section>

			{isResetMapToastVisible && <div className='Map-cta-toast'>El Mapa ha sido reseteado</div>}
		</section>
	);
}

export default MapPage;