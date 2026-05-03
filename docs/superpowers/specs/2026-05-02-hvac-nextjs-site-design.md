# HVAC Next.js 站点设计

## 背景

当前仓库不是一个现成的 Next.js 项目，而是几组独立的静态页面导出文件，分别对应首页、关于我们、服务页、服务区域页和联系页。现有视觉方向已经很明确：深蓝、白、橙红，整体偏本地服务业、亲民、专业，不走高科技或奢华路线。

这个站点的主要业务目标是获客。广告投放会把流量直接导入网站，所以首页和联系入口必须承担转化职责。同时，住宅客户占大头，页面内容应优先服务住宅用户，再兼顾少量商用可信度。

## 目标

1. 建立一个可扩展的 Next.js 官网基础。
2. 让广告流量进站后能快速找到电话、表单和核心服务。
3. 用页面结构和内容布局支持本地 SEO。
4. 为后续 knowledge base 页面预留清晰的内容架构。
5. 保留现有品牌方向：深蓝、白、橙红，强调“热度、可靠、响应快”。

## 站点策略

### 1. 采用多页面官网

与单页落地页相比，多页面结构更适合当前业务，因为：

- 不同搜索意图可以映射到不同页面。
- 服务页、区域页、知识库页都可以独立优化标题、描述和内容。
- 首页可以专注获客，不必承担所有 SEO 任务。
- 后续扩展内容时不容易把首页做得臃肿。

### 2. 首页负责转化

首页只做三件事：

- 说明你们是谁、做什么、服务哪些区域。
- 让用户立即联系你们。
- 让用户快速理解你们的专业性和可信度。

### 3. Knowledge Base 后置

知识库不作为首期主页面，而是作为后续 SEO 扩展模块。它的目标是承接长尾搜索，比如：

- furnace repair costs
- how often should AC be serviced
- signs your furnace needs maintenance
- what to do when heat stops working

这些内容应当是实用、真实、面向用户的问题解答，而不是关键词堆砌。

## 信息架构

首期建议页面如下：

1. `/` 首页
2. `/services` 服务总览
3. `/services/heating`
4. `/services/cooling`
5. `/services/maintenance`
6. `/service-areas`
7. `/about`
8. `/contact`
9. `/knowledge-base` 后续添加

可选扩展：

- `/knowledge-base/[slug]`
- `/service-areas/[city]`

## 页面职责

### 首页

首页优先展示：

- 主标题和副标题
- 电话和表单 CTA
- 核心服务卡片
- 服务区域摘要
- 信任信息，如 licensed、insured、same-day、emergency
- 一个简洁的联系表单或跳转到联系页

首页内容要明显偏住宅用户。

### 服务总览页

这个页面用于把服务分类讲清楚，适合承接“hvac services near me”类搜索。

建议包含：

- Heating
- Cooling
- Maintenance
- Installation
- Emergency repair

### 单项服务页

每个服务页都要有：

- 适合该服务的标题
- 简短问题导向介绍
- 服务流程
- 适用场景
- 常见问题
- 明确 CTA

### 服务区域页

这个页面用于本地 SEO 和广告落地页的补充。

建议包含：

- 主服务范围说明
- 核心城市列表
- 覆盖逻辑
- 快速联系入口

如果后续做 city pages，可以在这里拆分城市独立页。

### 关于我们

用途是建立信任，不是讲企业故事。

建议包含：

- 本地服务经验
- 住宅客户为主
- 技术资质或保险说明
- 为什么选择你们
- 团队或公司价值观

### 联系我们

这是最直接的转化页，必须同时保留：

- 电话
- 邮箱
- 地址或服务区域
- 联系表单

表单建议字段：

- Name
- Phone
- Email
- Postal code
- Service type
- Message

不建议首期放过多字段，以免降低转化。

## 视觉方向

### 品牌定位

视觉必须传达：

- 亲民
- 可靠
- 专业
- 响应快
- 适合住宅客户

不要做成：

- 过度科技化
- 过度奢华
- 过度企业化
- 过度冷感

### 配色

继续沿用以下方向：

- 深蓝：信任、专业、结构骨架
- 白：内容阅读和表单空间
- 橙红：行动按钮、紧急响应、重点提示

使用原则：

- 深蓝用于导航、页脚、标题、信息区块
- 橙红用于 CTA 和警示性强调
- 大面积留白保证表单和正文的可读性

### 排版

继续使用 Inter 作为基础字体，保持清晰、稳定、通用。

标题层级应简洁直接，不要使用过度花哨的字效。

### 组件风格

建议组件原则：

- 卡片、表单、按钮保持简洁和轻微圆角
- 卡片之间保持足够留白
- CTA 用实心橙色按钮
- 次级操作用深蓝描边按钮

## 内容模块

### 首页推荐模块顺序

1. Hero
2. 快速联系条
3. 核心服务卡片
4. 为什么选择我们
5. 服务区域
6. 客户常见问题
7. 联系表单
8. Footer

### 首页 Hero 文案方向

Hero 要直接说明：

- 你们提供什么
- 你们服务什么区域
- 用户下一步该做什么

示例语气：

- 本地 HVAC service
- 快速响应
- 住宅优先
- 电话和表单都可联系

### 信任点

建议在首页和联系页复用：

- Licensed and insured
- Same-day service
- Emergency support
- Residential specialists
- Transparent quotes

## SEO 设计

### 站点级 SEO

需要在 Next.js App Router 中实现：

- `generateMetadata`
- `sitemap.ts`
- `robots.ts`
- Open Graph / Twitter metadata

### 页面级 SEO

每个页面都应有唯一的：

- title
- description
- canonical 逻辑
- H1
- 结构化 heading hierarchy

### 内容策略

SEO 内容必须服务用户，不做纯关键词堆砌。Google 的官方原则是优先帮助用户，而不是制造搜索引擎导向内容。

### Knowledge Base SEO

知识库页是后续主要 SEO 增长点。内容形式建议：

- FAQ
- 维护建议
- 故障判断
- 成本解释
- 住宅 HVAC 常识

每篇文章都应：

- 解决一个具体问题
- 语言通俗
- 带有行动建议
- 连接到相关服务页和联系页

## 技术架构

### Next.js 版本与结构

建议使用 Next.js App Router。

原因：

- 页面和布局组织清晰
- 适合多页面官网
- 原生支持 metadata、sitemap、robots
- 便于后续扩展 knowledge base

### 推荐目录结构

```txt
app/
  layout.tsx
  page.tsx
  about/page.tsx
  contact/page.tsx
  services/page.tsx
  services/heating/page.tsx
  services/cooling/page.tsx
  services/maintenance/page.tsx
  service-areas/page.tsx
  knowledge-base/page.tsx
  knowledge-base/[slug]/page.tsx
  robots.ts
  sitemap.ts
components/
  site-header.tsx
  site-footer.tsx
  hero.tsx
  service-card.tsx
  contact-form.tsx
  trust-band.tsx
lib/
  content.ts
  site.ts
```

### 内容数据化

建议把页面文案、服务列表、城市列表、联系方式放到 `lib/content.ts` 或类似结构里，避免把所有内容硬编码进页面组件。

这样做的好处：

- 便于后续改文案
- 便于扩展服务页
- 便于生成 sitemap
- 便于知识库内容复用

## 联系与表单

### 表单行为

首期表单可以先做前端收集，再接到邮件、CRM 或第三方表单服务。

表单需要：

- 基础校验
- 提交中状态
- 成功和失败提示
- 手机端易用

### 联系展示

站内要持续展示：

- 电话
- 邮箱
- 服务区域
- 紧急服务说明

联系方式应该在：

- 导航
- Hero
- 页脚
- 联系页

重复出现，但不要显得吵。

## 非目标

首期不做：

- 在线账号系统
- 复杂预约排班系统
- 多语言
- 会员中心
- 复杂 CMS 集成

这些都可以后面再加。

## 实施顺序

### Phase 1

- 初始化 Next.js App Router 项目
- 搭建全站布局和基础导航
- 完成首页、服务页、关于页、联系页、服务区域页
- 实现统一样式和基础 SEO

### Phase 2

- 增加知识库结构
- 增加 FAQ / 长尾内容页
- 增加 sitemap 和 robots 的完善逻辑

### Phase 3

- 增加表单后端提交
- 增加分析埋点
- 根据真实业务数据继续优化转化

## 待确认项

当前还需要在实施前确认：

- 最终品牌名是否继续使用 `ArcticPrecision HVAC`
- 电话、邮箱、地址是否需要替换成真实业务信息
- 表单提交要走邮件还是第三方服务
- 是否需要先做 Toronto/GTA 的区域聚焦，还是直接面向更广区域

