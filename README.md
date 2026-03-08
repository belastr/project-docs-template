# docs

DE: Dies ist ein Dokumentations-Branch, in dem Artefakte des Requirements Engineering des Projekts aufbewahrt werden. Zu den Artefakten gehören die Vision, die Ziele, die Epics und die User Stories mit Akzeptanzkriterien. Die Epics und User Stories werden auch in einer User Story Map dargestellt, die nach Aktivitäten gruppiert ist. User Stories in der Dokumentation können in GitHub Issues umgewandelt und dann in der Dokumentation verlinkt werden. Der Workflow erstellt aus dem vite-react-Projekt eine statische Website, die auf den Pages des Repositorys bereitgestellt wird.

EN: This is a documentation branch to keep artifacts of the project's requirements engineering. The artifacts include the vision, goals, epics and user stories with acceptance criteria. The epics and user stories are also presented in a user story map, grouped by activities. User stories in documentation can be turned into GitHub Issues and then be linked in the documentation. The workflow will build the vite-react project into a static site, which will deploy to the repository's pages.

## Setup

DE: Für korrekte Verknüpfungen zum Repository sowie zur Erstellung von Issues konfigurieren Sie die Datei `src/data/repository.ts`. Anschließend können Visionen, Ziele, Epics und User Stories in die entsprechenden Dateien in `src/data/` eingefügt werden. Die Pages müssen in den Repository-Einstellungen aktiviert und auf den generierten gh-pages-Branch gestellt werden.

EN: For correct links to the repository as well as issue generation configure the `src/data/repository.ts` file. Afterwards vision, goals, epics and user stories can be inserted in their respective files in `src/data/`. The pages have to be enabled and set to the generated gh-pages branch in the repository settings.

## Issues

DE: User Stories ohne eine Issue-Nummer in `src/data/storyMap.ts` zeigen einen generierten Link auf den Pages des Repositorys an. Durch Klicken auf diesen Link werden die Informationen der User Story sowie ein Link zu ihr auf den Pages in ein neues Issue eingefügt. Das Issue versucht außerdem, den in `src/data/repository.ts` konfigurierten Standard-Bearbeiter und Standard-Labels zu setzen. Nachdem das Issue erstellt wurde, muss seine Nummer in die Story-Daten eingefügt werden, um den generierten Link zu ersetzen.

EN: User stories without a issue number in the `src/data/storyMap.ts` will show a generated link on the repository's pages. Upon clicking that link the user story's information as well as a link to it on the pages will be inserted into a new issue. The issue will also attempt to set the in `src/data/repository.ts` configured default assignee and default labels. After the issue was created it's number will need to be put into the story data to replace the generation link.
