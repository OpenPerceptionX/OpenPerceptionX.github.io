# 网站技术方案 
- React
- Next.js
- Typescript
- Tailwind CSS / shadcn


# General

### Style
- ```m-``` & ```p-``` use 6 / 12 /24
- ```scroll-mt-32```
- note in website ```text-xs```
- ```rounded-sm```
- breakpoint: ```md``` / ```xl``` / ```3xl```
- black color: ```#0d0d0d```
- max width: ```max-w-5xl``` / ```max-w-7xl```
- ```Link```: ```target={xxx.startsWith('http') ? '_blank' : '_self'}```
- text: ```leading-relaxed```

### Note
- use ```<Link>``` instead of ```<a>```
- use ```<Image>``` instead of ```<img>```
- use ```<div><Image></div>``` instead of ```<div className='background-image'></div>```
- <FadeIn> for animation of all foreground elements, note that it could probabilistically change layout, check everytime when add this



# dev

### Setup
- install ```npm```
- ```npm install``` to install or update all dependencies

### Preview
- ```npm run dev```

### Deploy
- Simply push the code to the GitHub and it will be done automatically.



# 图像要求
- upload to corresponding folder in [https://github.com/MMLABassets/MMLABassets.github.io](https://github.com/MMLABassets/MMLABassets.github.io) / access via ```https://mmlabassets.github.io/*```
- reduce image size -> use [https://www.photopea.com/](https://www.photopea.com/) to reduce image quality, normally 90%

![image](https://github.com/user-attachments/assets/2d0062bf-65ea-44f5-9511-b4a3b649998a)

### Member
- full: 512 x 512 / JPG / [name]_[surname]_f.jpg, e.g. ping_luo_f.jpg
- compressed: 384 x 384 / JPG / ~20kb / [name]_[surname]_c.jpg, e.g. ping_luo_c.jpg

### Open Source
- long side approx. 512 / JPG / 30kb
- without margin / 紅框為圖像邊界
  
| ✅ | ✖️ |
|---|---|
| ![image](https://github.com/user-attachments/assets/96c2db29-e206-4850-b956-6f47a460c5a0) | ![image](https://github.com/user-attachments/assets/6a649dfe-3211-48ec-bcfa-d974db25c23d) |
