!function(){function e(){var e,t,n=this.$$;this.commands=linux_commands||[],this.elm_query=n("query"),this.elm_btn=n("search_btn"),this.elm_result=n("result"),this.elm_search_result=n("search_list_result"),this.root_path=(e=n("current_path"),t=window.location.origin+window.location.pathname,e?t.replace(/\/(c\/)?\w+\.html/,"").replace(/\/$/,""):""),this.query="",this.query_size=5,this.page_size=50,this.init(),this.goToIndex()}e.prototype={$$:function(e){return document.getElementById(e)},goToIndex:function(){for(var e=document.getElementsByTagName("A"),t=0;t<e.length;t++)"/"===e[t].pathname&&(e[t].href=this.root_path+"/")},bindEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},isSreachIndexOF:function(e,t){var n=!1;if(e&&"[object Array]"===toString.call(e)){for(var r=0;r<e.length;r++)e[r].toLowerCase()===t.toLowerCase()&&(n=!0);return n}return!(!e||!t)&&-1<e.toLowerCase().indexOf(t.toLowerCase())},getQueryString:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=decodeURIComponent(window.location.hash.replace(/^(\#\!|\#)/,"")).match(t);return null!=n?unescape(n[2]):null},pushState:function(){window.history&&window.history.pushState&&(this.query?history.pushState({},"linux_commands","#!kw="+this.query):history.pushState({},"linux_commands",window.location.pathname))},simple:function(e,n){return e.replace(/\$\w+\$/gi,function(e){var t=n[e.replace(/\$/g,"")];return void 0===t?"":t})},createKeyworldsHTML:function(e,t,n){var r,s=e.n,i=e.d,l=new RegExp("("+t+")","ig");t&&(s=e.n.replace(l,'<i class="kw">$1</i>'),i=e.d.replace(l,'<i class="kw">$1</i>')||"");var a=this.root_path.replace(/\/$/,"");return r=n?'<a href="'+a+'/c$url$.html"><strong>$name$</strong> - $des$</a><p></p>':'<a href="'+a+'/c$url$.html"><strong>$name$</strong> - $des$</a>',this.simple(r,{name:s,url:e.p,des:i})},searchResult:function(e){var t=this.commands,n=this,r=0,s=t.length,i=[],l=e?this.page_size:this.query_size;if(t&&t.length&&-1<toString.call(t).indexOf("Array"))for(var a=0;r<s&&t[r];r++)(n.isSreachIndexOF(t[r].n,n.query)||n.isSreachIndexOF(t[r].d,n.query))&&a<l&&(i.push(n.createKeyworldsHTML(t[r],n.query,e)),++a);var u=e?this.elm_search_result:this.elm_result;u.innerHTML="";for(r=0;r<i.length;r++){var o;(o=document.createElement("LI")).innerHTML=i[r],u.appendChild(o)}0===i.length&&((o=document.createElement("LI")).innerHTML=(this.query,"请尝试输入一些字符，进行搜索！</span>"),u.appendChild(o))},selectedResult:function(e){for(var t=this.elm_result.children,n=0,r=0;r<t.length;r++)if("ok"==t[r].className){t[r].className="",n="up"==e?r-1:r+1;break}t[n]&&(t[n].className="ok")},isSelectedResult:function(){for(var e=this.elm_result.children,t=!1,n=0;n<e.length;n++)if("ok"==e[n].className){t=e[n];break}return t},init:function(){var n=this,e=n.getQueryString("kw");this.elm_query.value=e,this.query=e||"",this.elm_search_result&&n.searchResult(!0),this.bindEvent(this.elm_query,"input",function(e){n.query=e.target.value,n.pushState(),n.query?n.searchResult():n.elm_result.style.display="none",n.elm_search_result?n.elm_btn.click():n.elm_result.style.display=n.query?"block":"none"}),this.bindEvent(this.elm_btn,"click",function(e){n.elm_result.style.display="none",n.elm_search_result?n.searchResult(!0):window.location.href=n.root_path+"/list.html#!kw="+n.query}),this.bindEvent(this.elm_query,"focus",function(e){n.searchResult(),n.query&&(n.elm_result.style.display="block")}),this.bindEvent(this.elm_query,"blur",function(e){setTimeout(function(){n.elm_result.style.display="none"},300)}),this.bindEvent(document,"keyup",function(e){if("Enter"==e.key){var t=n.isSelectedResult();if(!t)return n.elm_btn.click();t.children[0]&&t.children[0].click()}else 40===e.keyCode?n.selectedResult():38===e.keyCode&&n.selectedResult("up")}),e&&n.searchResult()}},new e}();