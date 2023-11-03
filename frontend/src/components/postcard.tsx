import React from "react";
import bitcoin from "../assets/bitcoin.svg";
import intelib from "../assets/intelib.svg";
import comment from "../assets/message-circle.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import zap from "../assets/zap.svg";
import eye from "../assets/eye.svg";
import "./postcard.css"

const PostCard: React.FC = () => {
  return (
    <div className="bg-white border-2 border-solid border-gray-200 shadow p-10 rounded w">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={intelib} />
          <h3 className="font-bold">The Splanning</h3>
          <p>npub1...khlak</p>
        </div>
        <div>
          <p className="font-bold">November 2</p>
        </div>
      </div>
      <div >
        <p className="font-bold text-2xl">My title of post</p>
        <div className="flex justify-center align-center">
          <img className="mt-4" src={bitcoin} width="350" height="350"/>
        </div>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          placerat odio nec nunc cursus, i n rhoncus ligula faucibus. Sed
          tincidunt, elit eu tincidunt dictum, ligula ex luctus ex, in ultricies
          arcutellus non libero. Sed malesuada tincidunt nunc, sit amet
          ullamcorper lorem dignissim sit amet. Vivamus tristique, ante eget
          bibendum eleifend, felis libero suscipit libero, nec lacinia
          urna.......
        </p>
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex align-center gap-7">
          <img src={comment} width="35" height="35"></img>
          <img src={like} width="30" height="30"></img>
          <img src={dislike} width="30" height="30"></img>
        </div>
        <div className="flex gap-10">
          <button className="border-radius-post-buttons pt-3 pb-3 pl-9 pr-9 orange-chain">
            <img src={zap} width="25" height="25"/>
          </button>
          <button className="border-radius-post-buttons pt-3 pb-3 pl-9 pr-9 orange-chain" >
            <img src={eye} width="25" height="25" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
