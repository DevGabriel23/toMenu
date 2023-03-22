import Platillos from "./Platillos";

const Seccion = ({ name, img, platillos }) => {
	return (
		<>
			<div
				className="nombre-seccion"
				style={{ backgroundImage: `url(${img})` }}
			>
				<p>{name}</p>
			</div>
			<div className="seccion">
				<Platillos platillos={platillos}/>
			</div>
		</>
	);
};

export default Seccion;
