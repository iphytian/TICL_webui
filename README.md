# 望远镜智能控制实验室官网

基于 [Lab Website Template](https://github.com/greenelab/lab-website-template) 构建的实验室官方网站。

在线访问：**[iphytian.github.io/deepseek_webui](https://iphytian.github.io/deepseek_webui)** 🚀

> 👩‍💻 参与开发的同学请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)（开发指南：环境搭建、分支流程、PR 与预览）。

## 本地运行

```bash
# 首次安装依赖
bundle install

# 本地预览
bundle exec jekyll serve --livereload
```

打开 http://127.0.0.1:4000 预览。

## 目录说明

| 路径 | 说明 |
|---|---|
| `_config.yaml` | 站点配置（标题、链接、插件） |
| `_members/` | 团队成员页面（每人一个 md 文件） |
| `_posts/` | 新闻文章（文件名格式 `YYYY-MM-DD-标题.md`） |
| `_data/sources.yaml` | 论文来源（在此手动添加论文） |
| `_data/citations.yaml` | 论文引用列表（由 Action 自动生成，勿手动编辑） |
| `index.md` | 首页 |
| `research/` `team/` `blog/` `contact/` | 研究方向 / 团队 / 新闻 / 联系页面 |
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
