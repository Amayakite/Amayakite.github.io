import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as l,c,a as n,b as t,e as a,d as s}from"./app.ad7a4a8c.js";var o="/images/Netty/05-Dubbo\u5165\u95E8/image-20220522153343401.png",u="/images/Netty/05-Dubbo\u5165\u95E8/image-20220522162003908.png",r="/images/Netty/05-Dubbo\u5165\u95E8/image-20220522162513134.png",d="/images/Netty/05-Dubbo\u5165\u95E8/image-20220522165235981.png",v="/images/Netty/05-Dubbo\u5165\u95E8/image-20220522165327369.png",k="/images/Netty/05-Dubbo\u5165\u95E8/image-20220522173802103.png",m="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524140947079.png",g="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524141021184.png",b="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524141143182.png",h="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524142654583.png",y="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524142703912.png",S="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524143319226.png",f="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524212736948.png",q="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524213149112.png",x="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524213157156.png",w="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524214250276.png",_="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524215530485.png",I="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524215638445.png",O="/images/Netty/05-Dubbo\u5165\u95E8/image-20220524224556075.png";const D={},U=a('<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u8FD9\u91CC\u76F4\u63A5\u5F15\u7528\u5B98\u7F51\u7684\u8BDD\u8BED</p><blockquote><p><strong>Apache Dubbo \u662F\u4E00\u6B3E\u5FAE\u670D\u52A1\u6846\u67B6\uFF0C\u4E3A\u5927\u89C4\u6A21\u5FAE\u670D\u52A1\u5B9E\u8DF5\u63D0\u4F9B\u9AD8\u6027\u80FD RPC \u901A\u4FE1\u3001\u6D41\u91CF\u6CBB\u7406\u3001\u53EF\u89C2\u6D4B\u6027\u7B49\u89E3\u51B3\u65B9\u6848\uFF0C</strong><strong>\u6DB5\u76D6 Java\u3001Golang \u7B49\u591A\u79CD\u8BED\u8A00 SDK \u5B9E\u73B0\u3002</strong></p><p>Dubbo3 \u5DF2\u88AB\u963F\u91CC\u5DF4\u5DF4\u3001\u997F\u4E86\u4E48\u3001\u9489\u9489\u3001\u5DE5\u5546\u94F6\u884C\u3001\u5C0F\u7C73\u7B49\u5728\u751F\u4EA7\u73AF\u5883\u5E7F\u6CDB\u91C7\u7528</p></blockquote><p>\u603B\u800C\u8A00\u4E4B\uFF0C\u5C31\u662F\u4E00\u5957\u5FAE\u670D\u52A1\u7684RPC\u8C03\u5EA6\u89E3\u51B3\u65B9\u6848</p><p>\u8FD9\u91CC\u4F1A\u7B80\u5355\u7684\u4F7F\u7528Dubbo\u4EE5\u53CA\u8BF4\u660E\u4E00\u4E9BDubbo\u7684\u65B0\u7279\u6027\u548C\u5728golang\u4E2D\u8C03\u7528java\u670D\u52A1</p><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2><h3 id="\u4E24\u4E2A\u670D\u52A1\u7684\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u4E24\u4E2A\u670D\u52A1\u7684\u51C6\u5907" aria-hidden="true">#</a> \u4E24\u4E2A\u670D\u52A1\u7684\u51C6\u5907</h3><p>\u8FD9\u91CC\u5148\u521B\u5EFA\u4E24\u4E2A\u7B80\u7B80\u5355\u5355\u7684SpringBoot\u9879\u76EE\uFF0C\u5206\u522B\u662Fconsumer\u548Cprovider</p><p><img src="'+o+`" alt="image-20220522153343401" loading="lazy"></p><p>\u7136\u540Eprovider\u662F8080\uFF0C\u53E6\u5916\u4E00\u4E2A\u662F8081\uFF0Cprovider\u7684controller\u548Cservice\u5982\u4E0B\uFF0Capplication\u6B63\u5E38\u7684\u5199</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//user controller</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UserController</span><span class="token punctuation">(</span><span class="token class-name">UserService</span> userService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        \u7A81\u7136\u5C31\u4E0D\u592A\u60F3\u7528@Autowired\uFF0C\u6240\u4EE5\u76F4\u63A5\u6784\u9020\u51FD\u6570\u4E86</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> userService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> userService<span class="token punctuation">.</span><span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>service</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// user service</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u662Fconsumer</p><p>application</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConsumerApplication</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u6765\u4E2Arest template</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">RestTemplate</span> <span class="token function">restTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ConsumerApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540EorderController</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderController</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">OrderService</span> orderService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">OrderController</span><span class="token punctuation">(</span><span class="token class-name">OrderService</span> orderService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>orderService <span class="token operator">=</span> orderService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/order&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> orderService<span class="token punctuation">.</span><span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u53CAservice\uFF0Cservice\u662F\u8C03\u7528\u4E868080\u7684\u4E1C\u897F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">RestTemplate</span> restTemplate<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">getForObject</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:8080/user&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result <span class="token operator">+</span> <span class="token string">&quot;====OrderService&quot;</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65F6\u5019\u6B63\u5E38\u7684run\u662F\u5B8C\u5168\u6CA1\u95EE\u9898\u7684\uFF0C\u63A5\u4E0B\u6765\u5C06\u5B83\u6539\u9020\u6210Dubbo</p><h3 id="dubbo\u7684\u5B89\u88C5\u548C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#dubbo\u7684\u5B89\u88C5\u548C\u914D\u7F6E" aria-hidden="true">#</a> Dubbo\u7684\u5B89\u88C5\u548C\u914D\u7F6E</h3><p>\u8981\u4F7F\u7528dubbo\uFF0C\u6211\u4EEC\u60F3\u7ED9\u4E4B\u524D\u7684\u4E24\u4E2A\u6A21\u5757\u90FD\u52A0\u4E0A\u4E0B\u65B9\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!--        \u672C\u4F53--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dubbo-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.0.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--        \u4F7F\u7528\u7684\u534F\u8BAE \u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u7684\u534F\u8BAE\uFF0C\u8FD9\u91CC\u5148\u7528\u8FD9\u4E2A \u6CE8\u610F \u8FD9\u91CC\u8FD8\u6709\u4E2AgroupID\u662Falibaba\u7684\uFF0C\u522B\u7528\u90A3\u4E2A\uFF0C\u4F9D\u8D56\u4F1A\u51B2\u7A81--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dubbo-rpc-dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.0.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--        \u4F7F\u7528\u7684\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528nacos\u4E4B\u7C7B\u7684--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dubbo-registry-zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.0.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u7ED9provider\u7684\u914D\u7F6E\u4E2D\u52A0\u4E0A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
<span class="token key atrule">dubbo</span><span class="token punctuation">:</span>
<span class="token comment">#  dubbo\u4E2D\u7684\u540D\u79F0</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> provider<span class="token punctuation">-</span>application
    
<span class="token comment">#    \u5F53\u524D\u9879\u76EE\u63D0\u4F9B\u670D\u52A1\u7684\u65F6\u5019\u670D\u52A1\u540D\u548C\u5BF9\u5E94\u7684\u7AEF\u53E3</span>
  <span class="token key atrule">protocol</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> dubbo <span class="token comment">#  \u8FD9\u91CC\u662F\u4F7F\u7528\u7684\u534F\u8BAE</span>
   
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">20880</span>
    
<span class="token comment">#    \u6CE8\u518C\u4E2D\u5FC3\u7684\u5730\u5740</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">address</span><span class="token punctuation">:</span> zookeeper<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span><span class="token number">2181</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136consumer\u4E5F\u6539\u6539</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8081</span>

<span class="token key atrule">dubbo</span><span class="token punctuation">:</span>
  <span class="token comment">#  dubbo\u4E2D\u7684\u540D\u79F0</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> provider<span class="token punctuation">-</span>application
  
  <span class="token comment"># \u56E0\u4E3A\u8FD9\u91CC\u4E0D\u63D0\u4F9B\u670D\u52A1\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981protocol\uFF0C\u5982\u679C\u63D0\u4F9B\u7684\u8BDD\uFF0C\u8981\u786E\u4FDD\u7AEF\u53E3\u5565\u7684\u548Cprovider\u4E0D\u4E00\u6837</span>
  
  <span class="token comment">#    \u6CE8\u518C\u4E2D\u5FC3\u7684\u5730\u5740</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">address</span><span class="token punctuation">:</span> zookeeper<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span><span class="token number">2181</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6539\u9020-\u62BD\u79BB\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6539\u9020-\u62BD\u79BB\u63A5\u53E3" aria-hidden="true">#</a> \u6539\u9020-\u62BD\u79BB\u63A5\u53E3</h3><p>\u8981\u5148\u5728\u4E0D\u540C\u7684\u670D\u52A1\u95F4\u4E92\u76F8\u8C03\u7528\u65B9\u6CD5\uFF0C\u6309\u7167\u6211\u4EEC\u4E4B\u524D\u7684rpc\u6D41\u7A0B\uFF0C\u5E94\u8BE5\u662F\u6709\u4E00\u4E2A\u63A5\u53E3\u7684\uFF0C\u6240\u4EE5\u5C06userService\u7684\u63A5\u53E3\u62BD\u79BB\u51FA\u6765</p><p>PS\uFF1ADubbo\u7684RPC\u662F\u65B9\u6CD5\u4E92\u8C03</p><p>\u9996\u5148\u628A\u63A5\u53E3\u62BD\u79BB\u51FA\u5230common\u6A21\u5757\u4E2D</p><p><img src="`+u+`" alt="image-20220522162003908" loading="lazy"></p><p>\u63A5\u7740\u5728provider\u5B9E\u73B0\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@DubboService
public class UserServiceImpl  implements UserService {

    @Override
    public String getUserName() {
        return System.getProperty(&quot;user.name&quot;);
    }
}
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C\u6CE8\u89E3\u4ECE@Service\u53D8\u6210\u4E86@DubboService</p><p>\u7136\u540E\u4FEE\u6539consumer\u4E2D\u7684OrderSerivce</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span>

 <span class="token comment">// \u8FD9\u91CC\u7684DubboReference\u5C31\u662F\u76F8\u5F53\u4E8E\u5C06\u670D\u52A1\u6CE8\u518C\u5230\u8FD9\u4E2Abean\u4E0A</span>
    <span class="token annotation punctuation">@DubboReference</span><span class="token punctuation">(</span>version<span class="token operator">=</span><span class="token string">&quot;1.1&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u76F4\u63A5\u8C03\u7528</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result <span class="token operator">+</span> <span class="token string">&quot;====OrderService&quot;</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u56E0\u4E3A\u5DF2\u7ECF\u7528\u4E0D\u5230Provider\u7684Controller\u4E86\uFF0C\u6240\u4EE5\u53EF\u4EE5\u76F4\u63A5\u5220\u6389</p><p><img src="`+r+`" alt="image-20220522162513134" loading="lazy"></p><p>\u5F53\u7136\uFF0C\u8FD8\u9700\u8981\u5206\u522B\u5728provider\u548Cconsumer\u4E2D\u5206\u522B\u52A0\u4E0A\u6CE8\u89E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@SpringBootApplication
@EnableDubbo // Provider\u540C\u7406
public class ConsumerApplication {


    public static void main(String[] args) {
        SpringApplication.run(ConsumerApplication.class, args);
    }
}
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u8FD8\u6709\u91CD\u8981\u7684\u4E00\u6B65\uFF0C\u56E0\u4E3A\u6211\u4EEC\u662F\u7528\u7684Zookeeper\u6765\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u6240\u4EE5\u8981</p>`,43),j={href:"https://zookeeper.apache.org/releases.html",target:"_blank",rel:"noopener noreferrer"},N=s("Apache ZooKeeper"),C=a('<p>\u4E0B\u8F7D\u597D\uFF08\u968F\u4FBF\u9009\u4E00\u4E2A\u7248\u672C\uFF09\uFF0C\u7136\u540E\u89E3\u538B\u542F\u52A8\u5373\u53EF(\u8BB0\u5F97\u628Aconfig\u4E2D\u7684\u90A3\u4E2Azoo_sample.cfg\u4E2D\u7684_sample\u5220\u6389)</p><p>\u7136\u540E\u542F\u52A8<code>zkServer.cmd/sh</code>\u5373\u53EF</p><p>\u7136\u540EZookeeper\u4F1A\u5360\u75288080(\u7BA1\u7406\u53F0)\uFF0C\u6240\u4EE5\u6211\u4EEC\u7684\u670D\u52A1\u6539\u4E0B\u7AEF\u53E3\uFF0Cprovider=8001\uFF0Cconsumer=8002</p><p>Consume\u5728\u542F\u52A8\u7684\u65F6\u5019\u6709\u53EF\u80FD\u4F1A\u629B\u51FA\u8FD9\u4E2A\u5F02\u5E38</p><p><img src="'+d+'" alt="image-20220522165235981" loading="lazy"></p><p>\u4E0D\u7528\u7BA1\uFF0C\u4E0D\u5F71\u54CD\u4F7F\u7528...\u8C8C\u4F3C\u662FJDK\u7248\u672C\u592A\u9AD8\u5F15\u8D77\u7684\uFF08JDK 17\uFF09</p><p>\u63A5\u7740\u8BBF\u95EE</p><p><img src="'+v+`" alt="image-20220522165327369" loading="lazy"></p><p>\u6069\uFF0C\u8FDC\u7A0B\u8C03\u7528\u5B8C\u6210\uFF01</p><h2 id="triple\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#triple\u534F\u8BAE" aria-hidden="true">#</a> Triple\u534F\u8BAE</h2><h3 id="\u6982\u8FF0-1" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0-1" aria-hidden="true">#</a> \u6982\u8FF0</h3><p>\u5B98\u7F51\u63CF\u8FF0\u5982\u4E0B</p><blockquote><p>\u5B9A\u4E49\u4E86\u5168\u65B0\u7684 RPC \u901A\u4FE1\u534F\u8BAE \u2013 Triple\uFF0C\u4E00\u53E5\u8BDD\u6982\u62EC Triple\uFF1A\u5B83\u662F\u57FA\u4E8E HTTP/2 \u4E0A\u6784\u5EFA\u7684 RPC \u534F\u8BAE\uFF0C\u5B8C\u5168\u517C\u5BB9 gRPC\uFF0C\u5E76\u5728\u6B64\u57FA\u7840\u4E0A\u6269\u5C55\u51FA\u4E86\u66F4\u4E30\u5BCC\u7684\u8BED\u4E49\u3002 \u4F7F\u7528 Triple \u534F\u8BAE\uFF0C\u7528\u6237\u5C06\u83B7\u5F97\u4EE5\u4E0B\u80FD\u529B</p><ul><li>\u66F4\u5BB9\u6613\u5230\u9002\u914D\u7F51\u5173\u3001Mesh\u67B6\u6784\uFF0CTriple \u534F\u8BAE\u8BA9 Dubbo \u66F4\u65B9\u4FBF\u7684\u4E0E\u5404\u79CD\u7F51\u5173\u3001Sidecar \u7EC4\u4EF6\u914D\u5408\u5DE5\u4F5C\u3002</li><li>\u591A\u8BED\u8A00\u53CB\u597D\uFF0C\u63A8\u8350\u914D\u5408 Protobuf \u4F7F\u7528 Triple \u534F\u8BAE\uFF0C\u4F7F\u7528 IDL \u5B9A\u4E49\u670D\u52A1\uFF0C\u4F7F\u7528 Protobuf \u7F16\u7801\u4E1A\u52A1\u6570\u636E\u3002</li><li>\u6D41\u5F0F\u901A\u4FE1\u652F\u6301\u3002Triple \u534F\u8BAE\u652F\u6301 Request Stream\u3001Response Stream\u3001Bi-direction Stream</li></ul><blockquote><p>GRPC\uFF1A\u57FA\u4E8EGoogle Protobuf\u6765\u8FDB\u884C\u8FDC\u7A0B\u8C03\u7528</p></blockquote></blockquote><h3 id="\u5165\u95E8\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5165\u95E8\u4F7F\u7528" aria-hidden="true">#</a> \u5165\u95E8\u4F7F\u7528</h3><p>\u8981\u4F7F\u7528\u8FD9\u4E2A\u534F\u8BAE\uFF0C\u53EA\u9700\u8981</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!--        \u672C\u4F53--&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.apache.dubbo&lt;/groupId&gt;
    &lt;artifactId&gt;dubbo-spring-boot-starter&lt;/artifactId&gt;
    &lt;version&gt;3.0.7&lt;/version&gt;
&lt;/dependency&gt;
&lt;!--        \u4F7F\u7528\u7684\u534F\u8BAE--&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.apache.dubbo&lt;/groupId&gt;
    &lt;artifactId&gt;dubbo-rpc-dubbo&lt;/artifactId&gt;
    &lt;version&gt;3.0.7&lt;/version&gt;
&lt;/dependency&gt;

&lt;!-- \u6DFB\u52A0triple\u534F\u8BAE\u4F9D\u8D56\uFF0C\u4E0A\u9762\u7684dubbo\u4E0D\u8981\u5220\uFF0C\u8C8C\u4F3C\u5E95\u5C42\u8981\u7528\u4E0A --&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.apache.dubbo&lt;/groupId&gt;
    &lt;artifactId&gt;dubbo-rpc-triple&lt;/artifactId&gt;
    &lt;version&gt;3.0.7&lt;/version&gt;
&lt;/dependency&gt;

&lt;!--        \u4F7F\u7528\u7684\u6CE8\u518C\u4E2D\u5FC3--&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.apache.dubbo&lt;/groupId&gt;
    &lt;artifactId&gt;dubbo-registry-zookeeper&lt;/artifactId&gt;
    &lt;version&gt;3.0.7&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\uFF0C\u5728provider\u548Cconsumer\u7684application.yml\u4E2D\u5C06\u534F\u8BAE\u6539\u53D8\u6210\u8FD9\u6837</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server:
  port: 8001
dubbo:
#  dubbo\u4E2D\u7684\u540D\u79F0
  application:
    name: provider-application

#    \u5F53\u524D\u9879\u76EE\u63D0\u4F9B\u670D\u52A1\u7684\u65F6\u5019\u670D\u52A1\u540D\u548C\u5BF9\u5E94\u7684\u7AEF\u53E3
  protocol:
#   before\uFF1A  name: dubbo
    name: tri
    port: 20880
#    \u6CE8\u518C\u4E2D\u7684\u5730\u5740
  registry:
    address: zookeeper://127.0.0.1:2181
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\uFF0C\u53EA\u9700\u8981\u8FD9\u6837\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u5176\u4ED6\u64CD\u4F5C</p><p>\u7136\u540E\u4E1C\u897F\u4E5F\u662F\u6B63\u5E38\u8C03\u7528</p><p><img src="`+k+`" alt="image-20220522173802103" loading="lazy"></p><h3 id="triple\u534F\u8BAE\u7684\u51E0\u79CD\u8C03\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#triple\u534F\u8BAE\u7684\u51E0\u79CD\u8C03\u7528\u65B9\u6CD5" aria-hidden="true">#</a> Triple\u534F\u8BAE\u7684\u51E0\u79CD\u8C03\u7528\u65B9\u6CD5</h3><p>\u4E3B\u8981\u6709\u5982\u4E0B\u51E0\u79CD</p><blockquote><p>UNARY</p></blockquote><p>\u8FD9\u4E2A\u5C31\u662F\u6211\u4EEC\u6B63\u5E38\u7684\u8C03\u7528\u65B9\u6CD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@DubboService</span><span class="token punctuation">(</span>version <span class="token operator">=</span> <span class="token string">&quot;1.1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span>  <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;user.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">//\u8C03\u7528\uFF1A</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@DubboReference</span><span class="token punctuation">(</span>version<span class="token operator">=</span><span class="token string">&quot;1.1&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result <span class="token operator">+</span> <span class="token string">&quot;====OrderService&quot;</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u9664\u6B64\u4E4B\u5916\u8FD8\u6709Server Stream\uFF0CClient Stream\u4EE5\u53CABI Stream\uFF08\u8FD9\u4E2A\u548CClient Stream\u4E00\u6837\u7684\uFF09</p><h3 id="\u4F7F\u7528server-stream\u548Cclient-stream\u7684\u524D\u7F6E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528server-stream\u548Cclient-stream\u7684\u524D\u7F6E\u64CD\u4F5C" aria-hidden="true">#</a> \u4F7F\u7528Server Stream\u548CClient Stream\u7684\u524D\u7F6E\u64CD\u4F5C</h3><p>\u9996\u5148\u9700\u8981\u5728\u81EA\u5DF1\u7684common\u6216\u8005\u5176\u4ED6\u5168\u90E8\u90FD\u80FD\u4F7F\u7528\u7684\u5730\u65B9\u52A0\u4E0A\u8FD9\u4E2A\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- \u6CE8\u610F \u8FD9\u91CC\u662Fapache\u7684\uFF0C3.0\u4E4B\u540E\u4E00\u5F8BApache\uFF0C\u4E4B\u524D\u4E00\u5F8Balibaba--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dubbo-common<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.0.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="server-stream\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#server-stream\u7684\u4F7F\u7528" aria-hidden="true">#</a> Server Stream\u7684\u4F7F\u7528</h3><p>\u4F17\u6240\u5468\u77E5 \u4E00\u4E2A\u65B9\u6CD5\u901A\u5E38\u6700\u591A\u53EA\u80FD\u8FD4\u56DE\u4E00\u6B21\uFF0C\u4F46\u662F\u901A\u8FC7\u8FD9\u79CD\u6D41\u53EF\u4EE5\u6765\u8FBE\u5230\u8FD4\u56DE\u591A\u6B21\u7684\u6548\u679C</p><p>\u9996\u5148\u6211\u4EEC\u670D\u52A1\u7AEF\u5E94\u8BE5\u4EE5\u8FD9\u79CD\u8BED\u6CD5\u6765\u5199\u5B9E\u73B0\u7684\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public interface UserService {
    /**
     * \u6B63\u5E38\u8C03\u7528\uFF1AUnary
     *
     * @return String
     */
    String getUserName();

    /**
     * \u670D\u52A1\u7AEF\u6D41\uFF08Server Stream\uFF09 \u8FD9\u91CC\u4E5F\u53EF\u4EE5\u4E0D\u5199default\uFF08\u987A\u4FBF\u52A0\u4E0A\u4E86\u61D2\u5F97\u5220\uFF09
     * \u6CE8\u610F \u8FD4\u56DE\u7C7B\u578B\u5FC5\u987B\u5F97\u662Fvoid
     * \u7136\u540E\u4E00\u5B9A\u8981\u6709\u4E00\u4E2A {@link StreamObserver&lt;?&gt;}\u7684\u53C2\u6570 \u8FD9\u975E\u5E38\u91CD\u8981
     *
     * @param name     \u8FD9\u4E2A\u65B9\u6CD5 \u539F\u672C\u9700\u8981\u7684\u53C2\u6570
     * @param response \u56DE\u8C03\u53C2\u6570 \u91CD\u8981
     */
    default void sayHelloServerStream(String name, StreamObserver&lt;String&gt; response) {

    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\u670D\u52A1\u7AEF\u5B9E\u73B0\u8FD9\u4E2A\u65B9\u6CD5\uFF08Provider\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.project.service;

import org.apache.catalina.User;
import org.apache.dubbo.common.stream.StreamObserver;
import org.apache.dubbo.config.annotation.DubboService;
import org.springframework.stereotype.Service;

/**
 * @author Amayakite
 * @version 1.0
 * @date 2022\u5E7405\u670822\u65E515\u65F625\u520643\u79D2
 * @description DubboService\u7684version\u5C5E\u6027\uFF0C\u53EF\u4EE5\u6307\u5B9A\u7248\u672C\u53F7\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A
 */
@DubboService(version = &quot;1.1&quot;)
public class UserServiceImpl implements UserService {

    @Override
    public String getUserName() {
        return System.getProperty(&quot;user.name&quot;);
    }

    @Override
    public void sayHelloServerStream(String name, StreamObserver&lt;String&gt; response) {
//        \u54CD\u5E94\u4E00\u6B21
        response.onNext(&quot;Hello~&quot; + name);
//        \u518D\u54CD\u5E94\u4E00\u6B21
        response.onNext(&quot;Good Bye~&quot; + name);
//        \u7ED3\u675F\u54CD\u5E94
        response.onCompleted();
    }
}

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u670D\u52A1\u7AEF\u8C03\u7528\uFF0C\u8FD9\u91CC\u76F4\u63A5\u7528\u533F\u540D\u5185\u90E8\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.project.service;

import org.apache.catalina.User;
import org.apache.dubbo.common.stream.StreamObserver;
import org.apache.dubbo.config.annotation.DubboReference;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;

/**
 * @author Amayakite
 * @version 1.0
 * @date 2022\u5E7405\u670822\u65E515\u65F625\u520643\u79D2
 * @description TODO
 */
@Service
public class OrderService {


    @DubboReference(version = &quot;1.1&quot;)
    UserService userService;

    /**
     *
     * @return Str
     */
    public String getOrder() {
        final StringBuilder builder = new StringBuilder();
        userService.sayHelloServerStream(&quot;\u5F20\u4E09&quot;, new StreamObserver&lt;String&gt;() {
            /**
             * \u63A5\u6536\u5230\u6D88\u606F\u7684\u65F6\u5019\u89E6\u53D1
             * @param data to process
             */
            @Override
            public void onNext(String data) {
                System.out.println(&quot;\u63A5\u6536\u5230\u4E86\u6D88\u606F:&quot; + data);
                builder.append(data);
                builder.append(&#39;\\n&#39;);
            }

            /**
             * \u63A5\u6536\u5230\u5F02\u5E38\u7684\u65F6\u5019\u89E6\u53D1
             * @param throwable error
             */
            @Override
            public void onError(Throwable throwable) {
                throw new RuntimeException(throwable);
            }

            /**
             * \u5B8C\u6210\u7684\u65F6\u5019\u89E6\u53D1
             */
            @Override
            public void onCompleted() {
                System.out.println(&quot;\u5BA2\u6237\u7AEF\u63A5\u6536\u6D88\u606F\u5B8C\u6BD5&quot;);
            }
        });
        return builder.toString();
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u8C03\u7528\u7684\u65F6\u5019</p><p><img src="`+m+'" alt="image-20220524140947079" loading="lazy"></p><p><img src="'+g+'" alt="image-20220524141021184" loading="lazy"></p><p>\u6211\u4EEC\u672C\u8EAB\u6CA1\u6709\u4EFB\u4F55\u8FD4\u56DE\u503C\uFF0C\u4F46\u662F\u5185\u5BB9\u662F\u6536\u5230\u4E86...\u53EF\u80FD\u8FD9\u73A9\u610F\u662F\u5F02\u6B65\u7684\uFF1F</p><p>\u7136\u540E\u5C1D\u8BD5\u5728return \u524D\u52A0\u4E00\u4E2Asleep 1s</p><p><img src="'+b+`" alt="image-20220524141143182" loading="lazy"></p><p>\u8FD9\u4E2A\u65F6\u5019\u80FD\u6B63\u5E38\u63A5\u6536\u5230\u5185\u5BB9\u4E86\uFF0C\u4E0D\u8FC7\u8FD9\u7B49\u5F85\u6709\u70B9\u86CB\u75BC\uFF0C\u611F\u89C9\u66F4\u9002\u5408\u505A\u5F02\u6B65\u64CD\u4F5C\u4E4B\u7C7B\u7684\u4E1C\u897F</p><h3 id="client-stream" tabindex="-1"><a class="header-anchor" href="#client-stream" aria-hidden="true">#</a> Client Stream</h3><p>\u8FD9\u4E2A\u5C31\u662F\u7528\u4E8E\u53CC\u7AEF\u5373\u65F6\u901A\u8BAF\u7684\uFF0C\u4E00\u822C\u4E0D\u4F1A\u7528\u5728\u5BF9\u7528\u6237\u63A5\u53E3\u4E0A\uFF08\u5C31\u7B97\u7528\u4E0A\u4E86\u4E5F\u662Fws\u4E4B\u7C7B\u7684\u60C5\u666F\uFF0C\u56E0\u4E3A\u5E95\u5C42\u5B9E\u9645\u4E0A\u8FD8\u662F\u5F02\u6B65\u6267\u884C\u7684\uFF09\uFF0C\u6240\u4EE5\u4E5F\u79F0\u4E3A\u53CC\u7AEF\u6D41</p><p>\u9996\u5148\u4F9D\u65E7\u662F\u63A5\u53E3\u7684\u4E66\u5199</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public interface UserService {
    /**
     * \u6B63\u5E38\u8C03\u7528\uFF1AUnary
     *
     * @return String
     */
    String getUserName();

    /**
     * \u5BA2\u6237\u7AEF\u6D41\uFF08Client Stream / BI Stream\uFF09
     * \u8FD4\u56DE\u7C7B\u578B\u5FC5\u987B\u5F97\u662F {@link  StreamObserver&lt;?&gt;} \u540C\u65F6\u5165\u53C2\u8981\u548C\u8FD4\u56DE\u503C\u4E00\u6A21\u4E00\u6837
     *
     * @param response
     * @return
     */
    default StreamObserver&lt;String&gt; sayHelloClietnStream(StreamObserver&lt;String&gt; response) {
        return response;
    }


}

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5148\u5199\u5BA2\u6237\u7AEF(\u8C03\u7528\u65B9)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>project<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">lombok<span class="token punctuation">.</span>val</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>common<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span><span class="token class-name">StreamObserver</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">DubboReference</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Amayakite
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2022\u5E7405\u670822\u65E515\u65F625\u520643\u79D2
 * <span class="token keyword">@description</span> TODO
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@DubboReference</span><span class="token punctuation">(</span>version <span class="token operator">=</span> <span class="token string">&quot;1.1&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Unary
     *
     * <span class="token keyword">@return</span> Str
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        val resultStreamObserver <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">sayHelloClietnStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StreamObserver</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onNext</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5BA2\u6237\u7AEF\u63A5\u6536\u5230\u4E86\u6570\u636E&quot;</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onError</span><span class="token punctuation">(</span><span class="token class-name">Throwable</span> throwable<span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;client observer on close &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        \u8FD9\u91CC\u662F\u7ED9\u670D\u52A1\u7AEF\u65B9\u53D1\u9001\u6570\u636E</span>
        resultStreamObserver<span class="token punctuation">.</span><span class="token function">onNext</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resultStreamObserver<span class="token punctuation">.</span><span class="token function">onNext</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resultStreamObserver<span class="token punctuation">.</span><span class="token function">onNext</span><span class="token punctuation">(</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resultStreamObserver<span class="token punctuation">.</span><span class="token function">onCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\u670D\u52A1\u7AEF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@DubboService(version = &quot;1.1&quot;)
public class UserServiceImpl implements UserService {

    @Override
    public String getUserName() {
        return System.getProperty(&quot;user.name&quot;);
    }

    @Override
    public StreamObserver&lt;String&gt; sayHelloClietnStream(StreamObserver&lt;String&gt; response) {
        return new StreamObserver&lt;String&gt;() {
            @Override
            public void onNext(String data) {
                System.out.println(&quot;\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u4E86\u6570\u636E&quot; + data);
                response.onNext(&quot;server result:&quot; + data);
            }

            @Override
            public void onError(Throwable throwable) {

            }

            @Override
            public void onCompleted() {
                System.out.println(&quot;server observer close &quot;);
//                \u540C\u65F6\u8BA9\u5BA2\u6237\u7AEF\u90A3\u8FB9\u4E5F\u5173\u95ED
                response.onCompleted();
            }
        };
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u670D\u52A1\u7AEF\u7ED3\u679C</p><p><img src="`+h+'" alt="image-20220524142654583" loading="lazy"></p><p>\u5BA2\u6237\u7AEF\u7ED3\u679C</p><p><img src="'+y+'" alt="image-20220524142703912" loading="lazy"></p><h2 id="\u8DE8\u8BED\u8A00\u901A\u8BAF-\u548Cgolang\u901A\u8BAF" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u8BED\u8A00\u901A\u8BAF-\u548Cgolang\u901A\u8BAF" aria-hidden="true">#</a> \u8DE8\u8BED\u8A00\u901A\u8BAF-\u548CGolang\u901A\u8BAF</h2><p>\u8FD9\u91CC\u5047\u8BBE\u4F60\u5B66\u8FC7\u4E86golang\uFF08\u9644\u5E26gomod\u4E4B\u7C7B\u7684\uFF09\uFF0C\u6CA1\u6709\u7684\u8BDD\u53EF\u4EE5\u4E0D\u770B</p><p>\u8FD9\u91CCieda\u8F6C\u4E86go\u63D2\u4EF6\uFF0C\u6240\u4EE5\u76F4\u63A5\u5728ieda\u91CC\u9762\u521B\u5EFA\u6A21\u5757</p><p><img src="'+S+'" alt="image-20220524143319226" loading="lazy"></p><p>PS\uFF1A\u540E\u9762\u8BD5\u4E86\u4E0B\uFF0C\u8C8C\u4F3C\u6709\u70B9\u95EE\u9898\uFF0C\u6211\u76F4\u63A5\u65B0\u5EFA\u6587\u4EF6\u5939\u7136\u540Ego mod init\u4E86</p><h3 id="userservice\u63A5\u53E3\u7684\u53CC\u65B9\u4F7F\u7528-protobuf" tabindex="-1"><a class="header-anchor" href="#userservice\u63A5\u53E3\u7684\u53CC\u65B9\u4F7F\u7528-protobuf" aria-hidden="true">#</a> UserService\u63A5\u53E3\u7684\u53CC\u65B9\u4F7F\u7528-Protobuf</h3><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528protobuf\u6765\u5B9A\u4E49\u63A5\u53E3\uFF0C\u7136\u540E\u901A\u8FC7protobuf\u7684\u7F16\u8BD1\u5668\u5C06\u63A5\u53E3\u7F16\u8BD1\u4E3A\u7279\u5B9A\u8BED\u8A00\u7684\u5B9E\u73B0</p><p>\u6211\u4EEC\u5728src/main\u4E0B\u9762\u65B0\u5EFAproto\u6587\u4EF6\u5939\uFF0C\u6CE8\u610F \u8FD9\u91CC\u662F\u548Cjava\u5E73\u7EA7\u7684</p><p><img src="'+f+`" alt="image-20220524212736948" loading="lazy"></p><p>\u7136\u540E\u5199\u5165\u5982\u4E0B\u5185\u5BB9</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>syntax <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">package</span> <span class="token namespace">api</span><span class="token punctuation">;</span>

option go_package <span class="token operator">=</span> <span class="token string">&quot;./;api&quot;</span><span class="token punctuation">;</span>

option java_multiple_files <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

option java_package <span class="token operator">=</span> <span class="token string">&quot;com.project.service&quot;</span><span class="token punctuation">;</span>

option java_outer_classname <span class="token operator">=</span> <span class="token string">&quot;UserServiceProto&quot;</span><span class="token punctuation">;</span>


<span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u670D\u52A1</span>
service <span class="token class-name">UserService</span><span class="token punctuation">{</span>
<span class="token comment">//  rpc\u8C03\u7528 getUser \u9700\u8981\u4F20\u5165\u7684\u53C2\u6570 \u548C\u8FD4\u56DE\u503C</span>
  rpc <span class="token class-name">GetUser</span><span class="token punctuation">(</span><span class="token class-name">UserRequest</span><span class="token punctuation">)</span> returns <span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

message <span class="token class-name">UserRequest</span><span class="token punctuation">{</span>
  string  uid <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
message <span class="token class-name">User</span><span class="token punctuation">{</span>
  string uid <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  string username <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java\u7AEF\u4E00\u952E\u7F16\u8BD1proto\u6587\u4EF6\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#java\u7AEF\u4E00\u952E\u7F16\u8BD1proto\u6587\u4EF6\u7684\u65B9\u5F0F" aria-hidden="true">#</a> Java\u7AEF\u4E00\u952E\u7F16\u8BD1proto\u6587\u4EF6\u7684\u65B9\u5F0F</h3><p>\u6211\u4EEC\u5728provider\u4E2D\u52A0\u5165\u5982\u4E0B\u5185\u5BB9\uFF08\u8FD9\u91CC\u662F\u989D\u5916\u52A0\u5165\uFF0Cspring boot\u4E4B\u7C7B\u7684\u4EA4\u7ED9\u7236pom\u5728\u7BA1\u7406\uFF09</p><p>\u8FD9\u4E0B\u9762\u7684\u90FD\u662F\u56FA\u5B9A\u5199\u6CD5\uFF0C\u9700\u8981\u7528\u4E0A\u4E86\u76F4\u63A5copy\u5373\u53EF</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>Dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>provider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u89C4\u5B9Aproto\u7248\u672C \u4E00\u822C\u6700\u65B0\u5373\u53EF--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>protobuf.version</span><span class="token punctuation">&gt;</span></span>3.20.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>protobuf.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u8BA9\u5728java\u4E2D\u53EF\u4EE5\u4F7F\u7528protobuf--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.google.protobuf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>protobuf-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${protobuf.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--        \u4E0B\u9762\u8FD9\u4E2A\u4E0D\u53BB\u6389\u4F1A\u62A5\u9519\uFF0C\u540E\u9762\u7684os.detected.classifier\u53D8\u91CF\u4F1A\u7528\u4E0D\u4E86--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>extensions</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>extension</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>kr.motd.maven<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>os-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.7.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>extension</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>extensions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-compiler-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--                \u6700\u65B0\u7248\u672C\u5373\u53EF--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.10.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--                    \u8FD9\u91CC\u7684java\u7248\u672C\u4E00\u5B9A\u8981\u662F\u9879\u76EEjava\u7248\u672C\uFF08\u5982\u679C\u662F1.8\u5C31\u51991.8\uFF0C11\u5C31\u519911\uFF0C17\u5C31\u519917\uFF09--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>target</span><span class="token punctuation">&gt;</span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>target</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span><span class="token punctuation">&gt;</span></span>17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>source</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.xolstice.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>protobuf-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token comment">&lt;!--                \u6700\u65B0\u7248\u672C\u5373\u53EF--&gt;</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.6.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--                    \u8FD9\u91CC\u7684\u7248\u672C\u8981\u548C\u4E0A\u9762\u7684\u4E00\u6837 \u7136\u540Emvn\u4F1A\u81EA\u52A8\u4E0B\u8F7D\u5BF9\u5E94\u7684protoc\u5E76\u4E14\u81EA\u52A8\u6253\u5305--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>protocArtifact</span><span class="token punctuation">&gt;</span></span>com.google.protobuf:protoc:\${protobuf.version}:exe:\${os.detected.classifier}
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>protocArtifact</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--                    \u53BB\u54EA\u4E2A\u6587\u4EF6\u5939\u627Eproto\u6587\u4EF6--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>protoSourceRoot</span><span class="token punctuation">&gt;</span></span>\${project.basedir}/src/main/proto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>protoSourceRoot</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--                    \u628A\u7F16\u8BD1\u597D\u7684java\u6587\u4EF6\u8F93\u51FA\u5728\u54EA\u513F--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>\${project.basedir}/src/main/java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>clearOutputDirectory</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>clearOutputDirectory</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>protocPlugins</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--\u8FD9\u91CC\u662F\u8BA9\u5176\u652F\u6301dubbo\u7684\u529F\u80FD--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>protocPlugin</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.dubbo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dubbo-compiler<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mainClass</span><span class="token punctuation">&gt;</span></span>org.apache.dubbo.gen.dubbo.Dubbo3Generator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mainClass</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>protocPlugin</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>protocPlugins</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>test-compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\u70B9\u51FB\u8FD9\u5373\u53EF\u81EA\u52A8\u8F6C\u6362proto\u6587\u4EF6</p><p><img src="`+q+'" alt="image-20220524213149112" loading="lazy"></p><p>\u6548\u679C</p><p><img src="'+x+`" alt="image-20220524213157156" loading="lazy"></p><p>\u751F\u6210\u4E867\u4E2A\u6587\u4EF6</p><h3 id="java\u670D\u52A1\u7AEFprovider\u7684\u4EE3\u7801\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#java\u670D\u52A1\u7AEFprovider\u7684\u4EE3\u7801\u7F16\u5199" aria-hidden="true">#</a> Java\u670D\u52A1\u7AEFProvider\u7684\u4EE3\u7801\u7F16\u5199</h3><p>\u6211\u4EEC\u8FD9\u91CC\u5C31\u662F\u76F4\u63A5\u5199\u4E00\u4E2A\u7C7B\u5B9E\u73B0UserService\uFF08\u7531Protobuf\u751F\u6210\u7684\u90A3\u4E2A\uFF09\u7136\u540E\u5B9E\u73B0\u4E0B\u521A\u521A\u624B\u5199\u7684getUser\u65B9\u6CD5\u5373\u53EF</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>project<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">DubboService</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Amayakite
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2022-05-24 21:35
 * <span class="token keyword">@packageName</span> com.project.service
 * <span class="token keyword">@description</span> Java Provider\u670D\u52A1\u7AEF
 */</span>
<span class="token annotation punctuation">@DubboService</span><span class="token punctuation">(</span>version <span class="token operator">=</span> <span class="token string">&quot;1.1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token class-name">UserRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> uid <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getUid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        \u5199\u6CD5\u8FD8\u662F\u548C\u4E4B\u524D\u5728Netty\u4E2D\u4E00\u81F4\u7684\uFF0C\u6B63\u5E38newBuild\u548Cbuild\u5373\u53EF</span>
        <span class="token keyword">return</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setUid</span><span class="token punctuation">(</span>uid<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="golang\u7AEF\u7684struct\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#golang\u7AEF\u7684struct\u751F\u6210" aria-hidden="true">#</a> Golang\u7AEF\u7684struct\u751F\u6210</h3><p>\u9996\u5148\uFF0C\u6211\u4EEC\u628Aproto\u6587\u4EF6\u590D\u5236\u5230go\u6A21\u5757\u4E2D\u7684proto\u6587\u4EF6\u5939\u5185\uFF0C\u5E76\u4E14\u518D\u65B0\u5EFA\u4E2Aapi\u6587\u4EF6\u5939\u65B9\u4FBF\u4E4B\u540E\u5B58\u50A8\u751F\u6210\u7684\u6587\u4EF6</p><p><img src="`+w+'" alt="image-20220524214250276" loading="lazy"></p>',83),P=s("\u7136\u540E\u6211\u5047\u8BBE\u4F60\u8FD8\u6CA1\u6709\u5728\u7535\u8111\u4E0A\u4E0B\u8F7Dprotoc\uFF0C\u5C31\u53BB"),R={href:"https://github.com/protocolbuffers/protobuf/releases/",target:"_blank",rel:"noopener noreferrer"},T=s("Releases \xB7 protocolbuffers/protobuf (github.com)"),z=s("\u4E0B\u8F7D\u4E00\u4E2Alatest\u7248\u672C\u7684\uFF08\u7EFF\u8272\u7684windows\u4E8C\u8FDB\u5236\uFF09"),A=a(`<p>\u7136\u540E\u628A\u91CC\u9762\u7684bin\u4E2D\u7684protoc.exe\u62F7\u51FA\u6765\u6DFB\u52A0\u5230path\u73AF\u5883\u53D8\u91CF\u4E2D</p><p>\u540C\u65F6go\u7684\u5B89\u88C5\u4E4B\u7C7B\u7684\u6574\u597D\uFF0C\u7136\u540E\u5728<code>go-consumer/proto</code>\u4E2D\u6253\u5F00shell\uFF0C\u8F93\u5165\u5982\u4E0B\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go <span class="token function">env</span> -w <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
go <span class="token function">env</span> -w <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct

go get -u github.com/dubbogo/tools/cmd/protoc-gen-go-triple
<span class="token comment"># \u6CE8\u610F \u8FD9\u91CC\u8981\u4FDD\u8BC1gopath\u4E2D\u7684bin\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF\u5185</span>
go <span class="token function">install</span> github.com/golang/protobuf/protoc-gen-go@latest
go <span class="token function">install</span> github.com/dubbogo/tools/cmd/protoc-gen-go-triple@latest

<span class="token comment"># \u63A5\u7740\u8FD0\u884C</span>
protoc -I. userservice.proto --go_out<span class="token operator">=</span><span class="token punctuation">..</span>/api --go-triple_out<span class="token operator">=</span><span class="token punctuation">..</span>/api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u5F97\u5230\u4E24\u4E2A\u559C\u95FB\u70ED\u89C1\u7684\u8D85\u5927\u6587\u4EF6\u4E86</p><p>\u5F53\u7136 \u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u770B\u5F97\u5230\u6709\u5F88\u591A\u7206\u7EA2\u7684</p><p><img src="`+_+`" alt="image-20220524215530485" loading="lazy"></p><p>\u76F4\u63A5\u5728\u8FD9\u4E2Ago-consumer\u4E0B\u7684\u4EFB\u610F\u8DEF\u5F84shell\u8F93\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u7B49\u5F85\u62C9\u5305\u5373\u53EF</p><p><img src="`+I+`" alt="image-20220524215638445" loading="lazy"></p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u9700\u8981\u975E\u5E38\u591A\u7684\u5305...</p><p>\u7136\u540E\u5728main.go(\u81EA\u5DF1new\u4E00\u4E2A)\u5199\u5165\u5982\u4E0B\u5185\u5BB9</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;context&quot;</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;go-consumer/api&quot;</span>

    <span class="token string">&quot;dubbo.apache.org/dubbo-go/v3/common/logger&quot;</span>
    <span class="token string">&quot;dubbo.apache.org/dubbo-go/v3/config&quot;</span>
    <span class="token boolean">_</span> <span class="token string">&quot;dubbo.apache.org/dubbo-go/v3/imports&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> userServiceImpl <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span>api<span class="token punctuation">.</span>UserServiceClientImpl<span class="token punctuation">)</span>

<span class="token comment">// export DUBBO_GO_CONFIG_PATH=conf/dubbogo.yml</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span><span class="token function">SetConsumerService</span><span class="token punctuation">(</span>userServiceImpl<span class="token punctuation">)</span>
    err <span class="token operator">:=</span> config<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;load error&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    logger<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span><span class="token string">&quot;start to test dubbo&quot;</span><span class="token punctuation">)</span>

    req <span class="token operator">:=</span> <span class="token operator">&amp;</span>api<span class="token punctuation">.</span>UserRequest<span class="token punctuation">{</span>
        Uid<span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>

    u<span class="token punctuation">,</span> err <span class="token operator">:=</span> userServiceImpl<span class="token punctuation">.</span><span class="token function">GetUser</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> req<span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        logger<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FA\u73B0\u5F02\u5E38\u4E86&quot;</span><span class="token punctuation">)</span>
        logger<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    logger<span class="token punctuation">.</span><span class="token function">Infof</span><span class="token punctuation">(</span><span class="token string">&quot;client response result: %v\\n&quot;</span><span class="token punctuation">,</span> u<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u8FD0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u518Dtidy\u4E0B</span>
go mod tidy
<span class="token comment"># \u6307\u5B9A\u73AF\u5883\u53D8\u91CF\u8DEF\u5F84</span>
go run <span class="token builtin class-name">.</span> -DUBBO_GO_CONFIG_PATH<span class="token operator">=</span>conf/dubbogo.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6309\u9053\u7406\u6765\u8BF4\u8FD9\u4E00\u6B65\u5E94\u8BE5\u5C31\u6210\u529F\u4E86\uFF0C\u4F46\u662F\u6211\u8FD9\u629B\u5F02\u5E38\uFF0C\u4E5F\u4E0D\u77E5\u9053\u5565\u60C5\u51B5\uFF08\u4E3B\u8981\u8FD8\u662Fbuild\u7684\u5F02\u5E38\uFF0C\u7B97\u4E86\uFF0C\u4E4B\u540E\u6709\u7A7A\u5B66\u5B66go\u7684rpx\u5E94\u8BE5\u5C31\u77E5\u9053\u8FD9\u662F\u5565\u60C5\u51B5\u4E86\uFF09</p><p><img src="`+O+'" alt="image-20220524224556075" loading="lazy"></p><h2 id="\u5E95\u5C42todo" tabindex="-1"><a class="header-anchor" href="#\u5E95\u5C42todo" aria-hidden="true">#</a> \u5E95\u5C42TODO</h2><p>\u5E95\u5C42\u539F\u7406\u5C31\u50CF\u6401\u4E00\u8FB9\u5427\uFF0C\u51C6\u5907\u5148\u53BB\u8FC7\u4E00\u904DAndroid\u518D\u6765\u800D\u800DDubbo\u5E95\u5C42</p>',19);function B(G,E){const e=p("ExternalLinkIcon");return l(),c("div",null,[U,n("p",null,[n("a",j,[N,t(e)])]),C,n("p",null,[P,n("a",R,[T,t(e)]),z]),A])}var M=i(D,[["render",B],["__file","05-Dubbo\u5165\u95E8.html.vue"]]);export{M as default};
