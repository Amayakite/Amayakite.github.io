import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as i,c as l,a as n,b as e,e as t,d as s}from"./app.ad7a4a8c.js";var c="/images/Netty/03-Netty-GoogleProtobuf/image-20220517225915934.png",u="/images/Netty/03-Netty-GoogleProtobuf/image-20220517231048311.png",r="/images/Netty/03-Netty-GoogleProtobuf/image-20220517231157320.png",d="/images/Netty/03-Netty-GoogleProtobuf/image-20220517233144250.png",k="/images/Netty/03-Netty-GoogleProtobuf/image-20220517234742730.png",v="/images/Netty/03-Netty-GoogleProtobuf/image-20220518214443747.png",m="/images/Netty/03-Netty-GoogleProtobuf/image-20220518214542916.png";const b={},g=t('<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p>\u8FD9\u91CC\u4E3B\u8981\u8BF4\u660E\u4E0B\u548B\u5728Netty\u4E2D\u4F7F\u7528\u4E00\u4E2A\u7531Google\u5F00\u53D1\u7684\u9AD8\u6027\u80FD\u534F\u8BAE Google ProtoBuf(\u57FA\u4E8ETCP)</p><p>\u5509\uFF0C\u6700\u8FD1\u627E\u5DE5\u4F5C\u6709\u70B9\u96BE\u53D7\uFF0C\u5B66\u5386\u4E0D\u591F\u505A\u5565\u90FD\u662F\u786C\u4F24..\u627E\u4E86\u51E0\u4E2A\u6708\u90FD\u6CA1\u516C\u53F8\u8981\uFF082022\u5E745\u670817\u65E522:56:16\uFF09\uFF0C\u51C6\u5907\u8001\u8001\u5B9E\u5B9E\u7684\u518D\u5B66\u5B66\u627E\u627E\uFF0C\u4E0D\u884C\u7684\u8BDD\u53EF\u80FD\u771F\u5F97\u8FDB\u5382\u62E7\u87BA\u4E1D\u4E86</p><h2 id="\u7F16\u7801\u548C\u89E3\u7801\u7684\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7801\u548C\u89E3\u7801\u7684\u4ECB\u7ECD" aria-hidden="true">#</a> \u7F16\u7801\u548C\u89E3\u7801\u7684\u4ECB\u7ECD</h2><p>\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u5F97\u5148\u4E86\u89E3\u4E0B\u8FD9\u73A9\u610F</p><ul><li>\u5728\u7F16\u5199\u7F51\u7EDC\u5E94\u7528\u7684\u65F6\u5019\uFF0C\u56E0\u4E3A\u6570\u636E\u5728\u7F51\u7EDC\u4F20\u8F93\u4E2D\u90FD\u662F\u4F7F\u7528\u7684\u4E8C\u8FDB\u5236\u5B57\u8282\u7801\u6570\u636E\uFF0C\u5728\u53D1\u9001\u6570\u636E\u65F6\u5C31\u9700\u8981\u7F16\u7801\uFF0C\u63A5\u6536\u6570\u636E\u7684\u65F6\u5019\u5C31\u8981\u89E3\u7801</li><li>codec(\u89E3\u7801\u5668)\u7684\u7EC4\u6210\u90E8\u5206\u6709\u4E24\u4E2A <ul><li>decoder\u89E3\u7801\u5668\uFF0C\u8D1F\u8D23\u628A\u5B57\u8282\u7801\u6570\u636E\u8F6C\u6362\u6210\u4E1A\u52A1\u6570\u636E</li><li>encoder\u7F16\u7801\u5668\uFF0C\u8D1F\u8D23\u628A\u4E1A\u52A1\u6570\u636E\u8F6C\u6362\u6210\u5B57\u8282\u7801\u6570\u636E</li></ul></li></ul><p><img src="'+c+'" alt="image-20220517225915934" loading="lazy"></p><ul><li>Netty\u81EA\u8EAB\u63D0\u4F9B\u4E86\u4E00\u4E9Bcodec\uFF08\u89E3\u7801\u5668\uFF09\uFF0C\u4F8B\u5982\uFF1A <ul><li>StringEncoder\uFF0C\u5BF9\u5B57\u7B26\u4E32\u7F16\u7801\uFF0CStringDecoder\u89E3\u7801</li><li>ObjectEncoder\uFF0C\u5BF9Java\u5BF9\u8C61\uFF0CObjectDecoder\u89E3\u7801</li><li>\u2026\u2026</li></ul></li><li>Netty\u81EA\u5E26\u7684ObjectEncoder\u53EF\u4EE5\u5B9E\u73B0\u5BF9POJO\u5BF9\u8C61\u4E4B\u7C7B\u7684\u7F16\u7801\u89E3\u7801\uFF0C\u5E95\u5C42\u4F7F\u7528\u7684\u662FJDK\u5E8F\u5217\u5316\uFF0C\u8FD9\u4E2A\u4E1C\u897F\u672C\u8EAB\u6548\u7387\u5E76\u4E0D\u9AD8\uFF0C\u5B58\u5728\u5982\u4E0B\u95EE\u9898 <ul><li>\u65E0\u6CD5\u8DE8\u8BED\u8A00</li><li>\u5E8F\u5217\u5316\u540E\u7684\u4F53\u79EF\u592A\u5927\uFF0C\u662F\u4E8C\u8FDB\u5236\u7F16\u7801\u76845\u500D\u591A</li><li>\u5E8F\u5217\u5316\u6027\u80FD\u592A\u4F4E</li></ul></li></ul><p>\u56E0\u6B64\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u6709\u4E00\u4E2A\u5B8C\u7F8E\u7684\u5F00\u6E90\u7684\u89E3\u51B3\u65B9\u6848\uFF1AGoogle Protobuf</p><h2 id="protobuf" tabindex="-1"><a class="header-anchor" href="#protobuf" aria-hidden="true">#</a> Protobuf</h2><h3 id="\u57FA\u672C\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4ECB\u7ECD" aria-hidden="true">#</a> \u57FA\u672C\u4ECB\u7ECD</h3>',11),h=n("li",null,[s("\u662FGoogle\u53D1\u5E03\u7684\u5F00\u6E90\u9879\u76EE\uFF0C\u5168\u79F0\uFF1AGoogle Protobuf Buffers\uFF0C\u662F\u4E00\u79CD\u9AD8\u6548\u7684\u7ED3\u6784\u5316\u6570\u636E\u5B58\u50A8\u683C\u5F0F\uFF0C\u53EF\u4EE5\u7528\u4E8E\u7ED3\u6784\u5316\u6570\u636E\u7684\u4E32\u884C\u5316\uFF0C\u6216\u8005\u8BF4\u5E8F\u5217\u5316\uFF0C\u4ED6\u5F88\u9002\u5408\u505A\u6570\u636E\u5B58\u50A8\u6216\u8005"),n("strong",null,"RPC\u6570\u636E\u4EA4\u6362\u683C\u5F0F"),n("ul",null,[n("li",null,"RPC-\u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528(remote procedure call)\uFF0CNetty\u6CA1\u6709RPC\u662F\u6CA1\u6709\u7075\u9B42\u5C31\u50CF\u662F\u897F\u65B9\u6CA1\u6709\u8036\u8DEF\u6492\u51B7\uFF0C\u4E4B\u540E\u5B66Dubbo\u7684\u65F6\u5019\u4F1A\u66F4\u6DF1\u523B\u7684\u4E86\u89E3\u5230RPC\u8C03\u7528")])],-1),y=n("li",null,[s("ProtocolBuf\u662F\u4EE5"),n("strong",null,"message"),s("\u7684\u65B9\u5F0F\u6765\u7BA1\u7406\u6570\u636E\u7684")],-1),f=n("li",null,"\u652F\u6301\u8DE8\u5E73\u53F0\uFF0C\u8DE8\u8BED\u8A00\uFF0C\u76EE\u524D\u652F\u6301\u7EDD\u5927\u90E8\u5206\u8BED\u8A00\uFF0C\u4F8B\u5982C++\uFF0CJava\uFF0CC#\uFF0CPython\uFF0CGolang(\u9700\u8981\u989D\u5916\u5B89\u88C5\u89E3\u7801\u5668)\uFF0Cjavascript\u2026\u2026",-1),w=s("\u8BED\u8A00\u6307\u5357<"),S={href:"https://developers.google.cn/protocol-buffers/docs/proto3",target:"_blank",rel:"noopener noreferrer"},x=s("Language Guide (proto3) | Protocol Buffers | Google Developers"),C=s("> "),_=n("ul",null,[n("li",null,"\u53EF\u80FD\u9700\u8981\u6302\u4EE3\u7406")],-1),E=n("li",null,"\u5F88\u591A\u9879\u76EE\u4F7F\u7528\u4E86\u5B83\uFF0C\u4F8B\u5982Dubbo\uFF0CSeata\u7B49\uFF0C\u7528\u5B83\u7684\u539F\u56E0\u662F\u56E0\u4E3A\u5B83\u5BF9\u6570\u636E\u7684\u6781\u81F4\u538B\u7F29",-1),q=t('<p>\u5B83\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u540C\u65F6\u7C7B\u578B\u548C\u4E0D\u7528\u7684\u8BED\u8A00\u6709\u4E0D\u540C\u7684\u5BF9\u5E94\uFF08\u5E76\u4E0D\u9700\u8981\u53BB\u8BB0\uFF0C\u6709\u81EA\u52A8\u8F6C\u6362\u5DE5\u5177\uFF09</p><p><img src="'+u+'" alt="image-20220517231048311" loading="lazy"></p><p><img src="'+r+`" alt="image-20220517231157320" loading="lazy"></p><h2 id="protobuf-\u5FEB\u901F\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#protobuf-\u5FEB\u901F\u5165\u95E8" aria-hidden="true">#</a> Protobuf-\u5FEB\u901F\u5165\u95E8</h2><blockquote><p>\u9700\u6C42\uFF1A</p><ol><li>\u5BA2\u6237\u7AEF\u53EF\u4EE5\u53D1\u9001\u4E00\u4E2AStudent Pojo\u5BF9\u8C61\u5230\u670D\u52A1\u5668\uFF08\u901A\u8FC7protobuf\uFF09</li><li>\u670D\u52A1\u7AEF\u80FD\u63A5\u6536Student Pojo\u5BF9\u8C61\uFF0C\u5E76\u663E\u793A\u4FE1\u606F\uFF08\u901A\u8FC7protobuf\uFF09</li><li>\u5BA2\u6237\u7AEF\u5206\u522B\u4F7F\u7528java\u548Cgolang\u6765\u5B8C\u6210</li></ol></blockquote><h3 id="\u4F9D\u8D56\u548Cdomain\u7684\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u548Cdomain\u7684\u751F\u6210" aria-hidden="true">#</a> \u4F9D\u8D56\u548CDomain\u7684\u751F\u6210</h3><p>Java\u7684\u4F9D\u8D56\u4E3A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.google.protobuf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>protobuf-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.20.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u521B\u5EFA\u6587\u4EF6<code>Student.proto</code>\uFF0C\u5E76\u4E14\u786E\u4FDDIEDA\u6216\u8005Vscode\u4E2D\u5B89\u88C5\u4E86<code>protocol Buffers</code>\u4E4B\u7C7B\u7684\u63D2\u4EF6</p><div class="language-protobuf ext-protobuf line-numbers-mode"><pre class="language-protobuf"><code><span class="token comment">//\u58F0\u660E\u534F\u8BAE\u7248\u672C\u53F7\uFF0CProto\u76EE\u524D\u67092\u548C3\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u90FD\u662F\u58F0\u660E3</span>
<span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u58F0\u660E\u5BFC\u51FA\u65F6\u5019\u7684\u62A5\u540D\uFF08Java \u5176\u4ED6\u8BED\u8A00\u5DEE\u4E0D\u591A\u4E5F\u662F\u8FD9\u79CD\u5199\u6CD5\uFF09</span>
<span class="token keyword">option</span> java_package <span class="token operator">=</span> <span class="token string">&quot;com.project.codec&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//\u58F0\u660E\u5BFC\u51FAJava\u65F6\u7684\u5916\u90E8\u7C7B\u540D\uFF0C\u540C\u65F6\u4E5F\u662F\u6587\u4EF6\u540D</span>
<span class="token keyword">option</span> java_outer_classname <span class="token operator">=</span> <span class="token string">&quot;StudentEntity&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//\u5B9A\u4E49message</span>
<span class="token comment">//\u8FD9\u91CC\u58F0\u660E\u7684Student\u4F1A\u5728StudentEntity\u5916\u90E8\u7C7B\u751F\u6210\u4E00\u4E2A\u5185\u90E8\u7C7BStudent,\u8FD9\u5C31\u662F\u6211\u4EEC\u771F\u6B63\u53D1\u9001\u7684POJO\u5BF9\u8C61</span>
<span class="token keyword">message</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token comment">//  \u5BF9\u5E94\u7684\u662Fjava\u4E2D\u7684 long StudentEntity.Student.id</span>
  <span class="token comment">//  \u8FD9\u91CC\u76841\u8868\u793A\u7684\u662F\u5C5E\u6027\u7684\u5E8F\u53F7\uFF0C\u4E0D\u662Fvalue</span>
  <span class="token builtin">int64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">int32</span> age <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\uFF0C\u6211\u4EEC\u8981\u53BB\u5B83\u7684\u4ED3\u5E93\u5185\u4E0B\u8F7D\u597D\u7F16\u8BD1\u5668</p>`,11),P={href:"https://github.com/protocolbuffers/protobuf/releases",target:"_blank",rel:"noopener noreferrer"},j=s("Releases \xB7 protocolbuffers/protobuf (github.com)"),N=s("\u561B\u53CD\u6B63\u4E0B\u8F7D\u5BF9\u5E94\u7CFB\u7EDF\u7684\u7248\u672C\u5373\u53EF\uFF0C\u8FD9\u91CC\u653E\u4E00\u4E2A\u6211\u7684"),H={href:"https://gh2.yanqishui.work/https://github.com/protocolbuffers/protobuf/releases/download/v21.0-rc1/protoc-21.0-rc-1-win64.zip",target:"_blank",rel:"noopener noreferrer"},I=s("\u4E0B\u8F7D\u94FE\u63A5"),G=t('<p><img src="'+d+`" alt="image-20220517233144250" loading="lazy"></p><p>\u7136\u540E\u628Abin\u4E2D\u7684\u5185\u5BB9\u4E22\u5230path\u5373\u53EF\uFF08\u5982\u679C\u4F60\u7528\u8FC7golang\u7684\u8BDD\u5EFA\u8BAE\u662F\u4E22\u5728gopath/bin\u4E2D\uFF0C\u65B9\u4FBF\u7BA1\u7406\u4E9B..\uFF09</p><p>\u63A5\u7740\u5728\u521A\u521A\u7F16\u5199\u6587\u4EF6\u7684\u4F4D\u7F6E\u6253\u5F00shell\uFF0C\u8F93\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>protoc --java_out<span class="token operator">=</span>. .<span class="token punctuation">\\</span>Student.proto
<span class="token comment"># \u6CE8\u610F out=\u540E\u9762\u6709\u4E2A\u70B9 \u662F\u8F93\u51FA\u76EE\u5F55 \u53EF\u4EE5\u66FF\u6362\u6210\u4E0A\u7EA7\u4E4B\u7C7B\u7684 \u8FD9\u4E2A\u968F\u610F</span>
<span class="token comment"># \u5F53\u7136 \u4F60\u53EF\u4EE5\u66FF\u6362\u6210--go_out\u6765\u53D8\u6210go\uFF08\u8981\u5728proto\u5185\u52A0\u4E0Aoption go_package = &quot;com.project.codec&quot;;\uFF09\u6216\u8005\u5176\u4ED6\u8BED\u8A00\uFF0C\u8FD9\u4E2A\u968F\u4F60\u5FC3\u610F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u4F60\u5C31\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2AJava\u6587\u4EF6\uFF0C\u5E76\u4E14\u5B83\u7684\u6587\u4EF6\u5934\u8FD8\u5199\u4E86\u4E00\u4E9B\u8BDD</p><p><img src="`+k+`" alt="image-20220517234742730" loading="lazy"></p><blockquote><p><strong>\u7531\u534F\u8BAE\u7F13\u51B2\u533A\u7F16\u8BD1\u5668\u751F\u6210\u3002\u4E0D\u8981\u7F16\u8F91!\u6765\u6E90:Student.proto</strong></p><p>\u4E5F\u5C31\u662F\u8BF4\u6211\u4EEC\u8981\u7528\u7684\u65F6\u5019\u76F4\u63A5\u8C03\u7528\u5B83\u5373\u53EF\uFF0C<strong>\u4E0D\u8981\u4FEE\u6539</strong>\u5B83\u751F\u6210\u7684\u5185\u5BB9</p></blockquote><p>\u800C\u4E14\u8FD9\u5B9E\u4F53\u7C7B\u4E03\u516B\u767E\u884C\uFF0Cmd\u5982\u4F55\u628A\u4E00\u4E2A\u5B9E\u4F53\u7C7B\u5199\u7684\u6211\u770B\u4E0D\u61C2\u7CFB\u5217</p><h3 id="\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF</h3><p>\u8FD9\u91CC\u603B\u7684\u6765\u8BF4\u4E5F\u662F\u56FA\u5B9A\u5199\u6CD5\uFF0Cmain\u4E2D\u52A0\u5165\u4E2A\u7F16\u7801\u5668\uFF08\u89E3\u7801\u5668\u4E4B\u540E\u53EF\u4EE5\u5728\u670D\u52A1\u7AEF\u770B\u5230\uFF09\uFF0C\u7136\u540E\u8C03\u7528\u56FA\u5B9A\u7C7B\u7684build\u521B\u5EFA\u5BF9\u8C61\u518D\u7528</p><blockquote><p>Main</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.project.codec;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.protobuf.ProtobufEncoder;

/**
 * @author Amayakite
 * @version 1.0
 * @date 2022\u5E7405\u670811\u65E517\u65F649\u520648\u79D2
 * @description TODO
 */
public class ProtoClient {
    public static void main(String[] args) {
        NioEventLoopGroup eventExecutors = new NioEventLoopGroup();

        try {
            Bootstrap bootstrap = new Bootstrap();
            bootstrap
                    .group(eventExecutors)
                    .channel(NioSocketChannel.class)
                    .handler(new ChannelInitializer&lt;SocketChannel&gt;() {
                        @Override
                        protected void initChannel(SocketChannel ch) throws Exception {
                            ChannelPipeline pipeline = ch.pipeline();
                            // \u52A0\u5165\u7F16\u7801\u5668\uFF08\u91CD\u8981\uFF0C\u53EF\u4EE5\u8BA9\u6211\u4EEC\u76F4\u63A5\u53D1\u9001ProtoBuf\u7684\u5BF9\u8C61\u800C\u4E0D\u9700\u8981\u505A\u5176\u4ED6\u64CD\u4F5C\uFF09
                            pipeline.addLast(new ProtobufEncoder());
                            pipeline.addLast(new ProtoClientHandler());
                        }
                    });
            System.out.println(&quot;\u5BA2\u6237\u7AEF\u51C6\u5907\u5B8C\u6BD5&quot;);

            ChannelFuture localhost = bootstrap.connect(&quot;localhost&quot;, 8080).sync();
            localhost.channel().closeFuture().sync();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            eventExecutors.shutdownGracefully();
        }


    }
}

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u662FHandler</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.project.codec;

import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;

/**
 * @author Amayakite
 * @version 1.0
 * @date 2022\u5E7405\u670811\u65E518\u65F628\u520634\u79D2
 * @description TODO
 */
public class ProtoClientHandler extends ChannelInboundHandlerAdapter {
    /**
     * \u5F53\u901A\u9053\u51C6\u5907\u5C31\u7EEA\u65F6\u89E6\u53D1\u8BE5\u65B9\u6CD5\uFF08\u548C\u670D\u52A1\u7AEF\u8FDE\u63A5\u6210\u529F\u65F6\uFF09
     *
     * @param ctx
     * @throws Exception
     */
    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        System.out.println(&quot;\u5BA2\u6237\u7AEF\u5DF2\u8FDE\u63A5\uFF0Cctx\u5BF9\u8C61\uFF1A&quot; + ctx);
        System.out.println(&quot;\u670D\u52A1\u7AEF\u5730\u5740\u4E3A\uFF1A&quot; + ctx.channel().remoteAddress());
        // \u4E0B\u9762\u901A\u8FC7Message\u7C7B\u4E2D\u7684newBuild()...build()\u6765\u6784\u5EFA\u4E00\u4E2A\u5BF9\u8C61 \u56FA\u5B9A\u5199\u6CD5
        StudentEntity.Student student = StudentEntity.Student.newBuilder().setId(1).setName(&quot;\u5F20\u4E09&quot;).setAge(18).build();
//        ctx.writeAndFlush(Unpooled.copiedBuffer(student.toByteArray()));
//        \u4E0B\u9762\u548C\u4E0A\u9762\u7684\u6548\u679C\u4E00\u6837\uFF08\u5E94\u8BE5\uFF0C\u53CD\u6B63\u6211\u4E24\u79CD\u90FD\u6210\u529F\u4E86\uFF09
        ctx.writeAndFlush(student);
        System.out.println(&quot;\u5BA2\u6237\u7AEF\u53D1\u9001\u6D88\u606F\u6210\u529F&quot;);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        ctx.close();
    }
}

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF" aria-hidden="true">#</a> \u670D\u52A1\u7AEF</h3><p>\u4E3B\u8981\u662F\u89E3\u7801\u5668\u5F97\u597D\u597D\u8BBE\u7F6E\uFF0C\u7136\u540E\u5C31\u80FD\u591F\u6B63\u786E\u83B7\u53D6\u5BF9\u8C61\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.project.codec;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.ChannelPipeline;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.protobuf.ProtobufDecoder;

/**
 * @author Amayakite
 * @version 1.0
 * @date 2022\u5E7405\u670811\u65E517\u65F601\u520632\u79D2
 * @description TODO
 */
public class ProtoServer {
    public static void main(String[] args) {

        NioEventLoopGroup bossGroup = new NioEventLoopGroup();
        NioEventLoopGroup workerGroup = new NioEventLoopGroup();

        try {
            ServerBootstrap serverBootstrap = new ServerBootstrap();

            serverBootstrap
                    .group(bossGroup, workerGroup)
                    .channel(NioServerSocketChannel.class)
                    .option(ChannelOption.SO_BACKLOG, 128)
                    .childOption(ChannelOption.SO_KEEPALIVE, true)
                    .childHandler(new ChannelInitializer&lt;SocketChannel&gt;() {
                        @Override
                        protected void initChannel(SocketChannel ch) throws Exception {
                            ChannelPipeline pipeline = ch.pipeline();
//                            \u6DFB\u52A0\u89E3\u7801\u5668\uFF0C\u8FD9\u91CC\u662F\u56FA\u5B9A\u5199\u6CD5\uFF0Cxxx.xxx.getDefaultInstance()\u5373\u53EF\u5F97\u5230\u5B9E\u4F8B
                            pipeline.addLast(new ProtobufDecoder(StudentEntity.Student.getDefaultInstance()));
                            pipeline.addLast(new ProtoServerHandler());
                        }
                    });

            ChannelFuture sync = serverBootstrap.bind(8080).addListener(future -&gt; {
                if (future.isSuccess()) {
                    System.out.println(&quot;\u76D1\u542C\u7AEF\u53E3\u6210\u529F&quot;);
                } else {
                    System.out.println(&quot;\u76D1\u542C\u7AEF\u53E3\u5931\u8D25&quot;);
                }
            }).sync();
            sync.channel().closeFuture().sync();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }


    }
}

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u662FHandler\uFF0C\u4E24\u79CD\u5199\u6CD5\uFF0C\u7B2C\u4E00\u79CD\u624B\u52A8\u8F6C\u6362</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>project<span class="token punctuation">.</span>codec</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelHandlerContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelInboundHandlerAdapter</span></span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Amayakite
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2022\u5E7405\u670811\u65E517\u65F636\u520654\u79D2
 * <span class="token keyword">@description</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProtoServerHandler</span> <span class="token keyword">extends</span> <span class="token class-name">ChannelInboundHandlerAdapter</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelRead</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Object</span> msg<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u7684\u6570\u636E\u5BF9\u8C61\uFF1A&quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u7684\u6570\u636E\u5BF9\u8C61\u7684\u7C7B\u578B\uFF1A&quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">exceptionCaught</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u7ED3\u679C\uFF1A</span>
\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u7684\u6570\u636E\u5BF9\u8C61\uFF1Aid<span class="token operator">:</span> <span class="token number">1</span>
name<span class="token operator">:</span> <span class="token string">&quot;\\345\\274\\240\\344\\270\\211&quot;</span>
age<span class="token operator">:</span> <span class="token number">18</span>

\u670D\u52A1\u7AEF\u63A5\u6536\u5230\u7684\u6570\u636E\u5BF9\u8C61\u7684\u7C7B\u578B\uFF1A<span class="token keyword">class</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>project<span class="token punctuation">.</span>codec<span class="token punctuation">.</span></span>StudentEntity</span>$<span class="token class-name">Student</span>
<span class="token comment">// \u4E0A\u9762\u90A3\u53EF\u4EE5\u76F4\u63A5\u8F6C\u6362\u6210\u5BF9\u5E94\u7684\u5BF9\u8C61\u7136\u540E\u8FDB\u884C\u540E\u7EED\u7684\u64CD\u4F5C\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u7136\u4E5F\u53EF\u4EE5\u7528Simple\u6765\uFF0C\u6548\u679C\u662F\u4E00\u6837\u7684</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>project<span class="token punctuation">.</span>codec</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelHandlerContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelInboundHandlerAdapter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">SimpleChannelInboundHandler</span></span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Amayakite
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2022\u5E7405\u670811\u65E517\u65F636\u520654\u79D2
 * <span class="token keyword">@description</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProtoServerHandler</span> <span class="token keyword">extends</span> <span class="token class-name">SimpleChannelInboundHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">StudentEntity<span class="token punctuation">.</span>Student</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">channelRead0</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> channelHandlerContext<span class="token punctuation">,</span> <span class="token class-name">StudentEntity<span class="token punctuation">.</span>Student</span> student<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u6765\u7684\u6D88\u606F\uFF1A&quot;</span> <span class="token operator">+</span> student<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//       PS: \u5206\u522B\u6253\u5370\u4FE1\u606F \u5982\u679C\u662F\u4E0A\u9762\u7684toString\uFF0C\u5219\u5B57\u7B26\u4E32\u4F1A\u4E71\u7801\uFF0C\u76F4\u63A5\u83B7\u53D6getName\u5219\u4E0D\u4F1A</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name:&quot;</span> <span class="token operator">+</span> student<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;age:&quot;</span> <span class="token operator">+</span> student<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;id:&quot;</span> <span class="token operator">+</span> student<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6548\u679C</span>
\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u6765\u7684\u6D88\u606F\uFF1Aid<span class="token operator">:</span> <span class="token number">1</span>
name<span class="token operator">:</span> <span class="token string">&quot;\\345\\274\\240\\344\\270\\211&quot;</span>
age<span class="token operator">:</span> <span class="token number">18</span>

name<span class="token operator">:</span>\u5F20\u4E09
age<span class="token operator">:</span><span class="token number">18</span>
id<span class="token operator">:</span><span class="token number">1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D1\u9001\u4E0D\u540C\u7C7B\u578B\u7684\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u4E0D\u540C\u7C7B\u578B\u7684\u5BF9\u8C61" aria-hidden="true">#</a> \u53D1\u9001\u4E0D\u540C\u7C7B\u578B\u7684\u5BF9\u8C61</h2><p>\u9996\u5148\u6211\u4EEC\u8981\u7F16\u5199\u597D\u4E00\u4E2Aproto\u6587\u4EF6</p><div class="language-protobuf ext-protobuf line-numbers-mode"><pre class="language-protobuf"><code><span class="token comment">//\u58F0\u660E\u534F\u8BAE\u7248\u672C\u53F7\uFF0CProto\u76EE\u524D\u67092\u548C3\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u90FD\u662F\u58F0\u660E3</span>
<span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">&quot;proto3&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u58F0\u660E\u5BFC\u51FA\u65F6\u5019\u7684\u62A5\u540D\uFF08Java \u5176\u4ED6\u8BED\u8A00\u5DEE\u4E0D\u591A\u4E5F\u662F\u8FD9\u79CD\u5199\u6CD5\uFF09</span>
<span class="token keyword">option</span> java_package <span class="token operator">=</span> <span class="token string">&quot;com.project.codec&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//\u58F0\u660E\u5BFC\u51FAJava\u65F6\u7684\u5916\u90E8\u7C7B\u540D\uFF0C\u540C\u65F6\u4E5F\u662F\u6587\u4EF6\u540D</span>
<span class="token keyword">option</span> java_outer_classname <span class="token operator">=</span> <span class="token string">&quot;StudentEntity&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//optimize_for = SPEED \uFF1A\u4EE3\u7801\u4F18\u5316\u7B56\u7565\uFF0C\u9ED8\u8BA4\u662FSPEED\uFF0C\u53EF\u9009\u7684\u8FD8\u6709CODE_SIZE\uFF0CLITE_RUNTIME\uFF08SPEED\u6700\u5FEB\uFF09</span>
<span class="token keyword">option</span> optimize_for <span class="token operator">=</span> SPEED<span class="token punctuation">;</span>


<span class="token comment">// ProtoBuf\u53EF\u4EE5\u4F7F\u7528message\u7BA1\u7406\u5176\u4ED6\u7684message</span>

<span class="token keyword">message</span>  <span class="token class-name">MyMessage</span> <span class="token punctuation">{</span>
  <span class="token comment">//  \u5B9A\u4E49\u4E00\u4E2A\u679A\u4E3E\u7C7B\u578B \u8FD9\u91CC\u4E5F\u53EF\u4EE5\u653E\u5230\u5916\u90E8\u5B9A\u4E49\uFF08\u8FD9\u91CC\u5C31\u76F8\u5F53\u4E8E\u662F\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5185\u90E8\u7C7B\u4E00\u6837\uFF09</span>
  <span class="token keyword">enum</span> <span class="token class-name">DataType</span> <span class="token punctuation">{</span>
    <span class="token comment">//    \u6CE8\u610F \u679A\u4E3E\u7C7B\u578B\u7684\u8BDD\uFF0C\u5E8F\u53F7\u662F\u4ECE0\u5F00\u59CB\u7684\uFF0C\u4E0D\u662F\u4ECE1\u5F00\u59CB\u7684</span>
    StudentType <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    WorkerType <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//  \u4E0B\u9762\u7684\u624D\u662F\u6570\u636E</span>

  <span class="token comment">//  \u7528data_type\u6765\u6807\u8BC6\u4F20\u9012\u7684\u6570\u636E\u7C7B\u578B\uFF08\u54EA\u4E00\u4E2A\u679A\u4E3E\u7C7B\u578B\uFF09</span>
  <span class="token positional-class-name class-name">DataType</span> dataType <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">//  \u8868\u793A\u6BCF\u6B21\u679A\u4E3E\u7C7B\u578B\u6700\u591A\u53EA\u80FD\u51FA\u73B0\u5176\u4E2D\u7684\u4E00\u4E2A\uFF0C\u8282\u7701\u7A7A\u95F4\uFF08\u4E5F\u5C31\u662F\u4E0B\u9762\u6700\u7EC8\u53EA\u4F1A\u51FA\u73B0\u4E00\u4E2A\u5BF9\u8C61\uFF09</span>
  <span class="token keyword">oneof</span> dataBody <span class="token punctuation">{</span>
    <span class="token comment">//    \u8FD9\u91CC\u5199\u4E86\u4E24\u4E2A\uFF0C\u8868\u793A\u53EF\u4EE5\u51FA\u73B0\u4E24\u79CD\u7C7B\u578B\uFF0CStudent\u548CWorker</span>
    <span class="token positional-class-name class-name">Student</span> student <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token positional-class-name class-name">Worker</span> worker <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token builtin">int64</span> id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token builtin">int32</span> age <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">message</span> <span class="token class-name">Worker</span><span class="token punctuation">{</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token builtin">bool</span> sex <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\u751F\u6210\u5B9E\u4F53\u7C7B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>protoc --java_out<span class="token operator">=</span>\u4F60\u9879\u76EE\u7684java\u76EE\u5F55\uFF0C\u4F8B\u5982/home/aaa/ccc/src/main/java .<span class="token punctuation">\\</span>Student.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u5C31\u5F97\u5230\u4E86\u4E00\u4E2A\u4E09\u5343\u884C\u7684\u6587\u4EF6</p><p><img src="`+v+'" alt="image-20220518214443747" loading="lazy"></p><p>\u7136\u540E\u7ED3\u6784\u5982\u4E0B</p><p><img src="'+m+`" alt="image-20220518214542916" loading="lazy"></p><p>\u63A5\u7740\u662F\u5BA2\u6237\u7AEF\u53D1\u9001\uFF0C\u53EA\u9700\u8981\u77E5\u9053DataType\u662F\u4E00\u4E2A\u679A\u4E3E\u7C7B\u5373\u53EF</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>project<span class="token punctuation">.</span>codec</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>buffer<span class="token punctuation">.</span></span><span class="token class-name">Unpooled</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelHandlerContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelInboundHandlerAdapter</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Amayakite
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2022\u5E7405\u670811\u65E518\u65F628\u520634\u79D2
 * <span class="token keyword">@description</span> TODO
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProtoClientHandler</span> <span class="token keyword">extends</span> <span class="token class-name">ChannelInboundHandlerAdapter</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u5F53\u901A\u9053\u51C6\u5907\u5C31\u7EEA\u65F6\u89E6\u53D1\u8BE5\u65B9\u6CD5\uFF08\u548C\u670D\u52A1\u7AEF\u8FDE\u63A5\u6210\u529F\u65F6\uFF09
     *
     * <span class="token keyword">@param</span> <span class="token parameter">ctx</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">channelActive</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> nextInt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StudentEntity<span class="token punctuation">.</span>MyMessage</span> message <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextInt <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">StudentEntity<span class="token punctuation">.</span>Student</span> student <span class="token operator">=</span> <span class="token class-name">StudentEntity<span class="token punctuation">.</span>Student</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            \u53D1\u9001Student\u5BF9\u8C61</span>
            message <span class="token operator">=</span> <span class="token class-name">StudentEntity<span class="token punctuation">.</span>MyMessage</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">setDataType</span><span class="token punctuation">(</span><span class="token class-name">StudentEntity<span class="token punctuation">.</span>MyMessage<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>StudentType</span><span class="token punctuation">)</span>
                <span class="token comment">// \u6CE8\u610F\u8FD9\u4E2Abuild\uFF0C\u7A0D\u5FAE\u6709\u70B9\u5957\u5A03\u4E86\u5C5E\u4E8E</span>
                    <span class="token punctuation">.</span><span class="token function">setStudent</span><span class="token punctuation">(</span>student<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
<span class="token comment">//            \u53D1\u9001Worker\u5BF9\u8C61</span>
            <span class="token class-name">StudentEntity<span class="token punctuation">.</span>Worker</span> worker <span class="token operator">=</span> <span class="token class-name">StudentEntity<span class="token punctuation">.</span>Worker</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setSex</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            message <span class="token operator">=</span> <span class="token class-name">StudentEntity<span class="token punctuation">.</span>MyMessage</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">setDataType</span><span class="token punctuation">(</span><span class="token class-name">StudentEntity<span class="token punctuation">.</span>MyMessage<span class="token punctuation">.</span>DataType<span class="token punctuation">.</span>WorkerType</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">setWorker</span><span class="token punctuation">(</span>worker<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token comment">//        \u53D1\u9001\u6D88\u606F</span>
        ctx<span class="token punctuation">.</span><span class="token function">writeAndFlush</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D1\u9001\u6D88\u606F\u7ED9\u670D\u52A1\u7AEF\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">exceptionCaught</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u662F\u670D\u52A1\u7AEF\uFF0Cmain\u4E2D\u7684<code>childHandler</code>\u4E2D\u7684\u89E3\u7801\u5668\u6D88\u606F\u7C7B\u578B\u6539\u4E0B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">ChannelInitializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SocketChannel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token class-name">SocketChannel</span> ch<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ChannelPipeline</span> pipeline <span class="token operator">=</span> ch<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8FD9\u91CC\u89E3\u7801\u5668\u4F7F\u7528\u5230\u6211\u4EEC\u5B9A\u4E49\u7684MyMessage</span>
        pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ProtobufDecoder</span><span class="token punctuation">(</span><span class="token class-name">StudentEntity<span class="token punctuation">.</span>MyMessage</span><span class="token punctuation">.</span><span class="token function">getDefaultInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ProtoServerHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u662FHandler</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>project<span class="token punctuation">.</span>codec</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelHandlerContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">ChannelInboundHandlerAdapter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span><span class="token class-name">SimpleChannelInboundHandler</span></span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Amayakite
 * <span class="token keyword">@version</span> 1.0
 * <span class="token keyword">@date</span> 2022\u5E7405\u670811\u65E517\u65F636\u520654\u79D2
 * <span class="token keyword">@description</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProtoServerHandler</span> <span class="token keyword">extends</span> <span class="token class-name">SimpleChannelInboundHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">StudentEntity<span class="token punctuation">.</span>MyMessage</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">channelRead0</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> channelHandlerContext<span class="token punctuation">,</span> <span class="token class-name">StudentEntity<span class="token punctuation">.</span>MyMessage</span> message<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">StudentEntity<span class="token punctuation">.</span>MyMessage<span class="token punctuation">.</span>DataType</span> dataType <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">getDataType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u76F4\u63A5\u6839\u636E\u679A\u4E3E\u7C7B\u5224\u65AD\u5373\u53EF</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>dataType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token class-name">StudentType</span><span class="token operator">:</span>
                <span class="token class-name">StudentEntity<span class="token punctuation">.</span>Student</span> student <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">getStudent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6536\u5230\u7684\u5B66\u751F\u4FE1\u606F\uFF1A&quot;</span> <span class="token operator">+</span> student<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> student<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> student<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token class-name">WorkerType</span><span class="token operator">:</span>
                <span class="token class-name">StudentEntity<span class="token punctuation">.</span>Worker</span> worker <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">getWorker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6536\u5230\u7684\u5DE5\u4EBA\u4FE1\u606F\uFF1A&quot;</span> <span class="token operator">+</span> worker<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> worker<span class="token punctuation">.</span><span class="token function">getSex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6536\u5230\u672A\u77E5\u7C7B\u578B\u7684\u6D88\u606F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function O(D,A){const a=o("ExternalLinkIcon");return i(),l("div",null,[g,n("ol",null,[h,y,f,n("li",null,[w,n("a",S,[x,e(a)]),C,_]),E]),q,n("p",null,[n("a",P,[j,e(a)])]),n("p",null,[N,n("a",H,[I,e(a)])]),G])}var M=p(b,[["render",O],["__file","03-Netty-GoogleProtobuf.html.vue"]]);export{M as default};
