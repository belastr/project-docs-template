import { storyMap } from "../data/storyMap";
import { repository } from "../data/repository";

interface Properties {
  language: "de" | "en"
}

export function UserStories({language}: Properties) {
  const translations = {
    de: {
      ghLink: "Dokumentation mit Akzeptanzkriterien",
      newIssue: "Neues Issue erstellen",
      desc: "Beschreibung",
      crit: "Akzeptanzkriterien"
    },
    en: {
      ghLink: "Documentation with acceptance criteria",
      newIssue: "Create new issue",
      desc: "Description",
      crit: "Acceptance criteria"
    }
  }

  const lang = translations[language]

  const stories = storyMap.flatMap((a) => a.epics.flatMap((b) => b.stories))

  return (
    <>
      {stories.map((story) => (
        <>
          {story.description && (
            <div id={`story-${story.id}`} className="w-fit min-w-50 max-w-200 border-2 p-1 mb-4 border-gray-300 bg-gray-200 dark:text-white dark:border-gray-700 dark:bg-gray-800">
              <div className="flex gap-2 place-items-baseline">
                <h3 className="text-xl font-semibold">{story.title}</h3>
                {story.issue && <a
                  href={`https://github.com/${repository.user}/${repository.name}/issues/${story.issue}`}
                  target="_blank"
                  className="underline text-gray-600 dark:text-gray-400"
                >#{story.issue}</a> || <a
                  href={`https://github.com/${repository.user}/${repository.name}/issues/new?title=${story.title}&body=${story.description + "%0A%0A[" + lang.ghLink + "](https://" + repository.user + ".github.io/" + repository.name + "/%23story-" + story.id + ")"}&labels=${repository.default_labels.join(",")}&assignees=${repository.default_assignee}`}
                  target="_blank"
                  className="underline text-gray-600 dark:text-gray-400"
                >{lang.newIssue}</a> }
              </div>

              <p className="pt-4 font-medium">{lang.desc}:</p>
              <p>{story.description}</p>

              {story.criteria && (
                <>
                  <p className="pt-4 font-medium">{lang.crit}:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    {story.criteria.map((criteria, index) => (
                      <li key={index}>{criteria}</li>
                    ))}
                  </ol>
                </>
              )}
            </div>
          )}
        </>
      ))}
    </>
  )
}
