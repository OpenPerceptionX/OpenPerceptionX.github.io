export const pageNavigator: {
    [page: string]: {
        text: string;
        id: string;
    }[]
} = {
    "/freetacman": [
        {
            text: "Highlights",
            id: "highlights",
        },
        {
            text: "3D Model",
            id: "model",
        },
        {
            text: "Applications",
            id: "applications",
        },
        {
            text: "Policy Rollouts",
            id: "policy-rollouts",
        },
        {
            text: "User Study",
            id: "user-study",
        },
    ],
    "/resim": [
        {
            text: "Overview",
            id: "overview",
        },
        {
            text: "Action-Controlled / Waymo",
            id: "action_control_waymo",
        },
        {
            text: "Action-Controlled / nuScenes",
            id: "action_control_nuscenes",
        },
        {
            text: "Comparison of Action Controllability",
            id: "comparison",
        },
        {
            text: "Action-free",
            id: "action_free",
        },
    ],
};
