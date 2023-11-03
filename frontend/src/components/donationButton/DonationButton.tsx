import QRCode from "qrcode.react";
import vec from "../../assets/img/Vector.svg";
import { useState } from "react";
import Modal from "react-modal";
import api from "@/api/api";

import axios from "axios";

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

  async function createInvoice() {
    try {
      const response = await api.post('/invoice', {
        journalistKey: "cb3fa1bb63f24298bba79d1dbc3380f3",
      },
      {
        headers: {
          'X-Api-Key': `${"2564e441a52546ef8c4022e6c2660a4b"}`,
        },
      });
  
      const data = response.data;
      console.log(data)
      generateQRCode(response.data.payment_request);
    } catch (error) {
      console.log(error);
    }
  }

  const [qrData, setQRData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateQRCode = (newQRData: string) => {
    setQRData(newQRData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={createInvoice}
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
