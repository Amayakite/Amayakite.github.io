const n=JSON.parse('{"key":"v-32834599","path":"/JavaLang/JavaSE/09-%E9%9D%A2%E5%AF%B9%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B.html","title":"09-面对对象编程","lang":"zh-CN","frontmatter":{"title":"09-面对对象编程","date":"2021-10-31T20:59:21.000Z","category":"JavaSE","tag":["Java","JavaSE","Object"],"description":"类变量 现在有一个问题：有一群小孩在玩堆雪人，不时有新的小孩加入，请问如何知道现在共有多少人在玩？编写程序解决 用传统的方法来解决 在main方法中顶一个一个变量count 当一个小孩加入游戏后count++，最后根据count来记录有多少个小孩玩游戏 package com.static_; public class ChildGame { public static void main(String[] args) { // 定义一个变量，统计有多少个小孩加入了游戏 int count = 0; Child child1 = new Child(\\"白骨精\\"); child1.join(); count++; Child child2 = new Child(\\"狐狸精\\"); child2.join(); count++; Child child3 = new Child(\\"老鼠\\"); child3.join(); count++; System.out.println(\\"共有\\"+count+\\"加入了游戏\\"); } } class Child{ private String name; Child(String name) { this.name = name; } public void join(){ System.out.println(name+\\"加入了游戏\\"); } } 问题分析： count是一个独立于对象/类变量的东西，很尴尬 以后我们访问count很麻烦，没有使用到OOP(面对对象编程) 因此，我们引出类变量/静态变量来完美的解决该问题","head":[["meta",{"property":"og:url","content":"http://www.amayakite.github.io/JavaLang/JavaSE/09-%E9%9D%A2%E5%AF%B9%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"Amayakite Blogs"}],["meta",{"property":"og:title","content":"09-面对对象编程"}],["meta",{"property":"og:description","content":"类变量 现在有一个问题：有一群小孩在玩堆雪人，不时有新的小孩加入，请问如何知道现在共有多少人在玩？编写程序解决 用传统的方法来解决 在main方法中顶一个一个变量count 当一个小孩加入游戏后count++，最后根据count来记录有多少个小孩玩游戏 package com.static_; public class ChildGame { public static void main(String[] args) { // 定义一个变量，统计有多少个小孩加入了游戏 int count = 0; Child child1 = new Child(\\"白骨精\\"); child1.join(); count++; Child child2 = new Child(\\"狐狸精\\"); child2.join(); count++; Child child3 = new Child(\\"老鼠\\"); child3.join(); count++; System.out.println(\\"共有\\"+count+\\"加入了游戏\\"); } } class Child{ private String name; Child(String name) { this.name = name; } public void join(){ System.out.println(name+\\"加入了游戏\\"); } } 问题分析： count是一个独立于对象/类变量的东西，很尴尬 以后我们访问count很麻烦，没有使用到OOP(面对对象编程) 因此，我们引出类变量/静态变量来完美的解决该问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T15:14:40.000Z"}],["meta",{"property":"article:author","content":"Amayakite"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:tag","content":"Object"}],["meta",{"property":"article:published_time","content":"2021-10-31T20:59:21.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T15:14:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"09-面对对象编程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-10-31T20:59:21.000Z\\",\\"dateModified\\":\\"2023-06-17T15:14:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Amayakite\\",\\"url\\":\\"https://github.com/Amayakite\\"}]}"]]},"headers":[{"level":2,"title":"类变量","slug":"类变量","link":"#类变量","children":[{"level":3,"title":"使用类变量","slug":"使用类变量","link":"#使用类变量","children":[]}]},{"level":2,"title":"类方法","slug":"类方法","link":"#类方法","children":[{"level":3,"title":"类方法的使用注意事项","slug":"类方法的使用注意事项","link":"#类方法的使用注意事项","children":[]}]},{"level":2,"title":"深入理解main方法","slug":"深入理解main方法","link":"#深入理解main方法","children":[]},{"level":2,"title":"代码块(Code Block)","slug":"代码块-code-block","link":"#代码块-code-block","children":[{"level":3,"title":"代码块的好处和案例演示","slug":"代码块的好处和案例演示","link":"#代码块的好处和案例演示","children":[]},{"level":3,"title":"使用代码块的注意事项","slug":"使用代码块的注意事项","link":"#使用代码块的注意事项","children":[]}]},{"level":2,"title":"单例设计模式","slug":"单例设计模式","link":"#单例设计模式","children":[{"level":3,"title":"基本介绍","slug":"基本介绍","link":"#基本介绍","children":[]},{"level":3,"title":"快速上手","slug":"快速上手","link":"#快速上手","children":[]},{"level":3,"title":"饿汉式和懒汉式的对比","slug":"饿汉式和懒汉式的对比","link":"#饿汉式和懒汉式的对比","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"Final关键字(常量)","slug":"final关键字-常量","link":"#final关键字-常量","children":[{"level":3,"title":"基本介绍","slug":"基本介绍-1","link":"#基本介绍-1","children":[]},{"level":3,"title":"final使用注意事项和细节","slug":"final使用注意事项和细节","link":"#final使用注意事项和细节","children":[]}]},{"level":2,"title":"抽象类(abstract)","slug":"抽象类-abstract","link":"#抽象类-abstract","children":[{"level":3,"title":"抽象类的介绍","slug":"抽象类的介绍","link":"#抽象类的介绍","children":[]},{"level":3,"title":"抽象类的最佳实践-模板设计模式","slug":"抽象类的最佳实践-模板设计模式","link":"#抽象类的最佳实践-模板设计模式","children":[]}]},{"level":2,"title":"接口","slug":"接口","link":"#接口","children":[{"level":3,"title":"接口的基本介绍","slug":"接口的基本介绍","link":"#接口的基本介绍","children":[]},{"level":3,"title":"接口的深入讨论","slug":"接口的深入讨论","link":"#接口的深入讨论","children":[]},{"level":3,"title":"接口的使用细节","slug":"接口的使用细节","link":"#接口的使用细节","children":[]},{"level":3,"title":"关于实现接口和继承类","slug":"关于实现接口和继承类","link":"#关于实现接口和继承类","children":[]},{"level":3,"title":"接口的多态性质","slug":"接口的多态性质","link":"#接口的多态性质","children":[]}]},{"level":2,"title":"内部类","slug":"内部类","link":"#内部类","children":[{"level":3,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[]},{"level":3,"title":"局部内部类的使用（有类名）","slug":"局部内部类的使用-有类名","link":"#局部内部类的使用-有类名","children":[]},{"level":3,"title":"匿名内部类(重要)","slug":"匿名内部类-重要","link":"#匿名内部类-重要","children":[]},{"level":3,"title":"成员内部类的使用","slug":"成员内部类的使用","link":"#成员内部类的使用","children":[]},{"level":3,"title":"静态内部类的使用","slug":"静态内部类的使用","link":"#静态内部类的使用","children":[]}]},{"level":2,"title":"扩展-类的五大成员(面试大概率会问道)","slug":"扩展-类的五大成员-面试大概率会问道","link":"#扩展-类的五大成员-面试大概率会问道","children":[]}],"git":{"createdTime":1687006308000,"updatedTime":1687014880000,"contributors":[{"name":"Amayakite","email":"amayakite@qq.com","commits":2}]},"readingTime":{"minutes":46.26,"words":13878},"filePathRelative":"JavaLang/JavaSE/09-面对对象编程.md","localizedDate":"2021年10月31日","excerpt":"<h2> 类变量</h2>\\n<blockquote>\\n<p>现在有一个问题：有一群小孩在玩堆雪人，不时有新的小孩加入，请问如何知道现在共有多少人在玩？编写程序解决</p>\\n</blockquote>\\n<ul>\\n<li>用传统的方法来解决\\n<ol>\\n<li>\\n<p>在main方法中顶一个一个变量<code>count</code></p>\\n</li>\\n<li>\\n<p>当一个小孩加入游戏后<code>count++</code>，最后根据<code>count</code>来记录有多少个小孩玩游戏</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">package</span> <span class=\\"token namespace\\">com<span class=\\"token punctuation\\">.</span>static_</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ChildGame</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token comment\\">//        定义一个变量，统计有多少个小孩加入了游戏</span>\\n        <span class=\\"token keyword\\">int</span> count <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">Child</span> child1 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Child</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"白骨精\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        child1<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">join</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        count<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">Child</span> child2 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Child</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"狐狸精\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        child2<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">join</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        count<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">Child</span> child3 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Child</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"老鼠\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        child3<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">join</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        count<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"共有\\"</span><span class=\\"token operator\\">+</span>count<span class=\\"token operator\\">+</span><span class=\\"token string\\">\\"加入了游戏\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Child</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">Child</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">=</span> name<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">join</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token operator\\">+</span><span class=\\"token string\\">\\"加入了游戏\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>问题分析：</p>\\n<ol>\\n<li><code>count</code>是一个独立于对象/类变量的东西，很尴尬</li>\\n<li>以后我们<strong>访问count很麻烦</strong>，没有使用到OOP(面对对象编程)</li>\\n<li>因此，我们引出<code>类变量</code>/<code>静态变量</code>来完美的解决该问题</li>\\n</ol>\\n</li>\\n</ol>\\n</li>\\n</ul>","autoDesc":true}');export{n as data};
