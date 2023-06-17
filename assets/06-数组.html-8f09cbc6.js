const n=JSON.parse('{"key":"v-480b75c8","path":"/JavaLang/JavaSE/06-%E6%95%B0%E7%BB%84.html","title":"06-数组和冒泡排序","lang":"zh-CN","frontmatter":{"title":"06-数组和冒泡排序","date":"2021-10-26T17:29:15.000Z","category":"JavaSE","tag":["Java","JavaSE"],"description":"数组 基本概念 数组可以存放多个同一类型数据。数组也是一种数据类型，是引用类型 即：数组可以存放一组数据 public class _009Array01{ public static void main(String[] args){ // 定义一个数组 // double[] 表示是double类型的数组 // {3,5,1,3.4,2,50}表示数组的值（元素） // 依次表示数组的0,1,2,3,4,5,6个元素 //这是静态初始化 double[] hens={3,5,1,3.4,2,50}; double sum=0; System.out.println(\\"OutPut:\\"); // 遍历数组得到数组的所有元素的和，使用For // 可以通过hens[下标]来访问数组的元素， // 下表是从0开始的，最大值为数组的长度(length)-1 // 通过for循环就可以轻松的访问其值 for(int i =0; i&lt;hens.length;i++){ sum+=hens[i]; } System.out.println(sum); //64.4 } }","head":[["meta",{"property":"og:url","content":"http://www.amayakite.github.io/JavaLang/JavaSE/06-%E6%95%B0%E7%BB%84.html"}],["meta",{"property":"og:site_name","content":"Amayakite Blogs"}],["meta",{"property":"og:title","content":"06-数组和冒泡排序"}],["meta",{"property":"og:description","content":"数组 基本概念 数组可以存放多个同一类型数据。数组也是一种数据类型，是引用类型 即：数组可以存放一组数据 public class _009Array01{ public static void main(String[] args){ // 定义一个数组 // double[] 表示是double类型的数组 // {3,5,1,3.4,2,50}表示数组的值（元素） // 依次表示数组的0,1,2,3,4,5,6个元素 //这是静态初始化 double[] hens={3,5,1,3.4,2,50}; double sum=0; System.out.println(\\"OutPut:\\"); // 遍历数组得到数组的所有元素的和，使用For // 可以通过hens[下标]来访问数组的元素， // 下表是从0开始的，最大值为数组的长度(length)-1 // 通过for循环就可以轻松的访问其值 for(int i =0; i&lt;hens.length;i++){ sum+=hens[i]; } System.out.println(sum); //64.4 } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T15:14:40.000Z"}],["meta",{"property":"article:author","content":"Amayakite"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JavaSE"}],["meta",{"property":"article:published_time","content":"2021-10-26T17:29:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T15:14:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06-数组和冒泡排序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-10-26T17:29:15.000Z\\",\\"dateModified\\":\\"2023-06-17T15:14:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Amayakite\\",\\"url\\":\\"https://github.com/Amayakite\\"}]}"]]},"headers":[{"level":2,"title":"数组","slug":"数组","link":"#数组","children":[{"level":3,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":3,"title":"数组的使用","slug":"数组的使用","link":"#数组的使用","children":[]},{"level":3,"title":"数组使用的注意事项和细节","slug":"数组使用的注意事项和细节","link":"#数组使用的注意事项和细节","children":[]},{"level":3,"title":"数组赋值机制","slug":"数组赋值机制","link":"#数组赋值机制","children":[]},{"level":3,"title":"初识排序","slug":"初识排序","link":"#初识排序","children":[]},{"level":3,"title":"二维数组","slug":"二维数组","link":"#二维数组","children":[]}]}],"git":{"createdTime":1687006308000,"updatedTime":1687014880000,"contributors":[{"name":"Amayakite","email":"amayakite@qq.com","commits":2}]},"readingTime":{"minutes":6.16,"words":1848},"filePathRelative":"JavaLang/JavaSE/06-数组.md","localizedDate":"2021年10月26日","excerpt":"<h2> 数组</h2>\\n<h3> 基本概念</h3>\\n<blockquote>\\n<p>数组可以存放多个同一类型数据。数组也是一种数据类型，是引用类型</p>\\n<p>即：数组可以存放一组数据</p>\\n</blockquote>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> _009Array01<span class=\\"token punctuation\\">{</span>\\n <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 定义一个数组</span>\\n  <span class=\\"token comment\\">// double[] 表示是double类型的数组</span>\\n  <span class=\\"token comment\\">// {3,5,1,3.4,2,50}表示数组的值（元素）</span>\\n  <span class=\\"token comment\\">// 依次表示数组的0,1,2,3,4,5,6个元素 //这是静态初始化</span>\\n  <span class=\\"token keyword\\">double</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> hens<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">3.4</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">50</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">double</span> sum<span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"OutPut:\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// 遍历数组得到数组的所有元素的和，使用For</span>\\n  <span class=\\"token comment\\">// 可以通过hens[下标]来访问数组的元素，</span>\\n  <span class=\\"token comment\\">// 下表是从0开始的，最大值为数组的长度(length)-1</span>\\n  <span class=\\"token comment\\">// 通过for循环就可以轻松的访问其值</span>\\n  <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">&lt;</span>hens<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span>i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n   sum<span class=\\"token operator\\">+=</span>hens<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>sum<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">//64.4</span>\\n\\n <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
