import PostCard from "@/components/postcard";
import React from "react";
import ButtonBitcoin from "@/components/buttonBitcoin/ButtonBitcoin";
import Navbar from "@/components/navbar/Navbar";
import Ranking from "@/components/ranking/Ranking";
import { TabsDemo } from "@/components/sections";

const data = [
	{
		name: "MaceloMaia?",
		chavePublica: "bc1p2...72lnnk",
		image: "../assets/img/inteliblockchain.png",
	},
	{
		name: "OutroMaceloMaia",
		chavePublica: "bc1p2...72lnnk",
		image: "../assets/img/inteliblockchain.png",
	},
	{
		name: "OMaceloMaia",
		chavePublica: "bc1p2...72lnnk",
		image: "../assets/img/inteliblockchain.png",
	},
];

export default function HomePage() {
	return (
		<>
			<TabsDemo />
			<div className="fixed right-2 flex flex-col gap-1">
					<Ranking data={data} nameCard="Top View"  />
					<Ranking data={data} nameCard="Top Sats"/>
			</div>
		</>
	);
}
