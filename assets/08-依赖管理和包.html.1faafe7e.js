import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.ad7a4a8c.js";const e={},i=t(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u8FD9\u4E5F\u662FGo\u8BED\u8A00\u4E2D\u65E9\u671F\u6700\u4E3A\u8BDF\u75C5\u7684\u5730\u65B9....\u975E\u5E38\u7684\u86CB\u75BC</p><p>\u6240\u4EE5GoLang\u5B98\u65B9\u57281.13\u7248\u672C\u540E\u63D0\u4F9B\u4E86<code>go module</code>\u8FD9\u4E2A\u4E1C\u897F</p><p>\u8981\u542F\u7528\u8FD9\u4E2A\u73A9\u610F\uFF0C\u9996\u5148\u8981\u8BBE\u7F6E\u4E0B\u73AF\u5883\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u73AF\u5883\u53D8\u91CF</span>
go <span class="token function">env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u7B2C\u4E00\u4E2A\uFF1A<code>GO111MODULE=</code>\u6CA1\u6709\u503C\uFF0C<strong>\u9ED8\u8BA4\u662Fauto</strong>,\u6709\u4E09\u4E2A\u503C</p><ul><li>off\uFF1A\u7981\u7528\u6A21\u5757\u652F\u6301\uFF0C\u7F16\u8BD1\u7684\u65F6\u5019\u4F1A\u9ED8\u8BA4\u7684\u53BBgoPath\u4E2D\u627E\u4F9D\u8D56</li><li>on:\u542F\u52A8\u6A21\u5757\u652F\u6301\uFF0C\u7F16\u8BD1\u7684\u65F6\u5019\u4F1A\u5FFD\u7565goPath\u53BB\u627E\uFF0C\u53EA\u4F1A\u53BB\u9879\u76EE\u7684<code>go.mod</code>\u6587\u4EF6\u4E0B\u53BB\u627E</li><li>auto:\u5F53\u9879\u76EE\u5728<code>$GOPATH/src</code>\u5916\u4E14\u6839\u76EE\u5F55\u6709<code>go.mod</code>\u7684\u65F6\u5019\uFF0C\u5F00\u542F\u6A21\u5757\u652F\u6301</li></ul><p>\u7B80\u5355\u6765\u8BF4\uFF0C\u8BBE\u7F6E\u4E3Aon\u4E4B\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528<code>go module</code>\u4E86\uFF0C\u4EE5\u540E\u5C31\u6CA1\u6709\u5FC5\u8981\u5728GOPATH\u4E2D\u521B\u5EFA\u9879\u76EE\u4E86\uFF0C\u5E76\u4E14\u8FD8\u80FD\u591F\u5F88\u597D\u7684\u7BA1\u7406\u7B2C\u4E09\u65B9\u5305</p><p>\u4F7F\u7528<code>go module</code>\u7BA1\u7406\u4F9D\u8D56\u540E\u4F1A\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u751F\u6210\u4E24\u4E2A\u6587\u4EF6<code>go.mod</code>\u548C<code>go.sum</code></p><h3 id="\u914D\u7F6Egomodule\u548C\u914D\u7F6E\u4F9D\u8D56\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Egomodule\u548C\u914D\u7F6E\u4F9D\u8D56\u4EE3\u7406" aria-hidden="true">#</a> \u914D\u7F6EgoModule\u548C\u914D\u7F6E\u4F9D\u8D56\u4EE3\u7406</h3><p>\u542F\u7528goModule\u5F88\u7B80\u5355\uFF0C\u53EA\u9700\u8981</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F00\u542F</span>
go <span class="token function">env</span> -w <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on
<span class="token comment"># \u5173\u95ED</span>
go <span class="token function">env</span> -w <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>off
<span class="token comment"># \u81EA\u52A8</span>
go <span class="token function">env</span> -w <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>auto
<span class="token comment"># \u67E5\u770B</span>
go <span class="token function">env</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u914D\u7F6E\u4EE3\u7406\uFF0C\u4F7F\u7528\u4E03\u725B\u4E91\u5373\u53EF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go <span class="token function">env</span> -w <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528gomodule" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528gomodule" aria-hidden="true">#</a> \u4F7F\u7528goModule</h3><p>\u8981\u521D\u59CB\u5316\u4E00\u4E2A\u9879\u76EE\u5F88\u7B80\u5355\uFF0C\u968F\u4FBF\u627E\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u6253\u5F00shell\u6216\u8005cmd\uFF0C\u8F93\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go mod init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u8FD9\u6837\u7684go.mod\u6587\u4EF6</p><div class="language-mod ext-mod line-numbers-mode"><pre class="language-mod"><code>module github.com/amayakite/study

go 1.17
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\u4E86</p><h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h2><p>\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u60F3\u8981\u63A7\u5236\u67D0\u4E2A\u51FD\u6570\u505C\u6B62\u8FD0\u884C\uFF0C\u53EF\u80FD\u4F1A\u4EA7\u751F\u5982\u4E0B\u7684\u753B\u98CE</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> exitChan <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> wg sync<span class="token punctuation">.</span>WaitGroup

<span class="token keyword">func</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;F\u51FD\u6570\u6267\u884C\u4E86&quot;</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>exitChan<span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;F\u51FD\u6570\u9000\u51FA\u4E86&quot;</span><span class="token punctuation">)</span>
		wg<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
	<span class="token punctuation">}</span>
	<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	wg<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span>
	exitChan <span class="token operator">&lt;-</span> <span class="token boolean">true</span>
	wg<span class="token punctuation">.</span><span class="token function">Wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5176\u4ED6\u65B9\u5F0F\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F8B\u5982\u4F7F\u7528\u5176\u4ED6\u7684\u6B63\u5E38\u7684\u503C\u6765\u5224\u5B9A\u4E0B\u662F\u5426\u8981\u9000\u51FA\uFF0C\u4F46\u662F\u8FD9\u6837\u7684\u8BDD\uFF0C\u611F\u89C9\u6709\u70B9\u6CA1\u5FC5\u8981</p><blockquote><p>\u5728Go Http\u7684Server\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u90FD\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684goroutine\u53BB\u5904\u7406\uFF0C\u8BF7\u6C42\u5904\u7406\u51FD\u6570\u901A\u5E38\u4F1A\u542F\u52A8\u989D\u5916\u7684goroutine\u7528\u6765\u8BBF\u95EE\u540E\u7AEF\u670D\u52A1\uFF0C\u6BD4\u5982\u6570\u636E\u5E93RPC\u670D\u52A1\uFF0C\u7528\u6765\u5904\u7406goroutine\u901A\u5E38\u9700\u8981\u8BBF\u95EE\u4E00\u4E9B\u4E0E\u8BF7\u6C42\u7279\u5B9A\u7684\u6570\u636E</p></blockquote><div class="custom-container info"><p class="custom-container-title">\u4F8B\u5B50</p><p>\u6BD4\u5982\u7EC8\u7AEF\u7528\u6237\u7684\u8EAB\u4EFD\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u9A8C\u8BC1\u76F8\u5173\u7684Token\uFF0C\u8BF7\u6C42\u7684\u622A\u6B62\u65F6\u95F4\uFF0C\u6BCF\u5F53\u4E00\u4E2A\u8BF7\u6C42\u88AB\u53D6\u6D88\u6216\u8D85\u65F6\u7684\u65F6\u5019\uFF0C\u6240\u6709\u7528\u6765\u5904\u7406\u8BE5\u8BF7\u6C42\u7684goroutine\u90FD\u5E94\u8BE5\u8FC5\u901F\u9000\u51FA\uFF0C\u7136\u540E\u7CFB\u7EDF\u624D\u80FD\u91CA\u653E\u8FD9\u4E9Bgoroutine\u5360\u7528\u7684\u8D44\u6E90</p><p>\u7B80\u5355\u6765\u8BF4\uFF0C\u8FD9\u76F8\u5F53\u4E8EJava\u4E2D\u7684ThreadLocal</p></div><h3 id="\u4F7F\u7528context" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528context" aria-hidden="true">#</a> \u4F7F\u7528Context</h3><p>\u4F7F\u7528\u8D77\u6765\u8FD8\u662F\u6BD4\u8F83\u7B80\u5355\u7684\uFF0C\u6307\u7684\u4E00\u8BF4\u7684\u662F\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u51FD\u6570\u94FE\u5F0F\u8C03\u7528\u7684\u8BDD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E2Actx\u9000\u51FA\u6240\u6709\u7684</p><p>\u83B7\u53D6\u4E00\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u526F\u672C\uFF0C\u6CE8\u610F\uFF0C\u662F\u526F\u672C\uFF0C\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u624D\u884C\uFF0C\u4E00\u822C\u90FD\u662F\u4F20\u5165\u4E00\u4E2Acontext.Background()\uFF0C\u4E5F\u5C31\u662F\u5F53\u524D\u7EBF\u7A0B\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">f</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;F\u51FD\u6570\u6267\u884C\u4E86&quot;</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
Lookup<span class="token punctuation">:</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ctx<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;F\u51FD\u6570\u9000\u51FA\u4E86&quot;</span><span class="token punctuation">)</span>
			<span class="token keyword">break</span> Lookup
		<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2Acontext \u9700\u8981\u4F20\u5165\u4E00\u4E2A\u4E0A\u4E0B\u6587\uFF0C\u8FD9\u91CC\u7684Background()\u662F\u9ED8\u8BA4\u7684\u4E0A\u4E0B\u6587</span>
	ctx<span class="token punctuation">,</span> cache <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithCancel</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// \u8FD9\u91CC\u8FD8\u53EF\u4EE5\u4F7F\u7528WithCancel\u6765\u7A7F\u4EF6\uFF0C\u4F20\u5165\u4E0A\u4E0B\u6587\u7684\u540C\u65F6\u8FD8\u9700\u8981\u4F20\u5165\u4E00\u4E2A\u65F6\u95F4\uFF0C\u4E5F\u5C31\u662F\u6307\u5B9A\u65F6\u95F4\u540E\u4F1A\u8FC7\u671F\uFF0C\u81EA\u52A8\u91CA\u653E</span>
	<span class="token keyword">go</span> <span class="token function">f</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span>
	<span class="token function">cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u4F7F\u7528\u9012\u5F52\u4E5F\u53EF\u4EE5\u7684</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">f</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;F\u51FD\u6570\u6267\u884C\u4E86&quot;</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ctx<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;F\u51FD\u6570\u9000\u51FA\u4E86&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
	<span class="token punctuation">}</span>
	<span class="token function">f</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2Acontext \u9700\u8981\u4F20\u5165\u4E00\u4E2A\u4E0A\u4E0B\u6587\uFF0C\u8FD9\u91CC\u7684Background()\u662F\u9ED8\u8BA4\u7684\u4E0A\u4E0B\u6587</span>
	ctx<span class="token punctuation">,</span> cache <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithCancel</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">f</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span>
	<span class="token function">cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main ending&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="context\u4E2D\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#context\u4E2D\u7684\u65B9\u6CD5" aria-hidden="true">#</a> Context\u4E2D\u7684\u65B9\u6CD5</h3><p>\u83B7\u53D6\u5230\u7684ctx\u5BF9\u8C61\u6709\u5982\u4E0B\u65B9\u6CD5</p><ul><li><code>Deadline()</code>\uFF0C\u8FD4\u56DE\u4E24\u4E2A\u503C\uFF0C\u4E00\u4E2A\u662Ftime.Time\uFF0C\u4E00\u4E2Abool\u503C\uFF0Cbool\u503C\u5982\u679C\u4E3Atrue\u5219\u8868\u793A\u8FD9\u4E2Actx\u5DF2\u7ECF\u88AB\u7ED3\u675F\uFF0C\u65F6\u95F4\u5BF9\u8C61\u8868\u793A\u7ED3\u675F\u7684\u65F6\u95F4</li><li><code>Done()</code>\u8FD4\u56DE\u4E00\u4E2Achannel\uFF0C\u8FD9\u4E2AChannel\u4F1A\u5728\u5F53\u524D\u4E0A\u4E0B\u6587\u5B8C\u6210\u540E\u88AB\u5173\u95ED\uFF0C\u591A\u6B21\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EA\u4F1A\u8FD4\u56DE\u4E00\u4E2AChannel</li><li><code>Err()</code>\u8FD4\u56DE\u5F53\u524DContext\u7ED3\u675F\u7684\u539F\u56E0\uFF0C\u5B83\u53EA\u4F1A\u5728<code>Done()</code>\u8FD4\u56DE\u7684Channel\u88AB\u5173\u95ED\u7684\u65F6\u5019\u624D\u56DE\u8FD4\u56DE\u975E\u7A7A(nil)\u7684\u65F6\u5019\u624D\u6709\u503C <ul><li>\u5982\u679C\u5F53\u524D<code>Context</code>\u88AB\u53D6\u6D88\uFF0C\u5219\u4F1A\u8FD4\u56DE<code>Caceled</code>\u9519\u8BEF</li><li>\u5982\u679C\u5F53\u524D<code>Context</code>\u8D85\u65F6\u5C31\u4F1A\u88AB\u8FD4\u56DE<code>DeadLineExceeded</code>\u9519\u8BEF</li></ul></li><li><code>Value()</code>\u4F1A\u4ECEContext\u4E2D\u8FD4\u56DE\u952E\u5BF9\u5E94\u7684\u503C\uFF0C\u5BF9\u4E8E\u540C\u4E00\u4E2A\u4E0A\u4E0B\u6587\u6765\u8BF4\uFF0C\u591A\u6B21\u8C03\u7528<code>Value()</code>\u5E76\u4F20\u5165\u76F8\u540C\u7684key\u4F1A\u8FD4\u56DE\u76F8\u540C\u7684\u7ED3\u679C\uFF0C\u8BE5\u65B9\u6CD5\u53EA\u7528\u4E8E\u4F20\u9012API\u548C\u8FDB\u7A0B\u95F4\u8DDF\u8BF7\u6C42\u57DF\u7684\u6570\u636E</li></ul><h3 id="\u6307\u5B9A\u65F6\u95F4\u8FC7\u671F\u7684context-withtimeout" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u65F6\u95F4\u8FC7\u671F\u7684context-withtimeout" aria-hidden="true">#</a> \u6307\u5B9A\u65F6\u95F4\u8FC7\u671F\u7684Context-WithTimeout</h3><p>\u4F20\u5165\u65F6\u95F4\u5373\u53EF</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">f</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;F\u51FD\u6570\u6267\u884C\u4E86&quot;</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token keyword">select</span> <span class="token punctuation">{</span>
	<span class="token keyword">case</span> <span class="token operator">&lt;-</span>ctx<span class="token punctuation">.</span><span class="token function">Done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;F\u51FD\u6570\u9000\u51FA\u4E86&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token keyword">default</span><span class="token punctuation">:</span>
	<span class="token punctuation">}</span>
	<span class="token function">f</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2Acontext \u9700\u8981\u4F20\u5165\u4E00\u4E2A\u4E0A\u4E0B\u6587\uFF0C\u8FD9\u91CC\u7684Background()\u662F\u9ED8\u8BA4\u7684\u4E0A\u4E0B\u6587</span>
	ctx<span class="token punctuation">,</span> cache <span class="token operator">:=</span> context<span class="token punctuation">.</span><span class="token function">WithTimeout</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Second<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">f</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span>
	<span class="token function">cache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;main ending&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E0A\u4E0B\u6587\u4F20\u503C" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4E0B\u6587\u4F20\u503C" aria-hidden="true">#</a> \u4E0A\u4E0B\u6587\u4F20\u503C</h3><p>\u6709\u7684\u65F6\u5019\uFF0C\u60F3\u8981\u5728\u4E0A\u4E0B\u6587\u4F20\u503C\uFF0C\u5219\u53EF\u4EE5\u8FD9\u6837\u505A\uFF0C\u6CE8\u610F\uFF0C\u63D0\u4F9B\u7684key\u5FC5\u987B\u662F\u53EF\u4EE5\u6BD4\u8F83\u7684\uFF0C\u5E76\u4E14\u4E0D\u80FD\u662FString\u7C7B\u578B\uFF0C\u4EE5\u907F\u514D\u4E0A\u4E0B\u6587\u4F20\u9012\u65F6\u53D1\u751F\u51B2\u7A81</p><p>\u4F7F\u7528\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
	&quot;context&quot;
	&quot;fmt&quot;
	&quot;sync&quot;
	&quot;time&quot;
)

type TraceCode string

var wg sync.WaitGroup

func worker(ctx context.Context) {
	key := TraceCode(&quot;trace&quot;)
	//\u5728\u8FD9\u91CC\u83B7\u53D6trace
	value := ctx.Value(key)
	//\u5728\u8FD9\u91CC\u6253\u5370trace
	if value != nil {
		fmt.Println(value)
	}
LOOP:
	for {
		select {
		case &lt;-ctx.Done():
			break LOOP
		default:
			time.Sleep(time.Second)
			fmt.Println(&quot;worker&quot;)
		}
	}
	fmt.Println(&quot;done&quot;)
	wg.Done()

}

func main() {
	//\u5148\u521B\u5EFA\u4E00\u4E2Acontext
	ctx, cache := context.WithCancel(context.Background())
	//\u7ED9ctx\u6DFB\u52A0\u4E00\u4E2Akey value \u6CE8\u610F\uFF0C\u8FD9\u91CC\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u662F\u521A\u521A\u7684ctx
	ctx = context.WithValue(ctx, TraceCode(&quot;trace&quot;), &quot;123&quot;)
	wg.Add(1)
	go worker(ctx)
	time.Sleep(time.Second * 3)
	cache() // \u7ED3\u675F
	wg.Wait()
	fmt.Println(&quot;main done&quot;)

}

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),c=[i];function o(p,l){return s(),a("div",null,c)}var r=n(e,[["render",o],["__file","08-\u4F9D\u8D56\u7BA1\u7406\u548C\u5305.html.vue"]]);export{r as default};
