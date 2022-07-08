import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.ad7a4a8c.js";var t="/images/SpringCloud/14-1-Seata\u90E8\u7F72\u5168\u6D41\u7A0B/image-20220114225612986.png",p="/images/SpringCloud/14-1-Seata\u90E8\u7F72\u5168\u6D41\u7A0B/image-20220114225637546.png";const l={},o=e(`<h2 id="\u5148\u8BF4\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5148\u8BF4\u603B\u7ED3" aria-hidden="true">#</a> \u5148\u8BF4\u603B\u7ED3</h2><p>\u9664\u975E\u4E07\u4E0D\u5F97\u5DF2\uFF0C\u4E0D\u7136\u5343\u4E07\u522B\u7528\u672C\u5730\u914D\u7F6E..\u975E\u5E38\u591A\u7684BUG</p><h2 id="\u6570\u636E\u5E93\u51C6\u5907-\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u51C6\u5907-\u670D\u52A1\u7AEF" aria-hidden="true">#</a> \u6570\u636E\u5E93\u51C6\u5907\uFF08\u670D\u52A1\u7AEF\uFF09</h2><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> seata<span class="token punctuation">;</span>
<span class="token keyword">use</span> seata<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>global_table<span class="token punctuation">\`</span></span>
<span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">\`</span>xid<span class="token punctuation">\`</span></span>                       <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>transaction_id<span class="token punctuation">\`</span></span>            <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>status<span class="token punctuation">\`</span></span>                    <span class="token keyword">TINYINT</span>      <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>application_id<span class="token punctuation">\`</span></span>            <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>transaction_service_group<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>transaction_name<span class="token punctuation">\`</span></span>          <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>timeout<span class="token punctuation">\`</span></span>                   <span class="token keyword">INT</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>begin_time<span class="token punctuation">\`</span></span>                <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>application_data<span class="token punctuation">\`</span></span>          <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>gmt_create<span class="token punctuation">\`</span></span>                <span class="token keyword">DATETIME</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>gmt_modified<span class="token punctuation">\`</span></span>              <span class="token keyword">DATETIME</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>xid<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>idx_gmt_modified_status<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>gmt_modified<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>status<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>idx_transaction_id<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>transaction_id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span>
  <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span> <span class="token operator">=</span> utf8<span class="token punctuation">;</span>

<span class="token comment">-- the table to store BranchSession data</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>branch_table<span class="token punctuation">\`</span></span>
<span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">\`</span>branch_id<span class="token punctuation">\`</span></span>         <span class="token keyword">BIGINT</span>       <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>xid<span class="token punctuation">\`</span></span>               <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>transaction_id<span class="token punctuation">\`</span></span>    <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>resource_group_id<span class="token punctuation">\`</span></span> <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>resource_id<span class="token punctuation">\`</span></span>       <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>branch_type<span class="token punctuation">\`</span></span>       <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>status<span class="token punctuation">\`</span></span>            <span class="token keyword">TINYINT</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>client_id<span class="token punctuation">\`</span></span>         <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>application_data<span class="token punctuation">\`</span></span>  <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>gmt_create<span class="token punctuation">\`</span></span>        <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>gmt_modified<span class="token punctuation">\`</span></span>      <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>branch_id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>idx_xid<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>xid<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span>
  <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span> <span class="token operator">=</span> utf8<span class="token punctuation">;</span>

<span class="token comment">-- the table to store lock data</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>lock_table<span class="token punctuation">\`</span></span>
<span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">\`</span>row_key<span class="token punctuation">\`</span></span>        <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>xid<span class="token punctuation">\`</span></span>            <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>transaction_id<span class="token punctuation">\`</span></span> <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>branch_id<span class="token punctuation">\`</span></span>      <span class="token keyword">BIGINT</span>       <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>resource_id<span class="token punctuation">\`</span></span>    <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>table_name<span class="token punctuation">\`</span></span>     <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>pk<span class="token punctuation">\`</span></span>             <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>status<span class="token punctuation">\`</span></span>         <span class="token keyword">TINYINT</span>      <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;0:locked ,1:rollbacking&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>gmt_create<span class="token punctuation">\`</span></span>     <span class="token keyword">DATETIME</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>gmt_modified<span class="token punctuation">\`</span></span>   <span class="token keyword">DATETIME</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>row_key<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>idx_status<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>status<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>idx_branch_id<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>branch_id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span>
  <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span> <span class="token operator">=</span> utf8<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>distributed_lock<span class="token punctuation">\`</span></span>
<span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">\`</span>lock_key<span class="token punctuation">\`</span></span>       <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>lock_value<span class="token punctuation">\`</span></span>     <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>expire<span class="token punctuation">\`</span></span>         <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
    <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>lock_key<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span>
  <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span> <span class="token operator">=</span> utf8mb4<span class="token punctuation">;</span>

<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>distributed_lock<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>lock_key<span class="token punctuation">,</span> lock_value<span class="token punctuation">,</span> expire<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;AsyncCommitting&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>distributed_lock<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>lock_key<span class="token punctuation">,</span> lock_value<span class="token punctuation">,</span> expire<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;RetryCommitting&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>distributed_lock<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>lock_key<span class="token punctuation">,</span> lock_value<span class="token punctuation">,</span> expire<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;RetryRollbacking&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>distributed_lock<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>lock_key<span class="token punctuation">,</span> lock_value<span class="token punctuation">,</span> expire<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;TxTimeoutCheck&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u670D\u52A1\u7AEF\u642D\u5EFA-server-\u672C\u5730" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u642D\u5EFA-server-\u672C\u5730" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u642D\u5EFA(Server)-\u672C\u5730</h2><p>\u867D\u7136\u662F\u672C\u5730\uFF0C\u4F46\u662F\u901A\u8BAF\u8FD8\u662F\u8981\u7528\u5230Nacos</p><h3 id="registry-conf" tabindex="-1"><a class="header-anchor" href="#registry-conf" aria-hidden="true">#</a> registry.conf</h3><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>registry {
  <span class="token comment"># file \u3001nacos \u3001eureka\u3001redis\u3001zk\u3001consul\u3001etcd3\u3001sofa \u8FD9\u91CC\u5FC5\u987B\u9009\u62E9nacos</span>
  <span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">nacos</span>&quot;</span>
  nacos {
    <span class="token key attr-name">application</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">seata-server</span>&quot;</span>
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">myserver:8435</span>&quot;</span>
    <span class="token key attr-name">group</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">SEATA_GROUP</span>&quot;</span>
    <span class="token key attr-name">namespace</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">029fa2f3-e90a-400c-91ac-7f1b83dc4785</span>&quot;</span>
    <span class="token comment"># \u6CE8\u610F\u8FD9\u73A9\u610F \u975E\u5E38\u91CD\u8981 \u4F60\u6700\u7EC8\u7684\u6210\u8D25\u90FD\u5728cluster\u4E0A\u8FB9</span>
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">username</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">nacos</span>&quot;</span>
    <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">nacos</span>&quot;</span>
  }
  eureka {
    <span class="token key attr-name">serviceUrl</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">http://localhost:8761/eureka</span>&quot;</span>
    <span class="token key attr-name">application</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">weight</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">1</span>&quot;</span>
  }
  redis {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">localhost:6379</span>&quot;</span>
    <span class="token key attr-name">db</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
    <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
  }
  zk {
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1:2181</span>&quot;</span>
    <span class="token key attr-name">sessionTimeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">6000</span>
    <span class="token key attr-name">connectTimeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>
    <span class="token key attr-name">username</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
    <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
  }
  consul {
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1:8500</span>&quot;</span>
    <span class="token key attr-name">aclToken</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
  }
  etcd3 {
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">http://localhost:2379</span>&quot;</span>
  }
  sofa {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1:9603</span>&quot;</span>
    <span class="token key attr-name">application</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">region</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">DEFAULT_ZONE</span>&quot;</span>
    <span class="token key attr-name">datacenter</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">DefaultDataCenter</span>&quot;</span>
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">group</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">SEATA_GROUP</span>&quot;</span>
    <span class="token key attr-name">addressWaitTime</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">3000</span>&quot;</span>
  }
  file {
    <span class="token key attr-name">name</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">file.conf</span>&quot;</span>
  }
}

config {
  <span class="token comment"># file\u3001nacos \u3001apollo\u3001zk\u3001consul\u3001etcd3 \u8FD9\u91CC\u9009\u62E9file\uFF0C\u8BFB\u53D6\u672C\u5730\u6587\u4EF6</span>
  <span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">file</span>&quot;</span>

  nacos {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">myserver:8435</span>&quot;</span>
    <span class="token key attr-name">namespace</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">029fa2f3-e90a-400c-91ac-7f1b83dc4785</span>&quot;</span>
    <span class="token key attr-name">group</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">SEATA_GROUP</span>&quot;</span>
    <span class="token key attr-name">username</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">nacos</span>&quot;</span>
    <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">nacos</span>&quot;</span>
    <span class="token key attr-name">dataId</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">seataServer.properties</span>&quot;</span>
  }
  consul {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1:8500</span>&quot;</span>
    <span class="token key attr-name">aclToken</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
  }
  apollo {
    <span class="token key attr-name">appId</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">seata-server</span>&quot;</span>
    <span class="token comment">## apolloConfigService will cover apolloMeta</span>
    <span class="token key attr-name">apolloMeta</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">http://192.168.1.204:8801</span>&quot;</span>
    <span class="token key attr-name">apolloConfigService</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">http://192.168.1.204:8080</span>&quot;</span>
    <span class="token key attr-name">namespace</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">application</span>&quot;</span>
    <span class="token key attr-name">apolloAccesskeySecret</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">seata</span>&quot;</span>
  }
  zk {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1:2181</span>&quot;</span>
    <span class="token key attr-name">sessionTimeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">6000</span>
    <span class="token key attr-name">connectTimeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>
    <span class="token key attr-name">username</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
    <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
    <span class="token key attr-name">nodePath</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">/seata/seata.properties</span>&quot;</span>
  }
  etcd3 {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">http://localhost:2379</span>&quot;</span>
  }
  file {
    <span class="token key attr-name">name</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">file.conf</span>&quot;</span>
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file-conf" tabindex="-1"><a class="header-anchor" href="#file-conf" aria-hidden="true">#</a> file.conf</h3><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token comment"># \u4F20\u8F93\u6A21\u5757 \u8FD9\u4E2A\u4E0D\u7528\u7BA1 \u76F4\u63A5\u7528\u5373\u53EF</span>
transport {
    <span class="token comment"># tcp, unix-domain-socket</span>
    <span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">TCP</span>&quot;</span>
    <span class="token comment">#NIO, NATIVE</span>
    <span class="token key attr-name">server</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">NIO</span>&quot;</span>
    <span class="token comment">#enable heartbeat</span>
    <span class="token key attr-name">heartbeat</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
    <span class="token comment"># the client batch send request enable</span>
    <span class="token key attr-name">enableClientBatchSendRequest</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
    <span class="token comment">#thread factory for netty</span>
    threadFactory {
        <span class="token key attr-name">bossThreadPrefix</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">NettyBoss</span>&quot;</span>
        <span class="token key attr-name">workerThreadPrefix</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">NettyServerNIOWorker</span>&quot;</span>
        <span class="token key attr-name">serverExecutorThreadPrefix</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">NettyServerBizHandler</span>&quot;</span>
        <span class="token key attr-name">shareBossWorker</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
        <span class="token key attr-name">clientSelectorThreadPrefix</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">NettyClientSelector</span>&quot;</span>
        <span class="token key attr-name">clientSelectorThreadSize</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
        <span class="token key attr-name">clientWorkerThreadPrefix</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">NettyClientWorkerThread</span>&quot;</span>
        <span class="token comment"># netty boss thread size</span>
        <span class="token key attr-name">bossThreadSize</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
        <span class="token comment">#auto default pin or 8</span>
        <span class="token key attr-name">workerThreadSize</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    }
    shutdown {
        <span class="token comment"># when destroy server, wait seconds</span>
        <span class="token key attr-name">wait</span> <span class="token punctuation">=</span> <span class="token value attr-value">3</span>
    }
    <span class="token key attr-name">serialization</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">seata</span>&quot;</span>
    <span class="token key attr-name">compressor</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">none</span>&quot;</span>
}
<span class="token comment"># \u8FD9\u91CC\u662F\u6307\u5B9Aservice \u4E00\u5B9A\u8981\u914D\u7F6E</span>
service {
    <span class="token comment"># \u8FD9\u4E2A\u662F\u4E8B\u52A1\u5206\u7EC4 \u5F00\u59CB\u662F\u4F7F\u7528\u4E86\u4E00\u4E2A\u9ED8\u8BA4\u7684 \u8FD9\u91CC\u8981\u6539\u6210\u81EA\u5DF1\u7684 \u8FD9\u91CC\u968F\u4FBF\u53D6\u4E00\u4E2A\u540D\u5B57\u5C31\u53EF\u4EE5\u4E86\uFF0C\u987A\u624B\u5C31\u884C</span>
   <span class="token key attr-name">vgroupMapping.default_tx_group</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
   <span class="token comment"># \u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A</span>
   <span class="token key attr-name">vgroupMapping.seata-order-service-tx_group</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
   <span class="token key attr-name">vgroupMapping.seata-account-service-tx_group</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
   <span class="token key attr-name">vgroupMapping.seata-storage-service-tx_group</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token comment"># TC\u670D\u52A1\u5217\u8868 \u8FD9\u4E2A\u4E0D\u7528\u7BA1\uFF0C\u4EC5\u6CE8\u518C\u4E2D\u5FC3\u4E3Afile\u65F6\u4F7F\u7528</span>
    <span class="token key attr-name">default.grouplist</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1:8091</span>&quot;</span>
    <span class="token key attr-name">enableDegrade</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
    <span class="token comment"># \u5168\u5C40\u4E8B\u52A1\u5F00\u5173 \u9ED8\u8BA4false\u3002false\u4E3A\u5F00\u542F\uFF0Ctrue\u4E3A\u5173\u95ED</span>
    <span class="token key attr-name">disableGlobalTransaction</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
}
<span class="token comment"># \u4E0B\u9762\u8FD9\u91CC\u4E5F\u662F\u56FA\u5B9A\u64CD\u4F5C \u4E0D\u7528\u7BA1</span>
client {
    rm {
        <span class="token key attr-name">asyncCommitBufferLimit</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span>
        <span class="token key attr-name">lock.retryInterval</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
        <span class="token key attr-name">lock.retryTimes</span> <span class="token punctuation">=</span> <span class="token value attr-value">30</span>
        <span class="token key attr-name">lock.retryPolicyBranchRollbackOnConflict</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
        <span class="token key attr-name">reportRetryCount</span> <span class="token punctuation">=</span> <span class="token value attr-value">5</span>
        <span class="token key attr-name">tableMetaCheckEnable</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
        <span class="token key attr-name">tableMetaCheckerInterval</span> <span class="token punctuation">=</span> <span class="token value attr-value">60000</span>
        <span class="token key attr-name">sqlParserType</span> <span class="token punctuation">=</span> <span class="token value attr-value">druid</span>
        <span class="token key attr-name">reportSuccessEnable</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
        <span class="token key attr-name">sagaBranchRegisterEnable</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
    }
    tm {
        <span class="token key attr-name">commitRetryCount</span> <span class="token punctuation">=</span> <span class="token value attr-value">5</span>
        <span class="token key attr-name">rollbackRetryCount</span> <span class="token punctuation">=</span> <span class="token value attr-value">5</span>
        <span class="token key attr-name">defaultGlobalTransactionTimeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">60000</span>
        <span class="token key attr-name">degradeCheck</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
        <span class="token key attr-name">degradeCheckAllowTimes</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
        <span class="token key attr-name">degradeCheckPeriod</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>

    }
}


<span class="token comment">## transaction log store, only used in seata-server</span>
store {
    <span class="token comment">## store mode: file\u3001db\u3001redis \u8FD9\u91CC\u662F\u8BA9\u4F60\u9009\u62E9\u5B58\u50A8\u6A21\u5F0F\uFF0Cdb\u5C31\u662Fmysql\uFF0Cfile\u5C31\u662F\u6587\u4EF6\uFF0Credis\u5C31\u662F\u7528redis\u6765\u5B58\u50A8\u6570\u636E</span>
    <span class="token key attr-name">mode</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">db</span>&quot;</span>
    <span class="token comment">## rsa decryption public key \u8FD9\u91CC\u662F\u516C\u94A5\u4E4B\u7C7B\u7684\u914D\u7F6E \u5148\u4E0D\u7BA1</span>
    <span class="token key attr-name">publicKey</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
    <span class="token comment">## file store property</span>
    file {
        <span class="token comment">## store location dir</span>
        <span class="token key attr-name">dir</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">sessionStore</span>&quot;</span>
        <span class="token comment"># branch session size , if exceeded first try compress lockkey, still exceeded throws exceptions</span>
        <span class="token key attr-name">maxBranchSessionSize</span> <span class="token punctuation">=</span> <span class="token value attr-value">16384</span>
        <span class="token comment"># globe session size , if exceeded throws exceptions</span>
        <span class="token key attr-name">maxGlobalSessionSize</span> <span class="token punctuation">=</span> <span class="token value attr-value">512</span>
        <span class="token comment"># file buffer size , if exceeded allocate new buffer</span>
        <span class="token key attr-name">fileWriteBufferCacheSize</span> <span class="token punctuation">=</span> <span class="token value attr-value">16384</span>
        <span class="token comment"># when recover batch read size</span>
        <span class="token key attr-name">sessionReloadReadSize</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>
        <span class="token comment"># async, sync</span>
        <span class="token key attr-name">flushDiskMode</span> <span class="token punctuation">=</span> <span class="token value attr-value">async</span>
    }

    <span class="token comment">## database store property \u6211\u4EEC\u4E0A\u9762\u9009\u62E9\u4E86DB\uFF0C\u6240\u4EE5\u8FD9\u91CC\u8981\u914D\u7F6E\u4E00\u4E9B\u57FA\u672C\u7684\u8FDE\u63A5\u4FE1\u606F</span>
    db {
        <span class="token comment">## the implement of javax.sql.DataSource, such as DruidDataSource(druid)/BasicDataSource(dbcp)/HikariDataSource(hikari) etc.</span>
        <span class="token key attr-name">datasource</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">druid</span>&quot;</span>
        <span class="token comment">## mysql/oracle/postgresql/h2/oceanbase etc.</span>
        <span class="token key attr-name">dbType</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">mysql</span>&quot;</span>
        <span class="token comment"># \u6CE8\u610F \u8FD9\u91CC\u5982\u679C\u4F60\u7528\u7684\u662Fmysql8\u4EE5\u4E0B\u7684\u8BDD \u8981com.mysql.jdbc.Driver \u5426\u5219 com.mysql.cj.jdbc.Driver</span>
        <span class="token key attr-name">driverClassName</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">com.mysql.cj.jdbc.Driver</span>&quot;</span>
        <span class="token comment">## if using mysql to store the data, recommend add rewriteBatchedStatements=true in jdbc connection param</span>
        <span class="token key attr-name">url</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">jdbc:mysql://localhost:3306/seata?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;rewriteBatchedStatements=true&amp;&amp;serverTimezone=UTC</span>&quot;</span>
        <span class="token key attr-name">user</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">root</span>&quot;</span>
        <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">123456</span>&quot;</span>
        <span class="token key attr-name">minConn</span> <span class="token punctuation">=</span> <span class="token value attr-value">5</span>
        <span class="token key attr-name">maxConn</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>
        <span class="token key attr-name">globalTable</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">global_table</span>&quot;</span>
        <span class="token key attr-name">branchTable</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">branch_table</span>&quot;</span>
        <span class="token key attr-name">lockTable</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">lock_table</span>&quot;</span>
        <span class="token key attr-name">queryLimit</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>
        <span class="token key attr-name">maxWait</span> <span class="token punctuation">=</span> <span class="token value attr-value">5000</span>
    }

    <span class="token comment">## redis store property</span>
    redis {
        <span class="token comment">## redis mode: single\u3001sentinel</span>
        <span class="token key attr-name">mode</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">single</span>&quot;</span>
        <span class="token comment">## single mode property</span>
        single {
            <span class="token key attr-name">host</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1</span>&quot;</span>
            <span class="token key attr-name">port</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">6379</span>&quot;</span>
        }
        <span class="token comment">## sentinel mode property</span>
        sentinel {
            <span class="token key attr-name">masterName</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
            <span class="token comment">## such as &quot;10.28.235.65:26379,10.28.235.65:26380,10.28.235.65:26381&quot;</span>
            <span class="token key attr-name">sentinelHosts</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
        }
        <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
        <span class="token key attr-name">database</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">0</span>&quot;</span>
        <span class="token key attr-name">minConn</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
        <span class="token key attr-name">maxConn</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
        <span class="token key attr-name">maxTotal</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>
        <span class="token key attr-name">queryLimit</span> <span class="token punctuation">=</span> <span class="token value attr-value">100</span>
    }
}
<span class="token comment">## server configuration, only used in server side \u4E0B\u9762\u90FD\u662F\u56FA\u5B9A\u914D\u7F6E \u4E00\u822C\u4E0D\u7528\u7BA1</span>
server {
    recovery {
        <span class="token comment">#schedule committing retry period in milliseconds</span>
        <span class="token key attr-name">committingRetryPeriod</span> <span class="token punctuation">=</span> <span class="token value attr-value">1000</span>
        <span class="token comment">#schedule asyn committing retry period in milliseconds</span>
        <span class="token key attr-name">asynCommittingRetryPeriod</span> <span class="token punctuation">=</span> <span class="token value attr-value">1000</span>
        <span class="token comment">#schedule rollbacking retry period in milliseconds</span>
        <span class="token key attr-name">rollbackingRetryPeriod</span> <span class="token punctuation">=</span> <span class="token value attr-value">1000</span>
        <span class="token comment">#schedule timeout retry period in milliseconds</span>
        <span class="token key attr-name">timeoutRetryPeriod</span> <span class="token punctuation">=</span> <span class="token value attr-value">1000</span>
    }
    undo {
        <span class="token key attr-name">logSaveDays</span> <span class="token punctuation">=</span> <span class="token value attr-value">7</span>
        <span class="token comment">#schedule delete expired undo_log in milliseconds</span>
        <span class="token key attr-name">logDeletePeriod</span> <span class="token punctuation">=</span> <span class="token value attr-value">86400000</span>
    }
    <span class="token comment">#check auth</span>
    <span class="token key attr-name">enableCheckAuth</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span>
    <span class="token comment">#unit ms,s,m,h,d represents milliseconds, seconds, minutes, hours, days, default permanent</span>
    <span class="token key attr-name">maxCommitRetryTimeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">-1</span>&quot;</span>
    <span class="token key attr-name">maxRollbackRetryTimeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">-1</span>&quot;</span>
    <span class="token key attr-name">rollbackRetryTimeoutUnlockEnable</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
    <span class="token key attr-name">retryDeadThreshold</span> <span class="token punctuation">=</span> <span class="token value attr-value">130000</span>
}


<span class="token comment">## metrics configuration, only used in server side</span>
metrics {
    <span class="token key attr-name">enabled</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span>
    <span class="token key attr-name">registryType</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">compact</span>&quot;</span>
    <span class="token comment"># multi exporters use comma divided</span>
    <span class="token key attr-name">exporterList</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">prometheus</span>&quot;</span>
    <span class="token key attr-name">exporterPrometheusPort</span> <span class="token punctuation">=</span> <span class="token value attr-value">9898</span>
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u670D\u52A1\u7AEF\u642D\u5EFA-server-nacos" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u642D\u5EFA-server-nacos" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u642D\u5EFA(Server)-Nacos</h2><h3 id="registry-conf-1" tabindex="-1"><a class="header-anchor" href="#registry-conf-1" aria-hidden="true">#</a> registry.conf</h3><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>registry {
  <span class="token comment"># file \u3001nacos \u3001eureka\u3001redis\u3001zk\u3001consul\u3001etcd3\u3001sofa</span>
  <span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">nacos</span>&quot;</span>
  nacos {
    <span class="token key attr-name">application</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">seata-server</span>&quot;</span>
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">myserver:8435</span>&quot;</span>
    <span class="token key attr-name">group</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">SEATA_GROUP</span>&quot;</span>
    <span class="token comment"># \u8FD9\u91CC\u7684\u547D\u540D\u7A7A\u95F4\u8981\u63D0\u524D\u5230nacos\u5185\u521B\u5EFA\u597D</span>
    <span class="token key attr-name">namespace</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">029fa2f3-e90a-400c-91ac-7f1b83dc4785</span>&quot;</span>
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">username</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">nacos</span>&quot;</span>
    <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">nacos</span>&quot;</span>
  }
  eureka {
    <span class="token key attr-name">serviceUrl</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">http://localhost:8761/eureka</span>&quot;</span>
    <span class="token key attr-name">application</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">weight</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">1</span>&quot;</span>
  }
  redis {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">localhost:6379</span>&quot;</span>
    <span class="token key attr-name">db</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
    <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
  }
  zk {
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1:2181</span>&quot;</span>
    <span class="token key attr-name">sessionTimeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">6000</span>
    <span class="token key attr-name">connectTimeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>
    <span class="token key attr-name">username</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
    <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
  }
  consul {
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1:8500</span>&quot;</span>
    <span class="token key attr-name">aclToken</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
  }
  etcd3 {
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">http://localhost:2379</span>&quot;</span>
  }
  sofa {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1:9603</span>&quot;</span>
    <span class="token key attr-name">application</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">region</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">DEFAULT_ZONE</span>&quot;</span>
    <span class="token key attr-name">datacenter</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">DefaultDataCenter</span>&quot;</span>
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">default</span>&quot;</span>
    <span class="token key attr-name">group</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">SEATA_GROUP</span>&quot;</span>
    <span class="token key attr-name">addressWaitTime</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">3000</span>&quot;</span>
  }
  file {
    <span class="token key attr-name">name</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">file.conf</span>&quot;</span>
  }
}

config {
  <span class="token comment"># file\u3001nacos \u3001apollo\u3001zk\u3001consul\u3001etcd3</span>
  <span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">nacos</span>&quot;</span>

  nacos {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">myserver:8435</span>&quot;</span>
    <span class="token comment"># \u8FD9\u91CC\u548C\u4E0A\u9762\u7528\u540C\u6837\u7684</span>
    <span class="token key attr-name">namespace</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">029fa2f3-e90a-400c-91ac-7f1b83dc4785</span>&quot;</span>
    <span class="token key attr-name">group</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">SEATA_GROUP</span>&quot;</span>
    <span class="token key attr-name">username</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">nacos</span>&quot;</span>
    <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">nacos</span>&quot;</span>
    <span class="token key attr-name">dataId</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">seataServer.properties</span>&quot;</span>
  }
  consul {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1:8500</span>&quot;</span>
    <span class="token key attr-name">aclToken</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
  }
  apollo {
    <span class="token key attr-name">appId</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">seata-server</span>&quot;</span>
    <span class="token comment">## apolloConfigService will cover apolloMeta</span>
    <span class="token key attr-name">apolloMeta</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">http://192.168.1.204:8801</span>&quot;</span>
    <span class="token key attr-name">apolloConfigService</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">http://192.168.1.204:8080</span>&quot;</span>
    <span class="token key attr-name">namespace</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">application</span>&quot;</span>
    <span class="token key attr-name">apolloAccesskeySecret</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
    <span class="token key attr-name">cluster</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">seata</span>&quot;</span>
  }
  zk {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">127.0.0.1:2181</span>&quot;</span>
    <span class="token key attr-name">sessionTimeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">6000</span>
    <span class="token key attr-name">connectTimeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>
    <span class="token key attr-name">username</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
    <span class="token key attr-name">password</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;&quot;</span>
    <span class="token key attr-name">nodePath</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">/seata/seata.properties</span>&quot;</span>
  }
  etcd3 {
    <span class="token key attr-name">serverAddr</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">http://localhost:2379</span>&quot;</span>
  }
  file {
    <span class="token key attr-name">name</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">file.conf</span>&quot;</span>
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6587\u4EF6\u4E0A\u4F20\u5230nacos\u7684\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20\u5230nacos\u7684\u811A\u672C" aria-hidden="true">#</a> \u6587\u4EF6\u4E0A\u4F20\u5230Nacos\u7684\u811A\u672C</h3><p>\u56E0\u4E3A\u5B98\u65B9\u7684\u6709\u95EE\u9898\uFF0C\u6240\u4EE5\u7528\u8FD9\u4E00\u7248\u7684</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>
<span class="token comment">#  -*- coding: UTF-8 -*-</span>

<span class="token keyword">import</span> http<span class="token punctuation">.</span>client
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> getopt <span class="token keyword">as</span> opts
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse
<span class="token keyword">import</span> re


<span class="token comment"># \u4E0B\u9762\u8FD9\u4E2Aparams\u586B\u5199\u4F60\u54CD\u5E94\u7684\u4FE1\u606F \u7B2C\u4E00\u4E2A\u662Fip \u7B2C\u4E8C\u4E2A\u662F\u7AEF\u53E3 \u7B2C\u4E09\u4E2A\u662F\u547D\u540D\u7A7A\u95F4 \u7B2C\u56DB\u4E2A\u662F\u5206\u7EC4 \u5176\u4F59\u7684\u662F\u8D26\u53F7\u5BC6\u7801</span>
<span class="token keyword">def</span> <span class="token function">get_params</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">dict</span><span class="token punctuation">:</span>
    params <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;-h&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;myserver&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;-p&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;8435&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;-t&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;029fa2f3-e90a-400c-91ac-7f1b83dc4785&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;-g&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;SEATA_GROUP&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;-u&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;nacos&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;-w&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;nacos&#39;</span>
    <span class="token punctuation">}</span>
    inputs<span class="token punctuation">,</span> args <span class="token operator">=</span> opts<span class="token punctuation">.</span>getopt<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> shortopts<span class="token operator">=</span><span class="token string">&#39;h:p:t:g:u:w:&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> k<span class="token punctuation">,</span> v <span class="token keyword">in</span> inputs<span class="token punctuation">:</span>
        params<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> v
    <span class="token keyword">print</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>
    <span class="token keyword">return</span> params

<span class="token keyword">def</span> <span class="token function">error_exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;python nacos-config.py [-h host] [-p port] [-t tenant] [-g group] [-u username] [-w password]&#39;</span><span class="token punctuation">)</span>
    exit<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">get_pair</span><span class="token punctuation">(</span>line<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">tuple</span><span class="token punctuation">:</span>
    res <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token keyword">match</span><span class="token punctuation">(</span><span class="token string">r&quot;([\\.\\w-]+)=(.*)&quot;</span><span class="token punctuation">,</span>line<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span>groups<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">if</span> res <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span> <span class="token keyword">else</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">]</span>


headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;content-type&#39;</span><span class="token punctuation">:</span> <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span>
<span class="token punctuation">}</span>

hasError <span class="token operator">=</span> <span class="token boolean">False</span>

params <span class="token operator">=</span> get_params<span class="token punctuation">(</span><span class="token punctuation">)</span>

url_prefix <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>params<span class="token punctuation">[</span><span class="token string">&#39;-h&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token punctuation">{</span>params<span class="token punctuation">[</span><span class="token string">&#39;-p&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span>
tenant <span class="token operator">=</span> params<span class="token punctuation">[</span><span class="token string">&#39;-t&#39;</span><span class="token punctuation">]</span>
username <span class="token operator">=</span> params<span class="token punctuation">[</span><span class="token string">&#39;-u&#39;</span><span class="token punctuation">]</span>
password <span class="token operator">=</span> params<span class="token punctuation">[</span><span class="token string">&#39;-w&#39;</span><span class="token punctuation">]</span>
group <span class="token operator">=</span> params<span class="token punctuation">[</span><span class="token string">&#39;-g&#39;</span><span class="token punctuation">]</span>
url_postfix_base <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&#39;/nacos/v1/cs/configs?group=</span><span class="token interpolation"><span class="token punctuation">{</span>group<span class="token punctuation">}</span></span><span class="token string">&amp;tenant=</span><span class="token interpolation"><span class="token punctuation">{</span>tenant<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>

<span class="token keyword">if</span> username <span class="token operator">!=</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">and</span> password <span class="token operator">!=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">:</span>
    url_postfix_base <span class="token operator">+=</span> <span class="token string-interpolation"><span class="token string">f&#39;&amp;username=</span><span class="token interpolation"><span class="token punctuation">{</span>username<span class="token punctuation">}</span></span><span class="token string">&amp;password=</span><span class="token interpolation"><span class="token punctuation">{</span>password<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>

<span class="token keyword">if</span> url_prefix <span class="token operator">==</span> <span class="token string">&#39;:&#39;</span><span class="token punctuation">:</span>
    error_exit<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> line <span class="token keyword">in</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;../config.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    pair <span class="token operator">=</span> get_pair<span class="token punctuation">(</span>line<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>pair<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>pair<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token keyword">or</span> pair<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">or</span> pair<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
    url_postfix <span class="token operator">=</span> url_postfix_base <span class="token operator">+</span> <span class="token string-interpolation"><span class="token string">f&#39;&amp;dataId=</span><span class="token interpolation"><span class="token punctuation">{</span>urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>quote<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>pair<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&amp;content=</span><span class="token interpolation"><span class="token punctuation">{</span>urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>quote<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>pair<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>
    conn <span class="token operator">=</span> http<span class="token punctuation">.</span>client<span class="token punctuation">.</span>HTTPConnection<span class="token punctuation">(</span>url_prefix<span class="token punctuation">)</span>
    conn<span class="token punctuation">.</span>request<span class="token punctuation">(</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> url_postfix<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>
    res <span class="token operator">=</span> conn<span class="token punctuation">.</span>getresponse<span class="token punctuation">(</span><span class="token punctuation">)</span>
    data <span class="token operator">=</span> res<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> data <span class="token operator">!=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">:</span>
        hasError <span class="token operator">=</span> <span class="token boolean">True</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>pair<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">=</span><span class="token interpolation"><span class="token punctuation">{</span>pair<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span>data <span class="token keyword">if</span> hasError <span class="token keyword">else</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> hasError<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;init nacos config fail.&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;init nacos config finished, please start seata-server.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E0A\u4F20\u7684\u5185\u5BB9\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u7684\u5185\u5BB9\u51C6\u5907" aria-hidden="true">#</a> \u4E0A\u4F20\u7684\u5185\u5BB9\u51C6\u5907</h3><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">transport.type</span><span class="token punctuation">=</span><span class="token value attr-value">TCP</span>
<span class="token key attr-name">transport.server</span><span class="token punctuation">=</span><span class="token value attr-value">NIO</span>
<span class="token key attr-name">transport.heartbeat</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">transport.enableClientBatchSendRequest</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">transport.threadFactory.bossThreadPrefix</span><span class="token punctuation">=</span><span class="token value attr-value">NettyBoss</span>
<span class="token key attr-name">transport.threadFactory.workerThreadPrefix</span><span class="token punctuation">=</span><span class="token value attr-value">NettyServerNIOWorker</span>
<span class="token key attr-name">transport.threadFactory.serverExecutorThreadPrefix</span><span class="token punctuation">=</span><span class="token value attr-value">NettyServerBizHandler</span>
<span class="token key attr-name">transport.threadFactory.shareBossWorker</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">transport.threadFactory.clientSelectorThreadPrefix</span><span class="token punctuation">=</span><span class="token value attr-value">NettyClientSelector</span>
<span class="token key attr-name">transport.threadFactory.clientSelectorThreadSize</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">transport.threadFactory.clientWorkerThreadPrefix</span><span class="token punctuation">=</span><span class="token value attr-value">NettyClientWorkerThread</span>
<span class="token key attr-name">transport.threadFactory.bossThreadSize</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">transport.threadFactory.workerThreadSize</span><span class="token punctuation">=</span><span class="token value attr-value">default</span>
<span class="token key attr-name">transport.shutdown.wait</span><span class="token punctuation">=</span><span class="token value attr-value">3</span>
<span class="token comment"># \u8FD9\u91CC\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A \u8FD9\u6761\u6CE8\u91CA\u8BB0\u5F97\u5220\u4E86</span>
<span class="token key attr-name">service.vgroupMapping.my_test_tx_group</span><span class="token punctuation">=</span><span class="token value attr-value">default</span>
<span class="token key attr-name">service.vgroupMapping.seata-order-service-tx_group</span><span class="token punctuation">=</span><span class="token value attr-value">default</span>
<span class="token key attr-name">service.vgroupMapping.seata-account-service-tx_group</span><span class="token punctuation">=</span><span class="token value attr-value">default</span>
<span class="token key attr-name">service.vgroupMapping.seata-storage-service-tx_group</span><span class="token punctuation">=</span><span class="token value attr-value">default</span>
<span class="token key attr-name">service.default.grouplist</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1:8091</span>
<span class="token key attr-name">service.enableDegrade</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">service.disableGlobalTransaction</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">client.rm.asyncCommitBufferLimit</span><span class="token punctuation">=</span><span class="token value attr-value">10000</span>
<span class="token key attr-name">client.rm.lock.retryInterval</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">client.rm.lock.retryTimes</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
<span class="token key attr-name">client.rm.lock.retryPolicyBranchRollbackOnConflict</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">client.rm.reportRetryCount</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">client.rm.tableMetaCheckEnable</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">client.rm.tableMetaCheckerInterval</span><span class="token punctuation">=</span><span class="token value attr-value">60000</span>
<span class="token key attr-name">client.rm.sqlParserType</span><span class="token punctuation">=</span><span class="token value attr-value">druid</span>
<span class="token key attr-name">client.rm.reportSuccessEnable</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">client.rm.sagaBranchRegisterEnable</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">client.tm.commitRetryCount</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">client.tm.rollbackRetryCount</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">client.tm.defaultGlobalTransactionTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">60000</span>
<span class="token key attr-name">client.tm.degradeCheck</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">client.tm.degradeCheckAllowTimes</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">client.tm.degradeCheckPeriod</span><span class="token punctuation">=</span><span class="token value attr-value">2000</span>
<span class="token comment"># \u914D\u7F6E\u6570\u636E\u6E90\u548C\u5BF9\u5E94\u7684\u9A71\u52A8 \u8FD9\u6761\u6CE8\u91CA\u8BB0\u5F97\u5220\u4E86</span>
<span class="token key attr-name">store.mode</span><span class="token punctuation">=</span><span class="token value attr-value">db</span>
<span class="token key attr-name">store.publicKey</span><span class="token punctuation">=</span>
<span class="token key attr-name">store.file.dir</span><span class="token punctuation">=</span><span class="token value attr-value">file_store/data</span>
<span class="token key attr-name">store.file.maxBranchSessionSize</span><span class="token punctuation">=</span><span class="token value attr-value">16384</span>
<span class="token key attr-name">store.file.maxGlobalSessionSize</span><span class="token punctuation">=</span><span class="token value attr-value">512</span>
<span class="token key attr-name">store.file.fileWriteBufferCacheSize</span><span class="token punctuation">=</span><span class="token value attr-value">16384</span>
<span class="token key attr-name">store.file.flushDiskMode</span><span class="token punctuation">=</span><span class="token value attr-value">async</span>
<span class="token key attr-name">store.file.sessionReloadReadSize</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">store.db.datasource</span><span class="token punctuation">=</span><span class="token value attr-value">druid</span>
<span class="token key attr-name">store.db.dbType</span><span class="token punctuation">=</span><span class="token value attr-value">mysql</span>
<span class="token key attr-name">store.db.driverClassName</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token key attr-name">store.db.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/seata?useUnicode=true&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;rewriteBatchedStatements=true&amp;&amp;serverTimezone=UTC</span>
<span class="token key attr-name">store.db.user</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">store.db.password</span><span class="token punctuation">=</span><span class="token value attr-value">123456</span>
<span class="token key attr-name">store.db.minConn</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>
<span class="token key attr-name">store.db.maxConn</span><span class="token punctuation">=</span><span class="token value attr-value">30</span>
<span class="token key attr-name">store.db.globalTable</span><span class="token punctuation">=</span><span class="token value attr-value">global_table</span>
<span class="token key attr-name">store.db.branchTable</span><span class="token punctuation">=</span><span class="token value attr-value">branch_table</span>
<span class="token key attr-name">store.db.queryLimit</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">store.db.lockTable</span><span class="token punctuation">=</span><span class="token value attr-value">lock_table</span>
<span class="token key attr-name">store.db.maxWait</span><span class="token punctuation">=</span><span class="token value attr-value">5000</span>
<span class="token key attr-name">store.redis.mode</span><span class="token punctuation">=</span><span class="token value attr-value">single</span>
<span class="token key attr-name">store.redis.single.host</span><span class="token punctuation">=</span><span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">store.redis.single.port</span><span class="token punctuation">=</span><span class="token value attr-value">6379</span>
<span class="token key attr-name">store.redis.sentinel.masterName</span><span class="token punctuation">=</span>
<span class="token key attr-name">store.redis.sentinel.sentinelHosts</span><span class="token punctuation">=</span>
<span class="token key attr-name">store.redis.maxConn</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>
<span class="token key attr-name">store.redis.minConn</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">store.redis.maxTotal</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">store.redis.database</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>
<span class="token key attr-name">store.redis.password</span><span class="token punctuation">=</span>
<span class="token key attr-name">store.redis.queryLimit</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">server.recovery.committingRetryPeriod</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>
<span class="token key attr-name">server.recovery.asynCommittingRetryPeriod</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>
<span class="token key attr-name">server.recovery.rollbackingRetryPeriod</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>
<span class="token key attr-name">server.recovery.timeoutRetryPeriod</span><span class="token punctuation">=</span><span class="token value attr-value">1000</span>
<span class="token key attr-name">server.maxCommitRetryTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">-1</span>
<span class="token key attr-name">server.maxRollbackRetryTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">-1</span>
<span class="token key attr-name">server.rollbackRetryTimeoutUnlockEnable</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">client.undo.dataValidation</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">client.undo.logSerialization</span><span class="token punctuation">=</span><span class="token value attr-value">jackson</span>
<span class="token key attr-name">client.undo.onlyCareUpdateColumns</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">server.undo.logSaveDays</span><span class="token punctuation">=</span><span class="token value attr-value">7</span>
<span class="token key attr-name">server.undo.logDeletePeriod</span><span class="token punctuation">=</span><span class="token value attr-value">86400000</span>
<span class="token key attr-name">client.undo.logTable</span><span class="token punctuation">=</span><span class="token value attr-value">undo_log</span>
<span class="token key attr-name">client.undo.compress.enable</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">client.undo.compress.type</span><span class="token punctuation">=</span><span class="token value attr-value">zip</span>
<span class="token key attr-name">client.undo.compress.threshold</span><span class="token punctuation">=</span><span class="token value attr-value">64k</span>
<span class="token key attr-name">log.exceptionRate</span><span class="token punctuation">=</span><span class="token value attr-value">100</span>
<span class="token key attr-name">transport.serialization</span><span class="token punctuation">=</span><span class="token value attr-value">seata</span>
<span class="token key attr-name">transport.compressor</span><span class="token punctuation">=</span><span class="token value attr-value">none</span>
<span class="token key attr-name">metrics.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
<span class="token key attr-name">metrics.registryType</span><span class="token punctuation">=</span><span class="token value attr-value">compact</span>
<span class="token key attr-name">metrics.exporterList</span><span class="token punctuation">=</span><span class="token value attr-value">prometheus</span>
<span class="token key attr-name">metrics.exporterPrometheusPort</span><span class="token punctuation">=</span><span class="token value attr-value">9898</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u5E93\u51C6\u5907-\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u51C6\u5907-\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u6570\u636E\u5E93\u51C6\u5907\uFF08\u5BA2\u6237\u7AEF\uFF09</h2><p>\u6700\u7EC8\u5E94\u8BE5\u548C\u4E1A\u52A1\u5E93\u518D\u4E00\u4E2A\u5E93\u5185</p><p><img src="`+t+'" alt="image-20220114225612986" loading="lazy"></p><p>\u5982\u679C\u6709\u591A\u4E2A\u4E1A\u52A1\u5E93 \u9700\u8981\u5206\u522B\u521B\u5EFA</p><p><img src="'+p+`" alt="image-20220114225637546" loading="lazy"></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- for AT mode you must to init this sql for you business database. the seata server not need it.</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>undo_log<span class="token punctuation">\`</span></span>
<span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">\`</span>branch_id<span class="token punctuation">\`</span></span>     <span class="token keyword">BIGINT</span>       <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;branch transaction id&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>xid<span class="token punctuation">\`</span></span>           <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;global transaction id&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>context<span class="token punctuation">\`</span></span>       <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;undo_log context,such as serialization&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>rollback_info<span class="token punctuation">\`</span></span> <span class="token keyword">LONGBLOB</span>     <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;rollback info&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>log_status<span class="token punctuation">\`</span></span>    <span class="token keyword">INT</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span>      <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;0:normal status,1:defense status&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>log_created<span class="token punctuation">\`</span></span>   <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>  <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;create datetime&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>log_modified<span class="token punctuation">\`</span></span>  <span class="token keyword">DATETIME</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>  <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;modify datetime&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>ux_undo_log<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>xid<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>branch_id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span>
  <span class="token keyword">AUTO_INCREMENT</span> <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span> <span class="token operator">=</span> utf8 <span class="token keyword">COMMENT</span> <span class="token operator">=</span><span class="token string">&#39;AT transaction mode undo table&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF</h2><h3 id="\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56" aria-hidden="true">#</a> \u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>seata.version</span><span class="token punctuation">&gt;</span></span>1.4.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>seata.version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--        \u8FD9\u91CC\u662F\u53C2\u8003\u5B98\u65B9\u6587\u6863\uFF0C\u5F15\u5165\u548C\u6211\u4EEC\u4F7F\u7528\u7684seata server\u76F8\u540C\u7248\u672C\u7684seata \u66FF\u6362\u6389spring-cloud-alibaba-seata\u81EA\u5E26\u7684--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${seata.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>


    <span class="token comment">&lt;!--        Nacos--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--        \u5FAE\u670D\u52A1\u4E4B\u95F4\u7684\u8C03\u7528--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-loadbalancer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>


    <span class="token comment">&lt;!--        \u57FA\u672C\u7EC4\u4EF6--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--        \u81EA\u5DF1\u7684api--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>cloud-api-commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">2001</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>order<span class="token punctuation">-</span>service
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> myserver<span class="token punctuation">:</span><span class="token number">8435</span>
        <span class="token key atrule">username</span><span class="token punctuation">:</span> nacos
        <span class="token key atrule">password</span><span class="token punctuation">:</span> nacos
        <span class="token comment"># \u8FD9\u91CC\u7684\u547D\u540D\u7A7A\u95F4\u65E0\u6240\u8C13 \u586B\u5565\u90FD\u53EF\u4EE5 \u8DDFseata\u6CA1\u5173\u7CFB</span>
 <span class="token comment">#       namespace: 029fa2f3-e90a-400c-91ac-7f1b83dc4785</span>
  <span class="token comment">#    alibaba:</span>
  <span class="token comment">#      seata:</span>
  <span class="token comment"># \u8001\u7248\u672C\u8981\u7528\u8FD9\u79CD\u65B9\u5F0F\u5F00\u542F\uFF080.9.x\uFF09 \u65B0\u7248\u672C\u76F4\u63A5\u7528\u4E0B\u9762\u90A3\u79CD</span>
  <span class="token comment">#        tx-service-group: \${spring.application.name}-tx_group</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/seata_order<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=UTF-8&amp;autoReconnect=true&amp;rewriteBatchedStatements=true&amp;&amp;serverTimezone=UTC</span>
<span class="token comment"># \u8FD9\u91CC\u662F\u5F00\u4E0Blog\u8BB0\u5F55\u4E0B\u56DE\u6EDA</span>
<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">io</span><span class="token punctuation">:</span>
      <span class="token key atrule">seata</span><span class="token punctuation">:</span> info
<span class="token key atrule">seata</span><span class="token punctuation">:</span>
  <span class="token comment"># \u8FD9\u91CC\u914D\u7F6E\u5E94\u7528\u7A0B\u5E8FID\uFF0C\u548C\u6211\u4EEC\u5F53\u524D\u670D\u52A1\u5728Nacos\u6CE8\u518C\u7684\u4E00\u81F4</span>
  <span class="token key atrule">application-id</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span>
  <span class="token comment"># \u8FD9\u91CC\u662F\u9009\u62E9\u5206\u7EC4 \u548C\u4E4B\u524D\u5728file.conf\u5185\u6CE8\u518C\u7684service\u4E00\u81F4\uFF08\u6211\u4E4B\u524D\u6CE8\u518C\u7684\u662Fseata-order-service-tx_group=default \uFF09</span>
  <span class="token key atrule">tx-service-group</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span><span class="token punctuation">-</span>tx_group
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">vgroup-mapping</span><span class="token punctuation">:</span>
      <span class="token comment"># \u8FD9\u91CC \u662F\u914D\u7F6E\u5206\u7EC4\u548C\u670D\u52A1\u7684\u6620\u5C04\u5173\u7CFB \u6211\u4EEC\u4E4B\u524D\u628A\u4E4B\u524D\u5199\u7684seata-order-service-tx_group=default\u642C\u8FC7\u6765\u5C31\u884C</span>
      <span class="token key atrule">seata-order-service-tx_group</span><span class="token punctuation">:</span> default
  <span class="token comment"># \u914D\u7F6E\u901A\u8BAF</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token comment"># \u4E0B\u9762\u8FD9\u91CC \u914D\u7F6E\u6211\u4EEC\u5728seata-server\u5185\u914D\u7F6E\u7684\u5185\u5BB9\u5373\u53EF</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> nacos
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">application</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.cloud.nacos.discovery.server<span class="token punctuation">-</span>addr<span class="token punctuation">}</span>
      <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">&quot;SEATA_GROUP&quot;</span>
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token string">&quot;029fa2f3-e90a-400c-91ac-7f1b83dc4785&quot;</span>
      <span class="token key atrule">username</span><span class="token punctuation">:</span> <span class="token string">&quot;nacos&quot;</span>
      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;nacos&quot;</span>

<span class="token comment"># \u6742\u9879</span>
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token important">*:/mapper/**/*.xml</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
<span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span>
        <span class="token comment">#\u5EFA\u7ACB\u8FDE\u63A5\u6240\u7528\u7684\u65F6\u95F4\uFF0C\u9002\u7528\u4E8E\u7F51\u7EDC\u72B6\u51B5\u6B63\u5E38\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E24\u7AEF\u8FDE\u63A5\u6240\u9700\u8981\u7684\u65F6\u95F4</span>
        <span class="token key atrule">ConnectTimeOut</span><span class="token punctuation">:</span> <span class="token number">5000</span>
        <span class="token comment">#\u6307\u5EFA\u7ACB\u8FDE\u63A5\u540E\u4ECE\u670D\u52A1\u7AEF\u8BFB\u53D6\u5230\u53EF\u7528\u8D44\u6E90\u6240\u7528\u7684\u65F6\u95F4 \u8FD9\u91CC\u662F\u4E3A\u4E86\u7B49\u4E0B\u5206\u5E03\u5F0F\u4E8B\u52A1\u505A\u51C6\u5907</span>
        <span class="token key atrule">ReadTimeOut</span><span class="token punctuation">:</span> <span class="token number">5000</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E3B\u542F\u52A8\u7C7B\u5173\u95ED\u81EA\u52A8\u52A0\u8F7D\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u542F\u52A8\u7C7B\u5173\u95ED\u81EA\u52A8\u52A0\u8F7D\u6570\u636E\u5E93" aria-hidden="true">#</a> \u4E3B\u542F\u52A8\u7C7B\u5173\u95ED\u81EA\u52A8\u52A0\u8F7D\u6570\u636E\u5E93</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
@EnableFeignClients
@EnableDiscoveryClient
@MapperScan(value = &quot;com.Project.mapper&quot;)
public class OrderService2001Application {
    public static void main(String[] args) {
        SpringApplication.run(OrderService2001Application.class, args);
    }
}
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u4E49\u6570\u636E\u6E90" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6570\u636E\u6E90" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6570\u636E\u6E90</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span></span><span class="token class-name">Project</span><span class="token punctuation">.</span>config<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>spring<span class="token punctuation">.</span></span><span class="token class-name">MybatisSqlSessionFactoryBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSessionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span></span><span class="token class-name">SpringManagedTransactionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>io<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">PathMatchingResourcePatternResolver</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Amayakite
 * <span class="token keyword">@version</span> 1.0.0
 * <span class="token keyword">@date</span> 2022/1/13 21:54
 * <span class="token keyword">@description</span> \u81EA\u5B9A\u4E49\u6570\u636E\u6E90
 * <span class="token keyword">@since</span> 1.8
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSourceProxyConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${mybatis-plus.mapper-locations}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> mapperLocations<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">druidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">SqlSessionFactory</span> <span class="token function">sqlSessionFactoryBean</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSource<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">MybatisSqlSessionFactoryBean</span> sqlSessionFactoryBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisSqlSessionFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setMapperLocations</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PathMatchingResourcePatternResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">getResources</span><span class="token punctuation">(</span>mapperLocations<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setTransactionFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SpringManagedTransactionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>\u5728\u9700\u8981\u5F00\u5206\u5E03\u5F0F\u7684\u65B9\u6CD5\u4E0A\u52A0\u4E2A\u6CE8\u89E3\u5373\u53EF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Service
@Slf4j
public class OrderServiceImpl implements OrderService {

    @Resource
    OrderMapper orderMapper;

    @Resource
    AccountService accountService;

    @Resource
    StorageService storageService;


    private static final Integer SUCCESS_CODE = 200;

    /**
     * \u521B\u5EFA\u8BA2\u5355-\u300B\u8C03\u7528\u5E93\u5B58\u6263\u51CF\u5E93\u5B58-\u300B\u8C03\u7528\u8D26\u6237\u670D\u52A1\u6263\u51CF\u8D26\u6237\u4F59\u989D-\u300B\u4FEE\u6539\u8BA2\u5355\u72B6\u6001
     * 444 ERR 200 Success
     *
     * @param order
     */
    @GlobalTransactional(name = &quot;fsp-create-order&quot;, rollbackFor = Exception.class)
    @Override
    public String create(TOrder order) {
        log.info(&quot;\u5F00\u59CB\u65B0\u5EFA\u8BA2\u5355&quot;);
       orderMapper.create(order);
        log.info(&quot;orderID:{}&quot;, order.getId());
//        TODO
        log.info(&quot;\u8BA2\u5355\u5FAE\u670D\u52A1\u5F00\u59CB\u8C03\u7528\u5E93\u5B58\u5FAE\u670D\u52A1\u8FDB\u884C\u6263\u51CF---START&quot;);
        CommonResult&lt;Integer&gt; decrease = storageService.decrease(order.getProductId(), order.getCount());
        if (decrease.getCode().equals(SUCCESS_CODE)) {
            log.info(&quot;\u8BA2\u5355\u5FAE\u670D\u52A1\u5F00\u59CB\u8C03\u7528\u5E93\u5B58\u5FAE\u670D\u52A1\u8FDB\u884C\u6263\u51CF----END&quot;);
            log.info(&quot;\u8BA2\u5355\u5FAE\u670D\u52A1\u5F00\u59CB\u8C03\u7528\u8D26\u6237\u5FAE\u670D\u52A1\u8FDB\u884C\u6263\u51CF---START&quot;);
            CommonResult&lt;Integer&gt; decreaseMoney = accountService.decrease(order.getUserId(), order.getMoney());
            if (decreaseMoney.getCode().equals(SUCCESS_CODE)) {
                log.info(&quot;\u8BA2\u5355\u5FAE\u670D\u52A1\u5F00\u59CB\u8C03\u7528\u8D26\u6237\u5FAE\u670D\u52A1\u8FDB\u884C\u6263\u51CF----END&quot;);
                log.info(&quot;\u8BA2\u5355\u5FAE\u670D\u52A1\u5F00\u59CB\u66F4\u65B0\u8BA2\u5355\u72B6\u6001---START&quot;);
                orderMapper.update(order.getUserId(), 0);
                log.info(&quot;\u8BA2\u5355\u5FAE\u670D\u52A1\u5F00\u59CB\u66F4\u65B0\u8BA2\u5355\u72B6\u6001----END&quot;);
                log.info(&quot;\u4E0B\u8BA2\u5355\u7ED3\u675F\u4E86 O(\u2229_\u2229)O\u54C8\u54C8~&quot;);
                return &quot;\u4E0B\u8BA2\u5355\u6210\u529F&quot;;
            }
            return &quot;\u8D26\u6237\u6263\u51CF\u5931\u8D25&quot;;
        }
        return &quot;\u5E93\u5B58\u6263\u51CF\u5931\u8D25&quot;;
    }
}

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),c=[o];function i(u,r){return s(),a("div",null,c)}var v=n(l,[["render",i],["__file","14-1-Seata\u90E8\u7F72\u5168\u6D41\u7A0B.html.vue"]]);export{v as default};
