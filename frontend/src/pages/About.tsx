import Layout from "@/Routes/Layout";
import github from "../assets/img/github.svg";
import questionhead from "../assets/img/questionhead.png"
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  function ChangePage(){
    navigate('/');
  }

  return (
    <div>
      <div className="px-10">
        <div className="flex flex-col w-full mt-4">
          <div className="flex flex-row items-center justify-between px-5">
            <h1 className="font-bold font-space text-[#F6911D] text-[55px] m-0">
              UnJourn
            </h1>
            <img className="w-10 h-10" src={github}></img>
          </div>
          <div className="bg-black h-3 rounded-lg mt-4"></div>
        </div>
        <div className=" px-10 flex flex-row gap-[120px]">
          <div className="mt-12">
          <h1 className="font-bold font-space text-[#F6911D] text-[65px] m-0">
            UnJourn
          </h1>
          <h2 className="font-bold text-[25px] mt-5">Welcome to the liberty news</h2>
          <p className="max-w-lg mt-6 font-semibold text-[15px] text-justify">
            UnJorn, the social network, harnesses the power of Nostr and
            Lightning Network technologies to ensure the ownership and security
            of independent journalists, enablinm to report on issues such as
            corruption, war, dictatorship, repression, and more.
          </p>
          <button onClick={ChangePage}className="bg-black px-20 py-3 rounded-3xl text-white font-bold mt-[4rem]">Read now</button>
          </div>
          <div>
            <img src={questionhead}></img>
          </div>
          
        </div>
      </div>
    </div>
  );
}
