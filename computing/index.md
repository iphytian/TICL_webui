---
title: 算力支撑
nav:
  order: 4
  tooltip: 计算资源与配置下载
  en: Computing
---

# {% include icon.html icon="fa-solid fa-server" %}<span class="zh">算力支撑</span> <span class="en">Computing</span>

<span class="zh">实验室拥有多台高性能 GPU 计算服务器，为望远镜智能化研究、大模型训练与推理、多智能体系统开发与部署等提供算力支撑。</span>

<span class="en">The laboratory operates multiple high-performance GPU servers, providing computing power for intelligent telescope research, large-model training and inference, and multi-agent system development and deployment.</span>

{% include section.html %}

## <span class="zh">计算资源</span> <span class="en">Computing Resources</span>

{% capture content %}

<div class="grid-card">
  <div class="grid-card-title"><span class="zh">A100 八卡服务器</span><span class="en">A100 8-GPU Server</span></div>
  <p class="zh">配置 8 张 NVIDIA A100 GPU 的高性能计算服务器，面向大模型训练、科学计算与大规模并行计算任务。</p>
  <p class="en">A high-performance server with 8 NVIDIA A100 GPUs for large-model training, scientific computing, and large-scale parallel workloads.</p>
</div>

<div class="grid-card">
  <div class="grid-card-title"><span class="zh">RTX 5090 GPU 服务器</span><span class="en">RTX 5090 GPU Server</span></div>
  <p class="zh">搭载 NVIDIA RTX 5090 GPU 的推理与开发服务器，支持大模型推理、算法开发与实验测试。</p>
  <p class="en">A development and inference server equipped with NVIDIA RTX 5090 GPUs for model inference, algorithm development, and experiments.</p>
</div>

<div class="grid-card">
  <div class="grid-card-title"><span class="zh">多台计算服务器</span><span class="en">Additional Computing Servers</span></div>
  <p class="zh">另有多台 CPU/GPU 计算服务器，支撑日常科研计算、仿真分析、数据处理与工程测试。</p>
  <p class="en">Additional CPU/GPU servers support daily research computing, simulation, data processing, and engineering tests.</p>
</div>

{% endcapture %}

{% include grid.html content=content %}

{% include section.html %}

## <span class="zh">配置下载</span> <span class="en">Configuration Downloads</span>

<span class="zh">提供服务器环境配置、使用说明等相关资料下载。</span>

<span class="en">Server environment configuration and usage guides are available for download.</span>

{% assign downloads = site.data.downloads %}
{% if downloads.size > 0 %}
  <div class="download-list">
  {% for d in downloads %}
    <a class="button" href="{{ d.file | relative_url }}" download>
      <i class="icon fa-solid fa-download"></i>
      <span><span class="zh">{{ d.name }}</span><span class="en">{{ d.en }}</span></span>
    </a>
  {% endfor %}
  </div>
{% else %}
  <p class="text-small text-gray"><span class="zh">配置说明文档整理中，即将提供下载。</span><span class="en">Configuration guides are being prepared and will be available for download soon.</span></p>
{% endif %}

{% include section.html %}

## <span class="zh">智能体与大模型应用</span> <span class="en">Agent &amp; LLM Applications</span>

<span class="zh">实验室目前面向所内提供智能体服务：</span>

<span class="en">The laboratory currently provides an agent service within the institute:</span>

<a class="button" href="http://10.13.7.15:8080" target="_blank" rel="noopener">
  <i class="icon fa-solid fa-robot"></i>
  <span><span class="zh">访问智能体服务（所内网络）</span><span class="en">Open Agent Service (Intranet)</span></span>
</a>

<span class="zh">更多实验室大模型应用服务将陆续上线，敬请期待。</span>

<span class="en">More large-model application services of the laboratory will be launched soon. Stay tuned!</span>
