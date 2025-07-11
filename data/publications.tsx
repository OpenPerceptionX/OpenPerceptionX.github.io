export const categories: {
    text: string;
    id: string;
}[] = [
    {
        text: "Editor's Pick",
        id: "editor_pick",
    },
    {
        text: "Embodied AI",
        id: "embodied_ai",
    },
    {
        text: "End-to-End Autonomous Driving",
        id: "end_to_end_ad",
    },
    {
        text: "Autonomous Driving Algorithm",
        id: "ad_algorithm",
    },
    {
        text: "Computer Vision at Scale",
        id: "cv_at_scale",
    },
]



export const scholar: Record<string, string> = {
    "Junchi Yan": "https://scholar.google.com/citations?user=ga230VoAAAAJ",
    "Andreas Geiger": "https://scholar.google.com/citations?user=SrVnrPcAAAAJ",
    "Yu Qiao": "https://scholar.google.com/citations?user=gFtI-8QAAAAJ",
    "Kashyap Chitta": "https://scholar.google.com/citations?user=vX5i2CcAAAAJ",
    "Ping Luo": "https://scholar.google.com/citations?user=aXdjxb4AAAAJ",
    "Yi Ma": "https://scholar.google.com/citations?user=XqLiBQMAAAAJ",
    "Fatma Güney": "https://scholar.google.com/citations?user=g3UitywAAAAJ",
    "Zhiqi Li": "https://scholar.google.com/citations?user=H2fJLqEAAAAJ",
    "Wenhai Wang": "https://scholar.google.com/citations?user=WM0OglcAAAAJ0",
    "Hongwei Xue": "https://scholar.google.com/citations?user=k5CJa5YAAAAJ",
}
import { members } from "@/data/team"
members.forEach((member) => {
    const scholarlink = member.links.find(link => link.icon === 'scholar');
    if (scholarlink) {
        scholar[member.name] = scholarlink.url;
    }
});



export const publications: {
    title: string;
    link: string;
    image: string,
    author: string;
    note: string;
    noteoption: string;
    star: string;
    starlink: string
    icon: { type: string; link: string }[];
    description: string;
    keys: string[];
}[] = [
    {
        title: "Detect Anything 3D in the Wild",
        link: "https://arxiv.org/abs/2504.07958",
        image: "/assets/publication/detany3d.jpg",
        author: "Hanxue Zhang, Haoran Jiang, Qingsong Yao, Yanan Sun, Renrui Zhang, Hao Zhao, Hongyang Li, Hongzi Zhu, Zetong Yang",
        note: "ICCV 2025",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/DetAny3D?style=social",
        starlink: "https://github.com/OpenDriveLab/DetAny3D",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/DetAny3D",
            },
        ],
        description: "DetAny3D is a promptable 3D detection foundation model that leverages 2D foundation knowledge to enable zero-shot 3D object detection from monocular images across novel categories and camera settings.",
        keys: ['cv_at_scale'],
    },
    {
        title: "Reinforced Refinement with Self-Aware Expansion for End-to-End Autonomous Driving",
        link: "https://arxiv.org/abs/2506.09800",
        image: "/assets/publication/e2eads.jpg",
        author: "Haochen Liu, Tianyu Li, Haohan Yang, Li Chen, Caojun Wang, Ke Guo, Haochen Tian, Hongchen Li, Hongyang Li, Chen Lv",
        note: "arXiv 2025",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
        ],
        description: "",
        keys: ['end_to_end_ad'],
    },
    {
        title: "UniVLA: Learning to Act Anywhere with Task-centric Latent Actions",
        link: "https://arxiv.org/abs/2505.06111",
        image: "/assets/publication/univla.jpg",
        author: "Qingwen Bu, Yanting Yang, Jisong Cai, Shenyuan Gao, Guanghui Ren, Maoqing Yao, Ping Luo, Hongyang Li",
        note: "RSS 2025",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/UniVLA?style=social",
        starlink: "https://github.com/OpenDriveLab/UniVLA",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/UniVLA",
            },
        ],
        description: "A unified vision-language-action framework that enables policy learning across different environments.",
        keys: ['editor_pick', 'home_sliding', 'drawer_embodied'],
    },
    {
        title: "Planning-oriented Autonomous Driving",
        link: "https://openaccess.thecvf.com/content/CVPR2023/html/Hu_Planning-Oriented_Autonomous_Driving_CVPR_2023_paper.html",
        image: "/assets/publication/uniad.jpg",
        author: "Yihan Hu, Jiazhi Yang, Li Chen, Keyu Li, Chonghao Sima, Xizhou Zhu, Siqi Chai, Senyao Du, Tianwei Lin, Wenhai Wang, Lewei Lu, Xiaosong Jia, Qiang Liu, Jifeng Dai, Yu Qiao, Hongyang Li",
        note: "CVPR 2023 Best Paper Award",
        noteoption: 'https://cvpr2023.thecvf.com/Conferences/2023/Awards',
        star: "https://img.shields.io/github/stars/OpenDriveLab/UniAD?style=social",
        starlink: "https://github.com/OpenDriveLab/UniAD",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/UniAD",
            },
            {
                type: "youtube",
                link: "https://www.youtube.com/watch?v=cyrxJJ_nnaQ",
            },
            {
                type: "slides",
                link: "https://opendrivelab.github.io/UniAD_plenary_talk_slides.pdf",
            },
            {
                type: "zhihu",
                link: "https://zhuanlan.zhihu.com/p/638780421",
            },
            {
                type: "wechat",
                link: "https://mp.weixin.qq.com/s?__biz=MzkyMDUzMDE2Mw==&mid=2247485809&idx=1&sn=5dbd00380bcf80cc32d11b6e15e93829",
            },
        ],
        description: "UniAD: The first comprehensive framework that incorporates full-stack driving tasks.",
        keys: ['editor_pick', 'home_sliding', 'drawer_e2e'],
    },
    {
        title: "AgiBot World Colosseo: A Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems",
        link: "https://arxiv.org/abs/2503.06669",
        image: "/assets/publication/go-1.jpg",
        author: "Team AgiBot-World",
        note: "IROS 2025",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/AgiBot-World?style=social",
        starlink: "https://github.com/OpenDriveLab/AgiBot-World",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/AgiBot-World",
            },
            {
                type: "blog",
                link: "/AgiBot-World/",
            },
            {
                type: "huggingface",
                link: "https://huggingface.co/agibot-world",
            },
            {
                type: "bilibili",
                link: "https://www.bilibili.com/video/BV1sNdGYWEBY",
            }
        ],
        description: "A novel generalist policy that leverages latent action representations to maximize data utilization, demonstrating predictable performance scaling with increased data volume.",
        keys: ['editor_pick', 'home_sliding', 'drawer_embodied'],
    },
    {
        title: "End-to-End Autonomous Driving: Challenges and Frontiers",
        link: "https://ieeexplore.ieee.org/abstract/document/10614862/",
        image: "/assets/publication/e2esurvey.jpg",
        author: "Li Chen, Penghao Wu, Kashyap Chitta, Bernhard Jaeger, Andreas Geiger, Hongyang Li",
        note: "IEEE-TPAMI 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/End-to-end-Autonomous-Driving?style=social",
        starlink: "https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/End-to-end-Autonomous-Driving",
            },
        ],
        description: "In this survey, we provide a comprehensive analysis of more than 270 papers on the motivation, roadmap, methodology, challenges, and future trends in end-to-end autonomous driving.",
        keys: ['editor_pick', 'survey', 'drawer_e2e'],
    },
    {
        title: "DriveLM: Driving with Graph Visual Question Answering",
        link: "https://arxiv.org/abs/2312.14150",
        image: "/assets/publication/drivelm.jpg",
        author: "Chonghao Sima, Katrin Renz, Kashyap Chitta, Li Chen, Hanxue Zhang, Chengen Xie, Ping Luo, Andreas Geiger, Hongyang Li",
        note: "ECCV 2024 Oral",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/DriveLM?style=social",
        starlink: "https://github.com/OpenDriveLab/DriveLM",
        icon: [
            {
                type: "dataset",
                link: "https://github.com/OpenDriveLab/DriveLM",
            },
            {
                type: "page",
                link: "/DriveLM/",
            },
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/DriveLM",
            },
            {
                type: "huggingface",
                link: "https://huggingface.co/datasets/OpenDriveLab-org/DriveLM",
            },
        ],
        description: "Unlocking the future where autonomous driving meets the unlimited potential of language.",
        keys: ['editor_pick', 'home_sliding', 'drawer_e2e'],
    },
    {
        title: "FreeTacMan: Robot-free Visuo-Tactile Data Collection System for Contact-rich Manipulation",
        link: "http://arxiv.org/abs/2506.01941",
        image: "/assets/publication/freetacman.jpg",
        author: "Longyan Wu, Checheng Yu, Jieji Ren, Li Chen, Ran Huang, Guoying Gu, Hongyang Li",
        note: "arXiv 2025",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/FreeTacMan?style=social",
        starlink: "https://github.com/OpenDriveLab/FreeTacMan",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/FreeTacMan",
            },
            {
                type: "page",
                link: "/FreeTacMan",
            },
            {
                type: "blog",
                link: "https://docs.google.com/document/d/1Hhi2stn_goXUHdYi7461w10AJbzQDC0fdYaSxMdMVXM/edit?usp=sharing",
            },
            {
                type: "youtube",
                link: "https://www.youtube.com/watch?v=Ah-xYnST0yw",
            },
        ],
        description: "A human-centric and robot-free visuo-tactile data collection system for high-quality and efficient robot manipulation.",
        keys: ['embodied_ai', 'home_sliding'],
    },
    {
        title: "Towards Synergistic, Generalized, and Efficient Dual-System for Robotic Manipulation",
        link: "https://arxiv.org/abs/2410.08001",
        image: "/assets/publication/robodual.jpg",
        author: "Qingwen Bu, Hongyang Li, Li Chen, Jisong Cai, Jia Zeng, Heming Cui, Maoqing Yao, Yu Qiao",
        note: "arXiv 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/RoboDual?style=social",
        starlink: "https://github.com/OpenDriveLab/RoboDual",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/RoboDual",
            },
            {
                type: "page",
                link: "/RoboDual/",
            },
        ],
        description: "Our objective is to develop a synergistic dual-system framework which supplements the generalizability of large-scale pre-trained generalist with the efficient and task-specific adaptation of specialist.",
        keys: ['embodied_ai'],
    },
    {
        title: "Closed-Loop Visuomotor Control with Generative Expectation for Robotic Manipulation",
        link: "https://arxiv.org/abs/2409.09016",
        image: "/assets/publication/clover.jpg",
        author: "Qingwen Bu, Jia Zeng, Li Chen, Yanchao Yang, Guyue Zhou, Junchi Yan, Ping Luo, Heming Cui, Yi Ma, Hongyang Li",
        note: "NeurIPS 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/CLOVER?style=social",
        starlink: "https://github.com/OpenDriveLab/CLOVER",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/CLOVER",
            },
            {
                type: "bilibili",
                link: "https://www.bilibili.com/video/BV1rHqZYeECL",
            },
        ],
        description: "CLOVER employs a text-conditioned video diffusion model for generating visual plans as reference inputs, then these sub-goals guide the feedback-driven policy to generate actions with an error measurement strategy.",
        keys: ['embodied_ai'],
    },
    {
        title: "Learning Manipulation by Predicting Interaction",
        link: "https://arxiv.org/abs/2406.00439",
        image: "/assets/publication/mpi.jpg",
        author: "Jia Zeng, Qingwen Bu, Bangjun Wang, Wenke Xia, Li Chen, Hao Dong, Haoming Song, Dong Wang, Di Hu, Ping Luo, Heming Cui, Bin Zhao, Xuelong Li, Yu Qiao, Hongyang Li",
        note: "RSS 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/MPI?style=social",
        starlink: "https://github.com/OpenDriveLab/MPI",
        icon: [
            {
                type: "page",
                link: "/MPI/",
            },
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/MPI",
            },
        ],
        description: "We propose a general pre-training pipeline that learns Manipulation by Predicting the Interaction (MPI).",
        keys: ['embodied_ai'],
    },
    {
        title: "MTGS: Multi-Traversal Gaussian Splatting",
        link: "https://arxiv.org/abs/2503.12552",
        image: "/assets/publication/mtgs.jpg",
        author: "Tianyu Li, Yihang Qiu, Zhenhua Wu, Carl Lindström, Peng Su, Matthias Nießner, Hongyang Li",
        note: "arXiv 2025",
        noteoption: '',
        star: "https://img.shields.io/github/stars/opendrivelab/MTGS?style=social",
        starlink: "https://github.com/OpenDriveLab/MTGS",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/MTGS",
            }
        ],
        description: "",
        keys: ['ad_algorithm'],
    },
    {
        title: "LaneSegNet: Map Learning with Lane Segment Perception for Autonomous Driving",
        link: "https://arxiv.org/abs/2312.16108",
        image: "/assets/publication/lanesegnet.jpg",
        author: "Tianyu Li, Peijin Jia, Bangjun Wang, Li Chen, Kun Jiang, Junchi Yan, Hongyang Li",
        note: "ICLR 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/opendrivelab/LaneSegNet?style=social",
        starlink: "https://github.com/OpenDriveLab/LaneSegNet",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/LaneSegNet",
            },
        ],
        description: "We advocate Lane Segment as a map learning paradigm that seamlessly incorporates both map geometry and topology information.",
        keys: ['ad_algorithm'],
    },
    {
        title: "Fully Sparse 3D Occupancy Prediction",
        link: "https://arxiv.org/abs/2312.17118",
        image: "/assets/publication/sparseocc.jpg",
        author: "Haisong Liu, Yang Chen, Haiguang Wang, Zetong Yang, Tianyu Li, Jia Zeng, Li Chen, Hongyang Li, Limin Wang",
        note: "ECCV 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/MCG-NJU/SparseOcc?style=social",
        starlink: "https://github.com/MCG-NJU/SparseOcc",
        icon: [
            {
                type: "github",
                link: "https://github.com/MCG-NJU/SparseOcc",
            },
        ],
        description: "",
        keys: ['ad_algorithm'],
    },
    {
        title: "Leveraging Vision-Centric Multi-Modal Expertise for 3D Object Detection",
        link: "https://arxiv.org/abs/2310.15670",
        image: "/assets/publication/vcd.jpg",
        author: "Linyan Huang, Zhiqi Li, Chonghao Sima, Wenhai Wang, Jingdong Wang, Yu Qiao, Hongyang Li",
        note: "NeurIPS 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/opendrivelab/Birds-eye-view-Perception?style=social",
        starlink: "https://github.com/OpenDriveLab/Birds-eye-view-Perception",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/Birds-eye-view-Perception",
            },
        ],
        description: "The unified framework to enhance 3D object detection by uniting a multi-modal expert model with a trajectory distillation module.",
        keys: ['ad_algorithm'],
    },
    {
        title: "OpenLane-V2: A Topology Reasoning Benchmark for Unified 3D HD Mapping",
        link: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/3c0a4c8c236144f1b99b7e1531debe9c-Abstract-Datasets_and_Benchmarks.html",
        image: "/assets/publication/openlanev2.jpg",
        author: "Huijie Wang, Tianyu Li, Yang Li, Li Chen, Chonghao Sima, Zhenbo Liu, Bangjun Wang, Peijin Jia, Yuting Wang, Shengyin Jiang, Feng Wen, Hang Xu, Ping Luo, Junchi Yan, Wei Zhang, Hongyang Li",
        note: "NeurIPS 2023 Track Datasets and Benchmarks",
        noteoption: '',
        star: "https://img.shields.io/github/stars/opendrivelab/OpenLane-V2?style=social",
        starlink: "https://github.com/OpenDriveLab/OpenLane-V2",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/OpenLane-V2",
            },
            {
                type: "dataset",
                link: "https://github.com/OpenDriveLab/OpenLane-V2",
            },
        ],
        description: "The world's first perception and reasoning benchmark for scene structure in autonomous driving.",
        keys: ['ad_algorithm'],
    },
    {
        title: "Delving into the Devils of Bird's-Eye-View Perception: A Review, Evaluation and Recipe",
        link: "https://ieeexplore.ieee.org/document/10321736",
        image: "/assets/publication/bevsurvey.jpg",
        author: "Hongyang Li, Chonghao Sima, Jifeng Dai, Wenhai Wang, Lewei Lu, Huijie Wang, Jia Zeng, Zhiqi Li, Jiazhi Yang, Hanming Deng, Hao Tian, Enze Xie, Jiangwei Xie, Li Chen, Tianyu Li, Yang Li, Yulu Gao, Xiaosong Jia, Si Liu, Jianping Shi, Dahua Lin, Yu Qiao",
        note: "IEEE-TPAMI 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/opendrivelab/bevperception-survey-recipe?style=social",
        starlink: "https://github.com/opendrivelab/bevperception-survey-recipe",
        icon: [
            {
                type: "github",
                link: "https://github.com/opendrivelab/bevperception-survey-recipe",
            },
        ],
        description: "We review the most recent work on BEV perception and provide analysis of different solutions.",
        keys: ['ad_algorithm', 'survey'],
    },
    {
        title: "Scene as Occupancy",
        link: "https://arxiv.org/abs/2306.02851",
        image: "/assets/publication/occnet.jpg",
        author: "Chonghao Sima, Wenwen Tong, Tai Wang, Li Chen, Silei Wu, Hanming Deng, Yi Gu, Lewei Lu, Ping Luo, Dahua Lin, Hongyang Li",
        note: "ICCV 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/opendrivelab/OccNet?style=social",
        starlink: "https://github.com/OpenDriveLab/OccNet",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/OccNet",
            },
        ],
        description: "Occupancy serves as a general representation of the scene and could facilitate perception and planning in the full-stack of autonomous driving.",
        keys: ['ad_algorithm'],
    },
    {
        title: "Sparse Dense Fusion for 3D Object Detection",
        link: "https://arxiv.org/abs/2304.04179",
        image: "/assets/publication/sparse_yulu.jpg",
        author: "Yulu Gao, Chonghao Sima, Shaoshuai Shi, Shangzhe Di, Si Liu, Hongyang Li",
        note: "IROS 2023",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
            {
                type: "github",
                link: "",
            },
        ],
        description: "We propose Sparse Dense Fusion (SDF), a complementary framework that incorporates both sparse-fusion and dense-fusion modules via the Transformer architecture.",
        keys: ['ad_algorithm'],
    },
    {
        title: "HDGT: Heterogeneous Driving Graph Transformer for Multi-Agent Trajectory Prediction via Scene Encoding",
        link: "https://arxiv.org/abs/2205.09753",
        image: "/assets/publication/hdgt.jpg",
        author: "Xiaosong Jia, Penghao Wu, Li Chen, Hongyang Li, Yu Liu, Junchi Yan",
        note: "IEEE-TPAMI 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenPerceptionX/HDGT?style=social",
        starlink: "https://github.com/OpenPerceptionX/HDGT",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenPerceptionX/HDGT",
            },
        ],
        description: "HDGT formulates the driving scene as a heterogeneous graph with different types of nodes and edges.",
        keys: ['ad_algorithm'],
    },
    {
        title: "Distilling Focal Knowledge from Imperfect Expert for 3D Object Detection",
        link: "https://openaccess.thecvf.com/content/CVPR2023/html/Zeng_Distilling_Focal_Knowledge_From_Imperfect_Expert_for_3D_Object_Detection_CVPR_2023_paper.html",
        image: "/assets/publication/fd3d.jpg",
        author: "Jia Zeng, Li Chen, Hanming Deng, Lewei Lu, Junchi Yan, Yu Qiao, Hongyang Li",
        note: "CVPR 2023",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
            {
                type: "github",
                link: "",
            },
        ],
        description: "We investigate on how to distill the knowledge from an imperfect expert. We propose FD3D, a Focal Distiller for 3D object detection.",
        keys: ['ad_algorithm'],
    },
    {
        title: "BEVFormer v2: Adapting Modern Image Backbones to Bird's-Eye-View Recognition via Perspective Supervision",
        link: "https://openaccess.thecvf.com/content/CVPR2023/html/Yang_BEVFormer_v2_Adapting_Modern_Image_Backbones_to_Birds-Eye-View_Recognition_via_CVPR_2023_paper.html",
        image: "/assets/publication/bevformerv2.jpg",
        author: "Chenyu Yang, Yuntao Chen, Hao Tian, Chenxin Tao, Xizhou Zhu, Zhaoxiang Zhang, Gao Huang, Hongyang Li, Yu Qiao, Lewei Lu, Jie Zhou, Jifeng Dai",
        note: "CVPR 2023 Highlight",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
            {
                type: "github",
                link: "",
            },
        ],
        description: "A novel bird's-eye-view (BEV) detector with perspective supervision, which converges faster and better suits modern image backbones.",
        keys: ['ad_algorithm'],
    },
    {
        title: "Graph-based Topology Reasoning for Driving Scenes",
        link: "https://arxiv.org/abs/2304.05277",
        image: "/assets/publication/toponet.jpg",
        author: "Tianyu Li, Li Chen, Huijie Wang, Yang Li, Jiazhi Yang, Xiangwei Geng, Shengyin Jiang, Yuting Wang, Hang Xu, Chunjing Xu, Junchi Yan, Ping Luo, Hongyang Li",
        note: "arXiv 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/opendrivelab/TopoNet?style=social",
        starlink: "https://github.com/OpenDriveLab/TopoNet",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/TopoNet",
            },
        ],
        description: "A new baseline for scene topology reasoning, which unifies heterogeneous feature learning and enhances feature interactions via the graph neural network architecture and the knowledge graph design.",
        keys: ['ad_algorithm'],
    },
    {
        title: "Geometric-aware Pretraining for Vision-centric 3D Object Detection",
        link: "https://arxiv.org/abs/2304.03105",
        image: "/assets/publication/gapretrain.jpg",
        author: "Linyan Huang, Huijie Wang, Jia Zeng, Shengchuan Zhang, Liujuan Cao, Rongrong Ji, Junchi Yan, Hongyang Li",
        note: "arXiv 2023",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
            {
                type: "github",
                link: "",
            },
        ],
        description: "We propose GAPretrain, a plug-and-play framework that boosts 3D detection by pretraining with spatial-structural cues and BEV representation.",
        keys: ['ad_algorithm'],
    },
    {
        title: "3D Data Augmentation for Driving Scenes on Camera",
        link: "https://link.springer.com/chapter/10.1007/978-981-97-8508-7_4",
        image: "/assets/publication/3daug.jpg",
        author: "Wenwen Tong, Jiangwei Xie, Tianyu Li, Yang Li, Hanming Deng, Bo Dai, Lewei Lu, Hao Zhao, Junchi Yan, Hongyang Li",
        note: "PRCV 2024",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
            {
                type: "github",
                link: "",
            },
        ],
        description: "We propose a 3D data augmentation approach termed Drive-3DAug to augment the driving scenes on camera in the 3D space.",
        keys: ['ad_algorithm'],
    },
    {
        title: "Towards Capturing the Temporal Dynamics for Trajectory Prediction: a Coarse-to-Fine Approach",
        link: "https://proceedings.mlr.press/v205/jia23a.html",
        image: "/assets/publication/traj_xiaosong.jpg",
        author: "Xiaosong Jia, Li Chen, Penghao Wu, Jia Zeng, Junchi Yan, Hongyang Li, Yu Qiao",
        note: "CoRL 2022",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
            {
                type: "github",
                link: "",
            },
        ],
        description: "We find taking scratch trajectories generated by MLP as input, a refinement module based on structures with temporal prior, could  boost the accuracy.",
        keys: ['ad_algorithm'],
    },
    {
        title: "BEVFormer: Learning Bird’s-Eye-View Representation From LiDAR-Camera via Spatiotemporal Transformers",
        link: "https://www.computer.org/csdl/journal/tp/2025/03/10791908/22ABgP6PlUQ",
        image: "/assets/publication/bevformer.jpg",
        author: "Zhiqi Li, Wenhai Wang, Hongyang Li, Enze Xie, Chonghao Sima, Tong Lu, Yu Qiao, Jifeng Dai",
        note: "IEEE-TPAMI 2025",
        noteoption: '',
        star: "https://img.shields.io/github/stars/fundamentalvision/BEVFormer?style=social",
        starlink: "https://github.com/fundamentalvision/BEVFormer",
        icon: [
            {
                type: "github",
                link: "https://github.com/fundamentalvision/BEVFormer",
            },
            {
                type: "zhihu",
                link: "https://zhuanlan.zhihu.com/p/564295059",
            },
        ],
        description: "A paradigm for autonomous driving that applies both Transformer and Temporal structure to generate BEV features.",
        keys: ['ad_algorithm'],
    },
    {
        title: "PersFormer: 3D Lane Detection via Perspective Transformer and the OpenLane Benchmark",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-19839-7_32",
        image: "/assets/publication/persformer.jpg",
        author: "Li Chen, Chonghao Sima, Yang Li, Zehan Zheng, Jiajie Xu, Xiangwei Geng, Hongyang Li, Conghui He, Jianping Shi, Yu Qiao, Junchi Yan",
        note: "ECCV 2022 Oral",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/PersFormer_3DLane?style=social",
        starlink: "https://github.com/OpenDriveLab/PersFormer_3DLane",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/PersFormer_3DLane",
            },
            {
                type: "dataset",
                link: "https://github.com/OpenDriveLab/OpenLane",
            },
            {
                type: "blog",
                link: "https://patrick-llgc.github.io/Learning-Deep-Learning/paper_notes/persformer.html",
            },
            {
                type: "zhihu",
                link: "https://zhuanlan.zhihu.com/p/552908337",
            },
        ],
        description: "PersFormer adopts a unified 2D/3D anchor design and an auxiliary task to detect 2D/3D lanes; we release one of the first large-scale real-world 3D lane datasets, OpenLane.",
        keys: ['ad_algorithm'],
    },
    {
        title: "ReSim: Reliable World Simulation for Autonomous Driving",
        link: "https://arxiv.org/abs/2506.09981",
        image: "/assets/publication/resim.jpg",
        author: "Jiazhi Yang, Kashyap Chitta, Shenyuan Gao, Long Chen, Yuqian Shao, Xiaosong Jia, Hongyang Li, Andreas Geiger, Xiangyu Yue, Li Chen",
        note: "arXiv 2025",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/ReSim?style=social",
        starlink: "https://github.com/OpenDriveLab/ReSim",
        icon: [
            {
                type: "page",
                link: "/ReSim",
            },
        ],
        description: "ReSim is a driving world model that enables Reliable Simulation of diverse open-world driving scenarios under various actions, including hazardous non-expert ones. A Video2Reward model estimates the reward from ReSim's simulated future.",
        keys: ['end_to_end_ad', 'home_sliding'],
    },
    {
        title: "ETA: Efficiency through Thinking Ahead, A Dual Approach to Self-Driving with Large Models",
        link: "https://arxiv.org/abs/2506.07725",
        image: "/assets/publication/eta.jpg",
        author: "Shadi Hamdan, Chonghao Sima, Zetong Yang, Hongyang Li, Fatma Güney",
        note: "ICCV 2025",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/ETA?style=social",
        starlink: "https://github.com/OpenDriveLab/ETA",
        icon: [
        ],
        description: "",
        keys: ['end_to_end_ad'],
    },
    {
        title: "Decoupled Diffusion Sparks Adaptive Scene Generation",
        link: "https://arxiv.org/abs/2504.10485",
        image: "/assets/publication/nexus.jpg",
        author: "Yunsong Zhou, Naisheng Ye, William Ljungbergh, Tianyu Li, Jiazhi Yang, Zetong Yang, Hongzi Zhu, Christoffer Petersson, Hongyang Li",
        note: "ICCV 2025",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/Nexus?style=social",
        starlink: "https://github.com/OpenDriveLab/Nexus",
        icon: [
            {
                type: "page",
                link: "/Nexus",
            },
        ],
        description: "",
        keys: ['end_to_end_ad'],
    },
    {
        title: "Centaur: Robust End-to-End Autonomous Driving with Test-Time Training",
        link: "https://arxiv.org/abs/2503.11650",
        image: "/assets/publication/centaur.jpg",
        author: "Chonghao Sima, Kashyap Chitta, Zhiding Yu, Shiyi Lan, Ping Luo, Andreas Geiger, Hongyang Li, Jose M. Alvarez",
        note: "arXiv 2025",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
        ],
        description: "",
        keys: ['end_to_end_ad'],
    },
        {
        title: "Vista: A Generalizable Driving World Model with High Fidelity and Versatile Controllability",
        link: "https://arxiv.org/abs/2405.17398",
        image: "/assets/publication/vista.jpg",
        author: "Shenyuan Gao, Jiazhi Yang, Li Chen, Kashyap Chitta, Yihang Qiu, Andreas Geiger, Jun Zhang, Hongyang Li",
        note: "NeurIPS 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/Vista?style=social",
        starlink: "https://github.com/OpenDriveLab/Vista",
        icon: [
            {
                type: "dataset",
                link: "https://github.com/OpenDriveLab/DriveAGI/tree/main/opendv",
            },
            {
                type: "page",
                link: "/Vista/",
            },
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/Vista",
            },
            {
                type: "huggingface",
                link: "https://huggingface.co/OpenDriveLab/Vista",
            },
            {
                type: "bilibili",
                link: "https://www.bilibili.com/video/BV1gXCGYMEYV/",
            },
            {
                type: "blog",
                link: "https://medium.com/@opendrivelab/towards-next-level-of-autonomous-driving-via-world-models-aff0eb7fee00",
            },
            {
                type: "poster",
                link: "https://opendrivelab.github.io/Vista/nips24_vista_poster.png",
            },
        ],
        description: "A generalizable driving world model with high-fidelity open-world prediction, continuous long-horizon rollout, and zero-shot action controllability.",
        keys: ['end_to_end_ad'],
    },
    {
        title: "Reasoning Multi-Agent Behavioral Topology for Interactive Autonomous Driving",
        link: "https://arxiv.org/abs/2409.18031",
        image: "/assets/publication/betop.jpg",
        author: "Haochen Liu, Li Chen, Yu Qiao, Chen Lv, Hongyang Li",
        note: "NeurIPS 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/BeTop?style=social",
        starlink: "https://github.com/OpenDriveLab/BeTop",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/BeTop",
            },
        ],
        description: "",
        keys: ['end_to_end_ad'],
    },
    {
        title: "NAVSIM: Data-Driven Non-Reactive Autonomous Vehicle Simulation and Benchmarking",
        link: "https://arxiv.org/abs/2406.15349",
        image: "/assets/publication/navsim.jpg",
        author: "Daniel Dauner, Marcel Hallgarten, Tianyu Li, Xinshuo Weng, Zhiyu Huang, Zetong Yang, Hongyang Li, Igor Gilitschenski, Boris Ivanovic, Marco Pavone, Andreas Geiger, Kashyap Chitta",
        note: "NeurIPS 2024 Track Datasets and Benchmarks",
        noteoption: '',
        star: "https://img.shields.io/github/stars/autonomousvision/navsim?style=social",
        starlink: "https://github.com/autonomousvision/navsim",
        icon: [
            {
                type: "github",
                link: "https://github.com/autonomousvision/navsim",
            },
        ],
        description: "Data-Driven Non-Reactive Autonomous Vehicle Simulation and Benchmarking.",
        keys: ['end_to_end_ad'],
    },
    {
        title: "Generalized Predictive Model for Autonomous Driving",
        link: "https://openaccess.thecvf.com/content/CVPR2024/html/Yang_Generalized_Predictive_Model_for_Autonomous_Driving_CVPR_2024_paper.html",
        image: "/assets/publication/genad.jpg",
        author: "Jiazhi Yang, Shenyuan Gao, Yihang Qiu, Li Chen, Tianyu Li, Bo Dai, Kashyap Chitta, Penghao Wu, Jia Zeng, Ping Luo, Jun Zhang, Andreas Geiger, Yu Qiao, Hongyang Li",
        note: "CVPR 2024 Highlight",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/DriveAGI?style=social",
        starlink: "https://github.com/OpenDriveLab/DriveAGI",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/DriveAGI",
            },
            {
                type: "dataset",
                link: "https://github.com/OpenDriveLab/DriveAGI/tree/main/opendv",
            },
            {
                type: "youtube",
                link: "https://www.youtube.com/watch?v=a4H6Jj-7IC0",
            },
            {
                type: "bilibili",
                link: "https://www.bilibili.com/video/BV1gXCGYMEYV/",
            },
            {
                type: "blog",
                link: "https://medium.com/@opendrivelab/towards-next-level-of-autonomous-driving-via-world-models-aff0eb7fee00",
            },
            {
                type: "slides",
                link: "https://opendrivelab.github.io/content/GenAD_slides_with_vista.pdf",
            },
        ],
        description: "We aim to establish a generalized video prediction paradigm for autonomous driving by presenting the largest multimodal driving video dataset to date, OpenDV-2K, and a generative model that predicts the future given past visual and textual input, GenAD.",
        keys: ['end_to_end_ad'],
    },
    {
        title: "Visual Point Cloud Forecasting enables Scalable Autonomous Driving",
        link: "https://openaccess.thecvf.com/content/CVPR2024/html/Yang_Visual_Point_Cloud_Forecasting_enables_Scalable_Autonomous_Driving_CVPR_2024_paper.html",
        image: "/assets/publication/vidar.jpg",
        author: "Zetong Yang, Li Chen, Yanan Sun, Hongyang Li",
        note: "CVPR 2024 Highlight",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/ViDAR?style=social",
        starlink: "https://github.com/OpenDriveLab/ViDAR",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/ViDAR",
            },
        ],
        description: "A new self-supervised pre-training task for end-to-end autonomous driving, predicting future point clouds from historical visual inputs, joint modeling the 3D geometry and temporal dynamics for simultaneous perception, prediction, and planning.",
        keys: ['end_to_end_ad'],
    },
    {
        title: "自動駕駛開源數據體系：現狀與未來",
        link: "http://engine.scichina.com/doi/10.1360/SSI-2023-0313",
        image: "/assets/publication/datasurvey.jpg",
        author: "Hongyang Li, Yang Li, Huijie Wang, Jia Zeng, Huilin Xu, Pinlong Cai, Li Chen, Junchi Yan, Feng Xu, Lu Xiong, Jingdong Wang, Futang Zhu, Kai Yan, Chunjing Xu, Tiancai Wang, Fei Xia, Beipeng Mu, Zhihui Peng, Dahua Lin, Yu Qiao",
        note: "中國科學：信息科學",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/DriveAGI?style=social",
        starlink: "https://github.com/OpenDriveLab/DriveAGI",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/DriveAGI",
            },
            {
                type: "arxiv",
                link: "https://arxiv.org/abs/2312.03408",
            },
        ],
        description: "",
        keys: ['end_to_end_ad', 'survey'],
    },
    {
        title: "Embodied Understanding of Driving Scenarios",
        link: "https://arxiv.org/abs/2403.04593",
        image: "/assets/publication/elm.jpg",
        author: "Yunsong Zhou, Linyan Huang, Qingwen Bu, Jia Zeng, Tianyu Li, Hang Qiu, Hongzi Zhu, Minyi Guo, Yu Qiao, Hongyang Li",
        note: "ECCV 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/ELM?style=social",
        starlink: "https://github.com/OpenDriveLab/ELM",
        icon: [
            {
                type: "page",
                link: "https://opendrivelab.github.io/elm.github.io/",
            },
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/ELM",
            },
        ],
        description: "Revive driving scene understanding by delving into the embodiment philosophy.",
        keys: ['end_to_end_ad'],
    },
    {
        title: "DriveAdapter: Breaking the Coupling Barrier of Perception and Planning in End-to-End Autonomous Driving",
        link: "https://openaccess.thecvf.com/content/ICCV2023/html/Jia_DriveAdapter_Breaking_the_Coupling_Barrier_of_Perception_and_Planning_in_ICCV_2023_paper.html",
        image: "/assets/publication/driveadapted.jpg",
        author: "Xiaosong Jia, Yulu Gao, Li Chen, Junchi Yan, Patrick Langechuan Liu, Hongyang Li",
        note: "ICCV 2023 Oral",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/DriveAdapter?style=social",
        starlink: "https://github.com/OpenDriveLab/DriveAdapter",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/DriveAdapter",
            },
        ],
        description: "A new paradigm for end-to-end autonomous driving without causal confusion issue.",
        keys: ['end_to_end_ad'],
    },
    {
        title: "Think Twice before Driving: Towards Scalable Decoders for End-to-End Autonomous Driving",
        link: "https://openaccess.thecvf.com/content/CVPR2023/html/Jia_Think_Twice_Before_Driving_Towards_Scalable_Decoders_for_End-to-End_Autonomous_CVPR_2023_paper.html",
        image: "/assets/publication/thinktwice.jpg",
        author: "Xiaosong Jia, Penghao Wu, Li Chen, Jiangwei Xie, Conghui He, Junchi Yan, Hongyang Li",
        note: "CVPR 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/opendrivelab/thinktwice?style=social",
        starlink: "https://github.com/OpenDriveLab/ThinkTwice",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/ThinkTwice",
            },
        ],
        description: "A scalable decoder paradigm that generates the future trajectory and action of the ego vehicle for end-to-end autonomous driving.",
        keys: ['end_to_end_ad'],
    },
    {
        title: "LLM4Drive: A Survey of Large Language Models for Autonomous Driving",
        link: "https://arxiv.org/abs/2311.01043",
        image: "/assets/publication/llm4drive.jpg",
        author: "Zhenjie Yang, Xiaosong Jia, Hongyang Li, Junchi Yan",
        note: "arXiv 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/Thinklab-SJTU/Awesome-LLM4AD?style=social",
        starlink: "https://github.com/Thinklab-SJTU/Awesome-LLM4AD",
        icon: [
            {
                type: "github",
                link: "https://github.com/Thinklab-SJTU/Awesome-LLM4AD",
            },
        ],
        description: "A collection of research papers about LLM-for-Autonomous-Driving (LLM4AD).",
        keys: ['end_to_end_ad', 'survey'],
    },
    {
        title: "Policy Pre-Training for End-to-End Autonomous Driving via Self-Supervised Geometric Modeling",
        link: "https://arxiv.org/abs/2301.01006",
        image: "/assets/publication/ppgeo.jpg",
        author: "Penghao Wu, Li Chen, Hongyang Li, Xiaosong Jia, Junchi Yan, Yu Qiao",
        note: "ICLR 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/opendrivelab/ppgeo?style=social",
        starlink: "https://github.com/opendrivelab/ppgeo",
        icon: [
            {
                type: "github",
                link: "https://github.com/opendrivelab/ppgeo",
            },
            {
                type: "slides",
                link: "https://docs.google.com/presentation/d/1d0MGh3XCxuZujtYgZ0sr6xsAKZ4uS50p/edit?usp=sharing&ouid=118212253182146260973&rtpof=true&sd=true",
            },
        ],
        description: "An intuitive and straightforward fully self-supervised framework curated for the policy pre-training in visuomotor driving.",
        keys: ['end_to_end_ad'],
    },
    {
        title: "Trajectory-guided Control Prediction for End-to-end Autonomous Driving: A Simple yet Strong Baseline",
        link: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/286a371d8a0a559281f682f8fbf89834-Abstract-Conference.html",
        image: "/assets/publication/tcp.jpg",
        author: "Penghao Wu, Xiaosong Jia, Li Chen, Junchi Yan, Hongyang Li, Yu Qiao",
        note: "NeurIPS 2022",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/TCP?style=social",
        starlink: "https://github.com/OpenDriveLab/TCP",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/TCP",
            },
            {
                type: "zhihu",
                link: "https://zhuanlan.zhihu.com/p/532665469",
            },
        ],
        description: "Take the initiative to explore the combination of controller based on a planned trajectory and perform control prediction.",
        keys: ['end_to_end_ad'],
    },
    {
        title: "ST-P3: End-to-End Vision-Based Autonomous Driving via Spatial-Temporal Feature Learning",
        link: "https://link.springer.com/chapter/10.1007/978-3-031-19839-7_31",
        image: "/assets/publication/stp3.jpg",
        author: "Shengchao Hu, Li Chen, Penghao Wu, Hongyang Li, Junchi Yan, Dacheng Tao",
        note: "ECCV 2022",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/st-p3?style=social",
        starlink: "https://github.com/OpenDriveLab/st-p3",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/st-p3",
            },
            {
                type: "zhihu",
                link: "https://zhuanlan.zhihu.com/p/544387122",
            },
        ],
        description: "A spatial-temporal feature learning scheme towards a set of more representative features for perception, prediction and planning tasks simultaneously.",
        keys: ['end_to_end_ad'],
    },
    {
        title: "Test-time Correction with Human Feedback: An Online 3D Detection System via Visual Prompting",
        link: "https://arxiv.org/abs/2412.07768",
        image: "/assets/publication/ttc.jpg",
        author: "Zetong Yang, Hanxue Zhang, Yanan Sun, Li Chen, Fei Xia, Fatma Güney, Hongyang Li",
        note: "arXiv 2024",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
            {
                type: "github",
                link: "",
            },
        ],
        description: "",
        keys: ['cv_at_scale'],
    },
    {
        title: "FastMAC: Stochastic Spectral Sampling of Correspondence Graph",
        link: "https://arxiv.org/abs/2403.08770",
        image: "/assets/publication/FastMAC.jpg",
        author: "Yifei Zhang, Hao Zhao, Hongyang Li, Siheng Chen",
        note: "CVPR 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/Forrest-110/FastMAC?style=social",
        starlink: "https://github.com/Forrest-110/FastMAC",
        icon: [
            {
                type: "github",
                link: "https://github.com/Forrest-110/FastMAC",
            },
        ],
        description: "",
        keys: ['cv_at_scale'],
    },
    {
        title: "Referred by Multi-Modality: A Unified Temporal Transformer for Video Object Segmentation",
        link: "https://arxiv.org/abs/2305.16318",
        image: "/assets/publication/mutr.jpg",
        author: "Shilin Yan, Renrui Zhang, Ziyu Guo, Wenchao Chen, Wei Zhang, Hongyang Li, Yu Qiao, Zhongjiang He, Peng Gao",
        note: "AAAI 2024",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenGVLab/MUTR?style=social",
        starlink: "https://github.com/OpenGVLab/MUTR",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenGVLab/MUTR",
            },
        ],
        description: "",
        keys: ['cv_at_scale'],
    },
    {
        title: "Stare at What You See: Masked Image Modeling without Reconstruction",
        link: "https://openaccess.thecvf.com/content/CVPR2023/html/Xue_Stare_at_What_You_See_Masked_Image_Modeling_Without_Reconstruction_CVPR_2023_paper.html",
        image: "/assets/publication/maskalign.jpg",
        author: "Hongwei Xue, Peng Gao, Hongyang Li, Yu Qiao, Hao Sun, Houqiang Li, Jiebo Luo",
        note: "CVPR 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/OpenDriveLab/maskalign?style=social",
        starlink: "https://github.com/OpenDriveLab/maskalign",
        icon: [
            {
                type: "github",
                link: "https://github.com/OpenDriveLab/maskalign",
            },
        ],
        description: "An efficient MIM paradigm MaskAlign and a Dynamic Alignment module to apply learnable alignment to tackle the problem of input inconsistency.",
        keys: ['cv_at_scale'],
    },
    {
        title: "Mimic before Reconstruct: Enhancing Masked Autoencoders with Feature Mimicking",
        link: "https://link.springer.com/article/10.1007/s11263-023-01898-4",
        image: "/assets/publication/mimic.jpg",
        author: "Peng Gao, Renrui Zhang, Rongyao Fang, Ziyi Lin, Hongyang Li, Hongsheng Li, Qiao Yu",
        note: "IJCV 2023",
        noteoption: '',
        star: "https://img.shields.io/github/stars/Alpha-VL/ConvMAE?style=social",
        starlink: "https://github.com/Alpha-VL/ConvMAE",
        icon: [
            {
                type: "github",
                link: "https://github.com/Alpha-VL/ConvMAE",
            },
        ],
        description: "Introducing high-level and low-level representations to MAE without interference during pre-training.",
        keys: ['cv_at_scale'],
    },
    {
        title: "Align Representations With Base: A New Approach to Self-Supervised Learning",
        link: "https://openaccess.thecvf.com/content/CVPR2022/html/Zhang_Align_Representations_With_Base_A_New_Approach_to_Self-Supervised_Learning_CVPR_2022_paper.html",
        image: "/assets/publication/arb.jpg",
        author: "Shaofeng Zhang, Lyn Qiu, Feng Zhu, Junchi Yan, Hengrui Zhang, Rui Zhao, Hongyang Li, Xiaokang Yang",
        note: "CVPR 2022",
        noteoption: '',
        star: "",
        starlink: "",
        icon: [
            {
                type: "github",
                link: "",
            },
        ],
        description: "",
        keys: ['cv_at_scale'],
    },
];
