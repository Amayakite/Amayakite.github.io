const e=JSON.parse('{"key":"v-05145895","path":"/JavaLang/SpringCloud/17-1-Sa-Token%E5%8D%95%E7%82%B9%E8%AE%A4%E8%AF%81.html","title":"17-1-Sa-Token单点认证","lang":"zh-CN","frontmatter":{"title":"17-1-Sa-Token单点认证","date":"2022-01-21T18:35:30.000Z","category":"分布式-微服务","tag":["Sa-Token","Security"],"description":"概述 凡是稍微上点规模的系统，统一认证中心都是绕不过去的槛。而单点登录——便是我们搭建统一认证中心的关键。 那么什么是单点登陆，它能解决哪些问题呢？ 举个场景，假设我们的系统被切割为N个部分：商城、论坛、直播、社交…… 如果用户每访问一个模块都要登录一次，那么用户将会疯掉， 为了优化用户体验，我们急需一套机制将这N个系统的认证授权互通共享，让用户在一个系统登录之后，便可以畅通无阻的访问其它所有系统。 单点登录——就是为了解决这个问题而生！ 简而言之，单点登录可以做到：在多个互相信任的系统中，用户只需登录一次，就可以访问所有系统。","head":[["meta",{"property":"og:url","content":"http://www.amayakite.github.io/JavaLang/SpringCloud/17-1-Sa-Token%E5%8D%95%E7%82%B9%E8%AE%A4%E8%AF%81.html"}],["meta",{"property":"og:site_name","content":"Amayakite Blogs"}],["meta",{"property":"og:title","content":"17-1-Sa-Token单点认证"}],["meta",{"property":"og:description","content":"概述 凡是稍微上点规模的系统，统一认证中心都是绕不过去的槛。而单点登录——便是我们搭建统一认证中心的关键。 那么什么是单点登陆，它能解决哪些问题呢？ 举个场景，假设我们的系统被切割为N个部分：商城、论坛、直播、社交…… 如果用户每访问一个模块都要登录一次，那么用户将会疯掉， 为了优化用户体验，我们急需一套机制将这N个系统的认证授权互通共享，让用户在一个系统登录之后，便可以畅通无阻的访问其它所有系统。 单点登录——就是为了解决这个问题而生！ 简而言之，单点登录可以做到：在多个互相信任的系统中，用户只需登录一次，就可以访问所有系统。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T15:14:40.000Z"}],["meta",{"property":"article:author","content":"Amayakite"}],["meta",{"property":"article:tag","content":"Sa-Token"}],["meta",{"property":"article:tag","content":"Security"}],["meta",{"property":"article:published_time","content":"2022-01-21T18:35:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T15:14:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"17-1-Sa-Token单点认证\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-21T18:35:30.000Z\\",\\"dateModified\\":\\"2023-06-17T15:14:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Amayakite\\",\\"url\\":\\"https://github.com/Amayakite\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"🎉统一认证中心SSO-Server","slug":"🎉统一认证中心sso-server","link":"#🎉统一认证中心sso-server","children":[{"level":3,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":3,"title":"设置登陆Controller","slug":"设置登陆controller","link":"#设置登陆controller","children":[]},{"level":3,"title":"配置全局异常处理","slug":"配置全局异常处理","link":"#配置全局异常处理","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":3,"title":"🎉sso路径下的API列表","slug":"🎉sso路径下的api列表","link":"#🎉sso路径下的api列表","children":[]}]},{"level":2,"title":"前端同域 + 后端同 Redis","slug":"前端同域-后端同-redis","link":"#前端同域-后端同-redis","children":[{"level":3,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":3,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":3,"title":"指定Cookie的作用域","slug":"指定cookie的作用域","link":"#指定cookie的作用域","children":[]},{"level":3,"title":"搭建Client项目","slug":"搭建client项目","link":"#搭建client项目","children":[]},{"level":3,"title":"访问测试","slug":"访问测试","link":"#访问测试","children":[]}]},{"level":2,"title":"🎉前端不同域 + 后端同 Redis","slug":"🎉前端不同域-后端同-redis","link":"#🎉前端不同域-后端同-redis","children":[{"level":3,"title":"思路","slug":"思路-1","link":"#思路-1","children":[]},{"level":3,"title":"准备工作-修改Hosts","slug":"准备工作-修改hosts","link":"#准备工作-修改hosts","children":[]},{"level":3,"title":"搭建Client","slug":"搭建client","link":"#搭建client","children":[]},{"level":3,"title":"测试访问","slug":"测试访问","link":"#测试访问","children":[]}]},{"level":2,"title":"🎉🎉后端不同 Redis（Client端没有Redis）","slug":"🎉🎉后端不同-redis-client端没有redis","link":"#🎉🎉后端不同-redis-client端没有redis","children":[{"level":3,"title":"问题分析","slug":"问题分析","link":"#问题分析","children":[]},{"level":3,"title":"在Client端更该Ticker校验方式","slug":"在client端更该ticker校验方式","link":"#在client端更该ticker校验方式","children":[]},{"level":3,"title":"启动并测试","slug":"启动并测试","link":"#启动并测试","children":[]}]},{"level":2,"title":"三种配置模式的总结","slug":"三种配置模式的总结","link":"#三种配置模式的总结","children":[]},{"level":2,"title":"🎉配置域名校验","slug":"🎉配置域名校验","link":"#🎉配置域名校验","children":[{"level":3,"title":"目前存在的漏洞","slug":"目前存在的漏洞","link":"#目前存在的漏洞","children":[]},{"level":3,"title":"防范方法","slug":"防范方法","link":"#防范方法","children":[]},{"level":3,"title":"🎉配置安全性参考表","slug":"🎉配置安全性参考表","link":"#🎉配置安全性参考表","children":[]}]},{"level":2,"title":"定制化登陆界面","slug":"定制化登陆界面","link":"#定制化登陆界面","children":[{"level":3,"title":"何时引导用户去登陆","slug":"何时引导用户去登陆","link":"#何时引导用户去登陆","children":[]},{"level":3,"title":"如何自定义登陆API的地址","slug":"如何自定义登陆api的地址","link":"#如何自定义登陆api的地址","children":[]}]},{"level":2,"title":"🎉自定义API的路由","slug":"🎉自定义api的路由","link":"#🎉自定义api的路由","children":[{"level":3,"title":"修改全局变量的方式","slug":"修改全局变量的方式","link":"#修改全局变量的方式","children":[]},{"level":3,"title":"拆分路由入口的方式","slug":"拆分路由入口的方式","link":"#拆分路由入口的方式","children":[]}]},{"level":2,"title":"🎉前后端分离的整合方案","slug":"🎉前后端分离的整合方案","link":"#🎉前后端分离的整合方案","children":[{"level":3,"title":"新增H5Controller接口","slug":"新增h5controller接口","link":"#新增h5controller接口","children":[]},{"level":3,"title":"增加跨域过滤器","slug":"增加跨域过滤器","link":"#增加跨域过滤器","children":[]},{"level":3,"title":"改造Server端","slug":"改造server端","link":"#改造server端","children":[]}]},{"level":2,"title":"相关的配置表","slug":"相关的配置表","link":"#相关的配置表","children":[{"level":3,"title":"Server端","slug":"server端","link":"#server端","children":[]},{"level":3,"title":"Client 端","slug":"client-端","link":"#client-端","children":[]},{"level":3,"title":"配置示例","slug":"配置示例","link":"#配置示例","children":[]}]}],"git":{"createdTime":1687006308000,"updatedTime":1687014880000,"contributors":[{"name":"Amayakite","email":"amayakite@qq.com","commits":2}]},"readingTime":{"minutes":33.85,"words":10156},"filePathRelative":"JavaLang/SpringCloud/17-1-Sa-Token单点认证.md","localizedDate":"2022年1月21日","excerpt":"<h2> 概述</h2>\\n<p>凡是稍微上点规模的系统，统一认证中心都是绕不过去的槛。而单点登录——便是我们搭建统一认证中心的关键。</p>\\n<p>那么什么是单点登陆，它能解决哪些问题呢？</p>\\n<p>举个场景，假设我们的系统被切割为N个部分：商城、论坛、直播、社交…… 如果用户每访问一个模块都要登录一次，那么用户将会疯掉， 为了优化用户体验，我们急需一套机制将这N个系统的认证授权互通共享，让用户在一个系统登录之后，便可以畅通无阻的访问其它所有系统。</p>\\n<p>单点登录——就是为了解决这个问题而生！</p>\\n<p>简而言之，单点登录可以做到：<strong><code>在多个互相信任的系统中，用户只需登录一次，就可以访问所有系统。</code></strong></p>","autoDesc":true}');export{e as data};
