import { useRouter } from "next/router";
import styles from "./Detailchampion.module.css";
import championList from "../../utils/champion";

import DetailMap from "../detailMap/DetailMap";
import DetailChart from "../detailChart/DetailChart";
import { useEffect, useState } from "react";
import Wordcloud from "../wordcloud/Wordcloud";

export default function DetailChampion({ mode }) {
  const router = useRouter();
  const { id } = router.query;
  const clist = championList();

  const [selectdata, Setselectdata] = useState("");
  const [championName, setChampionName] = useState("");
  useEffect(() => {
    const championKo = clist.findIndex((i) => i.en === id);
    if (clist[championKo]) {
      setChampionName(clist[championKo].ko);
    }
  });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          {id ? (
            <div className={styles.titleimg}>
              <p className={styles.champname}>{championName}</p>
              <img src={`/champion/tiles/${id}_0.jpg`}></img>
            </div>
          ) : null}
          <div className={styles.btns}>
            <button onClick={() => Setselectdata("map")} style={{ color: selectdata && selectdata == "map" ? "var(--logo)" : "var(--text)" }}>라인별</button>
            <button onClick={() => Setselectdata("chart")} style={{ color: selectdata && selectdata == "chart" ? "var(--logo)" : "var(--text)" }}>비교그래프</button>
            <button onClick={() => Setselectdata("cloud")} style={{ color: selectdata && selectdata == "cloud" ? "var(--logo)" : "var(--text)" }}>단어구름</button>
          </div>
        </div>
        <div className={styles.contentContainer}>
          {selectdata && selectdata === "map" ? (
            <DetailMap id={id} mode={mode} />
          ) : null}
          {selectdata && selectdata === "chart" ? (
            <DetailChart id={id} championName={championName} mode={mode} />
          ) : null}
          {selectdata && selectdata === "cloud" ? <Wordcloud id={id} /> : null}
          {!selectdata && <h2>세개 중 하나를 선택하세요</h2>}
        </div>
      </div>
    </>
  );
}
