import { Link } from "react-router-dom";

import home from "../../assets/img/home.svg";
import fileSignature from "../../assets/img/file-signature.svg";
import fileText from "../../assets/img/file-text.svg";
import wallet from "../../assets/img/wallet.svg";
import profile from "../../assets/img/user.svg";

export default function Navbar() {
  return (
    <div>
      <nav className="w-screen h-20 flex items-center">
        <div className="w- flex items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-4">
              <h1 className="font-bold font-space text-[#F6911D] text-[50px]">
                UnJorn
              </h1>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-8">
            <ul className="flex font-normal font-inter text-base text-black gap-8">
              <li className="flex items-center">
                <img
                  src={home}
                  alt="Logo pegasus"
                  className="w-10 h-10 ml-4 mr-5"
                />
                <Link to="/" className="text-[20px]">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <img
                  src={profile}
                  alt="Logo pegasus"
                  className="w-10 h-10 ml-4 mr-5"
                />
                <Link to="/profile" className="text-[20px]">
                  Profile
                </Link>
              </li>
              <li className="flex items-center">
                <img
                  src={fileSignature}
                  alt="Logo pegasus"
                  className="w-10 h-10 ml-4 mr-5"
                />
                <Link to="/posts" className="text-[20px]">
                  Posts
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex
          ">
            <div className="flex items-center">
              <button className="bg-[#F6911D] w-[93px] h-[40px] rounded-xl   flex items-center justify-center">
                <img
                  src={fileSignature}
                  alt="Logo pegasus"
                  className="w-6 h-6"
                />
              </button>
            </div>
            <div className="flex items-center">
              <img
                src={wallet}
                alt="Logo pegasus"
                className="w-10 h-10 ml-10"
              />
              <button className="bg-[#F6911D] w-[200px] h-[40px] rounded-xl  flex items-center justify-center">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
