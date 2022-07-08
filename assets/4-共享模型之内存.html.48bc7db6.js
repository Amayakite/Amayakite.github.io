import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as d,c as r,a as n,b as t,e as s,d as i}from"./app.ad7a4a8c.js";var c="/images/JavaThread/4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58/1642344532991.png",v="/images/JavaThread/4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58/1642344570300.png",p="/images/JavaThread/4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58/1642344596364.png",o="/images/JavaThread/4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58/1642345669695.png",u="/images/JavaThread/4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58/1642345723489.png",b="/images/JavaThread/4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58/1642348114624.png",m="/images/JavaThread/4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58/1642348159423.png",h="/images/JavaThread/4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58/1642348259248.png",g="/images/JavaThread/4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58/1642348635715.png",k="/images/JavaThread/4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58/1642348664310.png",y="/images/JavaThread/4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58/1642348767547.png";const w={},_=s(`<h2 id="java\u5185\u5B58\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#java\u5185\u5B58\u6A21\u578B" aria-hidden="true">#</a> Java\u5185\u5B58\u6A21\u578B</h2><p>JMM\u5373Java Memory Model\uFF0C\u5B83\u5B9A\u4E49\u4E86\u4E3B\u5B58\u3001\u5DE5\u4F5C\u5185\u5B58\u62BD\u8C61\u6982\u5FF5\uFF0C\u5E95\u5C42\u5BF9\u5E94\u7740CPU\u5BC4\u5B58\u5668\u3001\u7F13\u5B58\u3001\u786C\u4EF6\u5185\u5B58\u3001CPU\u6307\u4EE4\u4F18\u5316\u7B49</p><p>JMM\u4F53\u73B0\u5728\u5982\u4E0B\u51E0\u4E2A\u65B9\u9762</p><ul><li>\u539F\u5B50\u6027\uFF1A\u4FDD\u8BC1\u6307\u4EE4\u4E0D\u4F1A\u53D7\u5230\u7EBF\u7A0B\u4E0A\u4E0B\u6587\u5207\u6362\u7684\u5F71\u54CD</li><li>\u53EF\u89C1\u6027\uFF1A\u4FDD\u8BC1\u6307\u4EE4\u4E0D\u4F1A\u53D7\u5230CPU\u7F13\u5B58\u7684\u5F71\u54CD</li><li>\u6709\u5E8F\u6027\uFF1A\u4FDD\u8BC1\u6307\u4EE4\u4E0D\u4F1A\u53D7\u5230CPU\u6307\u4EE4\u5E76\u884C\u4F18\u5316\u5F71\u54CD</li></ul><h3 id="\u53EF\u89C1\u6027\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u53EF\u89C1\u6027\u95EE\u9898" aria-hidden="true">#</a> \u53EF\u89C1\u6027\u95EE\u9898</h3><p>\u8FD9\u91CC\u6709\u4E00\u4E2A\u975E\u5E38\u7ECF\u5178\u7684\u95EE\u9898</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import lombok.extern.slf4j.Slf4j;

@Slf4j(topic = &quot;c.Test&quot;)
public class Test {
    static boolean run = true;

    public static void main(String[] args) {
        Thread t = new Thread(() -&gt; {
            while (run) {
            }
        });
        t.start();
        Thread.sleep(1000);
        run = false;
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u53EF\u4EE5\u53D1\u73B0\uFF0C\u6309\u7167\u6211\u7684\u4EE3\u7801\u6267\u884C\u4E00\u904D\u4E0B\u6765\uFF0C\u7A0B\u5E8F\u59CB\u7EC8\u4E0D\u4F1A\u505C\u6B62...\u63A5\u4E0B\u6765\u5206\u6790\u4E0B</p><p><img src="`+c+'" alt="1" loading="lazy"></p><p><img src="'+v+'" alt="2" loading="lazy"></p><p><img src="'+p+`" alt="3" loading="lazy"></p><h3 id="\u89E3\u51B3\u53EF\u89C1\u6027\u95EE\u9898-volatile\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u53EF\u89C1\u6027\u95EE\u9898-volatile\u5173\u952E\u5B57" aria-hidden="true">#</a> \u89E3\u51B3\u53EF\u89C1\u6027\u95EE\u9898-volatile\u5173\u952E\u5B57</h3><p>\u8981\u89E3\u51B3\u4E0A\u9762\u9047\u5230\u7684\u53EF\u89C1\u6027\u95EE\u9898\u975E\u5E38\u7B80\u5355\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u4F7F\u7528volatile\u5173\u952E\u5B57\u5373\u53EF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Slf4j(topic = &quot;c.Await&quot;)
public class TestAwait {
    volatile static boolean run = true;

    public static void main(String[] args) throws InterruptedException {
        Thread t = new Thread(() -&gt; {
            while (run) {
            }
        });
        t.start();
        sleep(1000);
        run = false;
        log.info(&quot;\u4E3B\u7A0B\u5E8F\u4FEE\u6539\u5B8C\u6BD5run\u7684\u503C&quot;);
    }

}
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2019-12-17 22:37:40.826 [c.Await] INFO  - \u4E3B\u7A0B\u5E8F\u4FEE\u6539\u5B8C\u6BD5run\u7684\u503C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u52A0\u4E86\u8FD9\u4E2A\u5173\u952E\u5B57\u8868\u793A\uFF1A\u8FD9\u662F\u4E00\u4E2Avolatile\u53D8\u91CF\uFF0C\u5B83\u7684\u503C\u4E0D\u4F1A\u88AB\u7F13\u5B58\uFF0C\u6240\u4EE5\u6BCF\u6B21\u8BFB\u53D6\u7684\u65F6\u5019\u90FD\u4F1A\u4ECE\u4E3B\u5B58\u4E2D\u8BFB\u53D6</p><p>volatile\u7FFB\u8BD1\u8FC7\u6765\u662F\u201C\u4E0D\u7F13\u5B58\u201D\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6BCF\u6B21\u8BFB\u53D6\u7684\u65F6\u5019\u90FD\u4F1A\u4ECE\u4E3B\u5B58\u4E2D\u8BFB\u53D6\uFF0C\u800C\u4E0D\u662F\u4ECE\u7F13\u5B58\u4E2D\u8BFB\u53D6</p><p>\u8FD9\u91CC\u7684\u7F13\u5B58\uFF1A\u4F60\u53EF\u4EE5\u7406\u89E3\u4E3A\u662F\u7535\u8111\u5185\u79BBCPU\u6700\u8FD1\u7684\u5730\u65B9</p><p>\u5B83\u53EF\u4EE5\u7528\u6765\u4FEE\u9970\u6210\u5458\u53D8\u91CF\u548C\u9759\u6001\u6210\u5458\u53D8\u91CF\uFF0C\u4ED6\u53EF\u4EE5\u907F\u514D\u4ECE\u81EA\u5DF1\u5DE5\u4F5C\u7F13\u5B58\u4E2D\u67E5\u627E\u53D8\u91CF\u7684\u503C\uFF0C\u5FC5\u987B\u5230\u4E3B\u5185\u5B58\u4E2D\u83B7\u53D6\u4ED6\u7684\u503C\uFF0C\u7EBF\u7A0B\u64CD\u4F5Cvolatile\u53D8\u91CF\u90FD\u662F\u76F4\u63A5\u64CD\u4F5C\u4E3B\u5B58</p><blockquote><p>\u9664\u4E86volition\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528synchronized\u5173\u952E\u5B57\u6765\u4FEE\u9970\u6210\u5458\u53D8\u91CF\u548C\u9759\u6001\u6210\u5458\u53D8\u91CF\uFF0C\u4E24\u8005\u90FD\u53EF\u4EE5\u89E3\u51B3\u53EF\u89C1\u6027\u95EE\u9898</p><p>\u4F46\u662Fsynchronized\u5173\u952E\u5B57\u4F1A\u6D88\u8017\u66F4\u591A\u7684CPU\u8D44\u6E90(\u8981\u521B\u5EFAMonitor)\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0D\u5EFA\u8BAE\u4F7F\u7528synchronized\u5173\u952E\u5B57\u6765\u4FEE\u9970\u6210\u5458\u53D8\u91CF\u548C\u9759\u6001\u6210\u5458\u53D8\u91CF</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Test {
    final static Object obj = new Object();
    static boolean run = true;

    public static void main(String[] args) {
        new Thread(() -&gt; {
            while (true) {
                synchronized (obj) {
                    if (!run){
                        break;
                    }
                }
            }
        }).start();
//        ....\u5176\u4ED6\u7684\u64CD\u4F5C
    }
}
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53EF\u89C1\u6027\u548C\u539F\u5B50\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u89C1\u6027\u548C\u539F\u5B50\u6027" aria-hidden="true">#</a> \u53EF\u89C1\u6027\u548C\u539F\u5B50\u6027</h3><p>\u524D\u9762\u7684\u5B9E\u9645\u63D0\u73B0\u7684\u5C31\u662F\u53EF\u89C1\u6027\uFF0C\u5B83\u4FDD\u8BC1\u7684\u662F\u5728\u591A\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u5BF9volatile\u53D8\u91CF\u7684\u4FEE\u6539\u5BF9\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u53EF\u89C1\uFF0C\u4E0D\u80FD\u4FDD\u8BC1\u539F\u5B50\u6027\uFF0C\u4EC5\u7528\u5728\u4E00\u4E2A\u5199\u7EBF\u7A0B\uFF0C\u591A\u4E2A\u8BFB\u7EBF\u7A0B\u7684\u60C5\u51B5</p><p>\u4E0A\u9762\u7684\u5B57\u8282\u7801\u5B9E\u9645\u4E0A\u662F\u8FD9\u6837\u7684</p><p><img src="`+o+'" alt="\u5B57\u8282\u7801" loading="lazy"></p><p>\u6BD4\u8F83\u4E00\u4E0B\u6211\u4EEC\u4E4B\u524D\u5C06\u7EBF\u7A0B\u5B89\u5168\u65F6\u4E3E\u7684\u4F8B\u5B50\uFF0C\u4E24\u4E2Ai++\u548C\u4E00\u4E2Ai--\uFF0C\u53EA\u80FD\u4FDD\u8BC1\u770B\u5230\u6700\u65B0\u503C\uFF0C\u4E0D\u80FD\u89E3\u51B3\u6307\u4EE4\u4EA4\u9519</p><p><img src="'+u+`" alt="\u5B57\u8282\u78012" loading="lazy"></p><blockquote><p><strong>\u6CE8\u610F</strong></p><p>synchronized\u8BED\u53E5\u5757\u65E2\u80FD\u4FDD\u8BC1\u4EE3\u7801\u5757\u7684\u539F\u5B50\u6027\uFF0C\u4E5F\u80FD\u4FDD\u8BC1\u4EE3\u7801\u5757\u5185\u53D8\u91CF\u7684\u53EF\u89C1\u6027\uFF0C\u4F46\u7F3A\u70B9\u662Fsynchronized\u5C5E\u4E8E\u91CD\u91CF\u7EA7\u64CD\u4F5C\uFF0C\u6027\u80FD\u8F83\u4F4E</p><p>\u5982\u679C\u5728\u524D\u9762\u7684\u6B7B\u5FAA\u73AF\u4E2D\u52A0\u5165\u6253\u5370\u4E4B\u7C7B\u7684\u8BED\u53E5\uFF0C\u4F1A\u53D1\u73B0\u5373\u4F7F\u4E0D\u52A0volatile\u4FEE\u9970\u7B26\uFF0C\u7EBF\u7A0Bt\u4E5F\u80FD\u6B63\u786E\u5730\u770B\u5230\u5BF9run\u53D8\u91CF\u7684\u4FEE\u6539\u4E86\uFF0C\u8FD9\u4E2A\u5C31\u4E0D\u591A\u505A\u5C55\u5F00\u4E86\uFF0C\u8BE6\u60C5\u53EF\u4EE5\u81EA\u5DF1\u53BB\u67E5\u4E00\u67E5<code>sout</code>\u7684\u6E90\u4EE3\u7801</p></blockquote><h3 id="\u4F7F\u7528volatile\u505A\u66F4\u4F18\u96C5\u7684\u4E24\u9636\u6BB5\u7EC8\u6B62" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528volatile\u505A\u66F4\u4F18\u96C5\u7684\u4E24\u9636\u6BB5\u7EC8\u6B62" aria-hidden="true">#</a> \u4F7F\u7528volatile\u505A\u66F4\u4F18\u96C5\u7684\u4E24\u9636\u6BB5\u7EC8\u6B62</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Test {
    private volatile boolean stop = false;
    private Thread t1;

    /**
     * \u542F\u52A8\u76D1\u63A7\u7EBF\u7A0B
     */
    public void start() {
        t1 = new Thread(() -&gt; {
            while (true) {
                if (stop) {
                    log.info(&quot;\u6599\u7406\u540E\u4E8B&quot;);
                    break;
                }
                try {
                    Thread.sleep(1000);
                    log.debug(&quot;\u6267\u884C\u76D1\u63A7\u8BB0\u5F55&quot;);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }

    public void stop() {
        stop = true;
//        \u5E76\u6253\u65AD
        t1.interrupt();
    }

    public static void main(String[] args) {
        Test test = new Test();
        test.start();
        Thread.sleep(10000);
        test.stop();
    }

}
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u72B9\u8C6B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u72B9\u8C6B\u6A21\u5F0F" aria-hidden="true">#</a> \u72B9\u8C6B\u6A21\u5F0F</h3><p>\u770B\u8D77\u6765\u5F88\u9AD8\u5927\u4E0A\uFF0C\u5B9E\u9645\u4E0A\u975E\u5E38\u7B80\u5355\uFF0C\u5C31\u662F\u8BF4\u9632\u6B62\u591A\u6B21\u8C03\u7528\u540C\u4E00\u4E2A\u5BF9\u8C61\u5BFC\u81F4\u7EBF\u7A0B\u91CD\u590D\u5F00\uFF0C\u624B\u52A8\u7ED9\u4E00\u4E2A\u95F4\u9694</p><p>\u5E94\u7528\u573A\u666F\u6709\uFF1A\u8BA9\u7EBF\u7A0B\u53EA\u4F1A\u542F\u52A8\u6307\u5B9A\u6B21\u6570\uFF0C\u6216\u8005\u8BF4\u53EA\u5E0C\u671B\u5B83\u542F\u52A8\u4E00\u6B21</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Test {
    private volatile boolean stop = false;
    private Thread t1;
    private boolean isRunning = false;

    /**
     * \u542F\u52A8\u76D1\u63A7\u7EBF\u7A0B
     */
    public void start() {
        synchronized (this) {
            if (!isRunning) {
                isRunning = true;
                return;
            }
        }
        t1 = new Thread(() -&gt; {
            while (true) {
                if (stop) {
                    log.info(&quot;\u6599\u7406\u540E\u4E8B&quot;);
                    break;
                }
                try {
                    Thread.sleep(1000);
                    log.debug(&quot;\u6267\u884C\u76D1\u63A7\u8BB0\u5F55&quot;);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            isRunning = false;
        });
        t1.start();
    }

    public void stop() {
        stop = true;
//        \u5E76\u6253\u65AD
        t1.interrupt();
    }

    public static void main(String[] args) {
        Test test = new Test();
        test.start();
        Thread.sleep(10000);
        test.stop();
    }

}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6709\u5E8F\u6027" tabindex="-1"><a class="header-anchor" href="#\u6709\u5E8F\u6027" aria-hidden="true">#</a> \u6709\u5E8F\u6027</h3><p><img src="`+b+'" alt="v" loading="lazy"></p><h4 id="\u9C7C\u7F50\u5934\u7684\u6545\u4E8B" tabindex="-1"><a class="header-anchor" href="#\u9C7C\u7F50\u5934\u7684\u6545\u4E8B" aria-hidden="true">#</a> \u9C7C\u7F50\u5934\u7684\u6545\u4E8B</h4><p><img src="'+m+'" alt="1" loading="lazy"></p><p><img src="'+h+'" alt="2" loading="lazy"></p><p><img src="'+g+'" alt="3" loading="lazy"></p><p><img src="'+k+'" alt="4" loading="lazy"></p><p><img src="'+y+'" alt="5" loading="lazy"></p><h3 id="\u5982\u4F55\u7981\u6B62\u6307\u4EE4\u91CD\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u7981\u6B62\u6307\u4EE4\u91CD\u6392\u5E8F" aria-hidden="true">#</a> \u5982\u4F55\u7981\u6B62\u6307\u4EE4\u91CD\u6392\u5E8F</h3><p>\u5728\u5BF9\u5E94\u7684\u53D8\u91CF\u524D\u52A0\u4E0Avolatile\u4FEE\u9970\u7B26\u5373\u53EF</p>',45),f=i("\u5173\u4E8E\u6307\u4EE4\u91CD\u6392\u5E8F\uFF0C\u8FD9\u73A9\u610F\u6211\u662F\u6709\u70B9\u61F5\u7684\uFF0C\u5EFA\u8BAE\u7528\u5230\u4E86\u53BB\u770B\u9ED1\u9A6C\u7684\u89C6\u9891"),x={href:"https://www.bilibili.com/video/BV16J411h7Rd?p=144",target:"_blank",rel:"noopener noreferrer"},T=i("https://www.bilibili.com/video/BV16J411h7Rd?p=144"),S=s(`<p>\u53CD\u6B63\u8981\u591A\u7EBF\u7A0B\u64CD\u4F5C\u7684\u503C\uFF0C\u4E00\u5F8B\u52A0\u4E0Avolatile\u4FEE\u9970\u7B26\u4EE5\u53CAsynchronized\u5C31\u5BF9\u4E86..</p><p>\u987A\u5E26\u4E00\u63D0\uFF1Asynchronized\u4E0D\u80FD\u89E3\u51B3\u6307\u4EE4\u91CD\u6392\u5E8F\u95EE\u9898\uFF0C\u4F46\u5982\u679C\u662F\u5728\u5B83\u7684\u4EE3\u7801\u5757\u5185\u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u662F\u4E0D\u4F1A\u5B58\u5728\u91CD\u6392\u5E8F\u7684\u95EE\u9898\u7684</p><h3 id="\u4F7F\u7528volatile\u5B8C\u6210\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528volatile\u5B8C\u6210\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528volatile\u5B8C\u6210\u5355\u4F8B\u8BBE\u8BA1\u6A21\u5F0F</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">Singleton</span> INSTANCE<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>INSTANCE <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> INSTANCE<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//            \u4E8C\u6B21\u5224\u65AD \u9632\u6B62\u77AC\u95F4\u591A\u4E2A\u5BF9\u8C61\u540C\u65F6new\u4E86\u5BF9\u8C61\uFF0C\u52A0\u4E86synchronized\u540E\u540C\u65F6\u53EA\u6709\u4E00\u4E2A\u5BF9\u8C61\u80FD\u8FDB\u6765</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>INSTANCE <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> INSTANCE<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            INSTANCE <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> INSTANCE<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005\u8BF4\u4F60\u53EF\u4EE5\u9009\u62E9\u61D2\u6C49\u5F0F</p><h3 id="\u61D2\u6C49\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u61D2\u6C49\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u61D2\u6C49\u5355\u4F8B\u6A21\u5F0F</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u4F7F\u7528\u9759\u6001\u5185\u90E8\u7C7B\uFF0C\u53EA\u6709\u5728\u4F7F\u7528\u5230\u4E86\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u5BF9\u9F50\u8FDB\u884C\u7C7B\u52A0\u8F7D\uFF0C\u5185\u90E8\u6210\u5458\u53D8\u91CF\u624D\u4F1A\u88AB\u521B\u5EFA
     * \u4FDD\u8BC1\u4E86\u552F\u4E00\u6027
     * \u8FD9\u91CC\u7684\u7EBF\u7A0B\u5B89\u5168\u6027\u662F\u7531JVM\u6765\u4FDD\u8BC1\u7684\uFF0C\u6240\u4EE5\u6BD4\u8F83\u63A8\u8350
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">LazySingleton</span><span class="token punctuation">{</span>
        <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> INSTANCE <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">LazySingleton</span><span class="token punctuation">.</span>INSTANCE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function z(N,j){const a=l("ExternalLinkIcon");return d(),r("div",null,[_,n("p",null,[f,n("a",x,[T,t(a)])]),S])}var I=e(w,[["render",z],["__file","4-\u5171\u4EAB\u6A21\u578B\u4E4B\u5185\u5B58.html.vue"]]);export{I as default};
