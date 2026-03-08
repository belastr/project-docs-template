interface Story {
    id: string;
    title: string;
    issue?: number;
    description?: string;
    criteria?: string[];
}

interface Epic {
    id: string;
    title: string;
    description?: string;
    stories: Story[];
}

interface Activity {
    id: string;
    title: string;
    users: string[];
    epics: Epic[];
}

// {
//     id: "<activity id>",
//     title: "<activity title>",
//     users: [ "<activity user 1>", "<activity user 2>" ],
//     epics: [
//         {
//             id: "<epic id>",
//             title: "<epic title>",
//             description: "<epic description (optional)>",
//             stories: [
//                 {
//                     id: "<story id>",
//                     title: "<story title>",
//                     issue: 1,
//                     description: "<story description> (optional)",
//                     criteria: [
//                         "<story acceptance criteria 1 (optional)>",
//                         "<story acceptance criteria 2 (optional)>"
//                     ]
//                 },
//             ],
//         },
//     ]
// },

export const storyMap: Activity[] = [
    
];
