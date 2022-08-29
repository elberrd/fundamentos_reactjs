import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maria.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Elber Domingos</strong>
              <time
                title="29 de Agosto as 09:02h"
                dateTime="2022-08-29 09:01:00"
              >
                Cerca de 1h atras
              </time>
            </div>
            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Elber, parabens!! 👏👏</p>
        </div>

        <footer>
          <button title="Aplaudir">
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
