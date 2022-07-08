import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o,c as p,a as n,b as i,d as s,e as c}from"./app.ad7a4a8c.js";const l={},u=n("h2",{id:"golang\u5305\u5927\u5168",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#golang\u5305\u5927\u5168","aria-hidden":"true"},"#"),s(" Golang\u5305\u5927\u5168")],-1),r=s("\u8BE6\u60C5\u53EF\u4EE5\u770B\u8FD9\u4E2A\u7F51\u5740"),d={href:"https://awesome-go.com/",target:"_blank",rel:"noopener noreferrer"},k=s("https://awesome-go.com/"),v=c(`<p>\u7FFB\u8BD1\u6210\u4E2D\u6587\u5373\u53EF\uFF0C\u91CC\u9762\u6709\u80FD\u60F3\u5230\u7684\u6240\u6709\u7684\u7C7B\u578B\u7684\u5305</p><h2 id="web\u5C42" tabindex="-1"><a class="header-anchor" href="#web\u5C42" aria-hidden="true">#</a> Web\u5C42</h2><h3 id="gin" tabindex="-1"><a class="header-anchor" href="#gin" aria-hidden="true">#</a> Gin</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get github.com/gin-gonic/gin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> Websocket</h3><p>\u5BFC\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get github.com/gorilla/websocket
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> upgrader <span class="token operator">=</span> websocket<span class="token punctuation">.</span>Upgrader<span class="token punctuation">{</span>
    ReadBufferSize<span class="token punctuation">:</span>  <span class="token number">1024</span><span class="token punctuation">,</span>
    WriteBufferSize<span class="token punctuation">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    CheckOrigin<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">handler</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> r <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    conn<span class="token punctuation">,</span> err <span class="token operator">:=</span> upgrader<span class="token punctuation">.</span><span class="token function">Upgrade</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> r<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// TODO Do Something in Conn</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5047\u6570\u636E\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u5047\u6570\u636E\u751F\u6210" aria-hidden="true">#</a> \u5047\u6570\u636E\u751F\u6210</h3><p>\u5BFC\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get github.com/manveru/faker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/manveru/faker&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	f<span class="token punctuation">,</span> err <span class="token operator">:=</span> faker<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F02\u5E38: %v\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u5C42" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5C42" aria-hidden="true">#</a> \u6570\u636E\u5C42</h2><h3 id="\u5355mysql" tabindex="-1"><a class="header-anchor" href="#\u5355mysql" aria-hidden="true">#</a> \u5355Mysql</h3><p>\u5148\u5BFC\u5305</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get github.com/go-sql-driver/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;database/sql&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u5148\u5B9A\u4E49\u4E00\u4E2Aaddr \u547D\u540D\u89C4\u8303\uFF1A\u8D26\u53F7:\u5BC6\u7801@tcp(ip:\u7AEF\u53E3)/\u6570\u636E\u5E93\u540D\u79F0?\u5BF9\u5E94\u7684\u53C2\u6570</span>
	addr <span class="token operator">:=</span> <span class="token string">&quot;root:amayakiteProjectMysql@tcp(myserver:13001)/go_data&quot;</span>
	<span class="token comment">// \u8FDE\u63A5\u6570\u636E\u5E93</span>
	db<span class="token punctuation">,</span> err <span class="token operator">:=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> addr<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5\u6570\u636E\u5E93\u5931\u8D25\uFF0C\u683C\u5F0F\u6709\u8BEF\u6216\u8D26\u53F7\u5BC6\u7801\u9519\u8BEF&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">defer</span> db<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// \u770B\u4E0B\u662F\u5426\u80FDping\u901A\uFF0C\u80FDping\u901A\u5C31\u662F\u8FDE\u63A5\u6210\u529F</span>
	err <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">Ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5\u6570\u636E\u5E93\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5\u6570\u636E\u5E93\u6210\u529F&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gorm" tabindex="-1"><a class="header-anchor" href="#gorm" aria-hidden="true">#</a> Gorm</h3><h4 id="\u914D\u5408mysql" tabindex="-1"><a class="header-anchor" href="#\u914D\u5408mysql" aria-hidden="true">#</a> \u914D\u5408Mysql</h4><blockquote><p>\u5BFC\u5305</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u914D\u5408sqlite</span>
go get gorm.io/gorm
go get gorm.io/driver/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;gorm.io/driver/mysql&quot;</span>
  <span class="token string">&quot;gorm.io/gorm&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53C2\u8003 https://github.com/go-sql-driver/mysql#dsn-data-source-name \u83B7\u53D6\u8BE6\u60C5</span>
  dsn <span class="token operator">:=</span> <span class="token string">&quot;user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&amp;parseTime=True&amp;loc=Local&quot;</span>
  db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>mysql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>dsn<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u914D\u5408sqlite" tabindex="-1"><a class="header-anchor" href="#\u914D\u5408sqlite" aria-hidden="true">#</a> \u914D\u5408Sqlite</h4><blockquote><p>\u5BFC\u5305</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get gorm.io/gorm
go get gorm.io/driver/sqlite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;gorm.io/gorm&quot;</span>
  <span class="token string">&quot;gorm.io/driver/sqlite&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  db<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span>sqlite<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;test.db&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>gorm<span class="token punctuation">.</span>Config<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;failed to connect database&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function m(b,g){const a=t("ExternalLinkIcon");return o(),p("div",null,[u,n("p",null,[r,n("a",d,[k,i(a)])]),v])}var q=e(l,[["render",m],["__file","11-GoLang\u5E38\u7528\u5305.html.vue"]]);export{q as default};
