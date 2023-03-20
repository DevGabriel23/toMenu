import "./../App.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhatsappButton = ({ url }) => {
	let mensaje = "Visita el menú digital de *nombre-empresa* en ";
	const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
		mensaje + url
	)}`;

	return (
		<>
			<a href={shareUrl} target="_blank" rel="noopener noreferrer">
				<button className="whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} className='icon'/>
                    Compartir en WhatsApp
                </button>
			</a>
		</>
	);
};

export default WhatsappButton;
