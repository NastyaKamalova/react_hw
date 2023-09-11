import { forwardRef } from "react";
import style from "./scrollNav.module.css";

const Article = forwardRef(({ article, toNav }, ref) => {

  return (
    <article 
      id={article.id} 
      ref={(node) => {
          if (!ref.current.find(item => item.id == article.id)) {
            ref.current.push(node)
          }
        }
      }
    >
      <h3 className={style.h3}>{article.head}</h3>
      <p>{article.body}</p>
      <button onClick={() => toNav()} className={style.buttonNav}>Scroll to Nav</button>
    </article>
  )
})

export default Article;

    