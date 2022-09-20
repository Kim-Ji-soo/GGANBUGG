import styles from "./Layout.module.css";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Search from "../search/Search";
import { classNames } from "./../../utils/classNames";
import ChooseChampion from "./../chooseChampion/CChampion";
import RecommandResultList from "../recommandResultList/RecommandResultList";
import Ranking from "../ranking/Ranking";
import ClickChooseChampion from "../clickChooseChampion/CCChampion";

/* -------------------------------------------------------------------------- */

export function BaseLayout({ setMode }) {
  return (
    <div className={styles.container}>
      <Header>
        <Navigation />
      </Header>
      <Main></Main>
      <Footer setMode={setMode}></Footer>
    </div>
  );
}

export function ChooseChampionLayout({ setMode }) {
  return (
    <div className={styles.container}>
      <Header>
        <Navigation />
      </Header>
      <ChooseChampion></ChooseChampion>
      <Footer setMode={setMode}></Footer>
    </div>
  );
}

export function SearchLayout({ setMode }) {
  return (
    <div className={styles.container}>
      <Header>
        <Navigation />
      </Header>
      <Search></Search>
      <Footer setMode={setMode}></Footer>
    </div>
  );
}

export function RecommandResultLayout({ setMode }) {
  return (
    <div className={styles.container}>
      <Header>
        <Navigation />
      </Header>
      <RecommandResultList></RecommandResultList>
      <Footer setMode={setMode}></Footer>
    </div>
  );
}

export function RankingLayout({ setMode }) {
  return (
    <div className={styles.container}>
      <Header>
        <Navigation />
      </Header>
      <Ranking></Ranking>
      <Footer setMode={setMode}></Footer>
    </div>
  );
}

export function DetailLayout({ setMode }) {
  return (
    <div className={styles.container}>
      <Header>
        <Navigation />
      </Header>
      <ClickChooseChampion></ClickChooseChampion>
      <Footer setMode={setMode}></Footer>
    </div>
  );
}
