import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.ad7a4a8c.js";const e={},p=t(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u8FD9\u4E2A\u5C31\u76F8\u5F53\u4E8E\u662FJava\u4E2D\u7684Spring\u4E00\u6837\uFF0C\u6216\u8BB8\u5E76\u6CA1\u6709Spring\u90A3\u4E48\u5F3A\u5927\uFF0C\u4E0D\u8FC7\u662F\u5927\u591A\u6570\u4EBA\u7684\u9009\u62E9</p><p>\u662F\u4E00\u4E2A<strong>\u5FAE\u6846\u67B6</strong>\uFF0C\u5C01\u88C5\u6BD4\u8F83\u53CB\u597D\uFF0CAPI\u53CB\u597D\uFF0C\u5177\u6709\u7075\u6D3B\u5FEB\u6377\u3001\u5BB9\u9519\u65B9\u4FBF\u7B49\u7279\u70B9</p><h3 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h3><p>\u9996\u5148\u5B89\u88C5\u4E0B\u4F9D\u8D56</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go mod init 
go get -u github.com/gin-gonic/gin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5199\u5982\u4E0B\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;net/http&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.\u521B\u5EFA\u8DEF\u7531</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// 2.\u7ED1\u5B9A\u8DEF\u7531\u89C4\u5219\uFF0C\u6267\u884C\u7684\u51FD\u6570</span>
	<span class="token comment">// gin.Context\uFF0C\u5C01\u88C5\u4E86request\u548Cresponse</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> <span class="token string">&quot;hello World!&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// 3.\u76D1\u542C\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u57288080</span>
	<span class="token comment">// Run(&quot;\u91CC\u9762\u4E0D\u6307\u5B9A\u7AEF\u53E3\u53F7\u9ED8\u8BA4\u4E3A8080&quot;)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u8BF4\u4E9B\u591A\u4E00\u70B9</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;net/http&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.\u521B\u5EFA\u8DEF\u7531</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/get&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
			<span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// post</span>
	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/post&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
			<span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// put</span>
	r<span class="token punctuation">.</span><span class="token function">PUT</span><span class="token punctuation">(</span><span class="token string">&quot;/put&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
			<span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// delete restful \u4F20\u5165id</span>
	r<span class="token punctuation">.</span><span class="token function">DELETE</span><span class="token punctuation">(</span><span class="token string">&quot;/delete/:id&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
			<span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span>   ctx<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// Run(&quot;\u91CC\u9762\u4E0D\u6307\u5B9A\u7AEF\u53E3\u53F7\u9ED8\u8BA4\u4E3A8080&quot;)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u4E8E\u521D\u59CB\u5316\u8DEF\u7531\u548C\u81EA\u5B9A\u4E49\u521D\u59CB\u5316\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u521D\u59CB\u5316\u8DEF\u7531\u548C\u81EA\u5B9A\u4E49\u521D\u59CB\u5316\u53C2\u6570" aria-hidden="true">#</a> \u5173\u4E8E\u521D\u59CB\u5316\u8DEF\u7531\u548C\u81EA\u5B9A\u4E49\u521D\u59CB\u5316\u53C2\u6570</h3><p>\u6211\u4EEC\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u8C03\u7528\u4E86<code>gin.Default()</code>\uFF0C\u5148\u770B\u770B\u5B83\u7684\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Engine <span class="token punctuation">{</span>
	<span class="token function">debugPrintWARNINGDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	engine <span class="token operator">:=</span> <span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	engine<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">Logger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">Recovery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> engine
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230 \u5176\u4E2D\u662F<code>engine := New()</code>new\u4E86\u4E00\u4E2A\u5BF9\u8C61\u51FA\u6765\uFF0C\u7136\u540E\u8C03\u7528Use\u8C03\u7528\u4E86\u4E24\u4E2A\u4E2D\u95F4\u4EF6\u5E76return</p><p>\u4E00\u4E2A\u662FLog\u7684\uFF0C\u53E6\u5916\u4E00\u4E2A\u6062\u590D\u5565\u7684\u4E1C\u897F</p><p>\u6240\u4EE5\u6211\u4EEC\u8981\u81EA\u5B9A\u4E49\u7684\u8BDD\uFF0C\u53EA\u9700\u8981</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.\u521B\u5EFA\u8DEF\u7531 \u5E26\u6709\u4E2D\u95F4\u4EF6</span>
	<span class="token boolean">_</span> <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// 2. \u521B\u5EFA\u8DEF\u7531 \u4E0D\u5E26\u4E2D\u95F4\u4EF6</span>
	<span class="token boolean">_</span> <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42" aria-hidden="true">#</a> \u8BF7\u6C42</h2><h3 id="\u5982\u4F55\u83B7\u53D6api\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u83B7\u53D6api\u53C2\u6570" aria-hidden="true">#</a> \u5982\u4F55\u83B7\u53D6API\u53C2\u6570</h3><p>\u65E0\u975E\u5C31\u4E09\u79CD\u53C2\u6570\uFF0C\u76F4\u63A5\u83B7\u53D6\u5373\u53EF</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.\u521B\u5EFA\u8DEF\u7531</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// post</span>
	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/post/:method&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u83B7\u53D6\u8DEF\u7531?\u53C2\u6570id</span>
		id <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">// \u6253\u5370\u8BF7\u6C42\u53C2\u6570</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u6C42\u4E2D\u7684id\u4E3A\uFF1A&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
		<span class="token comment">// \u83B7\u53D6\u8BF7\u6C42\u4F53</span>
		rc <span class="token operator">:=</span> ctx<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Body
		<span class="token comment">// \u8BFB\u53D6\u8BF7\u6C42\u4F53</span>
		buf <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">)</span>
		rc<span class="token punctuation">.</span><span class="token function">Read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span>
		<span class="token comment">// \u6253\u5370\u8BF7\u6C42\u4F53</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u6C42\u4F53\u4E3A\uFF1A&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token comment">// \u83B7\u53D6\u8DEF\u5F84\u53C2\u6570</span>
		method <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Param</span><span class="token punctuation">(</span><span class="token string">&quot;method&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">// \u6253\u5370\u8DEF\u5F84\u53C2\u6570</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8DEF\u5F84\u53C2\u6570\u4E3A\uFF1A&quot;</span><span class="token punctuation">,</span> method<span class="token punctuation">)</span>
		<span class="token comment">// \u8FD4\u56DE\u6570\u636E json</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span>     id<span class="token punctuation">,</span>
			<span class="token string">&quot;rc&quot;</span><span class="token punctuation">:</span>     <span class="token function">string</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token string">&quot;method&quot;</span><span class="token punctuation">:</span> method<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// Run(&quot;\u91CC\u9762\u4E0D\u6307\u5B9A\u7AEF\u53E3\u53F7\u9ED8\u8BA4\u4E3A8080&quot;)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6query\u53C2\u6570\u65F6\u5019\u7684\u9ED8\u8BA4\u503C\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6query\u53C2\u6570\u65F6\u5019\u7684\u9ED8\u8BA4\u503C\u8BBE\u7F6E" aria-hidden="true">#</a> \u83B7\u53D6Query\u53C2\u6570\u65F6\u5019\u7684\u9ED8\u8BA4\u503C\u8BBE\u7F6E</h3><p>\u4F7F\u7528<code>DefaultQuery</code>\u5373\u53EF\u7ED9<code>?xxx=xxx</code>\u8BBE\u5B9A\u9ED8\u8BA4\u503C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func main() {
	// 1.\u521B\u5EFA\u8DEF\u7531
	r := gin.Default()
	// post
	r.POST(&quot;/post/:method&quot;, func(ctx *gin.Context) {
		// \u83B7\u53D6\u8DEF\u7531?\u53C2\u6570id
		id := ctx.DefaultQuery(&quot;id&quot;, &quot;6666&quot;)
		// \u6253\u5370\u8BF7\u6C42\u53C2\u6570
		fmt.Println(&quot;\u8BF7\u6C42\u4E2D\u7684id\u4E3A\uFF1A&quot;, id)
		// \u83B7\u53D6\u8BF7\u6C42\u4F53
		rc := ctx.Request.Body
		// \u8BFB\u53D6\u8BF7\u6C42\u4F53
		buf := make([]byte, 1024)
		rc.Read(buf)
		// \u6253\u5370\u8BF7\u6C42\u4F53
		fmt.Println(&quot;\u8BF7\u6C42\u4F53\u4E3A\uFF1A&quot;, string(buf))
		// \u83B7\u53D6\u8DEF\u5F84\u53C2\u6570
		method := ctx.Param(&quot;method&quot;)
		// \u6253\u5370\u8DEF\u5F84\u53C2\u6570
		fmt.Println(&quot;\u8DEF\u5F84\u53C2\u6570\u4E3A\uFF1A&quot;, method)
		// \u8FD4\u56DE\u6570\u636E json
		ctx.JSON(http.StatusOK, gin.H{
			&quot;id&quot;:     id,
			&quot;rc&quot;:     string(buf),
			&quot;method&quot;: method,
		})

	})

	// Run(&quot;\u91CC\u9762\u4E0D\u6307\u5B9A\u7AEF\u53E3\u53F7\u9ED8\u8BA4\u4E3A8080&quot;)
	r.Run(&quot;:8000&quot;)
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u8BF7\u6C42\u4F53" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u8BF7\u6C42\u4F53" aria-hidden="true">#</a> \u83B7\u53D6\u8BF7\u6C42\u4F53</h3><p>\u56DB\u79CD\uFF1Aapplication/json\u3001form-urlencoded\u3001xml,multipart/form-data</p><p>\u5BF9\u4E8E<code>form-urlencoded</code>\u8FD9\u79CD\u683C\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u6765\u6307\u5B9A\u83B7\u53D6\u67D0\u4E2A\u5B57\u6BB5\u7684\u503C\uFF08\u539F\u751Fhtml\u7684\u8868\u5355\u63D0\u4EA4\uFF0Cajax\u4E4B\u7C7B\u7684\u63D0\u4EA4\u7684\u90FD\u662Fjson\uFF0C\u4E0D\u9002\u7528\uFF09</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.\u521B\u5EFA\u8DEF\u7531</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// post</span>
	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/post&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u83B7\u53D6\u8BF7\u6C42\u4F53 \u5355\u72EC\u83B7\u53D6\u67D0\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u83B7\u53D6\u5230\u7684\u5185\u5BB9\u90FD\u662Fstring</span>
		name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">PostForm</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">// \u83B7\u53D6\u8BF7\u6C42\u4F53\u4E2D\u7684\u5185\u5BB9\uFF0C\u83B7\u53D6\u67D0\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u8BBE\u7F6E\u9ED8\u8BA4\u503C</span>
		age <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">DefaultPostForm</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> name<span class="token punctuation">,</span>
			<span class="token string">&quot;age&quot;</span><span class="token punctuation">:</span>  age<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token comment">// Run(&quot;\u91CC\u9762\u4E0D\u6307\u5B9A\u7AEF\u53E3\u53F7\u9ED8\u8BA4\u4E3A8080&quot;)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8Eapplication/json\u548Cxml\uFF0C\u5219\u53EA\u80FD\u4E00\u6B21\u6027\u83B7\u53D6\u6240\u6709\u8BF7\u6C42\u4F53</p><h3 id="\u83B7\u53D6\u4E0A\u4F20\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u4E0A\u4F20\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u83B7\u53D6\u4E0A\u4F20\u7684\u6587\u4EF6</h3><p>\u4E0A\u4F20\u6587\u4EF6\u6709\u4E24\u79CD-\u5355\u4E2A\u6587\u4EF6\u548C\u591A\u4E2A\u6587\u4EF6</p><blockquote><p>\u4E0A\u4F20\u5355\u4E2A\u6587\u4EF6</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math/rand&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">randomUUID</span><span class="token punctuation">(</span>length <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u751F\u6210\u6307\u5B9A\u957F\u5EA6\u7684uuid</span>
	str <span class="token operator">:=</span> <span class="token string">&quot;0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;</span>
	bytes <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
	result <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	r <span class="token operator">:=</span> rand<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>rand<span class="token punctuation">.</span><span class="token function">NewSource</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">UnixNano</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		result <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> bytes<span class="token punctuation">[</span>r<span class="token punctuation">.</span><span class="token function">Intn</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.\u521B\u5EFA\u8DEF\u7531</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// post</span>
	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/upload&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 1.\u83B7\u53D6\u6587\u4EF6 \u5355\u4E2A\u6587\u4EF6\u7684\u83B7\u53D6</span>
		file<span class="token punctuation">,</span> err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">FormFile</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 2.\u83B7\u53D6\u6587\u4EF6\u7684\u540D\u79F0</span>
		filename <span class="token operator">:=</span> file<span class="token punctuation">.</span>Filename
		<span class="token comment">// 3.\u5C06\u6587\u4EF6\u5199\u5165\u672C\u5730 \u76F4\u63A5\u8C03\u7528ctx\u7684\u65B9\u6CD5\u5373\u53EF\uFF0C\u4E0D\u9700\u8981\u81EA\u5DF1\u5199\uFF0C\u9ED8\u8BA4\u662F\u5B58\u50A8\u5728\u5F53\u524D\u76EE\u5F55\u4E0B</span>
		ctx<span class="token punctuation">.</span><span class="token function">SaveUploadedFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">+</span>filename<span class="token punctuation">)</span>
		<span class="token comment">// 4.\u8FD4\u56DE\u6587\u4EF6\u540D\u79F0</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;filename&quot;</span><span class="token punctuation">:</span> filename<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// Run(&quot;\u91CC\u9762\u4E0D\u6307\u5B9A\u7AEF\u53E3\u53F7\u9ED8\u8BA4\u4E3A8080&quot;)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u53EF\u4EE5\u901A\u8FC7file.size\u6765\u9650\u5236\u5927\u5C0F\uFF0C\u6216\u8005\u76F4\u63A5\u8BBE\u7F6E\u5168\u5C40\u7684\u9650\u5236\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.\u521B\u5EFA\u8DEF\u7531</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// \u8BBE\u7F6E\u6587\u4EF6\u4E0A\u4F20\u7684\u5927\u5C0F\u9650\u5236 \u9ED8\u8BA4\u4E3A32M</span>
	r<span class="token punctuation">.</span>MaxMultipartMemory <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">&lt;&lt;</span> <span class="token number">20</span> <span class="token comment">// 8M</span>

	<span class="token comment">// post</span>
	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/upload&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 1.\u83B7\u53D6\u6587\u4EF6 \u5355\u4E2A\u6587\u4EF6\u7684\u83B7\u53D6</span>
		file<span class="token punctuation">,</span> err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">FormFile</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 2.\u83B7\u53D6\u6587\u4EF6\u7684\u540D\u79F0</span>
		filename <span class="token operator">:=</span> file<span class="token punctuation">.</span>Filename
		<span class="token comment">// 4.\u8FD4\u56DE\u6587\u4EF6\u540D\u79F0</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;filename&quot;</span><span class="token punctuation">:</span> filename<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><blockquote><p>\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.\u521B\u5EFA\u8DEF\u7531</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// \u8BBE\u7F6E\u6587\u4EF6\u4E0A\u4F20\u7684\u5927\u5C0F\u9650\u5236 \u9ED8\u8BA4\u4E3A32M</span>
	r<span class="token punctuation">.</span>MaxMultipartMemory <span class="token operator">=</span> <span class="token number">8</span> <span class="token operator">&lt;&lt;</span> <span class="token number">20</span> <span class="token comment">// 8M</span>
	<span class="token comment">// post</span>
	r<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/upload&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u83B7\u53D6\u6240\u6709\u7684\u4E0A\u4F20\u6587\u4EF6</span>
		<span class="token comment">// 1. \u5148\u83B7\u53D6form</span>
		form<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">MultipartForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// 2. \u83B7\u53D6\u6240\u6709\u7684\u6587\u4EF6</span>
		files <span class="token operator">:=</span> form<span class="token punctuation">.</span>File<span class="token punctuation">[</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">]</span>
		<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> file <span class="token operator">:=</span> <span class="token keyword">range</span> files <span class="token punctuation">{</span>
			<span class="token comment">// \u83B7\u53D6\u6587\u4EF6\u540D</span>
			filename <span class="token operator">:=</span> file<span class="token punctuation">.</span>Filename
			<span class="token comment">// \u5C06\u6587\u4EF6\u5185\u5BB9\u5199\u5165\u5230\u6307\u5B9A\u7684\u76EE\u5F55</span>
			ctx<span class="token punctuation">.</span><span class="token function">SaveUploadedFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> filename<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// return ok</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// Run(&quot;\u91CC\u9762\u4E0D\u6307\u5B9A\u7AEF\u53E3\u53F7\u9ED8\u8BA4\u4E3A8080&quot;)</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u91CD\u8981-\u63A5\u6536\u6570\u636E\u5E76\u7ED1\u5B9A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8981-\u63A5\u6536\u6570\u636E\u5E76\u7ED1\u5B9A\u5BF9\u8C61" aria-hidden="true">#</a> [\u91CD\u8981]\u63A5\u6536\u6570\u636E\u5E76\u7ED1\u5B9A\u5BF9\u8C61</h3><p>\u4F7F\u7528\u8D77\u6765\u8FD8\u662F\u6BD4\u8F83\u7B80\u5355\u7684\uFF0C\u6307\u5B9A\u89E3\u6790\u5373\u53EF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
	&quot;net/http&quot;

	&quot;github.com/gin-gonic/gin&quot;
)

type LoginUser struct {
	// \u7528\u6237\u540D form \u8868\u5355\u53C2\u6570\uFF0C\u5176\u4F59\u7684\u6B63\u5E38\u53C2\u6570 uri\u662F\u8DEF\u5F84\u53C2\u6570 bingding=required \u8868\u793A\u5FC5\u987B\u6709\u8FD9\u4E2A\u5B57\u6BB5\uFF08\u4E0D\u80FD\u4E3A\u7A7A\uFF09\uFF0C\u6CA1\u6709\u7684\u8BDD\u4F1A\u62A5\u9519
	Username string \`form:&quot;username&quot; json:&quot;username&quot; xml:&quot;username&quot; uri:&quot;username&quot;  binding:&quot;required&quot;\`
	Password string \`form:&quot;password&quot; json:&quot;password&quot; xml:&quot;password&quot; uri:&quot;password&quot;  binding:&quot;required&quot;\`
}

func main() {
	r := gin.Default()

	r.POST(&quot;/login&quot;, func(c *gin.Context) {
		// \u58F0\u660E\u63A5\u6536\u7684\u53D8\u91CF
		var user LoginUser
		// \u628A\u63A5\u6536\u5230\u7684\u6570\u636E\u7ED1\u5B9A\u5230\u53D8\u91CF\u4E0A json
		// \u4F1A\u5C06request\u7684body\u4E2D\u7684\u6570\u636E\u81EA\u52A8\u89E3\u6790\u5230\u7ED3\u6784\u4F53 \u4F8B\u5982\u4E0A\u65B9\u4E2D\uFF0C\u6807\u8BB0\u4E86json:username\uFF0C\u5219\u4F1A\u89E3\u6790\u8BF7\u6C42\u4F53\u4E2Djson\u90E8\u5206\u7684username\u5B57\u6BB5\u7ED9\u5230\u8FD9\u91CC
		err := c.ShouldBindJSON(&amp;user)
		// \u5982\u679C\u51FA\u95EE\u9898\u4E86
		if err != nil {
			// \u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F
			// gin.H\u5C01\u88C5\u4E86\u751F\u6210json\u7684\u5DE5\u5177
			c.JSON(http.StatusBadRequest, gin.H{
				&quot;msg&quot;: err.Error(),
			})
			return

		}
		// \u5224\u65AD\u7528\u6237\u540D\u548C\u5BC6\u7801\u662F\u5426\u6B63\u786E
		if user.Username != &quot;admin&quot; || user.Password != &quot;admin&quot; {
			c.JSON(http.StatusUnauthorized, gin.H{
				&quot;msg&quot;: &quot;\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF&quot;,
			})
			return
		}
		// \u8FD4\u56DE\u767B\u5F55\u6210\u529F
		c.JSON(http.StatusOK, gin.H{
			&quot;msg&quot;: &quot;\u767B\u5F55\u6210\u529F&quot;,
		})

	})

	r.Run(&quot;:8000&quot;)
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u540C\u7406\uFF0C\u8FD8\u53EF\u4EE5\u89E3\u6790form\u548Cxml\u4E4B\u7C7B\u7684\uFF0C\u6216\u8005\u5982\u4E0B\u65B9\u6240\u793A\u901A\u8FC7<code>Bind</code>\u81EA\u52A8\u63A8\u65AD</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
	&quot;net/http&quot;

	&quot;github.com/gin-gonic/gin&quot;
)

type LoginUser struct {
	// \u7528\u6237\u540D form \u8868\u5355\u53C2\u6570\uFF0C\u5176\u4F59\u7684\u6B63\u5E38\u53C2\u6570 uri\u662F\u8DEF\u5F84\u53C2\u6570 bingding=required \u8868\u793A\u5FC5\u987B\u6709\u8FD9\u4E2A\u5B57\u6BB5\uFF08\u4E0D\u80FD\u4E3A\u7A7A\uFF09\uFF0C\u6CA1\u6709\u7684\u8BDD\u4F1A\u62A5\u9519
	Username string \`form:&quot;username&quot; json:&quot;username&quot; xml:&quot;username&quot; uri:&quot;username&quot;  binding:&quot;required&quot;\`
	Password string \`form:&quot;password&quot; json:&quot;password&quot; xml:&quot;password&quot; uri:&quot;password&quot;  binding:&quot;required&quot;\`
}

func main() {
	r := gin.Default()

	r.POST(&quot;/login&quot;, func(c *gin.Context) {
		// \u58F0\u660E\u63A5\u6536\u7684\u53D8\u91CF
		var user LoginUser
		// \u628A\u63A5\u6536\u5230\u7684\u6570\u636E\u7ED1\u5B9A\u5230\u53D8\u91CF\u4E0A json
		// \u4F1A\u5C06request\u7684body\u4E2D\u7684\u6570\u636E\u81EA\u52A8\u89E3\u6790\u5230\u7ED3\u6784\u4F53

		// \u4F7F\u7528c.Bind\u4F1A\u6839\u636E\u8BF7\u6C42\u5934\u4E2D\u7684content-type\u81EA\u52A8\u89E3\u6790
		err := c.Bind(&amp;user)
		// \u5982\u679C\u51FA\u95EE\u9898\u4E86
		if err != nil {
			// \u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F
			// gin.H\u5C01\u88C5\u4E86\u751F\u6210json\u7684\u5DE5\u5177
			c.JSON(http.StatusBadRequest, gin.H{
				&quot;msg&quot;: err.Error(),
			})
			return

		}
		// \u5224\u65AD\u7528\u6237\u540D\u548C\u5BC6\u7801\u662F\u5426\u6B63\u786E
		if user.Username != &quot;admin&quot; || user.Password != &quot;admin&quot; {
			c.JSON(http.StatusUnauthorized, gin.H{
				&quot;msg&quot;: &quot;\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF&quot;,
			})
			return
		}
		// \u8FD4\u56DE\u767B\u5F55\u6210\u529F
		c.JSON(http.StatusOK, gin.H{
			&quot;msg&quot;: &quot;\u767B\u5F55\u6210\u529F&quot;,
		})

	})

	r.Run(&quot;:8000&quot;)
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">\u8BF4\u660E</p><p>\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u89E3\u6790uri\u4E2D\u7684\u53C2\u6570</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
	&quot;net/http&quot;

	&quot;github.com/gin-gonic/gin&quot;
)

type LoginUser struct {
	// \u7528\u6237\u540D form \u8868\u5355\u53C2\u6570\uFF0C\u5176\u4F59\u7684\u6B63\u5E38\u53C2\u6570 uri\u662F\u8DEF\u5F84\u53C2\u6570 bingding=required \u8868\u793A\u5FC5\u987B\u6709\u8FD9\u4E2A\u5B57\u6BB5\uFF08\u4E0D\u80FD\u4E3A\u7A7A\uFF09\uFF0C\u6CA1\u6709\u7684\u8BDD\u4F1A\u62A5\u9519
	Username string \`form:&quot;username&quot; json:&quot;username&quot; xml:&quot;username&quot; uri:&quot;username&quot;  binding:&quot;required&quot;\`
	Password string \`form:&quot;password&quot; json:&quot;password&quot; xml:&quot;password&quot; uri:&quot;password&quot;  binding:&quot;required&quot;\`
}

func main() {
	r := gin.Default()

	r.POST(&quot;/login/:username/:password&quot;, func(c *gin.Context) {
		// \u58F0\u660E\u63A5\u6536\u7684\u53D8\u91CF
		var user LoginUser
		// \u628Auri\u4E2D\u7684\u53C2\u6570\u7ED1\u5B9A\u5230user\u4E2D \u6CE8\u610F \u5982\u679C\u662Furi\u7ED1\u5B9A\u7684\u8BDD\uFF0C\u6CA1\u6709\u4F20\u5165\u6307\u5B9A\u53C2\u6570\u5219\u662F\u76F4\u63A5\u8FD4\u56DE404 not found
		err := c.ShouldBindUri(&amp;user)
		// \u5982\u679C\u51FA\u95EE\u9898\u4E86
		if err != nil {
			// \u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F
			// gin.H\u5C01\u88C5\u4E86\u751F\u6210json\u7684\u5DE5\u5177
			c.JSON(http.StatusBadRequest, gin.H{
				&quot;msg&quot;: err.Error(),
			})
			return

		}
		// \u5224\u65AD\u7528\u6237\u540D\u548C\u5BC6\u7801\u662F\u5426\u6B63\u786E
		if user.Username != &quot;admin&quot; || user.Password != &quot;admin&quot; {
			c.JSON(http.StatusUnauthorized, gin.H{
				&quot;msg&quot;: &quot;\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF&quot;,
			})
			return
		}
		// \u8FD4\u56DE\u767B\u5F55\u6210\u529F
		c.JSON(http.StatusOK, gin.H{
			&quot;msg&quot;: &quot;\u767B\u5F55\u6210\u529F&quot;,
		})

	})

	r.Run(&quot;:8000&quot;)
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u54CD\u5E94" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94" aria-hidden="true">#</a> \u54CD\u5E94</h2><p>\u54CD\u5E94\u5BA2\u6237\u7AEF\u6570\u636E\u7684\u65B9\u5F0F\u6709\u5F88\u591A\uFF0C\u4E0B\u9762\u7B80\u5355\u8BF4\u660E\u4E0B\uFF0C\u4E00\u822C\u4E5F\u662F\u7528json\u6BD4\u8F83\u591A</p><h3 id="\u901A\u5E38\u6570\u636E-json\u3001xml\u3001yaml\u7B49" tabindex="-1"><a class="header-anchor" href="#\u901A\u5E38\u6570\u636E-json\u3001xml\u3001yaml\u7B49" aria-hidden="true">#</a> \u901A\u5E38\u6570\u636E\uFF1AJson\u3001XML\u3001Yaml\u7B49</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	ri <span class="token operator">:=</span> r<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		ri<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/exampleJson&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// \u54CD\u5E94\u666E\u901A\u7684json</span>
			c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
				<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token comment">// \u54CD\u5E94\u5BF9\u8C61\u7C7B\u578Bjson</span>
		ri<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/exampleJson2&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">var</span> msg <span class="token keyword">struct</span> <span class="token punctuation">{</span>
				Code    <span class="token builtin">int</span>         <span class="token string">\`json:&quot;code&quot;\`</span>
				Message <span class="token builtin">string</span>      <span class="token string">\`json:&quot;message&quot;\`</span>
				Data    <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token string">\`json:&quot;data&quot;\`</span>
			<span class="token punctuation">}</span>
			msg<span class="token punctuation">.</span>Code <span class="token operator">=</span> <span class="token number">200</span>
			msg<span class="token punctuation">.</span>Message <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
			msg<span class="token punctuation">.</span>Data <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
			c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token comment">// \u54CD\u5E94xml</span>
		ri<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/exampleXml&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span><span class="token function">XML</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
				<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token comment">// \u54CD\u5E94Yaml</span>
		ri<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/exampleYaml&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span><span class="token function">YAML</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
				<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token comment">// \u54CD\u5E94\u6587\u4EF6</span>
		ri<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/exampleFile&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span><span class="token function">File</span><span class="token punctuation">(</span><span class="token string">&quot;./main.go&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token comment">// \u76F8\u5E94html</span>
		ri<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/exampleHtml&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			c<span class="token punctuation">.</span><span class="token function">HTML</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">&quot;index.tmpl&quot;</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
				<span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Main website&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6A21\u677F\u6E32\u67D3html" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u6E32\u67D3html" aria-hidden="true">#</a> \u6A21\u677F\u6E32\u67D3HTML</h3><p>Gin\u652F\u6301\u52A0\u8F7DHTML\u6A21\u677F\uFF0C\u7136\u540E\u6839\u636E\u6A21\u677F\u53C2\u6570\u8FDB\u884C\u914D\u7F6E\u5E76\u8FD4\u56DE\u76F8\u5E94\u7684\u6570\u636E\uFF0C<strong>\u672C\u8D28\u4E0A\u5C31\u662F\u5B57\u7B26\u4E32\u66FF\u6362</strong></p><p>\u4F7F\u7528<code>LoadHtmlGlob()</code>\u65B9\u6CD5\u53EF\u4EE5\u52A0\u8F7D\u6A21\u677F\u6587\u4EF6</p><p>\u4F8B\u5982\u6211\u4EEC\u5148\u5199\u4E00\u4E2A\u7B80\u5355\u7684\u652F\u6301\u6E32\u67D3\u7684html\u6A21\u677F<code>templates/index.html</code></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>{{.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u4E0B\u9762\u662F\u4E00\u4E2Ah1\u6807\u7B7E --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{.message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u6839\u636E\u8BED\u6CD5\u5F00\u59CB\u8FDB\u884C\u6E32\u67D3</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">LoadHTMLGlob</span><span class="token punctuation">(</span><span class="token string">&quot;templates/*&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// \u4E5F\u53EF\u4EE5\u76F4\u63A5\u52A0\u8F7D\u5355\u4E2A\u6587\u4EF6 \u4E0D\u8FC7\u4E00\u822C\u90FD\u4E0D\u4F1A\u52A0\u8F7D\u5355\u4E2A\u6587\u4EF6\uFF0C\u800C\u662F\u6307\u5B9A\u6587\u4EF6\u5939</span>
	<span class="token comment">// r.LoadHTMLGlob(&quot;templates/index.html&quot;)</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8981\u6E32\u67D3\u7684\u6587\u4EF6\u7684\u6587\u4EF6\u540D\uFF0C\u7B2C\u4E09\u4E2A\u662F\u66FF\u6362\u6A21\u677F\u7684\u6570\u636E</span>
		c<span class="token punctuation">.</span><span class="token function">HTML</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">&quot;index.html&quot;</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span>   <span class="token string">&quot;Main website&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\u8BBF\u95EE\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u5982\u4E0B\u5185\u5BB9</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Main website<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello, World!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u91CD\u5B9A\u5411</h3><p>\u8FD9\u4E2A\u4E5F\u662F\u6BD4\u8F83\u7B80\u5355\u7684\uFF0C\u56E0\u4E3A\u6240\u6709\u5185\u5BB9\u90FD\u5C01\u88C5\u5728\u4E86<code>gin.Context</code>\u5185\uFF0C\u6240\u4EE5\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u7684\u8C03\u7528</p><p>\u6211\u4EEC\u60F3\u8981\u91CD\u5B9A\u5411\u5230\u767E\u5EA6\u7684\u8BDD\uFF0C\u53EA\u9700\u8981\u8FD9\u6837\u505A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/rediect&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		ctx<span class="token punctuation">.</span><span class="token function">Redirect</span><span class="token punctuation">(</span><span class="token number">302</span><span class="token punctuation">,</span> <span class="token string">&quot;https://www.baidu.com&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F02\u6B65\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u5904\u7406" aria-hidden="true">#</a> \u5F02\u6B65\u5904\u7406</h3><p>\u6709\u7684\u65F6\u5019\uFF0C\u60F3\u8981\u5206\u6279\u6B21\u5B58\u50A8\u6570\u636E\u7684\u8BDD\uFF0C\u6216\u8005\u60F3\u5F02\u6B65\u5199\u65E5\u5FD7\u7684\u8BDD\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u5B83\u4E86</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/sync&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u9996\u5148\u83B7\u53D6\u4E00\u4E2A\u4E0A\u4E0B\u6587\u526F\u672C</span>
		copyContex <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Copy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// \u5F02\u6B65\u5904\u7406</span>
		<span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F02\u6B65\u6267\u884C\u7ED3\u675F\uFF1A&quot;</span><span class="token punctuation">,</span> copyContex<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
			<span class="token comment">// \u5F02\u6B65\u65E0\u6CD5\u8FD4\u56DE\u503C</span>
			<span class="token comment">// copyContex.JSON(200, gin.H{</span>
			<span class="token comment">// 	&quot;message&quot;: &quot;\u5F02\u6B65\u6267\u884C\u7ED3\u675F&quot;,</span>
			<span class="token comment">// })</span>
		<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// \u6CE8\u610F \u526F\u672C\u6CA1\u6CD5\u8FD4\u56DE\u503C\uFF0C\u5FC5\u987B\u5F97\u7528\u539F\u59CB\u7684\u4E0A\u4E0B\u6587\u624D\u80FD\u8FD4\u56DE\u4FE1\u606F</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u5F02\u6B65\u6267\u884C\u4E2D&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/no_sync&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u540C\u6B65\u6267\u884C</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u540C\u6B65\u6267\u884C\u7ED3\u675F\uFF1A&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path<span class="token punctuation">)</span>
		ctx<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u540C\u6B65\u6267\u884C\u7ED3\u675F&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h2><p>\u8FD9\u4E2A\u5728Gin\u6846\u67B6\u4E2D\u5E76\u4E0D\u662F\u590D\u6742\u7684\u4E1C\u897F\uFF0C\u5F88\u7B80\u5355\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E86</p><h3 id="\u8BBE\u7F6E\u524D\u7F6E\u8DEF\u7531-\u8DEF\u7531\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u524D\u7F6E\u8DEF\u7531-\u8DEF\u7531\u7EC4" aria-hidden="true">#</a> \u8BBE\u7F6E\u524D\u7F6E\u8DEF\u7531\uFF08\u8DEF\u7531\u7EC4\uFF09</h3><p>\u6709\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5E0C\u671B\u662F\u8BBF\u95EE\u8FD9\u6837\u7684<code>/user/login</code>\u6216\u8005<code>/user/info</code></p><p>\u6240\u4EE5\u8FD9\u4E2A\u65F6\u5019\u53EF\u4EE5\u901A\u8FC7\u8DEF\u7531\u7EC4\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
	&quot;github.com/gin-gonic/gin&quot;
)

func main() {
	r := gin.Default()

	user := r.Group(&quot;/user&quot;)
    // \u4E0B\u9762\u8FD9\u4E2A\u5927\u62EC\u53F7\u662F\u4E66\u5199\u89C4\u8303\uFF0C\u4E00\u822C\u76F8\u540C\u8DEF\u7531\u90FD\u662F\u5199\u5728\u4E00\u4E2A\u5927\u62EC\u53F7\u5185 
	{
		user.GET(&quot;/:id&quot;, func(c *gin.Context) {
			c.String(200, &quot;User: %s&quot;, c.Param(&quot;id&quot;))
		})
		user.POST(&quot;/:id&quot;, func(c *gin.Context) {
			c.String(200, &quot;User: %s&quot;, c.Param(&quot;id&quot;))
		})
	}

	r.Run(&quot;:8000&quot;)
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8DEF\u7531\u5728\u5404\u5927\u8BED\u8A00\u4E2D\u4E00\u822C\u662F\u4EE5\u7EA2\u9ED1\u6811\u7684\u5F62\u5F0F\u5B58\u50A8\uFF0C\u8FD9\u6837\u53EF\u4EE5\u975E\u5E38\u65B9\u4FBF\u5FEB\u6377\u7684\u67E5\u8BE2\u5230\u60F3\u8981\u7684\u8DEF\u7531</p></div><h2 id="\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6</h2><p>\u8FD9\u4E2A\u5E94\u8BE5\u4E0D\u964C\u751F\u4E86\uFF0C\u5C31\u76F8\u5F53\u4E8E\u662FNodeJS/Koa\u4E2D\u7684\u4E2D\u95F4\u4EF6\uFF0C\u6216\u8005\u8BF4Java\u7684Filter\u3001SpringBoot\u7684Interceptor\u3001handler</p><p>\u53EF\u4EE5\u5728\u8BF7\u6C42\u524D\u540E\u5BF9\u6570\u636E\u8FDB\u884C\u6821\u9A8C\u3001\u5904\u7406\u3001\u52A0\u5DE5\u7B49\u64CD\u4F5C</p><ul><li>Gin\u53EF\u4EE5\u6784\u5EFA\u4E2D\u95F4\u4EF6\uFF0C\u4F46\u5B83\u53EA\u5BF9\u6CE8\u518C\u8FC7\u7684\u8DEF\u7531\u51FD\u6570\u8D77\u4F5C\u7528</li><li>\u5BF9\u4E8E\u5206\u7EC4\u8DEF\u7531\uFF0C\u5D4C\u5957\u4F7F\u7528\u4E2D\u95F4\u4EF6\uFF0C\u53EF\u4EE5\u9650\u5B9A\u4E2D\u95F4\u4EF6\u7684\u4F5C\u7528\u8303\u56F4</li><li>\u4E2D\u95F4\u4EF6\u5206\u4E3A\u5168\u5C40\u4E2D\u95F4\u4EF6\u3001\u5355\u4E2A\u8DEF\u7531\u4E2D\u95F4\u4EF6\u548C\u7FA4\u7EC4\u4E2D\u95F4\u4EF6</li><li><strong>Gin\u4E2D\u95F4\u4EF6\u5FC5\u987B\u662F\u4E00\u4E2A<code>gin.HandlerFunc</code>\u7C7B\u578B</strong></li></ul><h3 id="\u5B9A\u4E49\u4E00\u4E2A\u7B80\u5355\u7684\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u4E00\u4E2A\u7B80\u5355\u7684\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u5B9A\u4E49\u4E00\u4E2A\u7B80\u5355\u7684\u4E2D\u95F4\u4EF6</h3><p>\u8FD9\u91CC\u5148\u6765\u5B9A\u4E49\u4E00\u4E2A\u7B80\u5355\u7684\u4E2D\u95F4\u4EF6</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// \u6CE8\u518C\u5168\u5C40\u4E2D\u95F4\u4EF6</span>
	r<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">MiddleWare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// \u6CE8\u518C\u8DEF\u7531</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/hello&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// get \u83B7\u53D6\u4E0A\u4E0B\u6587\u4E2D\u7684\u53D8\u91CF \u5982\u679C\u8FD4\u56DE\u7684\u7B2C\u4E8C\u4E2A\u503C\u662Ffalse\uFF0C\u5219\u8BF4\u660E\u6CA1\u6709\u8FD9\u4E2A\u53D8\u91CF</span>
		value<span class="token punctuation">,</span> exists <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> exists <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u83B7\u53D6\u5230\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\uFF1A&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>

		<span class="token punctuation">}</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span>
			<span class="token comment">// \u83B7\u53D6\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF MustGet\uFF1A\u5982\u679C\u4E0D\u5B58\u5728\u5219\u629B\u51FA\u5F02\u5E38</span>
			<span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> c<span class="token punctuation">.</span><span class="token function">MustGet</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49\u4E2D\u95F4\u4EF6</span>
<span class="token keyword">func</span> <span class="token function">MiddleWare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D\u95F4\u4EF6\u5F00\u59CB\u6267\u884C\u4E86&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">// \u83B7\u53D6\u8BF7\u6C42\u7684\u8DEF\u5F84\u5E76\u6253\u5370</span>
		path <span class="token operator">:=</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u6C42\u7684\u8DEF\u5F84\u662F\uFF1A&quot;</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span>
		<span class="token comment">// \u7ED9\u4E0A\u4E0B\u6587\u6DFB\u52A0\u4E00\u4E2A\u53D8\u91CF</span>
		c<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">// \u653E\u884C \u5982\u679C\u8FD9\u91CC\u662F\u9274\u6743\u7684\u8BDD\uFF0C\u8FD8\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE\u9274\u6743\u9519\u8BEF\u65F6\u8981\u8FD4\u56DE\u7684\u503C</span>
		c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6574\u4F53\u6765\u8BF4\u8FD8\u662F\u548CNode\u4E2D\u4F7F\u7528\u7684\u65B9\u5F0F\u5DEE\u4E0D\u591A\u7684\uFF0C\u4E0A\u9762\u6211\u4EEC\u81EA\u5DF1\u5199\u4E86\u4E00\u4E2A\u4E2D\u95F4\u4EF6\u5E76\u4E14\u6CE8\u518C\u5230\u4E86\u5168\u5C40\uFF0C\u6240\u4EE5\u8BF4\u6709\u7684\u8BF7\u6C42\u90FD\u4F1A\u8D70\u8FD9\u4E2A\u4E2D\u95F4\u4EF6</p><h3 id="\u5168\u5C40\u4E2D\u95F4\u4EF6\u548C\u5C40\u90E8\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4E2D\u95F4\u4EF6\u548C\u5C40\u90E8\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u5168\u5C40\u4E2D\u95F4\u4EF6\u548C\u5C40\u90E8\u4E2D\u95F4\u4EF6</h3><p>\u6709\u4E9B\u65F6\u5019\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u5168\u5C40\u8981\u8D70\u4E2D\u95F4\u4EF6\uFF0C\u5C40\u90E8\u4E5F\u6709\u53EF\u80FD\u8981\u5355\u72EC\u8BBE\u7ACB\u4E00\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u4F8B\u5982<code>/admin</code>\u8DEF\u7531\u4E0B\u7684\u4E1C\u897F\u9700\u8981\u9274\u6743\u624D\u80FD\u8BBF\u95EE</p><p>\u6240\u4EE5\u53EF\u4EE5\u8FD9\u6837\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
	&quot;fmt&quot;

	&quot;github.com/gin-gonic/gin&quot;
)

func main() {
	r := gin.Default()
	// \u6CE8\u518C\u5168\u5C40\u4E2D\u95F4\u4EF6
	r.Use(GlobalMiddleWare())
	// \u6CE8\u518C\u8DEF\u7531
	rg := r.Group(&quot;/admin&quot;)
	// \u6CE8\u518C\u5C40\u90E8\u4E2D\u95F4\u4EF6
	rg.Use(AdminMiddleWare())
	{
		rg.GET(&quot;/index&quot;, func(c *gin.Context) {
			c.JSON(200, gin.H{
				&quot;code&quot;:   200,
				&quot;userId&quot;: c.GetInt(&quot;userId&quot;),
				&quot;Auth&quot;:   c.GetString(&quot;Auth&quot;),
			})
		})
	}

	r.Run(&quot;:8000&quot;)
}

// \u5B9A\u4E49\u5168\u5C40\u4E2D\u95F4\u4EF6
func GlobalMiddleWare() gin.HandlerFunc {
	return func(c *gin.Context) {
		fmt.Println(&quot;\u5168\u5C40\u4E2D\u95F4\u4EF6&quot;)
		// \u83B7\u53D6\u8BF7\u6C42\u7684\u8DEF\u5F84\u5E76\u6253\u5370
		path := c.Request.URL.Path
		fmt.Println(&quot;\u8BF7\u6C42\u7684\u8DEF\u5F84\u662F\uFF1A&quot;, path)
		// \u7ED9\u4E0A\u4E0B\u6587\u6DFB\u52A0\u4E00\u4E2A\u53D8\u91CF
		c.Set(&quot;name&quot;, &quot;\u5F20\u4E09&quot;)
		// \u653E\u884C \u5982\u679C\u8FD9\u91CC\u662F\u9274\u6743\u7684\u8BDD\uFF0C\u8FD8\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE\u9274\u6743\u9519\u8BEF\u65F6\u8981\u8FD4\u56DE\u7684\u503C
		c.Next()
	}
}

// \u5B9A\u4E49admin\u4E2D\u95F4\u4EF6
func AdminMiddleWare() gin.HandlerFunc {
	return func(c *gin.Context) {
		// \u5224\u65AD\u8BF7\u6C42\u5934\u4E2D\u662F\u5426\u6709Authorization
		Authorization := c.Request.Header.Get(&quot;Authorization&quot;)
		if Authorization == &quot;&quot; {
			// auth\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE\u9519\u8BEF
			c.JSON(401, gin.H{
				&quot;code&quot;: 401,
				&quot;msg&quot;:  &quot;\u8BF7\u6C42\u5934\u4E2D\u65E0Authorization&quot;,
			})
			fmt.Println(&quot;\u9274\u6743\u4E0D\u901A\u8FC7&quot;)
			// \u7EC8\u6B62\u8BF7\u6C42\uFF0C\u4E0D\u518D\u8C03\u7528\u540E\u7EED\u7684handler\u548C\u4E2D\u95F4\u4EF6
			c.Abort()
			return
		}
		// auth\u5B58\u5728\uFF0CTODO \u9274\u6743\u903B\u8F91
		fmt.Println(&quot;\u9274\u6743\u901A\u8FC7&quot;)
		c.Set(&quot;userId&quot;, 1)
		c.Set(&quot;Auth&quot;, Authorization)
		// \u653E\u884C
		c.Next()
	}
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5F53\u7136\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7ED9\u67D0\u4E2A\u8DEF\u7531\u5355\u72EC\u5B9A\u4E49\u4F7F\u7528\u989D\u5916\u7684\u4E2D\u95F4\u4EF6\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
	&quot;fmt&quot;

	&quot;github.com/gin-gonic/gin&quot;
)

func main() {
	r := gin.Default()
	// \u6CE8\u518C\u5168\u5C40\u4E2D\u95F4\u4EF6
	r.Use(GlobalMiddleWare())

	// \u9488\u5BF9\u5355\u4E2A\u8DEF\u7531\u6CE8\u518C\u4E2D\u95F4\u4EF6\uFF0C\u5219\u8FD9\u4E2A\u8DEF\u7531\u4F1A\u989D\u5916\u8D70\u4E00\u904D\u6307\u5B9A\u7684\u4E2D\u95F4\u4EF6
	r.GET(&quot;/authApi&quot;, AdminMiddleWare(), func(c *gin.Context) {
		c.JSON(200, gin.H{
			&quot;code&quot;:   200,
			&quot;userId&quot;: c.GetInt(&quot;userId&quot;),
			&quot;Auth&quot;:   c.GetString(&quot;Auth&quot;),
		})
	})

	r.Run(&quot;:8000&quot;)
}

// \u5B9A\u4E49\u5168\u5C40\u4E2D\u95F4\u4EF6
func GlobalMiddleWare() gin.HandlerFunc {
	return func(c *gin.Context) {
		fmt.Println(&quot;\u5168\u5C40\u4E2D\u95F4\u4EF6&quot;)
		// \u83B7\u53D6\u8BF7\u6C42\u7684\u8DEF\u5F84\u5E76\u6253\u5370
		path := c.Request.URL.Path
		fmt.Println(&quot;\u8BF7\u6C42\u7684\u8DEF\u5F84\u662F\uFF1A&quot;, path)
		// \u7ED9\u4E0A\u4E0B\u6587\u6DFB\u52A0\u4E00\u4E2A\u53D8\u91CF
		c.Set(&quot;name&quot;, &quot;\u5F20\u4E09&quot;)
		// \u653E\u884C \u5982\u679C\u8FD9\u91CC\u662F\u9274\u6743\u7684\u8BDD\uFF0C\u8FD8\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE\u9274\u6743\u9519\u8BEF\u65F6\u8981\u8FD4\u56DE\u7684\u503C
		c.Next()
	}
}

// \u5B9A\u4E49admin\u4E2D\u95F4\u4EF6
func AdminMiddleWare() gin.HandlerFunc {
	return func(c *gin.Context) {
		// \u5224\u65AD\u8BF7\u6C42\u5934\u4E2D\u662F\u5426\u6709Authorization
		Authorization := c.Request.Header.Get(&quot;Authorization&quot;)
		if Authorization == &quot;&quot; {
			// auth\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE\u9519\u8BEF
			c.JSON(401, gin.H{
				&quot;code&quot;: 401,
				&quot;msg&quot;:  &quot;\u8BF7\u6C42\u5934\u4E2D\u65E0Authorization&quot;,
			})
			fmt.Println(&quot;\u9274\u6743\u4E0D\u901A\u8FC7&quot;)
			// \u7EC8\u6B62\u8BF7\u6C42\uFF0C\u4E0D\u518D\u8C03\u7528\u540E\u7EED\u7684handler\u548C\u4E2D\u95F4\u4EF6
			c.Abort()
			return
		}
		// auth\u5B58\u5728\uFF0CTODO \u9274\u6743\u903B\u8F91
		fmt.Println(&quot;\u9274\u6743\u901A\u8FC7&quot;)
		c.Set(&quot;userId&quot;, 1)
		c.Set(&quot;Auth&quot;, Authorization)
		// \u653E\u884C
		c.Next()
	}
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="\u4F8B\u5B50-\u4E2D\u95F4\u4EF6\u7EDF\u8BA1\u7A0B\u5E8F\u6267\u884C\u7528\u65F6" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50-\u4E2D\u95F4\u4EF6\u7EDF\u8BA1\u7A0B\u5E8F\u6267\u884C\u7528\u65F6" aria-hidden="true">#</a> \u4F8B\u5B50\uFF1A\u4E2D\u95F4\u4EF6\u7EDF\u8BA1\u7A0B\u5E8F\u6267\u884C\u7528\u65F6</h3><p>\u5176\u5B9E\u975E\u5E38\u7B80\u5355\uFF0CNext\u4E4B\u540E\u662F\u8FD8\u53EF\u4EE5\u8DDF\u4EE3\u7801\u7684\uFF0C\u6240\u4EE5\u53EA\u9700\u8981\u8FD9\u6837\u64CD\u4F5C\u5373\u53EF</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">GlobalMiddleWare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u83B7\u53D6\u5F53\u524D\u7CFB\u7EDF\u65F6\u95F4</span>
		start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5168\u5C40\u4E2D\u95F4\u4EF6&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">// \u83B7\u53D6\u8BF7\u6C42\u7684\u8DEF\u5F84\u5E76\u6253\u5370</span>
		path <span class="token operator">:=</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u6C42\u7684\u8DEF\u5F84\u662F\uFF1A&quot;</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span>
		<span class="token comment">// \u653E\u884C</span>
		c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// \u83B7\u53D6\u5F53\u524D\u65F6\u95F4</span>
		end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// \u8BA1\u7B97\u8BF7\u6C42\u65F6\u95F4</span>
		cost <span class="token operator">:=</span> end<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span>
		<span class="token comment">// \u6253\u5370\u82B1\u4E86\u591A\u5C11\u6BEB\u79D2</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u672C\u6B21\u8BF7\u6C42\u7528\u65F6%d\u6BEB\u79D2\uFF0C%d\u7EB3\u79D2\\n&quot;</span><span class="token punctuation">,</span> cost<span class="token punctuation">.</span><span class="token function">Milliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cost<span class="token punctuation">.</span><span class="token function">Nanoseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// \u6CE8\u518C\u5168\u5C40\u4E2D\u95F4\u4EF6</span>
	r<span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span><span class="token function">GlobalMiddleWare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// \u9488\u5BF9\u5355\u4E2A\u8DEF\u7531\u6CE8\u518C\u4E2D\u95F4\u4EF6</span>
	r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/index&quot;</span><span class="token punctuation">,</span> <span class="token function">AdminMiddleWare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span>   <span class="token number">200</span><span class="token punctuation">,</span>
			<span class="token string">&quot;userId&quot;</span><span class="token punctuation">:</span> c<span class="token punctuation">.</span><span class="token function">GetInt</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token string">&quot;Auth&quot;</span><span class="token punctuation">:</span>   c<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;Auth&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token string">&quot;:8000&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49\u5168\u5C40\u4E2D\u95F4\u4EF6</span>
<span class="token keyword">func</span> <span class="token function">GlobalMiddleWare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u83B7\u53D6\u5F53\u524D\u7CFB\u7EDF\u65F6\u95F4</span>
		start <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5168\u5C40\u4E2D\u95F4\u4EF6&quot;</span><span class="token punctuation">)</span>
		<span class="token comment">// \u83B7\u53D6\u8BF7\u6C42\u7684\u8DEF\u5F84\u5E76\u6253\u5370</span>
		path <span class="token operator">:=</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u6C42\u7684\u8DEF\u5F84\u662F\uFF1A&quot;</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// \u83B7\u53D6\u5F53\u524D\u65F6\u95F4</span>
		end <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token comment">// \u8BA1\u7B97\u8BF7\u6C42\u65F6\u95F4</span>
		cost <span class="token operator">:=</span> end<span class="token punctuation">.</span><span class="token function">Sub</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span>
		<span class="token comment">// \u6253\u5370\u82B1\u4E86\u591A\u5C11\u6BEB\u79D2</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u672C\u6B21\u8BF7\u6C42\u7528\u65F6%d\u6BEB\u79D2\uFF0C%d\u7EB3\u79D2\\n&quot;</span><span class="token punctuation">,</span> cost<span class="token punctuation">.</span><span class="token function">Milliseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cost<span class="token punctuation">.</span><span class="token function">Nanoseconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49admin\u4E2D\u95F4\u4EF6</span>
<span class="token keyword">func</span> <span class="token function">AdminMiddleWare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u5224\u65AD\u8BF7\u6C42\u5934\u4E2D\u662F\u5426\u6709Authorization</span>
		Authorization <span class="token operator">:=</span> c<span class="token punctuation">.</span>Request<span class="token punctuation">.</span>Header<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">if</span> Authorization <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
			<span class="token comment">// auth\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DE\u9519\u8BEF</span>
			c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
				<span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">401</span><span class="token punctuation">,</span>
				<span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span>  <span class="token string">&quot;\u8BF7\u6C42\u5934\u4E2D\u65E0Authorization&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9274\u6743\u4E0D\u901A\u8FC7&quot;</span><span class="token punctuation">)</span>
			<span class="token comment">// \u7EC8\u6B62\u8BF7\u6C42\uFF0C\u4E0D\u518D\u8C03\u7528\u540E\u7EED\u7684handler\u548C\u4E2D\u95F4\u4EF6</span>
			c<span class="token punctuation">.</span><span class="token function">Abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// auth\u5B58\u5728\uFF0CTODO \u9274\u6743\u903B\u8F91</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9274\u6743\u901A\u8FC7&quot;</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span><span class="token string">&quot;Auth&quot;</span><span class="token punctuation">,</span> Authorization<span class="token punctuation">)</span>
		<span class="token comment">// \u653E\u884C</span>
		c<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9274\u6743" tabindex="-1"><a class="header-anchor" href="#\u9274\u6743" aria-hidden="true">#</a> \u9274\u6743</h2><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> COOKIE</h3><p>\u83B7\u53D6\u548C\u8BBE\u7F6E\u6BD4\u8F83\u7B80\u5355</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token string">&quot;/index&quot;</span><span class="token punctuation">,</span> <span class="token function">AdminMiddleWare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u9881\u53D1cookie</span>
	c<span class="token punctuation">.</span><span class="token function">SetCookie</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> <span class="token number">3600</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
	<span class="token comment">// \u83B7\u53D6cookie</span>
	name<span class="token punctuation">,</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">Cookie</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u83B7\u53D6cookie\u5931\u8D25&quot;</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
			<span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u83B7\u53D6cookie\u6210\u529F&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>

	c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> gin<span class="token punctuation">.</span>H<span class="token punctuation">{</span>
		<span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u5728\u4E2D\u95F4\u4EF6\u5185\u5B8C\u6210\u83B7\u53D6\u5E76\u9274\u6743\u4E4B\u7C7B\u7684\u4E1C\u897F</p>`,93),i=[p];function o(c,u){return s(),a("div",null,i)}var r=n(e,[["render",o],["__file","10-GIN.html.vue"]]);export{r as default};
