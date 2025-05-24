# 网站技术方案 
- React
- Next.js
- Tailwind CSS -> shadcn
- Typescript

# 开发相关
### Setup
- install ```npm```
- ```npm install``` to install or update all dependencies

### Preview
- ```npm run dev```

### Deploy
- Simply push the code to the GitHub and it will be done automatically.

### Note
- use ```<Link>``` instead of ```<a>```
- use ```<Image>``` instead of ```<img>```
- use ```<div><Image></div>``` instead of ```<div className='background-image'></div>```
- <FadeIn> for animation of all foreground elements, note that it could probabilistically change layout, check everytime when add this

### Sort data
- ```npx prettier --write "*.tsx"```
- ```.prettierrc.json```: 
```json
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```


# 收集信息
- 代码注意好缩进

- 类 json 相关文件：
```
└── data
    ├── event.tsx
    ├── member.tsx
    ├── open-source.tsx
    └── publication.tsx
```

### ```member.tsx```
- ```name```：英文姓名
- ```id```：不用收集
- ```img```：头像url，处理见```Image```
- ```img_full```：头像url，处理见```Image```
- ```title```：头衔，参照其他member的，做到名称最好比较统一
- ```bio```：biography ，可带超链接，超链接需要标注两个版本，修改为通知 @王晖杰：
    - 纯文本：```this is a example link, and another link```
    - 扩住链接部分：```this is a [example link], and another [link]```
    - 文本和链接对应的关系：```[example link]: https://baidu.com, [link]: https://google.com```
- ```links```：若干个相关链接， icon 名称最好比较统一，若沒有对应图标通知 @王晖杰
    - email 邮箱地址前加 ```mailto:```，如 ```mailto:xxx@xxx.xx```
- ```pi```：与PI列表中姓名相同，可以为多个
- ```keys```：入学年份 & ```Alumni``` 如果是 & 其他等可以帮助排序的

### ```open-source.tsx```
- ```title```：项目名称，可以参考其他项目
- ```description```：项目描述，可以参考其他项目
- ```tags```：项目关键字，可以参考其他项目，可为任意多个
- ```links```：若干个相关链接，可以参考其他项目，名称最好比较统一
- ```keys```：包含 (```Project``` or ```Dataset```) & 年份（若网页中不显示需要看一下```open_source_categories```中是不是没有添加对应年份） & 其他等可以帮助排序的
- ```pis```：与PI列表中姓名相同，可以为多个
- ```githubstars```：用于github stars图标展，可以参考其他项目，并做url中对应字段替换
- ```img```：处理见```Image```，做好命名不要重复
- ```id```：项目缩写，可以有大写
- 对于明星project/dataset，可以单独收集信息，到时候再根据信息排版在```/research```，通知 @王晖杰

### ```publication.tsx```
- ```title```：论文title，每个单词首字母大写
- ```authors```：先名后姓，用英语逗号分隔
- ```proceedings```：用缩写 / 加年份（如```CVPR 2025``` / ```TPAMI 2025```）
- ```links```：若干个相关链接，可以参考其他项目，名称最好比较统一
- ```keys```： 任意数量topic & 年份（若网页中不显示需要看一下```publication_categories```中是不是没有添加对应年份） & 其他等可以帮助排序的
    - 定义好topic，最好比较统一，可以参考其他项目 / 如有新增添加在```publication_categories```
- ```pis```：与PI列表中姓名相同，可以为多个


## 图像要求
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