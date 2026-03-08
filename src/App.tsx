import { useState, useEffect } from "react"
import { Vision } from "./components/Vision"
import { Goals } from "./components/Goals"
import { UserStoryMap } from "./components/UserStoryMap"
import { Epics } from "./components/Epics"
import { UserStories } from "./components/UserStories"
import { repository } from "./data/repository";

function App() {
  const [language, setLanguage] = useState<"de" | "en">(() => {
    return (localStorage.getItem("language") as "de" | "en") || "de"
  })

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        const maxAttempts = 10
        let attempts = 0

        const tryScroll = () => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          } else if (attempts < maxAttempts) {
            attempts++
            setTimeout(tryScroll, 100)
          }
        }

        tryScroll()
      }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", scrollToHash)
      return () => document.removeEventListener("DOMContentLoaded", scrollToHash)
    } else {
      scrollToHash()
    }
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        const element = document.getElementById(hash)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const translations = {
    de: {
      title: "Dokumentation",
      vision: "Vision",
      goals: "Ziele",
      userStoryMap: "User Story Map",
      epics: "Epics",
      userStories: "User Stories"
    },
    en: {
      title: "Documentation",
      vision: "Vision",
      goals: "Goals",
      userStoryMap: "User Story Map",
      epics: "Epics",
      userStories: "User Stories"
    }
  }

  const lang = translations[language]

  return (
    <div className="max-w-240 mx-auto p-8">
      <div className="flex items-center gap-4 pb-4">
        <a
          href={`https://github.com/${repository.user}/${repository.name}`}
          target="_blank"
          className="underline dark:text-white"
        >Repository</a>
        <div className="flex flex-1 justify-center">
          <h1 className="text-4xl font-bold p-8 dark:text-white">{lang.title}</h1>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setLanguage("de")}
            className={`cursor-pointer ${language === "de" ? "font-bold" : ""} underline dark:text-white`}
          >DE</button>
          <button
            onClick={() => setLanguage("en")}
            className={`cursor-pointer ${language === "en" ? "font-bold" : ""} underline dark:text-white`}
          >EN</button>
        </div>
      </div>

      <h1 className="text-2xl font-semibold pb-4 dark:text-white">{lang.vision}</h1>
      <Vision />

      <h1 className="text-2xl font-semibold pb-4 pt-8 dark:text-white">{lang.goals}</h1>
      <Goals />

      <h1 className="text-2xl font-semibold pb-4 pt-8 dark:text-white">{lang.userStoryMap}</h1>
      <UserStoryMap />

      <h1 className="text-2xl font-semibold pb-4 pt-8 dark:text-white">{lang.epics}</h1>
      <Epics language={language} />

      <h1 className="text-2xl font-semibold pb-4 pt-8 dark:text-white">{lang.userStories}</h1>
      <UserStories language={language} />
    </div>
  )
}

export default App
