import axios from "axios";
import { chart } from "../../api/api";
import { useEffect, useState } from "react";
import styles from "./DetailChart.module.css";
import championList from "../../utils/champion";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export default function DetailChart({ id, championName, mode }) {
  const clist = championList();
  const [selectedchampion, setSelectedchampion] = useState([]); //선택한 챔피언(한국어)
  const [bools, setBools] = useState("");
  const [customColor, setCustomColor] = useState([
    "rgb(255,132,132)",
    "rgb(132,132,255)",
    "rgb(132,255,132)",
    "rgb(255, 255, 132)",
    "rgb(255,132,255)",
    "rgb(132,255,255)",
  ]);
  const [customColorTranslucent, setCustomColorTranslucent] = useState([
    "rgba(255,132,132,0.2",
    "rgba(132,132,255,0.2)",
    "rgba(132,255,132,0.2)",
    "rgba(255, 255, 132, 0.2)",
    "rgba(255,132,255,0.2)",
    "rgba(132,255,255,0.2)",
  ]);
  const [data, setData] = useState([]);

  const [dataSet, setDataSet] = useState([
    {
      label: championName,
      data: [65, 59, 5, 81, 56, 55],
      fill: true,
      backgroundColor: customColorTranslucent[0],
      borderColor: customColor[0],
      pointBackgroundColor: customColor[0],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: customColor[0],
    },
  ]);
  
  const [temp, setTemp] = useState([
    [40, 43, 53, 43, 22, 11],
    [34, 54, 21, 33, 49, 12],
    [90, 17, 39, 80, 21, 33],
    [31, 60, 52, 13, 47, 23],
    [31, 11, 23, 43, 54, 65],
  ]);

  useEffect(() => {
    const champPoint = clist.findIndex((i)=>i.en === id);
    const champKey = clist[champPoint].key;
    axios({
      method: "get",
      url: chart.getChampionByName()+champKey,
    })
    .then((res) => {
      setData([res.data.winrate, res.data.pickrate, res.data.banrate, res.data.dpm, res.data.solokill, res.data.cctime])
      setDataSet((dataSet) => {
        const newDataSet = [...dataSet];
        newDataSet.push({
          label: championName,
          data: [res.data.winrate, res.data.pickrate, res.data.banrate, res.data.dpm, res.data.solokill, res.data.cctime],
          fill: true,
          backgroundColor:
            customColorTranslucent[0],
          borderColor:
            customColor[0],
          pointBackgroundColor:
            customColor[0],
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor:
            customColor[0],
        });
        return newDataSet;
      });

      if (bools) {
        const ctx = document.getElementById("chart");
        const ctxx = document.getElementById("myChart");
        ctx.removeChild(ctxx);
  
        const canv = document.createElement("canvas");
        canv.id = "myChart";
        canv.className = styles.canvas;
        ctx.appendChild(canv);
      }
  
      if (mode === "dark") {
        const ctx = document.getElementById("myChart").getContext("2d");
        let config = {
          type: "radar",
          data: {
            labels: [
              "승률",
              "픽률",
              "밴률",
              "DPM",
              "KDA((Kill+Assist)/Death)",
              "CC기 총 시간",
            ],
            datasets: {
              label: championName,
              data: [res.data.winrate, res.data.pickrate, res.data.banrate, res.data.dpm, res.data.solokill, res.data.cctime],
              fill: true,
              backgroundColor:
                customColorTranslucent[0],
              borderColor:
                customColor[0],
              pointBackgroundColor:
                customColor[0],
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor:
                customColor[0],
            },
          },
          options: {
            responsive: true,
            scales: {
              radar: {
                angleLines: {
                  color: "white",
                },
                grid: {
                  color: "white",
                },
                pointLabels: {
                  color: "white",
                },
                ticks: {
                  color: "white",
                  backdropColor: "black",
                },
              },
            },
            plugins: {
              title: {
                display: true,
                text: "챔피언 비교",
              },
            },
          },
        };
        const myChart = new Chart(ctx, config);
  
      } else if (mode === "light") {
        const ctx = document.getElementById("myChart").getContext("2d");
        let config = {
          type: "radar",
          data: {
            labels: [
              "승률",
              "픽률",
              "밴률",
              "DPM",
              "KDA((Kill+Assist)/Death)",
              "CC기 총 시간",
            ],
            datasets: {
              label: championName,
              data: [res.data.winrate, res.data.pickrate, res.data.banrate, res.data.dpm, res.data.solokill, res.data.cctime],
              fill: true,
              backgroundColor:
                customColorTranslucent[0],
              borderColor:
                customColor[0],
              pointBackgroundColor:
                customColor[0],
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor:
                customColor[0],
            },
          },
          options: {
            responsive: true,
            scales: {
              radar: {
                angleLines: {
                  color: "black",
                },
                grid: {
                  color: "black",
                },
                pointLabels: {
                  color: "black",
                },
                ticks: {
                  color: "black",
                  backdropColor: "white",
                },
              },
            },
            plugins: {
              title: {
                display: true,
                text: "챔피언 비교",
              },
            },
          },
        };
        const myChart = new Chart(ctx, config);
      }
  
      setBools(true);
    })
    .catch((e) => {}); //axios 끝

    if (bools) {
      const ctx = document.getElementById("chart");
      const ctxx = document.getElementById("myChart");
      ctx.removeChild(ctxx);

      const canv = document.createElement("canvas");
      canv.id = "myChart";
      canv.className = styles.canvas;
      ctx.appendChild(canv);
    }

    if (mode === "dark") {
      const ctx = document.getElementById("myChart").getContext("2d");
      let config = {
        type: "radar",
        data: {
          labels: [
            "승률",
            "픽률",
            "밴률",
            "DPM",
            "KDA((Kill+Assist)/Death)",
            "CC기 총 시간",
          ],
          datasets: dataSet,
        },
        options: {
          responsive: true,
          scales: {
            radar: {
              angleLines: {
                color: "white",
              },
              grid: {
                color: "white",
              },
              pointLabels: {
                color: "white",
              },
              ticks: {
                color: "white",
                backdropColor: "black",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "챔피언 비교",
            },
          },
        },
      };
      const myChart = new Chart(ctx, config);

    } else if (mode === "light") {
      const ctx = document.getElementById("myChart").getContext("2d");
      let config = {
        type: "radar",
        data: {
          labels: [
            "승률",
            "픽률",
            "밴률",
            "DPM",
            "KDA((Kill+Assist)/Death)",
            "CC기 총 시간",
          ],
          datasets: dataSet,
        },
        options: {
          responsive: true,
          scales: {
            radar: {
              angleLines: {
                color: "black",
              },
              grid: {
                color: "black",
              },
              pointLabels: {
                color: "black",
              },
              ticks: {
                color: "black",
                backdropColor: "white",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "챔피언 비교",
            },
          },
        },
      };
      const myChart = new Chart(ctx, config);
    }
    setBools(true);
  }, []);

  useEffect(() => {
    if (bools && mode === "dark") {
      const ctx = document.getElementById("chart");
      const ctxx = document.getElementById("myChart");
      ctx.removeChild(ctxx);

      const canv = document.createElement("canvas");
      canv.id = "myChart";
      canv.className = styles.canvas;
      ctx.appendChild(canv);

      const newCtx = document.getElementById("myChart").getContext("2d");
      const config = {
        type: "radar",
        data: {
          labels: [
            "승률",
            "픽률",
            "밴률",
            "DPM",
            "KDA((Kill+Assist)/Death)",
            "CC기 총 시간",
          ],
          datasets: dataSet,
        },
        options: {
          responsive: true,
          scales: {
            radar: {
              angleLines: {
                color: "white",
              },
              grid: {
                color: "white",
              },
              pointLabels: {
                color: "white",
              },
              ticks: {
                color: "white",
                backdropColor: "black",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "챔피언 비교",
            },
          },
        },
      };

      const myChart = new Chart(newCtx, config);
    } else if (bools && mode === "light") {
      const ctx = document.getElementById("chart");
      const ctxx = document.getElementById("myChart");
      ctx.removeChild(ctxx);

      const canv = document.createElement("canvas");
      canv.id = "myChart";
      canv.className = styles.canvas;
      ctx.appendChild(canv);

      const newCtx = document.getElementById("myChart").getContext("2d");
      const config = {
        type: "radar",
        data: {
          labels: [
            "승률",
            "픽률",
            "밴률",
            "DPM",
            "KDA((Kill+Assist)/Death)",
            "CC기 총 시간",
          ],
          datasets: dataSet,
        },
        options: {
          responsive: true,
          scales: {
            radar: {
              angleLines: {
                color: "black",
              },
              grid: {
                color: "black",
              },
              pointLabels: {
                color: "black",
              },
              ticks: {
                color: "black",
                backdropColor: "white",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "챔피언 비교",
            },
          },
        },
      };

      const myChart = new Chart(newCtx, config);
    }
    setBools(true);
  }, [selectedchampion]);

  useEffect(() => {
    if (bools && mode === "dark") {
      const ctx = document.getElementById("chart");
      const ctxx = document.getElementById("myChart");
      ctx.removeChild(ctxx);

      const canv = document.createElement("canvas");
      canv.id = "myChart";
      canv.className = styles.canvas;
      ctx.appendChild(canv);

      const newCtx = document.getElementById("myChart").getContext("2d");
      const config = {
        type: "radar",
        data: {
          labels: [
            "승률",
            "픽률",
            "밴률",
            "DPM",
            "KDA((Kill+Assist)/Death)",
            "CC기 총 시간",
          ],
          datasets: dataSet,
        },
        options: {
          responsive: true,
          scales: {
            radar: {
              angleLines: {
                color: "white",
              },
              grid: {
                color: "white",
              },
              pointLabels: {
                color: "white",
              },
              ticks: {
                color: "white",
                backdropColor: "black",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "챔피언 비교",
            },
          },
        },
      };

      const myChart = new Chart(newCtx, config);
    } else if (bools && mode === "light") {
      const ctx = document.getElementById("chart");
      const ctxx = document.getElementById("myChart");
      ctx.removeChild(ctxx);

      const canv = document.createElement("canvas");
      canv.id = "myChart";
      canv.className = styles.canvas;
      ctx.appendChild(canv);

      const newCtx = document.getElementById("myChart").getContext("2d");
      const config = {
        type: "radar",
        data: {
          labels: [
            "승률",
            "픽률",
            "밴률",
            "DPM",
            "KDA((Kill+Assist)/Death)",
            "CC기 총 시간",
          ],
          datasets: dataSet,
        },
        options: {
          responsive: true,
          scales: {
            radar: {
              angleLines: {
                color: "black",
              },
              grid: {
                color: "black",
              },
              pointLabels: {
                color: "black",
              },
              ticks: {
                color: "black",
                backdropColor: "white",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "챔피언 비교",
            },
          },
        },
      };

      const myChart = new Chart(newCtx, config);
    }
    setBools(true);
  }, [mode]);

  return (
    <>
      <div className={styles.component}>
        <div
          className={styles.chart}
          id="chart"
          style={{ position: "relative", height: "93%", width: "35%" }}
        >
          <canvas className={styles.canvas} id="myChart"></canvas>
        </div>

        <ul className={styles.ul}>
          {clist.map((item, idx) => {
            if (id !== item.en) {
              return (
                <div key={idx}>
                  <li className={styles.li}>
                    <img
                      src={`/champion/tiles/${item.en}_0.jpg`}
                      id={item.ko}
                      alt={item.en}
                      index={item.index}
                      className={styles.img}
                      onClick={() => {
                        setSelectedchampion((selectedchampion) => {
                          const newSelectedChampion = [...selectedchampion];
                          const champNum = newSelectedChampion.findIndex(
                            (i) => i === item.ko
                          );
                          if (
                            champNum === -1 &&
                            newSelectedChampion.length < 5
                          ) {
                            newSelectedChampion.push(item.ko);
                            setDataSet((dataSet) => {
                              const newDataSet = [...dataSet];
                              newDataSet.push({
                                label: item.ko,
                                data: temp[newSelectedChampion.length - 1],
                                fill: true,
                                backgroundColor:
                                  customColorTranslucent[
                                    newSelectedChampion.length
                                  ],
                                borderColor:
                                  customColor[newSelectedChampion.length],
                                pointBackgroundColor:
                                  customColor[newSelectedChampion.length],
                                pointBorderColor: "#fff",
                                pointHoverBackgroundColor: "#fff",
                                pointHoverBorderColor:
                                  customColor[newSelectedChampion.length],
                              });
                              return newDataSet;
                            });
                          } else if (champNum !== -1) {
                            newSelectedChampion.splice(champNum, 1);
                            setDataSet((dataSet) => {
                              const newDataSet = [...dataSet];
                              const newChampName = newDataSet.findIndex(
                                (i) => i.label === item.ko
                              );
                              newDataSet.splice(newChampName, 1);
                              setCustomColor((customColor) => {
                                const newCustomColor = [...customColor];
                                const tempColor = newCustomColor[newChampName];
                                newCustomColor.splice(newChampName, 1);
                                newCustomColor.push(tempColor);
                                return newCustomColor;
                              });
                              setCustomColorTranslucent(
                                (customColorTranslucent) => {
                                  const newCustomColorTranslucent = [
                                    ...customColorTranslucent,
                                  ];
                                  const tempColor =
                                    newCustomColorTranslucent[newChampName];
                                  newCustomColorTranslucent.splice(
                                    newChampName,
                                    1
                                  );
                                  newCustomColorTranslucent.push(tempColor);
                                  return newCustomColorTranslucent;
                                }
                              );
                              setTemp((temp) => {
                                const newTemp = [...temp];
                                const tempdata = newTemp[newChampName - 1];
                                newTemp.splice(newChampName - 1, 1);
                                newTemp.push(tempdata);
                                return newTemp;
                              });

                              return newDataSet;
                            });
                          } else {
                            alert("최대 5개까지 비교 가능합니다.");
                          }
                          return newSelectedChampion;
                        });
                      }}
                      style={{
                        filter:
                          selectedchampion.indexOf(item.ko) === -1
                            ? "saturate(1)"
                            : "saturate(0)",
                      }}
                    ></img>
                    <span className={styles.name}>{item.ko}</span>
                  </li>
                </div>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}
