import QRCode from "qrcode.react";
import vec from "../../assets/img/Vector.svg";
import { useState } from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Define o elemento raiz do aplicativo

export default function DonationButton({ data }: { data: string }) {
  const [qrData, setQRData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateQRCode = () => {
    // Aqui você pode implementar a lógica para gerar um novo QR Code com base no seu hash de dados
    // Vou usar um exemplo simples aqui para demonstração
    const newQRData = 'Novo hash de dados'; // Substitua isso pela lógica real de geração
    setQRData(newQRData);
    setIsModalOpen(true); // Abre o modal quando o QR Code é gerado
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={generateQRCode} className="bg-[#F6911D] w-[130px] h-[60px] rounded-full flex items-center justify-center">
        <img src={vec} alt="Logo pegasus" className="w-6 h-6" />
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="QR Code Modal"
      >
        <QRCode value={qrData} />
        <button onClick={closeModal}>Fechar Modal</button>
      </Modal>
    </div>
  );
}
