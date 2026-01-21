# 部署指南

本指南介绍如何将这个静态网页部署到GitHub Pages或其他服务器。

## 方法一：GitHub Pages（推荐）

### 步骤1：初始化Git仓库

在项目根目录执行：

```bash
# 初始化git仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"
```

### 步骤2：创建GitHub仓库并推送

1. 在GitHub上创建一个新仓库（例如：`nexus` 或 `nexus.github.io`）
2. 如果仓库名是 `username.github.io`，网站会自动部署到 `https://username.github.io`
3. 如果是其他名称，需要手动启用GitHub Pages

```bash
# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

### 步骤3：启用GitHub Pages

1. 进入GitHub仓库页面
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 下选择分支（通常是 `main`）和文件夹（选择 `/ (root)`）
5. 点击 **Save**（保存）
6. 等待几分钟，网站将在 `https://你的用户名.github.io/仓库名` 可用

### 注意事项

- 如果仓库名是 `username.github.io`，网站地址是 `https://username.github.io`
- 如果仓库名是其他名称，网站地址是 `https://username.github.io/仓库名`
- 确保 `index.html` 在根目录
- 所有资源路径使用相对路径（你的代码已经使用了相对路径，如 `./static/css/`）

## 方法二：使用Netlify（更简单）

1. 访问 [netlify.com](https://www.netlify.com)
2. 注册/登录账号
3. 点击 **Add new site** → **Deploy manually**
4. 将整个项目文件夹拖拽到上传区域
5. 网站会自动部署，获得一个 `xxx.netlify.app` 的域名

## 方法三：使用Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 注册/登录账号
3. 点击 **Add New Project**
4. 导入GitHub仓库或直接上传文件夹
5. 点击 **Deploy**

## 方法四：部署到自己的服务器

### 使用Nginx

1. 将项目文件上传到服务器（使用FTP、SCP或Git）
2. 配置Nginx：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/Nexus;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

3. 重启Nginx：`sudo systemctl restart nginx`

### 使用Apache

1. 将项目文件上传到服务器的 `public_html` 或 `www` 目录
2. 确保 `.htaccess` 文件存在（如果需要）：

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## 常见问题

### 资源加载失败

- 检查所有资源路径是否为相对路径
- 确保CSS、JS、图片等文件路径正确
- 检查浏览器控制台的错误信息

### 视频文件太大

- GitHub Pages对文件大小有限制（建议单个文件<100MB）
- 考虑使用CDN或外部存储服务托管视频
- 或使用Git LFS（Large File Storage）

### 自定义域名

**GitHub Pages:**
1. 在仓库Settings → Pages中添加自定义域名
2. 在域名DNS中添加CNAME记录指向 `username.github.io`

**Netlify/Vercel:**
1. 在项目设置中添加自定义域名
2. 按照提示配置DNS记录

## 快速部署命令（GitHub Pages）

```bash
# 1. 初始化仓库
git init
git add .
git commit -m "Initial commit"

# 2. 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/nexus.git

# 3. 推送代码
git branch -M main
git push -u origin main

# 4. 在GitHub上启用Pages（通过网页操作）
```

部署完成后，你的网站就可以通过浏览器访问了！
