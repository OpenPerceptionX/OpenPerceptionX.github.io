$(function () {
    // 定义的数据
    var allData_0 = [
        {
            "Organization": "NVIDIA",
            "Country" : "/style/cvpr2023/img/country/USA.svg",
            "Rank": "1<img src='/style/cvpr2023/img/rank01.png' style='padding: 0px 0px 0px 5px; width: 20px; user-select: none;'/><img src='/style/cvpr2023/img/blomb1.png' style='padding: 0px 0px 0px 5px; width: 20px; user-select: none;'/>",
            "team": "NVOCC (FB-OCC) <br> <a href=\"/e2ead/AD23Challenge/Track_3_NVOCC.pdf\">[paper]</a>",
            "mIoU": 54.19,
            "others": 28.95,
            "barrier": 57.98,
            "bicycle": 46.4,
            "bus": 52.36,
            "car": 63.07,
            "construction_vehicle": 35.68,
            "motorcycle": 48.81,
            "pedestrian": 42.98,
            "traffic_cone": 41.75,
            "trailer": 60.82,
            "truck": 49.56,
            "driveable_surface": 87.29,
            "other_flat": 58.29,
            "sidewalk": 65.93,
            "terrain": 63.3,
            "manmade": 64.28,
            "vegetation": 53.76,
            "Authors": "Zhiqi Li, Zhiding Yu, David Austin, Mingsheng Fang, Shiyi Li, Jan Kautz, Jose M. Alvarez",
            "date": "2023-06-01",
            "option": "Yes",
            "option2": "No"
        },
        {
            "Organization": "42dot",
            "Country" : "/style/cvpr2023/img/country/KOR.svg",
            "Rank": "2<img src='/style/cvpr2023/img/rank02.png' style='padding: 0px 0px 0px 5px; width: 20px; user-select: none;'/>",
            "team": "42dot (MiLO) <br><a href=\"/e2ead/AD23Challenge/Track_3_42dot.pdf\">[paper]</a>",
            "mIoU": 52.45,
            "others": 27.8,
            "barrier": 56.28,
            "bicycle": 42.62,
            "bus": 50.27,
            "car": 61.01,
            "construction_vehicle": 35.41,
            "motorcycle": 47.97,
            "pedestrian": 38.9,
            "traffic_cone": 40.29,
            "trailer": 56.66,
            "truck": 47.03,
            "driveable_surface": 86.96,
            "other_flat": 57.48,
            "sidewalk": 63.64,
            "terrain": 62.53,
            "manmade": 63,
            "vegetation": 53.74,
            "Authors": "Thang Vu, Jung-Hee Kim, Myeongjin Kim, Seokwoo Jung, Seong-Gyun Jeong",
            "date": "2023-06-01"
        },
        {
            "Organization": "Xiaomi Car, Peking University<br>小米汽车, 北京大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 3,
            "team": "UniOcc (final) <br><a href=\"/e2ead/AD23Challenge/Track_3_UniOcc.pdf\">[paper]</a>",
            "mIoU": 51.27,
            "others": 26.94,
            "barrier": 56.17,
            "bicycle": 39.55,
            "bus": 49.4,
            "car": 60.42,
            "construction_vehicle": 35.51,
            "motorcycle": 44.77,
            "pedestrian": 42.96,
            "traffic_cone": 38.45,
            "trailer": 59.33,
            "truck": 45.9,
            "driveable_surface": 83.9,
            "other_flat": 53.53,
            "sidewalk": 59.45,
            "terrain": 56.58,
            "manmade": 63.82,
            "vegetation": 54.98,
            "Authors": "Mingjie Pan, Li Liu, Jiaming Liu, Peixiang Huang, Longlong Wang, Shaoqing Xu, Zhiyi Lai, Shanghang Zhang, Kuiyuan Yang",
            "date": "2023-05-31"
        },
        {
            "Organization": "SAIC AI Lab<br>上汽 AI LAB",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 4,
            "team": "occ-heiheihei <br><a href=\"/e2ead/AD23Challenge/Track_3_occ-heiheihei.pdf\">[paper]</a>",
            "mIoU": 49.36,
            "others": 28.43,
            "barrier": 54.49,
            "bicycle": 39.04,
            "bus": 45.45,
            "car": 59.15,
            "construction_vehicle": 32.05,
            "motorcycle": 43.46,
            "pedestrian": 36.33,
            "traffic_cone": 40.72,
            "trailer": 51.67,
            "truck": 43.73,
            "driveable_surface": 84.97,
            "other_flat": 57.03,
            "sidewalk": 61.38,
            "terrain": 56.95,
            "manmade": 57.95,
            "vegetation": 46.26,
            "Authors": "Yangyang Ding, Luying Huang, Jiachen Zhong",
            "date": "2023-06-01"
        },
        {
            "Organization": "Harbin Institute of Technology<br>哈尔滨工业大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": "5<img src='/style/cvpr2023/img/blomb1.png' style='padding: 0px 0px 0px 5px; width: 20px; user-select: none;'/>",
            "team": "occ_transformer <br><a href=\"/e2ead/AD23Challenge/Track_3_occ_transformer.pdf\">[paper]</a>",
            "mIoU": 49.23,
            "others": 26.91,
            "barrier": 53.57,
            "bicycle": 39.53,
            "bus": 47.56,
            "car": 59.54,
            "construction_vehicle": 32.59,
            "motorcycle": 44.34,
            "pedestrian": 37.36,
            "traffic_cone": 37.28,
            "trailer": 54.81,
            "truck": 44.7,
            "driveable_surface": 84.61,
            "other_flat": 55.15,
            "sidewalk": 60.34,
            "terrain": 56.35,
            "manmade": 57.14,
            "vegetation": 45.04,
            "Authors": "Jian Liu, Sipeng Zhang, Chuixin Kong, Wenyuan Zhang, Yuhang Wu, Yikang Ding, Borun Xu, Ruibo Ming, Donglai Wei, Xianming Liu",
            "date": "2023-06-01"
        },
        {
            "Organization": "Huawei Noah's Ark Lab<br>华为诺亚方舟实验室",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 6,
            "team": "CakeCake (Noah CV Lab - POP)",
            "mIoU": 49.21,
            "others": 27.71,
            "barrier": 53.99,
            "bicycle": 37.6,
            "bus": 47.27,
            "car": 59.1,
            "construction_vehicle": 33.03,
            "motorcycle": 42.14,
            "pedestrian": 35.99,
            "traffic_cone": 38.17,
            "trailer": 54.62,
            "truck": 43.58,
            "driveable_surface": 85.18,
            "other_flat": 55.57,
            "sidewalk": 60.92,
            "terrain": 57.66,
            "manmade": 57.63,
            "vegetation": 46.34,
            "date": "2023-06-01"
        },
        {
            "Organization": "University of Electronic Science and Technology of China<br>电子科技大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 7,
            "team": "sdada (TEST)",
            "mIoU": 49.12,
            "others": 26.21,
            "barrier": 54.14,
            "bicycle": 32.69,
            "bus": 44.9,
            "car": 59.14,
            "construction_vehicle": 31.97,
            "motorcycle": 40.46,
            "pedestrian": 33.75,
            "traffic_cone": 36.31,
            "trailer": 51.86,
            "truck": 42.32,
            "driveable_surface": 86.58,
            "other_flat": 57.53,
            "sidewalk": 62.38,
            "terrain": 60.1,
            "manmade": 62.28,
            "vegetation": 52.49,
            "date": "2023-06-01"
        },
        {
            "Organization": "Zhejiang University, University of Glasgow<br>浙江大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 8,
            "team": "LSS-Query",
            "mIoU": 49.02,
            "others": 27.18,
            "barrier": 54.22,
            "bicycle": 36.1,
            "bus": 48.26,
            "car": 59.48,
            "construction_vehicle": 29.84,
            "motorcycle": 42.52,
            "pedestrian": 36.25,
            "traffic_cone": 36.09,
            "trailer": 54.67,
            "truck": 44.62,
            "driveable_surface": 85.14,
            "other_flat": 56.59,
            "sidewalk": 61.23,
            "terrain": 58.37,
            "manmade": 57.06,
            "vegetation": 45.77,
            "date": "2023-06-01"
        },
        {
            "Organization": "Xi'an Jiaotong University<br>西安交通大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 9,
            "team": "JUST Coding",
            "mIoU": 48.69,
            "others": 25.83,
            "barrier": 52.43,
            "bicycle": 37.86,
            "bus": 43.66,
            "car": 58.38,
            "construction_vehicle": 32.32,
            "motorcycle": 42.49,
            "pedestrian": 34.22,
            "traffic_cone": 36.16,
            "trailer": 50.91,
            "truck": 42.76,
            "driveable_surface": 85.71,
            "other_flat": 53.92,
            "sidewalk": 61.18,
            "terrain": 59.58,
            "manmade": 59.93,
            "vegetation": 50.45,
            "date": "2023-06-01"
        },
        {
            "Organization": "Institute of Computing Technology Chinese Academy of Sciences<br>中国科学院计算技术研究所",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 10,
            "team": "Simple Occ",
            "mIoU": 48.58,
            "others": 24.84,
            "barrier": 52.75,
            "bicycle": 36.91,
            "bus": 46.99,
            "car": 59.21,
            "construction_vehicle": 33.58,
            "motorcycle": 39.93,
            "pedestrian": 34.33,
            "traffic_cone": 35.01,
            "trailer": 53.69,
            "truck": 44.4,
            "driveable_surface": 85.83,
            "other_flat": 54.65,
            "sidewalk": 61.21,
            "terrain": 57.51,
            "manmade": 57.53,
            "vegetation": 47.46,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 11,
            "team": "OccNeXt",
            "mIoU": 48.05,
            "others": 27.19,
            "barrier": 51.58,
            "bicycle": 39.53,
            "bus": 44.33,
            "car": 58.1,
            "construction_vehicle": 32.76,
            "motorcycle": 43.15,
            "pedestrian": 35.13,
            "traffic_cone": 38.34,
            "trailer": 51.62,
            "truck": 43.51,
            "driveable_surface": 83.31,
            "other_flat": 53.23,
            "sidewalk": 59.26,
            "terrain": 55.65,
            "manmade": 55.54,
            "vegetation": 44.69,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 12,
            "team": "ThreeNewHand",
            "mIoU": 48.02,
            "others": 27.27,
            "barrier": 53.06,
            "bicycle": 33.54,
            "bus": 44.25,
            "car": 58.3,
            "construction_vehicle": 35.02,
            "motorcycle": 39.34,
            "pedestrian": 32.92,
            "traffic_cone": 36.69,
            "trailer": 49.47,
            "truck": 42.98,
            "driveable_surface": 84.86,
            "other_flat": 55.85,
            "sidewalk": 61.41,
            "terrain": 56.89,
            "manmade": 58.38,
            "vegetation": 46.14,
            "date": "2023-06-01"
        },
        {
            "Organization": "Zhejiang Lab<br>之江实验室",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 13,
            "team": "HuLuWa",
            "mIoU": 47.86,
            "others": 27.48,
            "barrier": 53.14,
            "bicycle": 36.72,
            "bus": 44.08,
            "car": 56.58,
            "construction_vehicle": 32.49,
            "motorcycle": 44.6,
            "pedestrian": 35.14,
            "traffic_cone": 36.99,
            "trailer": 50.92,
            "truck": 41.99,
            "driveable_surface": 83.35,
            "other_flat": 53.22,
            "sidewalk": 58.44,
            "terrain": 53.78,
            "manmade": 57.68,
            "vegetation": 46.95,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 14,
            "team": "SYSU Alpha Cat",
            "mIoU": 47.75,
            "others": 27.08,
            "barrier": 53.06,
            "bicycle": 36.27,
            "bus": 43.67,
            "car": 57.76,
            "construction_vehicle": 31.23,
            "motorcycle": 41.09,
            "pedestrian": 33.99,
            "traffic_cone": 35.62,
            "trailer": 51.17,
            "truck": 42.88,
            "driveable_surface": 84.11,
            "other_flat": 54.6,
            "sidewalk": 58.95,
            "terrain": 56,
            "manmade": 57.23,
            "vegetation": 47.06,
            "date": "2023-06-01"
        },
        {
            "Organization": "Shandong University of Science and Technology<br>山东科技大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 15,
            "team": "Topacc (DA ER OCC)",
            "mIoU": 47.72,
            "others": 25.94,
            "barrier": 53.12,
            "bicycle": 33.62,
            "bus": 44.03,
            "car": 57.76,
            "construction_vehicle": 30.24,
            "motorcycle": 42.64,
            "pedestrian": 32.92,
            "traffic_cone": 33.92,
            "trailer": 53.75,
            "truck": 41.87,
            "driveable_surface": 84.79,
            "other_flat": 54.58,
            "sidewalk": 59.36,
            "terrain": 56.59,
            "manmade": 58.31,
            "vegetation": 47.84,
            "date": "2023-05-31"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 16,
            "team": "VinAI",
            "mIoU": 47.62,
            "others": 26.78,
            "barrier": 52.44,
            "bicycle": 36.1,
            "bus": 44.86,
            "car": 57.76,
            "construction_vehicle": 32.28,
            "motorcycle": 41.1,
            "pedestrian": 34.89,
            "traffic_cone": 37.22,
            "trailer": 50.59,
            "truck": 41.53,
            "driveable_surface": 84.18,
            "other_flat": 56.07,
            "sidewalk": 59.96,
            "terrain": 55.22,
            "manmade": 54.97,
            "vegetation": 43.55,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 17,
            "team": "IEI_AP (a'a)",
            "mIoU": 47.51,
            "others": 25.06,
            "barrier": 51.33,
            "bicycle": 36.39,
            "bus": 45.58,
            "car": 55.75,
            "construction_vehicle": 30.37,
            "motorcycle": 39.5,
            "pedestrian": 32.81,
            "traffic_cone": 34.38,
            "trailer": 53.23,
            "truck": 41.41,
            "driveable_surface": 85.73,
            "other_flat": 57.32,
            "sidewalk": 61.74,
            "terrain": 58.13,
            "manmade": 54.37,
            "vegetation": 44.64,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 18,
            "team": "Turing Brain Team <br> <a href=\"/e2ead/AD23Challenge/Track_3_Turing_Brain_Team.pdf\">[paper]</a>",
            "mIoU": 47.36,
            "others": 26.18,
            "barrier": 51.63,
            "bicycle": 33.29,
            "bus": 44.65,
            "car": 57.8,
            "construction_vehicle": 28.56,
            "motorcycle": 39.99,
            "pedestrian": 31.6,
            "traffic_cone": 35.16,
            "trailer": 52.96,
            "truck": 43.21,
            "driveable_surface": 83.87,
            "other_flat": 55.94,
            "sidewalk": 60.45,
            "terrain": 56.79,
            "manmade": 57.21,
            "vegetation": 45.77,
            "Authors": "Yuichi Inoue, Daiki Shiotsuka",
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 19,
            "team": "UM-DriveAI",
            "mIoU": 47.19,
            "others": 26.47,
            "barrier": 52.71,
            "bicycle": 32.9,
            "bus": 41.71,
            "car": 57.55,
            "construction_vehicle": 30.17,
            "motorcycle": 37.16,
            "pedestrian": 32.26,
            "traffic_cone": 36.31,
            "trailer": 49.61,
            "truck": 41.08,
            "driveable_surface": 84.87,
            "other_flat": 55.24,
            "sidewalk": 60.42,
            "terrain": 57.4,
            "manmade": 57.98,
            "vegetation": 48.34,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 20,
            "team": "Brave3D (VQFormer)",
            "mIoU": 47.16,
            "others": 23.37,
            "barrier": 50.28,
            "bicycle": 36.02,
            "bus": 47.32,
            "car": 59.61,
            "construction_vehicle": 31.58,
            "motorcycle": 39.59,
            "pedestrian": 34.58,
            "traffic_cone": 33.83,
            "trailer": 52.25,
            "truck": 43.29,
            "driveable_surface": 83.82,
            "other_flat": 55.81,
            "sidewalk": 59.41,
            "terrain": 53.81,
            "manmade": 53.48,
            "vegetation": 43.61,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 21,
            "team": "LTS (LTS)",
            "mIoU": 47.1,
            "others": 27.25,
            "barrier": 52.5,
            "bicycle": 35.91,
            "bus": 42.18,
            "car": 57.01,
            "construction_vehicle": 32.11,
            "motorcycle": 41.07,
            "pedestrian": 34.37,
            "traffic_cone": 37.78,
            "trailer": 49.68,
            "truck": 39.67,
            "driveable_surface": 83.84,
            "other_flat": 55.08,
            "sidewalk": 58.77,
            "terrain": 54.35,
            "manmade": 54.56,
            "vegetation": 44.54,
            "date": "2023-05-31"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 22,
            "team": "Occ666 (Occ-BEV)",
            "mIoU": 45.92,
            "others": 26.21,
            "barrier": 53.06,
            "bicycle": 33.41,
            "bus": 42.77,
            "car": 56.57,
            "construction_vehicle": 28.99,
            "motorcycle": 39.92,
            "pedestrian": 32.31,
            "traffic_cone": 34.89,
            "trailer": 49.59,
            "truck": 40.28,
            "driveable_surface": 82.88,
            "other_flat": 52.29,
            "sidewalk": 57.77,
            "terrain": 53.58,
            "manmade": 53.94,
            "vegetation": 42.25,
            "date": "2023-06-01"
        },
        {
            "Organization": "The Hong Kong University of Science and Technology<br>香港科技大学",
            "Country" : "/style/cvpr2023/img/country/HK.svg",
            "Rank": 23,
            "team": "occ-dd (Intern_occ)",
            "mIoU": 45.51,
            "others": 23.5,
            "barrier": 49.62,
            "bicycle": 31.06,
            "bus": 41.82,
            "car": 55.88,
            "construction_vehicle": 31.64,
            "motorcycle": 37.15,
            "pedestrian": 30.15,
            "traffic_cone": 33.14,
            "trailer": 47.71,
            "truck": 40.7,
            "driveable_surface": 84.47,
            "other_flat": 53.11,
            "sidewalk": 58.59,
            "terrain": 55.24,
            "manmade": 54.84,
            "vegetation": 44.98,
            "date": "2023-05-31"
        },
        {
            "Organization": "Hikvision<br>海康威视",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 24,
            "team": "Sindri (RMMC-Occ(Intern-small))",
            "mIoU": 45,
            "others": 21.96,
            "barrier": 50.5,
            "bicycle": 35.58,
            "bus": 45.44,
            "car": 57.77,
            "construction_vehicle": 28.41,
            "motorcycle": 40.69,
            "pedestrian": 34.7,
            "traffic_cone": 32.5,
            "trailer": 49.41,
            "truck": 43.31,
            "driveable_surface": 81.07,
            "other_flat": 50.64,
            "sidewalk": 56.09,
            "terrain": 50.22,
            "manmade": 48.56,
            "vegetation": 38.12,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 25,
            "team": "yushan",
            "mIoU": 44.4,
            "others": 24.58,
            "barrier": 49.19,
            "bicycle": 30.15,
            "bus": 41.49,
            "car": 55.11,
            "construction_vehicle": 28.58,
            "motorcycle": 36.79,
            "pedestrian": 30.56,
            "traffic_cone": 31.58,
            "trailer": 47.5,
            "truck": 40.43,
            "driveable_surface": 82.48,
            "other_flat": 50.4,
            "sidewalk": 56.71,
            "terrain": 53.22,
            "manmade": 53.35,
            "vegetation": 42.64,
            "date": "2023-05-28"
        },
        {
            "Organization": "University of Science and Technology of China<br>中国科学技术大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 26,
            "team": "Skyship (stbase-512x1408)",
            "mIoU": 44.21,
            "others": 23.98,
            "barrier": 48.96,
            "bicycle": 34.36,
            "bus": 40.46,
            "car": 53.91,
            "construction_vehicle": 30.67,
            "motorcycle": 39.8,
            "pedestrian": 32.07,
            "traffic_cone": 34.03,
            "trailer": 46.25,
            "truck": 38.32,
            "driveable_surface": 82.18,
            "other_flat": 50.94,
            "sidewalk": 55.47,
            "terrain": 50.72,
            "manmade": 50.42,
            "vegetation": 38.93,
            "date": "2023-05-31"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 27,
            "team": "ad (LSS)",
            "mIoU": 43.93,
            "others": 20.34,
            "barrier": 49.46,
            "bicycle": 24.48,
            "bus": 41.04,
            "car": 55.91,
            "construction_vehicle": 26.33,
            "motorcycle": 36.57,
            "pedestrian": 27.91,
            "traffic_cone": 31.21,
            "trailer": 47.6,
            "truck": 39.16,
            "driveable_surface": 83.97,
            "other_flat": 55.09,
            "sidewalk": 58.69,
            "terrain": 53.74,
            "manmade": 53,
            "vegetation": 42.27,
            "date": "2023-05-17"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 28,
            "team": "TaiKuLa (ensemble_67)",
            "mIoU": 43.52,
            "others": 22.35,
            "barrier": 48.92,
            "bicycle": 27.25,
            "bus": 41.35,
            "car": 55.43,
            "construction_vehicle": 26.76,
            "motorcycle": 35.29,
            "pedestrian": 29.34,
            "traffic_cone": 30.35,
            "trailer": 47.74,
            "truck": 38.83,
            "driveable_surface": 82.55,
            "other_flat": 50.54,
            "sidewalk": 56.29,
            "terrain": 51.99,
            "manmade": 53.48,
            "vegetation": 41.39,
            "date": "2023-05-31"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 29,
            "team": "GeWu (Multitask)",
            "mIoU": 43.22,
            "others": 23.76,
            "barrier": 48.46,
            "bicycle": 30.48,
            "bus": 40.82,
            "car": 53.87,
            "construction_vehicle": 27.39,
            "motorcycle": 36.27,
            "pedestrian": 29.64,
            "traffic_cone": 31.97,
            "trailer": 45.12,
            "truck": 37.98,
            "driveable_surface": 81.68,
            "other_flat": 49.99,
            "sidewalk": 55.55,
            "terrain": 51.3,
            "manmade": 51,
            "vegetation": 39.45,
            "date": "2023-05-28"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 30,
            "team": "sdfasdf (InternImage)",
            "mIoU": 42.38,
            "others": 22.28,
            "barrier": 46.57,
            "bicycle": 29.66,
            "bus": 37.03,
            "car": 50.96,
            "construction_vehicle": 26.03,
            "motorcycle": 35.36,
            "pedestrian": 28.04,
            "traffic_cone": 32.76,
            "trailer": 43.98,
            "truck": 37,
            "driveable_surface": 82.82,
            "other_flat": 54.21,
            "sidewalk": 57.73,
            "terrain": 52.98,
            "manmade": 46.67,
            "vegetation": 36.34,
            "date": "2023-05-15"
        },
        {
            "Organization": "Ulsan National Institution of Science and Technology",
            "Country" : "/style/cvpr2023/img/country/KOR.svg",
            "Rank": 31,
            "team": "3DVisionLab (Final)",
            "mIoU": 42.11,
            "others": 21.92,
            "barrier": 46.5,
            "bicycle": 31.45,
            "bus": 40.76,
            "car": 53.07,
            "construction_vehicle": 24.32,
            "motorcycle": 35.8,
            "pedestrian": 31.41,
            "traffic_cone": 30.12,
            "trailer": 46.18,
            "truck": 38.03,
            "driveable_surface": 80.54,
            "other_flat": 47.25,
            "sidewalk": 53.82,
            "terrain": 51.48,
            "manmade": 46.82,
            "vegetation": 36.45,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 32,
            "team": "TwoNewHands (bev det e15)",
            "mIoU": 41.9,
            "others": 22.04,
            "barrier": 46.96,
            "bicycle": 28.14,
            "bus": 38.92,
            "car": 53.16,
            "construction_vehicle": 25.82,
            "motorcycle": 32.78,
            "pedestrian": 29.84,
            "traffic_cone": 30.88,
            "trailer": 44.29,
            "truck": 35.81,
            "driveable_surface": 81.28,
            "other_flat": 48.81,
            "sidewalk": 53.96,
            "terrain": 51,
            "manmade": 50.21,
            "vegetation": 38.48,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 33,
            "team": "Swin_L_640x1600 Ensemble_TTA",
            "mIoU": 41.42,
            "others": 22.53,
            "barrier": 44.96,
            "bicycle": 29.91,
            "bus": 35.87,
            "car": 50.35,
            "construction_vehicle": 23.88,
            "motorcycle": 33.87,
            "pedestrian": 27.89,
            "traffic_cone": 30.79,
            "trailer": 42.53,
            "truck": 35.98,
            "driveable_surface": 82.15,
            "other_flat": 52.94,
            "sidewalk": 57.16,
            "terrain": 52.33,
            "manmade": 45.6,
            "vegetation": 35.36,
            "date": "2023-05-12"
        },
        {
            "Organization": "University of Science and Technology of China<br>中国科学技术大学",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 34,
            "team": "Spirit of Optimus",
            "mIoU": 41.36,
            "others": 16.94,
            "barrier": 47.88,
            "bicycle": 29.7,
            "bus": 39.93,
            "car": 54.4,
            "construction_vehicle": 22.41,
            "motorcycle": 35.21,
            "pedestrian": 28.46,
            "traffic_cone": 29.77,
            "trailer": 48.14,
            "truck": 37.9,
            "driveable_surface": 81.08,
            "other_flat": 48.25,
            "sidewalk": 53.43,
            "terrain": 48.44,
            "manmade": 45.81,
            "vegetation": 35.42,
            "date": "2023-05-25"
        },
        {
            "Organization": "SIMIT<br>中国科学院上海微系统与信息技术研究所",
            "Country" : "/style/cvpr2023/img/country/CHN.svg",
            "Rank": 35,
            "team": "SIMIT (TripleBugs)",
            "mIoU": 40.21,
            "others": 22.5,
            "barrier": 44.06,
            "bicycle": 28.25,
            "bus": 36.12,
            "car": 51.1,
            "construction_vehicle": 23.27,
            "motorcycle": 35.22,
            "pedestrian": 27.78,
            "traffic_cone": 28.37,
            "trailer": 42.91,
            "truck": 33.31,
            "driveable_surface": 81.54,
            "other_flat": 48.87,
            "sidewalk": 53.26,
            "terrain": 49.68,
            "manmade": 43.34,
            "vegetation": 34.01,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 36,
            "team": "NLperception",
            "mIoU": 39.72,
            "others": 19.82,
            "barrier": 46.36,
            "bicycle": 26,
            "bus": 36.85,
            "car": 51.82,
            "construction_vehicle": 24.5,
            "motorcycle": 31.12,
            "pedestrian": 26.61,
            "traffic_cone": 26.62,
            "trailer": 43.15,
            "truck": 36.16,
            "driveable_surface": 79.83,
            "other_flat": 46.9,
            "sidewalk": 52.16,
            "terrain": 48.53,
            "manmade": 44.11,
            "vegetation": 34.7,
            "date": "2023-05-25"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 37,
            "team": "Cool_AV",
            "mIoU": 39.18,
            "others": 18.26,
            "barrier": 43.89,
            "bicycle": 29.66,
            "bus": 37.5,
            "car": 49.04,
            "construction_vehicle": 21.97,
            "motorcycle": 36.85,
            "pedestrian": 28.84,
            "traffic_cone": 29.12,
            "trailer": 39.25,
            "truck": 33.79,
            "driveable_surface": 76.41,
            "other_flat": 45.87,
            "sidewalk": 49.62,
            "terrain": 42.14,
            "manmade": 44.73,
            "vegetation": 39.07,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 38,
            "team": "LHWA-occ",
            "mIoU": 38.51,
            "others": 20.27,
            "barrier": 45.37,
            "bicycle": 24.33,
            "bus": 39.77,
            "car": 50.65,
            "construction_vehicle": 20.01,
            "motorcycle": 32.63,
            "pedestrian": 21.66,
            "traffic_cone": 22.47,
            "trailer": 44.74,
            "truck": 36.4,
            "driveable_surface": 74.11,
            "other_flat": 44.69,
            "sidewalk": 47.08,
            "terrain": 45.45,
            "manmade": 48.81,
            "vegetation": 36.17,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 39,
            "team": "KongMaster (occ)",
            "mIoU": 37.95,
            "others": 20.06,
            "barrier": 42.86,
            "bicycle": 25.7,
            "bus": 35.61,
            "car": 50.59,
            "construction_vehicle": 21.55,
            "motorcycle": 31.8,
            "pedestrian": 25.06,
            "traffic_cone": 25.16,
            "trailer": 41.07,
            "truck": 34.51,
            "driveable_surface": 77.88,
            "other_flat": 46.33,
            "sidewalk": 50.06,
            "terrain": 44.8,
            "manmade": 40.51,
            "vegetation": 31.55,
            "date": "2023-05-25"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 40,
            "team": "DMCV",
            "mIoU": 34.29,
            "others": 16.54,
            "barrier": 43.49,
            "bicycle": 24.65,
            "bus": 32.31,
            "car": 45.72,
            "construction_vehicle": 19.12,
            "motorcycle": 28.42,
            "pedestrian": 26.49,
            "traffic_cone": 25.79,
            "trailer": 33.66,
            "truck": 29.37,
            "driveable_surface": 69.42,
            "other_flat": 44.2,
            "sidewalk": 49.16,
            "terrain": 40.1,
            "manmade": 30.5,
            "vegetation": 23.92,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 41,
            "team": "mogumoguAI",
            "mIoU": 32.27,
            "others": 12.46,
            "barrier": 39.15,
            "bicycle": 1.94,
            "bus": 27.99,
            "car": 44.16,
            "construction_vehicle": 15.02,
            "motorcycle": 12.46,
            "pedestrian": 13.42,
            "traffic_cone": 18.32,
            "trailer": 32.7,
            "truck": 26.03,
            "driveable_surface": 78.83,
            "other_flat": 44.75,
            "sidewalk": 49.86,
            "terrain": 47.53,
            "manmade": 45.74,
            "vegetation": 38.23,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 42,
            "team": "fdocc",
            "mIoU": 24.05,
            "others": 12.41,
            "barrier": 35.23,
            "bicycle": 17.31,
            "bus": 28.57,
            "car": 37.8,
            "construction_vehicle": 11.3,
            "motorcycle": 26.5,
            "pedestrian": 16.19,
            "traffic_cone": 13.24,
            "trailer": 26.45,
            "truck": 22.94,
            "driveable_surface": 46.72,
            "other_flat": 33.12,
            "sidewalk": 29.32,
            "terrain": 16.36,
            "manmade": 20.96,
            "vegetation": 14.33,
            "date": "2023-05-29"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 43,
            "team": "lukavetoshkin (baseline_bevformer)",
            "mIoU": 23.7,
            "others": 10.22,
            "barrier": 36.77,
            "bicycle": 11.68,
            "bus": 29.93,
            "car": 38.88,
            "construction_vehicle": 10.35,
            "motorcycle": 22.05,
            "pedestrian": 16.18,
            "traffic_cone": 14.72,
            "trailer": 27.45,
            "truck": 23.11,
            "driveable_surface": 48.18,
            "other_flat": 33.07,
            "sidewalk": 29.81,
            "terrain": 17.66,
            "manmade": 19.02,
            "vegetation": 13.74,
            "date": "2023-05-31"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 44,
            "team": "Baseline-bevformer (Baseline)",
            "mIoU": 23.7,
            "others": 10.24,
            "barrier": 36.77,
            "bicycle": 11.7,
            "bus": 29.87,
            "car": 38.92,
            "construction_vehicle": 10.29,
            "motorcycle": 22.05,
            "pedestrian": 16.21,
            "traffic_cone": 14.69,
            "trailer": 27.44,
            "truck": 23.13,
            "driveable_surface": 48.19,
            "other_flat": 33.1,
            "sidewalk": 29.8,
            "terrain": 17.64,
            "manmade": 19.01,
            "vegetation": 13.75,
            "date": "2023-05-12"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 45,
            "team": "DADADADA",
            "mIoU": 23.35,
            "others": 11.44,
            "barrier": 31.9,
            "bicycle": 14.73,
            "bus": 30.91,
            "car": 36.93,
            "construction_vehicle": 12.06,
            "motorcycle": 24.24,
            "pedestrian": 15.12,
            "traffic_cone": 13.46,
            "trailer": 24.97,
            "truck": 23.32,
            "driveable_surface": 49,
            "other_flat": 33.46,
            "sidewalk": 30.24,
            "terrain": 16.45,
            "manmade": 16.01,
            "vegetation": 12.79,
            "date": "2023-05-31"
        },
        {
            "Organization": "Independent Researcher",
            "Country" : "/style/cvpr2023/img/country/DEU.svg",
            "Rank": 46,
            "team": "NaNny (LightGBM)",
            "mIoU": 14.31,
            "others": 6.76,
            "barrier": 22.79,
            "bicycle": 8.49,
            "bus": 25.98,
            "car": 28.37,
            "construction_vehicle": 8.34,
            "motorcycle": 14.59,
            "pedestrian": 12.78,
            "traffic_cone": 9.05,
            "trailer": 22.92,
            "truck": 18.06,
            "driveable_surface": 10.52,
            "other_flat": 10.58,
            "sidewalk": 7.75,
            "terrain": 6.14,
            "manmade": 17.23,
            "vegetation": 12.85,
            "date": "2023-06-01"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 47,
            "team": "leo yang",
            "mIoU": 13.35,
            "others": 8.42,
            "barrier": 15.14,
            "bicycle": 6.27,
            "bus": 15.5,
            "car": 27.61,
            "construction_vehicle": 2.89,
            "motorcycle": 12.08,
            "pedestrian": 9.97,
            "traffic_cone": 3.64,
            "trailer": 11.27,
            "truck": 11.31,
            "driveable_surface": 34.95,
            "other_flat": 17.23,
            "sidewalk": 18.39,
            "terrain": 9.2,
            "manmade": 13.92,
            "vegetation": 9.24,
            "date": "2023-05-21"
        },
        {
            "Organization": "-",
            "Country" : "/style/cvpr2023/img/country/blank.png",
            "Rank": 48,
            "team": "ARM330 (YOLOX_OCC)",
            "mIoU": 2.77,
            "others": 0.63,
            "barrier": 1.27,
            "bicycle": 0.75,
            "bus": 0.74,
            "car": 3.07,
            "construction_vehicle": 0.05,
            "motorcycle": 0.46,
            "pedestrian": 1.81,
            "traffic_cone": 1.36,
            "trailer": 0.45,
            "truck": 0.91,
            "driveable_surface": 20.43,
            "other_flat": 3.13,
            "sidewalk": 5.69,
            "terrain": 3.61,
            "manmade": 0.97,
            "vegetation": 1.69,
            "date": "2023-06-01"
        }
    ]
    // 每页显示数据量
    var page_0 = 10
    // 当前页
    var curPage_0 = 1
    var selected_data_0 = allData_0
    renderList(selected_data_0)
    // 总条目数
    var total_0 = selected_data_0.length
    // 总页数
    var pages_0 = Math.ceil(total_0 / page_0)
    // 渲染数据列表
    function num(i) {

        var n = (i*1).toFixed(2);
        return(n);
        }
        function filter(i) {
            if(i == '/style/cvpr2023/img/country/blank.png'){
                return('-')
            } else {
                return('<img src='+i+' style="width: 33px; user-select: none;"/>')
            }
        }
        function filter_undefined(i) {
            if (i == undefined) {
                return('-')
            } else {
                return(i)
            }
        }
    function filter_desc(i) {
        if (i == undefined) {
            return('-')
        } else {
            return(i)
        }
    }
    var perclass = $(document.getElementById("perclass")).val()
    function select_perclass(perclass, item) {
        if (perclass == "others") {
            return item.others
        }
        if (perclass == "barrier") {
            return item.barrier
        }
        if (perclass == "bicycle") {
            return item.bicycle
        }
        if (perclass == "bus") {
            return item.bus
        }
        if (perclass == "car") {
            return item.car
        }
        if (perclass == "construction_vehicle") {
            return item.construction_vehicle
        }
        if (perclass == "motorcycle") {
            return item.motorcycle
        }
        if (perclass == "pedestrian") {
            return item.pedestrian
        }
        if (perclass == "traffic_cone") {
            return item.traffic_cone
        }
        if (perclass == "trailer") {
            return item.trailer
        }
        if (perclass == "truck") {
            return item.truck
        }
        if (perclass == "driveable_surface") {
            return item.driveable_surface
        }
        if (perclass == "other_flat") {
            return item.other_flat
        }
        if (perclass == "sidewalk") {
            return item.sidewalk
        }
        if (perclass == "terrain") {
            return item.terrain
        }
        if (perclass == "manmade") {
            return item.manmade
        }
        if (perclass == "vegetation") {
            return item.vegetation
        }
    }
    document.getElementById("perclass").addEventListener("input", update_perclass);
    function update_perclass() {
        perclass = $(document.getElementById("perclass")).val()
        renderList(selected_data_0.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
        $(".table_list_0 tr th:nth-child(7)").click()
        $(".table_list_0 tr th:nth-child(5)").click()
    }
    function renderList(data) {
        // 总页数
        total_0 = selected_data_0.length
        pages_0 = Math.ceil(total_0 / page_0)
        $(".table_list_0 tbody tr:not(:last-child)").remove()
        data = data.slice((curPage_0 - 1) * page_0, page_0 * curPage_0)
        // 渲染列表数据
        data.forEach((item, index) => {
            var htmlStr = `<tr class="item">
        <td>${item.date}</td>
        <td>${item.team}</td>
        <td>${filter(item.Country)}</td>
        <td>${item.Organization}</td>
        <td><b>${num(item.mIoU)}</b></td>
        <td>${filter_undefined(item.option)}</td>
        <td>${filter_undefined(item.option2)}</td>
        <td>${num(select_perclass(perclass, item))}</td>
      </tr>
      <tr class="info">
      <td colspan="13">
          <p>
              <b>Authors:</b> &nbsp; ${filter_desc(item.Authors)}
          </p>
          <p>
                <b>Description:</b> &nbsp; ${filter_desc(item.Description)}
          </p>
      </td>
</tr>
      `
            $(htmlStr).insertBefore($(".page_0"))
        })
        // 初始化 分页数据
        $("#curpage_0").val(curPage_0)
        // 总页数渲染
        $("#total_0").text(pages_0)
    }
    // 根据name进行排序
    $(".table_list_0 tr th:nth-child(1)").click(function () {
        mysort($(this), 'date', selected_data_0)
    })
    $(".table_list_0 tr th:nth-child(5)").click(function () {
        mysort($(this), 'mIoU', selected_data_0)
    })
    $(".table_list_0 tr th:nth-child(8)").click(function () {
        mysort($(this), perclass, selected_data_0)
    })
    // 排序方法
    function mysort(obj, field, data) {
        obj.siblings("th").removeClass()
        if (obj.hasClass("asc") || [undefined, ''].includes(obj.attr("class"))) {
            obj.attr({ "class": "desc" })
            data.sort(function (a, b) {
                if (a[field] > b[field]) {
                    return -1;
                }
            });
        } else if (obj.hasClass("desc")) {
            obj.attr({ "class": "asc" })
            data.sort(function (a, b) {
                if (a[field] < b[field]) {
                    return -1;
                }
            });
        }
        renderList(data)
    }
    // 选择每页显示的数据量
    $("#pageOption_0").change(function () {
        page_0 = $(this).val()
        renderList(selected_data_0)
    })
    // 上一页
    $("#prev_0").click(function () {
        curPage_0--
        if (curPage_0 <= 0) {
            curPage_0 = 1;
            // $(this).prop('disabled', true)
        }
        // $("#next_0").prop('disabled', false)
        $("#curPage_0").val(curPage_0)
        renderList(selected_data_0)
    })
    // 下一页
    $("#next_0").click(function () {
        curPage_0++
        if (curPage_0 >= pages_0) {
            curPage_0 = pages_0;
            // $(this).prop('disabled', true)
        }
        // $("#prev_0").prop("disabled", false)
        $("#curPage_0").val(curPage_0)
        renderList(selected_data_0)
    })
    // 手动输入页码
    $("#curpage_0").change(function () {
        var inpVal = $(this).val()
        console.log(inpVal);
        if (inpVal <= 0) {
            curPage_0 = 1
            // $("#prev_0").prop("disabled", true);
            // $("#next_0").prop("disabled", false);
        } else if (inpVal > pages_0) {
            curPage_0 = pages_0
            // $("#next_0").prop("disabled", true);
            // $("#prev_0").prop("disabled", false);
        } else {
            // $("#next_0").prop("disabled", false);
            // $("#prev_0").prop("disabled", false);
            curPage_0 = inpVal
        }
        renderList(selected_data_0)
    })
    var inpVal_date = ''
    var inpVal_team = ''
    var selVal_opt1 = 'all'
    var selVal_opt2 = 'all'
    // 手动日期
    document.getElementById("date_search").addEventListener("input", searchdate);
    function searchdate() {
        inpVal_date = $(this).val()
        if (inpVal_date == '' && inpVal_team == '' && selVal_opt1 == 'all'  && selVal_opt2 == 'all') {
            selected_data_0 = allData_0
        } else {
            selected_data_0 = []
            allData_0.forEach(item => {
                if (item.date.includes(inpVal_date) && item.team.includes(inpVal_team) && opt1_macth(selVal_opt1, item.option) && opt1_macth(selVal_opt2, item.option2)) {
                    selected_data_0.push(item)
                }
            })
        }
        renderList(selected_data_0.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
    }
    // 手动队伍
    document.getElementById("team_search").addEventListener("input", searchteam);
    function searchteam() {
        inpVal_team = $(this).val()
        if (inpVal_date == '' && inpVal_team == '' && selVal_opt1 == 'all'  && selVal_opt2 == 'all') {
            selected_data_0 = allData_0
        } else {
            selected_data_0 = []
            allData_0.forEach(item => {
                if (item.date.includes(inpVal_date) && item.team.includes(inpVal_team) && opt1_macth(selVal_opt1, item.option) && opt1_macth(selVal_opt2, item.option2)) {
                    selected_data_0.push(item)
                }
            })
        }
        renderList(selected_data_0.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
    }
    // 筛选
    function opt1_macth(selected_option, entry_option) {
        if (selected_option == 'all') {
            return(true)
        }
        if (selected_option == 'Yes' && entry_option == 'Yes') {
            return(true)
        }
        if (selected_option == 'No' && entry_option == 'No') {
            return(true)
        }
        return(false)
    }
    $("#opt1").change(function () {
        selVal_opt1 = $(this).val()
        if (inpVal_date == '' && inpVal_team == '' && selVal_opt1 == 'all'  && selVal_opt2 == 'all') {
            selected_data_0 = allData_0
        } else {
            selected_data_0 = []
            allData_0.forEach(item => {
                if (item.date.includes(inpVal_date) && item.team.includes(inpVal_team) && opt1_macth(selVal_opt1, item.option) && opt1_macth(selVal_opt2, item.option2)) {
                    selected_data_0.push(item)
                }
            })
        }
        renderList(selected_data_0.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
    })
    $("#opt2").change(function () {
        selVal_opt2 = $(this).val()
        if (inpVal_date == '' && inpVal_team == '' && selVal_opt1 == 'all'  && selVal_opt2 == 'all') {
            selected_data_0 = allData_0
        } else {
            selected_data_0 = []
            allData_0.forEach(item => {
                if (item.date.includes(inpVal_date) && item.team.includes(inpVal_team) && opt1_macth(selVal_opt1, item.option) && opt1_macth(selVal_opt2, item.option2)) {
                    selected_data_0.push(item)
                }
            })
        }
        renderList(selected_data_0.slice((curPage_0 - 1) * page_0, page_0 * curPage_0))
    })
        // 详情信息显示
        $(".table_list_0").on("click",'.item',function(){
            $(this).next(".info").slideToggle(100).siblings(".info").hide()
            $(this).find("td:first-child").toggleClass("jt")
        })
    $(".table_list_0 tr th:nth-child(5)").click()
})