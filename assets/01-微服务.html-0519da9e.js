const e=JSON.parse('{"key":"v-67187a7e","path":"/JavaLang/SpringCloud/01-%E5%BE%AE%E6%9C%8D%E5%8A%A1.html","title":"01-微服务","lang":"zh-CN","frontmatter":{"title":"01-微服务","date":"2022-01-02T18:31:06.000Z","category":"分布式-微服务","tag":["微服务","SpringCloud"],"description":"概述 这是Java中和多线程一样让人头秃的东西 微服务是一种加加购模式 它提倡将单一应用程序划分成一组小的服务，服务之间互相协调，互相配合，为用户提供最终价值 每个服务运行在其独立的进程中，服务与服务间才用轻量级的通信机制互相协作（通常是基于Http或者RestFul API） 每个服务都围绕着具体一个服务而言，应根据业务上下文，选择合适的语言、工具对齐进行构建 之前是一个Java程序做所有的事情，微服务就是让这些程序完全解耦合…… 就相当于于是用Spring Boot 开发一个一个的单元 通过某个东西 只对外暴露一个借口 然后他们这些单元之间互相通信、互相协调","head":[["meta",{"property":"og:url","content":"http://www.amayakite.github.io/JavaLang/SpringCloud/01-%E5%BE%AE%E6%9C%8D%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"Amayakite Blogs"}],["meta",{"property":"og:title","content":"01-微服务"}],["meta",{"property":"og:description","content":"概述 这是Java中和多线程一样让人头秃的东西 微服务是一种加加购模式 它提倡将单一应用程序划分成一组小的服务，服务之间互相协调，互相配合，为用户提供最终价值 每个服务运行在其独立的进程中，服务与服务间才用轻量级的通信机制互相协作（通常是基于Http或者RestFul API） 每个服务都围绕着具体一个服务而言，应根据业务上下文，选择合适的语言、工具对齐进行构建 之前是一个Java程序做所有的事情，微服务就是让这些程序完全解耦合…… 就相当于于是用Spring Boot 开发一个一个的单元 通过某个东西 只对外暴露一个借口 然后他们这些单元之间互相通信、互相协调"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T15:14:40.000Z"}],["meta",{"property":"article:author","content":"Amayakite"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"SpringCloud"}],["meta",{"property":"article:published_time","content":"2022-01-02T18:31:06.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T15:14:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-微服务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-02T18:31:06.000Z\\",\\"dateModified\\":\\"2023-06-17T15:14:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Amayakite\\",\\"url\\":\\"https://github.com/Amayakite\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"关于SpringCloud版本的选择","slug":"关于springcloud版本的选择","link":"#关于springcloud版本的选择","children":[]},{"level":3,"title":"更具体的依赖选型","slug":"更具体的依赖选型","link":"#更具体的依赖选型","children":[]},{"level":3,"title":"Cloud内停用的组件","slug":"cloud内停用的组件","link":"#cloud内停用的组件","children":[]}]},{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[{"level":3,"title":"添加总依赖","slug":"添加总依赖","link":"#添加总依赖","children":[]},{"level":3,"title":"创建子项目，并添加依赖","slug":"创建子项目-并添加依赖","link":"#创建子项目-并添加依赖","children":[]},{"level":3,"title":"准备数据库","slug":"准备数据库","link":"#准备数据库","children":[]},{"level":3,"title":"配置spring boot","slug":"配置spring-boot","link":"#配置spring-boot","children":[]},{"level":3,"title":"准备返回值统一类-ResponseResult","slug":"准备返回值统一类-responseresult","link":"#准备返回值统一类-responseresult","children":[]},{"level":3,"title":"准备接口并测试","slug":"准备接口并测试","link":"#准备接口并测试","children":[]}]},{"level":2,"title":"扩展-使用swagger替代PostMan","slug":"扩展-使用swagger替代postman","link":"#扩展-使用swagger替代postman","children":[{"level":3,"title":"添加依赖和简单使用","slug":"添加依赖和简单使用","link":"#添加依赖和简单使用","children":[]},{"level":3,"title":"Docket的配置一览","slug":"docket的配置一览","link":"#docket的配置一览","children":[]},{"level":3,"title":"配置API文档","slug":"配置api文档","link":"#配置api文档","children":[]},{"level":3,"title":"生产环境下关闭","slug":"生产环境下关闭","link":"#生产环境下关闭","children":[]}]},{"level":2,"title":"准备工作2-消费者","slug":"准备工作2-消费者","link":"#准备工作2-消费者","children":[{"level":3,"title":"使用RestTemplate来完成两个进程的沟通","slug":"使用resttemplate来完成两个进程的沟通","link":"#使用resttemplate来完成两个进程的沟通","children":[]}]},{"level":2,"title":"目前项目中的问题及解决","slug":"目前项目中的问题及解决","link":"#目前项目中的问题及解决","children":[{"level":3,"title":"最终pom文件","slug":"最终pom文件","link":"#最终pom文件","children":[]},{"level":3,"title":"准备工作-结束","slug":"准备工作-结束","link":"#准备工作-结束","children":[]}]}],"git":{"createdTime":1687006308000,"updatedTime":1687014880000,"contributors":[{"name":"Amayakite","email":"amayakite@qq.com","commits":2}]},"readingTime":{"minutes":19.12,"words":5736},"filePathRelative":"JavaLang/SpringCloud/01-微服务.md","localizedDate":"2022年1月2日","excerpt":"<h2> 概述</h2>\\n<p>这是Java中和多线程一样让人头秃的东西</p>\\n<p>微服务是一种加加购模式</p>\\n<p>它提倡将单一应用程序划分成一组小的服务，服务之间互相协调，互相配合，为用户提供最终价值</p>\\n<p>每个服务运行在其独立的进程中，服务与服务间才用轻量级的通信机制互相协作（通常是基于Http或者RestFul API）</p>\\n<p>每个服务都围绕着具体一个服务而言，应根据业务上下文，选择合适的语言、工具对齐进行构建</p>\\n<p>之前是一个Java程序做所有的事情，微服务就是让这些程序完全解耦合……</p>\\n<p>就相当于于是用Spring Boot 开发一个一个的单元 通过某个东西 只对外暴露一个借口 然后他们这些单元之间互相通信、互相协调</p>","autoDesc":true}');export{e as data};
