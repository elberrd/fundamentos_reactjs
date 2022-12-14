import Header from "./components/Header";
import { Post } from "./components/Post";
import Sidebar from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/508504?v=4",
      name: "Julio Alcantara",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa ๐" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: Date.now(),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/8150723?v=4",
      name: "Elber Domingos",
      role: "Founder & CEO",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa ๐" },
      {
        type: "paragraph",
        content:
          "ร muito bom estar testando novas skills. Realmente amo o que faรงo e quero ajudar mais pessoas a atingirem seu potencial ๐",
      },
      { type: "link", content: "elber.domingos/CEO" },
    ],
    publishedAt: Date.now(),
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
