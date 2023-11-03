import { useState } from "react";
import { EventTemplate, Event, getEventHash, SimplePool } from "nostr-tools";
import { RELAYS } from "../App";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Props {
  pool: SimplePool;
  hashtags: string[];
  onChange: (hashtags: string[]) => void;
}

export default function  CreateNote({ pool, hashtags, onChange }: Props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [wallet, setWallet] = useState("");
  const [currentTag, setCurrentTag] = useState("");
  const [tagsLimitReached, setTagsLimitReached] = useState(false);

  function removeHashtag(hashtag: string) {
    onChange(hashtags.filter((h) => h !== hashtag));
  }

  function addTag() {
    if (currentTag.trim() !== "" && hashtags.length <= 4) {
      onChange([...hashtags, currentTag]);
      setCurrentTag("");
    } else {
      setTagsLimitReached(true);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!window.nostr) {
      alert("Nostr extension not found");
      return;
    }
    
    const newsArticle = `
      Title: ${title}
      Image: ${image}

      Content: ${content}

      Wallet: ${wallet}

      Tags: ${hashtags.join(", ")}
    `

    // Construct the event object
    const _baseEvent = {
      content: newsArticle,
      created_at: Math.round(Date.now() / 1000),
      kind: 1,
      tags: [...hashtags.map((hashtag) => ["t", hashtag])],
    } as unknown as EventTemplate;

    // Sign this event (allow the user to sign it with their private key)
    // // check if the user has a nostr extension
    try {
      const pubkey = await window.nostr.getPublicKey();

      const sig = await (await window.nostr.signEvent(_baseEvent)).sig;

      const event: Event = {
        ..._baseEvent,
        sig,
        pubkey,
        id: getEventHash({ ..._baseEvent, pubkey }),
      };

      const pubs = pool.publish(RELAYS, event);

      let clearedInput = false;

      pubs.on("ok", () => {
        if (clearedInput) return;

        clearedInput = true;
        setTitle("");
        setImage("");
        setContent("");
        setWallet("");
        onChange([]);
      });
    } catch (error) {
      console.error("ok");
    }
  }

  return (
    <div className=" pb-10">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label htmlFor="" className="text-h3 text-black font-bold text-left mb-4 pl-14 pt-6">Title</label>
          <input
              placeholder="The title of the news"
              className="w-[87%] p-4 mb-6 ml-14 rounded border-zinc-300 border-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-h3 text-black font-bold text-left mb-4 pl-14 pt-6">Image</label>
          <input
            placeholder="Example: https://img.freepik.com/vetores-gratis/fundo-de-moeda-dourada-com-bitcoin-cripo.jpeg"
            className="w-[87%] p-4 mb-6 ml-14 rounded border-zinc-300 border-2"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-h3 text-black font-bold text-left mb-4 pl-14 pt-6">Content</label>
          <textarea
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat odio nec nunc cursus, in rhoncus ligula faucibus. Sed tincidunt, elit eu tincidunt dictum, ligula ex luctus ex, in ultricies arcu tellus non libero. Sed malesuada tincidunt nunc, sit amet ullamcorper lorem dignissim sit amet. Vivamus tristique, ante eget bibendum eleifend, felis libero suscipit libero, nec lacinia urna turpis a sapien. Vestibulum cursus nulla nec eros efficitur tincidunt. Quisque volutpat bibendum mi, nec suscipit justo bibendum non. Nunc ac euismod arcu. Nullam quis neque tincidunt, cursus lectus nec, laoreet velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat odio nec nunc cursus, in rhoncus ligula faucibus. Sed tincidunt, elit eu tincidunt dictum, ligula ex luctus ex, in ultricies arcu tellus non libero. Sed malesuada tincidunt nunc, sit amet ullamcorper lorem dignissim sit amet. Vivamus tristique, ante eget bibendum eleifend, felis libero suscipit libero, nec lacinia urna turpis a sapien. Vestibulum cursus nulla nec eros efficitur tincidunt. Quisque volutpat bibendum mi, nec suscipit justo bibendum non. Nunc ac euismod arcu. Nullam quis neque tincidunt, cursus lectus nec, laoreet velit.
            "
            className="w-[87%] h-80 p-4 mb-6 ml-14 rounded border-zinc-300 border-2 text-justify"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-h3 text-black font-bold text-left mb-4 pl-14 pt-6">Wallet Address 
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>*</TooltipTrigger>
              <TooltipContent className="text-red-600">
                If you have a LNbit wallet, fill in the admin key/ if you have an alby wallet, fill in your access token
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          </label>
          <input
            placeholder="123456789abcdefghi123456789abcde / QWERTYUIOPLKJHGFDSAZXCVBNMASDFGHJKLPOIUYTREWMNBVCX"
            className="w-[87%] p-4 mb-6 ml-14 rounded border-zinc-300 border-2"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-h3 text-black font-bold text-left mb-4 pl-14 pt-6">Tags</label>
          {tagsLimitReached && (
            <p className="text-red-600">
              Maximum tag limit (5) reached. Remove a tag to add another.
            </p>
          )}
          <input
            placeholder="Example: https://img.freepik.com/vetores-gratis/fundo-de-moeda-dourada-com-bitcoin-cripo.jpeg"
            className="w-[87%] p-4 mb-6 ml-14 rounded border-zinc-300 border-2"
            value={currentTag}
            onChange={(e) => setCurrentTag(e.target.value)}
          />
          <div  className="w-full flex justify-between pl-12 pr-12">
            <div className="flex justify-between pr-12 max-w-xs">
              {hashtags.map((tag, index) => (
                <div key={index} className="bg-black min-w-fit flex justify-center items-center px-5 py-1 rounded-full font-semibold mr-2">
                  <span className="mr-1 text-white"> {tag} </span>
                  <button
                    type="button"
                    onClick={() => {
                      removeHashtag(tag);
                      setTagsLimitReached(false);
                    }}
                    className="text-white"
                  > x </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="bg-black text-white w-32 py-4 rounded-full font-bold"
              onClick={addTag}
            >
              Add Tag
            </button>
          </div>
        </div>

        <div className="flex justify-end pr-14 pt-14">
          <button className="bg-[#F6911D] px-16 py-4 rounded-full font-bold">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}