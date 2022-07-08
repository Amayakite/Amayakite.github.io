import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o,c,a as s,b as e,e as t,d as n}from"./app.ad7a4a8c.js";const l={},u=t('<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u957F\u7BC7\u5927\u8BBA\u8FD9\u91CC\u5C31\u4E0D\u591A\u8BF4\u660E\u4E86\uFF0C\u603B\u4E4B \uFF0C\u8FD9\u662F\u4E00\u95E8\u9AD8\u5E76\u53D1\u975E\u5E38\u725B\u903C\u7684\u8BED\u8A00</p><p>\u989D\u5916\u8BF4\u4E00\u5634\uFF0C\u8FD9\u5E76\u4E0D\u662F\u4E00\u95E8\u9AD8\u7EA7\u8BED\u8A00\uFF0C\u800C\u662F\u4E00\u95E8\u504F\u5411\u5E95\u5C42\u7684\u8BED\u8A00</p><p>\u6027\u80FD\u4F18\u5F02\u7684\u540C\u65F6\uFF0C\u5E26\u6765\u7684\u635F\u5931\u4E3A\uFF1A\u5C11\u4E86\u9AD8\u7EA7\u8BED\u8A00\u4F8B\u5982 Java \u4E2D\u4E00\u4E9B\u7075\u6D3B\u7684\u7279\u6027\uFF0C\u5982\u6CDB\u578B\u7B49</p><p>\u5728\u5B66\u4E60\u8FD9\u95E8\u8BED\u8A00\u4E4B\u524D\uFF0C\u4E2A\u4EBA\u5EFA\u8BAE\u662F\u5148\u719F\u6089\u4F7F\u7528\u5176\u4ED6\u4EFB\u610F\u4E00\u4E24\u95E8\u8BED\u8A00</p><p>\u4F8B\u5982\u672C\u4EBA\u662F\u5728\u4F1A\u7528</p><ul><li>Java</li><li>JavaScript</li><li>Typescript</li><li>Python</li></ul><p>\u624D\u5F00\u59CB\u5B66\u4E60 Golang\uFF0C\u5982\u679C\u662F\u521D\u5B66\u8005\uFF0C\u5EFA\u8BAE\u548B\u6837\u4E5F\u5F97\u5148\u8FC7\u4E00\u904D C++ \u4E4B\u7C7B\u7684\u8BED\u8A00\uFF0C\u6216\u8005 Java\u3001C#\u8FD9\u7C7B\u7684\u9AD8\u7EA7\u8BED\u8A00</p><h3 id="\u5B89\u88C5\u548C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u548C\u914D\u7F6E" aria-hidden="true">#</a> \u5B89\u88C5\u548C\u914D\u7F6E</h3>',9),r=n("Windows \u76F4\u63A5\u5728\u5B98\u7F51\u4E0B\u8F7D\u5B89\u88C5\u6700\u65B0\u7248\u672C\u5373\u53EF"),d={href:"https://go.dev/",target:"_blank",rel:"noopener noreferrer"},k=n("https://go.dev/"),v=t(`<p>\u76F4\u63A5\u65E0\u8111 Next</p><p>Linux \u7684\u8BDD\uFF0C\u8FD9\u91CC\u4EE5 Ubuntu \u4E3A\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> golang
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u60F3\u8981\u6E90\u7801\u5B89\u88C5\u7684\u8BDD</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1.\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u6E90\u7801\u5305\u5E76\u5C06\u5C06\u4E0B\u8F7D\u7684\u6E90\u7801\u5305\u89E3\u538B\u81F3 /usr/local\u76EE\u5F55</span>
<span class="token function">wget</span> https://dl.google.com/go/go1.16.6.linux-amd64.tar.gz
<span class="token function">tar</span> -C /usr/local -xzf go1.16.6.linux-amd64.tar.gz

<span class="token comment">#2.\u5C06 /usr/local/go/bin \u76EE\u5F55\u6DFB\u52A0\u81F3PATH\u73AF\u5883\u53D8\u91CF</span>
<span class="token comment">#\u5728/root/.profile\u8FDB\u884C\u6DFB\u52A0</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/usr/local/go  <span class="token comment"># \u5B89\u88C5\u76EE\u5F55</span>
<span class="token comment">#GOROOT \u7B2C\u4E09\u65B9\u5305\u7684\u5B89\u88C5\u5305\u8DEF\u5F84</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPATH</span><span class="token operator">=</span>/home/go/      <span class="token comment"># \u9879\u76EE\u8DEF\u5F84\u4E00\u822C\u6307\u5411src</span>
<span class="token comment">#\u9700\u8981BIN\u76EE\u5F55\u548CGOPATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$GOROOT</span>/bin

<span class="token comment">#3.\u9A8C\u8BC1\u662F\u5426\u5B89\u88C5\u6210\u529F, \u53EF\u4EE5\u6253\u5F00\u7EC8\u7AEF\u7A97\u53E3\u8F93\u5165go version\u547D\u4EE4\uFF0C\u67E5\u770B\u5B89\u88C5\u7684Go\u7248\u672C\u3002</span>
go <span class="token function">env</span>
go version go version go1.16.6 linux/amd64

<span class="token comment">#4.go\u8BED\u8A00\u7A0B\u5E8F\u7F16\u8BD1\u8FD0\u884C</span>
package main
<span class="token function">import</span> <span class="token string">&quot;fmt&quot;</span>
func <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   fmt.Println<span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">#5.\u7F16\u8BD1\u8FD0\u884Chello.go</span>
go build hello.go
go run hello.go <span class="token operator">&amp;&amp;</span> ./hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gopath-\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#gopath-\u7684\u914D\u7F6E" aria-hidden="true">#</a> GOPATH \u7684\u914D\u7F6E</h3><p>\u8FD9\u4E2A\u4E1C\u897F\u5C31\u76F8\u5F53\u4E8E\u662F\u914D\u7F6E maven \u7684\u6253\u5305\u4E4B\u7C7B\u7684\u8DEF\u5F84\u4E00\u6837\uFF0C\u6709\u4E2A\u9ED8\u8BA4\u503C</p><p>Windows: \u5728<code>%USERPROFILE%/go</code>\u4E2D</p><p>Linux: <code>$HOME/go</code></p><p>\u8FD9\u4E2A\u81EA\u5DF1\u770B\u7740\u4FEE\u6539\u5373\u53EF\uFF0CWindows \u76F4\u63A5\u4FEE\u6539\u73AF\u5883\u53D8\u91CF\uFF0C\u52A0\u4E00\u4E2A<code>GOPATH</code>\u5373\u53EF</p><p>\u4F8B\u5982\uFF1A<code>C:\\goPath</code>\uFF0C\u7136\u540E\u8981\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\u5206\u522B\u65B0\u5EFA\u4E09\u4E2A\u76EE\u5F55</p><ul><li><code>bin</code> \u7528\u6765\u5B58\u653E\u7F16\u8BD1\u540E\u751F\u6210\u7684\u53EF\u6267\u884C\u6587\u4EF6</li><li><code>pkg</code> \u7528\u6765\u5B58\u653E\u7F16\u8BD1\u540E\u751F\u6210\u7684\u5F52\u6863\u6587\u4EF6</li><li><code>src</code> \u7528\u6765\u5B58\u653E\u6E90\u7801\u6587\u4EF6</li></ul><p>\u7136\u540E\u518D\u5230<strong>PATH</strong>\u73AF\u5883\u53D8\u91CF\u4E2D\uFF0C\u628A\u521A\u521A\u7684<code>GOPATH</code>\u4E2D\u7684 bin \u4E22\u8FDB\u53BB\uFF0C\u4E5F\u5C31\u662F\uFF1A<code>%GOPATH%/bin</code></p><p>PS\uFF1A\u8FD9\u4E2A GOPATH \u7535\u8111\u4E0A\u6709\u9ED8\u8BA4\u503C\u7684\uFF0C\u4E00\u822C\u76F4\u63A5\u4FEE\u6539\u9ED8\u8BA4\u503C\u5373\u53EF</p><p>\u81F3\u4E8E Linux \u561B\uFF0C\u8FD9\u91CC\u4EE5 Ubuntu \u4E3A\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> ~/.profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u6587\u4EF6\u672B\u5C3E\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\u5373\u53EF</p><div class="language-profile ext-profile line-numbers-mode"><pre class="language-profile"><code>export GOROOT=&quot;/usr/lib/go-1.8&quot; // \u5F15\u53F7\u5185\u8BBE\u7F6E\u4E3A\u4F60\u81EA\u5DF1\u7684go\u5B89\u88C5\u76EE\u5F55 \u5982\u679C\u662F apt\u5B89\u88C5\u7684\u53EF\u4EE5\u901A\u8FC7whereis golang\u6765\u67E5\u770B\u5B89\u88C5\u76EE\u5F55
export GOBIN=$GOROOT/bin
export GOPATH=&quot;/home/test/gopath&quot; // \u5F15\u53F7\u5185\u8BBE\u7F6E\u4E3A\u81EA\u5DF1\u7684go\u9879\u76EE\u7684\u5DE5\u4F5C\u533A\u95F4
export PATH=$PATH:$GOPATH/bin // \u539F\u8DEF\u5F84\u540E\u7528\u5192\u53F7\u8FDE\u63A5\u65B0\u8DEF\u5F84\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u7684 ubuntu \u6D41\u7A0B\u4E3A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u73AF\u5883\u53D8\u91CF</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/profile.d/golang-env.sh
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOROOT</span><span class="token operator">=</span>/home/weiyigeek/app/program/go
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPATH</span><span class="token operator">=</span>/home/weiyigeek/app/program/project/go
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">PATH</span>}</span><span class="token builtin class-name">:</span><span class="token variable">\${GOROOT}</span>/bin

<span class="token comment"># \u521B\u5EFA bin,pkg,src</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> -vp <span class="token variable">\${GOPATH}</span>/<span class="token punctuation">{</span>bin,pkg,src<span class="token punctuation">}</span>

<span class="token comment"># \u91CD\u5F00Shell\u9A8C\u8BC1\u7248\u672C</span>
<span class="token function">sudo</span>  <span class="token builtin class-name">source</span> /etc/profile
go version
  <span class="token comment"># go version go1.16.6 linux/amd64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u4E8E-go-\u7684\u9879\u76EE\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-go-\u7684\u9879\u76EE\u8DEF\u5F84" aria-hidden="true">#</a> \u5173\u4E8E go \u7684\u9879\u76EE\u8DEF\u5F84</h3><p>\u6839\u636E\u4E0A\u9762\u7684 gopath \u53EF\u4EE5\u77E5\u9053\uFF0C\u6211\u4EEC\u7684\u9879\u76EE\u4E00\u822C\u90FD\u662F\u76F4\u63A5\u6E90\u7801\u4E22\u5728 gopath \u7684 src \u5185</p><p>\u90A3\u4E48\u5982\u4F55\u547D\u540D\u5462\uFF1F</p><p>\u56E0\u4E3A\u8DDF java \u4E0D\u540C \u4F7F\u7528 golang \u7684\u53EF\u80FD\u662F\u5B66\u751F\uFF0C\u6240\u4EE5\u4E00\u822C\u547D\u540D\u65B9\u6CD5\u662F\u4F7F\u7528 github \u540D\u79F0\u6765</p><p>\u4F8B\u5982\u6211\u7684\u8BDD\u60F3\u8981\u4E2A blog \u9879\u76EE\u548C\u4E00\u4E2A shop \u9879\u76EE\uFF0C\u5219\u5E94\u8BE5\u662F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>github.com/amayakite/blog
github.com/amayakite/shop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u4E00\u4E2A\u6587\u4EF6\u683C\u5F0F\uFF0C\u603B\u4E4B\u548C java \u4E5F\u5DEE\u4E0D\u591A</p><p>\u6216\u8005\u7528\u6211\u81EA\u5DF1\u7684\u57DF\u540D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>example.org/amayakite/blog
example.org/amayakite/shop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u4E8E\u7F16\u8F91\u5668" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u7F16\u8F91\u5668" aria-hidden="true">#</a> \u5173\u4E8E\u7F16\u8F91\u5668</h3>`,30),m=n("\u770B\u4E2A\u4EBA\u559C\u6B22\uFF0C\u5FAE\u8F6F\u7684"),b={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},g=n("VsCode"),f=n("\u6216\u8005 Jetbrains \u7684"),h={href:"https://www.jetbrains.com/go",target:"_blank",rel:"noopener noreferrer"},q=n("GoLang"),y=n("\u90FD\u53EF"),w=t(`<p>PS\uFF1A\u5176\u5B9E IEDA \u4E5F\u53EF\u4EE5\u5199 go</p><p>\u5982\u679C\u4F60\u9009\u62E9\u4E86 Vscode\uFF0C\u53EA\u9700\u8981\u5B89\u88C5\u4E00\u4E2A go \u63D2\u4EF6\u5C31\u53EF\u4EE5\u5F88\u8212\u670D\u7684\u4F7F\u7528\u4E86</p><p>\u5982\u679C\u4F60\u9009\u62E9\u7684\u662F Jetbrains \u7684 GoLang\uFF0C\u90A3\u4E48\u5F00\u7BB1\u5373\u7528\u5C31\u884C</p><h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h2><p>\u8FD9\u91CC\u6211\u521B\u5EFA\u7684\u5DE5\u7A0B\u8DEF\u5F84\u4E3A<code>C:\\go\\src\\github.com\\amayakite\\study</code></p><p>\u5176\u4E2D<code>C:\\go</code>\u662F GOPATH \u7684\u5DE5\u7A0B\u8DEF\u5F84</p><p>\u7136\u540E\u5176\u4E2D\u52A0\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6587\u4EF6\u540D\u968F\u610F\uFF0C\u4E4B\u540E\u5199\u5165\u5982\u4E0B\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7279\u522B<strong>\u6CE8\u610F</strong> \u8FD9\u4E2A package \u662F main \u800C\u4E0D\u662F\u5176\u4ED6\u7684 \u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u786E\u7684\u8FD0\u884C</p><p>\u63A5\u4E0B\u6765\u4F60\u53EA\u9700\u8981\u5728\u7EC8\u7AEF\u4E2D\u8F93\u5165<code>go build</code>\u6216\u8005\u70B9\u4E0B\u8FD0\u884C\u6309\u94AE\u4E4B\u7C7B\u7684\u5373\u53EF\u770B\u5230\u63A7\u5236\u53F0\u6709\u5185\u5BB9\u8F93\u51FA</p><p>\u5982\u679C\u8BF4\u4F60\u8F93\u5165\u7684\u662F go build \u5219\u8FD8\u53EF\u4EE5 \u770B\u5230\u540C\u7EA7\u76EE\u5F55\u4E0B\u751F\u6210\u4E86\u4E00\u4E2A<em>exe</em>\u53EF\u6267\u884C\u6587\u4EF6\uFF08Windows \u4E0B\u7684\u8BDD\uFF0CLinux \u540C\u7406\uFF09</p><p>\u5F53\u7136 go build \u4E5F\u53EF\u4EE5\u8FD9\u6837\u7528\uFF1A<code>go build github.com/amayakite/study</code></p><p>\u7136\u540E\u5C31\u80FD\u5728<code>github.com\\amayakite</code>\u76EE\u5F55\u4E0B\u770B\u5230\u6253\u5305\u597D\u7684\u53EF\u6267\u884C\u6587\u4EF6</p><h3 id="\u5982\u4F55\u8DE8\u5E73\u53F0\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8DE8\u5E73\u53F0\u7F16\u8BD1" aria-hidden="true">#</a> \u5982\u4F55\u8DE8\u5E73\u53F0\u7F16\u8BD1</h3><p>\u9ED8\u8BA4\u6211\u4EEC go build \u7684\u53EF\u6267\u884C\u6587\u4EF6\u90FD\u662F\u5F53\u524D\u64CD\u4F5C\u7CFB\u7EDF\u53EF\u6267\u884C\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u6211\u60F3\u5728 windows \u4E0B\u7F16\u8BD1\u4E00\u4E2A linux \u4E0B\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u90A3\u9700\u8981\u600E\u4E48\u505A\u5462\uFF1F</p><p>\u53EA\u9700\u8981\u6307\u5B9A\u76EE\u6807\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5E73\u53F0\u548C\u5904\u7406\u5668\u67B6\u6784\u5373\u53EF\uFF0C\u4F8B\u5982 Windows \u5E73\u53F0 cmd \u4E0B\u6309\u5982\u4E0B\u65B9\u5F0F\u6307\u5B9A\u73AF\u5883\u53D8\u91CF\u7F16\u8BD1\u51FA\u7684\u53EF\u4EE5\u6267\u884C\u6587\u4EF6\u5219\u53EF\u4EE5\u5728 Linux \u64CD\u4F5C\u7CFB\u7EDF amd64 \u5904\u7406\u5668\u4E2D\u6267\u884C,\u7136\u540E\u518D\u6267\u884C go build \u547D\u4EE4\uFF0C\u5F97\u5230\u7684\u5C31\u662F\u80FD\u591F\u5728 Linux \u5E73\u53F0\u8FD0\u884C\u7684\u53EF\u6267\u884C\u6587\u4EF6\u4E86\u3002</p><p>PS \u4E0B\u9762\u8FD9\u91CC\u6211\u4E5F\u6CA1\u641E\u6210\u529F\uFF0C\u4EE5\u540E\u6709\u673A\u4F1A\u53BB\u67E5\u67E5\u6587\u6863\u5373\u53EF</p><p>Windows \u7F16\u8BD1\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>SET <span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span>  <span class="token comment"># \u7981\u7528CGO</span>
SET <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>linux     <span class="token comment"># \u76EE\u6807\u5E73\u53F0\u662Flinux</span>
SET <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64   <span class="token comment"># \u76EE\u6807\u5904\u7406\u5668\u67B6\u6784\u662Famd64</span>
go build <span class="token comment"># \u6253\u5305</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F PowerShell \u7EC8\u7AEF\uFF0C\u90A3\u4E48\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u7684\u8BED\u6CD5\u4E3A <code>$ENV:CGO_ENABLED=0</code></p><p>Linux \u548C Mac \u4E0B\u591A\u5E73\u53F0\u7684\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u76EE\u6807\u5E73\u53F0\u662Flinux</span>
<span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>linux <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64 go build
<span class="token comment"># \u76EE\u6807\u5E73\u53F0Windows</span>
<span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>windows <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64 go build
<span class="token comment"># \u76EE\u6807\u5E73\u53F0Mac</span>
<span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>darwin <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64 go build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go-run" tabindex="-1"><a class="header-anchor" href="#go-run" aria-hidden="true">#</a> go-run</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BED\u6CD5\uFF1Ago run xxx.go</span>
go run main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C31\u50CF\u662F\u8FD0\u884C Python \u90A3\u6837</p><h3 id="go-install" tabindex="-1"><a class="header-anchor" href="#go-install" aria-hidden="true">#</a> go-install</h3><p><code>go install fileName</code></p><ol><li>\u5148\u7F16\u8BD1\u5F97\u5230\u4E00\u4E2A\u53EF\u6267\u884C\u6587\u4EF6</li><li>\u5C06\u8FD9\u4E2A\u6587\u4EF6\u590D\u5236\u5230 GOPATH \u4E0B\u7684<code>bin</code>\u6587\u4EF6\u5939\u4E0B</li></ol><h2 id="\u57FA\u7840\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a> \u57FA\u7840\u77E5\u8BC6</h2><p>\u5E26\u8FC7\u4E00\u4E0B\uFF0Cmain \u5305\u7684\u8BDD\u5C31\u76F8\u5F53\u4E8E\u662F Java \u4E2D\u7684<code>public static void main(Stirng args[])</code>\u90A3\u6837</p><p>\u901A\u8FC7<code>package main</code>\u6807\u6CE8\u7684\u6587\u4EF6\uFF0C\u5176\u4E2D\u7684 main \u65B9\u6CD5\u5C06\u4F1A\u81EA\u52A8\u4F5C\u4E3A\u7A0B\u5E8F\u7684\u4E3B\u65B9\u6CD5</p><h3 id="\u58F0\u660E\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u53D8\u91CF" aria-hidden="true">#</a> \u58F0\u660E\u53D8\u91CF</h3><p>\u6CE8\u610F \u5728 go \u8BED\u8A00\u4E2D\uFF0C\u6240\u6709\u53D8\u91CF\u58F0\u660E\u4E86 \u5C31\u5FC5\u987B\u4F7F\u7528\uFF0C\u5426\u5219\u7F16\u8BD1\u4E0D\u7ED9\u8FC7</p><p>\u5F53\u7136 \u53EF\u4EE5\u5148\u58F0\u660E\uFF0C\u7136\u540E\u5728\u65B9\u6CD5\u4E2D\u8D4B\u503C \u90FD\u662F\u53EF\u4EE5\u7684</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
 <span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> name <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span>
<span class="token keyword">var</span> age <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">var</span> isOk <span class="token builtin">bool</span> <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span>
    <span class="token comment">//\u6570\u503C\u8F6C\u6362Str</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;age:&quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>isOk<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6A21\u677F\u5B57\u7B26\u4E32\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u5B57\u7B26\u4E32\u8F93\u51FA" aria-hidden="true">#</a> \u6A21\u677F\u5B57\u7B26\u4E32\u8F93\u51FA</h3><p>\u4F7F\u7528<code>Printf</code>\u5373\u53EF\uFF0C\u7136\u540E<code>%s</code>\u8868\u793A\u8981\u683C\u5F0F\u5316\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span><span class="token string">&quot;fmt&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> name <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;name:%s\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u533F\u540D\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u53D8\u91CF" aria-hidden="true">#</a> \u533F\u540D\u53D8\u91CF</h3><p>\u5148\u770B\u4EE3\u7801</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> s<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Amaya-kite&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5F53\u8C03\u7528\u4E00\u4E2A\u4F1A\u8FD4\u56DE\u591A\u4E2A\u8FD4\u56DE\u503C\u7684\u51FD\u6570\u65F6\uFF0C\u5982\u679C\u4E0D\u60F3\u8981\u5176\u4E2D\u7684\u67D0\u4E9B\u8FD4\u56DE\u503C\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>_</code>\u6765\u63A5\u6536\uFF0C\u8FD9\u6837\u5C31\u4E0D\u4F1A\u62A5\u9519\uFF0C\u5E76\u4E14\u5176\u4F59\u7684\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\uFF08\u989D\u5916\u8BF4\u4E0B\uFF0C\u8FD9\u591A\u4E2A\u8FD4\u56DE\u503C\u770B\u7740\u8FD8\u662F\u86EE\u8212\u670D\u7684\uFF09</p></blockquote><p>PS\uFF1A\u533F\u540D\u53D8\u91CF\u4E0D\u5360\u7528\u547D\u540D\u7A7A\u95F4\uFF0C\u4E0D\u4F1A\u5206\u914D\u5185\u5B58\uFF0C\u6240\u4EE5\u533F\u540D\u53D8\u91CF\u4E4B\u95F4\u4E0D\u5B58\u5728\u91CD\u590D\u58F0\u660E</p><p>\u6CE8\u610F\uFF1A</p><ol><li>\u51FD\u6570\u5916\u7684\u6BCF\u4E2A\u8BED\u53E5\u90FD\u5FC5\u987B\u4EE5\u5173\u952E\u5B57\u5F00\u59CB\uFF08var\u3001const\u3001func \u7B49\uFF09</li><li><code>_</code>\u591A\u7528\u4E8E\u5360\u4F4D\uFF0C\u8868\u793A\u5FFD\u7565\u8BE5\u503C</li></ol><h3 id="\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5E38\u91CF" aria-hidden="true">#</a> \u5E38\u91CF</h3><p>\u5C31\u50CF\u662F\u7528 JavaScript \u90A3\u6837\uFF0C\u6216\u8005 Java \u4E2D\u7684<code>Final</code>\u90A3\u6837\uFF0C\u8FD9\u73A9\u610F\u9700\u8981\u5728\u58F0\u660E\u7684\u65F6\u5019\u8D4B\u503C\uFF1A</p><p>\u8BED\u6CD5\u5F88\u7B80\u5355\uFF0C\u5C31\u4E00\u4E2A\uFF1A<code>const xx string = xx</code></p><h3 id="\u540C\u65F6\u58F0\u660E\u591A\u4E2A\u53D8\u91CF\u6216\u8005\u5E38\u91CF" tabindex="-1"><a class="header-anchor" href="#\u540C\u65F6\u58F0\u660E\u591A\u4E2A\u53D8\u91CF\u6216\u8005\u5E38\u91CF" aria-hidden="true">#</a> \u540C\u65F6\u58F0\u660E\u591A\u4E2A\u53D8\u91CF\u6216\u8005\u5E38\u91CF</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">var</span> <span class="token punctuation">(</span>
    name <span class="token operator">=</span>  <span class="token string">&quot;\u5F20\u4E09&quot;</span>
    age <span class="token operator">=</span> <span class="token number">10</span>
    sex <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    city  <span class="token operator">=</span> <span class="token string">&quot;ShangHai&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5982\u679C\u60F3\u7701\u7565-var" tabindex="-1"><a class="header-anchor" href="#\u5982\u679C\u60F3\u7701\u7565-var" aria-hidden="true">#</a> \u5982\u679C\u60F3\u7701\u7565 var</h3><p>\u6CE8\u610F \u53EA\u80FD\u5728\u65B9\u6CD5\u5185\u8FD9\u6837\u7528</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    f1 <span class="token operator">:=</span> <span class="token number">1.23456</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iota-\u81EA\u589E" tabindex="-1"><a class="header-anchor" href="#iota-\u81EA\u589E" aria-hidden="true">#</a> IOTA(\u81EA\u589E)</h3><p>\u5E94\u7528\u573A\u666F\u5E94\u8BE5\u662F\u4E00\u4E9B\u679A\u4E3E\u4E4B\u7C7B\u7684\u81EA\u589E\u5427,\u5F53\u7136\u8FD9\u91CC\u9762\u4E5F\u53EF\u4EE5\u4F7F\u7528<code>_</code>\u6765\u7565\u8FC7\u67D0\u4E00\u4E2A\u6570\u503C</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    a1 <span class="token operator">=</span> <span class="token boolean">iota</span>
    a2
    a3
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a1:%d\\n&quot;</span><span class="token punctuation">,</span> a1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a2:%d\\n&quot;</span><span class="token punctuation">,</span> a2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a3:%d\\n&quot;</span><span class="token punctuation">,</span> a3<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    a1:0
    a2:1
    a3:2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\u4E5F\u53EF\u4EE5\u63D2\u961F</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    a1 <span class="token operator">=</span> <span class="token boolean">iota</span>
    a2 <span class="token operator">=</span> <span class="token number">100</span>
    a3 <span class="token operator">=</span> <span class="token boolean">iota</span>
    a4
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a1:%d\\n&quot;</span><span class="token punctuation">,</span> a1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a2:%d\\n&quot;</span><span class="token punctuation">,</span> a2<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a3:%d\\n&quot;</span><span class="token punctuation">,</span> a3<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;a4:%d\\n&quot;</span><span class="token punctuation">,</span> a4<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a1:0
a2:100
a3:2
a4:3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FDB\u9636\u7528\u6CD5\uFF1A\u4F8B\u5982\u5B58\u50A8 KB</p><p>\uFF08\u8FD9\u91CC\u7684&lt;&lt;\u8868\u793A\u5DE6\u79FB\u64CD\u4F5C\uFF0C1&lt;&lt;10 \u8868\u793A\u5C06 1 \u7684\u4E8C\u8FDB\u5236\u8868\u793A\u5411\u5DE6\u79FB 10 \u4F4D\uFF0C\u4E5F\u5C31\u662F\u7531 1 \u53D8\u6210\u4E86 10000000000\uFF0C\u4E5F\u5C31\u662F\u5341\u8FDB\u5236\u7684 1024\u3002\u540C\u7406 2&lt;&lt;2 \u8868\u793A\u5C06 2 \u7684\u4E8C\u8FDB\u5236\u8868\u793A\u5411\u5DE6\u79FB 2 \u4F4D\uFF0C\u4E5F\u5C31\u662F\u7531 10 \u53D8\u6210\u4E86 1000\uFF0C\u4E5F\u5C31\u662F\u5341\u8FDB\u5236\u7684 8\u3002\uFF09</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">const</span> <span class="token punctuation">(</span>
    <span class="token boolean">_</span>  <span class="token operator">=</span> <span class="token boolean">iota</span>
    KB <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token boolean">iota</span><span class="token punctuation">)</span>
    MB <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token boolean">iota</span><span class="token punctuation">)</span>
    GB <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token boolean">iota</span><span class="token punctuation">)</span>
    TB <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token boolean">iota</span><span class="token punctuation">)</span>
    PB <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">*</span> <span class="token boolean">iota</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;KB:%d\\n&quot;</span><span class="token punctuation">,</span> KB<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;MB:%d\\n&quot;</span><span class="token punctuation">,</span> MB<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;GB:%d\\n&quot;</span><span class="token punctuation">,</span> GB<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;TB:%d\\n&quot;</span><span class="token punctuation">,</span> TB<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;PB:%d\\n&quot;</span><span class="token punctuation">,</span> PB<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>KB:1024
MB:1048576
GB:1073741824
TB:1099511627776
PB:1125899906842624
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u4E8E\u6574\u6570\u7684\u8FDB\u5236" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u6574\u6570\u7684\u8FDB\u5236" aria-hidden="true">#</a> \u5173\u4E8E\u6574\u6570\u7684\u8FDB\u5236</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u5341\u8FDB\u5236</span>
    <span class="token keyword">var</span> i1 <span class="token operator">=</span> <span class="token number">101</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i1<span class="token punctuation">)</span>
    <span class="token comment">// \u516B\u8FDB\u5236</span>
    <span class="token keyword">var</span> i2 <span class="token operator">=</span> <span class="token number">077</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i2<span class="token punctuation">)</span>
    <span class="token comment">// \u5341\u516D\u8FDB\u5236</span>
    <span class="token keyword">var</span> i3 <span class="token operator">=</span> <span class="token number">0x123456789</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> i3<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F6C\u6362\u7684\u8BDD\uFF0C\u4F8B\u5982\u8F6C\u6362\u6210 int8\uFF0C\u5219\u9700\u8981<code>int8(132113)</code></p><h3 id="\u5173\u4E8E\u6D6E\u70B9\u6570" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u6D6E\u70B9\u6570" aria-hidden="true">#</a> \u5173\u4E8E\u6D6E\u70B9\u6570</h3><p>\u9ED8\u8BA4\u7C7B\u578B\u662F<code>float64</code>\u7C7B\u578B\u7684</p><p>\u58F0\u660E\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    f1 <span class="token operator">:=</span> <span class="token number">1.23456</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8981\u5B9A\u4E49 float32\uFF0C\u5219\u8FD9\u6837<code>f1 = float32(111.111)</code></p><h3 id="\u5173\u4E8E-boolean" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-boolean" aria-hidden="true">#</a> \u5173\u4E8E Boolean</h3><blockquote><p>\u5982\u679C\u4E0D\u8D4B\u503C\u7684\u8BDD \u9ED8\u8BA4\u662F false</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myBool <span class="token operator">:=</span> <span class="token boolean">true</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%t\\n&quot;</span><span class="token punctuation">,</span> myBool<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u4E8E\u5B57\u7B26\u4E32\u7684\u8F6C\u4E49\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u5B57\u7B26\u4E32\u7684\u8F6C\u4E49\u7B26" aria-hidden="true">#</a> \u5173\u4E8E\u5B57\u7B26\u4E32\u7684\u8F6C\u4E49\u7B26</h3><ul><li><code>\\r</code>\u56DE\u8F66\u7B26\uFF08\u8DF3\u8F6C\u5230\u4E0B\u4E00\u884C\u884C\u9996\uFF09</li><li><code>\\n</code>\u6362\u884C\u7B26\uFF08\u76F4\u63A5\u8DF3\u8F6C\u5230\u4E0B\u4E00\u884C\u540C\u5217\u4F4D\u7F6E\uFF09</li><li><code>\\t</code>\u5236\u8868\u7B26</li><li><code>\\&#39;</code>\u5355\u5F15\u53F7</li><li><code>\\&quot;</code>\u53CC\u5F15\u53F7</li><li><code>\\\\</code>\u53CD\u659C\u6760</li></ul><p>\u548C Java \u4E4B\u7C7B\u7684\u662F\u4E00\u6837\u7684</p><h3 id="\u5B57\u7B26\u4E32\u7684\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7684\u4FEE\u6539" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u7684\u4FEE\u6539</h3><p>\u76F4\u63A5\u4FEE\u6539\u7684\u8BDD \u662F\u8FD9\u79CD\u753B\u98CE</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    str1 <span class="token operator">:=</span> <span class="token string">&quot;\u5154\u5B50&quot;</span>
    <span class="token comment">//\u8F6C\u6362\u6210char\u6570\u7EC4 \u8FD9\u91CC\u4E5F\u53EBrune</span>
    str2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span>
    <span class="token comment">//\u6307\u5B9A\u4F4D\u7F6E\u7684\u66FF\u6362</span>
    str2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;\u7334&#39;</span>
    <span class="token comment">//\u7136\u540E\u518D\u8F6C\u6362\u6210\u5B57\u7B26\u4E32</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136 \u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u6765\u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u957F\u5EA6</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u4E3A\uFF1A%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">strCount</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">strCount</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u4E8E-if-\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-if-\u5224\u65AD" aria-hidden="true">#</a> \u5173\u4E8E if \u5224\u65AD</h3><p>\u57FA\u672C\u8BED\u6CD5\u548C\u5176\u4ED6\u7684\u8BED\u8A00\u6CA1\u5565\u533A\u522B</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    age <span class="token operator">:=</span> <span class="token number">18</span>
    name <span class="token operator">:=</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span>

    <span class="token keyword">if</span> age <span class="token operator">&gt;=</span> <span class="token number">18</span> <span class="token operator">&amp;&amp;</span> name <span class="token operator">==</span> <span class="token string">&quot;\u674E\u56DB&quot;</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Say Hello &quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u5728 go \u4E2D\uFF0C\u53EF\u4EE5\u58F0\u660E\u53EA\u5728 if \u8BED\u53E5\u5185\u8D77\u4F5C\u7528\u7684\u53D8\u91CF</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> age <span class="token operator">:=</span> <span class="token number">19</span><span class="token punctuation">;</span> age <span class="token operator">&gt;</span> <span class="token number">18</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5E74\u9F84\u5927\u4E8E18&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A age \u7684\u4F5C\u7528\u57DF\u4E3A\u8FD9\u4E2A if \u7684\u8BED\u53E5\u5185\uFF08\u5305\u62EC\u540E\u7EED\u7684 else \u4E4B\u7C7B \u7684\uFF09</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> age <span class="token operator">:=</span> <span class="token function">strCount</span><span class="token punctuation">(</span><span class="token string">&quot;adsadsadsadsada&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> age <span class="token operator">&gt;</span> <span class="token number">18</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u957F\u5EA6\u5927\u4E8E18&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> age <span class="token operator">&lt;</span> <span class="token number">18</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u957F\u5EA6\u5C0F\u4E8E18&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">strCount</span><span class="token punctuation">(</span>str <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u4E8E-for-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-for-\u5FAA\u73AF" aria-hidden="true">#</a> \u5173\u4E8E for \u5FAA\u73AF</h3><p>\u57FA\u672C\u7684\u4F7F\u7528\u548C\u5176\u4ED6\u8BED\u8A00\u6CA1\u5565\u533A\u522B</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello &quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u589E\u5F3A for \u7684\u8BDD\uFF0C\u8BED\u6CD5\u662F\u8FD9\u6837\u7684</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    str <span class="token operator">:=</span> <span class="token string">&quot;Hello World&quot;</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F \u8FD9\u76F8\u5F53\u4E8E\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u83B7\u53D6\u5230\u7684 i \u672C\u8D28\u8FD8\u662F\u4E00\u4E2A 0 \u5F00\u59CB\u7684\u6570\u503C</p><p>\u5982\u679C\u60F3\u8981\u901A\u8FC7\u5176\u6765\u83B7\u53D6 str \u7684\u5185\u5BB9\u7684\u8BDD \u53EF\u4EE5\u8FD9\u6837</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    str <span class="token operator">:=</span> <span class="token string">&quot;Hello World&quot;</span>

    strArray <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">rune</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> str <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>strArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u8981\u65E0\u9650\u5FAA\u73AF\u7684\u8BDD\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">for</span><span class="token punctuation">{</span>
    \u5FAA\u73AF\u4F53\u8BED\u53E5
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u4E8E-switch" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-switch" aria-hidden="true">#</a> \u5173\u4E8E switch</h3><p>\u4F7F\u7528\u8D77\u6765\u548C\u5176\u4ED6\u8BED\u8A00\u6CA1\u6709\u533A\u522B\uFF08\u4E0D\u8FC7\u4E0D\u7528\u5199 break\uFF09</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    n <span class="token operator">:=</span> <span class="token number">5</span>
    <span class="token keyword">switch</span> n <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;two&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;three&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;four&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;unknown&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0C\u5728 Switch \u4E2D\u53EF\u4EE5\u8DDF\u5F88\u591A\u503C\uFF0C\u4F8B\u5982<code>case 1,3,5,7,9</code>\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u6F14\u793A\u4E86</p><p>\u4E5F\u53EF\u4EE5\u8DDF\u5224\u65AD\uFF0C\u4F8B\u5982</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    n <span class="token operator">:=</span> <span class="token number">5</span>
    <span class="token keyword">switch</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> n <span class="token operator">&gt;</span> <span class="token number">30</span><span class="token punctuation">:</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;n is greater than 30&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> n <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">:</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;n is greater than 20&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> n <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;n is greater than 10&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;n is less than 10&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="goto-\u8DF3\u5230\u6307\u5B9A\u7684\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#goto-\u8DF3\u5230\u6307\u5B9A\u7684\u4F4D\u7F6E" aria-hidden="true">#</a> GOTO \u8DF3\u5230\u6307\u5B9A\u7684\u4F4D\u7F6E</h3><p>\u6211\u4EEC\u90FD\u77E5\u9053<code>break</code>\u662F\u8C03\u51FA\u5FAA\u73AF\uFF0C\u7136\u540E<code>continue</code>\u662F\u8FDB\u5165\u4E0B\u4E00\u8F6E\u5FAA\u73AF</p><p>\u5982\u679C\u60F3\u5728 go \u8BED\u8A00\u7684\u5FAA\u73AF\u7684\u5FAA\u73AF\u4E2D\u8C03\u51FA\u6240\u6709\u5FAA\u73AF\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528 GOTO</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">1000</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> i<span class="token operator">*</span>j <span class="token operator">==</span> <span class="token number">1000</span> <span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span>i <span class="token operator">*</span> j<span class="token punctuation">)</span>
                <span class="token keyword">goto</span> end
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
end<span class="token punctuation">:</span> <span class="token comment">// \u8FD9\u91CC\u662Flabel\u6807\u7B7E \u561B\u53CD\u6B63\u901A\u5E38\u662F\u8DDFgoto\u4E00\u8D77\u4F7F\u7528\u7684</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="golang-\u4E2D\u7684\u5B57\u7B26\u4E32\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#golang-\u4E2D\u7684\u5B57\u7B26\u4E32\u5BF9\u6BD4" aria-hidden="true">#</a> GoLang \u4E2D\u7684\u5B57\u7B26\u4E32\u5BF9\u6BD4</h3><p>\u8FD9\u4E2A\u653E\u5FC3\uFF0C\u76F4\u63A5<code>==</code>\u5BF9\u6BD4\u5C31\u884C\u4E86\uFF0C\u662F\u76F4\u63A5\u5BF9\u6BD4\u503C\u7684\uFF0C\u548C Java \u4E0D\u4E00\u6837\u7684</p><h2 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h2><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;strings&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u58F0\u660E\uFF0C\u4E0D\u6307\u5B9A\u503C \u6CE8\u610F \u5982\u679C\u58F0\u660E\u7684\u662Fint\u7C7B\u578B\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u503C\u4E3A0</span>
    <span class="token comment">// \u5982\u679C\u58F0\u660E\u7684\u662Fstring\u7C7B\u578B\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u5B57\u7B26\u4E32</span>
    <span class="token comment">// \u5982\u679C\u58F0\u660E\u7684\u662Fbool\u7C7B\u578B\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u503C\u4E3Afalse</span>
    <span class="token keyword">var</span> arr <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">string</span>
    arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;hello&quot;</span>
    <span class="token function">println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// \u58F0\u660E\uFF0C\u6307\u5B9A\u503C</span>
    arr2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>arr2<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// \u58F0\u660E\uFF0C\u6839\u636E\u521D\u59CB\u5316\u503C\u81EA\u52A8\u786E\u5B9A\u957F\u5EA6</span>
    arr3 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>arr3<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u7EC4\u957F\u5EA6\uFF1A&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>arr3<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// \u58F0\u660E\uFF0C\u6839\u636E\u7D22\u5F15\u6765\u521D\u59CB\u5316\u6307\u5B9A\u4F4D\u7F6E\u7684\u503C</span>
    arr4 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">:</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">}</span>
    <span class="token function">println</span><span class="token punctuation">(</span>strings<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span>arr4<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6570\u7EC4\u7684\u904D\u5386</span>

    <span class="token comment">// \u5148\u521B\u5EFA\u4E00\u4E2A\u6570\u7EC4\uFF0C\u957F\u5EA6\u4E3A10 string</span>
    arr5 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;h&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;j&quot;</span><span class="token punctuation">}</span>

    <span class="token comment">// \u4F7F\u7528\u666E\u901Afor\u5FAA\u73AF\u904D\u5386</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr5<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>arr5<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u4F7F\u7528range\u904D\u5386 i\u5C31\u662F\u7D22\u5F15\uFF0Cv\u5C31\u662F\u503C</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> arr5 <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> v<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4</span>
    arr6 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> arr6 <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v2 <span class="token operator">:=</span> <span class="token keyword">range</span> v <span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247" aria-hidden="true">#</a> \u5207\u7247</h3><p>emm \u5C31\u662F\u4E0D\u7ED9\u5B9A\u521D\u59CB\u957F\u5EA6\u7684\u6570\u7EC4</p><p>\u6CE8\u610F \u5982\u679C\u8BF4\u901A\u8FC7\u8D4B\u503C\u7684\u65B9\u5F0F\u4F20\u9012\u503C</p><p>\u4F8B\u5982\u8BF4\u901A\u8FC7\u62F7\u8D1D\u6570\u7EC4\u7684\u65B9\u5F0F\uFF0C\u5219\u662F\u6307\u9488\u4F20\u9012\uFF0C\u4E5F\u5C31\u662F\u4F20\u8FC7\u53BB\u540E\uFF0C\u4FEE\u6539\u539F\u6765\u6570\u7EC4\u7684\u6307\u5B9A\u4F4D\u7F6E\u7684\u503C\uFF0C\u5BF9\u5E94\u7684\uFF0C\u5207\u7247\u5185\u7684\u503C\u4E5F\u4F1A\u88AB\u4FEE\u6539</p><p>\u5B83\u81EA\u5DF1\u672C\u8EAB\u6CA1\u6709\u4EFB\u4F55\u503C\uFF0C\u5168\u90FD\u662F\u5F15\u7528\u5176\u4ED6\u5730\u65B9\u7684</p><p>\u90A3\u4E2A append \u4E4B\u540E\u4F1A\u8BF4\u660E</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> arrt <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

    <span class="token comment">// \u6DFB\u52A0\u65B9\u5F0F1 \u652F\u6301\u6269\u5BB9\u7684</span>
    arrt <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>arrt<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    arrt <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>arrt<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
    arrt <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>arrt<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    arrt <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>arrt<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arrt<span class="token punctuation">)</span>

    <span class="token comment">// \u6DFB\u52A0\u65B9\u5F0F2</span>
    <span class="token keyword">var</span> arrt2 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span>
    arrt2 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>arrt2<span class="token punctuation">,</span> arr<span class="token operator">...</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arrt2<span class="token punctuation">)</span>

    <span class="token comment">// \u6DFB\u52A0\u65B9\u5F0F3</span>
    <span class="token keyword">var</span> attr3 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>
    <span class="token comment">// \u5305\u5DE6\u4E0D\u5305\u53F3</span>
    attr3 <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token comment">// \u6CE8\u610F \u8FD9\u91CC\u90FD\u662F\u6307\u9488\u4F20\u9012</span>
    arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>attr3<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5207\u7247\u7684\u672C\u8D28" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247\u7684\u672C\u8D28" aria-hidden="true">#</a> \u5207\u7247\u7684\u672C\u8D28</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u5207\u7247\uFF0C\u7C7B\u578B\u662Fint\uFF0C\u957F\u5EA6\u662F5\uFF0C\u5BB9\u91CF\u662F10</span>
    <span class="token comment">// \u957F\u5EA6\u5C31\u76F8\u5F53\u4E8E\u521D\u59CB\u7684\u6570\u7EC4\u7684\u957F\u5EA6</span>
    <span class="token comment">// \u5BB9\u91CF\u5C31\u76F8\u5F53\u4E8E\u6700\u5927\u7684\u6570\u91CF</span>
    s1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s1=%v, len(s1)=%d, cap(s1)=%d\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// s1=[0 0 0 0 0], len(s1)=5, cap(s1)=10</span>
    <span class="token comment">// \u6DFB\u52A011\u4E2A\u5143\u7D20</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">11</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
    <span class="token comment">// append\uFF1A\u7ED9\u6307\u5B9A\u7684\u5207\u7247\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20</span>
    s1 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;s1=%v, len(s1)=%d, cap(s1)=%d\\n&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// s1=[0 0 0 0 0 0 1 2 3 4 5 6 7 8 9 10], len(s1)=16, cap(s1)=20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u561B\uFF0C\u8FD9\u4E1C\u897F\uFF0C\u8D8A\u7528\u8D8A\u50CF Java \u7684 ArrayList\uFF0C\u53EF\u4EE5\u770B\u5230\uFF0C\u5185\u5BB9\u662F\u52A8\u6001\u6DFB\u52A0\u7684....\uFF0C\u5E76\u4E14\u8FD8\u4F1A*2 \u7684\u6269\u5BB9</p><p>\u8C8C\u4F3C\u662F Java \u4E2D LinkedList \u7684\u6269\u5BB9\u673A\u5236</p><p>\u5C31\u662F\u4E00\u4E2A\u6846\uFF0C\u6846\u67F1\u4E86\u4E00\u5757\u8FDE\u7EED\u7684\u5185\u5B58</p><p>\u6240\u4EE5\uFF0C\u8981\u5224\u65AD\u4E00\u4E2A\u5207\u7247\u662F\u5426\u7ED1\u5B9A\u4E86\u6570\u7EC4\uFF0C\u9700\u8981<code>arr==nil</code>,\u8981\u5224\u65AD\u4E00\u4E2A\u5207\u7247\u662F\u5426\u4E3A\u7A7A\uFF0C\u5219\u9700\u8981\u7528<code>len(arr)==0</code></p><blockquote><p>PS:<code>nil</code>\u503C\u5207\u7247\u7684\u957F\u5EA6\u548C\u5BB9\u91CF\u90FD\u662F 0</p></blockquote><p>\u4E24\u4E2A\u5207\u7247\u4E4B\u95F4\u662F\u4E0D\u80FD\u901A\u8FC7<code>==</code>\u6765\u5224\u65AD\u662F\u5426\u76F8\u7B49\u7684</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> s0 <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

    <span class="token comment">// true</span>
    <span class="token function">println</span><span class="token punctuation">(</span>s0 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>

    s1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment">// false</span>
    <span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5207\u7247\u7684-append-\u548C-copy" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247\u7684-append-\u548C-copy" aria-hidden="true">#</a> \u5207\u7247\u7684 append \u548C copy</h3><p>\u5C31\u662F\u7ED9\u5207\u7247\u5C3E\u90E8\u8FFD\u52A0\u4E00\u4E2A\u5143\u7D20\uFF0C\u8FBE\u5230\u4E0A\u9650\u7684\u65F6\u5019\u4F1A\u89E6\u53D1\u52A8\u6001\u6269\u5BB9\u673A\u5236</p><blockquote><p>PS \u52A8\u6001\u6269\u5BB9\u673A\u5236\uFF1A\u5F00\u59CB*2\uFF0C\u5982\u679C\u8001\u7684\u5BB9\u91CF\u5927\u4E8E\u7B49\u4E8E 1024 \u65F6\uFF0C\u5219\u662F 1/4 \u7684\u589E\u957F \u4E5F\u5C31\u662F a + (0.25xa)</p></blockquote><p>\u4F7F\u7528\u7684\u65F6\u5019\u5FC5\u987B\u8C03\u7528\u539F\u6765\u7684\u5207\u7247\u63A5\u6536\u8FD4\u56DE\u503C(\u76F8\u5F53\u4E8E\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u8DDF Java \u4E2D ArrayList \u7684\u5E95\u5C42\u6269\u5BB9\u673A\u5236\u4F3C\u7684\uFF0C\u4E00\u4E2A\u6570\u7EC4\u7684\u957F\u5EA6\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u8981\u60F3\u589E\u52A0\u53EA\u80FD\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\u5E76\u66FF\u6362\u8001\u7684\u6570\u7EC4)</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    s1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>

    s1 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span>

    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\uFF0CAppend \u8FD8\u53EF\u4EE5\u5220\u9664\u6307\u5B9A\u7684\u5143\u7D20\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u591A\u505A\u8BF4\u660E\u4E86\uFF08\u7528\u5230\u4E86\u518D\u53BB\u767E\u5EA6\uFF09</p><p>\u81F3\u4E8E Copy \u561B\uFF0C\u5C31\u975E\u5E38\u7B80\u5355\u4E86\uFF0C\u5C31\u662F\u5C06\u4E00\u4E2A\u8001\u7684\u5207\u7247\u7684\u5185\u5BB9\u590D\u5236\u7ED9\u4E00\u4E2A\u65B0\u7684\u5207\u7247</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    arr1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">}</span>
    arr2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token comment">// \u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A\u63A5\u6536\u65B9</span>
    <span class="token comment">// \u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1A\u6E90</span>
    <span class="token function">copy</span><span class="token punctuation">(</span>arr2<span class="token punctuation">,</span> arr1<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F \u4E0A\u9762\u7684\u8FD0\u884C\u7ED3\u679C\u4E3A\uFF1A<code>[1 2 3 4 5]</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u63A5\u6536\u65B9\u6CA1\u6CD5\u63A5\u6536\u5927\u4E8E\u81EA\u5DF1\u957F\u5EA6\u7684\u5207\u7247 \u8D85\u8FC7\u81EA\u5DF1\u957F\u5EA6\u7684\u5C06\u4F1A\u88AB\u7701\u7565</p><h2 id="\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488" aria-hidden="true">#</a> \u6307\u9488</h2><p>\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u8FD9\u73A9\u610F\u88AB\u5C01\u88C5\u7684\u8FD8\u662F\u6BD4\u8F83\u7B80\u5355\u7684</p><p>Go \u8BED\u8A00\u4E2D\u4E0D\u5B58\u5728\u6307\u9488\u7684\u64CD\u4F5C\uFF0C\u53EA\u9700\u8981\u8BB0\u4F4F\u4E24\u4E2A\u7B26\u53F7\u5373\u53EF</p><ol><li><code>&amp;</code>\u83B7\u53D6\u6307\u9488\u7684\u5730\u5740</li><li><code>*</code>\u6839\u636E\u5730\u5740\u53D6\u503C</li></ol><p>\u5BF9 \u6CA1\u9519 \u5C31\u8FD9\u4E24\u4E2A\uFF0C\u63A5\u4E0B\u6765\u6D4B\u8BD5\u4E0B</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    n <span class="token operator">:=</span> <span class="token number">18</span>
    <span class="token comment">// \u6253\u5370\u5185\u5B58\u5730\u5740</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>n<span class="token punctuation">)</span>

    p <span class="token operator">:=</span> <span class="token operator">&amp;</span>n
    <span class="token comment">// \u7C7B\u578B\u662F\u4E00\u4E2A\u6307\u9488\u7C7B\u578B*int</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u7C7B\u578B\u4E3A%T\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

    <span class="token comment">// \u6253\u5370\u6307\u9488\u7684\u503C(\u6839\u636E\u5730\u5740\u53D6\u503C)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u6307\u9488\u7684\u503C\u4E3A%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u6307\u9488\u548C\u6307\u9488\u503C\u7684\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6307\u9488\u548C\u6307\u9488\u503C\u7684\u4FEE\u6539" aria-hidden="true">#</a> \u521B\u5EFA\u6307\u9488\u548C\u6307\u9488\u503C\u7684\u4FEE\u6539</h3><p>\u975E\u5E38\u7B80\u5355</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> a <span class="token operator">*</span><span class="token builtin">int</span> <span class="token operator">=</span> <span class="token function">new</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
    <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token number">10</span>
    <span class="token comment">// \u5206\u522B\u6253\u5370\u5730\u5740\u548C\u503C</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5730\u5740:&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u503C:&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53CD\u6B63\u53EA\u8981\u8BB0\u4F4F\u4E24\u70B9\uFF0C&amp;\u662F\u64CD\u7EB5\u5730\u5740\uFF0C*\u662F\u64CD\u7EB5(\u83B7\u53D6)\u5B9E\u9645\u7684\u503C</p><h3 id="\u5173\u4E8E-make-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E-make-\u65B9\u6CD5" aria-hidden="true">#</a> \u5173\u4E8E make \u65B9\u6CD5</h3><p><code>make</code>\u4E5F\u662F\u7528\u4E8E\u5185\u5B58\u5206\u914D\u7684\uFF0C\u533A\u522B\u4E8E<code>new</code>\uFF0C\u5B83\u53EA\u9002\u7528\u4E8E<code>slice</code>\u3001<code>map</code>\u3001<code>channel</code>\u7684\u5185\u5B58\u521B\u5EFA\uFF0C\u800C\u4E14\u5B83\u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u5C31\u662F\u8FD9\u4E09\u4E2A\u7C7B\u578B\u7684\u672C\u8EAB\uFF0C\u56E0\u4E3A\u8FD9\u4E09\u79CD\u7C7B\u578B\u672C\u8EAB\u5C31\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u6240\u4EE5\u5C31\u6CA1\u6709\u5FC5\u8981\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6307\u9488\u4E86\uFF0Cmake \u51FD\u6570\u7684\u51FD\u6570\u7B7E\u540D\u5982\u4E0B</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">make</span><span class="token punctuation">(</span>t Type<span class="token punctuation">,</span>size <span class="token operator">...</span>IntegerType<span class="token punctuation">)</span> Type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>make \u51FD\u6570\u662F\u65E0\u53EF\u66FF\u4EE3\u7684\uFF0C\u5728\u6211\u4EEC\u4F7F\u7528 slice\u3001map \u4EE5\u53CA channel \u7684\u65F6\u5019\uFF0C\u90FD\u9700\u8981\u4F7F\u7528 make \u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u7136\u540E\u624D\u53EF\u4EE5\u8FDB\u884C\u5BF9\u4ED6\u4EEC\u7684\u64CD\u4F5C\uFF0C\u5173\u4E8E<code>channel</code>\u4F1A\u5728\u540E\u9762\u8BF4\u660E</p><p>\u603B\u7ED3\u5C31\u662F\u5982\u4E0B\u51E0\u70B9\uFF1A</p><ol><li>make \u548C new \u90FD\u662F\u7528\u6765\u7533\u8BF7\u5185\u5B58\u7684</li><li>new \u5F88\u5C11\u7528\uFF0C\u4E00\u822C\u90FD\u662F\u6765\u7ED9\u57FA\u672C\u7684\u6570\u636E\u7C7B\u578B\u7533\u8BF7\u5185\u5B58\uFF0C\u4F8B\u5982 string/int \u7B49</li><li>make \u662F\u7528\u6765\u7ED9<code>slice</code>\u3001<code>map</code>\u3001<code>channel</code>\u7533\u8BF7\u5185\u5B58\u7684\uFF0Cmake \u51FD\u6570\u8FD4\u56DE\u5BF9\u5E94\u7684\u8FD9\u4E09\u4E2A\u7C7B\u578B\u672C\u8EAB</li></ol><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2><p>emm \u8FD9\u4E1C\u897F\u5C31\u76F8\u5F53\u4E8E Java \u7684 HashMap \u6216\u8005\u8BF4 JavaScript \u7684 Object,\u7528\u6CD5\u5C42\u9762\u66F4\u50CF\u662F JavaScript</p><p>\u5E95\u5C42\u5B9E\u73B0\u662F hash\uFF0C\u4E5F\u5C31\u662F\u65E0\u5E8F\u7684 key-value \u7ED3\u6784\uFF0C\u5E76\u4E14 key \u662F\u4E0D\u91CD\u590D\u7684</p><p>\u5728 go \u8BED\u8A00\u4E2D\u4F7F\u7528\u5B83\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u5F97\u5148\u5B9A\u4E49\u624D\u80FD\u4F7F\u7528\uFF0C\u5B9A\u4E49\u7684\u8BED\u6CD5\u5982\u4E0B</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">map</span><span class="token punctuation">[</span>keyType<span class="token punctuation">]</span>valueType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>keyType</code>:\u952E\u7684\u7C7B\u578B</li><li><code>valueType</code>:\u503C\u7684\u7C7B\u578B</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
 <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> myMap <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span>

    <span class="token comment">// \u5728\u4F7F\u7528\u4E4B\u524D\u5FC5\u987B\u4F7F\u7528make\u6765\u521B\u5EFA \u8FD9\u91CC\u548C\u4E0A\u9762\u7684\u53EF\u4EE5\u5408\u5E76\u6210\u4E00\u53E5\u8BDD</span>
    <span class="token comment">// \u4E0A\u9762\u53EA\u662F\u58F0\u660E\uFF0C\u5E76\u6CA1\u6709\u521D\u59CB\u5316\uFF0C\u5C31\u50CF\u662FJava\u4E2D public HashMap map;\u4E00\u6837</span>
    myMap <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span>

    <span class="token comment">// \u8D4B\u503C \u56FA\u5B9A\u65B9\u6CD5</span>
    myMap<span class="token punctuation">[</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;value1&quot;</span>
    myMap<span class="token punctuation">[</span><span class="token string">&quot;key2&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;value2&quot;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;myMap: %v\\n&quot;</span><span class="token punctuation">,</span> myMap<span class="token punctuation">)</span>

    <span class="token comment">// \u53D6\u6307\u5B9A\u503C</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;myMap[key1]: %v\\n&quot;</span><span class="token punctuation">,</span> myMap<span class="token punctuation">[</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6539\u53D8\u503C</span>
    myMap<span class="token punctuation">[</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;value1-new&quot;</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;myMap[key1]: %v\\n&quot;</span><span class="token punctuation">,</span> myMap<span class="token punctuation">[</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">// \u5220\u9664\u6307\u5B9A\u503C \u5982\u679C\u5220\u9664\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u5565\u4E5F\u4E0D\u4F1A\u53D1\u751F</span>
    <span class="token function">delete</span><span class="token punctuation">(</span>myMap<span class="token punctuation">,</span> <span class="token string">&quot;key1&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;myMap: %v\\n&quot;</span><span class="token punctuation">,</span> myMap<span class="token punctuation">)</span>

    <span class="token comment">// \u5224\u65AD\u662F\u5426\u5B58\u5728\u6307\u5B9A\u503C</span>
    value<span class="token punctuation">,</span> ok <span class="token operator">:=</span>  <span class="token punctuation">[</span><span class="token string">&quot;key1&quot;</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> ok <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;myMap[key1]: %v\\n&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;myMap[key1] is not exist\\n&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u6253\u5370map\u7684\u957F\u5EA6</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;myMap length: %v\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>myMap<span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6DFB\u52A0\u4E00\u4E9B\u5185\u5BB9\uFF0C\u5E76\u904D\u5386\u6253\u5370</span>
    myMap<span class="token punctuation">[</span><span class="token string">&quot;key3&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;value3&quot;</span>
    myMap<span class="token punctuation">[</span><span class="token string">&quot;key4&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;value4&quot;</span>
    <span class="token keyword">for</span> key<span class="token punctuation">,</span> value <span class="token operator">:=</span> <span class="token keyword">range</span> myMap <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;key: %v, value: %v\\n&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><p>\u548C\u5176\u4ED6\u8BED\u8A00\u4E0D\u540C\u7684\u662F\uFF0C\u5982\u679C\u6709\u8FD4\u56DE\u503C\u7684\u60C5\u51B5\u4E0B</p><p>\u53EF\u4EE5\u7ED9\u8FD4\u56DE\u503C\u6307\u5B9A\u540D\u5B57</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> <span class="token punctuation">(</span>
        a <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1</span>
        b <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token function">add3</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token comment">// \u547D\u540D\u8FD4\u56DE\u503C\uFF0Creturn\u7684\u65F6\u5019\u53EF\u4EE5\u7701\u7565\u540E\u9762\u7684\u5185\u5BB9\uFF08\u524D\u63D0\u662F\u8FD4\u56DE\u503C\u7684\u5185\u5BB9\u8981\u8D4B\u503C\u8FC7\uFF09</span>
<span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ret <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ret <span class="token operator">=</span> x <span class="token operator">+</span> y
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4E0B\u9762\u8FD9\u7B49\u4EF7\u4E8E\u4E0A\u9762</span>
<span class="token keyword">func</span> <span class="token function">add2</span><span class="token punctuation">(</span>x <span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token comment">// \u4E5F\u4E5F\u53EF\u4EE5\u7528\u6307\u9488\u7684\u65B9\u5F0F</span>
<span class="token keyword">func</span> <span class="token function">add3</span><span class="token punctuation">(</span>x <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">,</span> y <span class="token operator">*</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">*</span>x <span class="token operator">+</span> <span class="token operator">*</span>y
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u8981\u4F7F\u7528\u53EF\u53D8\u53C2\u6570\uFF0C\u5219\u53EF\u4EE5\u8FD9\u6837(\u672C\u8D28\u4E5F\u662F\u4F20\u6570\u7EC4\u7F62\u4E86)</p><p>\u4E0B\u65B9\u6848\u4F8B\u4E2D\uFF0Cy \u7684\u7C7B\u578B\u662F<strong>\u5207\u7247\u7C7B\u578B</strong></p><p>\u53EF\u4EE5\u4F20\u4E00\u4E2A\u3001\u591A\u4E2A\u3001\u6216\u8005\u4E0D\u4F20\uFF0C\u4F46\u662F\u4E00\u5B9A\u8981\u653E\u5728\u6700\u540E</p><p>\u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u548C Java \u4E00\u6837\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u53C2\u6570\u8FD9\u4E2A\u6982\u5FF5</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token function">testArr</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">testArr</span><span class="token punctuation">(</span>x <span class="token builtin">string</span><span class="token punctuation">,</span> y <span class="token operator">...</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token keyword">range</span> y <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51FD\u6570\u4E2D\u7684-defer" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4E2D\u7684-defer" aria-hidden="true">#</a> \u51FD\u6570\u4E2D\u7684 defer</h3><p>\u8FD9\u4E2A\u4E1C\u897F\u7528\u6CD5\u6709\u70B9\u7279\u6B8A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">deferDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">deferDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Start&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">defer</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FD9\u8BDD\u5C06\u5728\u6700\u540E\u6267\u884C&quot;</span><span class="token punctuation">)</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D<code>defer println(&quot;\u8FD9\u8BDD\u5C06\u5728\u6700\u540E\u6267\u884C&quot;)</code>\u8FD9\u884C\u4EE3\u7801\u5C06\u4F1A\u5728 end \u4E4B\u540E\u6267\u884C</p><p>\u4F7F\u7528\u4E86<code>defer</code>\u6807\u6CE8\u7684\u8BED\u53E5 \u5C06\u4F1A\u5728\u6574\u4E2A\u65B9\u6CD5\u6267\u884C\u7ED3\u675F\u524D\u6267\u884C\uFF0C\u4E00\u822C\u8FD9\u4E2A\u4E1C\u897F\u662F\u7528\u4E8E<strong>\u91CA\u653E IO \u8D44\u6E90</strong>\u4E4B\u7C7B\u7684</p><p>\u4E5F\u5C31\u662F\u7701\u7684\u81EA\u5DF1\u5FD8\u4E86\u90A3\u5565\u91CA\u653E\u8D44\u6E90</p><p>\u5F53\u7136\uFF0C\u8FD9\u4E2A\u4E1C\u897F\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u7684\u8BDD\uFF0C\u5219\u6309\u7167<code>defer</code></p><p>\u4F7F\u7528\u4E86<code>defer</code>\u6807\u6CE8\u7684\u8BED\u53E5 \u5C06\u4F1A\u5728\u6574\u4E2A\u65B9\u6CD5\u6267\u884C\u7ED3\u675F\u524D\u6267\u884C\uFF0C\u4E00\u822C\u8FD9\u4E2A\u4E1C\u897F\u662F\u7528\u4E8E<strong>\u91CA\u653E IO \u8D44\u6E90</strong>\u4E4B\u7C7B\u7684</p><p>\u4E5F\u5C31\u662F\u7701\u7684\u81EA\u5DF1\u5FD8\u4E86\u90A3\u5565\u91CA\u653E\u8D44\u6E90</p><p>\u5F53\u7136\uFF0C\u8FD9\u4E2A\u4E1C\u897F\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A\uFF0C\u5982\u679C\u6709\u591A\u4E2A\u7684\u8BDD\uFF0C\u5219\u6309\u7167<code>defer</code>\u7684\u987A\u5E8F\u9006\u5E8F\u6267\u884C\uFF08\u4F18\u5148\u6267\u884C\u6700\u540E\u4F7F\u7528 defer \u5B9A\u4E49\u7684\uFF09</p><p>\u989D\u5916\u8BF4\u660E\u4E00\u5634\uFF1A\u5982\u679C\u8BF4\u52A0\u4E86 defer\uFF0C\u5219\u6574\u4E2A\u51FD\u6570\u7684\u6267\u884C\u5C06\u4E0D\u662F\u539F\u5B50\u6027\u7684</p><p>\u5982\u679C\u8BF4\u6CA1\u6709\u52A0 defer\uFF0C\u4F8B\u5982<code>return x</code></p><ul><li>\u8FD4\u56DE\u503C=x</li><li>return \u6307\u4EE4</li></ul><p>\u5982\u679C\u6709\u4E86 defer</p><ul><li>\u8FD4\u56DE\u503C=x</li><li>\u8FD0\u884C defer</li><li>return \u6307\u4EE4</li></ul><h3 id="\u533F\u540D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a> \u533F\u540D\u51FD\u6570</h3><p>\u8FD9\u4E2A\u561B\uFF0C\u5C31\u548C JavaScript \u4E2D\u7684\u4E00\u6837</p><p>\u7528\u6CD5\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token keyword">func</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u7C7B\u578B\u548C\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u7C7B\u578B\u548C\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u7C7B\u578B\u548C\u8FD4\u56DE\u503C</h3><p>\u89C1\u540D\u77E5\u610F\uFF0C\u90A3\u4E48\u8BE5\u5982\u4F55\u4F7F\u7528\u5462\uFF1F</p><p>\u9996\u5148\u6765\u770B\u770B\u4E00\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">100</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    a <span class="token operator">:=</span> f1
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    b <span class="token operator">:=</span> f2
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T\\n&quot;</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func()
func() int
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\u8BF4\u6211\u4EEC\u5C06\u5B83\u505A\u5F53\u6210\u4E00\u4E2A\u53C2\u6570\u4F7F\u7528\u53EA\u9700\u8981</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">myFunction</span><span class="token punctuation">(</span>x <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ret <span class="token operator">:=</span> <span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token number">10</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">myFunction</span><span class="token punctuation">(</span>getNumber<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6210\u4E00\u4E2A\u8FD4\u56DE\u503C\u53EA\u9700\u8981</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>

	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">10</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	x <span class="token operator">:=</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">x</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a> \u5F02\u5E38</h2><p>\u8FD9\u6709\u53EF\u80FD\u662F Go \u8BED\u8A00\u4E2D\u6700\u50BB*\u7684\u5730\u65B9\uFF0C\u4E4B\u540E\u5199\u4EE3\u7801\u6709\u6982\u7387\u6EE1\u5C4F\u5E55\u7684<code>if(err!=null)</code>\u4E4B\u7C7B\u7684\u8BED\u53E5\u51FA\u73B0\uFF0C\u5BF9\uFF0C\u90FD\u662F\u56E0\u4E3A\u5F02\u5E38\u6355\u83B7\u673A\u5236\u9020\u6210\u7684...</p><h3 id="\u4E0D\u63A8\u8350\u4F7F\u7528\u7684\u5F02\u5E38\u6355\u83B7\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u63A8\u8350\u4F7F\u7528\u7684\u5F02\u5E38\u6355\u83B7\u65B9\u5F0F" aria-hidden="true">#</a> \u4E0D\u63A8\u8350\u4F7F\u7528\u7684\u5F02\u5E38\u6355\u83B7\u65B9\u5F0F</h3><p>\u4E0D\u540C\u4E8E\u5176\u4ED6\u8BED\u8A00\u7684<code>try...catch</code>\uFF0C\u5728 go \u4E2D\uFF0C\u5F02\u5E38\u6709\u4E24\u4E2A\u5B9A\u4E49</p><ul><li>\u629B\u51FA\u5F02\u5E38\uFF1A<code>panic</code></li><li>\u8BD5\u56FE\u6355\u83B7\u5F02\u5E38\uFF1A<code>recover</code></li></ul><p>\u5148\u770B\u770B\u600E\u4E48\u629B\u51FA\u4E00\u4E2A\u5F02\u5E38</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;AAAAAAAA&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FA\u73B0\u4E86\u4E25\u91CD\u7684\u9519\u8BEF&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;BBBB&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;CCCCC&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">funcC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7A0B\u5E8F\u6267\u884C\u5230 funcB \u7684\u65F6\u5019\uFF0Cpanic \u5C06\u4F1A\u629B\u51FA\u5F02\u5E38\uFF0C\u5E76\u4E14\u8BA9\u8FD9\u4E2A\u7EBF\u7A0B\u5269\u4F59\u7684\u4EE3\u7801\u505C\u6B62\u8FD0\u884C\u5E76\u7ED3\u675F</p><p>PS\uFF1A\u5982\u679C\u5728\u6709 panic \u7684\u8BED\u53E5\u4E2D\u52A0\u5165\u4E86 <code>defer</code>\u4E4B\u7C7B\u58F0\u660E\u7684\u51FD\u6570\uFF0C\u5219\u5728 panic \u629B\u51FA\u4E4B\u524D\uFF0Cdefer \u4EE3\u7801\u7684\u5185\u5BB9\u5C06\u4F1A\u6267\u884C</p><p>\u5982\u679C\u60F3\u8981\u6355\u83B7\u8FD9\u4E2A\u5F02\u5E38\uFF0C\u5219\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;AAAAAAAA&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        err <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;\u51FA\u73B0\u4E86\u4E25\u91CD\u7684\u9519\u8BEF&quot;</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;BBBB&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">funcC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;CCCCC&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">funcA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">funcB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">funcC</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>AAAAAAAA
\u51FA\u73B0\u4E86\u4E25\u91CD\u7684\u9519\u8BEF
CCCCC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9......\u7528\u8D77\u6765\u662F\u771F\u7684\u6709\u70B9\u86CB\u75BC</p><p>\u6240\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u4E1C\u897F\u8BB0\u4F4F\u4E24\u70B9\uFF1A</p><ol><li><strong>recover()\u5FC5\u987B\u642D\u914D defer \u4F7F\u7528</strong></li><li>defer \u4E00\u5B9A\u8981\u5728<strong>\u53EF\u80FD\u4F1A\u4EA7\u751F</strong> panic \u7684\u4EE3\u7801\u4E4B\u524D\u5B9A\u4E49</li></ol><p>\u8FD9\u4E2A\u5DF2\u7ECF\u8FC7\u65F6\u4E86\uFF0C\u73B0\u5728\u4E0D\u63A8\u8350\u8FD9\u6837\u4F7F\u7528\uFF0C\u800C\u662F\u8FD9\u6837</p><h3 id="\u5B9A\u4E49\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5F02\u5E38" aria-hidden="true">#</a> \u5B9A\u4E49\u5F02\u5E38</h3><p>\u5728 Golang \u4E2D\u5229\u7528 error \u7C7B\u578B\u5B9E\u73B0\u4E86 error \u63A5\u53E3\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 errors.New \u6216\u8005 fmt.Errorf \u6765\u5FEB\u901F\u521B\u5EFA\u9519\u8BEF\u5B9E\u4F8B\u3002</p><p>\u4E3B\u8981\u5E94\u7528\u573A\u666F: \u5728 Go \u8BED\u8A00\u4E2D\uFF0C\u9519\u8BEF\u662F\u53EF\u4EE5\u9884\u671F\u7684\uFF0C\u5E76\u4E14\u4E0D\u662F\u975E\u5E38\u4E25\u91CD\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u7A0B\u5E8F\u7684\u8FD0\u884C\u3002\u5BF9\u4E8E\u8FD9\u7C7B\u95EE\u9898\u53EF\u4EE5\u7528\u8FD4\u56DE\u9519\u8BEF\u7ED9\u8C03\u7528\u8005\u7684\u65B9\u6CD5\uFF0C\u8BA9\u8C03\u7528\u8005\u81EA\u5DF1\u51B3\u5B9A\u5982\u4F55\u5904\u7406\uFF0C\u901A\u5E38\u91C7\u7528 error \u63A5\u53E3\u8FDB\u884C\u5B9E\u73B0\u3002</p><p>error \u63A5\u53E3\u5B9A\u4E49:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> <span class="token builtin">error</span> <span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Go \u8BED\u8A00\u7684\u6807\u51C6\u5E93\u4EE3\u7801\u5305 errors \u65B9\u6CD5\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u65B9\u5F0F1.\u5728errors\u5305\u4E2D\u7684New\u65B9\u6CD5\uFF08Go 1.13 \u7248\u672C\uFF09\u3002</span>
<span class="token keyword">package</span> errors
<span class="token comment">// go\u63D0\u4F9B\u4E86errorString\u7ED3\u6784\u4F53\uFF0C\u5176\u5219\u5B9E\u73B0\u4E86error\u63A5\u53E3</span>
<span class="token keyword">type</span> errorString <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  text <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>e <span class="token operator">*</span>errorString<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> e<span class="token punctuation">.</span>text
<span class="token punctuation">}</span>

<span class="token comment">// \u5728errors\u5305\u4E2D\uFF0C\u8FD8\u63D0\u4F9B\u4E86New\u51FD\u6570\uFF0C\u6765\u5B9E\u4F8B\u5316errorString\uFF0C\u5982\u4E0B\uFF1A</span>
<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span>text <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&amp;</span>errorString<span class="token punctuation">{</span>text<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u65B9\u5F0F2.\u53E6\u4E00\u4E2A\u53EF\u4EE5\u751F\u6210error\u7C7B\u578B\u503C\u7684\u65B9\u6CD5\u662F\u8C03\u7528fmt\u5305\u4E2D\u7684Errorf\u51FD\u6570(Go 1.13 \u7248\u672C\u4EE5\u540E)</span>
<span class="token keyword">package</span> fmt
<span class="token keyword">import</span> <span class="token string">&quot;errors&quot;</span>
<span class="token keyword">func</span> <span class="token function">Errorf</span><span class="token punctuation">(</span>format <span class="token builtin">string</span><span class="token punctuation">,</span> args <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token builtin">error</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>format<span class="token punctuation">,</span>args<span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91C7\u7528 errors \u5305\u4E2D\u88C5\u9970\u4E00\u4E2A\u9519\u8BEF;</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>errors<span class="token punctuation">.</span><span class="token function">Unwrap</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">)</span>	<span class="token comment">//\u901A\u8FC7 errors.Unwrap \u51FD\u6570\u5F97\u5230\u88AB\u5D4C\u5957\u7684 error\u3002</span>
errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> target <span class="token builtin">error</span><span class="token punctuation">)</span>	<span class="token comment">//\u7528\u6765\u5224\u65AD\u4E24\u4E2A error \u662F\u5426\u662F\u540C\u4E00\u4E2A</span>
errors<span class="token punctuation">.</span><span class="token function">As</span><span class="token punctuation">(</span>err <span class="token builtin">error</span><span class="token punctuation">,</span> target <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>	<span class="token comment">//error \u65AD\u8A00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u793A\u4F8B 1:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;errors&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u9519\u8BEF\u5904\u7406</span>
<span class="token comment">// 1.Error</span>
<span class="token keyword">func</span> <span class="token function">demo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.\u58F0\u660E\u5E76\u521D\u59CB\u5316\u4E3Aerror\u7C7B\u578B</span>
	<span class="token keyword">var</span> errNew <span class="token builtin">error</span> <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;# \u9519\u8BEF\u4FE1\u606F\u6765\u81EA errors.New \u65B9\u6CD5\u3002&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>errNew<span class="token punctuation">)</span>

	<span class="token comment">// 2.\u8C03\u7528\u6807\u51C6\u5E93\u4E2DErrorf\u65B9\u6CD5</span>
	errorfFun <span class="token operator">:=</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;- %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u9519\u8BEF\u4FE1\u606F\u6765\u81EA fmt.Errorf \u65B9\u6CD5\u3002&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>errorfFun<span class="token punctuation">)</span>

	<span class="token comment">// 3.\u5B9E\u9645\u6848\u4F8B</span>
	result<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b <span class="token builtin">float64</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>ret <span class="token builtin">float64</span><span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		err <span class="token operator">=</span> <span class="token boolean">nil</span>
		<span class="token keyword">if</span> b <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
			err <span class="token operator">=</span> errors<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token string">&quot;\u6B64\u5904\u5E42\u6307\u6570\u4E0D\u80FD\u4E3A0\u503C,\u5176\u7ED3\u679C\u90FD\u4E3A1&quot;</span><span class="token punctuation">)</span>
			ret <span class="token operator">=</span> <span class="token number">1</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			ret <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">Pow</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;# \u8F93\u51FA\u9519\u8BEF\u4FE1\u606F:&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;5 ^ 0 = %v&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;5 ^ 2 = %v&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">demo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9519\u8BEF\u4FE1\u606F\u6765\u81EA errors.New \u65B9\u6CD5\u3002
\u9519\u8BEF\u4FE1\u606F\u6765\u81EA fmt.Errorf \u65B9\u6CD5\u3002
\u8F93\u51FA\u9519\u8BEF\u4FE1\u606F: \u6B64\u5904\u5E42\u6307\u6570\u4E0D\u80FD\u4E3A 0 \u503C,\u5176\u7ED3\u679C\u90FD\u4E3A 1
5 ^ 0 = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u793A\u4F8B 2:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A DivideError \u7ED3\u6784 (\u503C\u5F97\u5B66\u4E60)</span>
<span class="token keyword">type</span> DivideError <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  dividee <span class="token builtin">int</span>
  divider <span class="token builtin">int</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5B9E\u73B0 \`error\` \u63A5\u53E3 (\u503C\u5F97\u5B66\u4E60)</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>de <span class="token operator">*</span>DivideError<span class="token punctuation">)</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  strFormat <span class="token operator">:=</span> <span class="token string">\`
  Cannot proceed, the divider is zero.
  dividee: %d
  divider: 0
\`</span>
  <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>strFormat<span class="token punctuation">,</span> de<span class="token punctuation">.</span>dividee<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49 \`int\` \u7C7B\u578B\u9664\u6CD5\u8FD0\u7B97\u7684\u51FD\u6570</span>
<span class="token keyword">func</span> <span class="token function">Divide</span><span class="token punctuation">(</span>varDividee <span class="token builtin">int</span><span class="token punctuation">,</span> varDivider <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>result <span class="token builtin">int</span><span class="token punctuation">,</span> errorMsg <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> varDivider <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
    dData <span class="token operator">:=</span> DivideError<span class="token punctuation">{</span>
            dividee<span class="token punctuation">:</span> varDividee<span class="token punctuation">,</span>
            divider<span class="token punctuation">:</span> varDivider<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    errorMsg <span class="token operator">=</span> dData<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> varDividee <span class="token operator">/</span> varDivider<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6B63\u5E38\u60C5\u51B5</span>
  <span class="token keyword">if</span> result<span class="token punctuation">,</span> errorMsg <span class="token operator">:=</span> <span class="token function">Divide</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> errorMsg <span class="token operator">==</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;100/10 = &quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5F53\u9664\u6570\u4E3A\u96F6\u7684\u65F6\u5019\u4F1A\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F</span>
  <span class="token keyword">if</span> <span class="token boolean">_</span><span class="token punctuation">,</span> errorMsg <span class="token operator">:=</span> <span class="token function">Divide</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> errorMsg <span class="token operator">!=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;errorMsg is: &quot;</span><span class="token punctuation">,</span> errorMsg<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>100/10 =  10
errorMsg is:
  Cannot proceed, the divider is zero.
  dividee: 100
  divider: 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u5E93-fmt" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5E93-fmt" aria-hidden="true">#</a> \u5E38\u7528\u5E93-fmt</h2><p>\u8FD9\u4E2A\u4E1C\u897F\u561B\uFF0C\u5C31\u662F\u62FF\u6765\u6253\u5370\u4E1C\u897F\u7684</p>`,240),x=n("\u8FD9\u91CC\u989D\u5916\u8BF4\u4E0B\u5BF9\u5E94\u7684\u8F6C\u4E49\u7B26\uFF0C\u76F8\u5E94\u7684\u4E1C\u897F\u5982\u679C\u8981\u7528\u4E0A\u4E86\u518D\u53BB\u770B\u6587\u6863\u5373\u53EF\uFF1A"),P={href:"https://studygolang.com/pkgdoc",target:"_blank",rel:"noopener noreferrer"},_=n("\u6587\u6863\u94FE\u63A5"),A=t(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u901A\u7528</span>

%v	\u503C\u7684\u9ED8\u8BA4\u683C\u5F0F\u8868\u793A
%+v	\u7C7B\u4F3C%v\uFF0C\u4F46\u8F93\u51FA\u7ED3\u6784\u4F53\u65F6\u4F1A\u6DFB\u52A0\u5B57\u6BB5\u540D
%<span class="token comment">#v	\u503C\u7684Go\u8BED\u6CD5\u8868\u793A</span>
%T	\u503C\u7684\u7C7B\u578B\u7684Go\u8BED\u6CD5\u8868\u793A
%%	\u767E\u5206\u53F7

<span class="token comment"># boolean</span>

%t	\u5355\u8BCDtrue\u6216false

<span class="token comment"># number</span>

%b	\u8868\u793A\u4E3A\u4E8C\u8FDB\u5236
%c	\u8BE5\u503C\u5BF9\u5E94\u7684unicode\u7801\u503C
%d	\u8868\u793A\u4E3A\u5341\u8FDB\u5236
%o	\u8868\u793A\u4E3A\u516B\u8FDB\u5236
%q	\u8BE5\u503C\u5BF9\u5E94\u7684\u5355\u5F15\u53F7\u62EC\u8D77\u6765\u7684go\u8BED\u6CD5\u5B57\u7B26\u5B57\u9762\u503C\uFF0C\u5FC5\u8981\u65F6\u4F1A\u91C7\u7528\u5B89\u5168\u7684\u8F6C\u4E49\u8868\u793A
%x	\u8868\u793A\u4E3A\u5341\u516D\u8FDB\u5236\uFF0C\u4F7F\u7528a-f
%X	\u8868\u793A\u4E3A\u5341\u516D\u8FDB\u5236\uFF0C\u4F7F\u7528A-F
%U	\u8868\u793A\u4E3AUnicode\u683C\u5F0F\uFF1AU+1234\uFF0C\u7B49\u4EF7\u4E8E<span class="token string">&quot;U+%04X&quot;</span>

<span class="token comment"># float</span>

%b	\u65E0\u5C0F\u6570\u90E8\u5206\u3001\u4E8C\u8FDB\u5236\u6307\u6570\u7684\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF0C\u5982-123456p-78\uFF1B\u53C2\u89C1strconv.FormatFloat
%e	\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF0C\u5982-1234.456e+78
%E	\u79D1\u5B66\u8BA1\u6570\u6CD5\uFF0C\u5982-1234.456E+78
%f	\u6709\u5C0F\u6570\u90E8\u5206\u4F46\u65E0\u6307\u6570\u90E8\u5206\uFF0C\u5982123.456
%F	\u7B49\u4EF7\u4E8E%f
%g	\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u91C7\u7528%e\u6216%f\u683C\u5F0F\uFF08\u4EE5\u83B7\u5F97\u66F4\u7B80\u6D01\u3001\u51C6\u786E\u7684\u8F93\u51FA\uFF09
%G	\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u91C7\u7528%E\u6216%F\u683C\u5F0F\uFF08\u4EE5\u83B7\u5F97\u66F4\u7B80\u6D01\u3001\u51C6\u786E\u7684\u8F93\u51FA\uFF09

<span class="token comment"># string</span>

%s	\u76F4\u63A5\u8F93\u51FA\u5B57\u7B26\u4E32\u6216\u8005<span class="token punctuation">[</span><span class="token punctuation">]</span>byte
%q	\u8BE5\u503C\u5BF9\u5E94\u7684\u53CC\u5F15\u53F7\u62EC\u8D77\u6765\u7684go\u8BED\u6CD5\u5B57\u7B26\u4E32\u5B57\u9762\u503C\uFF0C\u5FC5\u8981\u65F6\u4F1A\u91C7\u7528\u5B89\u5168\u7684\u8F6C\u4E49\u8868\u793A
%x	\u6BCF\u4E2A\u5B57\u8282\u7528\u4E24\u5B57\u7B26\u5341\u516D\u8FDB\u5236\u6570\u8868\u793A\uFF08\u4F7F\u7528a-f\uFF09
%X	\u6BCF\u4E2A\u5B57\u8282\u7528\u4E24\u5B57\u7B26\u5341\u516D\u8FDB\u5236\u6570\u8868\u793A\uFF08\u4F7F\u7528A-F\uFF09

<span class="token comment"># \u6307\u9488</span>

%p	\u8868\u793A\u4E3A\u5341\u516D\u8FDB\u5236\uFF0C\u5E76\u52A0\u4E0A\u524D\u5BFC\u76840x

<span class="token comment"># \u5173\u4E8E\u7CBE\u5EA6</span>

%f:    \u9ED8\u8BA4\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u7CBE\u5EA6
%9f    \u5BBD\u5EA69\uFF0C\u9ED8\u8BA4\u7CBE\u5EA6
%.2f   \u9ED8\u8BA4\u5BBD\u5EA6\uFF0C\u7CBE\u5EA62
%9.2f  \u5BBD\u5EA69\uFF0C\u7CBE\u5EA62
%9.f   \u5BBD\u5EA69\uFF0C\u7CBE\u5EA60

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function O(G,T){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[r,s("a",d,[k,e(a)])]),v,s("p",null,[m,s("a",b,[g,e(a)]),f,s("a",h,[q,e(a)]),y]),w,s("p",null,[x,s("a",P,[_,e(a)])]),A])}var H=p(l,[["render",O],["__file","01-\u521D\u8BC6GoLang.html.vue"]]);export{H as default};
