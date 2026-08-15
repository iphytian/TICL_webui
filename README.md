# 望远镜智能控制实验室官网

基于 [Lab Website Template](https://github.com/greenelab/lab-website-template) 构建的实验室官方网站。

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
| `_data/citations.yaml` | 论文引用列表 |
| `index.md` | 首页 |
| `research/` `team/` `blog/` `contact/` | 研究方向 / 团队 / 新闻 / 联系页面 |
| `images/` | logo、头像、轮播图等图片资源 |
| `legacy-static-site/` | 旧版静态网站的备份 |

## 更新论文

在 `_data/citations.yaml` 中添加条目，有 DOI 的论文用 `doi:xxx` 作为 id，推送到 GitHub 后会自动补全信息。

## 部署

推送到 GitHub 仓库后，GitHub Actions 会自动构建并部署到 GitHub Pages。
