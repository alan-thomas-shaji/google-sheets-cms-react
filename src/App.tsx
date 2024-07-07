import { useEffect, useState } from "react";
import { getDataFromSheet } from "./services/sheetDataService";
import { homePageDarkBg } from "./tailwindStyles";
import { ICardData } from "./interfaces/types";
import Card from "./components/Card";

function App() {

  const [sheetData, setSheetData] = useState<ICardData[]>([]);

  const fetchData = async () => { 
    const data = await getDataFromSheet();
    console.log("Response :", data);
    setSheetData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={`${homePageDarkBg}`}>
        <div className="title tomorrow-bold text-[5rem] text-faded flex justify-center">
          REACT CMS
        </div>
        <div className="content">
          <div className="cards flex flex-wrap">
            {
              sheetData?.map((dataItem: ICardData, index: number) => {
                return (
                  <Card key={index} Title={dataItem?.Title} Content={dataItem?.Content} />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App
