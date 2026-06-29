import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFab() {
  return (
    <a
          href="https://wa.me/31613015220?text=Hoi%20Elze,%20ik%20heb%20een%20vraag%20over%20de%20Breakfast%20Club."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
          aria-label="Stuur een WhatsApp bericht"
        ><FaWhatsapp />
      </a>
  );
}