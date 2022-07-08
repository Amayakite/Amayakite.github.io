import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as i}from"./app.ad7a4a8c.js";const e={},l=i(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u5728SpringBoot\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>@Transactional</code>\u6765\u5F00\u542F\u4E00\u4E2A\u4E8B\u52A1\uFF08\u81EA\u52A8\u914D\u7F6E\u597D\u4E86\uFF0C\u539F\u7406\u53EF\u4EE5\u770B\u4E4B\u524D\u7684springframework\uFF09</p><p>\u4F46\u662F\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u8981\u5728\u540C\u4E00\u4E2Aservice\u5185\u901A\u8FC7\u4E8B\u52A1\u5BF9\u8C61\u8C03\u7528\u672C\u7C7B\u7684\u4E8B\u52A1\u5BF9\u8C61</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>
            rollbackFor <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
            isolation <span class="token operator">=</span> <span class="token class-name">Isolation</span><span class="token punctuation">.</span>REPEATABLE_READ<span class="token punctuation">,</span>
            propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>REQUIRED<span class="token punctuation">,</span>
            timeout <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>
            rollbackFor <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
            isolation <span class="token operator">=</span> <span class="token class-name">Isolation</span><span class="token punctuation">.</span>READ_COMMITTED<span class="token punctuation">,</span>
            propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>REQUIRED<span class="token punctuation">,</span>
            timeout <span class="token operator">=</span> <span class="token number">20</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        do something;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>
            rollbackFor <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>
            isolation <span class="token operator">=</span> <span class="token class-name">Isolation</span><span class="token punctuation">.</span>READ_COMMITTED<span class="token punctuation">,</span>
            propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>REQUIRES_NEW<span class="token punctuation">,</span>
            timeout <span class="token operator">=</span> <span class="token number">20</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        do something;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u65B9\u4EE3\u7801\u4E2D\uFF0Cb\u548Cc\u7684<code>@Transactional</code>\u6CE8\u89E3\u90FD\u4F1A\u5931\u6548\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u4E8B\u52A1\u5B9E\u9645\u4E0A\u662F\u4F9D\u8D56\u4E8E\u52A8\u6001\u4EE3\u7406\uFF0C\u5982\u679C\u8BF4\u6211\u4EEC\u8C03\u7528\u7684\u662F\u5176\u4ED6\u7C7B\u7684\uFF0C\u4F8B\u5982<code>Aservice.b()</code>\u5219\u4F1A\u7167\u5E38\u8FDB\u884C\uFF0Cb\u4E0A\u6807\u6CE8\u7684\u6CE8\u89E3\u4E5F\u4F1A\u6B63\u5E38\u751F\u6548</p><p>\u4F46\u662F\u672C\u7C7B\u4E4B\u95F4\u7684\u8C03\u7528\u662F\u884C\u4E0D\u901A\u7684\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0Cc\u7684\u4E8B\u52A1\u4F20\u64AD\u4F9D\u65E7\u662F\u9075\u5FAA\u4E86A\u7684REQUIRED\uFF0Cb\u548Cc\u7684\u4E8B\u52A1\u9694\u79BB\u4E5F\u4F9D\u65E7\u662F\u7EE7\u627F\u81EAA\u7684REPEATABLE_READ\uFF1A\u53EF\u91CD\u590D\u5EA6\uFF0C\u8D85\u65F6\u65F6\u95F4\u540C\u7406</p><p>\u5982\u679C\u8BF4\u6211\u4EEC\u60F3\u8981\u540C\u4E00\u4E2A\u7C7B\u5185\u7684\u5404\u79CD\u4E8B\u7269\u4E4B\u95F4\u7684\u8C03\u7528\u80FD\u591F\u5F97\u5230\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u8FD9\u6837\u505A</p><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h2><p>\u7B2C\u4E00\u6B65\uFF0C\u5F15\u5165\u4F9D\u8D56</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-aop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u6B65\uFF1A\u52A0\u4E00\u4E2A\u6CE8\u89E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@EnableAspectJAutoProxy(exposeProxy = true)
@SpringBootApplication
public class OrderApplication {

    public static void main(String[] args) {
        SpringApplication.run(OrderApplication.class, args);
    }

}
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5B9E\u73B0\u4E86\u4E24\u4E2A\u529F\u80FD</p><ol><li>\u4F7F\u7528\u4E86AspectJ\u6765\u5B9E\u73B0\u4E8B\u52A1\u4EE3\u7406</li><li><code>exposeProxy = true</code>\u5BF9\u5916\u66B4\u9732\u4EE3\u7406\u5BF9\u8C61</li><li>\u561B\uFF0C\u5C31\u548C\u4E4B\u524DSpring\u901A\u8FC7xml\u6765\u914D\u7F6E\u7684\u65B9\u5F0F\u5DEE\u4E0D\u591A</li></ol><p>\u63A5\u7740\u6211\u4EEC\u4F7F\u7528\u4EE3\u7406\u5BF9\u8C61\u672C\u7C7B\u4E92\u8C03\u5373\u53EF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Service
@Slf4j
public class TestReviseMessage {

    @Transactional(
            rollbackFor = Exception.class,
            isolation = Isolation.REPEATABLE_READ,
            propagation = Propagation.REQUIRED,
            timeout = 10
    )
    public void a() {
        
        // \u901A\u8FC7AopContext\u83B7\u53D6\u5F53\u524D\u4EE3\u7406\u5BF9\u8C61\uFF0C\u653E\u5FC3\u8F6C\u6362\u6210\u5F53\u524D\u7C7B\u7136\u540E\u8C03\u7528\u5373\u53EF
        TestReviseMessage testReviseMessage = (TestReviseMessage) AopContext.currentProxy();
        testReviseMessage.b();
        testReviseMessage.c();
        
    }

    @Transactional(
            rollbackFor = Exception.class,
            isolation = Isolation.READ_COMMITTED,
            propagation = Propagation.REQUIRED,
            timeout = 20
    )
    public void b() {
//        do something;
    }

    @Transactional(
            rollbackFor = Exception.class,
            isolation = Isolation.READ_COMMITTED,
            propagation = Propagation.REQUIRES_NEW,
            timeout = 20
    )
    public void c() {
//        do something;
    }


}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),t=[l];function c(p,o){return s(),a("div",null,t)}var u=n(e,[["render",c],["__file","24-\u672C\u5730\u4E8B\u52A1\u5931\u6548\u89E3\u51B3\u65B9\u6848.html.vue"]]);export{u as default};
