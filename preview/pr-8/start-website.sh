#!/usr/bin/env bash
# 望远镜智能控制实验室网站 — 本地启动脚本
set -e
cd "$(dirname "$0")"

echo "=========================================="
echo "  望远镜智能控制实验室网站 启动脚本"
echo "=========================================="

# 1. 检查 Ruby 版本（需要 >= 3.0）
RUBY_MAJOR=$(ruby -e 'puts RUBY_VERSION.split(".")[0].to_i' 2>/dev/null || echo 0)
RUBY_MINOR=$(ruby -e 'puts RUBY_VERSION.split(".")[1].to_i' 2>/dev/null || echo 0)
if [ "$RUBY_MAJOR" -lt 3 ]; then
  echo "⚠️  当前 Ruby 版本过旧（$(ruby --version 2>/dev/null || echo '未安装')）"
  echo "    需要 Ruby 3.x。macOS 用户请先安装："
  echo ""
  echo "    /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
  echo "    brew install ruby"
  echo ""
  echo "    安装后重启终端再运行本脚本。"
  exit 1
fi

# 2. 配置国内 gem 镜像（加速下载）
echo ""
echo "📦 配置 gem 镜像源..."
gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ 2>/dev/null || true
gem sources --remove https://rubygems.org/ 2>/dev/null || true

# 3. 安装依赖
echo "📦 安装依赖 (bundle install)..."
bundle install

# 4. 启动
echo ""
echo "✅ 启动成功！浏览器打开: http://127.0.0.1:4000"
echo "   （按 Ctrl+C 停止）"
echo ""
bundle exec jekyll serve --livereload
