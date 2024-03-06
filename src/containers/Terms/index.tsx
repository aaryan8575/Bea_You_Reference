import { termsandcondition } from "@/lib/constData"
import ReactMarkdown from "react-markdown"
import style from "./terms.module.css"

type Props = {}

const Terms = (props: Props) => {
  return (
    <section className={style.container}>
      {termsandcondition?.terms?.map((item) => {
        return (
          <div key={item.id}>
            <p className={style.title}>{item.title}</p>
            <div className={`${style.description} prose`}>
              <ReactMarkdown>{item.description}</ReactMarkdown>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Terms
