import React from "react"
import { privacyPolicy } from "@/lib/constData"
import ReactMarkdown from "react-markdown"
import style from "./privacypolicy.module.css"

type Props = {}

const PrivacyPolicy = (props: Props) => {
  return (
    <section className={style.container}>
      {privacyPolicy?.policy?.map((item) => {
        return (
          <div key={item.id} className={style.terms}>
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

export default PrivacyPolicy
