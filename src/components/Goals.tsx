import { goals } from "../data/goals";

export function Goals() {
  return (
    <ul className="list-disc list-inside">
      {goals.map((goal) => (
        <li className="dark:text-white">{goal}</li>
      ))}
    </ul>
  )
}
