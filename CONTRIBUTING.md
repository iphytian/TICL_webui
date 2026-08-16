# 网站开发指南（学生版）

本仓库是**望远镜智能控制实验室官网**（Jekyll 静态网站）。推送到 `main` 分支后，GitHub Actions 会自动构建并部署到线上，所以请务必遵守下面的流程。

## 一、环境准备（第一次）

1. 安装 **Git**：https://git-scm.com/downloads
2. 克隆仓库：

   ```bash
   git clone https://github.com/iphytian/deepseek_webui.git
   cd deepseek_webui
   ```

3. 本地预览网站（二选一）：

   - **方式 A（推荐，简单）**：安装 Ruby 3.x 后运行
     ```bash
     ./start-website.sh
     ```
     浏览器打开 http://127.0.0.1:4000

   - **方式 B（Windows 或不想装 Ruby）**：安装 Docker 后运行
     ```bash
     ./.docker/run.sh
     ```
     浏览器打开 http://127.0.0.1:4000

   > 每次写代码前先 `git pull` 同步最新代码。

## 二、开发流程（必须遵守）

- `main` 分支 = 线上版本，**不要直接往 main 推**；
- 每个任务新建一个分支，完成后**提 Pull Request（PR）**，审查通过后合并到 `main`，网站自动更新。
- 仓库里的 `gh-pages` 分支是**构建产物**（由 GitHub Actions 自动生成），**不要手动改它**，只关注 `main` 即可。

```bash
# 1. 新建分支（名字见下方规范）
git checkout -b feature/xxx

# 2. 修改文件……

# 3. 查看改动
git status

# 4. 提交（写清楚改了什么）
git add .
git commit -m "描述这次改动"

# 5. 推送到 GitHub
git push origin feature/xxx

# 6. 在 GitHub 仓库页面点 "Compare & pull request" 提 PR
```

- 每个 PR 会自动生成**预览地址**（评论里有链接）：`https://iphytian.github.io/deepseek_webui/preview/pr/<编号>/`
- PR 合并到 `main` 后约 1–2 分钟，线上自动更新：https://iphytian.github.io/deepseek_webui

## 三、Git 常用命令速查

| 操作 | 命令 |
|---|---|
| 查看状态 | `git status` |
| 查看改动内容 | `git diff` |
| 添加所有改动 | `git add .` |
| 提交 | `git commit -m "说明"` |
| 同步最新代码 | `git pull` |
| 新建分支 | `git checkout -b 分支名` |
| 切换分支 | `git checkout 分支名` |
| 推送分支 | `git push origin 分支名` |
| 合并 main 到当前分支 | `git pull origin main` |
| 撤销未提交改动 | `git checkout -- 文件名` |

## 四、分支与提交信息规范

- 分支名：`feature/功能名`、`fix/修复名`、`content/内容名`
- 提交信息：一句话说清楚改了什么，例如：
  - `新增研究方向页面`
  - `修复首页轮播图在手机端显示问题`
  - `更新王怀清老师个人简介`

## 五、网站内容在哪里

| 路径 | 说明 |
|---|---|
| `index.md` | 首页 |
| `research/` `team/` `blog/` `contact/` `publications/` `computing/` | 各页面 |
| `_members/*.md` | 团队成员页（每人一个文件） |
| `_posts/*.md` | 新闻（文件名 `YYYY-MM-DD-标题.md`） |
| `_data/` | 数据（论文来源、下载列表等） |
| `images/` | 图片（头像放 `images/avatars/`，轮播放 `images/slider/`） |
| `_styles/*.scss` | 样式 |
| `_scripts/*.js` | 前端脚本 |

## 六、注意事项

- **中英文对照**：页面文字用 `<span class="zh">中文</span><span class="en">English</span>` 包裹，右上角"中/EN"按钮自动切换；只写一种语言也可以，但最好两种都写。
- **论文**：加到 `_data/sources.yaml`（有 DOI 用 `id: doi:xxx`）或 `_data/orcid.yaml`（填 ORCID 号）；**不要手动改 `_data/citations.yaml`**（由 Action 自动生成）。
- **不要提交这些**：`_site/`、`vendor/`、`.bundle/`、`.env*`、`.DS_Store`（已在 .gitignore 中）。
- 图片尽量压缩后再上传（每张建议 < 1MB）。
- 改样式后注意**手机端**效果（浏览器 F12 切手机视图）。
- 不确定怎么改时，先建分支随便试，预览地址不会影响线上，放心折腾。
