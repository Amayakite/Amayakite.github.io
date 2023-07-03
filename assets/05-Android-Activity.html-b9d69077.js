const t=JSON.parse('{"key":"v-2ba99a0a","path":"/JavaLang/Android/05-Android-Activity.html","title":"5-Activity和中级控件","lang":"zh-CN","frontmatter":{"title":"5-Activity和中级控件","date":"2022-06-04T16:30:33.000Z","category":"Andorid","tag":["Android","Activity"],"description":"概述 在Android中，总共有四大组件 Activity-屏幕组件 Service-服务组件 广播接收者 内容提供者 其他三者之后会说明，先由Activity开始，因为它是四大组件中最重要也是使用最频繁的组件 活动Activity 启动和结束(跳转页面) 要从当前页面跳转到新页面，跳转代码如下 startActivity(new Intenet(源页面.this,目标页面.class))","head":[["meta",{"property":"og:url","content":"http://www.amayakite.github.io/JavaLang/Android/05-Android-Activity.html"}],["meta",{"property":"og:site_name","content":"Amayakite Blogs"}],["meta",{"property":"og:title","content":"5-Activity和中级控件"}],["meta",{"property":"og:description","content":"概述 在Android中，总共有四大组件 Activity-屏幕组件 Service-服务组件 广播接收者 内容提供者 其他三者之后会说明，先由Activity开始，因为它是四大组件中最重要也是使用最频繁的组件 活动Activity 启动和结束(跳转页面) 要从当前页面跳转到新页面，跳转代码如下 startActivity(new Intenet(源页面.this,目标页面.class))"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-03T01:51:05.000Z"}],["meta",{"property":"article:author","content":"Amayakite"}],["meta",{"property":"article:tag","content":"Android"}],["meta",{"property":"article:tag","content":"Activity"}],["meta",{"property":"article:published_time","content":"2022-06-04T16:30:33.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-03T01:51:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5-Activity和中级控件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-04T16:30:33.000Z\\",\\"dateModified\\":\\"2023-07-03T01:51:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Amayakite\\",\\"url\\":\\"https://github.com/Amayakite\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"活动Activity","slug":"活动activity","link":"#活动activity","children":[{"level":3,"title":"启动和结束(跳转页面)","slug":"启动和结束-跳转页面","link":"#启动和结束-跳转页面","children":[]},{"level":3,"title":"Activity的生命周期","slug":"activity的生命周期","link":"#activity的生命周期","children":[]},{"level":3,"title":"生命周期中应该做的事情","slug":"生命周期中应该做的事情","link":"#生命周期中应该做的事情","children":[]},{"level":3,"title":"Activity的启动模式","slug":"activity的启动模式","link":"#activity的启动模式","children":[]},{"level":3,"title":"使用不同的启动模式","slug":"使用不同的启动模式","link":"#使用不同的启动模式","children":[]}]},{"level":2,"title":"在Activity之间传递消息","slug":"在activity之间传递消息","link":"#在activity之间传递消息","children":[{"level":3,"title":"Intent概述","slug":"intent概述","link":"#intent概述","children":[]},{"level":3,"title":"显示Intent","slug":"显示intent","link":"#显示intent","children":[]},{"level":3,"title":"隐式Intent","slug":"隐式intent","link":"#隐式intent","children":[]},{"level":3,"title":"向下一个Activity发送数据","slug":"向下一个activity发送数据","link":"#向下一个activity发送数据","children":[]},{"level":3,"title":"向上一个Activity发送数据","slug":"向上一个activity发送数据","link":"#向上一个activity发送数据","children":[]}]},{"level":2,"title":"为活动补充附加信息","slug":"为活动补充附加信息","link":"#为活动补充附加信息","children":[{"level":3,"title":"通过清单文件或者元数据传递配置信息","slug":"通过清单文件或者元数据传递配置信息","link":"#通过清单文件或者元数据传递配置信息","children":[]},{"level":3,"title":"元数据-给应用页面注册快捷方式","slug":"元数据-给应用页面注册快捷方式","link":"#元数据-给应用页面注册快捷方式","children":[]}]},{"level":2,"title":"中级控件","slug":"中级控件","link":"#中级控件","children":[]},{"level":2,"title":"图形定制","slug":"图形定制","link":"#图形定制","children":[{"level":3,"title":"关于Drawable","slug":"关于drawable","link":"#关于drawable","children":[]},{"level":3,"title":"形状图形Shape","slug":"形状图形shape","link":"#形状图形shape","children":[]},{"level":3,"title":"Shape的标签和属性说明","slug":"shape的标签和属性说明","link":"#shape的标签和属性说明","children":[]},{"level":3,"title":"Shape-渐变实例","slug":"shape-渐变实例","link":"#shape-渐变实例","children":[]},{"level":3,"title":"九宫格图片(9 patch)","slug":"九宫格图片-9-patch","link":"#九宫格图片-9-patch","children":[]},{"level":3,"title":"状态列表图形（点击切换状态）","slug":"状态列表图形-点击切换状态","link":"#状态列表图形-点击切换状态","children":[]}]},{"level":2,"title":"按钮选择","slug":"按钮选择","link":"#按钮选择","children":[{"level":3,"title":"复选框","slug":"复选框","link":"#复选框","children":[]},{"level":3,"title":"开关按钮Switch","slug":"开关按钮switch","link":"#开关按钮switch","children":[]},{"level":3,"title":"单选按钮RadioButton","slug":"单选按钮radiobutton","link":"#单选按钮radiobutton","children":[]}]},{"level":2,"title":"文本输入","slug":"文本输入","link":"#文本输入","children":[{"level":3,"title":"编辑框EditText","slug":"编辑框edittext","link":"#编辑框edittext","children":[]},{"level":3,"title":"编辑框获取焦点的时候换背景","slug":"编辑框获取焦点的时候换背景","link":"#编辑框获取焦点的时候换背景","children":[]},{"level":3,"title":"编辑框的附加属性列表","slug":"编辑框的附加属性列表","link":"#编辑框的附加属性列表","children":[]}]},{"level":2,"title":"对话框","slug":"对话框","link":"#对话框","children":[]}],"git":{"createdTime":1687011047000,"updatedTime":1688349065000,"contributors":[{"name":"Amayakite","email":"amayakite@qq.com","commits":3}]},"readingTime":{"minutes":24.74,"words":7421},"filePathRelative":"JavaLang/Android/05-Android-Activity.md","localizedDate":"2022年6月4日","excerpt":"<h2> 概述</h2>\\n<p>在Android中，总共有四大组件</p>\\n<ul>\\n<li>Activity-屏幕组件</li>\\n<li>Service-服务组件</li>\\n<li>广播接收者</li>\\n<li>内容提供者</li>\\n</ul>\\n<p>其他三者之后会说明，先由Activity开始，因为它是四大组件中最重要也是使用最频繁的组件</p>\\n<h2> 活动Activity</h2>\\n<h3> 启动和结束(跳转页面)</h3>\\n<blockquote>\\n<p>要从当前页面跳转到新页面，跳转代码如下</p>\\n</blockquote>\\n<ul>\\n<li><code>startActivity(new Intenet(源页面.this,目标页面.class))</code></li>\\n</ul>","autoDesc":true}');export{t as data};
