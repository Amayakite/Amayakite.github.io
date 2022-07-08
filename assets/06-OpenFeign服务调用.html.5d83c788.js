import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as l,c,a as n,b as r,e as s,d as e}from"./app.9bdfa67b.js";var p="/images/SpringCloud/06-OpenFeign\u670D\u52A1\u8C03\u7528/image-20220107002216095.png",d="/images/SpringCloud/06-OpenFeign\u670D\u52A1\u8C03\u7528/image-20220107002433314.png",o="/images/SpringCloud/06-OpenFeign\u670D\u52A1\u8C03\u7528/image-20220107140006892.png",u="/images/SpringCloud/06-OpenFeign\u670D\u52A1\u8C03\u7528/image-20220107140639004.png",v="/images/SpringCloud/06-OpenFeign\u670D\u52A1\u8C03\u7528/image-20220107151236540.png",m="/images/SpringCloud/06-OpenFeign\u670D\u52A1\u8C03\u7528/image-20220107153359361.png",g="/images/SpringCloud/06-OpenFeign\u670D\u52A1\u8C03\u7528/image-20220107153506807.png";const b={},k=s('<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><blockquote><p>\u662F\u5565\uFF1F</p></blockquote><p><img src="'+p+'" alt="image-20220107002216095" loading="lazy"></p><p>\u662F\u4E00\u4E2A\u58F0\u660E\u5F0F\u7684Web\u5BA2\u6237\u7AEF\u670D\u52A1\u7AEF\uFF0C\u8BA9web\u670D\u52A1\u5BA2\u6237\u7AEF\u53D8\u5F97\u975E\u5E38\u5BB9\u6613\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u63A5\u53E3\u5E76\u5728\u63A5\u53E3\u4E0A\u6DFB\u52A0\u6CE8\u89E3\u5373\u53EF</p><p><img src="'+d+`" alt="image-20220107002433314" loading="lazy"></p><h2 id="\u5FEB\u901F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4F7F\u7528" aria-hidden="true">#</a> \u5FEB\u901F\u4F7F\u7528</h2><h3 id="\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a> \u4F9D\u8D56</h3><p>\u975E\u5E38\u7B80\u5355\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u4F9D\u8D56\uFF0C\u4E3A\u4E86\u9632\u6B62\u51B2\u7A81 \u6211\u8FD9\u91CC\u91CD\u65B0\u5EFA\u7ACB\u4E86\u4E00\u4E2A\u5305</p><p>\u4F9D\u8D56\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
        &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
        &lt;artifactId&gt;spring-cloud-starter-netflix-eureka-client&lt;/artifactId&gt;
    &lt;/dependency&gt;

    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-devtools&lt;/artifactId&gt;
        &lt;scope&gt;runtime&lt;/scope&gt;
        &lt;optional&gt;true&lt;/optional&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-configuration-processor&lt;/artifactId&gt;
        &lt;optional&gt;true&lt;/optional&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
        &lt;artifactId&gt;lombok&lt;/artifactId&gt;
        &lt;optional&gt;true&lt;/optional&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
        &lt;scope&gt;test&lt;/scope&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;com.amayakite&lt;/groupId&gt;
        &lt;artifactId&gt;cloud-api-commons&lt;/artifactId&gt;
        &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.jetbrains&lt;/groupId&gt;
        &lt;artifactId&gt;annotations&lt;/artifactId&gt;
        &lt;version&gt;RELEASE&lt;/version&gt;
        &lt;scope&gt;compile&lt;/scope&gt;
    &lt;/dependency&gt;

&lt;/dependencies&gt;
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E3B\u7A0B\u5E8F\u548C\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u7A0B\u5E8F\u548C\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4E3B\u7A0B\u5E8F\u548C\u914D\u7F6E\u6587\u4EF6</h3><p>\u6211\u8FD9\u91CC\u4F9D\u65E7\u4F7F\u7528\u7684\u662FEureka\uFF0C\u4F7F\u7528\u5176\u4ED6\u7684main\u7A0B\u5E8F\u914D\u7F6E\u540C\u7406</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@SpringBootApplication
@EnableEurekaClient
@EnableFeignClients
public class OrderFeign80Application {

    public static void main(String[] args) {
        SpringApplication.run(OrderFeign80Application.class, args);
    }

}

</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7684<code>@EnableFeignClients</code>\u8868\u793A\u5F00\u542Ffeign\u670D\u52A1</p><p>\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FDE\u63A5Eureka</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>

<span class="token comment"># \u914D\u7F6EEureka</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token comment">#\u8868\u793A\u662F\u5426\u5C06\u81EA\u5DF1\u6CE8\u518C\u8FDBEurekaServer \u9ED8\u8BA4true</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># \u662F\u5426\u4ECEEurekaServer\u6293\u53D6\u81EA\u5DF1\u7684\u6CE8\u518C\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u5355\u8282\u70B9\u65E0\u6240\u8C13\uFF0C\u96C6\u7FA4\u5FC5\u987B\u8BBE\u7F6E\u4E3Atrue\u624D\u80FD\u914D\u5408ribbon\u4F7F\u7528\u5747\u8861\u8D1F\u8F7D</span>
    <span class="token key atrule">fetch-registry</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># EurekaServer\u7684\u5730\u5740\uFF0C\u9ED8\u8BA4\u4E3Alocalhost:8761</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>7001/eureka<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>7002/eureka
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> cloud<span class="token punctuation">-</span>consumer<span class="token punctuation">-</span>order<span class="token punctuation">-</span><span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="services" tabindex="-1"><a class="header-anchor" href="#services" aria-hidden="true">#</a> services</h3><p>\u6211\u4EEC\u53EA\u9700\u8981\u7B80\u5355\u914D\u7F6E\u4E0Bservice<strong>\u63A5\u53E3</strong>\u5C31\u80FD\u4F7F\u7528\u4E86\uFF0C\u5C31\u50CF\u662Fmybatis\u90A3\u6837</p><p>\u8FD9\u4E2Afeign\u5C31\u76F8\u5F53\u4E8E\u5C01\u88C5\u4E86restTemplate</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Service
@FeignClient(&quot;CLOUD-PROVIDER-PAYMENT&quot;)
public interface PaymentFeignService {
    
    @GetMapping(&quot;/payment/test&quot;)
    public String test();
}

</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7684<code>@FeignClient</code>\u8868\u793A\u4F7F\u7528\u54EA\u4E2A\u670D\u52A1\uFF0C\u7136\u540E\u4E0B\u9762\u7684<code>@getmapping</code>\u5C31\u76F8\u5F53\u4E8E\u662F\u8BBF\u95EE\u6307\u5B9A\u670D\u52A1\u7684\u6307\u5B9A\u63A5\u53E3</p><p>\u8FD9\u91CC\u7684<code>/payment/test</code>\u6211\u57288001\u548C8002\u4E0A\u5BF9\u5E94\u7684\u65B9\u6CD5\u4E3A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//8001</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/payment/test&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;8001 test&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 8002</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/payment/test&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;8002 test&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> Controller</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@RestController
public class OrderController {

    @Autowired
    PaymentFeignService paymentFeignService;

    @GetMapping(&quot;/test&quot;)
    public String test() {
        return paymentFeignService.test();
    }

}

</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u4F7F\u7528\u7684\u8BDD\u4E5F\u975E\u5E38\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u6CE8\u5165\u8FD9\u4E2A\u63A5\u53E3\u5C31\u884C\uFF0C\u7136\u540E\u8C03\u7528\u521A\u521A\u6211\u4EEC\u5B9A\u4E49\u7684\u65B9\u6CD5</p><h3 id="\u542F\u52A8\u5E76\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5E76\u6D4B\u8BD5" aria-hidden="true">#</a> \u542F\u52A8\u5E76\u6D4B\u8BD5</h3><p>\u542F\u52A8\u540E\u7167\u5E38\u8BBF\u95EE\u5373\u53EF\uFF0C\u7ED3\u679C\u5C31\u50CF\u662F\u6211\u4EEC\u624B\u52A8\u8C03\u7528restTemplate\u90A3\u6837</p><p>\u4F7F\u7528\u5B83\u7684\u597D\u5904\u662F\uFF1A\u6211\u4EEC\u4E0D\u7528\u624B\u52A8\u5199RestTemplate\u4E86</p><p><img src="`+o+`" alt="image-20220107140006892" loading="lazy"></p><h2 id="openfeign\u7684\u8D85\u65F6\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#openfeign\u7684\u8D85\u65F6\u63A7\u5236" aria-hidden="true">#</a> OpenFeign\u7684\u8D85\u65F6\u63A7\u5236</h2><p>\u6BD4\u65B9\u8BF4\u6211\u73B0\u5728\u76848001\u670D\u52A1\u5904\u7406\u9700\u8981\u65F6\u95F4\uFF0C\u4F8B\u5982\u4E09\u79D2\u949F</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token string">&quot;8001 test&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\u6211\u4EEC\u542F\u52A8\u5E76\u6D4B\u8BD5\uFF0C\u786E\u5B9E\u4E09\u79D2\u591A\u8FD4\u56DE\u4E86\u7ED3\u679C\uFF08PS\uFF1A552ms\u662F\u56E0\u4E3A\u7B2C\u4E00\u6B21\u8BF7\u6C42\uFF0C\u6240\u4EE5\u8981\u8F83\u957F\u65F6\u95F4\uFF0C\u4E4B\u540E\u5C31\u662F20ms\u5DE6\u53F3\uFF09</p><p><img src="`+u+`" alt="image-20220107140639004" loading="lazy"></p><p>\u5982\u679C\u662F\u65E7\u7248\u672C \u9ED8\u8BA4\u662F1s \u4E5F\u5C31\u662F1s\u4E4B\u540E\u6CA1\u6709\u7ED3\u679C \u629B\u51FA\u5F02\u5E38\uFF0C\u65B0\u7248\u672C\u5219\u662F60s</p><p>\u65E7\u7248\u672C\u4FEE\u6539\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4\u4E3A5s</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#\u8BBE\u7F6Efeign\u5BA2\u6237\u7AEF\u8D85\u65F6\u65F6\u95F4(OpenFeign\u9ED8\u8BA4\u652F\u6301ribbon)</span>
<span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
<span class="token comment">#\u6307\u7684\u662F\u5EFA\u7ACB\u8FDE\u63A5\u6240\u7528\u7684\u65F6\u95F4\uFF0C\u9002\u7528\u4E8E\u7F51\u7EDC\u72B6\u51B5\u6B63\u5E38\u7684\u60C5\u51B5\u4E0B,\u4E24\u7AEF\u8FDE\u63A5\u6240\u7528\u7684\u65F6\u95F4</span>
  <span class="token key atrule">ReadTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
<span class="token comment">#\u6307\u7684\u662F\u5EFA\u7ACB\u8FDE\u63A5\u540E\u4ECE\u670D\u52A1\u5668\u8BFB\u53D6\u5230\u53EF\u7528\u8D44\u6E90\u6240\u7528\u7684\u65F6\u95F4</span>
  <span class="token key atrule">ConnectTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B0\u7248\u672C\u4FEE\u6539\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4\u4E3A5s</p>`,39),h=e("\u5B98\u65B9\u6587\u6863"),y={href:"https://docs.spring.io/spring-cloud-openfeign/docs/current/reference/html/#timeout-handling",target:"_blank",rel:"noopener noreferrer"},f=e("https://docs.spring.io/spring-cloud-openfeign/docs/current/reference/html/#timeout-handling"),I=s(`<p>\u8FD9\u5B98\u65B9\u6587\u6863\u5C31tm\u7684\u7ED5</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span>
      <span class="token comment"># \u8FD9\u91CC\u4F7F\u7528\u9A7C\u5CF0\u4E5F\u53EF\u4EE5 \u90FD\u80FD\u90A3\u5565</span>
        <span class="token key atrule">connect-timeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
        <span class="token key atrule">read-timeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
<span class="token comment"># \u5982\u679C\u8981\u6307\u5B9A\u67D0\u4E2A\u670D\u52A1\u7684\u8D85\u65F6\uFF0C\u4F8B\u5982CLOUD-PROVIDER-PAYMENT\uFF1A</span>
 <span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token comment"># \u8FD9\u91CC\u7684\u670D\u52A1\u540D\u4E00\u5B9A\u8981\u662F\u6CE8\u518C\u7684\u670D\u52A1\u540D\uFF0C\u5982\u679C\u4E0D\u662FEureka\uFF0C\u5219\u8981\u6CE8\u610F\u4E0B\u5927\u5C0F\u5199</span>
      <span class="token key atrule">CLOUD-PROVIDER-PAYMENT</span><span class="token punctuation">:</span>
        <span class="token key atrule">connectTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
        <span class="token key atrule">readTimeout</span><span class="token punctuation">:</span> <span class="token number">61000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="openfeign\u7684\u65E5\u5FD7\u6253\u5370" tabindex="-1"><a class="header-anchor" href="#openfeign\u7684\u65E5\u5FD7\u6253\u5370" aria-hidden="true">#</a> OpenFeign\u7684\u65E5\u5FD7\u6253\u5370</h2><p><img src="`+v+`" alt="image-20220107151236540" loading="lazy"></p><p>\u6709\u56DB\u4E2A\u7EA7\u522B</p><p>\u65E7\u7248\u672C\uFF08\u4F7F\u7528ribbon\u7684\u7248\u672C\uFF09\u9700\u8981\u624B\u52A8\u6CE8\u518C\u4E0Bbean</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FeignConfig</span><span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span> <span class="token function">feginLoggerLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Lever</span><span class="token punctuation">.</span>FULL<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\u5728yaml\u4E2D\u914D\u7F6E\u4E0Bdebug\u7EA7\u522B\u5373\u53EF</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">logging.level.com.Project.cloud</span><span class="token punctuation">:</span> debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u8BF4\u662F\u6700\u65B0\u7248\u672C\uFF1A\u76F4\u63A5\u5728yaml\u4E2D\u914D\u7F6E\u5982\u4E0B\u7684\u5373\u53EF</p><p>\u6CE8\u610F \u914D\u7F6E\u7684loggerLevel\u6253\u5370\u53EA\u5728<code>logging.level.\u4F60\u9879\u76EE\u7684\u5305</code>\u4E3Adebug\u6A21\u5F0F\u7684\u65F6\u5019\u751F\u6548</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
<span class="token comment">#      \u6307\u5B9A\u54EA\u4E00\u4E2A\u670D\u52A1</span>
      <span class="token key atrule">CLOUD-PROVIDER-PAYMENT</span><span class="token punctuation">:</span>
        <span class="token key atrule">connectTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
        <span class="token key atrule">readTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
        <span class="token key atrule">loggerLevel</span><span class="token punctuation">:</span> full
<span class="token key atrule">logging.level.com.Project.cloud</span><span class="token punctuation">:</span> debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A</p><p><img src="`+m+'" alt="image-20220107153359361" loading="lazy"></p><p>\u975E\u5E38\u7684\u8BE6\u7EC6</p><p><img src="'+g+'" alt="image-20220107153506807" loading="lazy"></p>',16);function _(x,S){const a=t("ExternalLinkIcon");return l(),c("div",null,[k,n("p",null,[h,n("a",y,[f,r(a)])]),I])}var O=i(b,[["render",_],["__file","06-OpenFeign\u670D\u52A1\u8C03\u7528.html.vue"]]);export{O as default};
