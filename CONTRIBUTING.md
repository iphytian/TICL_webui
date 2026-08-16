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

## 二、Git 新手必看：分支是什么

**分支（branch）** 就像网站的"平行草稿"：每个人在自己的草稿里随便改，互不影响；改好了再合并到正式版（`main` 分支）。

- `main` 分支 = 线上正式版；
- 每个人**新建自己的分支**干活，完成后通过 **Pull Request（PR）** 把改动合并回 `main`。

最常用的一条命令：

```bash
git checkout -b feature/xxx
```

意思是：**新建一个叫 `feature/xxx` 的分支，并切换过去**（`-b` = branch，表示"这个名字的分支不存在就自动创建"）。它等价于先执行 `git branch feature/xxx`（新建）再执行 `git checkout feature/xxx`（切换）。

新手最容易困惑的三件事：

1. **我改的文件在哪？** —— 在你当前所在的分支里。用 `git status` 查看当前在哪个分支、改动了什么。
2. **别人会看到我的改动吗？** —— 不会。只有 `git push` 推送到 GitHub、并提了 PR 之后，别人才看得到。
3. **改坏了怎么办？** —— 分支随便折腾，预览地址不影响线上；实在不行 `git checkout main` 切回正式版，重新开一个分支再改。

记住一个"四步循环"就够了：

```bash
git checkout -b feature/首页     # ① 新建并切到自己的分支
# ② 修改文件……
git add .                        # ③ 把改动加入暂存区
git commit -m "说明"             # ④ 提交到自己的分支
git push origin feature/首页     # ⑤ 推送到 GitHub → 网页上点 "Compare & pull request" 提 PR
```

## 三、开发流程（必须遵守）

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

## 四、Git 常用命令速查

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

## 五、分支与提交信息规范

- 分支名：`feature/功能名`、`fix/修复名`、`content/内容名`
- 提交信息：一句话说清楚改了什么，例如：
  - `新增研究方向页面`
  - `修复首页轮播图在手机端显示问题`
  - `更新王怀清老师个人简介`

## 六、网站内容在哪里

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

## 七、注意事项

- **中英文对照**：页面文字用 `<span class="zh">中文</span><span class="en">English</span>` 包裹，右上角"中/EN"按钮自动切换；只写一种语言也可以，但最好两种都写。
- **论文**：加到 `_data/sources.yaml`（有 DOI 用 `id: doi:xxx`）或 `_data/orcid.yaml`（填 ORCID 号）；**不要手动改 `_data/citations.yaml`**（由 Action 自动生成）。
- **不要提交这些**：`_site/`、`vendor/`、`.bundle/`、`.env*`、`.DS_Store`（已在 .gitignore 中）。
- 图片尽量压缩后再上传（每张建议 < 1MB）。
- 改样式后注意**手机端**效果（浏览器 F12 切手机视图）。
- 不确定怎么改时，先建分支随便试，预览地址不会影响线上，放心折腾。
