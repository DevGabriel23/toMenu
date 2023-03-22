import React from "react";

const Platillos = ({ platillos }) => {
	return (
		<>
			{platillos.map((platillo, index) => (
				<div key={platillo.name} className="platillo">
					<div className="info-platillo">
						<p className="nombre-platillo">{platillo.name}</p>
						<p className="descripcion-platillo">
							{platillo.description}
						</p>
					</div>
					<div className="img-platillo">
						<img src={platillo.image} alt="" />
						<div className="precio-platillo">${platillo.price}.00</div>
					</div>
				</div>
			))}
		</>
	);
};

export default Platillos;
