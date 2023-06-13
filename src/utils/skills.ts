interface Tech {
    name: string;
}

interface Skill {
    name: string;
    tech: Tech[];
}

export const skills: Skill[] = [
    {
        name: "Cloud Provider",
        tech: [
            {name: "Google Cloud Platform"},
            {name: "Amazon Web Services"}
        ]
    },
    {
        name: "JavaScript",
        tech: [
            {name: "ReactJS"},
            {name: "NodeJS"},
            {name: "ES6"},
            {name: "JestJS"},
            {name: "StimulusJS"},
            {name: "Playwright"},
        ]
    },
    {
        name: "Container Orchestration",
        tech: [
            {name: "Docker"},
        ]
    },
    {
        name: 'CI/CD Tools',
        tech: [
            {name: "GitHub Actions"},
        ]
    },
    {
        name: 'Project Management',
        tech: [
            {name: "Jira"},
            {name: "Trello"},
        ]
    },
    {
        name: 'Databases',
        tech: [
            {name: "PostgreSQL"},
            {name: "MongoDB"},
            {name: 'MySQL'},
            {name: 'Supabase'},
        ]
    },
    {
        name: 'Operating Systems',
        tech: [
            {name: "Linux"},
            {name: "Windows"},
            {name: "MacOS"},
        ]
    },
    {
        name: 'Programming and Scripting',
        tech: [
            {name: "JavaScript"},
            {name: "TypeScript"},
            {name: "Ruby"},
            {name: "Go"},
            {name: 'Lua'},
            {name: 'Bash'},
        ]
    },
    {
        name: 'Version Control Systems',
        tech: [
            {name: "Git"},
            {name: "GitHub"},
            {name: "GitLab"},
            {name: "BitBucket"},
        ]
    }
]