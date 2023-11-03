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
    <div>
        <Navbar/>
        <Ranking data={data} />
        <TabsDemo/>
    </div>
  );
}
