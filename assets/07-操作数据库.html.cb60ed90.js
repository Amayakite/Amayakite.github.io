import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c as i,a as n,b as c,e as s,d as a}from"./app.9bdfa67b.js";const l={},u=s(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u8FD9\u91CC\u5C31\u7B80\u5355\u8BF4\u660E\u4E0Bgo\u8BED\u8A00\u8BE5\u5982\u4F55\u64CD\u4F5Cmysql\u548Credis</p><p>\u51C6\u5907\u5DE5\u4F5C\u7684\u8BDD\u5148\u51C6\u5907\u4E0BMysql\u548CRedis\uFF0C\u8FD9\u91CC\u7528DockerCompose\u6765\u8FDB\u884C\u90E8\u7F72\u4E86</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.9&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data/mysql/log<span class="token punctuation">:</span>/var/log/mysql<span class="token punctuation">:</span>rw
      <span class="token punctuation">-</span> ./data/mysql/data<span class="token punctuation">:</span>/var/lib/mysql<span class="token punctuation">:</span>rw
      <span class="token punctuation">-</span> ./data/mysql/mysql<span class="token punctuation">-</span>files<span class="token punctuation">:</span>/var/lib/mysql<span class="token punctuation">-</span>files<span class="token punctuation">:</span>rw
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token string">&quot;amayakiteProjectMysql&quot;</span>
    <span class="token comment"># restart: always</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;13001:3306&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TestProject
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data/redis/data<span class="token punctuation">:</span>/data<span class="token punctuation">:</span>rw
      <span class="token punctuation">-</span> ./data/redis/redis.conf<span class="token punctuation">:</span>/etc/redis/redis.conf<span class="token punctuation">:</span>rw
    <span class="token comment"># restart: always</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;13002:6379&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> TestProject
    <span class="token comment"># \u542F\u52A8\u7684\u989D\u5916\u547D\u4EE4</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> redis<span class="token punctuation">-</span>server /etc/redis/redis.conf
<span class="token comment"># \u7F51\u5361\u7684\u914D\u7F6E</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">TestProject</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> <span class="token string">&quot;171.133.0.0/16&quot;</span>
          <span class="token key atrule">gateway</span><span class="token punctuation">:</span> <span class="token string">&quot;171.133.0.1&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540Eredis\u7684\u914D\u7F6E\u6587\u4EF6<code>./data/redis/redis.conf</code>\u5982\u4E0B</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment"># Redis\u7684\u914D\u7F6E</span>
<span class="token comment">#bind 127.0.0.1 </span>
<span class="token comment">#\u6CE8\u91CA\u6389\u8FD9\u90E8\u5206\uFF0C\u8FD9\u662F\u9650\u5236redis\u53EA\u80FD\u672C\u5730\u8BBF\u95EE</span>

protected-mode no 
<span class="token comment">#\u9ED8\u8BA4yes\uFF0C\u5F00\u542F\u4FDD\u62A4\u6A21\u5F0F\uFF0C\u9650\u5236\u4E3A\u672C\u5730\u8BBF\u95EE</span>

daemonize no
<span class="token comment">#\u9ED8\u8BA4no\uFF0C\u6539\u4E3Ayes\u610F\u4E3A\u4EE5\u5B88\u62A4\u8FDB\u7A0B\u65B9\u5F0F\u542F\u52A8\uFF0C\u53EF\u540E\u53F0\u8FD0\u884C\uFF0C\u9664\u975Ekill\u8FDB\u7A0B\uFF0C\u6539\u4E3Ayes\u4F1A\u4F7F\u914D\u7F6E\u6587\u4EF6\u65B9\u5F0F\u542F\u52A8redis\u5931\u8D25</span>

databases 16 
<span class="token comment">#\u6570\u636E\u5E93\u4E2A\u6570\uFF08\u53EF\u9009\uFF09\uFF0C\u6211\u4FEE\u6539\u4E86\u8FD9\u4E2A\u53EA\u662F\u67E5\u770B\u662F\u5426\u751F\u6548\u3002\u3002</span>

dir  ./ 
<span class="token comment">#\u8F93\u5165\u672C\u5730redis\u6570\u636E\u5E93\u5B58\u653E\u6587\u4EF6\u5939\uFF08\u53EF\u9009\uFF09 \u4E0D\u52A8\u5373\u53EF</span>

appendonly yes 
<span class="token comment">#redis\u6301\u4E45\u5316\uFF08\u53EF\u9009\uFF09</span>

requirepass  amayakiteProjectRedis 
<span class="token comment">#\u914D\u7F6Eredis\u8BBF\u95EE\u5BC6\u7801</span>

<span class="token comment"># \u8C03\u6574\u6700\u5927\u5185\u5B58\u4F7F\u7528</span>

<span class="token comment"># \u7F16\u8F91redis\u914D\u7F6E\u6587\u4EF6\uFF0C\u52A0\u5165\u6700\u5927\u5185\u5B58\u4F7F\u7528\u9650\u5236\uFF0C\u6211\u6839\u636E\u670D\u52A1\u5668\u7684\u60C5\u51B5\u8BBE\u7F6E\u4E3A3G</span>
maxmemory 268435456

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u63A5\u7740\u5C31\u53EF\u4EE5\u8BBF\u95EE\u4E86</p><ul><li>Mysql <ul><li>Addr: myserver:13001</li><li>UserName: root</li><li>PassWord: amayakiteProjectMysql</li></ul></li><li>Redis <ul><li>Addr: myserver:13002</li><li>PassWord: amayakiteProjectRedis</li></ul></li></ul><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> Mysql</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>Go\u8BED\u8A00\u4E2D\u7684<code>database/sql</code>\u5305\u63D0\u4F9B\u4E86\u4FDD\u8BC1SQL\u6216\u7C7BSQl\u6570\u636E\u5E93\u7684\u6CDB\u7528\u63A5\u53E3\uFF0C\u5C31\u50CF\u662FJava\u7684Jdbc\u4E00\u6837\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u73A9\u610F\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u6CE8\u5165\uFF08\u81F3\u5C11\uFF09\u4E00\u4E2A\u6570\u636E\u5E93\u9A71\u52A8</p></div><h3 id="\u5B89\u88C5\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u9A71\u52A8" aria-hidden="true">#</a> \u5B89\u88C5\u9A71\u52A8</h3><p>\u6211\u4EEC\u5E38\u7528\u7684\u6570\u636E\u5E93\u9A71\u52A8\u57FA\u672C\u4E0A\u90FD\u662F\u7B2C\u4E09\u65B9\u5B9E\u73B0\u7684\uFF0CMysql\u4E5F\u662F\u5982\u6B64\uFF0C\u8981\u60F3\u4F7F\u7528Mysql\uFF0C\u5148\u8981\u5B89\u88C5\u4E0B\u5BF9\u5E94\u7684\u9A71\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get -u github.com/go-sql-driver/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0B\u8F7D\u8FC7\u7A0B\u53EF\u80FD\u4F1A\u6BD4\u8F83\u6162</p><p>\u8FD9\u91CC\u5148\u4E0D\u7528gomod \u4F9D\u8D56\u4F1A\u9ED8\u8BA4\u4E0B\u8F7D\u5230\u9ED8\u8BA4goPath\u4E0B\u7684pkg\u7684mod\u5185\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9Agopath\uFF0C\u5219Windows\u5728<code>%USERPROFILE%/go</code>\u8FD9\u4E2A\u8DEF\u5F84\u4E0B</p><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3><p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u5E93</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> go_data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u8FDE\u63A5\u5E76\u67E5\u8BE2\uFF0Cmd\u679C\u771F\u4E00\u4E2A\u5C4F\u5E55\u7684err</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;database/sql&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
    <span class="token comment">// \u8FD9\u91CC\u5BFC\u5165\u5C31\u7C7B\u4F3C\u4E8EJava\u4E2Dmysql\u7684\u81EA\u52A8\u88C5\u914D\u4E00\u6837\uFF0C\u5B83\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u4E0B\u65B9\u7684open\u4E2Dmysql\u7684\u5BF9\u5E94\u9A71\u52A8\u4E3A\u5B83</span>
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
	<span class="token comment">// \u521B\u5EFA\u8868product, \u5982\u679C\u8868\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u5FFD\u7565</span>
	sql <span class="token operator">:=</span> <span class="token string">\`
		CREATE TABLE IF NOT EXISTS product(
			id INT(10) NOT NULL AUTO_INCREMENT,
			name VARCHAR(20) NOT NULL,
			price INT(10) NOT NULL,
			PRIMARY KEY (id)
		);
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u521B\u5EFA\u8868\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u63D2\u5165\u6570\u636E</span>
	sql <span class="token operator">=</span> <span class="token string">\`
		INSERT INTO product(name, price) VALUES
			(&quot;\u9F20\u6807&quot;, 23),
			(&quot;\u952E\u76D8&quot;, 33),
			(&quot;\u663E\u793A\u5668&quot;, 43);
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u63D2\u5165\u6570\u636E\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u67E5\u8BE2\u6570\u636E</span>
	sql <span class="token operator">=</span> <span class="token string">\`
		SELECT * FROM product;
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	rows<span class="token punctuation">,</span> err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u6570\u636E\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u6253\u5370\u6570\u636E</span>
	<span class="token keyword">for</span> rows<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> id <span class="token builtin">int</span>
		<span class="token keyword">var</span> name <span class="token builtin">string</span>
		<span class="token keyword">var</span> price <span class="token builtin">int</span>
		<span class="token comment">// \u53D6\u51FA\u6BCF\u4E00\u884C\u6570\u636E</span>
		rows<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>price<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s, price: %d\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> price<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u5173\u95ED\u6E38\u6807</span>
	rows<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u6570\u636E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// \u5220\u9664\u6240\u6709\u6570\u636E</span>
	sql <span class="token operator">=</span> <span class="token string">\`
		DELETE FROM product;
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5220\u9664\u6570\u636E\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u9000\u51FA</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7A0B\u5E8F\u7ED3\u675F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u51FD\u6570\u5355\u4F8B\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5206\u51FD\u6570\u5355\u4F8B\u64CD\u4F5C" aria-hidden="true">#</a> \u5206\u51FD\u6570\u5355\u4F8B\u64CD\u4F5C</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6211\u4EEC\u53EF\u4EE5\u5C06\u57FA\u672C\u7684\u64CD\u4F5C\u5206\u6210\u51FD\u6570\u6765\u64CD\u4F5C\uFF0C\u4E00\u822C\u5B9E\u9645\u5DE5\u4F5C\u4E2D\u4E5F\u662F\u8FD9\u6837\u8FDB\u884C</p></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;database/sql&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;sync&quot;</span>

	<span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> connection <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB
<span class="token keyword">var</span> once sync<span class="token punctuation">.</span>Once

<span class="token keyword">func</span> <span class="token function">initDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	db<span class="token punctuation">,</span> err <span class="token operator">:=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root:amayakiteProjectMysql@tcp(myserver:13001)/go_data&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5\u6570\u636E\u5E93\u5931\u8D25\uFF0C\u683C\u5F0F\u6709\u8BEF\u6216\u8D26\u53F7\u5BC6\u7801\u9519\u8BEF&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u770B\u4E0B\u662F\u5426\u80FDping\u901A\uFF0C\u80FDping\u901A\u5C31\u662F\u8FDE\u63A5\u6210\u529F</span>
	err <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">Ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5\u6570\u636E\u5E93\u5931\u8D25\uFF0C\u683C\u5F0F\u6709\u8BEF\u6216\u8D26\u53F7\u5BC6\u7801\u9519\u8BEF&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FDE\u63A5\u6570\u636E\u5E93\u6210\u529F&quot;</span><span class="token punctuation">)</span>
	connection <span class="token operator">=</span> db
	<span class="token comment">// \u521B\u5EFA\u8868product, \u5982\u679C\u8868\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5219\u5FFD\u7565</span>
	sql <span class="token operator">:=</span> <span class="token string">\`
	CREATE TABLE IF NOT EXISTS product(
		id INT(10) NOT NULL AUTO_INCREMENT,
		name VARCHAR(20) NOT NULL,
		price INT(10) NOT NULL,
		PRIMARY KEY (id)
	);
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u521B\u5EFA\u8868\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u521D\u59CB\u5316\u6570\u636E\u5E93\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// close</span>
	connection<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u7A0B\u5E8F\u7ED3\u675F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>initDb<span class="token punctuation">)</span>
	sql <span class="token operator">:=</span> <span class="token string">\`
	INSERT INTO product(name, price) VALUES
		(&quot;\u9F20\u6807&quot;, 23),
		(&quot;\u952E\u76D8&quot;, 33),
		(&quot;\u663E\u793A\u5668&quot;, 43);
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> connection<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u63D2\u5165\u6570\u636E\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u63D2\u5165\u6570\u636E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>initDb<span class="token punctuation">)</span>
	<span class="token comment">// \u67E5\u8BE2\u6570\u636E</span>
	sql <span class="token operator">:=</span> <span class="token string">\`
		SELECT * FROM product;
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	rows<span class="token punctuation">,</span> err <span class="token operator">:=</span> connection<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u6570\u636E\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u6253\u5370\u6570\u636E</span>
	<span class="token keyword">for</span> rows<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> id <span class="token builtin">int</span>
		<span class="token keyword">var</span> name <span class="token builtin">string</span>
		<span class="token keyword">var</span> price <span class="token builtin">int</span>
		<span class="token comment">// \u53D6\u51FA\u6BCF\u4E00\u884C\u6570\u636E</span>
		rows<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>price<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s, price: %d\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> price<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u5173\u95ED\u6E38\u6807</span>
	rows<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u6570\u636E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>initDb<span class="token punctuation">)</span>
	<span class="token comment">// \u5220\u9664\u6240\u6709\u6570\u636E</span>
	sql <span class="token operator">:=</span> <span class="token string">\`
		DELETE FROM product;
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> connection<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5220\u9664\u6570\u636E\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5220\u9664\u6570\u636E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u8BE2\u5355\u6761\u6570\u636E\u548C\u591A\u6761\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5355\u6761\u6570\u636E\u548C\u591A\u6761\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u5355\u6761\u6570\u636E\u548C\u591A\u6761\u6570\u636E</h3><p>\u5355\u6570\u636E\uFF1A<code>connection.QueryRow(sql\u8BED\u53E5)</code>\uFF0C\u591A\u6761\u5219\u662F\u76F4\u63A5query</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>initDb<span class="token punctuation">)</span>
	<span class="token comment">// \u67E5\u8BE2\u6570\u636E</span>
	sql <span class="token operator">:=</span> <span class="token string">\`
		SELECT * FROM product;
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	rows<span class="token punctuation">,</span> err <span class="token operator">:=</span> connection<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u6570\u636E\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u6253\u5370\u6570\u636E</span>
	<span class="token keyword">for</span> rows<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> id <span class="token builtin">int</span>
		<span class="token keyword">var</span> name <span class="token builtin">string</span>
		<span class="token keyword">var</span> price <span class="token builtin">int</span>
		<span class="token comment">// \u53D6\u51FA\u6BCF\u4E00\u884C\u6570\u636E</span>
		rows<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>price<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s, price: %d\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> price<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u5173\u95ED\u6E38\u6807</span>
	rows<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u6570\u636E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// \u67E5\u8BE2\u5355\u6761\u6570\u636E</span>
	sql <span class="token operator">=</span> <span class="token string">\`
		SELECT * FROM product WHERE name = &quot;\u9F20\u6807&quot;;
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	row <span class="token operator">:=</span> connection<span class="token punctuation">.</span><span class="token function">QueryRow</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
	<span class="token keyword">var</span> id <span class="token builtin">int</span>
	<span class="token keyword">var</span> name <span class="token builtin">string</span>
	<span class="token keyword">var</span> price <span class="token builtin">int</span>
	<span class="token comment">// \u53D6\u51FA\u6BCF\u4E00\u884C\u6570\u636E</span>
	row<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>price<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s, price: %d\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> price<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BBE\u7F6E\u8FDE\u63A5\u6C60\u548C\u91CA\u653E\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u8FDE\u63A5\u6C60\u548C\u91CA\u653E\u8FDE\u63A5" aria-hidden="true">#</a> \u8BBE\u7F6E\u8FDE\u63A5\u6C60\u548C\u91CA\u653E\u8FDE\u63A5</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u8BBE\u7F6E\u8FDE\u63A5\u6C60\u7684\u6700\u5927\u8FDE\u63A5\u6570</span>
connection<span class="token punctuation">.</span><span class="token function">SetMaxOpenConns</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
<span class="token comment">// \u8BBE\u7F6E\u8FDE\u63A5\u6C60\u7A7A\u95F2\u7684\u65F6\u5019\u6700\u591A\u4FDD\u7559\u591A\u5C11\u4E2A\u8FDE\u63A5</span>
connection<span class="token punctuation">.</span><span class="token function">SetMaxIdleConns</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p><strong>\u6CE8\u610F</strong>\uFF1A\u5728\u67E5\u8BE2\u7B49\u4E1C\u897F\u8C03\u7528\u5B8C\u6BD5\u7684\u65F6\u5019\uFF0C\u52A1\u5FC5\u8C03\u7528\u8FD4\u56DE\u503C\u7684<code>Scan()</code>\u65B9\u6CD5\u5173\u95ED\u8FDE\u63A5\uFF0C\u5426\u5219\u5C06\u4F1A\u4E00\u76F4\u5360\u7528\u8FDE\u63A5\u6570</p></div><h3 id="\u67E5\u8BE2\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u4F20\u53C2" aria-hidden="true">#</a> \u67E5\u8BE2\u4F20\u53C2</h3><p>\u8FD9\u4E2A\u5C31\u8DDF\u5176\u4ED6\u7684\u8BED\u8A00\u4E00\u6837\u4E86</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">getById</span><span class="token punctuation">(</span>id <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>initDb<span class="token punctuation">)</span>
	<span class="token comment">// \u67E5\u8BE2\u5355\u6761\u6570\u636E</span>
	sql <span class="token operator">:=</span> <span class="token string">\`
		SELECT * FROM product WHERE id = ?;
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	row <span class="token operator">:=</span> connection<span class="token punctuation">.</span><span class="token function">QueryRow</span><span class="token punctuation">(</span>sql<span class="token punctuation">,</span> id<span class="token punctuation">)</span>
	<span class="token keyword">var</span> name <span class="token builtin">string</span>
	<span class="token keyword">var</span> price <span class="token builtin">int</span>
	<span class="token comment">// \u53D6\u51FA\u6570\u636E</span>
	row<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>price<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s, price: %d\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> price<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6CE8\u610F\uFF0C\u5982\u679C\u67E5\u8BE2\u7ED3\u679C\u4E3A\u7A7A\uFF0C\u5219\u67E5\u8BE2\u53C2\u6570\u7684\u503C\uFF0C\u4F8B\u5982id\u4E5F\u4F9D\u65E7\u662F\u6709\u7684\uFF0C\u50CFname\u548Cprice\u5219\u4F1A\u8FD4\u56DE\u7A7A\u503C<code>nil</code></p></div><h3 id="\u67E5\u8BE2\u591A\u6761\u6570\u636E\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u591A\u6761\u6570\u636E\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u67E5\u8BE2\u591A\u6761\u6570\u636E\u7684\u6CE8\u610F\u4E8B\u9879</h3><blockquote><p>\u4E00\u5B9A\u8981<strong>\u5173\u95ED\u6E38\u6807</strong>\uFF0C\u5426\u5219\u4E5F\u4F1A\u5360\u7528\u8FDE\u63A5</p></blockquote><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>initDb<span class="token punctuation">)</span>
<span class="token comment">// \u67E5\u8BE2\u6570\u636E</span>
sql <span class="token operator">:=</span> <span class="token string">\`
    SELECT * FROM product;
\`</span>
<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
rows<span class="token punctuation">,</span> err <span class="token operator">:=</span> connection<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u6570\u636E\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
<span class="token keyword">defer</span>  rows<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u6253\u5370\u6570\u636E</span>
<span class="token keyword">for</span> rows<span class="token punctuation">.</span><span class="token function">Next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id <span class="token builtin">int</span>
    <span class="token keyword">var</span> name <span class="token builtin">string</span>
    <span class="token keyword">var</span> price <span class="token builtin">int</span>
    <span class="token comment">// \u53D6\u51FA\u6BCF\u4E00\u884C\u6570\u636E</span>
    rows<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>price<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s, price: %d\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> price<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u6570\u636E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u63D2\u5165\u6570\u636E\u5E76\u83B7\u53D6id\u548C\u53D7\u5F71\u54CD\u884C\u6570" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6570\u636E\u5E76\u83B7\u53D6id\u548C\u53D7\u5F71\u54CD\u884C\u6570" aria-hidden="true">#</a> \u63D2\u5165\u6570\u636E\u5E76\u83B7\u53D6id\u548C\u53D7\u5F71\u54CD\u884C\u6570</h3><p>\u5C31\u662F\u5229\u7528\u4E86sql\u7684\u90A3\u5565last\u51FD\u6570</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	once<span class="token punctuation">.</span><span class="token function">Do</span><span class="token punctuation">(</span>initDb<span class="token punctuation">)</span>
	sql <span class="token operator">:=</span> <span class="token string">\`
	INSERT INTO product(name, price) VALUES
		(&quot;\u9F20\u6807&quot;, 23),
		(&quot;\u952E\u76D8&quot;, 33),
		(&quot;\u663E\u793A\u5668&quot;, 43);
	\`</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	ret<span class="token punctuation">,</span> err <span class="token operator">:=</span> connection<span class="token punctuation">.</span><span class="token function">Exec</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u63D2\u5165\u6570\u636E\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u63D2\u5165\u6570\u636E\u6210\u529F&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// \u6253\u5370id</span>
	id<span class="token punctuation">,</span> err <span class="token operator">:=</span> ret<span class="token punctuation">.</span><span class="token function">LastInsertId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u83B7\u53D6id\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span>
	<span class="token comment">// \u83B7\u53D6\u5F71\u54CD\u7684\u884C\u6570</span>
	rows<span class="token punctuation">,</span> err <span class="token operator">:=</span> ret<span class="token punctuation">.</span><span class="token function">RowsAffected</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u83B7\u53D6\u5F71\u54CD\u7684\u884C\u6570\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F71\u54CD\u7684\u884C\u6570:&quot;</span><span class="token punctuation">,</span> rows<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql\u9884\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#mysql\u9884\u5904\u7406" aria-hidden="true">#</a> Mysql\u9884\u5904\u7406</h3><p>\u603B\u4E4B\uFF0C\u90FD\u662F\u4E3A\u4E86\u5B89\u5168\uFF0C\u9632\u6B62Sql\u6CE8\u5165\uFF0C\u5E76\u4E14\u53EF\u63D0\u9AD8\u6548\u7387(\u6211\u4EEC\u670D\u52A1\u7AEF\u4E0D\u7528\u6BCF\u6B21\u90FD\u62FC\u63A5\u5B57\u7B26\u4E32\u4E86)</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">preareQueryDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">initDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// \u8BED\u53E5</span>
	sqlStr <span class="token operator">:=</span> <span class="token string">&quot;SELECT * FROM product WHERE id = ?&quot;</span>
    <span class="token comment">// \u521B\u5EFA\u9884\u5904\u7406\u5BF9\u8C61\uFF0C\u5B9E\u9645\u751F\u4EA7\u73AF\u5883\u7684\u8BDD\u53EF\u4EE5\u653E\u5230\u5168\u5C40\u53D8\u91CF\u5185</span>
	stmt<span class="token punctuation">,</span> err <span class="token operator">:=</span> connection<span class="token punctuation">.</span><span class="token function">Prepare</span><span class="token punctuation">(</span>sqlStr<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9884\u7F16\u8BD1\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u9884\u7F16\u8BD1\u6210\u529F&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// \u5173\u95ED</span>
	<span class="token keyword">defer</span> stmt<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// \u6267\u884Csql\u8BED\u53E5</span>
	row <span class="token operator">:=</span> stmt<span class="token punctuation">.</span><span class="token function">QueryRow</span><span class="token punctuation">(</span><span class="token number">55</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> id <span class="token builtin">int</span>
	<span class="token keyword">var</span> name <span class="token builtin">string</span>
	<span class="token keyword">var</span> price <span class="token builtin">int</span>
	<span class="token comment">// \u53D6\u51FA\u6570\u636E</span>
	row<span class="token punctuation">.</span><span class="token function">Scan</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>id<span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">,</span> <span class="token operator">&amp;</span>price<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;id: %d, name: %s, price: %d\\n&quot;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> price<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4E8B\u52A1" aria-hidden="true">#</a> \u4F7F\u7528\u4E8B\u52A1</h3><p>\u561B\uFF0C\u5176\u5B9E\u5C31\u4E09\u4E2A</p><ul><li>\u5F00\u542F\u4E8B\u52A1\uFF1A<code>tx,err := connection.Begin()</code></li><li>\u56DE\u6EDA\u4E8B\u52A1\uFF1A<code>err := tx.Rollback()</code></li><li>\u63D0\u4EA4\u4E8B\u52A1\uFF1A<code>err := tx.Commit()</code></li></ul><p>\u8FD9\u91CC\u4E5F\u4E0D\u505A\u4F8B\u5B50\u4E86\uFF0C\u5F00\u542F\u4E8B\u52A1\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u4E24\u4E2A\u4E1C\u897F</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>tx<span class="token punctuation">,</span>err <span class="token operator">:=</span> connection<span class="token punctuation">.</span><span class="token function">Begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u5982\u679C\u5F02\u5E38\u4E0D\u4E3A\u7A7A\uFF0C\u5219\u540E\u7EED\u53EF\u4EE5\u901A\u8FC7tx\u5BF9\u8C61\u6765\u8FDB\u884C\u589E\u5220\u6539\u67E5\u64CD\u4F5C\u548C\u4F7F\u7528\u5B83\u6765\u8FDB\u884C\u56DE\u6EDA\u53CA\u63D0\u4EA4\u64CD\u4F5C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sqlx" tabindex="-1"><a class="header-anchor" href="#sqlx" aria-hidden="true">#</a> SqlX</h2><p>\u8FD9\u4E2A\u4E1C\u897F\u5C31\u76F8\u5F53\u4E8E\u662F\u4E00\u4E2AGolang\u7248\u7684Mybatis\u4E00\u6837\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u90FD\u662F\u4F7F\u7528\u5B83\u6765\u66FF\u4EE3\u539F\u751F\u7684golang\u81EA\u5E26\u7684sql\u64CD\u4F5C</p><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>go get github.com/jmoiron/sqlx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u7B80\u5355\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u4F7F\u7528" aria-hidden="true">#</a> \u7B80\u5355\u4F7F\u7528</h3><p>\u67E5\u7684\u8BDD\u6BD4\u8D77\u539F\u751F\u7684\u65B9\u4FBF\u4E0D\u5C11,\u5176\u4F59\u7684\u548C<strong>\u539F\u751F\u7684\u4E00\u81F4</strong></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>

	<span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
	<span class="token string">&quot;github.com/jmoiron/sqlx&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> connection <span class="token operator">*</span>sqlx<span class="token punctuation">.</span>DB

<span class="token keyword">type</span> Product <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Id    <span class="token builtin">int</span>    <span class="token string">\`db:&quot;id&quot;\`</span>
	Name  <span class="token builtin">string</span> <span class="token string">\`db:&quot;name&quot;\`</span>
	Price <span class="token builtin">int</span>    <span class="token string">\`db:&quot;price&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">initDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	db<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> sqlx<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root:amayakiteProjectMysql@tcp(myserver:13001)/go_data&quot;</span><span class="token punctuation">)</span>
	connection <span class="token operator">=</span> db
	connection<span class="token punctuation">.</span><span class="token function">SetMaxOpenConns</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
	connection<span class="token punctuation">.</span><span class="token function">SetMaxIdleConns</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">initDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> connection<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> product Product
	connection<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>product<span class="token punctuation">,</span> <span class="token string">&quot;select * from product where id = ?&quot;</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">)</span>
	<span class="token comment">// \u5982\u679C\u67E5\u8BE2\u4E0D\u5230\u6570\u636E\u7684\u8BDD\uFF0C\u5219\u4F1A\u8FD4\u56DE\u8BE5\u7C7B\u578B\u7684\u9ED8\u8BA4\u503C</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6CE8\u610F\uFF0C\u4E00\u5B9A\u8981\u4F20\u9012\u6307\u9488\u6765\u63A5\u6536\u8FD4\u56DE\u503C\uFF0C\u800C\u5E76\u975E\u662F\u76F4\u63A5\u4F20\u5165\u5BF9\u8C61</p></div><h3 id="\u67E5\u8BE2\u5355\u4E2A\u5BF9\u8C61\u548C\u591A\u4E2A\u5BF9\u8C61\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5355\u4E2A\u5BF9\u8C61\u548C\u591A\u4E2A\u5BF9\u8C61\u7684\u533A\u522B" aria-hidden="true">#</a> \u67E5\u8BE2\u5355\u4E2A\u5BF9\u8C61\u548C\u591A\u4E2A\u5BF9\u8C61\u7684\u533A\u522B</h3><p>\u5355\u4E2A\u5BF9\u8C61\u548C\u4E0A\u9762\u4E00\u6837\uFF0C\u4F7F\u7528get\u7136\u540E\u4F20\u9012\u4E00\u4E2A\u6307\u9488\u5373\u53EF\uFF0C\u8981\u83B7\u53D6\u591A\u4E2A\u5BF9\u8C61\u7684\u8BDD\u53EF\u4EE5\u4F7F\u7528\u5217\u8868\u63A5\u6536\uFF0C\u7531\u4E8E\u5217\u8868\u672C\u5C31\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u6240\u4EE5\u76F4\u63A5\u4F20\u5373\u53EF</p><p>\u6CE8\u610F\uFF0C\u4E0B\u9762\u4F7F\u7528\u7684\u662FSelect\uFF0C\u800C\u5E76\u975E\u662FGet\u6765\u67E5\u8BE2\u591A\u4E2A\u5BF9\u8C61</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">initDb</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> connection<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> productList <span class="token punctuation">[</span><span class="token punctuation">]</span>Product
	<span class="token comment">// \u67E5\u8BE2</span>
	sql <span class="token operator">:=</span> <span class="token string">&quot;select * from product&quot;</span>
	err <span class="token operator">:=</span> connection<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>productList<span class="token punctuation">,</span> sql<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F&quot;</span><span class="token punctuation">,</span> productList<span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8BF4\u4F7F\u7528\u7684\u662FGet\u6765\u67E5\u8BE2\uFF0C\u4F46\u662F\u5728\u6570\u636E\u5E93\u4E2D\u67E5\u627E\u5230\u4E86\u591A\u4E2A\u5BF9\u8C61\uFF0C\u5219\u4F1A\u629B\u51FA\u5F02\u5E38\uFF1A<code> scannable dest type slice with &gt;1 columns (\u67E5\u8BE2\u5230\u7684\u6570\u503C) in result</code></p><h3 id="\u4E0D\u540C\u6570\u636E\u5E93\u7684\u5360\u4F4D\u7B26" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u540C\u6570\u636E\u5E93\u7684\u5360\u4F4D\u7B26" aria-hidden="true">#</a> \u4E0D\u540C\u6570\u636E\u5E93\u7684\u5360\u4F4D\u7B26</h3><p>\u6CE8\u610F\uFF0C\u4E0D\u540C\u6570\u636E\u5E93\u4E4B\u95F4\u6A21\u677F\u7684\u5360\u4F4D\u7B26\u662F\u4E0D\u4E00\u6837\u7684</p><ul><li>Mysql\uFF1A\uFF1F\u95EE\u53F7</li><li>Postgresql\uFF1A$1\u3001$2\u7B49</li><li>Sqlite: \uFF1F\u548C$1\u90FD\u53EF</li><li>Oracle\uFF1A:name\u6216\u8005:age\u7B49</li></ul><h3 id="\u5982\u4F55\u9632\u6B62sql\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u9632\u6B62sql\u6CE8\u5165" aria-hidden="true">#</a> \u5982\u4F55\u9632\u6B62Sql\u6CE8\u5165</h3><p>\u4F7F\u7528SqlX\u7684\u6A21\u677F\u5B57\u7B26\u4E32\u5373\u53EF\uFF0C\u65E0\u8BBA\u5728\u4EC0\u4E48\u65F6\u5019\u90FD\u4E0D\u8981\u81EA\u5DF1\u624B\u52A8\u62FC\u63A5sql\u8BED\u53E5</p><h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><p>\u8FD9\u4E2A\u4E5F\u4E0D\u7528\u591A\u8BF4\u4E86\uFF0C\u7F13\u5B58\u5C0F\u80FD\u624B</p><h3 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56</h3><p>\u5F53\u7136\u662F\u8981\u51C6\u5907\u4F9D\u8D56\u7684\u4E86</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0D\u5EFA\u8BAE\u7528\u8FD9\u4E2A</span>
go get github.com/garyburd/redigo/redis

<span class="token comment"># \u7528\u8FD9\u4E2A</span>
go get github.com/go-redis/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u57FA\u672C\u4F7F\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528-1" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h3>`,73),r=a("\u8FD8\u662F\u6BD4\u8F83\u7B80\u5355\u7684\uFF0C\u5F53\u7136\u8BE6\u7EC6\u7684\u53EF\u4EE5\u770B\u770B\u5B98\u65B9\u6587\u6863"),d={href:"https://pkg.go.dev/github.com/go-redis/redis?utm_source=gopls",target:"_blank",rel:"noopener noreferrer"},k=a("https://pkg.go.dev/github.com/go-redis/redis?utm_source=gopls"),v=s(`<p>\u611F\u89C9\u8FD9\u4E2A\u5E94\u8BE5\u6709\u66F4\u597D\u7684\u66FF\u4EE3\u54C1</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>

	<span class="token string">&quot;github.com/go-redis/redis&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u58F0\u660E\u5168\u5C40\u53D8\u91CF</span>
<span class="token keyword">var</span> redisDb <span class="token operator">*</span>redis<span class="token punctuation">.</span>Client

<span class="token comment">// \u521D\u59CB\u5316\u8FDE\u63A5</span>
<span class="token keyword">func</span> <span class="token function">initRedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	redisDb <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">NewClient</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>redis<span class="token punctuation">.</span>Options<span class="token punctuation">{</span>
		Addr<span class="token punctuation">:</span>     <span class="token string">&quot;myserver:13002&quot;</span><span class="token punctuation">,</span>
		Password<span class="token punctuation">:</span> <span class="token string">&quot;amayakiteProjectRedis&quot;</span><span class="token punctuation">,</span>
		DB<span class="token punctuation">:</span>       <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> err <span class="token operator">:=</span> redisDb<span class="token punctuation">.</span><span class="token function">Ping</span><span class="token punctuation">(</span>redisDb<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;redis\u8FDE\u63A5\u5931\u8D25&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;redis\u8FDE\u63A5\u6210\u529F&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Name <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
	Age  <span class="token builtin">int</span>    <span class="token string">\`json:&quot;age&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">initRedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// \u5B58\u50A8\u4E00\u4E2A\u6570\u636E\uFF0C\u8FC7\u671F\u65F6\u95F4\u4E3A1\u4E2A\u5C0F\u65F6</span>
	err <span class="token operator">:=</span> redisDb<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>redisDb<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>Hour<span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2Auser\u5E76\u5B58\u50A8json</span>
	user <span class="token operator">:=</span> User<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span> <span class="token string">&quot;amayakite&quot;</span><span class="token punctuation">,</span>
		Age<span class="token punctuation">:</span>  <span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u8F6C\u6362\u4E3Ajson\u5B57\u7B26\u4E32</span>
	userJson<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
	<span class="token comment">// \u8F6C\u6362\u4E3Ajson\u5B58\u50A8</span>
	err <span class="token operator">=</span> redisDb<span class="token punctuation">.</span><span class="token function">Set</span><span class="token punctuation">(</span>redisDb<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> userJson<span class="token punctuation">,</span> time<span class="token punctuation">.</span>Hour<span class="token operator">*</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u83B7\u53D6user</span>
	userGet<span class="token punctuation">,</span> err <span class="token operator">:=</span> redisDb<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span>redisDb<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Result</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// \u8F6C\u6362\u4E3Auser</span>
	<span class="token keyword">var</span> userGetUser User
	json<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>userGet<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>userGetUser<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>userGetUser<span class="token punctuation">)</span>
	<span class="token comment">// \u5220\u9664user</span>
	err <span class="token operator">=</span> redisDb<span class="token punctuation">.</span><span class="token function">Del</span><span class="token punctuation">(</span>redisDb<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Err</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(b,q){const t=p("ExternalLinkIcon");return o(),i("div",null,[u,n("p",null,[r,n("a",d,[k,c(t)])]),v])}var y=e(l,[["render",m],["__file","07-\u64CD\u4F5C\u6570\u636E\u5E93.html.vue"]]);export{y as default};
