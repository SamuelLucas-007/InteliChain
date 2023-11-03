import QRCode from "qrcode.react";
import vec from "../../assets/img/Vector.svg";
import {useState } from "react";

export default function DonationButton({ data }: {data: string}){
    const [qrData, setQRData] = useState(data);
  
    const generateQRCode = () => {
      // Aqui você pode implementar a lógica para gerar um novo QR Code com base no seu hash de dados
      // Vou usar um exemplo simples aqui para demonstração
      const newQRData = 'Novo hash de dados'; // Substitua isso pela lógica real de geração
      setQRData(newQRData);
    };


    return (
        <div>
            <button onClick={generateQRCode} className="bg-[#F6911D] w-[130px] h-[60px] rounded-full   flex items-center justify-center">
                <img src={vec} alt="Logo pegasus" className="w-6 h-6" />

            </button>
        </div>

    )
}