import { Link } from "react-router-dom";

import home from "../../assets/img/home.svg";
import fileSignature from "../../assets/img/file-signature.svg";
import fileText from "../../assets/img/file-text.svg";
import wallet from "../../assets/img/wallet.svg";
import profile from "../../assets/img/user.svg";

export default function Navbar() {
	return (
		<nav className="w-full py-14 h-20 flex items-center justify-between">
			<div className="flex items-center">
				<Link to="/" className="flex items-center gap-4">
					<h1 className="font-extrabold font-inter text-[#F6911D] text-[40px] -translate-x-8">
						UnJorn
					</h1>
				</Link>
			</div>
			<div className="flex justify-center items-center gap-8 -translate-x-14">
				<ul className="flex font-normal font-inter text-base text-black gap-8">
					<li className="flex items-center">
						<img src={home} alt="Logo pegasus" className="w-8 h-10 ml-4 mr-5" />
						<Link to="/" className="text-[15px] font-inter font-bold">
							Home
						</Link>
					</li>
					<li className="flex items-center">
						<img
							src={profile}
							alt="Logo pegasus"
							className="w-8 h-10 ml-4 mr-5"
						/>
						<Link to="/profile" className="text-[15px] font-inter font-bold">
							Profile
						</Link>
					</li>
					<li className="flex items-center">
						<img
							src={fileSignature}
							alt="Logo pegasus"
							className="w-8 h-10 ml-4 mr-5"
						/>
						<Link to="/posts" className=" text-[15px] font-inter font-bold">
							Posts
						</Link>
					</li>
				</ul>
			</div>
			<div className="flex items-center justify-between gap-5 translate-x-10">
					<button className="bg-[#F6911D] w-[70px] h-[40px] rounded-3xl flex items-center justify-center">
						<img src={fileSignature} alt="Logo pegasus" className="w-8 h-6" />
					</button>
					<img src={wallet} alt="Logo pegasus" className="w-8 h-10 flex justify-center" />
					<button className="bg-[#F6911D] w-[200px] h-[40px] rounded-xl  flex items-center justify-center">
						Connect Wallet
					</button>
			</div>
		</nav>
	);
}
