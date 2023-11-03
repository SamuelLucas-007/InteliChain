interface RankingProps {
  data: { name: string; chavePublica: string; image: string; }[];
  nameCard: string;
}

export default function Ranking({ data, nameCard }: RankingProps) {
  return (
    <div className="fixed top-0 left-0 w-60 h-50 bg-[#f9f9f9] flex flex-col justify-start items-center rounded-xl ml-4 mt-4 translate-x-[1000px] translate-y-[160px]">
      <h1 className="text-black text-center font-inter font-bold text-3xl mb-4 mt-4">{nameCard}</h1>
      <ul className="text-black text-center text-xl">
        {data.map((item, index) => (
          <li className="mb-4 flex items-center" key={index}>
            <div className="w-8 h-8 bg-gray-200 rounded-full mr-2">
              <img src={item.image} alt={item.name} className="w-full h-full rounded-full" />
            </div> {/* Imagem circular */}
            <div className="ml-4"> 
              <p className="text-[14px] font-inter font-bold">{item.name}</p>
              <p className="text-[14px] font-inter ">{item.chavePublica}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
