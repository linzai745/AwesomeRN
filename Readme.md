# React Native

## 1. React Native 架构

基础知识：

1. 开发语言、React 框架。
2. React Native 本身的知识。
3. 工作流中的实操知识。

### React 框架

**特点**

* 基于组件（Component-Based），React 强调的是组件的可组合型。
* 声明式（Declarative），React 使用的是 JavaScript 来描述 UI 页面的结构，并且在 JavaScript 中创建了一种类似 HTML 的方言，也就是 JSX 语法扩展。

### 核心组件&样式

React Native 的核心组件和样式。

React Native 中的组件，包括图片组件 Image、点按组件 Pressable、输入组件 TextInput、列表组件 RecyclerListView。

组件的使用需要关注FPS 流畅度，也就是滚动性能。

**组件**

只有一个单一的功能，并且这个组件和其他组件没有相互依赖，组件间的数据是单向流动的，是逐层往下传递的。

**组件分类**

* 宿主组件，生产基础视图的工厂。在 React Native 中那些最基础、不可再拆的视图材料，大都是由 React Native 框架提供的宿主视图。宿主组件通常是 React Native 框架提供的组件，它们和你用 JavaScript 自定义的组件不同，宿主组件是直接由 iOS/Android 原生平台实现的。
* 复合组件：纯 JavaScript 函数。直接用 JavaScript 创建，不用写 Native 代码，这类组件也叫复合组件（Composite Components）。这些复合组件是基于宿主组件或其他复合组件搭建而成的。

**样式**

组件样式 = 通用样式 + “私有”样式。

不同组件的支持的样式可能会有些不同。通过 TypeScript 声明文件，编辑器会提醒你某个组件都有哪些样式。另一方面，React Native 的组件样式是有规则的，你只需要把那些高频样式用会就可以了，其他低频样式，等要用到的时候再翻文档也不迟。

**组件样式继承关系**

* 第一层是通用样式；
* 第二层是 View 组件样式；
* 第三层是 Text、Image 等其他组件样式。

![image-20221104102920861](C:\Users\alin\AppData\Roaming\Typora\typora-user-images\image-20221104102920861.png)

**Flex 布局**

特点：跨平台、高性能、易上手。

Flex 布局是跨平台的，在 Web、Android、iOS 平台也都在用，Flex 布局知识的可迁移性很强。

React Native 的布局引擎 Yoga 是 Android、iOS 通用的。

**从上往下排列布局**

父容器是弹性盒子，且主轴是纵轴，子元素会沿着纵轴（主轴）方向排列，因此在父元素不写任何样式时，子元素是从上往下排列的。

**左图右文布局**

需要给父容器设置布局样式{flexDirection: 'row'}。为了让图片不拉伸变形，我们需要给图片 Image 设置一个固定宽高。这时，父容器的主轴是横轴，子元素会沿着横轴（主轴）方向排列，整体布局是左图右文。

**文字居中布局**

通过 alignItems 和 justifyContent 的配合，实现水平垂直方向的居中布局。需要给父容器设置{justifyContent: 'center',alignItems: 'center'}，使子元素分别在主轴（纵轴）和副轴（横轴）方向居中就可以了。

Android 文字默认会有内边距且基于基线对齐，这会导致文字垂直居中时偏下。因此垂直居中时，最好把内边距关掉，并把文字放在中线而不是基线上。

**StyleSheet**

StyleSheet 好处：

* 元素结构和样式分离，可维护性更好；
* 样式对象可以复用，能减少重复代码；
* 样式对象只创建一次，也减少性能的损耗。

**State管理**



