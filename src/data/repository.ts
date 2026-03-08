interface Repository {
    user: string,
    name: string,
    default_assignee: string,
    default_labels: string[]
}

export const repository: Repository = {
    user: "<github username of repository owner>",
    name: "<repository name>",
    default_assignee: "<github username>",
    default_labels: [ "<label 1>", "<label 2>" ]
};
