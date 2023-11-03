import { object } from "prop-types";
import { useState } from "react";

interface Props {
	content: string;
	user: {
		name: string;
		image: string;
		pubkey: string;
	};
	created_at: number;
	hashtags: string[];
}

export default function NoteCard({
	content,
	user,
	created_at,
	hashtags,
}: Props) {

  const texto = content;

  // Encontrando os índices para cada parte dos dados
  const tituloInicio = texto.indexOf("Title:") + 7;
  const tituloFim = texto.indexOf("Image:");

  const imagemInicio = texto.indexOf("Image:") + 7;
  const imagemFim = texto.indexOf("Content:");

  const conteudoInicio = texto.indexOf("Content:") + 9;
  const conteudoFim = texto.indexOf("Wallet:");

  const walletInicio = texto.indexOf("Wallet:") + 8;
  const walletFim = texto.indexOf("Tags:");

  const tagsInicio = texto.indexOf("Tags:") + 6;
  const tagsFim = texto.length;

    // Extraindo as substrings com base nos índices encontrados
    const title = texto.substring(tituloInicio, tituloFim).trim();
    const image = texto.substring(imagemInicio, imagemFim).trim();
    const conteudo = texto.substring(conteudoInicio, conteudoFim).trim();
    const wallet = texto.substring(walletInicio, walletFim).trim();
    const tags = texto.substring(tagsInicio, tagsFim).trim();

    console.log("Title:", title);
    console.log("Image:", image);
    console.log("Content:", conteudo);
    console.log("Wallet:", wallet);
    console.log("Tags:", tags);
    if(title && image && conteudo && wallet && tags && tituloInicio >= 7 && imagemInicio >= 7 && conteudoInicio >= 9 && walletInicio >= 8 && tagsInicio >= 6 ) {
      return (
      
        <div className="max-w-xl rounded p-16 border border-gray-600 bg-gray-700 flex flex-col gap-16 break-words">
          <div className="flex gap-12 items-center overflow-hidden">
            <img
              src={user.image}
              alt="note"
              className="rounded-full w-32 aspect-square bg-gray-100"
            />
            <div>
              <a
                href={`https://nostr.guru/p/${user.pubkey}`}
                className="text-body3 text-white overflow-hidden text-ellipsis"
                target="_blank"
                rel="noreferrer"
              >
                {user.name}
              </a>
              <p className="text-body5 text-gray-400">
                {new Date(created_at * 1000).toISOString().split("T")[0]}
              </p>
            </div>
          </div>
          <h1>{title}</h1>

          <img src={image} alt="F dmss" />

          <p>{conteudo}</p>

          <p>{wallet}</p>

          <ul className="flex flex-wrap gap-12">
            {hashtags
              .filter((t) => hashtags.indexOf(t) === hashtags.lastIndexOf(t))
              .map((hashtag) => (
                <li
                  key={hashtag}
                  className="bg-gray-300 text-body5 text-gray-900 font-medium rounded-24 px-12 py-4"
                >
                  #{hashtag}
                </li>
              ))}
          </ul>
        </div>
      );
    } else {
      return (
          <div className="max-w-xl rounded p-16 border border-gray-600 bg-gray-700 flex flex-col gap-16 break-words">
            <div className="flex gap-12 items-center overflow-hidden">
              <img
                src={user.image}
                alt="note"
                className="rounded-full w-32 aspect-square bg-gray-100"
              />
              <div>
                <a
                  href={`https://nostr.guru/p/${user.pubkey}`}
                  className="text-body3 text-white overflow-hidden text-ellipsis"
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.name}
                </a>
                <p className="text-body5 text-gray-400">
                  {new Date(created_at * 1000).toISOString().split("T")[0]}
                </p>
              </div>
            </div>
            {content}
            <ul className="flex flex-wrap gap-12">
              {hashtags
                .filter((t) => hashtags.indexOf(t) === hashtags.lastIndexOf(t))
                .map((hashtag) => (
                  <li
                    key={hashtag}
                    className="bg-gray-300 text-body5 text-gray-900 font-medium rounded-24 px-12 py-4"
                  >
                    #{hashtag}
                  </li>
                ))}
            </ul>
          </div>
        );
	}
}
