import Header from "./components/Header";
import { Post } from "./components/Post";
import Sidebar from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars2.githubusercontent.com/u/2254731?s=460&v=4",
      name: "Julio Alcantara",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-08-29 09:01:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https:github.com/elberrd.png",
      name: "Elber Domingos",
      role: "Founder & CEO",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "É muito bom estar testando novas skills. Realmente amo o que faço e quero ajudar mais pessoas a atingirem seu potencial 🚀",
      },
      { type: "link", content: "elber.domingos/CEO" },
    ],
    publishedAt: new Date("2022-08-27 09:01:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
}
