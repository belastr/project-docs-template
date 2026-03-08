import { storyMap } from "../data/storyMap";

export function UserStoryMap() {
  return (
    <div className="flex gap-4 overflow-x-auto p-4 z-10 border-2 rounded-xl border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
      {storyMap.map((activity) => (
        <div key={activity.id} className="mb-6 shrink-0 dark:text-white">
          <h2>{activity.users.join(", ")}</h2>

          <div className="w-30 h-15 text-center border-2 border-gray-600 p-1 bg-blue-400 dark:border-gray-400 dark:bg-blue-600">
            <p className="text-white">{activity.title}</p>
          </div>

          <div className="flex gap-4 flex-wrap">
            {activity.epics.map((epic) => (
              <div key={epic.id} className="w-30 text-center text-white">
                <div className="h-15 border-2 p-1 mt-2 border-gray-600 bg-green-400 dark:border-gray-400 dark:bg-green-600">
                  {epic.description && <a href={`#epic-${epic.id}`} className="underline">{epic.title}</a> || <p>{epic.title}</p>}
                </div>
                {epic.stories.map((story) => (
                  <div key={story.id} className="border-2 p-1 mt-2 border-gray-600 bg-gray-400 dark:border-gray-400 dark:bg-gray-600">
                    {story.description && <a href={`#story-${story.id}`} className="underline">{story.title}</a> || <p>{story.title}</p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
