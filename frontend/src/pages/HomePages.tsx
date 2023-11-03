import Ranking from "@/components/ranking/Ranking";

const data = [
    {
      name: "MaceloMaia?",
      chavePublica: "bc1p2...72lnnk",
      image: "../../",
    },
    {
      name: "OutroMaceloMaia",
      chavePublica: "bc1p2...72lnnk",
      image: "",
    },
    {
      name: "OMaceloMaia",
      chavePublica: "bc1p2...72lnnk",
      image: "",
    },
  ];

export default function HomePage() {
  return (
    <div>
      <Ranking data={data} />
    </div>
  );
}
