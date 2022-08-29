import Header from "./components/Header";
import { Post } from "./components/Post";
import Sidebar from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            autor="Elber Domingos"
            content="Empresa Connectada - economize com tudo"
          />
          <Post
            autor="Rafaela Ritter"
            content="Contabilidade e Quickbooks - domine"
          />
        </main>
      </div>
    </div>
  );
}
