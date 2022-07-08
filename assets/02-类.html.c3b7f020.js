import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.ad7a4a8c.js";const e={},p=t(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u561B\uFF0C\u603B\u5F97\u6765\u8BF4\u8FD9\u4E2A\u4E1C\u897F\u548C\u5176\u4ED6\u7684\u5F3A\u7C7B\u578B\u8BED\u8A00\u5DEE\u4E0D\u591A\uFF0C\u4E0D\u8FC7\u7C7B\u8FD9\u4E2A\u4E1C\u897F\u5728 golang \u4E2D\u88AB\u79F0\u4E3A\u7ED3\u6784\u4F53</p><h2 id="\u4ECE-type-\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u4ECE-type-\u5F00\u59CB" aria-hidden="true">#</a> \u4ECE Type \u5F00\u59CB</h2><p>\u5C31\u76F8\u5F53\u4E8E\u662F\u81EA\u5B9A\u4E49\u7C7B\u578B\u4E00\u6837\uFF0C\u4E0B\u9762\u6765\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> myInt <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> n myInt
	n <span class="token operator">=</span> <span class="token number">100</span>
	<span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>100
main.myInt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u91CC\u6253\u5370\u7684\u662F\u81EA\u5DF1\u7684\u7C7B\u578B\uFF0C\u4E0D\u8FC7\u4E00\u822C\u4E5F\u4E0D\u4F1A\u8FD9\u6837\u7528\u6765\u5C01\u88C5\u57FA\u672C\u7C7B\u578B\uFF0C\u4E4B\u540E\u4F1A\u8BF4\u660E\u5173\u4E8E\u5B83\u7684\u66F4\u8BE6\u7EC6\u7684\u4F7F\u7528\u65B9\u6CD5</p><blockquote><p>\u5F53\u7136\uFF0C\u8FD8\u6709\u4E00\u4E2A\u7C7B\u578B\u522B\u540D\uFF0C\u8FD9\u4E2A\u4E1C\u897F\u548C\u81EA\u5B9A\u4E49\u7C7B\u578B\u7684\u533A\u522B\u662F\uFF1A</p><ul><li>\u7C7B\u578B\u522B\u540D\u53EA\u5728\u7F16\u8BD1\u4E4B\u524D\u6709\u6548\uFF0C\u7F16\u8BD1\u5B8C\u6BD5\u540E\u5C31\u6CA1\u6709\u4E86</li><li>\u81EA\u5B9A\u4E49\u7C7B\u578B\u5728\u7F16\u8BD1\u524D\u540E\u90FD\u662F<strong>\u59CB\u7EC8\u6709\u6548</strong>\u7684</li></ul></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> myInt <span class="token operator">=</span> <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> n myInt
	n <span class="token operator">=</span> <span class="token number">100</span>
	<span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u7ED3\u6784\u4F53</h2><p>\u5C31\u662F\u5176\u4ED6\u8BED\u8A00\u7684\u7C7B\u4E00\u6837\uFF0C\u6216\u8005\u8BF4\u662F interface?</p><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><p>\u6211\u4EEC\u8981\u5B9A\u4E49\u7684\u8BDD\uFF0C\u975E\u5E38\u7B80\u5355\uFF0C\u8D4B\u503C\u4E5F\u662F\u53EA\u9700\u8981\u7B80\u7B80\u5355\u5355\u7684\u8D4B\u503C\uFF0C\u5C31\u548C\u5176\u4ED6\u8BED\u8A00\u4E00\u6837\uFF0C\u53D6\u503C\u540C\u7406</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	username <span class="token builtin">string</span>
	password <span class="token builtin">string</span>
	age      <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> user User
	user<span class="token punctuation">.</span>username <span class="token operator">=</span> <span class="token string">&quot;admin&quot;</span>
	user<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">&quot;123456789&quot;</span>
	user<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">10</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u533F\u540D\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u533F\u540D\u7ED3\u6784\u4F53</h3><p>emm \u5C31\u662F\u533F\u540D\u5185\u90E8\u7C7B\u4E00\u6837</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> s <span class="token keyword">struct</span> <span class="token punctuation">{</span>
        name <span class="token builtin">string</span>
        age  <span class="token builtin">int</span>
    <span class="token punctuation">}</span>
    s<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">111</span>
    s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;type:%T,value:%v\\n&quot;</span><span class="token punctuation">,</span> s<span class="token punctuation">,</span> s<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>type:struct { name string; age int },value:{\u5F20\u4E09 111}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u8FD8\u53EF\u4EE5\u521B\u5EFA\u6307\u9488\u7C7B\u578B\u7684\u7ED3\u6784\u4F53</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name<span class="token punctuation">,</span> gender <span class="token builtin">string</span>
	password     <span class="token operator">*</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u6765\u4E00\u4E2A\u6784\u9020\u51FD\u6570hhh</span>
<span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> gender <span class="token builtin">string</span><span class="token punctuation">,</span> password <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> name<span class="token punctuation">,</span> gender<span class="token punctuation">:</span> gender<span class="token punctuation">,</span> password<span class="token punctuation">:</span> <span class="token operator">&amp;</span>password<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	user <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7537&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>user<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7ED3\u6784\u4F53\u521D\u59CB\u5316\u7684\u51E0\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u521D\u59CB\u5316\u7684\u51E0\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u521D\u59CB\u5316\u7684\u51E0\u79CD\u65B9\u5F0F</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name<span class="token punctuation">,</span> gender <span class="token builtin">string</span>
	password     <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8FD9\u91CC\u8FD4\u56DE\u6307\u9488\uFF0C\u51CF\u5C11\u5185\u5B58\u6D88\u8017</span>
<span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> gender <span class="token builtin">string</span><span class="token punctuation">,</span> password <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> name<span class="token punctuation">,</span> gender<span class="token punctuation">:</span> gender<span class="token punctuation">,</span> password<span class="token punctuation">:</span> password<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//	\u65B9\u5F0F1\uFF0C\u76F4\u63A5\u521D\u59CB\u5316</span>
	<span class="token keyword">var</span> user1 Person
	user1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span>
	user1<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">&quot;\u7537&quot;</span>
	user1<span class="token punctuation">.</span>password <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span>

	<span class="token comment">//	\u65B9\u5F0F2\uFF1A</span>
	user2 <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span>     <span class="token string">&quot;AA&quot;</span><span class="token punctuation">,</span>
		gender<span class="token punctuation">:</span>   <span class="token string">&quot;VV&quot;</span><span class="token punctuation">,</span>
		password<span class="token punctuation">:</span> <span class="token string">&quot;CC&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span>
	<span class="token comment">//    \u65B9\u5F0F\u4E09\uFF0C\u81EA\u5DF1\u5199\u4E00\u4E2A\u6784\u9020\u65B9\u6CD5</span>
	user3 <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u5973&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123546&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>user3<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7ED9\u7ED3\u6784\u4F53\u6DFB\u52A0\u65B9\u6CD5-\u91CD\u8981" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u7ED3\u6784\u4F53\u6DFB\u52A0\u65B9\u6CD5-\u91CD\u8981" aria-hidden="true">#</a> \u7ED9\u7ED3\u6784\u4F53\u6DFB\u52A0\u65B9\u6CD5(\u91CD\u8981)</h3><p>\u4F17\u6240\u5468\u77E5\uFF0C\u65B9\u6CD5\u5206\u4E3A\u4E24\u79CD\uFF0C\u4E00\u79CD\u9759\u6001\u7684\u548C\u4E00\u79CD\u5C5E\u4E8E\u67D0\u4E2A\u7C7B\u7684\uFF0C\u8FD9\u91CC\u9759\u6001\u7684\u5C31\u4E0D\u6F14\u793A\u4E86\uFF0C\u6765\u8BF4\u660E\u4E0B\u5982\u4F55\u7ED9\u67D0\u4E2A\u7ED3\u6784\u4F53\u6DFB\u52A0\u6307\u5B9A\u7684\u65B9\u6CD5</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name<span class="token punctuation">,</span> gender <span class="token builtin">string</span>
	password     <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// NewPerson \u6784\u9020\u65B9\u6CD5</span>
<span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> gender <span class="token builtin">string</span><span class="token punctuation">,</span> password <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> name<span class="token punctuation">,</span> gender<span class="token punctuation">:</span> gender<span class="token punctuation">,</span> password<span class="token punctuation">:</span> password<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6CE8\u610F \u8FD9\u91CC\u662F\u6307\u9488 \u6216\u8005\u4E0D\u7528\u6307\u9488\u4E5F\u884C\uFF0C\u4E0D\u8FC7\u4E0D\u7528\u6307\u9488\u7684\u8BDD\u5F97\u786E\u4FDD\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u7684\u5B9E\u4F8B\u662F\u4E00\u4E2A\u975E\u6307\u9488\u5BF9\u8C61</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>person <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">changePersonName</span><span class="token punctuation">(</span>newName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	person<span class="token punctuation">.</span>name <span class="token operator">=</span> newName
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	person <span class="token operator">:=</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7537&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;23123123&quot;</span><span class="token punctuation">)</span>

	person<span class="token punctuation">.</span><span class="token function">changePersonName</span><span class="token punctuation">(</span><span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>person<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u65B9<code>changePersonName</code>\u4E2D\u7684 person \u5728\u5176\u4ED6\u8BED\u8A00\u4E2D\u5C31\u76F8\u5F53\u4E8E<code>this</code>\u6216\u8005 Python \u7684<code>self</code>\u4E00\u6837</p><h3 id="\u7ED3\u6784\u4F53\u7684\u5D4C\u5957\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u7684\u5D4C\u5957\u4F7F\u7528" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u7684\u5D4C\u5957\u4F7F\u7528</h3><p>\u975E\u5E38\u7B80\u5355\uFF0C\u5C31\u548C\u5176\u4ED6\u8BED\u8A00\u4E00\u6837</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	city <span class="token builtin">string</span>
	x    <span class="token builtin">int</span>
	y    <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name    <span class="token builtin">string</span>
	age     <span class="token builtin">int</span>
	address Address
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	person <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
		name<span class="token punctuation">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
		age<span class="token punctuation">:</span>  <span class="token number">0</span><span class="token punctuation">,</span>
		address<span class="token punctuation">:</span> Address<span class="token punctuation">{</span>
			city<span class="token punctuation">:</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span>
			x<span class="token punctuation">:</span>    <span class="token number">666</span><span class="token punctuation">,</span>
			y<span class="token punctuation">:</span>    <span class="token number">8888</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h3><p>\u5728 go \u8BED\u8A00\u4E2D\u6CA1\u6709\u660E\u786E\u7684\u7EE7\u627F\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u6240\u4EE5\u8BF4\u5F97\u662F\u6A21\u62DF\u5B9E\u73B0\u4E00\u4E2A\u7EE7\u627F\uFF0C\u4E0D\u8FC7\u7528\u8D77\u6765\u8FD8\u662F\u86EE\u8212\u670D\u7684\uFF08\u9664\u4E86\u7565\u5FAE\u6709\u70B9\u7E41\u7410\uFF09</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> name<span class="token punctuation">,</span> age<span class="token punctuation">:</span> age<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>person <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\u6B63\u5728\u52A8\\n&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Teacher <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token operator">*</span>Person
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>teacher <span class="token operator">*</span>Teacher<span class="token punctuation">)</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8001\u5E08%s\u5F00\u59CB\u4E0A\u8BFE\\n&quot;</span><span class="token punctuation">,</span> teacher<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    user <span class="token operator">:=</span> Teacher<span class="token punctuation">{</span><span class="token function">NewPerson</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    user<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    user<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u4E0D\u7528\u6307\u9488\u7684\u8BDD</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name <span class="token builtin">string</span>
	age  <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewPerson</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span> age <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">*</span>Person <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Person<span class="token punctuation">{</span>name<span class="token punctuation">:</span> name<span class="token punctuation">,</span> age<span class="token punctuation">:</span> age<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>person <span class="token operator">*</span>Person<span class="token punctuation">)</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\u6B63\u5728\u52A8\\n&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> Teacher <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Person
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>teacher <span class="token operator">*</span>Teacher<span class="token punctuation">)</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8001\u5E08%s\u5F00\u59CB\u4E0A\u8BFE\\n&quot;</span><span class="token punctuation">,</span> teacher<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	user <span class="token operator">:=</span> Teacher<span class="token punctuation">{</span>Person<span class="token punctuation">{</span>
        name<span class="token punctuation">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
        age<span class="token punctuation">:</span>  <span class="token number">666</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
	user<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	user<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6269\u5C55-json-\u7684\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55-json-\u7684\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316" aria-hidden="true">#</a> \u6269\u5C55\uFF1A Json \u7684\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316</h3><p>\u4F8B\u5982\u6709\u5982\u4E0B\u7684 json \u5B57\u7B26\u4E32</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 go \u8BED\u8A00\u4E2D\u8FDB\u884C\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u7684\u8BDD\uFF0C\u53EA\u9700\u8981\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C</p><blockquote><p>\u5E8F\u5217\u5316</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u8FD9\u91CC\u662F\u6807\u51C6\u5199\u6CD5\uFF0C\u7B2C\u4E09\u4E2A\u6807\u8BC6\u8868\u793A\u8F6C\u4E49\u540E\u7684\u5B57\u6BB5\u540D\uFF0C\u4E14\u9996\u5B57\u6BCD\u5FC5\u987B\u5927\u5199</span>
<span class="token comment">//  \u56E0\u4E3A\u9996\u5B57\u6BCD\u5927\u5199\u8868\u793A\u8FD9\u4E2A\u5B57\u6BB5\u662F\u516C\u5F00\u7684\uFF0C\u5C0F\u5199\u8868\u793A\u975E\u516C\u5F00\uFF08private\uFF09</span>
<span class="token comment">//  \u5927\u5199\u76F8\u5F53\u4E8E(public)</span>
<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
	Age  <span class="token builtin">int</span>    <span class="token string">\`json:&quot;age&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	p1 <span class="token operator">:=</span> Person<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
		Age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//\u8FD4\u56DE\u4E24\u4E2A\u5BF9\u8C61\uFF0C\u4E00\u4E2A\u662F\u5E8F\u5217\u5316\u540E\u7684json byte  \u4E00\u4E2A\u662Ferr</span>
	marshal<span class="token punctuation">,</span> err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F6C\u4E49\u5931\u8D25\uFF0C\u539F\u56E0\uFF1A%s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%#v&quot;</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>marshal<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token string">&quot;{\\&quot;name\\&quot;:\\&quot;\u5F20\u4E09\\&quot;,\\&quot;age\\&quot;:18}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u53CD\u5E8F\u5217\u5316</p></blockquote><p>\u4E5F\u975E\u5E38\u7B80\u5355</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
	Age  <span class="token builtin">int</span>    <span class="token string">\`json:&quot;age&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	str <span class="token operator">:=</span> <span class="token string">&quot;{\\&quot;name\\&quot;:\\&quot;\u5F20\u4E09\\&quot;,\\&quot;age\\&quot;:18}&quot;</span>

	<span class="token keyword">var</span> person Person

	err <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>person<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FA\u73B0\u4E86\u9519\u8BEF\uFF1A%s\\n&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u53CD\u5E8F\u5217\u5316\u540E\u7684Person\u5BF9\u8C61\uFF1A%#v\\n&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u53CD\u5E8F\u5217\u5316\u540E\u7684Person\u5BF9\u8C61\uFF1Amain.Person{Name:&quot;\u5F20\u4E09&quot;, Age:18}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u63A5\u53E3-interface" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3-interface" aria-hidden="true">#</a> \u63A5\u53E3(interface)</h2><p>\u5728 Golang \u4E2D\uFF0C\u63A5\u53E3\u662F<strong>\u4E00\u79CD\u7C7B\u578B</strong></p><p>Go \u8BED\u8A00\u5B98\u65B9\u63A8\u8350\u4F7F\u7528\u9762\u5411\u63A5\u53E3\u7F16\u7A0B</p><h3 id="\u57FA\u672C\u7684\u521B\u5EFA\u548C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7684\u521B\u5EFA\u548C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u7684\u521B\u5EFA\u548C\u4F7F\u7528</h3><p>\u611F\u89C9\u7565\u5FAE\u6709\u70B9\u7ED5</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> speaker <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u53EA\u8981\u5B9E\u73B0\u4E86speak\u65B9\u6CD5\u7684\uFF08\u6709\u8FD9\u4E2A\u65B9\u6CD5\u7684\uFF09\u90FD\u662Fspeaker\u7C7B\u578B</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> cat <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> dog <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c cat<span class="token punctuation">)</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u55B5\u55B5\u55B5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p person<span class="token punctuation">)</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u963F\u554A\u554A&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d dog<span class="token punctuation">)</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C6A\u6C6A\u6C6A&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">say</span><span class="token punctuation">(</span>x speaker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	x<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	p1 <span class="token operator">:=</span> person<span class="token punctuation">{</span><span class="token punctuation">}</span>
	c1 <span class="token operator">:=</span> cat<span class="token punctuation">{</span><span class="token punctuation">}</span>
	d1 <span class="token operator">:=</span> dog<span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token function">say</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span>
    <span class="token function">say</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span>
    <span class="token function">say</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3" aria-hidden="true">#</a> \u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3</h3><p>\u8BED\u6CD5</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token keyword">interface</span> \u63A5\u53E3\u540D<span class="token punctuation">{</span>
	\u65B9\u6CD5<span class="token function">1</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token number">1</span><span class="token punctuation">,</span>\u53C2\u6570<span class="token number">2.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\u8FD4\u56DE\u503C<span class="token number">1</span><span class="token punctuation">,</span>\u8FD4\u56DE\u503C<span class="token number">2.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
	\u65B9\u6CD5<span class="token function">2</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token number">1</span><span class="token punctuation">,</span>\u53C2\u6570<span class="token number">2.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\u8FD4\u56DE\u503C<span class="token number">1</span><span class="token punctuation">,</span>\u8FD4\u56DE\u503C<span class="token number">2.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
	<span class="token operator">...</span><span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u561B\u53CD\u6B63\u5C31\u662F\u53EA\u80FD\u5BF9\u65B9\u6CD5\u8FDB\u884C\u9650\u5236\uFF0C\u800C\u4E0D\u662F\u5BF9\u5B57\u6BB5\u8FDB\u884C\u9650\u5236\uFF0C\u8FD9\u4E2A\u8DDF Java \u5DEE\u4E0D\u591A</p><div class="custom-container tip"><p class="custom-container-title">\u5173\u4E8E Typescript \u4E4B\u7C7B\u7684 Internet</p><p>\u5728 Typescript \u4E4B\u7C7B\u7684\u4EE3\u7801\u4E2D\uFF0CInterface \u53EF\u80FD\u662F\u7528\u4E8E\u505A\u6765\u9650\u5236\u5B57\u6BB5\u7684\uFF08\u4F8B\u5982 name \u5FC5\u987B\u662F\u6574\u6570\u578B\u7B49\uFF09</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> int<span class="token punctuation">;</span>
  SayHello<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token operator">&lt;</span><span class="token operator">?</span><span class="token punctuation">,</span> <span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u5728 Java \u8FD9\u7C7B\u7684\u8BED\u8A00\u4E2D\uFF0C\u5E76\u6CA1\u6709\u8FD9\u4E2A\u6982\u5FF5\uFF0CInterface \u5F80\u5F80\u90FD\u662F\u9650\u5236\u9700\u8981\u54EA\u4E9B\u65B9\u6CD5\uFF0C\u4F8B\u5982</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	* <span class="token keyword">@param</span> <span class="token punctuation">{</span>user<span class="token punctuation">}</span> \u7528\u6237\u7684\u5B9E\u4F53\u5BF9\u8C61
	*/</span>
	<span class="token keyword">void</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 Golang \u4E2D\uFF0C\u548C Java \u4E00\u6837\uFF0CInterface \u4E5F\u662F\u7528\u6765\u9650\u5236\u5B9E\u73B0\u7C7B\u6240\u62E5\u6709\u7684\u7684\u65B9\u6CD5</p><p>\u4F46\u662F\u7C7B\u6765\u5B9E\u73B0\u5B83\u5E76\u4E0D\u662F\u50CF Java \u4E00\u6837\u76F4\u63A5<code>impl...</code>\u6765\u5B9E\u73B0\u67D0\u4E2A\u63A5\u53E3\uFF0C\u800C\u662F\u901A\u8FC7\u521B\u5EFA\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u9700\u8981\u63A5\u6536\u4E00\u4E2A\u8FD9\u4E2A\u63A5\u53E3\u7684\u5BF9\u8C61\uFF0C\u6765\u8FBE\u6210\u60F3\u8981\u7684\u6548\u679C\uFF0C\u8FD9\u6837\u7684\u7075\u6D3B\u6027\u66F4\u5F3A\uFF08\u5F53\u7136\u76F8\u5BF9\u7684\uFF0C\u5F88\u5BB9\u6613\u4EBA\u5C31\u6655\u4E86\uFF09</p></div><p>\u5F53\u7136\uFF0C\u56E0\u4E3A\u63A5\u53E3\u662F\u4E00\u4E2A\u7C7B\u578B\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u58F0\u660E\u4E00\u4E2A\u63A5\u53E3\u7C7B\u578B\u7684\u53D8\u91CF</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> speaker <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u53EA\u8981\u5B9E\u73B0\u4E86speak\u65B9\u6CD5\u7684\u53D8\u91CF\u90FD\u662Fspeaker\u7C7B\u578B</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> cat <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> dog <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> person <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c cat<span class="token punctuation">)</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u55B5\u55B5\u55B5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>p person<span class="token punctuation">)</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u963F\u554A\u554A&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>d dog<span class="token punctuation">)</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C6A\u6C6A\u6C6A&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">say</span><span class="token punctuation">(</span>x speaker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	x<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sp speaker
    sp<span class="token operator">=</span> person<span class="token punctuation">{</span><span class="token punctuation">}</span>
    sp<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u503C\u63A5\u6536\u8005\u548C\u6307\u9488\u63A5\u6536\u8005\u63A5\u53E3\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u503C\u63A5\u6536\u8005\u548C\u6307\u9488\u63A5\u6536\u8005\u63A5\u53E3\u7684\u533A\u522B" aria-hidden="true">#</a> \u503C\u63A5\u6536\u8005\u548C\u6307\u9488\u63A5\u6536\u8005\u63A5\u53E3\u7684\u533A\u522B</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5148\u4E0A\u603B\u7ED3\uFF1A\u6CA1\u6709\u533A\u522B\uFF0C\u90FD\u53EF\u4EE5\u4F20\u5165</p></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> animal <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">eat</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> cat <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c cat<span class="token punctuation">)</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u55B5\u55B5\u55B5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c cat<span class="token punctuation">)</span> <span class="token function">eat</span><span class="token punctuation">(</span>food <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u732B\u732B\u5403\u6389\u4E86\u98DF\u7269%s\\n&quot;</span><span class="token punctuation">,</span> food<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">var</span> a1 animal
	c1 <span class="token operator">:=</span> cat<span class="token punctuation">{</span><span class="token punctuation">}</span>

	a1 <span class="token operator">=</span> c1
	a1<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;\u9999\u8549&quot;</span><span class="token punctuation">)</span>
	a1<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">var</span> a2 animal
	c2 <span class="token operator">:=</span> <span class="token operator">&amp;</span>cat<span class="token punctuation">{</span><span class="token punctuation">}</span>

	a2 <span class="token operator">=</span> c2
	a2<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;\u82F9\u679C&quot;</span><span class="token punctuation">)</span>
	a2<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> a1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> a2<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>\u732B\u732B\u5403\u6389\u4E86\u98DF\u7269\u9999\u8549
\u55B5\u55B5\u55B5
\u732B\u732B\u5403\u6389\u4E86\u98DF\u7269\u82F9\u679C
\u55B5\u55B5\u55B5
main.cat
*main.cat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u63A5\u53E3\u7684\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7684\u7EE7\u627F" aria-hidden="true">#</a> \u63A5\u53E3\u7684\u7EE7\u627F</h3><p>\u8FD9\u4E2A\u548C Java \u4E00\u6837\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u6216\u8005\u8BF4\u548C GoLang \u4E2D\u7C7B\u7684\u7EE7\u627F\u662F\u540C\u6837\u7684\u65B9\u5F0F\uFF0C\u5982\u679C\u4F60\u60F3\uFF0C\u53EF\u4EE5\u65E0\u7EBF\u5957\u5A03\uFF0C\u4E0B\u9762\u6F14\u793A\u4E00\u4E2A\u7B80\u5355\u7684\u7EE7\u627F</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">type</span> animal <span class="token keyword">interface</span> <span class="token punctuation">{</span>
    mover
    eater
<span class="token punctuation">}</span>

<span class="token keyword">type</span> mover <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> eater <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">eat</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> cat <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c cat<span class="token punctuation">)</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u55B5\u55B5\u55B5&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>c cat<span class="token punctuation">)</span> <span class="token function">eat</span><span class="token punctuation">(</span>food <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u732B\u732B\u5403\u6389\u4E86\u98DF\u7269%s\\n&quot;</span><span class="token punctuation">,</span> food<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> a1 animal

    c1 <span class="token operator">:=</span> cat<span class="token punctuation">{</span><span class="token punctuation">}</span>

    a1<span class="token operator">=</span><span class="token operator">&amp;</span>c1
    a1<span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&quot;\u963F\u554A\u554A&quot;</span><span class="token punctuation">)</span>
    a1<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7A7A\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u63A5\u53E3" aria-hidden="true">#</a> \u7A7A\u63A5\u53E3</h3><p>\u4F8B\u5982\u63A5\u6536\u4EFB\u610F\u7684\u4E1C\u897F\uFF0C\u8FD9\u4E2A\u4E00\u822C\u4E0D\u4F1A\u81EA\u5DF1\u5B9A\u4E49\uFF0C\u90FD\u662F\u5199\u5728\u65B9\u6CD5\u5185</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">// Do Something</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u73A9\u610F\u6709\u5565\u597D\u5904\u5462\uFF1F</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6240\u6709\u7C7B\u578B\u90FD\u5B9E\u73B0\u4E86\u7A7A\u63A5\u53E3\uFF0C\u4E5F\u5C31\u662F\u7C7B\u578B\u7C7B\u578B\u7684\u53D8\u91CF\u90FD\u80FD\u4FDD\u5B58\u5230\u7A7A\u63A5\u53E3\u5F53\u4E2D\uFF08\u80FD\u63A5\u6536\u4EFB\u610F\u7C7B\u578B\u7684\u53C2\u6570\uFF09</p><p>\u4E5F\u5C31\u76F8\u5F53\u4E8E Java \u4E4B\u7C7B<strong>\u9762\u5BF9\u5BF9\u8C61</strong>\u8BED\u8A00\u7684<code>Object</code>\u4E00\u6837</p></div><p>\u90A3\u4E48\u5B9E\u9645\u7528\u9014\u5462\uFF1F</p><blockquote><p>\u4F8B\u5982\uFF1A\u6211\u4EEC\u60F3\u521B\u5EFA\u4E00\u4E2A key \u662F String\uFF0Cvalue \u662F Object \u7C7B\u578B\u7684 map</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> myMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
	<span class="token comment">//\u522B\u5FD8\u4E86\u8FD9\u86CB\u75BC\u7684make</span>
    myMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

	myMap<span class="token punctuation">[</span><span class="token string">&quot;aa&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>

	myMap<span class="token punctuation">[</span><span class="token string">&quot;bb&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;aaa&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>map[aa:1 bb:aaa]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u7A7A\u63A5\u53E3\u7C7B\u578B\u7684\u5224\u65AD\u548C\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u63A5\u53E3\u7C7B\u578B\u7684\u5224\u65AD\u548C\u65AD\u8A00" aria-hidden="true">#</a> \u7A7A\u63A5\u53E3\u7C7B\u578B\u7684\u5224\u65AD\u548C\u65AD\u8A00</h3><div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>\u561B\uFF0C\u5C31\u662F\u5224\u65AD\u4E00\u4E2A\u901A\u8FC7\u7A7A\u63A5\u53E3\u4F20\u5165\u7684\u53C2\u6570\u662F\u5426\u4E3A\u67D0\u4E2A\u7C7B\u578B\uFF0C\u6709\u9884\u611F\uFF0C\u4E4B\u540E\u8FD9\u79CD\u64CD\u4F5C\u4F1A\u6BD4\u8F83\u5E38\u89C1</p></div><p>\u5148\u6765\u4E00\u4E2A\u57FA\u672C\u7684\u5224\u65AD\uFF0C\u56FA\u5B9A\u5199\u6CD5</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">assign</span><span class="token punctuation">(</span>a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F20\u5165\u7684\u53C2\u6570\u7684\u7C7B\u578B\u662F\uFF1A%T\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	str<span class="token punctuation">,</span> ok <span class="token operator">:=</span> a<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>ok <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F20\u5165\u7684\u7C7B\u578B\u4E0D\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F20\u8FDB\u6765\u4E86\u4E00\u4E2A\u5B57\u7B26\u4E32&quot;</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">assign</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u53EF\u80FD\u6709\u591A\u4E2A\u503C\u7684\u8BDD\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 Switch</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">assign</span><span class="token punctuation">(</span>a <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token keyword">switch</span> a<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token builtin">string</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F20\u5165\u4E86\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF1A&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">case</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F20\u5165\u4E86\u4E00\u4E2A\u6570\u503C%d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6682\u65F6\u65E0\u6CD5\u5904\u7406\u8FD9\u79CD\u683C\u5F0F\uFF1A%T\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> MyInt <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> aa MyInt <span class="token operator">=</span> <span class="token number">1000</span>
	<span class="token function">assign</span><span class="token punctuation">(</span>aa<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="package-\u5305" tabindex="-1"><a class="header-anchor" href="#package-\u5305" aria-hidden="true">#</a> Package-\u5305</h2><p>emmm \u8C8C\u4F3C\u4E5F\u4E0D\u9700\u8981\u989D\u5916\u8FDB\u884C\u4ECB\u7ECD\u8FD9\u73A9\u610F\u4E86\u5427</p><p>\u53CD\u6B63\u8DDF\u5176\u4ED6\u8BED\u8A00\u4E00\u6837\uFF0CGo \u8BED\u8A00\u4E2D\u548B\u53EF\u80FD\u5C11\u4E86\u5305\u7684\u6982\u5FF5</p><h3 id="\u4ECE\u4E00\u4E2A\u7B80\u5355\u7684\u5305\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u4E00\u4E2A\u7B80\u5355\u7684\u5305\u5F00\u59CB" aria-hidden="true">#</a> \u4ECE\u4E00\u4E2A\u7B80\u5355\u7684\u5305\u5F00\u59CB</h3><p>\u6211\u73B0\u5728\u7684\u9879\u76EE\u7ED3\u6784\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500github.com
|     \u251C\u2500amayakite
|     |     \u251C\u2500study
|     |     |   \u251C\u2500main.go
|     |     |   \u251C\u2500MyPackage
|     |     |   |     \u2514Dog.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<code>Dog.go</code>\u4E2D\u6709\u5982\u4E0B\u5185\u5BB9</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> MyPackage

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u6211\u8BE5\u5982\u4F55\u5728 Main \u6587\u4EF6\u4E2D\u8C03\u7528\u5B83\u5462\uFF1F</p><p>\u5176\u5B9E\u5F88\u7B80\u5355\uFF08\u8FD9\u91CC\u6211\u7684\u7F16\u8F91\u5668\u662F Jetbrains \u7684 Golang\uFF0C\u5982\u679C\u4F7F\u7528 VsCode \u7684\u8BDD\u53EF\u80FD\u8981\u914D\u7F6E GO Mod \u4E4B\u7C7B\u7684\u4E1C\u897F\uFF0C\u5173\u4E8E Go Mod \u8FD9\u4E2A\u4E4B\u540E\u4F1A\u8BF4\uFF09\uFF0C\u53EA\u9700\u8981\u5728 main \u4E2D\u5199\u5982\u4E0B\u4EE3\u7801\u5373\u53EF</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> MyPackage

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">SayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>run \u4E86\u4E0B\uFF0C\u6B63\u5E38\u8FD0\u884C\uFF0C\u8FD9\u5C31\u662F\u5305</p><div class="custom-container warning"><p class="custom-container-title">\u91CD\u8981\u63D0\u793A</p><p>\u5728 Golang \u4E2D\uFF0C\u6CA1\u6709\u660E\u786E\u7684<code>public</code>\u6216\u8005<code>private</code>\u7B49\u6807\u8BC6\u7B26</p><p>\u4E00\u4E2A go \u6587\u4EF6\u4E2D\uFF0C\u5982\u679C\u8BF4\u8981\u5BF9\u5916\u66B4\u9732\u7684\u65B9\u6CD5\u6216\u8005\u53C2\u6570\uFF0C\u5219\u9996\u5B57\u6BCD\u5FC5\u987B\u5927\u5199</p><p>\u4F8B\u5982\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u8FD9\u6837\u53EA\u80FD\u5728\u672C\u6587\u4EF6\u8C03\u7528</span>
<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD9\u6837\u53EF\u4EE5\u5728\u4EFB\u610F\u5730\u65B9\u8C03\u7528</span>
<span class="token keyword">func</span> <span class="token function">Add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="\u5305\u7684\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u5305\u7684\u522B\u540D" aria-hidden="true">#</a> \u5305\u7684\u522B\u540D</h3><p>\u5982\u679C\u6709\u4E9B\u5305\u662F\u4EE5\u6570\u5B57\u5F00\u5934\u7684\uFF0C\u5219\u53EF\u4EE5\u53D6\u4E00\u4E2A\u522B\u540D</p><p>\u4F8B\u5982\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>

	myPackage <span class="token string">&quot;xxx.xxx/aaa/113123dasdasd&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	myPackage<span class="token punctuation">.</span><span class="token function">xxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u7981\u6B62\u5FAA\u73AF\u5BFC\u5305</p></div>`,104),i=[p];function c(o,l){return s(),a("div",null,i)}var r=n(e,[["render",c],["__file","02-\u7C7B.html.vue"]]);export{r as default};
