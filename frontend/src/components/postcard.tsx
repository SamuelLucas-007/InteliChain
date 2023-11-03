import React, { useEffect, useState } from "react";
import bitcoin from "../assets/bitcoin.svg";
import intelib from "../assets/intelib.svg";
import comment from "../assets/message-circle.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import zap from "../assets/zap.svg";
import eye from "../assets/eye.svg";
import { getPostsRelays } from "../services/filter_news";
import "./postcard.css";
import { Link } from "react-router-dom";

interface PostProps {
  post: {
    title: string;
    npub: string;
    date: string;
    content: string;
    // ... outras propriedades do post ...
  };
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  //   const [posts, setPosts] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //         const data = await getPostsRelays();
  //         setPosts(data);
  //     };

  //     fetchData();
  // }, []);

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
      <div>
        <p className="font-bold text-2xl">My title of post</p>
        <div className="flex justify-center align-center">
          <img className="mt-4" src={bitcoin} width="350" height="350" />
        </div>
        <p className="mt-4">{post.content}</p>
      </div>
      <div className="flex justify-between mt-10">
        <div className="flex align-center gap-7">
          <img src={comment} width="35" height="35"></img>
          <img src={like} width="30" height="30"></img>
          <img src={dislike} width="30" height="30"></img>
        </div>
        <div className="flex gap-10">
          <Link to="/create" className="bg-[#F6911D] w-[93px] h-[40px] rounded-3xl flex items-center justify-center">
            <img src={eye} alt="Logo pegasus" className="w-8 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const PostList = () => {
  const [posts, setPosts] = useState<PostProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostsRelays();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts ? (
        posts.map((post: any, index: any) => (
          <PostCard key={index} post={post} />
        ))
      ) : (
        <p>Carregando posts...</p>
      )}
    </div>
  );
};

export default PostList;
