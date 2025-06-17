export const NavigatorPage: {
    [page: string]: {
        text: string;
        id: string;
    }[]
} = {
    "/team": [
        {
            text: "Scholar",
            id: "scholar",
        },
        {
            text: "Ph.D.",
            id: "phd",
        },
        {
            text: "Intern",
            id: "intern",
        },
        {
            text: "Alumni",
            id: "alumni",
        },
    ],
    "/publications": [
        {
            text: "Editor's Pick",
            id: "editor_pick",
        },
        {
            text: "Embodied AI",
            id: "embodied_ai",
        },
        {
            text: "End-to-End AD",
            id: "end_to_end_ad",
        },
        {
            text: "AD Algorithm",
            id: "ad_algorithm",
        },
        {
            text: "CV at Scale",
            id: "cv_at_scale",
        },
    ],
};
