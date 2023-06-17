const e=JSON.parse('{"key":"v-453e79e4","path":"/JavaLang/SpringFrameWork/01-Spring.html","title":"01-Spring","lang":"zh-CN","frontmatter":{"title":"01-Spring","date":"2021-12-09T15:07:15.000Z","category":"Spring-FrameWork","tag":["Java","Spring"],"description":"Spring的简介 md总算学到这个玩意了，这个东西是Java程序员的命根子。。 ​ 首先解决下你的疑惑，Spring是分层的JavaSE/EE应用full-stack轻量级开源框架，以Ioc(Inverse Of Count：反转控制)和Aop(Aspect OrientedProgramming：面向切面编程)为内核 ​ Spring提供了展现层SpringMVC和持久层Spring JDBCTemplate以及业务层事务管理等众多的企业级应用技术，还能整合开源世界众多著名的第三方框架和库，逐渐成为使用最多的JavaEE企业级应用开源框架","head":[["meta",{"property":"og:url","content":"http://www.amayakite.github.io/JavaLang/SpringFrameWork/01-Spring.html"}],["meta",{"property":"og:site_name","content":"Amayakite Blogs"}],["meta",{"property":"og:title","content":"01-Spring"}],["meta",{"property":"og:description","content":"Spring的简介 md总算学到这个玩意了，这个东西是Java程序员的命根子。。 ​ 首先解决下你的疑惑，Spring是分层的JavaSE/EE应用full-stack轻量级开源框架，以Ioc(Inverse Of Count：反转控制)和Aop(Aspect OrientedProgramming：面向切面编程)为内核 ​ Spring提供了展现层SpringMVC和持久层Spring JDBCTemplate以及业务层事务管理等众多的企业级应用技术，还能整合开源世界众多著名的第三方框架和库，逐渐成为使用最多的JavaEE企业级应用开源框架"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T15:14:40.000Z"}],["meta",{"property":"article:author","content":"Amayakite"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:published_time","content":"2021-12-09T15:07:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T15:14:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-Spring\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-09T15:07:15.000Z\\",\\"dateModified\\":\\"2023-06-17T15:14:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Amayakite\\",\\"url\\":\\"https://github.com/Amayakite\\"}]}"]]},"headers":[{"level":2,"title":"Spring的简介","slug":"spring的简介","link":"#spring的简介","children":[{"level":3,"title":"Spring的优势","slug":"spring的优势","link":"#spring的优势","children":[]},{"level":3,"title":"Spring的体系结构","slug":"spring的体系结构","link":"#spring的体系结构","children":[]},{"level":3,"title":"Spring程序开发步骤","slug":"spring程序开发步骤","link":"#spring程序开发步骤","children":[]},{"level":3,"title":"使用SPring完成对Dao的操作","slug":"使用spring完成对dao的操作","link":"#使用spring完成对dao的操作","children":[]}]},{"level":2,"title":"Spring的配置文件","slug":"spring的配置文件","link":"#spring的配置文件","children":[]},{"level":2,"title":"✨✨Spring配置文件一览","slug":"✨✨spring配置文件一览","link":"#✨✨spring配置文件一览","children":[{"level":3,"title":"Bean标签的基本配置","slug":"bean标签的基本配置","link":"#bean标签的基本配置","children":[]},{"level":3,"title":"Bean生命周期配置的属性","slug":"bean生命周期配置的属性","link":"#bean生命周期配置的属性","children":[]},{"level":3,"title":"配置文件中设定实例化的方式（无参、工厂静态、工厂实例）","slug":"配置文件中设定实例化的方式-无参、工厂静态、工厂实例","link":"#配置文件中设定实例化的方式-无参、工厂静态、工厂实例","children":[]},{"level":3,"title":"配置文件-依赖注入","slug":"配置文件-依赖注入","link":"#配置文件-依赖注入","children":[]},{"level":3,"title":"依赖注入的概念","slug":"依赖注入的概念","link":"#依赖注入的概念","children":[]},{"level":3,"title":"Bean依赖注入支持的类型","slug":"bean依赖注入支持的类型","link":"#bean依赖注入支持的类型","children":[]},{"level":3,"title":"分模块开发-将配置文件变成多个，并引入","slug":"分模块开发-将配置文件变成多个-并引入","link":"#分模块开发-将配置文件变成多个-并引入","children":[]},{"level":3,"title":"Spring配置的总结","slug":"spring配置的总结","link":"#spring配置的总结","children":[]}]},{"level":2,"title":"Spring相关的API","slug":"spring相关的api","link":"#spring相关的api","children":[{"level":3,"title":"ApplicationContext的继承体系","slug":"applicationcontext的继承体系","link":"#applicationcontext的继承体系","children":[]},{"level":3,"title":"getBean方法的使用","slug":"getbean方法的使用","link":"#getbean方法的使用","children":[]}]}],"git":{"createdTime":1687006308000,"updatedTime":1687014880000,"contributors":[{"name":"Amayakite","email":"amayakite@qq.com","commits":2}]},"readingTime":{"minutes":24.6,"words":7381},"filePathRelative":"JavaLang/SpringFrameWork/01-Spring.md","localizedDate":"2021年12月9日","excerpt":"<h2> Spring的简介</h2>\\n<blockquote>\\n<p>md总算学到这个玩意了，这个东西是Java程序员的命根子。。</p>\\n</blockquote>\\n<p>​  首先解决下你的疑惑，Spring是<strong>分层的JavaSE/EE应用</strong>full-stack<strong>轻量级</strong>开源框架，以Ioc(Inverse Of Count：反转控制)和Aop(Aspect OrientedProgramming：<strong>面向切面编程</strong>)为内核</p>\\n<p>​  Spring提供了展现层<code>SpringMVC</code>和持久层<code>Spring JDBCTemplate</code>以及业务层事务管理等众多的企业级应用技术，还能整合开源世界众多著名的第三方框架和库，逐渐成为使用最多的JavaEE企业级应用开源框架</p>","autoDesc":true}');export{e as data};
