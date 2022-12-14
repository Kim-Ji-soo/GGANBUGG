import { useEffect, useRef, useState } from "react";
import styles from "./skillQuiz.module.css";
import championList from "../../utils/champion";
import axios from "axios";
import { skillquiz } from "../../api/api";
import { mapLinear } from "three/src/math/MathUtils";

export default function SkillQuiz({ setMode }) {
  const clist = championList();
  const [randomChampion, setRandomChampion] = useState(
    Math.floor(Math.random() * 161)
  );
  const [randomSkill, setRandomSkill] = useState(Math.floor(Math.random() * 5));
  const [value, setValue] = useState("");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [gameStart, setGameStart] = useState(false);
  const [info, setInfo] = useState("");
  const intervalId = useRef(null);
  const [ranking, setRanking] = useState([]);
  const [minScore, setMinScore] = useState(0);
  const [name, setName] = useState("");
  const [bools, setBools] = useState(false);
  const [relocation, setRelocation] = useState(false);
  useEffect(() => {
    axios({
      method: "get",
      url: skillquiz.getAll(),
    })
      .then((res) => {
        setRanking(res.data);
        if(res.data.length >= 10){
          setMinScore(res.data[res.data.length - 1].score);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (timer < 0) {
      clearInterval(intervalId.current);
      axios({
        method: "get",
        url: skillquiz.getAll(),
      })
        .then((res) => {
          setRanking(res.data);
          if(res.data.length>=10){
            setMinScore(res.data[res.data.length - 1].score);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [timer]);

  useEffect(() => {
    setValue("");
  }, [randomChampion, randomSkill]);

  useEffect(() => {
    axios({
      method: "get",
      url: skillquiz.getAll(),
    })
      .then((res) => {
        setRanking(res.data);
        if(res.data.length>=10){
          setMinScore(res.data[res.data.length - 1].score);
        }
        setRelocation(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [relocation]);
  return (
    <>
      {gameStart === false && (
        <div className={styles.container}>
          <div className={styles.quiz}>
            1????????? ????????? ????????? ?????? ???????????? ????????????!
          </div>
          <button
            className={styles.btn}
            onClick={() => {
              setGameStart(true);
              intervalId.current = setInterval(
                () => setTimer((timer) => timer - 1),
                1000
              );
            }}
          >
            ?????? ??????
          </button>
        </div>
      )}

      {gameStart === true && timer >= 0 && (
        <>
          <div className={styles.container}>
            <div className={styles.timer}>{timer}</div>
            <div className={styles.quiz}>
              ?????? ????????? ?????? ???????????? ???????????????.
            </div>
            {randomSkill === 0 ? (
              <img
                src={`/passive/${clist[randomChampion].passive}.png`}
                id={clist[randomChampion].ko}
                alt={clist[randomChampion].en}
              />
            ) : randomSkill === 1 ? (
              <img
                src={`/skill/${clist[randomChampion].Q}.png`}
                id={clist[randomChampion].ko}
                alt={clist[randomChampion].en}
              />
            ) : randomSkill === 2 ? (
              <img
                src={`/skill/${clist[randomChampion].W}.png`}
                id={clist[randomChampion].ko}
                alt={clist[randomChampion].en}
              />
            ) : randomSkill === 3 ? (
              <img
                src={`/skill/${clist[randomChampion].E}.png`}
                id={clist[randomChampion].ko}
                alt={clist[randomChampion].en}
              />
            ) : (
              <img
                src={`/skill/${clist[randomChampion].R}.png`}
                id={clist[randomChampion].ko}
                alt={clist[randomChampion].en}
              />
            )}
            <div className={styles.textandi}>
              <input
                className={styles.text}
                placeholder="????????? ??????"
                value={value}
                required={true}
                onChange={(event) => {
                  setValue(event.target.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    if (value === clist[randomChampion].ko) {
                      setInfo("???????????????!");
                      setScore((score) => score + 1);
                    } else {
                      setInfo("???????????????!");
                    }
                    setRandomChampion(() => {
                      return Math.floor(Math.random() * 161);
                    });
                    setRandomSkill(() => {
                      return Math.floor(Math.random() * 5);
                    });
                  }
                }}
              ></input>
              <i></i>
            </div>
            <button
              className={styles.btn}
              onClick={() => {
                if (value === clist[randomChampion].ko) {
                  setInfo("???????????????!");
                  setScore((score) => score + 1);
                } else {
                  setInfo("???????????????!");
                }
                setRandomChampion(() => {
                  return Math.floor(Math.random() * 161);
                });
                setRandomSkill(() => {
                  return Math.floor(Math.random() * 5);
                });
              }}
            >
              ??????
            </button>

            <div
              className={info === "???????????????!" ? styles.answer : styles.wrong}
            >
              {info}
            </div>
          </div>
        </>
      )}
      {gameStart === true && timer < 0 && (
        <div className={styles.container}>
          <div className={styles.showcount}>{score}?????? ???????????????!</div>
          <div className={styles.msg}>{score < 5 && " ?????? ???????????????!"}</div>
          <div className={styles.msg}>
            {score < 10 && score >= 5 && " ?????? ????????? ????????????."}
          </div>
          <div className={styles.msg}>
            {score < 15 && score >= 10 && " ????????? ????????? ??????????????????!"}
          </div>
          <div className={styles.msg}>
            {score >= 15 && " ?????? ??????????????? ??? ??? ????????????!"}
          </div>
          <h1 className={styles.msg}>??????</h1>
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th>??????</th>
                  <th>??????</th>
                  <th>??????</th>
                </tr>
              </thead>
              {ranking &&
                ranking.map((item, idx) => {
                  return (
                    <tbody key={idx}>
                      <tr>
                        <td>{idx + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.score}</td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
          {(score > minScore || ranking.length < 10) && !bools && (
            <>
              <input
                className={styles.name}
                placeholder="????????? ????????? ????????? ???????????????!"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <button
                className={styles.btn}
                onClick={() => {
                  axios({
                    method: "post",
                    url: skillquiz.register(),
                    data: {
                      name: name,
                      score: score,
                    },
                  })
                    .then((res) => {
                      setRanking((ranking) => {
                        if (ranking) {
                          const newRanking = [...ranking];
                          newRanking.splice(0);
                          return newRanking;
                        }
                      });
                      setRelocation(true);
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                  setBools(true);
                }}
              >
                ?????? ??????
              </button>
            </>
          )}
          <button
            className={styles.btn}
            onClick={() => {
              setGameStart(false);
              setScore(0);
              setTimer(60);
              setInfo("");
              setRandomChampion(() => {
                return Math.floor(Math.random() * 161);
              });
              setRandomSkill(() => {
                return Math.floor(Math.random() * 5);
              });
              setBools(false);
            }}
          >
            ??????????????????
          </button>
        </div>
      )}
    </>
  );
}
