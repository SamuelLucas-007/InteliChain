import { Link } from "react-router-dom";
import bitcoin from "../assets/img/bitcoin.png";
import voltar from "../assets/img/reply.svg";
import inteliblockchain from "../assets/img/inteliblockchain.png";
import vector from "../assets/img/Vector.svg";
import DonationButton from "@/components/donationButton/DonationButton";

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export default function NewsPage() {
  const [message, setMessage] = useState("");

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Aqui você pode adicionar a lógica para enviar a mensagem
    console.log("Mensagem enviada:", message);
  };
  const hashData =
    "lnbc10n1pj5gwqtsp56vuxm6cp0e4fuadcxy0j7eqasm7w8awzzgt2c9d9x2mzqpujjusqpp5lxluvkn0jccdmmr9ajuy5mj9sshw7zuhajf3tn09j0tz4fwvcwnsdq2f38xy6t5wvxqzjccqpjrzjqgu2hps6htyza7vu3j6cvuerraw564rnfc2clphgjyl2d49qcrmgzrzlgqqq9lcqqyqqqqlgqqqqqqgq2q9qxpqysgqvkustsvr9p6yct265my42y4gqrnrl6j2spapkphldlg0f84ccew4wulh22u32xxwfqzz4qellpdtcq5aau5d2u97plwv7a9hn5v4e2sqv8jtp4";

  return (
    <div className="flex">
      <div className="h-[1600px] border-[#EEEEEE] border rounded-lg flex flex-col items-center ">
        <div className="flex  justify-between w-full">
          <Link to="/">
            <img src={voltar} className="m-4" />
          </Link>
          <div className="flex flex-col items-center">
            <p className="text-[20px] font-inter translate-y-3 -translate-x-7">
              November 3
            </p>
            <div className="translate-y-6 -translate-x-7">
              <DonationButton data={hashData} />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between w-full">
          <div className="flex items-center translate-x-16 -translate-y-6">
            <img
              src={inteliblockchain}
              className="w-[60px] h-[60px] rounded-full mr-2"
            />
            <p className="text-[20px] font-inter font-bold translate-x-6">
              The Splanning<span className="text-[17px] mr-8"></span>
            </p>
            <p className="text-[15px] font-inter mr-8 translate-x-4">npub1..khlak</p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-[28px] font-inter font-bold"> The Title of the New Notice</h1>
          <img className="translate-y-8 w-[600px] h-[350px] " src={bitcoin} />
        </div>
        <div className="w-3/4 flex justify-center items-center translate-y-14">
          <p className="flex text-justify font-inter">
            istique, ante eget bibendum eleifend,
            felis libero suscipit libero, nec lacinia urna turpis a sapien.
            Vestibulum cursus nulla nec eros efficitur tincidunt. Quisque
            volutpat bibendum mi, nec suscipit justo bibendum non. Nunc ac
            euismod arcu. Nullam quis neque tincidunt, cursus lectus nec,
            laoreet velit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam placerat odio nec nunc cursus, in rhoncus ligula
            faucibus. Sed tincidunt, elit eu tincidunt dictum, ligula ex luctus
            ex, in ultricies arcu tellus non libero. Sed malesuada tincidunt
            nunc, sit amet ullamcorper lorem dignissim sit amet. Vivamus
            tristique, ante eget bibendum eleifend, felis libero suscipit
            libero, nec lacinia urna turpis a sapien. Vestibulum cursus nulla
            nec eros efficitur tincidunt. Quisque volutpat bibendum mi, nec
            suscipit justo bibendum non. Nunc ac euismod arcu. Nullam quis neque
            tincidunt, cursus lectus nec, laoreet velit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nullam placerat odio nec nunc
            cursus, in rhoncus ligula faucibus. Sed tincidunt, elit eu tincidunt
            dictum, ligula ex luctus ex, in ultricies arcu tellus non libero.
            Sed malesuada tincidunt nunc, sit amet ullamcorper lorem dignissim
            sit amet. Vivamus tristique, ante eget bibendum eleifend, felis
            libero suscipit libero, nec lacinia urna turpis a sapien. Vestibulum
            cursus nulla nec eros efficitur tincidunt. Quisque volutpat bibendum
            mi, nec suscipit justo bibendum non. Nunc ac euismod arcu. Nullam
            quis neque tincidunt, cursus lectus nec, laoreet velit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam placerat odio
            nec nunc cursus, in rhoncus ligula faucibus. Sed tincidunt, elit eu
            tincidunt dictum, ligula ex luctus ex, in ultricies arcu tellus non
            libero. Sed malesuada tincidunt nunc, sit amet ullamcorper lorem
            dignissim sit amet. Vivamus tristique, ante eget bibendum eleifend,
            felis libero suscipit libero, nec lacinia urna turpis a sapien.
            Vestibulum cursus nulla nec eros efficitur tincidunt. Quisque
            volutpat bibendum mi, nec suscipit justo bibendum non. Nunc ac
            euismod arcu. Nullam quis neque tincidunt, cursus lectus nec,
            laoreet velit.
          </p>
        </div>
        <div className="translate-y-32 -translate-x-40 flex flex-col items-start">
          <label htmlFor="message" className="label font-inter font-bold text-[20px]">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            cols={50}
            className="textarea border-2 border-[#CBD5E1] rounded-lg w-[800px] h-[120px]"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <button onClick={handleSendMessage} className="translate-y-7 text-[18px] font-inter font-medium send-button text-white bg-black w-[630px] h-[55px] rounded-md  flex items-center justify-center">
            Sent for 100 Satoshis
          </button>
        </div>
      </div>
    </div>
  );
}
