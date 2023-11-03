import QRCode from "qrcode.react";
import vec from "../../assets/img/Vector.svg";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Define o elemento raiz do aplicativo

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor de fundo semi-transparente
  },
  content: {
    width: "25%", // Ajuste o tamanho do modal aqui
    margin: "auto", // Centraliza horizontalmente
    top: "50%", // Centraliza verticalmente
    left: "50%",
    transform: "translate(-50%, -50%)", // Centraliza vertical e horizontalmente
    border: "none", // Remova a borda do modal
  },
};

export default function DonationButton({ data }: { data: string }) {
  const [qrData, setQRData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateQRCode = () => {
    const newQRData = "Novo hash de dados"; // Substitua isso pela lógica real de geração
    setQRData(newQRData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={generateQRCode}
        className="bg-[#F6911D] w-[130px] h-[60px] rounded-full flex items-center justify-center"
      >
        <img src={vec} alt="Logo pegasus" className="w-6 h-6" />
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="QR Code Modal"
        style={customStyles}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <QRCode value={qrData} size={256} />{" "}
          {/* Aumente o tamanho do QR Code aqui */}
          {/* <button onClick={closeModal}>Fechar Modal</button> */}
        </div>
        <div className="text-[30px]">⚡⚡</div>
      </Modal>
    </div>
  );
}
