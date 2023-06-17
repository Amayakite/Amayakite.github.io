const e=JSON.parse('{"key":"v-53dc6721","path":"/JavaLang/SpringFrameWork/06-JdbcTemplate.html","title":"06-JdbcTemplate","lang":"zh-CN","frontmatter":{"title":"06-JdbcTemplate","date":"2021-12-13T00:03:05.000Z","category":"Spring-FrameWork","tag":["Java","Spring","SpringMvc","JavaWeb"],"description":"概述 ​ 它是Spring框架中提供的一个对象，是对原始繁琐的JDBC APi对象进行简单封装，Spring为我们集成了多个消息模板类，例如： 操作关系型数据库的JdbcTemplate和HibernateTemplate 操作Nosql数据库的RedisTemplate 操作消息队列的JmsTemplate 等等诸多玩意 JDBCtemplate就像是apache jdbc utils 跟那玩意差不多的作用 JDBCTemplate开发步骤","head":[["meta",{"property":"og:url","content":"http://www.amayakite.github.io/JavaLang/SpringFrameWork/06-JdbcTemplate.html"}],["meta",{"property":"og:site_name","content":"Amayakite Blogs"}],["meta",{"property":"og:title","content":"06-JdbcTemplate"}],["meta",{"property":"og:description","content":"概述 ​ 它是Spring框架中提供的一个对象，是对原始繁琐的JDBC APi对象进行简单封装，Spring为我们集成了多个消息模板类，例如： 操作关系型数据库的JdbcTemplate和HibernateTemplate 操作Nosql数据库的RedisTemplate 操作消息队列的JmsTemplate 等等诸多玩意 JDBCtemplate就像是apache jdbc utils 跟那玩意差不多的作用 JDBCTemplate开发步骤"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-17T15:14:40.000Z"}],["meta",{"property":"article:author","content":"Amayakite"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:tag","content":"SpringMvc"}],["meta",{"property":"article:tag","content":"JavaWeb"}],["meta",{"property":"article:published_time","content":"2021-12-13T00:03:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-17T15:14:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06-JdbcTemplate\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-13T00:03:05.000Z\\",\\"dateModified\\":\\"2023-06-17T15:14:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Amayakite\\",\\"url\\":\\"https://github.com/Amayakite\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[{"level":3,"title":"JDBCtemplate就像是apache jdbc utils 跟那玩意差不多的作用","slug":"jdbctemplate就像是apache-jdbc-utils-跟那玩意差不多的作用","link":"#jdbctemplate就像是apache-jdbc-utils-跟那玩意差不多的作用","children":[]},{"level":3,"title":"JDBCTemplate开发步骤","slug":"jdbctemplate开发步骤","link":"#jdbctemplate开发步骤","children":[]},{"level":3,"title":"Spring产生JDBCTemplate对象（配置文件 、注解配置文件）","slug":"spring产生jdbctemplate对象-配置文件-、注解配置文件","link":"#spring产生jdbctemplate对象-配置文件-、注解配置文件","children":[]},{"level":3,"title":"使用JDBCTemplate进行增删改","slug":"使用jdbctemplate进行增删改","link":"#使用jdbctemplate进行增删改","children":[]}]},{"level":2,"title":"使用jdbcTemplate进行查询的操作","slug":"使用jdbctemplate进行查询的操作","link":"#使用jdbctemplate进行查询的操作","children":[{"level":3,"title":"RowMapper接口","slug":"rowmapper接口","link":"#rowmapper接口","children":[]},{"level":3,"title":"✨BeanPropertyRowMapper的使用","slug":"✨beanpropertyrowmapper的使用","link":"#✨beanpropertyrowmapper的使用","children":[]},{"level":3,"title":"✨queryForObject查询单个对象","slug":"✨queryforobject查询单个对象","link":"#✨queryforobject查询单个对象","children":[]},{"level":3,"title":"JDBCtemplate使用了RowMapper接口后接收参数","slug":"jdbctemplate使用了rowmapper接口后接收参数","link":"#jdbctemplate使用了rowmapper接口后接收参数","children":[]},{"level":3,"title":"✨查询单个字段-queryForObject传入class","slug":"✨查询单个字段-queryforobject传入class","link":"#✨查询单个字段-queryforobject传入class","children":[]}]},{"level":2,"title":"✨✨  JdbcTemplate总结","slug":"✨✨-jdbctemplate总结","link":"#✨✨-jdbctemplate总结","children":[{"level":3,"title":"引入依赖","slug":"引入依赖","link":"#引入依赖","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":3,"title":"增删改查","slug":"增删改查","link":"#增删改查","children":[]},{"level":3,"title":"查询","slug":"查询","link":"#查询","children":[]}]},{"level":2,"title":"其他操作","slug":"其他操作","link":"#其他操作","children":[]}],"git":{"createdTime":1687006308000,"updatedTime":1687014880000,"contributors":[{"name":"Amayakite","email":"amayakite@qq.com","commits":2}]},"readingTime":{"minutes":6.56,"words":1969},"filePathRelative":"JavaLang/SpringFrameWork/06-JdbcTemplate.md","localizedDate":"2021年12月13日","excerpt":"<h2> 概述</h2>\\n<p>​  它是Spring框架中提供的一个对象，是对原始繁琐的JDBC APi对象进行简单封装，Spring为我们集成了多个消息模板类，例如：</p>\\n<ul>\\n<li>操作关系型数据库的JdbcTemplate和HibernateTemplate</li>\\n<li>操作Nosql数据库的RedisTemplate</li>\\n<li>操作消息队列的JmsTemplate</li>\\n</ul>\\n<p>等等诸多玩意</p>\\n<h3> JDBCtemplate就像是apache jdbc utils 跟那玩意差不多的作用</h3>\\n<h3> JDBCTemplate开发步骤</h3>","autoDesc":true}');export{e as data};
