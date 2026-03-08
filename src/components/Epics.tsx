import { storyMap } from "../data/storyMap";

interface Properties {
  language: "de" | "en"
}

export function Epics({language}: Properties) {
  const translations = {
    de: {
      desc: "Beschreibung"
    },
    en: {
      desc: "Description"
    }
  }

  const lang = translations[language]

  const epics = storyMap.flatMap((a) => a.epics)

  return (
    <>
      {epics.map((epic) => (
        <>
          {epic.description && (
            <div id={`epic-${epic.id}`} className="w-fit min-w-50 max-w-200 border-2 p-1 mb-4 border-gray-300 bg-gray-200 dark:text-white dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">{epic.title}</h3>
              <p className="pt-4 font-medium">{lang.desc}:</p>
              <p>{epic.description}</p>
            </div>
          )}
        </>
      ))}
    </>
  )
}
