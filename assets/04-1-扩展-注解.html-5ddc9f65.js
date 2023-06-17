import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-3ab2953d.js";const e={},p=t(`<h1 id="什么是注解-annotation" tabindex="-1"><a class="header-anchor" href="#什么是注解-annotation" aria-hidden="true">#</a> 什么是注解(Annotation)</h1><p>​ 在正式开始学习后续的内容之前，我们必须得搞明白注解是什么，而不是就单单的使用他，不然后面看源码之类的会非常困难</p><p>​ 截止至目前，我们用的最多的注解可能是：</p><p>​ <code>@Override</code> 告诉编译器这个方法是覆盖父类的方法</p><p>​ <code>@WebServlet(&quot;/test&quot;)</code>表示某个类是一个Servlet，Web容器就会识别这个注解，在运行的时候调用它</p><p>​ <code>@Controlle</code>r 告诉Spring容器这个类是一个JavaWeb的Bean类</p><p>​ 注解和注释是完全不同的两个东西，看起来有点类似，因为我们在注释中也会写一些类似于@author声明作者名之类的东西</p><p>​ 注释是给开发人员看的，并不会影响程序的实际运行</p><p>​ <strong>注解并不是给开发人员看的，是用于给程序看的，会影响程序的编译和运行，例如编译器、Tomcat、Spring框架</strong></p><h2 id="注解的作用范围" tabindex="-1"><a class="header-anchor" href="#注解的作用范围" aria-hidden="true">#</a> 注解的作用范围</h2><p>​ 比如说我们开发一个WEB容器，其功能是加载Servlet，需要管理它的生命周期，所以必须先识别程序中的哪些类是Servlet</p><p>​ 程序启动的时候，扫描所有的类，找出了添加@WebServlet注解的类，进行加载</p><p>​ @WebServlet是在程序运行时候起作用的，所以Java就把他的作用范围规定为<code>RUNNTIME</code></p><p>​ @Override是给编译器看的，编译器工作的时候识别出了包含@Override注解的方法，就去检查它上层父类的相应方法，存在就编译通过，否则报错</p><p>​ @Override是编译的时候起作用，Java就把他的作用范围规定为<code>SOURCE</code></p><p>​ @Test是告诉程序，打包指定的区域进行运行，是告诉编译器用的，所以也是<code>SOURCE</code></p><p>​ 在我们日常开发的过程中，基本上都是直接用注解的，那么注解它到底是怎么样去工作的？我们压根就不知道这玩意是怎么个工作流程，只知道用了它就可以简化自己的一些操作，或者说预防一些错误</p><h1 id="java的两个元注解" tabindex="-1"><a class="header-anchor" href="#java的两个元注解" aria-hidden="true">#</a> Java的两个元注解</h1><p>这两个注解是由Java提供给我们的，所处包：<code>java.lang</code>，所有注解都得使用他们两来声明针对的地方以及保留的域</p><h2 id="target-指定注解针对的地方" tabindex="-1"><a class="header-anchor" href="#target-指定注解针对的地方" aria-hidden="true">#</a> @Target 指定注解针对的地方</h2><p>@Target是一个注解，是元注解，需要传入以下指定的参数</p><table><thead><tr><th>参数名</th><th>说明</th></tr></thead><tbody><tr><td>ElementType.TYPE</td><td>针对类、接口</td></tr><tr><td>ElementType.FIELD</td><td>针对成员变量</td></tr><tr><td>ElementType.METHOD</td><td>针对成员方法</td></tr><tr><td>ElementType.PARAMETER</td><td>针对方法参数</td></tr><tr><td>ElementType.CONSTRUCTOR</td><td>针对构造器</td></tr><tr><td>ElementType.LOCAL_VARIABLE</td><td>针对自定义参数<br>是Java8才开始有的<br>类型可以是javaBean或者枚举等</td></tr><tr><td>ElementType.ANNOTATION_TYPE</td><td>针对注解</td></tr><tr><td>ElementType.PACKAGE TYPE_PARAMETER</td><td>针对包</td></tr><tr><td>ElementType.TYPE_USE</td><td>表示该注解能使用在使用类型的任意语句中<br>是Java8才开始有的</td></tr></tbody></table><h2 id="retention-指定注解的保留域" tabindex="-1"><a class="header-anchor" href="#retention-指定注解的保留域" aria-hidden="true">#</a> @Retention 指定注解的保留域</h2><p>需要传入以下指定的参数</p><table><thead><tr><th>参数名</th><th>说明</th></tr></thead><tbody><tr><td>RetentionPolicy.SOURCE</td><td>源代码级别，由编译器处理，处理完毕后就不再保留</td></tr><tr><td>RetentionPolicy.CLASS</td><td>注解信息保留到类对应的class文件中</td></tr><tr><td>RetentionPolicy.RUNTIME</td><td>注解信息保留在对应的class文件中，由JVM读取，运行时使用</td></tr></tbody></table><h1 id="自定义注解" tabindex="-1"><a class="header-anchor" href="#自定义注解" aria-hidden="true">#</a> 自定义注解</h1><h2 id="实现一个基本的自定义注解" tabindex="-1"><a class="header-anchor" href="#实现一个基本的自定义注解" aria-hidden="true">#</a> 实现一个基本的自定义注解</h2><p>创建一个注解类十分简单，只需要这样</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">InitMethod</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@interface表示这是一个注解类</p><p>接下来加上两个元注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span> <span class="token comment">//表示这个注解是给一个方法用的</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span> <span class="token comment">//表示这个注解是运行时的注解 给JVM用的</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">InitMethod</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注解仅仅是一个标注，它本身并不具备任何处理业务的功能，程序在运行代码的时候扫描到了有使用到注解，就知道了这一块的代码应该进行相应的处理，我们再进行其他机制进行处理就OK了</p><p>接下来我们编写一个类，调用这个注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyComTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@InitMethod</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">MyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyInit....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">MyNotInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyNotInit....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注解的调用实际是反射的妙用" tabindex="-1"><a class="header-anchor" href="#注解的调用实际是反射的妙用" aria-hidden="true">#</a> 注解的调用实际是反射的妙用</h2><p>还记得我们在学习反射时遍历获取某个方法吗？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;xxxxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> clazz<span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Method</span> method<span class="token operator">:</span>methods<span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">if</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">euqals</span><span class="token punctuation">(</span><span class="token string">&quot;xxxxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span><span class="token punctuation">,</span>参数<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是感觉这样做low暴了，但是实际上这玩意被设计出来并不是想让你通过愚蠢的方式来获取的。。</p><p>使用注解往往都是在跟反射打交道，通过反射来获取我们想要的内容：<br> 我们现在再创建一个类，在main方法中写入以下内容：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestAnnotation</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//通过反射加载类</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Clazz</span> <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.myTest.MyComTest&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//获取类中的所有public方法</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> <span class="token class-name">Clazz</span><span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//遍历</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//判断这个方法是否带有指定的注解 这里注解需要传入注解的class</span>
            <span class="token keyword">boolean</span> annotationPresent <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">InitMethod</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> annotationPresent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>MyNotInit:false
MyInit:true   可以看到 我们加了注解的地方显示了true
wait:false
wait:false
wait:false
equals:false
toString:false
hashCode:false
getClass:false
notify:false
notifyAll:false

进程已结束,退出代码0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么就可以通过判断这个值来执行相应的代码了：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Clazz</span> <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.myTest.MyComTest&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> <span class="token class-name">Clazz</span><span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> annotationPresent <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">InitMethod</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//            System.out.println(method.getName() + &quot;:&quot; + annotationPresent);</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>annotationPresent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
           method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Clazz</span><span class="token punctuation">.</span><span class="token function">getConstructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">MyInit</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

进程已结束<span class="token punctuation">,</span>退出代码<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功的执行了我们加了注解的代码</p><h2 id="注解用在类上的获取" tabindex="-1"><a class="header-anchor" href="#注解用在类上的获取" aria-hidden="true">#</a> 注解用在类上的获取</h2><p>比方说我们现在有一个注解类的注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">InitClass</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来一个类调用它</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@InitClass</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyComTestClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyComTestClass init&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想要扫描某个文件夹下的所有类，可以去研究下Spring的源码，我们在使用SpringContext的时候有用到过它的扫包器</p><p>这里只演示如何判断一个类是否使用了注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">myTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> aClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.myTest.MyComTestClass&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> annotation <span class="token operator">=</span> aClass<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">InitClass</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>annotation<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>isAnnotationPresent</code>即可判断该类是否为使用了某个注解的类</p><p>如果使用<code>isAnnotation</code> 则判断该类是否是一个注解类</p><p>运行结果：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>true

进程已结束,退出代码0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注解类的值" tabindex="-1"><a class="header-anchor" href="#注解类的值" aria-hidden="true">#</a> 注解类的值</h2><p>我们在使用@WebServlet和Spring的声明Bean的时候，往往会传入一些值，这些值可以通过如下方式声明</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span> 
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span> 
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">InitMethod</span> <span class="token punctuation">{</span>
    
    <span class="token comment">//  这里表示声明了一个类型为String的值 名称叫value 默认值是一个空白的字符串</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span> 
 <span class="token comment">// 基本同上 这里声明的是一个字符串数组，默认值是一个空的数组</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">args</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于默认值<code>default</code> 你可以不选择用它，如果不用它的话，则表示这个字段为必填项</p><p>在默认情况下，调用这个注解时，你有以下几种用法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@InitMethod</span> <span class="token comment">//什么值都不传 全都是默认值</span>

<span class="token annotation punctuation">@InitMethod</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span> <span class="token comment">//将value设置为ABC </span>

<span class="token annotation punctuation">@InitMethod</span><span class="token punctuation">(</span><span class="token string">&quot;ABC&quot;</span><span class="token punctuation">)</span> 
<span class="token comment">//等同于上面，当你值传入一个参数并且不指定名字时，且注解中存在\`value()\`字段，那么默认赋值给该字段</span>
<span class="token comment">//如果说不存在名为\`value\`的字段，则不能这样写 比如说你把value() 换成了 name() 那么就不能这样写</span>

<span class="token annotation punctuation">@InitMethod</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//这个是给两个属性分别赋值 给多个属性赋值时，不能像上面那样缩写</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们简单实用下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyComTest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@InitMethod</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;21321&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;3213213&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">MyInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyInit....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@InitMethod</span><span class="token punctuation">(</span><span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">MyNotInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;MyNotInit....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反射获取注解内的字段" tabindex="-1"><a class="header-anchor" href="#反射获取注解内的字段" aria-hidden="true">#</a> 反射获取注解内的字段</h2><p>非常简单：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Clazz</span> <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.myTest.MyComTest&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> <span class="token class-name">Clazz</span><span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> annotationPresent <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">InitMethod</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//判断有没有使用</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>annotationPresent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            
            <span class="token comment">//直接getAnnotation 然后传入注解的class 即可获取到相应的注解实例对象</span>
            <span class="token class-name">InitMethod</span> initMethod <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">InitMethod</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;============分割线&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">//可以直接通过.xxx()来获取注解内定义的 使用注解类进行写入的值</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>initMethod<span class="token punctuation">.</span><span class="token function">args</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>initMethod<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">//打印运行类型</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>initMethod<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//看下是使用了哪一个注解</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>initMethod<span class="token punctuation">.</span><span class="token function">annotationType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>============分割线
[]
李四
@com.myTest.InitMethod(args=[], value=李四)
interface com.myTest.InitMethod
============分割线
[21321, 3213213]
张三
@com.myTest.InitMethod(args=[21321, 3213213], value=张三)
interface com.myTest.InitMethod

进程已结束,退出代码0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,72),o=[p];function c(i,l){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","04-1-扩展-注解.html.vue"]]);export{k as default};
