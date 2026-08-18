# 望远镜智能控制实验室官网

基于 [Lab Website Template](https://github.com/greenelab/lab-website-template) 构建的实验室官方网站。

在线访问：**[iphytian.github.io/deepseek_webui](https://iphytian.github.io/deepseek_webui)** 🚀

> 👩‍💻 参与开发的同学请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)（开发指南：环境搭建、分支流程、PR 与预览）。

## 本地运行（学生安装指南）

### 1. 需要的软件与版本

| 软件 | 版本要求 | 说明 |
|---|---|---|
| Git | 2.30 或更高 | 代码版本管理，下载：https://git-scm.com/downloads |
| Ruby | **3.1 或更高**（3.0 以下会报错） | 运行 Jekyll 必需。⚠️ macOS 自带的 Ruby 2.6 太旧，必须另装 |
| Bundler | 2.5.6（`bundle install` 时自动安装） | Ruby 依赖管理 |
| Docker | 最新版（可选） | 不想装 Ruby 时的替代方案 |

> 版本要求与线上 CI 一致（CI 使用 Ruby 3.1、Bundler 2.5.6、Jekyll 4.3）。

### 2. macOS 安装步骤

```bash
# ① 安装 Homebrew（如未安装）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# ② 安装 Git 和 Ruby 3
brew install git ruby

# ③ 让终端优先使用新版 Ruby（Homebrew 的 Ruby 不会自动覆盖系统自带）
#    Apple 芯片（M1/M2/M3/M4）：
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
#    Intel 芯片：
# echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# ④ 验证版本（必须 ≥ 3.0）
ruby -v        # 例如 ruby 3.3.0
git --version

# ⑤ 克隆项目并一键启动
git clone https://github.com/iphytian/deepseek_webui.git
cd deepseek_webui
./start-website.sh   # 自动配置国内镜像源、安装依赖并启动
```

浏览器打开 **http://127.0.0.1:4000** 预览。

### 3. Windows 安装步骤

**方式 A（推荐，最简单）：用 Docker，不用装 Ruby**

1. 安装 [Docker Desktop](https://www.docker.com/products/docker-desktop/)（下载安装后启动它，等右下角鲸鱼图标变绿）
2. 安装 [Git for Windows](https://git-scm.com/downloads)（安装时默认选项即可）
3. 打开 **Git Bash**（开始菜单搜索 Git Bash），执行：

```bash
git clone https://github.com/iphytian/deepseek_webui.git
cd deepseek_webui
./.docker/run.sh
```

浏览器打开 **http://127.0.0.1:4000** 预览。

**方式 B：直接装 Ruby（本地预览速度更快）**

1. 安装 [Git for Windows](https://git-scm.com/downloads)
2. 安装 [RubyInstaller](https://rubyinstaller.org/) **3.1 或更高版本**，安装时务必勾选：
   - ☑ Add Ruby executables to your PATH
   - ☑ MSYS2 development toolchain（最后一步会弹出 MSYS2 窗口，直接回车完成）
3. 打开 PowerShell 或 Git Bash：

```powershell
git clone https://github.com/iphytian/deepseek_webui.git
cd deepseek_webui
bundle install
bundle exec jekyll serve --livereload
```

浏览器打开 **http://127.0.0.1:4000** 预览。

> 国内网络下 `bundle install` 较慢时，先执行：
> `gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ --remove https://rubygems.org/`

### 4. Ubuntu / Linux 安装步骤

```bash
sudo apt update
sudo apt install -y git ruby-full build-essential zlib1g-dev

git clone https://github.com/iphytian/deepseek_webui.git
cd deepseek_webui
bundle install
bundle exec jekyll serve --livereload
```

浏览器打开 **http://127.0.0.1:4000** 预览。

### 5. 验证是否安装成功

```bash
ruby -v       # 应显示 3.x
bundle -v     # 应显示 2.5.x
git --version # 应显示 2.30+
```

能成功打开 http://127.0.0.1:4000 即安装成功 ✅

### 6. 常见问题（FAQ）

| 问题 | 解决办法 |
|---|---|
| `ruby -v` 显示 2.6.x | macOS 自带的旧版 Ruby。按第 2 节步骤安装 Ruby 3.x 并配置 PATH |
| 提示「需要 Ruby 3.x」 | 同上；`start-website.sh` 会自动检测并提示 |
| `bundle install` 很慢或超时 | 国内网络使用清华镜像源（macOS 用 `start-website.sh` 已自动配置；Windows 手动执行镜像命令） |
| `Gem::RemoteFetcher::FetchError` 或 SSL 证书错误 | Windows 上先执行 `gem update --system`，再换清华镜像源 |
| 端口 4000 被占用 | 换端口启动：`bundle exec jekyll serve --livereload --port 4001` |
| 中文显示乱码 | Windows PowerShell 先执行 `chcp 65001`；Git Bash 一般无此问题 |
| Docker 方式浏览器打不开 | 确认 Docker Desktop 已启动（右下角鲸鱼图标为绿色）；首次运行需等待镜像下载（几分钟） |
| `jekyll` 命令找不到 | 不要直接敲 `jekyll`，请用 `bundle exec jekyll ...` |

## 目录说明

| 路径 | 说明 |
|---|---|
| `_config.yaml` | 站点配置（标题、链接、插件） |
| `_members/` | 团队成员页面（每人一个 md 文件） |
| `_posts/` | 新闻文章（文件名格式 `YYYY-MM-DD-标题.md`） |
| `_data/sources.yaml` | 论文来源（在此手动添加论文） |
| `_data/citations.yaml` | 论文引用列表（由 Action 自动生成，勿手动编辑） |
| `index.md` | 首页 |
| `research/` `publications/` `team/` `computing/` `blog/` `contact/` | 研究方向 / 出版文章 / 团队 / 算力平台 / 新闻 / 联系页面 |
| `images/` | logo、头像、轮播图等图片资源 |
| `legacy-static-site/` | 旧版静态网站的备份 |

## 更新论文

在 `_data/sources.yaml` 中添加条目（`_data/citations.yaml` 由 GitHub Action 自动生成，请勿手动编辑）。

- 有 DOI 的论文：用 `id: doi:xxx` 作为 id，推送后 Manubot 会自动补全标题、作者、期刊等信息。
- 无 DOI 的论文：手动填写 `id` / `title` / `authors` / `publisher` / `date` / `link` / `type` 等字段。

示例：

```yaml
- id: doi:10.1038/s41586-024-00000-0
  type: paper
```

推送到 GitHub 后，`on-push` 工作流会自动运行 `cite.py` 生成 `citations.yaml` 并重新部署。

## 部署

推送到 GitHub 仓库的 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。
