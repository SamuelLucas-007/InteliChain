interface RankingProps {
  data: { name: string; chavePublica: string; image: string }[];
}

export default function Ranking({ data }: RankingProps) {
  return (
    <div className="flex w-80 h-72 bg-[#F6F5F5] flex-col justify-start items-center rounded-md">
      <h1 className="text-black text-center font-bold text-3xl mb-4 mt-4">Top view</h1>
      <ul className="text-black text-center text-xl">
        {data.map((item, index) => (
          <li className="mb-4 flex items-center" key={index}>
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-2">
              <img src={item.image} alt={item.name} className="w-full h-full rounded-full" />
            </div> {/* Imagem circular */}
            <div className="ml-4"> 
              <p className="text-sm font-bold">{item.name}</p>
              <p className="text-sm">{item.chavePublica}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
