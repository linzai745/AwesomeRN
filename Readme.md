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

state 管理流程：

1. 状态初选，明确页面中会变化的数据。
2. 状态确定，状态初选完成后，要先确定这些初选状态中哪些是真正的状态，把其中无用的状态剔除掉。一件事情一个状态，重复状态不是状态，去掉底层组件的重复状态，只保留顶层的组件中的状态。可计算的状态不是状态，一个状态必须不能通过其他状态、属性或变量直接计算出来，能通过其他值计算出来的状态，都不是状态。
3. 状态声明，使用 useState 声明状态时，状态和组件是绑定的关系，useState 在哪个组件中使用，它生成的状态就属于那个组件。用就近原则来绑定状态，就近原则的意思是哪个组件用上了状态，就优先考虑将状态绑定到该组件上，如果有多个组件使用了同一个状态，则将其绑定到最近的父组件上。

**使用钩子函数管理状态**

在 React/React Native 中，所有使用 use 开头的函数，比如接下来要用到 useState 函数，它们都叫钩子函数（hook function）。

钩子函数不能写在 if 条件判断中、事件循环中、嵌套的函数中，这些都会导致报错。

使用位置：组件顶部。

useState 函数的入参是状态的默认值，函数的返回值是状态和更新该状态的函数。

4. 状态更新，

   在 JavaScript 中的数据类型可以分为两类，对象数据类型（Objects）和原始数据类型（Primitive values），对象数据类型包括对象（Object）、数组（Array），原始数据类型有 7 种，比如数字（number）、字符串（string）等等。

   在 React/React Native 中，使用这两类数据类型作为状态都是可以的，但是更新这两类状态的方法不一样，如果你没有理解清楚二者的区别，就容易出现一些低级的 BUG。

   **更新原始数据类型的状态**

   对于原始数据类型而言，调用 setCount 更新原始数据类型状态的值，页面就会发生更新。

   **更新对象/数组类型的状态**

   对象它是一种复合数据类型，它内部的值是可变的（mutable），但它的引用是不可变了（immutable），你更新了对象的内部值后，它的引用并没有发生变化。

   mutable 的更新方案 useImmer，可以通过直接修改变量的值来更新状态。

   但其底层原理也是，新建一个对象或数组传给状态更新函数，让状态更新函数知道对象或数组确实发生了变化，这时 React/React Native 框架才会帮你更新页面。

**图片加载**

React Native 图片加载方式：

* 静态图片资源；
* 网络图片；
* 宿主应用图片；
* Base64 图片。

**静态图片资源**

静态图片资源（Static Image Resources）是一种使用内置图片的方法。静态图片资源中的“静态”指的是每次访问时都不会变化的图片资源。

静态资源加载方式：通过 require 的方式引入图片，最后把图片的引用值传给 source 属性。Image.source 属性是用来设置图片加载来源的。require 函数的入参必须是字面常量，而不能是变量。

**网络图片**

网络图片（Network Images）指的是使用 http/https 网络请求加载远程图片的方式。

在使用网络图片时，建议将宽高属性作为一个必填项来处理。React Native 是没法知道图片的宽高的，所以它只能用默认的 0 作为宽高。这个时候，如果你没有填写宽高属性，初始化默认宽高是 0，网络图片就展示不了。

缓存与预加载

网络图片虽然指的是走网络请求下载的图片，但也并不用每次都走网络下载，只要有缓存就能直接从本地加载。

React Native Android 用的是 Fresco 第三方图片加载组件的缓存机制，iOS 用的是 NSURLCache 系统提供的缓存机制。

通过图片缓存机制和预加载机制的配合，我们可以合理地利用缓存来提高图片加载速度，这能进一步地提升用户体验。

React Native 也提供了非常方便的图片预加载接口 Image.prefetch：

```tsx
Image.prefetch(url);
```

**宿主应用图片**

宿主应用图片（Images From Hybrid App’s Resources）指的是 React Native 使用 Android/iOS 宿主应用的图片进行加载的方式。

不推荐在 React Native 中使用宿主应用图片资源。首先，这种加载图片的方法没有任何的安全检查，一不小心就容易引起线上报错。第二，大多数 React Native 是动态更新的，最新代码是跨多个版本运行的，而 Native 应用是发版更新的，应用的最新代码只在最新版本运行，这就导致 React Native 需要确切知道 Native 图片到底内置在哪些版本中，才能安全地使用，这对图片管理要求太高。

**Base64 图片**

Base64 图片指的是使用 Base64 编码加载图片的方法，它适用于那些图片体积小的场景。

```tsx

<Image
  source={{
    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
  }}
/>
```

Base64 图片并不是图片地址，而是以一大长串的以 data:image/png; base64 开头的文本。

通常我们看的图片资源 .jpg、.png 都是二进制格式的，二进制格式的图片是以独立文件存在的。而当二进制图片 Base64 化后，就变成了一段由字母、数字和符号组成的字符串。

Base64 图片是嵌套在 Bundle 文件中的，所以 Base64 图片的优点是无需额外的网络请求展示快，缺点是它会增大 Bundle 的体积。 

在动态更新的 React Native 应用中，Base64 图片展示快是以 React Native 页面整体加载慢为代价的。原因就是它会增加 Bundle 的体积，增加 Bundle 的下载耗时，从而导致 React Native 页面展示变慢。

建议是 Base64 图片只适合用在体积小的图片或关键的图片上。

**图片最佳实践**

这套最佳实践，适用于那些将 React Native 当做一个动态更新框架来使用的应用中。

首先是静态图片资源。如果你使用的是自研的热更新平台，就需要注意图片资源一定要先于 bundle 或和 bundle 一起下发，因为在执行 bundle 时，图片资源是必须已经存在的。

可以把需要上传到网络的图片放在代码仓库的 assets/network 目录，把需要 Base64 化的图片放在 assets/base64 目录。

在本地开发的时候，可以通过使用 require 静态图片资源的形式，引入 assets/network 或 assets/base64 目录中的图片来进行本地调试。在代码编译打包的时候，通过工具将 assets/network 目录中的图片上传到 CDN 上，将 assets/base64 目录中的图片都 Base64 化，并将 require 形式的静态图片资源代码转换为网络图片或 Base64 图片的代码。使用自动化工具来管理图片，代替人工手动管理，可以提高你的开发效率。

**点击组件**

* 第一代 Touchable 组件，提供多种反馈风格。
* 第二代 Button 组件，实质是对 Touchable 组件的封装。点按反馈的样式就和原生平台的自身风格保持统一。
* 第三代 Pressable 组件，不再是 Touchable 组件的封装，而是一个全新重构的点按组件，它的反馈效果可由开发者自行配置。

**Pressable 组件**

点按组件通常是有点击和未点击两种状态的，这两种状态对应着两种点按样式，一种样式是未点击时的基础样式，一种是点按后的反馈样式。

Pressable 的样式 style 属性同时支持固定样式，和函数返回的“动态样式”：

```tsx
type PressableStyle = ViewStyle | (({ pressed: boolean }) => ViewStyle)
```

固定样式，也就是type PressableStyle = ViewStyle 的意思是，Pressable 组件的支持样式类型和 View 组件的支持样式类型是一样的，具体 ViewStyle 都包括那些“通用”样式和“私有”样式.

动态样式，也就是type PressableStyle = (({ pressed: boolean }) => ViewStyle) 的意思是，在用户没有点击时 pressed 值为 false，在用户点击时 pressed 值为 true，你可以根据两种点按状态，为按钮定制不同的样式。

固定样式实现：

```tsx

// 固定的基础样式
const baseStyle = { width: 50, height: 50, backgroundColor: 'red'}

<Pressable
  onPress={handlePress}
  style={baseStyle} >
  <Text>按钮</Text>
</Pressable>
```

动态样式实现：

```tsx

// 固定的基础样式
const baseStyle = { width: 50, height: 50, backgroundColor: 'red'}

<Pressable
  onPress={handlePress}
  style={({ pressed }) => [ /* 动态样式 */
    baseStyle,
    { opacity: pressed ? 0.5 : 1} 
  ]} >
  <Text>按钮</Text>
</Pressable>
```

**点击\长按**

Pressable 组件响应的整体流程，是从触摸屏识别物理手势开始，到系统和框架 Native 部分把物理手势转换为 JavaScript 手势事件，再到框架 JavaScript 部分确定响应手势的组件，最后到 Pressable 组件确定是点击还是长按。

开始响应事件和结束响应事件是两个最基础的手势事件，在 Android、iOS 或者 Web 中都有类似的事件。在 React Native 中它们是：

* onResponderGrant：开始响应事件，用户手指接触屏幕，且该手势被当前组件锁定后触发；
* onResponderRelease：结束响应事件，用户手指离开屏幕时触发。

基于开始响应事件 onResponderGrant 和结束响应事件 onResponderRelease，Pressable 组件可以很容易地封装出开始点按事件 onPressIn 和结束点按事件 onPressOut。

你可以在 Pressable 组件中，使用 onPressIn 来响应开始点按事件，使用 onPressOut 来响应结束点按事件。示例代码如下：

```tsx
<Pressable 
  onPressIn={handlePressIn}
  onPressOut={handlePressOut}
  >
  <Text>按钮</Text>
</Pressable>
```

判断 onPressIn 事件和 onPressOut 事件之间触发间隔耗时，来判断点击或者长按事件：

* 如果间隔耗时 < 500ms 属于点击。用户的点按动作会先触发 onPressIn，再触发 onPressOut，在 onPressOut 事件中可以触发我们 “自定义的”点击事件 onPress；
* 如果间隔耗时 >= 500ms 属于长按。用户的点按动作会先触发 onPressIn，这个时候你可以埋下一个定时器，并在第 500ms 时通过定时器触发我们 “自定义的” onLongPress，最后在用户松手的时候触发 onPressOut。

在React Native 框架中，onPress 和 onLongPress 两个事件时，如果点按耗时小于 500ms，在你松手时触发的是点击事件 onPress；如果点按耗时大于 500ms，大致会在第 500ms 先触发长按事件 onLongPress，那这时即使你再松手也不会触发 onPress 事件了。也就是说，点击事件 onPress 和长按事件 onLongPress 是互斥的，触发了一个就不会再触发另一个了。

Pressable 组件的4 个响应事件：onPressIn、onPressOut 、onPress 和 onLongPress 的触发方式。

![image-20221104165110766](C:\Users\alin\AppData\Roaming\Typora\typora-user-images\image-20221104165110766.png)

**中途取消**

事件区域模型，也就是点按操作手势的可用范围的概念。

点按操作手势的可用范围包括盒模型区域、可触发区域 HitRect 和可保留区域 PressRect。

* 盒模型区域

  盒模型示意图：

  ![image-20221104165428548](C:\Users\alin\AppData\Roaming\Typora\typora-user-images\image-20221104165428548.png)

  最里面的是内容 Content，然后再是 Padding 和 Border，最外面的才是 Margin。Content、Padding、Border 默认是不透明度的，但 Margin 是天生透明的，并且不可以设置透明度、设置颜色。

  点按事件的默认触发区域是盒模型中的默认不透明的部分。包括 content、padding 和 border 部分。可以看得见才可以点击，这样的设计是非常合理的。

  如何保证任何情况下都能正确地点按到指定区域：可以直接修改宽高、边框、内边距的值，通过扩大盒模型的范围，提高点中的成功率。但是，修改盒模型成本较高，它可能会导致原有 UI 布局发生变化。

  更好的方案是，不修改影响布局的盒模型，直接修改可触发区域的范围，提高点中的成功率。

* 可触发区域 HitRect

  Pressable 组件有一个可触发区域 HitRect，默认情况下，可触发区域 HitRect 就是盒模型中的不透明的可见区域。你可以通过修改 hitSlop 的值，直接扩大可触发区域。

  HitSlop 类型的定义如下：

  ```tsx
  type Rect = {
      top?: number;
      bottom?: number;
      left?: number;
      right?: number;
  }
  
  type HitSlop = Rect | number
  ```

  HitSlop 接收两种类型的参数，一种是 number 类型，以原有盒模型中的 border 为边界，将可触发区域向外扩大一段距离。另一种是 Rect 类型，你可以更加精准地定义，要扩大的上下左右的距离。

  在老点不中、老勾不中的场景中，你可以在不改变布局的前提下，设置 Pressable 组件的可触发区域 HitSlop，让可点击区域多个 10 像素、20 像素，让用户的更容易点中。

* 可保留区域 PressRect

  点按事件可保留区域的偏移量（Press Retention Offset）默认是 0，也就是说默认情况下可见区域就是可保留区域。你可以通过设置 pressRetentionOffset 属性，来扩大可保留区域 PressRect。

  ```tsx
  type PressRetentionOffset  = Rect | number
  ```

  pressRetentionOffset 和 HitSlop 一样，接收两种类型的参数，一种是 number 类型，另一种是 Rect 类型。Rect 类型设置后，会以原有可触发区域为基准，将可保留区域向外扩大一段距离。

  可保留区域可以把已经按下的手指从可保留区域挪开，然后再松手，这就不会再继续触发点击事件了。

盒模型区域的可见区域、可触发区域 HitRect 和可保留区域 PressRect 的关系：

![image-20221104170422043](C:\Users\alin\AppData\Roaming\Typora\typora-user-images\image-20221104170422043.png)

**输入框的文字**

非受控（Uncontrolled）组件：

非受控的意思就是不使用 state，直接对从宿主组件上将文本的值同步到 JavaScript。一个非受控的 UncontrolledTextInput 组件示例如下：

```tsx
const UncontrolledTextInput = () => <TextInput /> 
```

在 UncontrolledTextInput  组件中， TextInput 元素是不受 state 控制，但在 JavaScript 代码中却并不知道用户输入的是什么，因此还要一个变量来存储用户输入的值。

首先在组件中声明局部变量是不行的，我们知道 render 就是组件函数的执行，每次执行局部变量也会重新赋值，局部变量保存的值不能跨越两次 render。其次，用全局变量或文件作用域的变量也是不行的，组件销毁时这些全局变量是不会销毁的，有内存泄露的风险。再者，用 state 也是不行的，用了 state 就成了受控组件了。

对于非受控组件来说，存储跨域两次 render 的可行方案是 ref。ref 的值不会因为组件刷新而重新声明，它是专门用来存储组件级别的信息的。

ref 应用场景：

* 存储 setTimeout/setInterval 的 ID；
* 存储和操作宿主组件（在 Web 中是 DOM 元素）；
* 存储其他不会参与 JSX 计算的对象。

使用 ref 保存非受控输入框的值，就属于第三种场景，示例代码如下：

```tsx

function UncontrolledTextInput2() {
  const textRef = React.useRef('');
  return <TextInput onChangeText={text => textRef.current = text}/>
}
```

使用 useRef 创建了一个用于保存用户输入的文字的对象 textRef。每当用户输入文字的时候，会触发 TextInput 的onChangeText事件，在该事件的回调中，我们将最新的text赋值给了textRef.current进行保存。这时，每次获取文字就都是最新的文字了。

非受控组件的原理是最简单的，用户输入的“文本原件”是存在宿主组件上的，JavaScript 中的只是用textRef复制了一份 “文本的副本”而已。

但正是因为非受控组件使用的是副本，一些复杂的操作是做不了的，比如将用户输入的字母由大写强制改为小写，等等。在新架构 Fabric 之前，React Native 还提供了直接修改宿主组件属性的setNativeProps方法，但是 Fabric 之后（包括 Fabric 预览版），setNativeProps 就不能用了。

受控（Controlled）组件:

受控的意思说的是使用 JavaScript 中的 state 去控制宿主组件中的值。



