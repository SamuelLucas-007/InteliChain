import { Link } from "react-router-dom";
import home from "../../assets/img/home.svg";
import fileSignature from "../../assets/img/file-signature.svg";
import fileText from "../../assets/img/file-text.svg";
import wallet from "../../assets/img/wallet.svg";
import profile from "../../assets/img/user.svg";
import ButtonBitcoin from "../buttonBitcoin/ButtonBitcoin";
import Viewer from "@/pages/Viewer";

export default function Navbar() {
  
  const viewerStyle = {
    fontSize: '24px',
    marginRight: '20px'
  };
  return (
    <nav className="w-full py-14 h-20 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-4">
          <h1 className="font-extrabold font-inter text-[#F6911D] text-[40px] -translate-x-8">
            UnJorn
          </h1>
        </Link>
        <div style={viewerStyle}>
          <Viewer />
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 -translate-x-28">
        <ul className="flex font-normal font-inter text-base text-black gap-8">
          <li className="flex items-center">
            <img src={home} alt="Logo pegasus" className="w-8 h-10 ml-4 mr-5" />
            <Link to="/" className="text-[15px] font-inter font-bold">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <img src={profile} alt="Logo pegasus" className="w-8 h-10 ml-4 mr-5" />
            <Link to="/profile" className="text-[15px] font-inter font-bold">
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5 translate-x-10">
        <div className="flex items-center">
          <Link to="/create" className="bg-[#F6911D] w-[93px] h-[40px] rounded-3xl flex items-center justify-center">
            <img src={fileSignature} alt="Logo pegasus" className="w-8 h-6" />
          </Link>
          <ButtonBitcoin />
        </div>
      </div>
    </nav>
  );
}
