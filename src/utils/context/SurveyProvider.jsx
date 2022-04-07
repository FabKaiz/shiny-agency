import { createContext, useState } from "react"

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({0: "oui"})
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}