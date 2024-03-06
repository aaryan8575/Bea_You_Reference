import React from "react"
import ReactMarkdown from "react-markdown"
import { aboutusDescription } from "@/lib/constData"
import style from "./aboutusdescription.module.css"

type Props = {}

const AboutUsDescription = (props: Props) => {
  return (
    <section>
      <h2 className={style.title}>{aboutusDescription.title}</h2>
      <div className={`${style.description} prose`}>
        <ReactMarkdown>{aboutusDescription.description}</ReactMarkdown>
      </div>
    </section>
  )
}

export default AboutUsDescription
