import{o as nm,j as Ie,R as vt,r as zr,$ as ur,W as sm}from"./AlertSnackbar-BaXxwoIK.js";import{G as ch,H as hh,J as om}from"./index-Fb_FVVZ_.js";import{f as um,g as lm,r as dm,h as pm,M as cm,s as hm}from"./svg-icons-DNUUnmec.js";import{I as fm}from"./env-DWkyVZs8.js";import mm from"./KbDocsList-DlhRT6g3.js";import"./index-Czi_jwWr.js";/* empty css                  */import{S as gm}from"./SelectBox-BzoZfIiS.js";import"./index-kLMsUhHg.js";import{P as wm}from"./ProgressButton-B8JfM_Nm.js";import{g as ym}from"./trainingDocuments-BdqmrUQZ.js";var bm="2.0.10",Hh=500,fh="user-agent",ca="",mh="?",$t={FUNCTION:"function",OBJECT:"object",STRING:"string",UNDEFINED:"undefined"},Qt="browser",qr="cpu",Ar="device",_r="engine",ir="os",ha="result",X="name",G="type",ee="vendor",J="version",Lt="architecture",yn="major",Z="model",Gn="console",Ue="mobile",Je="tablet",St="smarttv",Cr="wearable",Ln="xr",gn="embedded",_m="fetcher",Ur="inapp",Eo="brands",Ni="formFactors",ko="fullVersionList",fa="platform",Io="platformVersion",Zn="bitness",ai="sec-ch-ua",vm=ai+"-full-version-list",$m=ai+"-arch",xm=ai+"-"+Zn,Sm=ai+"-form-factors",Tm=ai+"-"+Ue,Em=ai+"-"+Z,Kh=ai+"-"+fa,km=Kh+"-version",Zh=[Eo,ko,Ue,Z,fa,Io,Lt,Ni,Zn],Vn="Amazon",ua="Apple",gh="ASUS",wh="BlackBerry",Di="Google",ao="Huawei",no="Lenovo",yh="Honor",Fn="LG",so="Microsoft",oo="Motorola",bh="Nvidia",_h="OnePlus",uo="OPPO",nn="Samsung",vh="Sharp",sn="Sony",lo="Xiaomi",po="Zebra",$h="Chrome",xh="Chromium",ti="Chromecast",Wn="Edge",on="Firefox",la="Opera",co="Facebook",Sh="Sogou",da="Mobile ",Pi=" Browser",_o="Windows",Im=typeof window!==$t.UNDEFINED,Xt=Im&&window.navigator?window.navigator:void 0,Li=Xt&&Xt.userAgentData?Xt.userAgentData:void 0,Cm=function(_,A){var R={},V=A;if(!Kn(A)){V={};for(var Q in A)for(var Y in A[Q])V[Y]=A[Q][Y].concat(V[Y]?V[Y]:[])}for(var U in _)R[U]=V[U]&&V[U].length%2===0?V[U].concat(_[U]):_[U];return R},Xn=function(_){for(var A={},R=0;R<_.length;R++)A[_[R].toUpperCase()]=_[R];return A},vo=function(_,A){if(typeof _===$t.OBJECT&&_.length>0){for(var R in _)if(ri(A)==ri(_[R]))return!0;return!1}return ma(_)?ri(A)==ri(_):!1},Kn=function(_,A){for(var R in _)return/^(browser|cpu|device|engine|os)$/.test(R)||(A?Kn(_[R]):!1)},ma=function(_){return typeof _===$t.STRING},ho=function(_){if(_){for(var A=[],R=pa(_).split(","),V=0;V<R.length;V++)if(R[V].indexOf(";")>-1){var Q=_n(R[V]).split(";v=");A[V]={brand:Q[0],version:Q[1]}}else A[V]=_n(R[V]);return A}},ri=function(_){return ma(_)?_.toLowerCase():_},$o=function(_){return ma(_)?bn(/[^\d\.]/g,_).split(".")[0]:void 0},pa=function(_){return ma(_)?_n(bn(/\\?\"/g,_),Hh):void 0},Fr=function(_){for(var A in _)if(_.hasOwnProperty(A)){var R=_[A];typeof R==$t.OBJECT&&R.length==2?this[R[0]]=R[1]:this[R]=void 0}return this},bn=function(_,A){return ma(A)?A.replace(_,ca):A},_n=function(_,A){return _=bn(/^\s\s*/,String(_)),typeof A===$t.UNDEFINED?_:_.substring(0,A)},xo=function(_,A){if(!(!_||!A))for(var R=0,V,Q,Y,U,q,S;R<A.length&&!q;){var W=A[R],F=A[R+1];for(V=Q=0;V<W.length&&!q&&W[V];)if(q=W[V++].exec(_),q)for(Y=0;Y<F.length;Y++)S=q[++Q],U=F[Y],typeof U===$t.OBJECT&&U.length>0?U.length===2?typeof U[1]==$t.FUNCTION?this[U[0]]=U[1].call(this,S):this[U[0]]=U[1]:U.length>=3&&(typeof U[1]===$t.FUNCTION&&!(U[1].exec&&U[1].test)?U.length>3?this[U[0]]=S?U[1].apply(this,U.slice(2)):void 0:this[U[0]]=S?U[1].call(this,S,U[2]):void 0:U.length==3?this[U[0]]=S?S.replace(U[1],U[2]):void 0:U.length==4?this[U[0]]=S?U[3].call(this,S.replace(U[1],U[2])):void 0:U.length>4&&(this[U[0]]=S?U[3].apply(this,[S.replace(U[1],U[2])].concat(U.slice(4))):void 0)):this[U]=S||void 0;R+=2}},zm=function(_,A){return A.test.test(_)?A.ifTrue:A.ifFalse},br=function(_,A){for(var R in A)if(typeof A[R]===$t.OBJECT&&A[R].length>0){for(var V=0;V<A[R].length;V++)if(vo(A[R][V],_))return R===mh?void 0:R}else if(vo(A[R],_))return R===mh?void 0:R;return A.hasOwnProperty("*")?A["*"]:_},Th={ME:"4.90","NT 3.51":"3.51","NT 4.0":"4.0",2e3:["5.0","5.01"],XP:["5.1","5.2"],Vista:"6.0",7:"6.1",8:"6.2","8.1":"6.3",10:["6.4","10.0"],NT:""},Eh={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},Am={Chrome:"Google Chrome",Edge:"Microsoft Edge","Edge WebView2":"Microsoft Edge WebView2","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"},Om={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[J,[X,da+"Chrome"]],[/webview.+edge\/([\w\.]+)/i],[J,[X,Wn+" WebView"],[G,Ur]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[J,[X,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[X,J],[/opios[\/ ]+([\w\.]+)/i],[J,[X,la+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[J,[X,la+" GX"]],[/\bopr\/([\w\.]+)/i],[J,[X,la]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[J,[X,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[J,[X,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,/(brave)(?: chrome)?\/([\d\.]+)/i,/(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,/(qwant)(?:ios|mobile)\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[X,J],[/quark(?:pc)?\/([-\w\.]+)/i],[J,[X,"Quark"]],[/\bddg\/([\w\.]+)/i],[J,[X,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb| ucpc)[\/ ]?([\w\.]+)/i],[J,[X,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[J,[X,"WeChat"]],[/konqueror\/([\w\.]+)/i],[J,[X,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[J,[X,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[J,[X,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[J,[X,"Smart "+no+Pi]],[/(av(?:ast|g|ira))\/([\w\.]+)/i],[[X,/(.+)/,"$1 Secure"+Pi],J],[/norton\/([\w\.]+)/i],[J,[X,"Norton Private"+Pi]],[/\bfocus\/([\w\.]+)/i],[J,[X,on+" Focus"]],[/ mms\/([\w\.]+)$/i],[J,[X,la+" Neon"]],[/ opt\/([\w\.]+)$/i],[J,[X,la+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[J,[X,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[J,[X,"Dolphin"]],[/coast\/([\w\.]+)/i],[J,[X,la+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[J,[X,"MIUI"+Pi]],[/fxios\/([\w\.-]+)/i],[J,[X,da+on]],[/\bqihoobrowser\/?([\w\.]*)/i],[J,[X,"360"]],[/\b(qq)\/([\w\.]+)/i],[[X,/(.+)/,"$1Browser"],J],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[X,/(.+)/,"$1"+Pi],J],[/ HBPC\/([\w\.]+)/],[J,[X,ao+Pi]],[/samsungbrowser\/([\w\.]+)/i],[J,[X,nn+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[J,[X,Sh+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[X,Sh+" Mobile"],J],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[X,J],[/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],[X],[/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],[J,X],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[X,co],J,[G,Ur]],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(bing)(?:web|sapphire)\/([\w\.]+)/i,/(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i],[X,J,[G,Ur]],[/\bgsa\/([\w\.]+) .*safari\//i],[J,[X,"GSA"],[G,Ur]],[/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],[J,[X,"TikTok"],[G,Ur]],[/\[(linkedin)app\]/i],[X,[G,Ur]],[/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],[[X,/(.+)/,"Zalo"],J,[G,Ur]],[/(chromium)[\/ ]([-\w\.]+)/i],[X,J],[/ome-(lighthouse)$/i],[X,[G,_m]],[/headlesschrome(?:\/([\w\.]+)| )/i],[J,[X,$h+" Headless"]],[/wv\).+chrome\/([\w\.]+).+edgw\//i],[J,[X,Wn+" WebView2"],[G,Ur]],[/; wv\).+(chrome)\/([\w\.]+)/i],[[X,$h+" WebView"],J,[G,Ur]],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[J,[X,"Android"+Pi]],[/chrome\/([\w\.]+) mobile/i],[J,[X,da+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[X,J],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[J,[X,da+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[X,da+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[J,X],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[X,[J,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[X,J],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[X,da+on],J],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[X,"Netscape"],J],[/(wolvic|librewolf)\/([\w\.]+)/i],[X,J],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[J,[X,on+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[X,[J,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[X,[J,/[^\d\.]+./,ca]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[Lt,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[Lt,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[Lt,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[Lt,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[Lt,"arm"]],[/ sun4\w[;\)]/i],[[Lt,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,/((ppc|powerpc)(64)?)( mac|;|\))/i,/(?:osf1|[freopnt]{3,4}bsd) (alpha)/i],[[Lt,/ower/,ca,ri]],[/mc680.0/i],[[Lt,"68k"]],[/winnt.+\[axp/i],[[Lt,"alpha"]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[Z,[ee,nn],[G,Je]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,/sec-(sgh\w+)/i],[Z,[ee,nn],[G,Ue]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],[Z,[ee,ua],[G,Ue]],[/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,/\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],[Z,[ee,ua],[G,Je]],[/(macintosh);/i],[Z,[ee,ua]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[Z,[ee,vh],[G,Ue]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[Z,[ee,yh],[G,Je]],[/honor([-\w ]+)[;\)]/i],[Z,[ee,yh],[G,Ue]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[Z,[ee,ao],[G,Je]],[/(?:huawei) ?([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],[Z,[ee,ao],[G,Ue]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[Z,/_/g," "],[ee,lo],[G,Je]],[/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,/; ([\w ]+) miui\/v?\d/i],[[Z,/_/g," "],[ee,lo],[G,Ue]],[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[Z,[ee,_h],[G,Ue]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[Z,[ee,uo],[G,Ue]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[Z,[ee,br,{OnePlus:["203","304","403","404","413","415"],"*":uo}],[G,Je]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[Z,[ee,"BLU"],[G,Ue]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[Z,[ee,"Vivo"],[G,Ue]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[Z,[ee,"Realme"],[G,Ue]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[Z,[ee,no],[G,Je]],[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],[Z,[ee,no],[G,Ue]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i],[Z,[ee,oo],[G,Ue]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[Z,[ee,oo],[G,Je]],[/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[Z,[ee,Fn],[G,Je]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,/\blg-?([\d\w]+) bui/i],[Z,[ee,Fn],[G,Ue]],[/(nokia) (t[12][01])/i],[ee,Z,[G,Je]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],[[Z,/_/g," "],[G,Ue],[ee,"Nokia"]],[/(pixel (c|tablet))\b/i],[Z,[ee,Di],[G,Je]],[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],[Z,[ee,Di],[G,Ue]],[/(google) (pixelbook( go)?)/i],[ee,Z],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[Z,[ee,sn],[G,Ue]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[Z,"Xperia Tablet"],[ee,sn],[G,Je]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[Z,[ee,Vn],[G,Je]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[Z,/(.+)/g,"Fire Phone $1"],[ee,Vn],[G,Ue]],[/(playbook);[-\w\),; ]+(rim)/i],[Z,ee,[G,Je]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/(?:blackberry|\(bb10;) (\w+)/i],[Z,[ee,wh],[G,Ue]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[Z,[ee,gh],[G,Je]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[Z,[ee,gh],[G,Ue]],[/(nexus 9)/i],[Z,[ee,"HTC"],[G,Je]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[ee,[Z,/_/g," "],[G,Ue]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[Z,[ee,"TCL"],[G,Je]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[Z,[ee,"TCL"],[G,Ue]],[/(itel) ((\w+))/i],[[ee,ri],Z,[G,br,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[Z,[ee,"Acer"],[G,Je]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[Z,[ee,"Meizu"],[G,Ue]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[Z,[ee,"Ulefone"],[G,Ue]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[Z,[ee,"Energizer"],[G,Ue]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[Z,[ee,"Cat"],[G,Ue]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[Z,[ee,"Smartfren"],[G,Ue]],[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],[Z,[ee,"Nothing"],[G,Ue]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[Z,[ee,"Archos"],[G,Je]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[Z,[ee,"Archos"],[G,Ue]],[/blackview ([-\w ]+)( b|\))/i,/; (bv\d{4}[-\w ]*)( b|\))/i],[Z,[ee,"Blackview"],[G,Ue]],[/; (n159v)/i],[Z,[ee,"HMD"],[G,Ue]],[/((revvl[ \w\+]+|tm(?:rv|af)\w*[45]g(?:tb)?))( b|\))/i],[Z,[G,zm,{test:/ta?b/i,ifTrue:Je,ifFalse:Ue}],[ee,"T-Mobile"]],[/(imo) (tab \w+)/i,/(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],[ee,Z,[G,Je]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|coolpad|cubot|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([-\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(oppo) ?([\w ]+) bui/i,/(hisense) ([ehv][\w ]+)\)/i,/droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i],[ee,Z,[G,Ue]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[ee,Z,[G,Je]],[/(surface duo)/i],[Z,[ee,so],[G,Je]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[Z,[ee,"Fairphone"],[G,Ue]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[Z,[ee,bh],[G,Je]],[/(sprint) (\w+)/i],[ee,Z,[G,Ue]],[/(kin\.[onetw]{3})/i],[[Z,/\./g," "],[ee,so],[G,Ue]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[Z,[ee,po],[G,Je]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[Z,[ee,po],[G,Ue]],[/(philips)[\w ]+tv/i,/smart-tv.+(samsung)/i],[ee,[G,St]],[/hbbtv.+maple;(\d+)/i],[[Z,/^/,"SmartTV"],[ee,nn],[G,St]],[/(vizio)(?: |.+model\/)(\w+-\w+)/i,/tcast.+(lg)e?. ([-\w]+)/i],[ee,Z,[G,St]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[ee,Fn],[G,St]],[/(apple) ?tv/i],[ee,[Z,ua+" TV"],[G,St]],[/crkey.*devicetype\/chromecast/i],[[Z,ti+" Third Generation"],[ee,Di],[G,St]],[/crkey.*devicetype\/([^/]*)/i],[[Z,/^/,"Chromecast "],[ee,Di],[G,St]],[/fuchsia.*crkey/i],[[Z,ti+" Nest Hub"],[ee,Di],[G,St]],[/crkey/i],[[Z,ti],[ee,Di],[G,St]],[/(portaltv)/i],[Z,[ee,co],[G,St]],[/droid.+aft(\w+)( bui|\))/i],[Z,[ee,Vn],[G,St]],[/(shield \w+ tv)/i],[Z,[ee,bh],[G,St]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[Z,[ee,vh],[G,St]],[/(bravia[\w ]+)( bui|\))/i],[Z,[ee,sn],[G,St]],[/(mi(tv|box)-?\w+) bui/i],[Z,[ee,lo],[G,St]],[/Hbbtv.*(technisat) (.*);/i],[ee,Z,[G,St]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[ee,/.+\/(\w+)/,"$1",br,{LG:"lge"}],[Z,_n],[G,St]],[/(playstation \w+)/i],[Z,[ee,sn],[G,Gn]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[Z,[ee,so],[G,Gn]],[/(ouya)/i,/(nintendo) (\w+)/i,/(retroid) (pocket ([^\)]+))/i,/(valve).+(steam deck)/i,/droid.+; ((shield|rgcube|gr0006))( bui|\))/i],[[ee,br,{Nvidia:"Shield",Anbernic:"RGCUBE",Logitech:"GR0006"}],Z,[G,Gn]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[Z,[ee,nn],[G,Cr]],[/((pebble))app/i,/(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[ee,Z,[G,Cr]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[Z,[ee,uo],[G,Cr]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[Z,[ee,ua],[G,Cr]],[/(opwwe\d{3})/i],[Z,[ee,_h],[G,Cr]],[/(moto 360)/i],[Z,[ee,oo],[G,Cr]],[/(smartwatch 3)/i],[Z,[ee,sn],[G,Cr]],[/(g watch r)/i],[Z,[ee,Fn],[G,Cr]],[/droid.+; (wt63?0{2,3})\)/i],[Z,[ee,po],[G,Cr]],[/droid.+; (glass) \d/i],[Z,[ee,Di],[G,Ln]],[/(pico) ([\w ]+) os\d/i],[ee,Z,[G,Ln]],[/(quest( \d| pro)?s?).+vr/i],[Z,[ee,co],[G,Ln]],[/mobile vr; rv.+firefox/i],[[G,Ln]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[ee,[G,gn]],[/(aeobc)\b/i],[Z,[ee,Vn],[G,gn]],[/(homepod).+mac os/i],[Z,[ee,ua],[G,gn]],[/windows iot/i],[[G,gn]],[/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],[Z,[G,St]],[/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],[[G,St]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],[Z,[G,br,{mobile:"Mobile",xr:"VR","*":Je}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[G,Je]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[G,Ue]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[Z,[ee,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[J,[X,Wn+"HTML"]],[/(arkweb)\/([\w\.]+)/i],[X,J],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[J,[X,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[X,J],[/ladybird\//i],[[X,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[J,X]],os:[[/(windows nt) (6\.[23]); arm/i],[[X,/N/,"R"],[J,br,Th]],[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,/(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],[X,J],[/windows nt ?([\d\.\)]*)(?!.+xbox)/i,/\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],[[J,/(;|\))/g,"",br,Th],[X,_o]],[/(windows ce)\/?([\d\.]*)/i],[X,J],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,/\btvos ?([\w\.]+)/i,/cfnetwork\/.+darwin/i],[[J,/_/g,"."],[X,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],[[X,"macOS"],[J,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[J,[X,ti+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[J,[X,ti+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[J,[X,ti+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[J,[X,ti+" Linux"]],[/crkey\/([\d\.]+)/i],[J,[X,ti]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[J,X],[/(ubuntu) ([\w\.]+) like android/i],[[X,/(.+)/,"$1 Touch"],J],[/(harmonyos)[\/ ]?([\d\.]*)/i,/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],[X,J],[/\(bb(10);/i],[J,[X,wh]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[J,[X,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],[J,[X,on+" OS"]],[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,/webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],[J,[X,"webOS"]],[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],[[J,br,{25:"120",24:"108",23:"94",22:"87",6:"79",5:"68",4:"53",3:"38",2:"538",1:"537","*":"TV"}],[X,"webOS"]],[/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],[J,[X,"watchOS"]],[/cros [\w]+(?:\)| ([\w\.]+)\b)/i],[J,[X,"Chrome OS"]],[/kepler ([\w\.]+); (aft|aeo)/i],[J,[X,"Vega OS"]],[/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/linux.+(mint)[\/\(\) ]?([\w\.]*)/i,/(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/\b(aix)[; ]([1-9\.]{0,4})/i,/(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) ?(r\d)?/i],[X,J],[/(sunos) ?([\d\.]*)/i],[[X,"Solaris"],J],[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[X,J]]},qn=(function(){var _={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}};return Fr.call(_.init,[[Qt,[X,J,yn,G]],[qr,[Lt]],[Ar,[G,Z,ee]],[_r,[X,J]],[ir,[X,J]]]),Fr.call(_.isIgnore,[[Qt,[J,yn]],[_r,[J]],[ir,[J]]]),Fr.call(_.isIgnoreRgx,[[Qt,/ ?browser$/i],[ir,/ ?os$/i]]),Fr.call(_.toString,[[Qt,[X,J]],[qr,[Lt]],[Ar,[ee,Z]],[_r,[X,J]],[ir,[X,J]]]),_})(),Rm=function(_,A){var R=qn.init[A],V=qn.isIgnore[A]||0,Q=qn.isIgnoreRgx[A]||0,Y=qn.toString[A]||0;function U(){Fr.call(this,R)}return U.prototype.getItem=function(){return _},U.prototype.withClientHints=function(){return Li?Li.getHighEntropyValues(Zh).then(function(q){return _.setCH(new Xh(q,!1)).parseCH().get()}):_.parseCH().get()},U.prototype.withFeatureCheck=function(){return _.detectFeature().get()},A!=ha&&(U.prototype.is=function(q){var S=!1;for(var W in this)if(this.hasOwnProperty(W)&&!vo(V,W)&&ri(Q?bn(Q,this[W]):this[W])==ri(Q?bn(Q,q):q)){if(S=!0,q!=$t.UNDEFINED)break}else if(q==$t.UNDEFINED&&S){S=!S;break}return S},U.prototype.toString=function(){var q=ca;for(var S in Y)typeof this[Y[S]]!==$t.UNDEFINED&&(q+=(q?" ":ca)+this[Y[S]]);return q||$t.UNDEFINED}),U.prototype.then=function(q){var S=this,W=function(){for(var pe in S)S.hasOwnProperty(pe)&&(this[pe]=S[pe])};W.prototype={is:U.prototype.is,toString:U.prototype.toString,withClientHints:U.prototype.withClientHints,withFeatureCheck:U.prototype.withFeatureCheck};var F=new W;return q(F),F},new U};function Xh(_,A){if(_=_||{},Fr.call(this,Zh),A)Fr.call(this,[[Eo,ho(_[ai])],[ko,ho(_[vm])],[Ue,/\?1/.test(_[Tm])],[Z,pa(_[Em])],[fa,pa(_[Kh])],[Io,pa(_[km])],[Lt,pa(_[$m])],[Ni,ho(_[Sm])],[Zn,pa(_[xm])]]);else for(var R in _)this.hasOwnProperty(R)&&typeof _[R]!==$t.UNDEFINED&&(this[R]=_[R])}function ii(_,A,R,V){return Fr.call(this,[["itemType",_],["ua",A],["uaCH",V],["rgxMap",R],["data",Rm(this,_)]]),this}ii.prototype.get=function(_){return _?this.data.hasOwnProperty(_)?this.data[_]:void 0:this.data};ii.prototype.set=function(_,A){return this.data[_]=A,this};ii.prototype.setCH=function(_){return this.uaCH=_,this};ii.prototype.detectFeature=function(){if(Xt&&Xt.userAgent==this.ua)switch(this.itemType){case Qt:Xt.brave&&typeof Xt.brave.isBrave==$t.FUNCTION&&this.set(X,"Brave");break;case Ar:!this.get(G)&&Li&&Li[Ue]&&this.set(G,Ue),this.get(Z)=="Macintosh"&&Xt&&typeof Xt.standalone!==$t.UNDEFINED&&Xt.maxTouchPoints&&Xt.maxTouchPoints>2&&this.set(Z,"iPad").set(G,Je);break;case ir:!this.get(X)&&Li&&Li[fa]&&this.set(X,Li[fa]);break;case ha:var _=this.data,A=function(R){return _[R].getItem().detectFeature().get()};this.set(Qt,A(Qt)).set(qr,A(qr)).set(Ar,A(Ar)).set(_r,A(_r)).set(ir,A(ir))}return this};ii.prototype.parseUA=function(){switch(this.itemType!=ha&&xo.call(this.data,this.ua,this.rgxMap),this.itemType){case Qt:this.set(yn,$o(this.get(J)));break;case ir:if(this.get(X)=="iOS"&&this.get(J)&&/^1[89][^\d]/.exec(this.get(J))){var _=/\) Version\/((\d+)[\d\.]*)/.exec(this.ua);_&&parseInt(_[2],10)>=26&&this.set(J,_[1])}break}return this};ii.prototype.parseCH=function(){var _=this.uaCH,A=this.rgxMap;switch(this.itemType){case Qt:case _r:var R=_[ko]||_[Eo],V;if(R)for(var Q=0;Q<R.length;Q++){var Y=R[Q].brand||R[Q],U=R[Q].version;this.itemType==Qt&&!/not.a.brand/i.test(Y)&&(!V||/Chrom/.test(V)&&Y!=xh||V==Wn&&/WebView2/.test(Y))&&(Y=br(Y,Am),V=this.get(X),V&&!/Chrom/.test(V)&&/Chrom/.test(Y)||this.set(X,Y).set(J,U).set(yn,$o(U)),V=Y),this.itemType==_r&&Y==xh&&this.set(J,U)}break;case qr:var q=_[Lt];q&&(q&&_[Zn]=="64"&&(q+="64"),xo.call(this.data,q+";",A));break;case Ar:if(_[Ue]&&this.set(G,Ue),_[Z]&&(this.set(Z,_[Z]),!this.get(G)||!this.get(ee))){var S={};xo.call(S,"droid 9; "+_[Z]+")",A),!this.get(G)&&S.type&&this.set(G,S.type),!this.get(ee)&&S.vendor&&this.set(ee,S.vendor)}if(_[Ni]){var W;if(typeof _[Ni]!="string")for(var F=0;!W&&F<_[Ni].length;)W=br(_[Ni][F++],Eh);else W=br(_[Ni],Eh);this.set(G,W)}break;case ir:var pe=_[fa];if(pe){var ue=_[Io];pe==_o&&(ue=parseInt($o(ue),10)>=13?"11":"10"),this.set(X,pe).set(J,ue)}this.get(X)==_o&&_[Z]=="Xbox"&&this.set(X,"Xbox").set(J,void 0);break;case ha:var le=this.data,ae=function(re){return le[re].getItem().setCH(_).parseCH().get()};this.set(Qt,ae(Qt)).set(qr,ae(qr)).set(Ar,ae(Ar)).set(_r,ae(_r)).set(ir,ae(ir))}return this};function Gr(_,A,R){if(typeof _===$t.OBJECT?(Kn(_,!0)?(typeof A===$t.OBJECT&&(R=A),A=_):(R=_,A=void 0),_=void 0):typeof _===$t.STRING&&!Kn(A,!0)&&(R=A,A=void 0),R)if(typeof R.append===$t.FUNCTION){var V={};R.forEach(function(F,pe){V[String(pe).toLowerCase()]=F}),R=V}else{var Q={};for(var Y in R)R.hasOwnProperty(Y)&&(Q[String(Y).toLowerCase()]=R[Y]);R=Q}if(!(this instanceof Gr))return new Gr(_,A,R).getResult();var U=typeof _===$t.STRING?_:R&&R[fh]?R[fh]:Xt&&Xt.userAgent?Xt.userAgent:ca,q=new Xh(R,!0),S=Om,W=function(F){return F==ha?function(){return new ii(F,U,S,q).set("ua",U).set(Qt,this.getBrowser()).set(qr,this.getCPU()).set(Ar,this.getDevice()).set(_r,this.getEngine()).set(ir,this.getOS()).get()}:function(){return new ii(F,U,S[F],q).parseUA().get()}};return Fr.call(this,[["getBrowser",W(Qt)],["getCPU",W(qr)],["getDevice",W(Ar)],["getEngine",W(_r)],["getOS",W(ir)],["getResult",W(ha)],["getUA",function(){return U}],["setUA",function(F){return ma(F)&&(U=_n(F,Hh)),this}],["useExtension",function(F){return F&&(S=Cm(S,F)),this}]]).setUA(U).useExtension(A),this}Gr.VERSION=bm;Gr.BROWSER=Xn([X,J,yn,G]);Gr.CPU=Xn([Lt]);Gr.DEVICE=Xn([Z,ee,G,Gn,Ue,St,Je,Cr,gn]);Gr.ENGINE=Gr.OS=Xn([X,J]);const un=new Map;function Mm(_){const A=_.toString();if(un.has(A))return un.get(A);const R=new Promise((V,Q)=>{_().then(Y=>{V(Y),un.delete(A)}).catch(Y=>{Q(Y),un.delete(A)})});return un.set(A,R),R}const Co="lp-cid";let zo;function lg(){try{return sessionStorage.getItem(Co)}catch(_){return console.error("Unable to use browser cache",_),zo}}function dg(_){try{zo=_,sessionStorage.setItem(Co,_)}catch(A){console.error("Unable to use browser cache",A)}}function pg(){try{zo=void 0,sessionStorage.removeItem(Co)}catch(_){console.error("Unable to use browser cache",_)}}async function Qh(){const _=fm;let A=null;const R=sessionStorage.getItem("locationDetails");if(!R)A=await Mm(()=>nm(`https://api.ipdata.co?api-key=${_}`)).catch(V=>({country:"Unavailable",city:"Unavailable",ip:"Unavailable",unavailable_reason:V.message})),sessionStorage.setItem("locationDetails",JSON.stringify(A));else try{A=JSON.parse(R)}catch{A={country:"Unavailable",city:"Unavailable",ip:"Unavailable",unavailable_reason:"Error parsing from sessionStorage"}}return A}async function cg(){const _=await Qh(),R=new Gr().getResult()||{},{ip:V,is_eu:Q,city:Y,region:U,region_code:q,region_type:S,country_name:W,country_code:F,continent_name:pe,continent_code:ue,latitude:le,longitude:ae,postal:re,calling_code:_e,time_zone:qe,currency:Ze}=_,ve={ipAddress:V,deviceType:R.device?.type,browserName:R.browser?.name,osName:R.os?.name,...Bm()};return ve.locationDetails={is_eu:Q,city:Y,region:U,region_code:q,region_type:S,country_name:W,country_code:F,continent_name:pe,continent_code:ue,latitude:le,longitude:ae,postal:re,calling_code:_e,time_zone:qe,currency:Ze},ve}const Yh={name:"English",native:"English",code:"en"},So=[Yh],Jh="lp_prefLang";function ef(){let _=null;const A=localStorage.getItem(Jh);if(A)try{const{name:R,native:V,code:Q}=JSON.parse(A);R&&V&&Q&&(_={name:R,native:V,code:Q})}catch(R){console.log("Error parsing language preference:",R)}return _||Yh}function hg(_){_&&localStorage.setItem(Jh,JSON.stringify(_))}function Bm(){const _=new URLSearchParams(window.location.search),A=_.get("sourceUrl")||void 0,R=_.get("referrerUrl")||void 0;return{utmParameters:Array.from(_.keys()).reduce((Q,Y)=>{if(Y.startsWith("utm_")){Q=Q||{};const U=_.get(Y);U&&U!=="null"&&(Q[Y]=U)}return Q},void 0),sourceUrl:A,referrerUrl:R}}function fg(_,A={}){if(!_)return;const{chatWindowType:R,chatWindowWidth:V,chatWindowHeight:Q,mobileChatWindowWidth:Y,mobileChatWindowHeight:U,chatDisclaimer:q,hideLivservBranding:S,windowAlign:W,minimizeOnClick:F,paddingLeft:pe,paddingBottom:ue,fontType:le,fontName:ae,remoteFontLink:re,externalCssLinks:_e,maximizeChatWindowAfter:qe,multiLanguageChat:Ze,translateLanguages:ve,defaultLanguage:Ce,launcherType:me,buttonOnMobile:he,barText:je,launcherSpacingCorner:se,launcherSpacingBottom:Ge,showMinimizeButtonToolTip:et,titleText:rt,subTitleText:st,bgColor:it,fontColor:ft,headerPadding:Yt,logoWidth:Fe,logoHeight:Rt,headerLogoMargin:Jt,headerFontSize:Ct,botLogo:lt,hideRefreshButton:zt,launcherTooltipText:At,visitorBorderColor:Mt,visitorBackgroundColor:Vt,visitorFontColor:ar,visitorMessageLogo:Ft,visitorBubbleBorderCurve:Et,botBorderColor:We,botBackgroundColor:Qe,botFontColor:Xe,botMessageLogo:qt,botBubbleBorderCurve:Ye,messageBubbleLogo:er,fontSize:dt,botChatButton:pt,placeholder:ot,domainSettings:ut,activateVoiceBot:Pt,openLinksInSameTab:vr}=_,{url:Wr}=lt||{},{url:Bt}=Ft||{},{url:$r}=qt||{},{url:ga}=pt||{},ni={launcherType:me,buttonLogoUrl:ga,spacingCorner:se,spacingBottom:Ge,showMinimizeButtonToolTip:et};me==="bar"&&(ni.buttonOnMobile=he&&window.outerWidth<=700,ni.barText=je);const Vi=kh(it);let Fi=V||"380px",jr=Q||"500px";return window.outerWidth<=700&&(Fi=Y||V||"380px",jr=U||Q||"500px"),{window:{width:Fi,height:jr,align:W,minimizeOnClick:F,spacingCorner:pe||"5px",spacingBottom:ue||"5px",fontFamily:ae,disclaimer:q,hideLivservBranding:S,domainSettings:ut,chatWindowType:R,maximizeChatWindowAfter:qe,openLinksInSameTab:vr,...A.window},remoteFontLink:le==="remote"?re:void 0,externalCssLinks:_e,launcher:{launcherTooltipText:At,...ni,...A.launcher},header:{titleText:rt,subTitleText:st,bgColor:it,secBgColor:Vi,fontColor:ft,hideRefreshButton:zt,padding:Yt,fontSize:Ct,logo:Wr?{width:Fe,height:Rt,margin:Jt,url:Wr}:void 0,...A.header},body:{visitorBlock:{borderColor:Mt,backgroundColor:Vt,color:ar,useLogo:!!Bt,logoUrl:Bt,borderRadius:Et,showLogo:er,fontSize:dt},assistantBlock:{borderColor:We,backgroundColor:Qe,color:Xe,useLogo:!!$r,logoUrl:$r,borderRadius:Ye,showLogo:er,fontSize:dt}},composer:{placeholder:ot,pColor:it,bgColor:kh(it,25),secBgColor:Vi,iconColor:ft,fontSize:dt,multiLanguageChat:Ze,translateLanguages:ve,defaultLanguage:Ce,activateVoiceBot:Pt}}}function kh(_,A=70){if(!_)return _;let R=parseInt(_.slice(1,3),16),V=parseInt(_.slice(3,5),16),Q=parseInt(_.slice(5,7),16);return R=Math.min(255,R+A),V=Math.min(255,V+A),Q=Math.min(255,Q+A),"#"+(1<<24|R<<16|V<<8|Q).toString(16).slice(1)}function Dm({design:_,onClear:A,onHide:R,fullScreen:V}){const{logo:Q,bgColor:Y,secBgColor:U,fontColor:q,titleText:S="Live Chat",subTitleText:W,padding:F,fontSize:pe,hideRefreshButton:ue}=_||{};return Ie.jsxs("div",{className:"header",style:{background:"linear-gradient(to right, "+Y+", "+U+")",padding:F,height:F?"initial":void 0},children:[!Q&&Ie.jsx("div",{className:"icon-block",children:um}),Q&&Ie.jsx("div",{className:"image-block",children:Ie.jsx("img",{src:Q.url,alt:"",style:{width:Q.width,height:Q.height,margin:Q.margin}})}),Ie.jsxs("div",{className:"title-block",children:[Ie.jsx("span",{className:"title",style:{color:q,fontSize:pe},children:S}),W&&Ie.jsx("span",{className:"sub-title",style:{color:q,fontSize:pe},children:W})]}),(R||A)&&Ie.jsxs("div",{className:"controls-block",style:R&&A?{width:"110px"}:void 0,children:[R&&!V&&Ie.jsx("span",{tabIndex:0,className:"icon icon-close",title:"Hide chat",onClick:R,style:{color:q},children:lm}),A&&ue!==!0&&Ie.jsx("span",{tabIndex:0,className:"icon icon-send",title:"Restart conversation",onClick:A,style:{color:q},children:dm})]})]})}function Pm({message:_,hideLivservBranding:A,domainSettings:R}){const[V,Q]=vt.useState(!1),Y=()=>{Q(!0)},U=()=>{Q(!1)};return Ie.jsxs("div",{className:"disclaimer-block",children:[V&&Ie.jsx("div",{className:"disclaimerMessage",children:_}),Ie.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"4px"},children:[!A&&Ie.jsxs("span",{className:"link",style:{display:"inline"},children:["Powered by"," ",R?.displayName?Ie.jsx("a",{href:R?.website,target:"_blank",rel:"noreferrer",children:R?.displayName}):Ie.jsx("a",{href:"https://livserv.ai",target:"_blank",rel:"noreferrer",children:"Livserv.ai"})]}),_&&Ie.jsx("span",{className:"message",style:{display:"inline",cursor:"pointer"},onMouseEnter:Y,onMouseLeave:U,children:A?"Disclaimer":pm})]})]})}async function Um(_){_=_||[];const A=await Qh();if(Array.isArray(A?.languages)){const R=To(So,A.languages);return To(R,_)}else return So}function To(_,A){const R=[..._];return A.forEach(V=>{R.some(Y=>V.name&&Y.name===V.name||V.code&&Y.code===V.code||V.native&&Y.native===V.native)||R.push(V)}),R}function Nm({value:_="en",onChange:A,translateLanguages:R,defaultSelectedLanguage:V,pColor:Q}){const[Y,U]=zr.useState(So),[q,S]=zr.useState(!1),W=zr.useRef(null),[F,pe]=zr.useState(()=>V&&V[0]?V[0].code.toLowerCase():(typeof _=="string"?_:_?.code||_?.name||"en").toLowerCase());zr.useEffect(()=>{Um(R).then(re=>{V&&V.length>0&&(re=To(re,V)),U(re),V&&V.length>0?pe(V[0].code.toLowerCase()):pe("en")})},[R,V]);const ue=Y.find(re=>re.code?.toLowerCase()===F||re.name?.toLowerCase()===F),le=()=>S(!q),ae=re=>{pe(re.code.toLowerCase()),A(re),S(!1)};return zr.useEffect(()=>{const re=_e=>{W.current&&!W.current.contains(_e.target)&&S(!1)};return document.addEventListener("mousedown",re),()=>document.removeEventListener("mousedown",re)},[]),Ie.jsxs("div",{ref:W,className:"language-dropdown",children:[Ie.jsx("button",{onClick:le,className:"language-button",style:{borderColor:Q},children:ue?.code?.toUpperCase()||"EN"}),q&&Ie.jsxs("div",{className:"language-dropdown-popover",children:[Ie.jsx("div",{className:"popover-header",children:"Choose Language"}),Ie.jsx("div",{className:"language-list",children:Y.map((re,_e)=>Ie.jsx("div",{className:`language-item ${ue?.code===re.code?"selected":""}`,onClick:()=>ae(re),children:re.native},_e))})]})]})}var fo={},mo={},ln={},Ih;function tf(){if(Ih)return ln;Ih=1,Object.defineProperty(ln,"__esModule",{value:!0}),ln.baseAssetPath=void 0;const A=typeof window<"u"&&typeof window.document<"u"?window.document.currentScript:null;let R="/";return A&&(R=A.src.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^/]+$/,"/")),ln.baseAssetPath=R,ln}var dn={},Ch;function Ao(){if(Ch)return dn;Ch=1,Object.defineProperty(dn,"__esModule",{value:!0}),dn.defaultModelFetcher=void 0;const _=A=>fetch(A).then(R=>R.arrayBuffer());return dn.defaultModelFetcher=_,dn}var Nr={},pn={},zh;function vn(){if(zh)return pn;zh=1,Object.defineProperty(pn,"__esModule",{value:!0}),pn.log=void 0;const _=A=>R=>{console.log(`VAD | ${A} >`,R)};return pn.log={error:_("error"),debug:_("debug"),warn:_("warn")},pn}var cn={},Ah;function Qn(){if(Ah)return cn;Ah=1,Object.defineProperty(cn,"__esModule",{value:!0}),cn.Message=void 0;var _;return(function(A){A.AudioFrame="AUDIO_FRAME",A.SpeechStart="SPEECH_START",A.VADMisfire="VAD_MISFIRE",A.SpeechEnd="SPEECH_END",A.SpeechStop="SPEECH_STOP",A.SpeechRealStart="SPEECH_REAL_START",A.FrameProcessed="FRAME_PROCESSED"})(_||(cn.Message=_={})),cn}var Oh;function Oo(){if(Oh)return Nr;Oh=1,Object.defineProperty(Nr,"__esModule",{value:!0}),Nr.FrameProcessor=Nr.validateOptions=Nr.defaultFrameProcessorOptions=void 0;const _=vn(),A=Qn();Nr.defaultFrameProcessorOptions={positiveSpeechThreshold:.3,negativeSpeechThreshold:.25,preSpeechPadMs:800,redemptionMs:1400,minSpeechMs:400,submitUserSpeechOnPause:!1};function R(U){(U.positiveSpeechThreshold<0||U.positiveSpeechThreshold>1)&&_.log.error("positiveSpeechThreshold should be a number between 0 and 1"),(U.negativeSpeechThreshold<0||U.negativeSpeechThreshold>U.positiveSpeechThreshold)&&_.log.error("negativeSpeechThreshold should be between 0 and positiveSpeechThreshold"),U.preSpeechPadMs<0&&_.log.error("preSpeechPadMs should be positive"),U.redemptionMs<0&&_.log.error("redemptionMs should be positive"),U.minSpeechMs<0&&_.log.error("minSpeechMs should be positive")}Nr.validateOptions=R;const V=U=>{const q=U.reduce((W,F)=>(W.push(W.at(-1)+F.length),W),[0]),S=new Float32Array(q.at(-1));return U.forEach((W,F)=>{const pe=q[F];S.set(W,pe)}),S};function Q(U,q){const S=Math.floor(U.redemptionMs/q),W=Math.floor(U.preSpeechPadMs/q),F=Math.floor(U.minSpeechMs/q);return{redemptionFrames:S,preSpeechPadFrames:W,minSpeechFrames:F}}class Y{constructor(q,S,W,F){this.modelProcessFunc=q,this.modelResetFunc=S,this.options=W,this.msPerFrame=F,this.speaking=!1,this.redemptionCounter=0,this.speechFrameCount=0,this.active=!1,this.speechRealStartFired=!1,this.setOptions=ae=>{this.options={...this.options,...ae};const{redemptionFrames:re,preSpeechPadFrames:_e,minSpeechFrames:qe}=Q(this.options,this.msPerFrame);this.redemptionFrames=re,this.preSpeechPadFrames=_e,this.minSpeechFrames=qe},this.reset=()=>{this.speaking=!1,this.speechRealStartFired=!1,this.audioBuffer=[],this.modelResetFunc(),this.redemptionCounter=0,this.speechFrameCount=0},this.pause=ae=>{this.active=!1,this.options.submitUserSpeechOnPause?this.endSegment(ae):this.reset()},this.resume=()=>{this.active=!0},this.endSegment=ae=>{const re=this.audioBuffer;this.audioBuffer=[];const _e=this.speaking;if(this.reset(),_e)if(re.reduce((Ze,ve)=>ve.isSpeech?Ze+1:Ze,0)>=this.minSpeechFrames){const Ze=V(re.map(ve=>ve.frame));ae({msg:A.Message.SpeechEnd,audio:Ze})}else ae({msg:A.Message.VADMisfire});return{}},this.process=async(ae,re)=>{if(!this.active)return;const _e=await this.modelProcessFunc(ae),qe=_e.isSpeech>=this.options.positiveSpeechThreshold;if(re({probs:_e,msg:A.Message.FrameProcessed,frame:ae}),this.audioBuffer.push({frame:ae,isSpeech:qe}),qe&&(this.speechFrameCount++,this.redemptionCounter=0),qe&&!this.speaking&&(this.speaking=!0,re({msg:A.Message.SpeechStart})),this.speaking&&this.speechFrameCount===this.minSpeechFrames&&!this.speechRealStartFired&&(this.speechRealStartFired=!0,re({msg:A.Message.SpeechRealStart})),_e.isSpeech<this.options.negativeSpeechThreshold&&this.speaking&&++this.redemptionCounter>=this.redemptionFrames){this.redemptionCounter=0,this.speechFrameCount=0,this.speaking=!1,this.speechRealStartFired=!1;const Ze=this.audioBuffer;if(this.audioBuffer=[],Ze.reduce((Ce,me)=>me.isSpeech?Ce+1:Ce,0)>=this.minSpeechFrames){const Ce=V(Ze.map(me=>me.frame));re({msg:A.Message.SpeechEnd,audio:Ce})}else re({msg:A.Message.VADMisfire})}if(!this.speaking){for(;this.audioBuffer.length>this.preSpeechPadFrames;)this.audioBuffer.shift();this.speechFrameCount=0}},this.audioBuffer=[];const{redemptionFrames:pe,preSpeechPadFrames:ue,minSpeechFrames:le}=Q(this.options,this.msPerFrame);this.redemptionFrames=pe,this.preSpeechPadFrames=ue,this.minSpeechFrames=le,this.reset()}}return Nr.FrameProcessor=Y,Nr}var Lr={},go={exports:{}},Rh;function Lm(){return Rh||(Rh=1,(function(_,A){var R=(()=>{var V=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,Y=Object.getOwnPropertyNames,U=Object.prototype.hasOwnProperty,q=(e=>typeof ur<"u"?ur:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof ur<"u"?ur:t)[r]}):e)(function(e){if(typeof ur<"u")return ur.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),S=(e,t)=>()=>(e&&(t=e(e=0)),t),W=(e,t)=>{for(var r in t)V(e,r,{get:t[r],enumerable:!0})},F=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Y(t))!U.call(e,a)&&a!==r&&V(e,a,{get:()=>t[a],enumerable:!(i=Q(t,a))||i.enumerable});return e},pe=e=>F(V({},"__esModule",{value:!0}),e),ue,le,ae,re,_e,qe=S(()=>{ue=new Map,le=[],ae=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=ue.get(e);if(i===void 0)ue.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=le.indexOf(e);a!==-1&&le.splice(a,1);for(let n=0;n<le.length;n++)if(ue.get(le[n]).priority<=r){le.splice(n,0,e);return}le.push(e)}return}throw new TypeError("not a valid backend")},re=async e=>{let t=ue.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},_e=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),i=r.length===0?le:r,a,n=[],s=new Set;for(let u of i){let l=await re(u);typeof l=="string"?n.push({name:u,err:l}):(a||(a=l),a===l&&s.add(u))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of n)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[a,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),Ze=S(()=>{qe()}),ve,Ce=S(()=>{ve="1.27.0"}),me,he,je=S(()=>{Ce(),me="warning",he={wasm:{},webgl:{},webgpu:{},versions:{common:ve},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);me=e}},get logLevel(){return me}},Object.defineProperty(he,"logLevel",{enumerable:!0})}),se,Ge=S(()=>{je(),se=he}),et,rt,st=S(()=>{et=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",o=t?.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let d=n*a,p=0,h=d,f=d*2,m=-1;s==="RGBA"?(p=0,h=d,f=d*2,m=d*3):s==="RGB"?(p=0,h=d,f=d*2):s==="RBG"&&(p=0,f=d,h=d*2);for(let y=0;y<n;y++)for(let x=0;x<a;x++){let b=(e.data[p++]-l[0])*u[0],w=(e.data[h++]-l[1])*u[1],T=(e.data[f++]-l[2])*u[2],$=m===-1?255:(e.data[m++]-l[3])*u[3];i.fillStyle="rgba("+b+","+w+","+T+","+$+")",i.fillRect(x,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},rt=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let p=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,f=0,m=1,y=2,x=3,b=0,w=p,T=p*2,$=-1;o==="RGBA"?(b=0,w=p,T=p*2,$=p*3):o==="RGB"?(b=0,w=p,T=p*2):o==="RBG"&&(b=0,T=p,w=p*2),i=r.createImageData(a,n);for(let C=0;C<n*a;f+=h,m+=h,y+=h,x+=h,C++)i.data[f]=(e.data[b++]-d[0])*l[0],i.data[m]=(e.data[w++]-d[1])*l[1],i.data[y]=(e.data[T++]-d[2])*l[2],i.data[x]=$===-1?255:(e.data[$++]-d[3])*l[3]}else throw new Error("Can not access image data");return i}}),it,ft,Yt,Fe,Rt,Jt,Ct=S(()=>{Qe(),it=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=r*i,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),p=4,h=0,f=1,m=2,y=3,x=0,b=l,w=l*2,T=-1;o==="RGB"&&(p=3,h=0,f=1,m=2,y=-1),u==="RGBA"?T=l*3:u==="RBG"?(x=0,w=l,b=l*2):u==="BGR"&&(w=0,b=l,x=l*2);for(let $=0;$<l;$++,h+=p,m+=p,f+=p,y+=p)d[x++]=(e[h]+s[0])/n[0],d[b++]=(e[f]+s[1])/n[1],d[w++]=(e[m]+s[2])/n[2],T!==-1&&y!==-1&&(d[T++]=(e[y]+s[3])/n[3]);return u==="RGBA"?new We("float32",d,[1,4,r,i]):new We("float32",d,[1,3,r,i])},ft=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(r){let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let h=e.height,f=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,f=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=h,o.width=f}else o.tensorFormat="RGBA",o.height=h,o.width=f;p.drawImage(e,0,0),s=p.getImageData(0,0,f,h).data}else throw new Error("Can not access image data")}else if(i){let d,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,p=t.resizedWidth):(d=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=d,o.width=p,t!==void 0){let h=u();h.width=p,h.height=d;let f=l(h);if(f!=null)f.putImageData(e,0,0),s=f.getImageData(0,0,p,d).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let h=e.height,f=e.width;return p.drawImage(e,0,0,f,h),s=p.getImageData(0,0,f,h).data,o.height=h,o.width=f,it(s,o)}else throw new Error("Can not access image data")}else{if(n)return new Promise((d,p)=>{let h=u(),f=l(h);if(!e||!f)return p();let m=new Image;m.crossOrigin="Anonymous",m.src=e,m.onload=()=>{h.width=m.width,h.height=m.height,f.drawImage(m,0,0,h.width,h.height);let y=f.getImageData(0,0,h.width,h.height);o.height=h.height,o.width=h.width,d(it(y.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return it(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},Yt=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new We({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},Fe=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new We({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},Rt=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new We({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:n})},Jt=(e,t,r)=>new We({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),lt,zt,At,Mt,Vt=S(()=>{lt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),zt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),At=!1,Mt=()=>{if(!At){At=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(lt.set("int64",BigInt64Array),zt.set(BigInt64Array,"int64")),t&&(lt.set("uint64",BigUint64Array),zt.set(BigUint64Array,"uint64")),i?(lt.set("float16",r),zt.set(r,"float16")):lt.set("float16",Uint16Array)}}}),ar,Ft,Et=S(()=>{Qe(),ar=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Ft=(e,t)=>{switch(e.location){case"cpu":return new We(e.type,e.data,t);case"cpu-pinned":return new We({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new We({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new We({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new We({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),We,Qe=S(()=>{st(),Ct(),Vt(),Et(),We=class{constructor(e,t,r){Mt();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=lt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=lt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")i="string",s=e;else if(u==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let u=zt.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=u,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");a=o,this.cpuData=s,this.dataLocation="cpu"}let n=ar(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return ft(e,t)}static fromTexture(e,t){return Yt(e,t)}static fromGpuBuffer(e,t){return Fe(e,t)}static fromMLTensor(e,t){return Rt(e,t)}static fromPinnedBuffer(e,t,r){return Jt(e,t,r)}toDataURL(e){return et(this,e)}toImageData(e){return rt(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ft(this,e)}}}),Xe,qt=S(()=>{Qe(),Xe=We}),Ye,er,dt,pt,ot,ut,Pt=S(()=>{je(),Ye=(e,t)=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.timeStamp(`${e}::ORT::${t}`)},er=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Ye("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},dt=e=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||er("BEGIN",e)},pt=e=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||er("END",e)},ot=e=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.time(`ORT::${e}`)},ut=e=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.timeEnd(`ORT::${e}`)}}),vr,Wr=S(()=>{qe(),qt(),Pt(),vr=class rf{constructor(t){this.handler=t}async run(t,r,i){dt(),ot("InferenceSession.run");let a={},n={};if(typeof t!="object"||t===null||t instanceof Xe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Xe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let l of r){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);a[l]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,d=Object.getOwnPropertyNames(r);for(let p of this.outputNames)if(d.indexOf(p)!==-1){let h=r[p];(h===null||h instanceof Xe)&&(l=!0,s=!1,a[p]=h)}if(l){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(s)for(let l of this.outputNames)a[l]=null;let o=await this.handler.run(t,a,n),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let d=o[l];d instanceof Xe?u[l]=d:u[l]=new Xe(d.type,d.data,d.dims)}return ut("InferenceSession.run"),pt(),u}async release(){return this.handler.dispose()}static async create(t,r,i,a){dt(),ot("InferenceSession.create");let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let d=t,p=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(p=r,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(h=t.byteLength-p,typeof i=="number"){if(h=i,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||p+h>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-p}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(d,p,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await _e(s),l=await o.createInferenceSessionHandler(n,u);return ut("InferenceSession.create"),pt(),new rf(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Bt,$r=S(()=>{Wr(),Bt=vr}),ga=S(()=>{}),ni=S(()=>{}),Vi=S(()=>{}),Fi=S(()=>{}),jr={};W(jr,{InferenceSession:()=>Bt,TRACE:()=>Ye,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,env:()=>se,registerBackend:()=>ae});var gt=S(()=>{Ze(),Ge(),$r(),qt(),ga(),ni(),Pt(),Vi(),Fi()}),si=S(()=>{}),wa={};W(wa,{default:()=>ya});var oi,ui,ya,Yn=S(()=>{Qc(),Gt(),hi(),oi="ort-wasm-proxy-worker",ui=globalThis.self?.name===oi,ui&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":gi(r.wasm).then(()=>{Ws(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;js(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=Pn(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;Ks(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Zs(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:o}=r;Qs(i,a,n,s,new Array(s.length).fill(null),o).then(u=>{u.some(l=>l[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},Js([...n,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":Ys(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),ya=ui?null:e=>new Worker(e??at,{type:"classic",name:oi})}),ba,_a,at,li,Or,va,$a,di,xa,pi,Sa,ci,Ta,hi=S(()=>{si(),ba=typeof location>"u"?void 0:location.origin,_a=()=>typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0,at=_a(),li=()=>{if(at&&!at.startsWith("blob:"))return at.substring(0,at.lastIndexOf("/")+1)},Or=(e,t)=>{try{let r=t??at;return(r?new URL(e,r):new URL(e)).origin===ba}catch{return!1}},va=(e,t)=>{let r=t??at;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},$a=(e,t)=>`${t??"./"}${e}`,di=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},xa=async e=>(await import(e)).default,pi=(Yn(),pe(wa)).default,Sa=async()=>{if(!at)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Or(at))return[void 0,pi()];let e=await di(at);return[e,pi(e)]},ci=void 0,Ta=async(e,t,r,i)=>{let a=ci&&!(e||t);if(a)if(at)a=Or(at)||i&&!r;else if(i&&!r)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,ci];{let n="ort-wasm-simd-threaded.jsep.mjs",s=e??va(n,t),o=r&&s&&!Or(s,t),u=o?await di(s):s??$a(n,t);return[o?u:void 0,await xa(u)]}}}),fi,Rr,lr,mi,Ea,ka,Ia,gi,ze,Gt=S(()=>{hi(),Rr=!1,lr=!1,mi=!1,Ea=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ka=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ia=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},gi=async e=>{if(Rr)return Promise.resolve();if(lr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(mi)throw new Error("previous call to 'initializeWebAssembly()' failed.");lr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Ia())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ka())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Ea();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,o=s?.href??s,u=a?.wasm,l=u?.href??u,d=e.wasmBinary,[p,h]=await Ta(o,n,r>1,!!d||!!l),f=!1,m=[];if(t>0&&m.push(new Promise(y=>{setTimeout(()=>{f=!0,y()},t)})),m.push(new Promise((y,x)=>{let b={numThreads:r};if(d)b.wasmBinary=d,b.locateFile=w=>w;else if(l||n)b.locateFile=w=>l??n+w;else if(o&&o.indexOf("blob:")!==0)b.locateFile=w=>new URL(w,o).href;else if(p){let w=li();w&&(b.locateFile=T=>w+T)}h(b).then(w=>{lr=!1,Rr=!0,fi=w,y(),p&&URL.revokeObjectURL(p)},w=>{lr=!1,mi=!0,x(w)})})),await Promise.race(m),f)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ze=()=>{if(Rr&&fi)return fi;throw new Error("WebAssembly is not initialized yet.")}}),mt,Mr,$e,wi=S(()=>{Gt(),mt=(e,t)=>{let r=ze(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Mr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Mr(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},$e=e=>{let t=ze(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let n=Number(t.getValue(a,i===4?"i32":"i64")),s=t.getValue(a+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${n}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Ca,Jn=S(()=>{Gt(),wi(),Ca=e=>{let t=ze(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=mt(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&$e("Can't create run options."),e?.extra!==void 0&&Mr(e.extra,"",new WeakSet,(s,o)=>{let u=mt(s,i),l=mt(o,i);t._OrtAddRunConfigEntry(r,u,l)!==0&&$e(`Can't set a run config entry: ${s} - ${o}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),za,Aa,Oa,Ut,Ra,Ma,es=S(()=>{Gt(),wi(),za=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Aa=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Oa=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ut=(e,t,r,i)=>{let a=mt(t,i),n=mt(r,i);ze()._OrtAddSessionConfigEntry(e,a,n)!==0&&$e(`Can't set a session config entry: ${t} - ${r}.`)},Ra=async(e,t,r)=>{let i=t.executionProviders;for(let a of i){let n=typeof a=="string"?a:a.name,s=[];switch(n){case"webnn":if(n="WEBNN",Ut(e,"session.disable_quant_qdq","1",r),Ut(e,"session.disable_qdq_constant_folding","1",r),typeof a!="string"){let p=a?.deviceType;p&&Ut(e,"deviceType",p,r)}break;case"webgpu":if(n="JS",typeof a!="string"){let p=a;if(p?.preferredLayout){if(p.preferredLayout!=="NCHW"&&p.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${p.preferredLayout}`);Ut(e,"preferredLayout",p.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let o=mt(n,r),u=s.length,l=0,d=0;if(u>0){l=ze()._malloc(u*ze().PTR_SIZE),r.push(l),d=ze()._malloc(u*ze().PTR_SIZE),r.push(d);for(let p=0;p<u;p++)ze().setValue(l+p*ze().PTR_SIZE,s[p][0],"*"),ze().setValue(d+p*ze().PTR_SIZE,s[p][1],"*")}await ze()._OrtAppendExecutionProvider(e,o,l,d,u)!==0&&$e(`Can't append execution provider: ${n}.`)}},Ma=async e=>{let t=ze(),r=0,i=[],a=e||{};Oa(a);try{let n=za(a.graphOptimizationLevel??"all"),s=Aa(a.executionMode??"sequential"),o=typeof a.logId=="string"?mt(a.logId,i):0,u=a.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let l=a.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let d=typeof a.optimizedModelFilePath=="string"?mt(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,o,u,l,d),r===0&&$e("Can't create session options."),a.executionProviders&&await Ra(r,a,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);Ut(r,"enableGraphCapture",a.enableGraphCapture.toString(),i)}if(a.freeDimensionOverrides)for(let[p,h]of Object.entries(a.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let f=mt(p,i);t._OrtAddFreeDimensionOverride(r,f,h)!==0&&$e(`Can't set a free dimension override: ${p} - ${h}.`)}return a.extra!==void 0&&Mr(a.extra,"",new WeakSet,(p,h)=>{Ut(r,p,h,i)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&$e("Can't release session options."),i.forEach(s=>t._free(s)),n}}}),Wt,jt,Ht,yi,bi,_i,vi,qi,Ee=S(()=>{Wt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},jt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ht=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},yi=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},bi=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},_i=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",vi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",qi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),$i,Ba=S(()=>{si(),$i=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let u=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let s=0;for(;;){let{done:o,value:u}=await a.read();if(o)break;let l=u.byteLength;new Uint8Array(n,s,l).set(u),s+=l}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Da,Gi,Wi,xr,ji,Hi,Le,tr=S(()=>{Ee(),Da=["V","I","W","E","F"],Gi=(e,t)=>{console.log(`[${Da[e]},${new Date().toISOString()}]${t}`)},ji=(e,t)=>{Wi=e,xr=t},Hi=(e,t)=>{let r=bi(e),i=bi(Wi);r>=i&&Gi(r,typeof t=="function"?t():t)},Le=(...e)=>{xr&&Hi(...e)}}),Ki,Sr,N,Hr,Zi,Pa,dr,xe=S(()=>{Ki=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Sr=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let o=Ki.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(o===void 0)return;[s[n-2],s[n-1]]=o}for(let o=r?3:1;o<=n;o++){let u=i-o<0?1:e[i-o],l=a-o<0?1:t[a-o];if(u!==l&&u>1&&l>1)return;let d=Math.max(u,l);if(u&&l)s[n-o]=Math.max(u,l);else{if(d>1)return;s[n-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},N=class jn{static size(t){return jn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return jn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return jn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[n])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Hr=class wn{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,o){if(o){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)wn.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],i[u],a[u],n,u,u+t.length-2,o)}}static computePoolOutputShape(t,r,i,a,n,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return wn.computeShapeHelper(t,r,u,i,a,n,s,o),u}static computeConvOutputShape(t,r,i,a,n,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return wn.computeShapeHelper(!1,t,u,i,a,n,s,o),u}static computeShapeHelper(t,r,i,a,n,s,o,u){if(t)for(let l=0;l<r.length-2;l++)i.push(1);else for(let l=0;l<r.length-2;l++)i.push(wn.adjustPadAndReturnShape(r[l+2],a[l],n[l],s[l],o,l,l+r.length-2,u))}static adjustPadAndReturnShape(t,r,i,a,n,s,o,u){let l=i*(a-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return n[s]=0,n[o]=0,Math.floor((t-l)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),n[o]=d-n[s],Math.floor((t+d-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+n[s]+n[o]-l)/r+1)}},Zi=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,o;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let u=-1;if(i?(o=r[0],u=1):(o=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(n<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Sr.isValidBroadcast(a,[n,o]))throw new Error("gemm: invalid bias shape for broadcast");return[n,o,s]}},Pa=-34028234663852886e22,dr=34028234663852886e22}),Tr,Kr=S(()=>{Ee(),Tr=(e,t)=>new(yi(t))(e)}),Br,Zr,xi,Si,pr,Er,Xi,Qi,Yi,Ua,Na,$n=S(()=>{Ee(),tr(),Br=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Zr=(e,t)=>{if(t==="int32")return e;let r=Br.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let a=e.byteLength/i,n=new(yi(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let s=new Int32Array(a);for(let o=0;o<a;o++){let u=n[o];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&n.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(n,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},xi=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let a=BigInt64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(i,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(i.some(n=>n<-128||n>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(i,Number);return new Uint8Array(a.buffer)}case"uint8":{if(i.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(n=>n<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(i,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Si=1,pr=()=>Si++,Er=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Xi=(e,t)=>{let r=Br.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},Qi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:a,shape:n,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=a,this.tensorShape=n,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Xi(this.dataType,this.tensorShape)}destroy(){Le("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=xi(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}setIsDataConverted(e){this.isDataConverted=e}},Yi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let a=this.tensorManager.getMLContext(e),n=this.tensorManager.getMLOpSupportLimits(e),s;if(!n?.input.dataTypes.includes(t)){if(s=Er.get(t),!s||n?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);Le("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(a,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Xi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Zr(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Le("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?xi(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Ua=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=pr();return this.tensorTrackersById.set(e,new Yi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,a){Le("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${a}}`);let n=this.tensorTrackersById.get(t);if(!n)throw new Error("Tensor not found.");return n.ensureTensor(e,r,i,a)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){Le("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=this.getMLContext(e),n=pr(),s=new Qi({sessionId:e,context:a,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(n,new Yi(this,s)),this.externalTensors.add(s),n}async getCachedTensor(e,t,r,i,a,n,s){let o=this.getMLContext(e);for(let[l,d]of this.freeTensors.entries())if(d.canReuseTensor(o,t,r)){Le("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let p=this.freeTensors.splice(l,1)[0];return p.sessionId=e,p}Le("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:a,readable:n});return new Qi({sessionId:e,context:o,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Na=(...e)=>new Ua(...e)}),Xr,La,Va,Fa=S(()=>{Ee(),Gt(),Kr(),$n(),tr(),Xr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),La=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,n)=>a===i[n]&&e[a]===t[a])},Va=class{constructor(e){this.tensorManager=Na(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ji(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Le("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Le("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)Le("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>La(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Le("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,a){let n=Xr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,n,i,a)}async createTemporaryTensor(e,t,r){Le("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=Xr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,a,i,r,!1);let n=this.temporarySessionTensorIds.get(e);return n?n.push(a):this.temporarySessionTensorIds.set(e,[a]),a}uploadTensor(e,t){if(!ze().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Le("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Tr(r,t)}}registerMLTensor(e,t,r,i){let a=Xr.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);let n=this.tensorManager.registerTensor(e,t,a,i);return Le("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${a}, dimensions: ${i}} -> {tensorId: ${n}}`),n}registerMLConstant(e,t,r,i,a,n,s=!1){if(!n)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let u=n.get(o);if(!u)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let l=u.slice(t,t+r).buffer,d;switch(a.dataType){case"float32":d=new Float32Array(l);break;case"float16":d=typeof Float16Array<"u"?new Float16Array(l):new Uint16Array(l);break;case"int32":d=new Int32Array(l);break;case"uint32":d=new Uint32Array(l);break;case"int64":if(s){let p=Zr(new Uint8Array(l),"int64");d=new Int32Array(p.buffer),a.dataType="int32"}else d=new BigInt64Array(l);break;case"uint64":d=new BigUint64Array(l);break;case"int8":d=new Int8Array(l);break;case"int4":case"uint4":case"uint8":d=new Uint8Array(l);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return Le("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(a,d)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=Xr.get(Wt(t)),a=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!a?.input.dataTypes.includes(i):!!a?.output.dataTypes.includes(i)}flush(){}}}),Ji=S(()=>{}),ea,ta,Ti,ra,ia,aa,qa,Ga,xn,ts=S(()=>{tr(),Ji(),ea=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),ta=[],Ti=e=>Math.ceil(Number(e)/16)*16,ra=e=>{for(let t=0;t<ta.length;t++){let r=ta[t];if(e<=r)return r}return Math.ceil(e/16)*16},ia=1,aa=()=>ia++,qa=async(e,t,r,i)=>{let a=Ti(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let o=n.getMappedRange();if(i){let u=i();return u.set(new Uint8Array(o,0,r)),u}else return new Uint8Array(o.slice(0,r))}finally{n.destroy()}},Ga=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of ea)ta.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=Ti(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,i,a)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,s.gpuData.buffer,0,n),this.backend.device.queue.submit([l.finish()]),o.destroy(),Le("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Ti(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return Le("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=aa();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),Le("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Le("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=ra(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let o=(a?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:aa(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),Le("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Le("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await qa(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=ea.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Le("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},xn=(...e)=>new Ga(...e)}),c,g,v=S(()=>{c=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},g=e=>new c(e)}),k,E,B,z,I,M,K,te,j,L,ge,O,ne,nt,Me,we,Be,ce=S(()=>{Ee(),xe(),k=64,E=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},B=(e,t=1)=>{let r=E(e,t);return typeof r=="string"?r:r[0]},z=(e,t=1)=>{let r=E(e,t);return typeof r=="string"?r:r[1]},I=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:N.computeStrides(r)})}),t},M=e=>e%4===0?4:e%2===0?2:1,K=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,te=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,j=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,L=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ge=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,o=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,l=E(t,a),d=typeof l=="string"?l:l[1],p=typeof l=="string"?l:l[0],h={indices:u,value:d,storage:p,tensor:t},f=ie=>typeof ie=="string"?ie:`${ie}u`,m={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=n?"uniforms.":"",x=`${y}${e}_shape`,b=`${y}${e}_strides`,w="";for(let ie=0;ie<s-1;ie++)w+=`
    let dim${ie} = current / ${L(b,ie,s)};
    let rest${ie} = current % ${L(b,ie,s)};
    indices[${ie}] = dim${ie};
    current = rest${ie};
    `;w+=`indices[${s-1}] = current;`;let T=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${w}
    return indices;
  }`,$=ie=>(m.offsetToIndices=!0,s<2?ie:`o2i_${e}(${ie})`),C=[];if(s>=2)for(let ie=s-1;ie>=0;ie--)C.push(`${L(b,ie,s)} * (indices[${ie}])`);let D=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${C.join("+")};
  }`,P=ie=>(m.indicesToOffset=!0,s<2?ie:`i2o_${e}(${ie})`),H=(...ie)=>s===0?"0u":`${h.indices}(${ie.map(f).join(",")})`,oe=(ie,Ae)=>s<2?`${ie}`:`${L(ie,Ae,s)}`,fe=(ie,Ae,Te)=>s<2?`${ie}=${Te};`:`${L(ie,Ae,s)}=${Te};`,Pe={},Se=(ie,Ae)=>{m.broadcastedIndicesToOffset=!0;let Te=`${Ae.name}broadcastedIndicesTo${e}Offset`;if(Te in Pe)return`${Te}(${ie})`;let ye=[];for(let Ot=s-1;Ot>=0;Ot--){let Kt=Ae.indicesGet("outputIndices",Ot+Ae.rank-s);ye.push(`${oe(b,Ot)} * (${Kt} % ${oe(x,Ot)})`)}return Pe[Te]=`fn ${Te}(outputIndices: ${Ae.type.indices}) -> u32 {
             return ${ye.length>0?ye.join("+"):"0u"};
           }`,`${Te}(${ie})`},ke=(ie,Ae)=>(()=>{if(h.storage===h.value)return`${e}[${ie}]=${Ae};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${ie}]=vec2<u32>(u32(${Ae}), select(0u, 0xFFFFFFFFu, ${Ae} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${ie}]=vec2<u32>(u32(${Ae}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${ie}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Ae}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),He=ie=>(()=>{if(h.storage===h.value)return`${e}[${ie}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${ie}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${ie}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${ie}] & 0xFFu), bool(${e}[${ie}] & 0xFF00u), bool(${e}[${ie}] & 0xFF0000u), bool(${e}[${ie}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),de=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${d} {
    return ${He(`i2o_${e}(indices)`)};
  }`,be=s<2?"":(()=>{let ie=o.map(Te=>`d${Te}: u32`).join(", "),Ae=o.map(Te=>`d${Te}`).join(", ");return`
  fn get_${e}(${ie}) -> ${d} {
    return get_${e}ByIndices(${H(Ae)});
  }`})(),Re=(...ie)=>{if(ie.length!==s)throw new Error(`indices length must be ${s}`);let Ae=ie.map(f).join(",");return s===0?He("0u"):s===1?He(Ae[0]):(m.get=!0,m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}(${Ae})`)},Ne=ie=>s<2?He(ie):(m.getByIndices=!0,m.indicesToOffset=!0,`get_${e}ByIndices(${ie})`),Oe=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${d}) {
    ${ke(`i2o_${e}(indices)`,"value")}
  }`,Ve=s<2?"":(()=>{let ie=o.map(Te=>`d${Te}: u32`).join(", "),Ae=o.map(Te=>`d${Te}`).join(", ");return`
  fn set_${e}(${ie}, value: ${d}) {
    set_${e}ByIndices(${H(Ae)}, value);
  }`})();return{impl:()=>{let ie=[],Ae=!1;return m.offsetToIndices&&(ie.push(T),Ae=!0),m.indicesToOffset&&(ie.push(D),Ae=!0),m.broadcastedIndicesToOffset&&(Object.values(Pe).forEach(Te=>ie.push(Te)),Ae=!0),m.set&&(ie.push(Ve),Ae=!0),m.setByIndices&&(ie.push(Oe),Ae=!0),m.get&&(ie.push(be),Ae=!0),m.getByIndices&&(ie.push(de),Ae=!0),!n&&Ae&&ie.unshift(`const ${x} = ${h.indices}(${r.join(",")});`,`const ${b} = ${h.indices}(${N.computeStrides(r).join(",")});`),ie.join(`
`)},type:h,offsetToIndices:$,indicesToOffset:P,broadcastedIndicesToOffset:Se,indices:H,indicesGet:oe,indicesSet:fe,set:(...ie)=>{if(ie.length!==s+1)throw new Error(`indices length must be ${s}`);let Ae=ie[s];if(typeof Ae!="string")throw new Error("value must be string");let Te=ie.slice(0,s).map(f).join(",");return s===0?ke("0u",Ae):s===1?ke(Te[0],Ae):(m.set=!0,m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}(${Te}, ${Ae})`)},setByOffset:ke,setByIndices:(ie,Ae)=>s<2?ke(ie,Ae):(m.setByIndices=!0,m.indicesToOffset=!0,`set_${e}ByIndices(${ie}, ${Ae});`),get:Re,getByOffset:He,getByIndices:Ne,usage:i,name:e,strides:b,shape:x,rank:s}},O=(e,t,r,i=1)=>ge(e,t,r,"input",i),ne=(e,t,r,i=1)=>ge(e,t,r,"output",i),nt=(e,t,r)=>ge(e,t,r,"atomicOutput",1),Me=(e,t,r,i=1)=>ge(e,t,r,"internal",i),we=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=k){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Be=(e,t)=>new we(e,t)}),Tt,kt,kr,Qr,na,Wa,ct,nr,ja,De=S(()=>{Ee(),xe(),v(),ce(),Tt=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},kt=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),kr=(e,t)=>N.sortBasedOnPerm(e,kt(e.length,t)),Qr=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let n=0;n<t;++n)a+=`a[${e[n]}]=i[${n}];`;return a+="return a;}"},na=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Wa=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},ct=(e,t)=>{let r=e.dataType,i=e.dims.length,a=kt(i,t),n=kr(e.dims,a),s=e.dims,o=n,u=i<2||Wa(a,e.dims),l;if(u)return l=m=>{let y=O("input",r,s,4),x=ne("output",r,o,4);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,x)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=N.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(m/4)}]}},getShaderSource:l};let{newShape:d,newPerm:p}=na(e.dims,a),h=N.areEqual(p,[2,3,1]),f=N.areEqual(p,[3,1,2]);if(d.length===2||h||f){s=h?[d[0],d[1]*d[2]]:f?[d[0]*d[1],d[2]]:d,o=[s[1],s[0]];let m=16;return l=y=>{let x=O("a",r,s.length),b=ne("output",r,o.length);return`
  ${y.registerUniform("output_size","u32").declareVariables(x,b)}
  var<workgroup> tile : array<array<${b.type.value}, ${m+1}>, ${m}>;
  ${y.mainStart([m,m,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${m} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${m}u + local_id.x;
    let input_row = workgroup_id_x * ${m}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${m}u + local_id.x;
    let output_row = workgroup_id_y * ${m}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${b.setByIndices(`${b.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let y=N.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/m),y:Math.ceil(o[0]/m)},programUniforms:[{type:12,data:y},...I(s,o)]}},getShaderSource:l}}return l=m=>{let y=O("a",r,s.length),x=ne("output",r,o.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,x)}

  ${Qr(a,i,y,x)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${x.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${x.setByOffset("global_idx",y.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let m=N.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...I(s,o)]}},getShaderSource:l}},nr=(e,t)=>{Tt(e.inputs,t.perm),e.compute(ct(e.inputs[0],t.perm))},ja=e=>g({perm:e.perm})}),rr,Sn,cr,Ei,wt,Dt,sa,ki,Ha,Tn,xt,hr,Yr,yt,ht,sr,En,kn,Ro,Mo,Bo,uf=S(()=>{Ee(),xe(),ce(),is(),De(),rr={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Sn={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},cr={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Ei={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},wt=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Dt=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},sa=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},ki=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ha=(e,t)=>{let r=[];if(!ki(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Tn=(e,t,r,i,a,n,s)=>{let o=r[0].dims,u=N.size(n),l=N.size(s),d=O("_A",r[0].dataType,o),p=ne("output",a,n),h=64;u===1&&(h=256);let f=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,m=y=>`
        ${y.registerUniform("reduceSize","u32").declareVariables(d,p)}
        ${f}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${y.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${cr[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${rr[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Sn[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${i==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${Ei[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},xt=(e,t,r,i)=>{let a=e.inputs.length===1?r:rs(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((f,m)=>m));let s=N.normalizeAxes(n,e.inputs[0].dims.length),o=s,u=e.inputs[0],l=Ha(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(ct(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=wt(o.length,u.dims.length));let[d,p]=Dt(u.dims,o),h=d;a.keepDims&&(h=sa(d,s)),e.compute(Tn(t,a.cacheKey,[u],i,e.inputs[0].dataType,h,p),{inputs:[u]})},hr=(e,t)=>{xt(e,"ReduceMeanShared",t,"mean")},Yr=(e,t)=>{xt(e,"ReduceL1Shared",t,"l1")},yt=(e,t)=>{xt(e,"ReduceL2Shared",t,"l2")},ht=(e,t)=>{xt(e,"ReduceLogSumExpShared",t,"logSumExp")},sr=(e,t)=>{xt(e,"ReduceMaxShared",t,"max")},En=(e,t)=>{xt(e,"ReduceMinShared",t,"min")},kn=(e,t)=>{xt(e,"ReduceProdShared",t,"prod")},Ro=(e,t)=>{xt(e,"ReduceSumShared",t,"sum")},Mo=(e,t)=>{xt(e,"ReduceSumSquareShared",t,"sumSquare")},Bo=(e,t)=>{xt(e,"ReduceLogSumShared",t,"logSum")}}),fr,Do,In,rs,mr,Po,Uo,No,Lo,Vo,Fo,qo,Go,Wo,jo,gr,Ho,Ko,Zo,Xo,Qo,Yo,Jo,eu,tu,ru,is=S(()=>{Ee(),xe(),v(),ce(),uf(),fr=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Do=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],In=(e,t,r,i,a,n,s=!1,o=!1)=>{let u=[],l=r[0].dims,d=l.length,p=N.normalizeAxes(a,d),h=!o&&p.length===0;l.forEach((y,x)=>{h||p.indexOf(x)>=0?s&&u.push(1):u.push(y)});let f=u.length,m=N.size(u);return{name:e,shaderCache:t,getShaderSource:y=>{let x=[],b=O("_A",r[0].dataType,d),w=ne("output",n,f),T=i(b,w,p),$=T[2];for(let C=0,D=0;C<d;C++)h||p.indexOf(C)>=0?(s&&D++,$=`for(var j${C}: u32 = 0; j${C} < ${l[C]}; j${C}++) {
                  ${T[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${b.indicesSet("input_indices",C,`j${C}`)}
                  ${$}
                }`):(x.push(`${b.indicesSet("input_indices",C,w.indicesGet("output_indices",D))};`),D++);return`

        ${y.registerUniform("output_size","u32").declareVariables(b,w)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${b.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${T[0]}       // init ops for reduce max/min
          ${T[1]}
          ${$}
          ${T[3]}
          ${T.length===4?w.setByOffset("global_idx","value"):T.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:n}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...I(l,u)]})}},rs=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),g({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},mr=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:rs(a,r);e.compute(In(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?Do:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},Po=(e,t)=>{fr(e.inputs),mr(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Uo=(e,t)=>{fr(e.inputs),mr(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},No=(e,t)=>{fr(e.inputs),mr(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Lo=(e,t)=>{fr(e.inputs),mr(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Vo=(e,t)=>{fr(e.inputs),mr(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Fo=(e,t)=>{fr(e.inputs),mr(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},qo=(e,t)=>{fr(e.inputs),mr(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Go=(e,t)=>{fr(e.inputs),mr(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Wo=(e,t)=>{fr(e.inputs),mr(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},jo=(e,t)=>{fr(e.inputs),mr(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},gr=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},Ho=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fo(e,t):hr(e,t)},Ko=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Uo(e,t):Yr(e,t)},Zo=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?No(e,t):yt(e,t)},Xo=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lo(e,t):ht(e,t)},Qo=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vo(e,t):sr(e,t)},Yo=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?qo(e,t):En(e,t)},Jo=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Go(e,t):kn(e,t)},eu=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wo(e,t):Ro(e,t)},tu=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?jo(e,t):Mo(e,t)},ru=(e,t)=>{gr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Po(e,t):Bo(e,t)}}),as,iu,au,ns,lf=S(()=>{Ee(),v(),is(),as=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},iu=(e,t)=>{as(e.inputs);let r=(i,a,n)=>{let s=[];for(let o=0;o<i.rank;o++)(n.indexOf(o)>=0||n.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(In("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},au=(e,t)=>{as(e.inputs);let r=(i,a,n)=>{let s=[];for(let o=0;o<i.rank;o++)(n.indexOf(o)>=0||n.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(In("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ns=e=>g(e)}),nu,Cn,su,ou,uu,Ka,lu,du,ss=S(()=>{Ee(),xe(),Ji(),ce(),nu=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],l=r.dims[1],d=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=a.dims[0]/3,h=p,f=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let T of t.qkvHiddenSizes)if(T%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],f=t.qkvHiddenSizes[2]}let m=l;if(p!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==p+h+f)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(h!==f)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let x=m+y,b=-1,w=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:y,kvSequenceLength:m,totalSequenceLength:x,maxSequenceLength:b,inputHiddenSize:d,hiddenSize:p,vHiddenSize:f,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(f/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Cn=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,su=(e,t,r,i,a,n,s,o)=>{let u=M(s?1:n),l=64,d=n/u;d<l&&(l=32);let p=Math.ceil(n/u/l),h=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:d},{type:12,data:p}],f=B(e.dataType,u),m=z(1,u),y=["type"];s&&y.push("type"),o&&y.push("type");let x=b=>{let w=ne("x",e.dataType,e.dims,u),T=[w],$=s?O("seq_lens",s.dataType,s.dims):void 0;$&&T.push($);let C=o?O("total_sequence_length_input",o.dataType,o.dims):void 0;C&&T.push(C);let D=z(e.dataType),P=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${b.registerUniforms(P).declareVariables(...T)}
  ${b.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Cn($,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${D}(1.0) / ${D}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${D}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${f};${u}`,inputDependencies:y},getShaderSource:x,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*r},programUniforms:h})}},ou=(e,t,r,i,a,n,s,o,u)=>{let l=s+n.kvSequenceLength,d=[n.batchSize,n.numHeads,n.sequenceLength,l],p=e>1&&i,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,f=p?[n.batchSize,h,l,n.headSize]:void 0,m=n.nReps?n.nReps:1,y=n.scale===0?1/Math.sqrt(n.headSize):n.scale,x=M(n.headSize),b=n.headSize/x,w=12,T={x:Math.ceil(l/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},$=[{type:12,data:n.sequenceLength},{type:12,data:b},{type:12,data:l},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:1,data:y},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:m}],C=p&&i&&N.size(i.dims)>0,D=["type","type"];C&&D.push("type"),a&&D.push("type"),o&&D.push("type"),u&&D.push("type");let P=[{dims:d,dataType:t.dataType,gpuDataType:0}];p&&P.push({dims:f,dataType:t.dataType,gpuDataType:0});let H=oe=>{let fe=O("q",t.dataType,t.dims,x),Pe=O("key",r.dataType,r.dims,x),Se=[fe,Pe];if(C){let Oe=O("past_key",i.dataType,i.dims,x);Se.push(Oe)}a&&Se.push(O("attention_bias",a.dataType,a.dims));let ke=o?O("seq_lens",o.dataType,o.dims):void 0;ke&&Se.push(ke);let He=u?O("total_sequence_length_input",u.dataType,u.dims):void 0;He&&Se.push(He);let de=ne("output",t.dataType,d),be=[de];p&&be.push(ne("present_key",t.dataType,f,x));let Re=z(1,x),Ne=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${fe.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${fe.type.storage}, ${w*w}>;
  ${oe.registerUniforms(Ne).declareVariables(...Se,...be)}
  ${oe.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Cn(ke,He,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Re}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Re}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${de.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${a!==void 0};${i!==void 0};${e}`,inputDependencies:D},getRunData:()=>({outputs:P,dispatchGroup:T,programUniforms:$}),getShaderSource:H}},uu=(e,t,r,i,a,n,s=void 0,o=void 0)=>{let u=n+a.kvSequenceLength,l=a.nReps?a.nReps:1,d=a.vHiddenSize*l,p=e>1&&i,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,f=p?[a.batchSize,h,u,a.headSize]:void 0,m=[a.batchSize,a.sequenceLength,d],y=12,x={x:Math.ceil(a.vHeadSize/y),y:Math.ceil(a.sequenceLength/y),z:a.batchSize*a.numHeads},b=[{type:12,data:a.sequenceLength},{type:12,data:u},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:d},{type:12,data:n},{type:12,data:a.kvSequenceLength},{type:12,data:l}],w=p&&i&&N.size(i.dims)>0,T=["type","type"];w&&T.push("type"),s&&T.push("type"),o&&T.push("type");let $=[{dims:m,dataType:t.dataType,gpuDataType:0}];p&&$.push({dims:f,dataType:t.dataType,gpuDataType:0});let C=D=>{let P=O("probs",t.dataType,t.dims),H=O("v",r.dataType,r.dims),oe=[P,H];w&&oe.push(O("past_value",i.dataType,i.dims));let fe=s?O("seq_lens",s.dataType,s.dims):void 0;s&&oe.push(fe);let Pe=o?O("total_sequence_length_input",o.dataType,o.dims):void 0;o&&oe.push(Pe);let Se=[ne("output",t.dataType,m)];p&&Se.push(ne("present_value",t.dataType,f));let ke=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${y}u;
  var<workgroup> tileQ: array<${P.type.value}, ${y*y}>;
  var<workgroup> tileV: array<${P.type.value}, ${y*y}>;
  ${D.registerUniforms(ke).declareVariables(...oe,...Se)}
  ${D.mainStart([y,y,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Cn(fe,Pe,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${P.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:$,dispatchGroup:x,programUniforms:b}),getShaderSource:C}},Ka=(e,t,r,i,a,n,s,o,u,l,d=void 0,p=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),f=h>1?s:void 0,m=h>1?o:void 0,y=h>1?l.pastSequenceLength:0,x=y+l.kvSequenceLength,b=u&&N.size(u.dims)>0?u:void 0,w=[t,r];f&&N.size(f.dims)>0&&w.push(f),b&&w.push(b),d&&w.push(d),p&&w.push(p);let T=e.compute(ou(h,t,r,f,b,l,y,d,p),{inputs:w,outputs:h>1?[-1,1]:[-1]})[0];e.compute(su(T,l.batchSize,l.numHeads,y,l.sequenceLength,x,d,p),{inputs:d&&p?[T,d,p]:[T],outputs:[]});let $=[T,i];m&&N.size(m.dims)>0&&$.push(m),d&&$.push(d),p&&$.push(p),e.compute(uu(h,T,i,m,l,y,d,p),{inputs:$,outputs:h>1?[0,2]:[0]})},lu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=p=>{let h=ne("output_q",u[0].dataType,r),f=ne("output_k",u[0].dataType,r),m=ne("output_v",u[0].dataType,r),y=O("input",u[0].dataType,u[0].dims),x=O("weight",u[1].dataType,u[1].dims),b=O("bias",u[2].dataType,u[2].dims),w=y.type.storage,T=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${p.registerUniforms(T).declareVariables(y,x,b,h,f,m)}
  ${p.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},du=(e,t)=>{let r=nu(e.inputs,t),[i,a,n]=lu(e,r);return Ka(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),pu,cu,hu,fu,df=S(()=>{gt(),Ee(),xe(),v(),ce(),pu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((o,u)=>{if(o!==i[u])throw new Error(`${n}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},cu=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?M(n[n.length-1]):1,o=a==="NHWC"&&n.length>1?s:1,u=N.size(n)/s,l=i,d=l?n.length:n,p=O("x",e[0].dataType,e[0].dims,s),h=O("scale",e[1].dataType,e[1].dims,o),f=O("bias",e[2].dataType,e[2].dims,o),m=O("inputMean",e[3].dataType,e[3].dims,o),y=O("inputVar",e[4].dataType,e[4].dims,o),x=ne("y",e[0].dataType,d,s),b=()=>{let T="";if(i)T=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")T=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{T=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let $=1;$<h.rank;$++)T+=`cIndices[${$}] = outputIndices[${$}];`;T+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return T},w=T=>`
  const epsilon = ${r};
  ${T.registerUniform("outputSize","u32").declareVariables(p,h,f,m,y,x)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${b()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${f.getByOffset("cOffset")};
    let inputMean = ${m.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...I(n)]:[{type:12,data:u}]})}},hu=e=>g(e),fu=(e,t)=>{let{inputs:r,outputCount:i}=e,a=hu({...t,outputCount:i});if(se.webgpu.validateInputContent&&pu(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(cu(r,a))}}),mu,gu,wu,pf=S(()=>{xe(),ce(),mu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},gu=e=>{let t=e[0].dims,r=e[0].dims[2],i=N.size(t)/4,a=e[0].dataType,n=O("input",a,t,4),s=O("bias",a,[r],4),o=O("residual",a,t,4),u=ne("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const channels = ${r}u / 4;
  ${l.declareVariables(n,s,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},wu=e=>{mu(e.inputs),e.compute(gu(e.inputs))}}),yu,Ke,bu,_u,vu,$u,xu,Su,Tu,Eu,ku,Iu,Cu,zu,Au,Ou,Za,Ru,zn,Mu,Bu,Du,Pu,Uu,Nu,Lu,Vu,Fu,qu,Gu,Wu,ju,Hu,Ku,Zu,os,Xu,us,ls,Qu,Yu,Ju,el,tl,rl,ds=S(()=>{Ee(),xe(),v(),ce(),yu=(e,t,r,i,a,n,s)=>{let o=Math.ceil(t/4),u="";typeof a=="string"?u=`${a}(a)`:u=a("a");let l=O("inputData",r,[o],4),d=ne("outputData",i,[o],4),p=[{name:"vec_size",type:"u32"}];return s&&p.push(...s),`
      ${e.registerUniforms(p).declareVariables(l,d)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},Ke=(e,t,r,i,a,n=e.dataType,s,o)=>{let u=[{type:12,data:Math.ceil(N.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:l=>yu(l,N.size(e.dims),e.dataType,n,r,i,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(N.size(l[0].dims)/64/4)},programUniforms:u})}},bu=e=>{e.compute(Ke(e.inputs[0],"Abs","abs"))},_u=e=>{e.compute(Ke(e.inputs[0],"Acos","acos"))},vu=e=>{e.compute(Ke(e.inputs[0],"Acosh","acosh"))},$u=e=>{e.compute(Ke(e.inputs[0],"Asin","asin"))},xu=e=>{e.compute(Ke(e.inputs[0],"Asinh","asinh"))},Su=e=>{e.compute(Ke(e.inputs[0],"Atan","atan"))},Tu=e=>{e.compute(Ke(e.inputs[0],"Atanh","atanh"))},Eu=e=>g(e),ku=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ke(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Iu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return g({min:t,max:r})},Cu=(e,t)=>{let r=t||Iu(e.inputs),i=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},zu=e=>{e.compute(Ke(e.inputs[0],"Ceil","ceil"))},Au=e=>{e.compute(Ke(e.inputs[0],"Cos","cos"))},Ou=e=>{e.compute(Ke(e.inputs[0],"Cosh","cosh"))},Za=e=>g(e),Ru=(e,t)=>{let r=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},zn=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Mu=e=>{let t=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,zn(t)))},Bu=e=>{e.compute(Ke(e.inputs[0],"Exp","exp"))},Du=e=>{e.compute(Ke(e.inputs[0],"Floor","floor"))},Pu=e=>{let t=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,zn(t)))},Uu=(e,t)=>{let r=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Nu=e=>{e.compute(Ke(e.inputs[0],"Not",t=>`!${t}`))},Lu=e=>{e.compute(Ke(e.inputs[0],"Neg",t=>`-${t}`))},Vu=e=>{e.compute(Ke(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Fu=e=>{let t=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},qu=e=>{e.compute(Ke(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Gu=e=>g(e),Wu=(e,t)=>{let r=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},ju=e=>{e.compute(Ke(e.inputs[0],"Sin","sin"))},Hu=e=>{e.compute(Ke(e.inputs[0],"Sinh","sinh"))},Ku=e=>{e.compute(Ke(e.inputs[0],"Sqrt","sqrt"))},Zu=e=>{e.compute(Ke(e.inputs[0],"Tan","tan"))},os=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Xu=e=>{e.compute(Ke(e.inputs[0],"Tanh",os))},us=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${os("v")};
}
`,ls=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Qu=e=>{let t=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"FastGelu",ls,us(t),void 0,e.inputs[0].dataType))},Yu=(e,t)=>{let r=z(e.inputs[0].dataType);return e.compute(Ke(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Ju=e=>{e.compute(Ke(e.inputs[0],"Log","log"))},el=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,tl=e=>`quick_gelu_impl(${e})`,rl=(e,t)=>{let r=z(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"QuickGelu",tl,el(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),il,al,nl,cf=S(()=>{xe(),ce(),ds(),il=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},al=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=O("input",e[0].dataType,e[0].dims,4),i=O("bias",e[0].dataType,[e[0].dims[2]],4),a=ne("output",e[0].dataType,t,4),n=N.size(t)/4,s=B(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,a)}

  ${zn(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},nl=e=>{il(e.inputs),e.compute(al(e.inputs))}}),sl,ol,wr,ul,ll,dl,pl,cl,hl,fl,ml,gl,wl,hf=S(()=>{Ee(),xe(),ce(),sl=(e,t,r,i,a,n,s,o,u,l,d,p)=>{let h,f;typeof o=="string"?h=f=(w,T)=>`${o}((${w}),(${T}))`:typeof o=="function"?h=f=o:(h=o.scalar,f=o.vector);let m=ne("outputData",d,i.length,4),y=O("aData",u,t.length,4),x=O("bData",l,r.length,4),b;if(a)if(n){let w=N.size(t)===1,T=N.size(r)===1,$=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;w||T?b=m.setByOffset("global_idx",f(w?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),T?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):b=`
            let outputIndices = ${m.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",m)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",m)};
            ${m.setByOffset("global_idx",f(s||$?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||C?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else b=m.setByOffset("global_idx",f(y.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(T,$,C="")=>{let D=`aData[indexA${$}][componentA${$}]`,P=`bData[indexB${$}][componentB${$}]`;return`
            let outputIndices${$} = ${m.offsetToIndices(`global_idx * 4u + ${$}u`)};
            let offsetA${$} = ${y.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
            let offsetB${$} = ${x.broadcastedIndicesToOffset(`outputIndices${$}`,m)};
            let indexA${$} = offsetA${$} / 4u;
            let indexB${$} = offsetB${$} / 4u;
            let componentA${$} = offsetA${$} % 4u;
            let componentB${$} = offsetB${$} % 4u;
            ${T}[${$}] = ${C}(${h(D,P)});
          `};d===9?b=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:b=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,x,m)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${b}
      }`},ol=(e,t,r,i,a,n,s=r.dataType)=>{let o=r.dims.map(Number),u=i.dims.map(Number),l=!N.areEqual(o,u),d=o,p=N.size(o),h=!1,f=!1,m=[l];if(l){let y=Sr.calcShape(o,u,!1);if(!y)throw new Error("Can't perform binary op on the given tensors");d=y.slice(),p=N.size(d);let x=N.size(o)===1,b=N.size(u)===1,w=o.length>0&&o[o.length-1]%4===0,T=u.length>0&&u[u.length-1]%4===0;m.push(x),m.push(b),m.push(w),m.push(T);let $=1;for(let C=1;C<d.length;C++){let D=o[o.length-C],P=u[u.length-C];if(D===P)$*=D;else break}$%4===0?(f=!0,h=!0):(x||b||w||T)&&(h=!0)}else h=!0;return m.push(h),{name:e,shaderCache:{hint:t+m.map(y=>y.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:y=>sl(y,o,u,d,h,l,f,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(N.size(d)/4)},...I(o,u,d)]})}},wr=(e,t,r,i,a,n)=>{e.compute(ol(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},ul=e=>{wr(e,"Add",(t,r)=>`${t}+${r}`)},ll=e=>{wr(e,"Div",(t,r)=>`${t}/${r}`)},dl=e=>{wr(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},pl=e=>{wr(e,"Mul",(t,r)=>`${t}*${r}`)},cl=e=>{let t=O("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;wr(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},hl=e=>{wr(e,"Sub",(t,r)=>`${t}-${r}`)},fl=e=>{wr(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},ml=e=>{wr(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},gl=e=>{wr(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},wl=e=>{wr(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),yl,bl,_l,vl,$l,xl,ff=S(()=>{Ee(),xe(),v(),ce(),yl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((u,l)=>{if(l!==t&&u!==i.dims[l])throw new Error("non concat dimensions must match")})}})},bl=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,_l=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},vl=(e,t,r,i)=>{let a=N.size(r),n=new Array(e.length),s=new Array(e.length),o=0,u=[],l=[],d=[{type:12,data:a}];for(let y=0;y<e.length;++y)o+=e[y].dims[t],n[y]=o,l.push(e[y].dims.length),s[y]=O(`input${y}`,i,l[y]),u.push("rank"),d.push({type:12,data:n[y]});for(let y=0;y<e.length;++y)d.push(...I(e[y].dims));d.push(...I(r));let p=ne("output",i,r.length),h=p.indicesGet("indices",t),f=Array.from(Array(n.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),m=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)y.registerUniform(`sizeInConcatAxis${x}`,"u32");return y.declareVariables(...s,p)})()}

  ${bl(n.length,f)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${f});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${_l(s,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:m}},$l=(e,t)=>{let r=e.inputs,i=r[0].dims,a=N.normalizeAxis(t.axis,i.length);yl(r,a);let n=i.slice();n[a]=r.reduce((o,u)=>o+(u.dims.length>a?u.dims[a]:0),0);let s=r.filter(o=>N.size(o.dims)>0);e.compute(vl(s,a,n,r[0].dataType),{inputs:s})},xl=e=>g({axis:e.axis})}),Ii,Ci,zi,ps,Ai=S(()=>{Ee(),xe(),Ii=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ci=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},zi=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ps=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Pa,dr];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),It,Sl,cs=S(()=>{It=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Sl=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Tl,mf=S(()=>{Tl=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Xa,hs,fs=S(()=>{Ee(),xe(),ce(),Ai(),Xa=(e,t,r,i,a)=>{let n=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${L(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,L(a,o+n,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},hs=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,o=e[1].dims,u=s[s.length-2],l=o[o.length-1],d=s[s.length-1],p=M(l),h=M(d),f=M(u),m=N.size(r)/p/f,y=e.length>2,x=i?i.slice(0,-2):r.slice(0,-2),b=[N.size(x),u,l],w=[{type:12,data:m},{type:12,data:u},{type:12,data:l},{type:12,data:d}];Ci(t,w),w.push(...I(x,s,o)),y&&w.push(...I(e[2].dims)),w.push(...I(b));let T=$=>{let C=Me("batch_dims",e[0].dataType,x.length),D=O("a",e[0].dataType,s.length,h),P=O("b",e[1].dataType,o.length,p),H=ne("output",e[0].dataType,b.length,p),oe=B(H.type.tensor),fe=Ii(t,H.type.value,oe),Pe=[D,P],Se="";if(y){let de=a?p:1;Pe.push(O("bias",e[2].dataType,e[2].dims.length,de)),Se=`${a?`value += bias[col / ${de}];`:`value += ${H.type.value}(bias[row + i]);`}`}let ke=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];zi(t,ke);let He=()=>{let de=`var a_data: ${D.type.value};`;for(let be=0;be<h;be++)de+=`
              let b_data${be} = b[(b_offset + (k + ${be}) * uniforms.N + col) / ${p}];`;for(let be=0;be<f;be++){de+=`a_data = a[(a_offset + (row + ${be}) * uniforms.K + k) / ${h}];`;for(let Re=0;Re<h;Re++)de+=`
            values[${be}] = fma(${P.type.value}(a_data${h===1?"":`[${Re}]`}), b_data${Re}, values[${be}]);
`}return de};return`
  ${$.registerUniforms(ke).registerInternalVariables(C).declareVariables(...Pe,H)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${f};
    let row = (index1 % stride1) * ${f};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${D.type.indices};
    ${Xa("a_indices",D,D.rank-2,C.rank,"batch_indices")}
    ${D.indicesSet("a_indices",D.rank-2,0)}
    ${D.indicesSet("a_indices",D.rank-1,0)}
    let a_offset = ${D.indicesToOffset("a_indices")};

    var b_indices: ${P.type.indices};
    ${Xa("b_indices",P,P.rank-2,C.rank,"batch_indices")}
    ${P.indicesSet("b_indices",P.rank-2,0)}
    ${P.indicesSet("b_indices",P.rank-1,0)}
    let b_offset = ${P.indicesToOffset("b_indices")};
    var values: array<${H.type.value}, ${f}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${He()}
    }
    for (var i = 0u; i < ${f}u; i++) {
      var value = values[i];
      ${Se}
      ${fe}
      let cur_indices = ${H.type.indices}(batch, row + i, col);
      let offset = ${H.indicesToOffset("cur_indices")};
      ${H.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${h};${f};${a}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:w}),getShaderSource:T}}}),El,kl,ms,gs,Il,ws,Cl,An,ys=S(()=>{Ee(),xe(),ce(),Ai(),fs(),cs(),El=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,kl=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,ms=(e,t,r="f32",i,a=!1,n=32,s=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],d=a?u:n,p=a?n:u,h=d/t[0],f=n/t[1];if(!((a&&h===4&&e[1]===4||!a&&(h===3||h===4))&&d%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${d/h}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${l/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(o/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${f};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${El(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${kl(a,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},gs=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Il=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ws=(e,t,r="f32",i,a=!1,n=32,s=!1,o=32,u=!1)=>{let l=e[1]*t[1],d=e[0]*t[0],p=a?l:n,h=a?n:l;if(!(h%t[1]===0&&p%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let f=h/t[1],m=p/t[0],y=n/t[1],x=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${gs(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${f};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${f}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${gs(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Il(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${p}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${d}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},Cl=(e,t,r,i,a=!1)=>{let[n,s,o,u]=i,l=B(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${It(e,l)} {
      var value = ${It(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${Xa("aIndices",s,s.rank-2,n.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${n.type.indices}) -> ${It(e,l)} {
      var value = ${It(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${Xa("bIndices",o,o.rank-2,n.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${It(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${It(e,l)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},An=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,o=e[1].dims,u=s.slice(0,-2),l=o.slice(0,-2),d=i?i.slice(0,-2):r.slice(0,-2),p=N.size(d),h=s[s.length-2],f=s[s.length-1],m=o[o.length-1],y=f%4===0&&m%4===0,x=h<=8?[4,1,1]:[4,4,1],b=[8,8,1],w=[Math.ceil(m/b[0]/x[0]),Math.ceil(h/b[1]/x[1]),Math.ceil(p/b[2]/x[2])],T=y?4:1,$=[...u,h,f/T],C=$.length,D=[...l,f,m/T],P=D.length,H=[p,h,m/T],oe=[{type:6,data:h},{type:6,data:m},{type:6,data:f}];Ci(t,oe),oe.push(...I(d,$,D));let fe=["rank","rank"],Pe=e.length>2;Pe&&(oe.push(...I(e[2].dims)),fe.push("rank")),oe.push(...I(H));let Se=ke=>{let He=d.length,de=Me("batchDims",e[0].dataType,He,1),be=B(e[0].dataType),Re=O("a",e[0].dataType,C,T),Ne=O("b",e[1].dataType,P,T),Oe=ne("result",e[0].dataType,H.length,T),Ve=[Re,Ne];if(Pe){let Ot=a?T:1;Ve.push(O("bias",e[2].dataType,e[2].dims.length,Ot))}let ie=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];zi(t,ie);let Ae=B(Oe.type.tensor),Te=Ii(t,Oe.type.value,Ae),ye=Cl(T,Pe,Te,[de,Re,Ne,Oe],a);return`
  ${ke.registerUniforms(ie).registerInternalVariables(de).declareVariables(...Ve,Oe)}
  ${ye}
  ${y?ms(x,b,be,de):ws(x,b,be,de)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${y};${a}`,inputDependencies:fe},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:oe}),getShaderSource:Se}}}),zl,Al,gf=S(()=>{Ee(),tr(),ce(),Ai(),cs(),mf(),ys(),zl=(e,t,r,i,a=!1,n,s=4,o=4,u=4,l="f32")=>{let d=oe=>{switch(oe){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${oe} is not supported.`)}},p=oe=>{switch(oe){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${oe} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,f=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",b=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${b} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${b} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${b} % inChannels;
    var resData = ${It(s,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${y}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(s)}
    }
    return resData;`,T=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${It(s,l)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${It(s,l)}(0.0);`,$=e?i&&r?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${It(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${It(o,l)}(0.0);`,C=It(u,l),D=It(e?s:o,l),P=It(e?o:s,l),H=Ii(n,C,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${D} {
      ${e?T:$}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${P} {
      ${e?$:T}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${f}
      ${Sl(a)}
      ${H}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Al=(e,t,r,i,a,n,s,o,u)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],p=r[0],h=l?r[2]:r[3],f=l?r[1]:r[2],m=l?r[3]:r[1],y=l&&(d%4===0||d%3===0)&&m%4===0,x=l?m:h*f,b=l?h*f:m,w=[8,8,1],T=i<=8?[4,1,1]:[4,4,1],$=[Math.ceil(x/w[0]/T[0]),Math.ceil(b/w[1]/T[1]),Math.ceil(p/w[2]/T[2])];Le("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${$}`);let C=y?l&&d%4!==0?3:4:1,D=w[1]*T[1],P=w[0]*T[0],H=Math.max(w[0]*C,w[1]),oe=i%D===0,fe=a%P===0,Pe=n%H===0,Se=y?[C,4,4]:[1,1,1],ke=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ci(t,ke),ke.push(...I(e[0].dims,e[1].dims));let He=["rank","rank"];s&&(ke.push(...I(e[2].dims)),He.push("rank")),ke.push(...I(r));let de=be=>{let Re=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];zi(t,Re);let Ne=y?4:1,Oe=B(e[0].dataType),Ve=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${Oe}>`:Oe}) {
        result[flatIndex] = ${y?`vec4<${Oe}>`:Oe}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${Oe}>`:Oe}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,ie=O("x",e[0].dataType,e[0].dims.length,C===3?1:C),Ae=O("w",e[1].dataType,e[1].dims.length,Ne),Te=[ie,Ae],ye=ne("result",e[0].dataType,r.length,Ne);if(s){let Ot=O("bias",e[2].dataType,e[2].dims.length,Ne);Te.push(Ot),Ve+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${Oe}>`:Oe} {
          return bias[coords.${l?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Tl("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${be.registerUniforms(Re).declareVariables(...Te,ye)}
        ${Ve}
        ${zl(l,oe,fe,Pe,s,t,Se[0],Se[1],Se[2],Oe)}
        ${y?ms(T,w,Oe,void 0,!l,H):ws(T,w,Oe,void 0,!l,H,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${y};${oe};${fe};${Pe};${D};${P};${H}`,inputDependencies:He},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:ke}),getShaderSource:de}}}),Ol,bs,Qa,Rl,_s,Ml,Bl,Dl,wf=S(()=>{Ee(),tr(),xe(),ce(),Ai(),cs(),Ol=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},bs=e=>typeof e=="number"?[e,e,e]:e,Qa=(e,t)=>t<=1?e:e+(e-1)*(t-1),Rl=(e,t,r,i=1)=>{let a=Qa(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},_s=(e,t,r,i,a)=>{a==null&&(a=Rl(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},Ml=(e,t,r,i,a,n,s,o,u,l)=>{let d,p,h,f;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=_s([t,r,i,1],[o,u,l],1,[a,n,s],e);p=m[0],h=m[1],f=m[2]}else if(Array.isArray(e)){if(!e.every((y,x,b)=>y===b[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=_s([t,r,i,1],[o,u,l],1,[a,n,s],e[0]);p=m[0],h=m[1],f=m[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/a),h=Math.ceil(r/n),f=Math.ceil(i/s);let m=(p-1)*a+o-t,y=(h-1)*n+u-r,x=(f-1)*s+l-i,b=Math.floor(m/2),w=m-b,T=Math.floor(y/2),$=y-T,C=Math.floor(x/2),D=x-C;d={top:T,bottom:$,left:C,right:D,front:b,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:p,outHeight:h,outWidth:f}},Bl=(e,t,r,i,a,n=!1,s="channelsLast")=>{let o,u,l,d,p;if(s==="channelsLast")[o,u,l,d,p]=e;else if(s==="channelsFirst")[o,p,u,l,d]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,f,m,y]=t,[x,b,w]=bs(r),[T,$,C]=bs(i),D=Qa(f,T),P=Qa(m,$),H=Qa(y,C),{padInfo:oe,outDepth:fe,outHeight:Pe,outWidth:Se}=Ml(a,u,l,d,x,b,w,D,P,H),ke=n?h*p:h,He=[0,0,0,0,0];return s==="channelsFirst"?He=[o,ke,fe,Pe,Se]:s==="channelsLast"&&(He=[o,fe,Pe,Se,ke]),{batchSize:o,dataFormat:s,inDepth:u,inHeight:l,inWidth:d,inChannels:p,outDepth:fe,outHeight:Pe,outWidth:Se,outChannels:ke,padInfo:oe,strideDepth:x,strideHeight:b,strideWidth:w,filterDepth:f,filterHeight:m,filterWidth:y,effectiveFilterDepth:D,effectiveFilterHeight:P,effectiveFilterWidth:H,dilationDepth:T,dilationHeight:$,dilationWidth:C,inShape:e,outShape:He,filterShape:t}},Dl=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:r.map((x,b)=>b)},l=[Math.ceil(Ol(u.x.map(x=>r[x]))/o[0]),1,1];Le("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let d=1,p=N.size(r),h=[{type:12,data:p},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Ci(t,h),h.push(...I(e[0].dims,e[1].dims));let f=["rank","rank"],m=e.length===3;m&&(h.push(...I(e[2].dims)),f.push("rank")),h.push(...I(r));let y=x=>{let b=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];zi(t,b);let w=1,T=B(e[0].dataType),$=O("x",e[0].dataType,e[0].dims.length,d),C=O("W",e[1].dataType,e[1].dims.length,w),D=[$,C],P=ne("result",e[0].dataType,r.length,w),H="";if(m){let Pe=O("bias",e[2].dataType,e[2].dims.length,w);D.push(Pe),H+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${T} {
          return bias[${s?L("coords",4,5):L("coords",1,5)}];
        }`}let oe=It(d,T),fe=Ii(t,oe,T);return`
            ${H}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${$.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${x.registerUniforms(b).declareVariables(...D,P)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${P.offsetToIndices("global_idx")};
              let batch = ${L("coords",0,$.rank)};
              let d2 = ${s?L("coords",$.rank-1,$.rank):L("coords",1,$.rank)};
              let xFRCCorner = vec3<u32>(${s?L("coords",1,$.rank):L("coords",2,$.rank)},
              ${s?L("coords",2,$.rank):L("coords",3,$.rank)},
              ${s?L("coords",3,$.rank):L("coords",4,$.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?L("uniforms.x_shape",1,$.rank):L("uniforms.x_shape",2,$.rank)};
              let xShapeZ = ${s?L("uniforms.x_shape",2,$.rank):L("uniforms.x_shape",3,$.rank)};
              let xShapeW = ${s?L("uniforms.x_shape",3,$.rank):L("uniforms.x_shape",4,$.rank)};
              let xShapeU = ${s?L("uniforms.x_shape",4,$.rank):L("uniforms.x_shape",1,$.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${m?"value = value + getBiasByOutputCoords(coords)":""};
              ${fe}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${d};${m}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:h}),getShaderSource:y}}}),Pl,Ul,yf=S(()=>{Ee(),xe(),ce(),Ai(),Pl=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?r[3]:r[1],d=l/t.group,p=u&&d>=4?M(l):1,h=N.size(r)/p,f=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];Ci(t,f),f.push(...I(s,[o[0],o[1],o[2],o[3]/p]));let m=a?["rank","rank","rank"]:["rank","rank"];f.push(...I([r[0],r[1],r[2],r[3]/p]));let y=x=>{let b=ne("output",e[0].dataType,r.length,p),w=B(b.type.tensor),T=Ii(t,b.type.value,w),$=O("x",e[0].dataType,s.length),C=O("w",e[1].dataType,o.length,p),D=[$,C];a&&D.push(O("b",e[2].dataType,e[2].dims,p));let P=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];zi(t,P);let H=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${$.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${$.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(P).declareVariables(...D,b)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${b.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${b.type.value} = ${b.type.value}(0);
    ${H}
    ${n}
    ${T}
    ${b.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:f}),getShaderSource:y}},Ul=(e,t,r,i)=>{let a=e.length>2,n=M(r[3]),s=M(r[2]),o=N.size(r)/n/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],d=[r[0],r[1],r[2],r[3]/n],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ci(t,p),p.push(...I(u,l,d));let h=(s-1)*t.strides[1]+l[1],f=m=>{let y=ne("output",e[0].dataType,d.length,n),x=B(y.type.tensor),b=Ii(t,y.type.value,x),w=O("x",e[0].dataType,u.length,n),T=O("w",e[1].dataType,l.length,n),$=[w,T];a&&$.push(O("b",e[2].dataType,e[2].dims,n));let C=a?"value += b[output_channel];":"",D=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return zi(t,D),`
  ${m.registerUniforms(D).declareVariables(...$,y)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${h}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${T.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${C}
      ${b}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${h};${l[0]};${l[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:f}}}),Nl,On,Ll,Rn,vs,$s,Vl,Fl,xs,bf=S(()=>{xe(),gf(),wf(),ys(),yf(),Ai(),fs(),De(),Nl=(e,t,r,i,a,n)=>{let s=e[0],o=e.slice(n?1:2,n?3:4),u=o.length,l=t[0],d=t.slice(2).map((h,f)=>h+(h-1)*(r[f]-1)),p=o.map((h,f)=>h+i[f]+i[f+u]).map((h,f)=>Math.floor((h-d[f]+a[f])/a[f]));return p.splice(0,0,s),p.splice(n?3:1,0,l),p},On=[2,3,1,0],Ll=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Rn=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();Hr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},vs=e=>{let t=ps(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},$s=(e,t,r,i)=>{let a=r.format==="NHWC",n=Nl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let D=[t[0]];if(a){let P=e.kernelCustomData.wT??e.compute(ct(t[1],On),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=P),D.push(P)}else D.push(t[1]);t.length===3&&D.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Ul(D,r,n,i),{inputs:D}):e.compute(Pl(D,r,n,i),{inputs:D});return}let s=t.length===3,o=t[0].dims[a?1:2],u=t[0].dims[a?2:3],l=t[0].dims[a?3:1],d=t[1].dims[2],p=t[1].dims[3],h=n[a?1:2],f=n[a?2:3],m=n[a?3:1],y=a&&d===o&&p===u&&r.pads[0]===0&&r.pads[1]===0;if(y||d===1&&p===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let D=n[0],P,H,oe,fe=[];if(a){let ke=e.kernelCustomData.wT??e.compute(ct(t[1],On),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ke),y){let He=o*u*l;P=t[0].reshape([1,D,He]),H=ke.reshape([1,He,m]),oe=[1,D,m]}else P=t[0].reshape([D,o*u,l]),H=ke.reshape([1,l,m]),oe=[D,h*f,m];fe.push(P),fe.push(H)}else P=t[0].reshape([D,l,o*u]),H=t[1].reshape([1,m,l]),oe=[D,m,h*f],fe.push(H),fe.push(P);s&&fe.push(t[2]);let Pe=oe[2],Se=fe[0].dims[fe[0].dims.length-1];Pe<8&&Se<8?e.compute(hs(fe,r,n,oe,a,i),{inputs:fe}):e.compute(An(fe,r,n,oe,a,i),{inputs:fe});return}let x=!0,b=e.kernelCustomData.wT??e.compute(ct(t[1],On),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=b);let w=[t[0],b];s&&w.push(t[2]);let T=a?h*f:m,$=a?m:h*f,C=d*p*l;e.compute(Al(w,r,n,T,$,C,s,x,i),{inputs:w})},Vl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=Rn({...t,pads:a,strides:n,dilations:s,kernelShape:o},i);$s(e,i,u,l=>r?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},Fl=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Rn(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Bl(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(Dl(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},xs=(e,t)=>{if(Ll(e.inputs,t),e.inputs[0].dims.length===3)Vl(e,t);else if(e.inputs[0].dims.length===5)Fl(e,e.inputs,t);else{let r=Rn(t,e.inputs);$s(e,e.inputs,r)}}}),ql,_f=S(()=>{Ee(),tr(),xe(),ce(),ql=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=t.format==="NHWC",s=t.group,o=e[1].dims,u=o[2]/s,l=o[3],d=n?M(u):1,p=n&&l===1&&u>=4,h=p?Math.floor(u/4)*4:Math.floor(u/d)*d,f=u-h,m=n?M(l):1,y=n?l===1?d:m:1,x=N.size(a)/m,b=[Math.ceil(x/64),1,1];Le("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${b}`);let w=["rank","rank"],T=[t.strides[0],t.strides[1]],$=[t.kernelShape[n?1:2],t.kernelShape[n?2:3]],C=[t.dilations[0],t.dilations[1]],D=[$[0]+(t.dilations[0]<=1?0:(t.kernelShape[n?1:2]-1)*(t.dilations[0]-1)),$[1]+(t.dilations[1]<=1?0:(t.kernelShape[n?2:3]-1)*(t.dilations[1]-1))],P=[D[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),D[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],H=[{type:12,data:x},{type:12,data:T},{type:12,data:$},{type:12,data:C},{type:12,data:D},{type:6,data:P},{type:12,data:h},{type:12,data:u},{type:12,data:l},...I(e[0].dims,e[1].dims)];i&&(H.push(...I(e[2].dims)),w.push("rank")),H.push(...I(a));let oe=fe=>{let Pe=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:T.length},{name:"filter_dims",type:"u32",length:$.length},{name:"dilations",type:"u32",length:$.length},{name:"effective_filter_dims",type:"u32",length:D.length},{name:"pads",type:"i32",length:P.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Se=B(e[0].dataType),ke=n?1:2,He=n?2:3,de=n?3:1,be=O("W",e[1].dataType,e[1].dims.length,y),Re=O("Dy",e[0].dataType,e[0].dims.length,d),Ne=[Re,be];i&&Ne.push(O("bias",e[2].dataType,[a[de]].length,m));let Oe=ne("result",e[0].dataType,a.length,m),Ve=()=>{let Te="";if(p)d===4?Te+=`
        let xValue = ${Re.getByOffset("x_offset")};
        let wValue = ${be.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:d===2?Te+=`
          dotProd = dotProd + dot(vec4<${Se}>(${Re.getByOffset("x_offset")}, ${Re.getByOffset("x_offset + 1u")}), vec4<${Se}>(${be.getByOffset("w_offset")}, ${be.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:d===1&&(Te+=`
          dotProd = dotProd + dot(vec4<${Se}>(${Re.getByOffset("x_offset")}, ${Re.getByOffset("x_offset + 1u")}, ${Re.getByOffset("x_offset + 2u")}, ${Re.getByOffset("x_offset + 3u")}), vec4<${Se}>(${be.getByOffset("w_offset")}, ${be.getByOffset("w_offset + 1u")}, ${be.getByOffset("w_offset + 2u")}, ${be.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Te+=`
                  let xValue = ${n?Re.getByOffset(`${Re.indicesToOffset(`${Re.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):Re.get("batch","inputChannel","idyR","idyC")};
        `,d===1)Te+=`
          let w_offset = ${be.indicesToOffset(`${be.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${be.getByOffset(`w_offset / ${y}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ye=0;ye<d;ye++)Te+=`
            let wValue${ye} = ${be.getByOffset(`${be.indicesToOffset(`${be.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ye}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${ye}] * wValue${ye};`;return Te},ie=()=>{if(f===0)return"";if(!p)throw new Error(`packInputAs4 ${p} is not true.`);let Te="";if(d===1){Te+="dotProd = dotProd";for(let ye=0;ye<f;ye++)Te+=`
            + ${Re.getByOffset(`x_offset + ${ye}`)} * ${be.getByOffset(`w_offset + ${ye}`)}`;Te+=";"}else if(d===2){if(f!==2)throw new Error(`Invalid inputChannelsRemainder ${f}.`);Te+=`
          let xValue = ${Re.getByOffset("x_offset")};
          let wValue = ${be.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Te},Ae=`
            let outputIndices = ${Oe.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${Oe.indicesGet("outputIndices",0)};
            let d1 = ${Oe.indicesGet("outputIndices",de)};
            let r = ${Oe.indicesGet("outputIndices",ke)};
            let c = ${Oe.indicesGet("outputIndices",He)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${Oe.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${Se}(dyRCorner) + ${Se}(wR)) / ${Se}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Se}(uniforms.Dy_shape[${ke}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${Se}(dyCCorner) + ${Se}(wC)) / ${Se}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Se}(uniforms.Dy_shape[${He}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${p?`
                var x_offset = ${Re.indicesToOffset(`${Re.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d};
                var w_offset = ${be.indicesToOffset(`${be.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${y};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${p?4:d}) {
                  ${Ve()}
                  inputChannel = inputChannel + ${p?4:d};
                }
                ${ie()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${m}]`:""};
            ${Oe.setByOffset("global_idx","value")};
          `;return`
    ${fe.registerUniforms(Pe).declareVariables(...Ne,Oe)}
      ${fe.mainStart()}
      ${fe.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Ae}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${y}${m}${p}${f}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:b[0],y:b[1],z:b[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:H}),getShaderSource:oe}}}),Gl,Wl,jl,Ss,Hl,Kl,Ts,Zl,Xl,vf=S(()=>{_f(),Ai(),De(),Gl=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,Wl=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},jl=(e,t,r,i,a,n,s,o,u,l)=>{let d=e.length-2,p=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));let h=e[0],f=t[o?3:1]*a;for(let m=0,y=e.length-d-(o?1:0);m<d;++m,++y){let x=e[y],b=p?x*s[m]:l[m],w=Gl(x,s[m],n[m],t[y],r[m],b);Wl(w,i,n,m,m+d),p&&l.push(s[m]*(x-1)+u[m]+(t[y]-1)*r[m]+1-n[m]-n[m+d])}l.splice(0,0,h),l.splice(o?3:1,0,f)},Ss=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,h)=>p*h,1)===0){r.length=0;for(let p=2;p<t[1].dims.length;++p)r.push(t[1].dims[p])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let l=e.strides.slice();if(l.reduce((p,h)=>p+h,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}jl(o,r,u,e.autoPad,e.group,a,l,i,s,n);let d=Object.assign({},e);return Object.assign(d,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:u,strides:l}),d},Hl=e=>{let t=ps(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group??1,s=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,p=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:d,outputShape:p,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Kl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ts=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(ct(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let n=[t[0],a];t.length===3&&n.push(t[2]),e.compute(ql(n,r,i),{inputs:n})},Zl=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let u=t.outputPadding;u=[0].concat(u);let l=Ss({...t,pads:o,strides:s,dilations:n,kernelShape:a,outputPadding:u},i);Ts(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Xl=(e,t)=>{if(Kl(e.inputs,t),e.inputs[0].dims.length===3)Zl(e,t);else{let r=Ss(t,e.inputs);Ts(e,e.inputs,r)}}}),Ql,Yl,Jl,$f=S(()=>{Ee(),xe(),v(),ce(),Ql=(e,t,r,i)=>{let a=N.size(t),n=t.length,s=O("input",e,n),o=ne("output",e,n),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),l=N.normalizeAxis(u,n),d=p=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,f=L("uniforms.input_shape","uniforms.axis",n),m=i.reverse?h+(i.exclusive?" + 1":""):"0",y=i.reverse?f:h+(i.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${m};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:l},...I(t,t)]}),getShaderSource:d}},Yl=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Ql(i,r,a,t),{inputs:[0]})},Jl=e=>{let t=e.exclusive===1,r=e.reverse===1;return g({exclusive:t,reverse:r})}}),ed,td,rd,id,ad,xf=S(()=>{Ee(),xe(),v(),ce(),ed=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},td=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},rd=(e,t)=>{let r,i,a,n,s,o,u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([r,i,a,n]=e.dims,s=d?[r,i,a,l,l,n/l**2]:[r,i,a,n/l**2,l,l],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=d?[r,l,l,n/l**2,i,a]:[r,n/l**2,l,l,i,a],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(s),h=p.dims.length,f=e.dataType,m=O("a",f,h),y=ne("output",f,h),x=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(m,y)}

  ${td(o,h,m,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:b=>{let w=u?[r,i*l,a*l,n/l**2]:[r,n/l**2,i*l,a*l],T=N.size(w),$=p.dims,C=N.sortBasedOnPerm($,o);return{outputs:[{dims:w,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...I($,C)]}},getShaderSource:x}},id=(e,t)=>{ed(e.inputs),e.compute(rd(e.inputs[0],t))},ad=e=>g({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Mn,Ya,Es,nd,sd,od,ud,ks,ld,dd,pd,Sf=S(()=>{Ee(),xe(),v(),ce(),Mn="[a-zA-Z]|\\.\\.\\.",Ya="("+Mn+")+",Es="^"+Ya+"$",nd="("+Ya+",)*"+Ya,sd="^"+nd+"$",od=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},ud=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(sd)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(Es)))throw new Error("Invalid LHS term");let o=this.processTerm(a,!0,s,n);this.lhs.push(o)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(Ya)))throw new Error("Invalid RHS");i.match(RegExp(Mn,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],o=0;if(!e.match(RegExp(Es))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Mn,"g")),l=new od(i);return u?.forEach((d,p)=>{if(d==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let h=a-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let f=0;f<s.length;f++){let m=String.fromCharCode(48+f);l.addSymbol(m,p+f),this.addSymbol(m,r[o++],i)}}else l.addSymbol(d,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,r[o++],i)}),l}},ks=e=>e+"_max",ld=(e,t,r,i)=>{let a=e.map(l=>l.length).map((l,d)=>O(`input${d}`,t,l)),n=N.size(i),s=ne("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(l=>!r.rhs.symbolToIndices.has(l)),u=l=>{let d=[],p="var prod = 1.0;",h="var sum = 0.0;",f="sum += prod;",m=[],y=[],x=[],b=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach(($,C)=>{if(r.rhs.symbolToIndices.has(C)){let D=r.rhs.symbolToIndices.get(C)?.[0];D!==void 0&&r.lhs.forEach((P,H)=>{if($.inputIndices.includes(H)){let oe=P.symbolToIndices.get(C);if(oe===void 0)throw new Error("Invalid symbol error");oe.forEach(fe=>{d.push(`${a[H].indicesSet(`input${H}Indices`,fe,s.indicesGet("outputIndices",D))}`)})}})}else r.lhs.forEach((D,P)=>{if($.inputIndices.includes(P)){let H=D.symbolToIndices.get(C);if(H===void 0)throw new Error("Invalid symbol error");H.forEach(oe=>{m.push(`${a[P].indicesSet(`input${P}Indices`,oe,`${C}`)}`)}),b.push(`prod *= ${a[P].getByIndices(`input${P}Indices`)};`)}}),y.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${ks(C)}; ${C}++) {`),x.push("}")});let T=w?[...d,`let sum = ${a.map(($,C)=>$.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...d,h,...y,...m,p,...b,f,...x];return`
            ${l.registerUniforms(o.map($=>({name:`${ks($)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map(($,C)=>`var input${C}Indices: ${a[C].type.indices};`).join(`
`)}
            ${T.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(p=>r.symbolToInfo.has(p)).map(p=>({type:12,data:r.symbolToInfo.get(p)?.dimValue||0}));l.push({type:12,data:n});let d=e.map((p,h)=>[...I(p)]).reduce((p,h)=>p.concat(h),l);return d.push(...I(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:d}},getShaderSource:u}},dd=(e,t)=>{let r=new ud(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(ld(a,e.inputs[0].dataType,r,i))},pd=e=>{let t=e.equation.replace(/\s+/g,"");return g({equation:t})}}),cd,Is,hd,fd,md,Tf=S(()=>{Ee(),xe(),ce(),cd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Is=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},hd=(e,t)=>e.length>t.length?Is(e,t):Is(t,e),fd=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=hd(t,r),a=e[0].dataType,n=a===9||N.size(t)===1,s=a===9||t.length>0&&t[t.length-1]%4===0?4:1,o=n||i.length>0&&i[i.length-1]%4===0?4:1,u=Math.ceil(N.size(i)/o),l=p=>{let h=O("input",a,t.length,s),f=ne("output",a,i.length,o),m;if(a===9){let y=(x,b,w="")=>`
          let outputIndices${b} = ${f.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${h.broadcastedIndicesToOffset(`outputIndices${b}`,f)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${x}[${b}] = ${w}(${h.getByOffset(`index${b}`)}[component${b}]);
        `;m=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${y("data",0,"u32")}
        ${y("data",1,"u32")}
        ${y("data",2,"u32")}
        ${y("data",3,"u32")}
        ${f.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${f.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",f)};
        let data = ${f.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${f.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(h,f)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:u},...I(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},md=e=>{cd(e.inputs),e.compute(fd(e.inputs),{inputs:[0]})}}),gd,wd,Ef=S(()=>{Ee(),xe(),ce(),ds(),gd=e=>{let t=e[0].dataType,r=N.size(e[0].dims),i=N.size(e[1].dims),a=i%4===0,n=s=>{let o=O("x",t,[1],4),u=O("bias",t,[1],4),l=ne("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=f=>`
      let bias${f}_offset: u32 = (global_idx * 4 + ${f}) % uniforms.bias_size;
      let bias${f} = ${u.getByOffset(`bias${f}_offset / 4`)}[bias${f}_offset % 4];`,h=a?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(d).declareVariables(o,u,l)}

    ${us(z(t))}

    ${s.mainStart(k)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",ls("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/k/4)}})}},wd=e=>{e.inputs.length<2||N.size(e.inputs[1].dims)===0?Qu(e):e.compute(gd(e.inputs))}}),yd,bd,_d,vd,kf=S(()=>{Ee(),xe(),v(),ce(),yd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},bd=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=N.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let o=r[n],u=e[0].dataType===9?4:1,l=Math.ceil(N.size(s)/u),d=[{type:12,data:l},{type:6,data:o},{type:12,data:n},...I(e[0].dims,e[1].dims,s)],p=h=>{let f=O("data",e[0].dataType,e[0].dims.length,u),m=O("inputIndices",e[1].dataType,e[1].dims.length),y=ne("output",e[0].dataType,s.length,u),x=w=>{let T=i.length,$=`var indicesIndices${w}  = ${m.type.indices}(0);`;for(let C=0;C<T;C++)$+=`${T>1?`indicesIndices${w}[${C}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${C}]`:`outputIndices${w}`};`;$+=`
          var idx${w} = ${m.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${f.type.indices};
        `;for(let C=0,D=0;C<a;C++)C===n?($+=`${a>1?`dataIndices${w}[${C}]`:`dataIndices${w}`} = u32(idx${w});`,D+=T):($+=`${a>1?`dataIndices${w}[${C}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${D}]`:`outputIndices${w}`};`,D++);return $},b;if(e[0].dataType===9){let w=(T,$,C="")=>`
          let outputIndices${$} = ${y.offsetToIndices(`outputOffset + ${$}u`)};
          ${x($)};
          let offset${$} = ${f.indicesToOffset(`dataIndices${$}`)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${T}[${$}] = ${C}(${f.getByOffset(`index${$}`)}[component${$}]);
        `;b=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else b=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${f.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,m,y)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${b}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p}},_d=e=>g({axis:e.axis}),vd=(e,t)=>{let r=e.inputs;yd(r),e.compute(bd(e.inputs,t))}}),$d,xd,Sd,If=S(()=>{Ee(),xe(),ce(),$d=(e,t,r,i,a,n,s,o,u)=>{let l=[{type:12,data:n},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:u}],d=[n];l.push(...I(t.dims,d));let p=h=>{let f=O("indices_data",t.dataType,t.dims.length),m=ne("input_slice_offsets_data",12,1,1),y=[f,m],x=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(x).declareVariables(...y)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:l}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},xd=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,n=r[1].dims,s=n[n.length-1],o=N.sizeToDimension(n,n.length-1),u=N.sizeFromDimension(i,t.batchDims+s),l=N.sizeToDimension(i,t.batchDims),d=N.sizeFromDimension(i,t.batchDims),p=o/l,h=new Array(s),f=u;for(let $=0;$<s;++$)h[s-1-$]=f,f*=i[t.batchDims+s-1-$];let m=$d(e,r[1],h,t.batchDims,i,o,p,d,s),y=t.batchDims+s;if(y>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let x=n.slice(0,-1).concat(i.slice(y)),b=N.size(x),w=[{type:12,data:b},{type:12,data:u},...I(r[0].dims,m.dims,x)],T=$=>{let C=O("data",r[0].dataType,r[0].dims.length),D=O("slice_offsets",12,m.dims.length),P=ne("output",r[0].dataType,x.length);return`
          ${$.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,D,P)}
            ${$.mainStart()}
            ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:x,dataType:a}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:w}),getShaderSource:T},{inputs:[r[0],m]})},Sd=e=>({batchDims:e.batch_dims,cacheKey:""})}),Td,Ed,kd,Id,Cf=S(()=>{Ee(),xe(),v(),ce(),Td=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=N.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((o,u)=>u===r?Math.ceil(o/i)===n.dims[u]:o===n.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((o,u)=>o===n.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Ed=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=N.normalizeAxis(t.gatherAxis,a),s=N.normalizeAxis(t.quantizeAxis,a),o=r.slice(0);o.splice(n,1,...i);let u=N.size(o),l=e[2].dataType,d=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...I(...e.map((f,m)=>f.dims),o)],h=f=>{let m=O("data",e[0].dataType,e[0].dims.length),y=O("inputIndices",e[1].dataType,e[1].dims.length),x=O("scales",e[2].dataType,e[2].dims.length),b=e.length>3?O("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=ne("output",l,o.length),T=[m,y,x];b&&T.push(b);let $=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${f.registerUniforms($).declareVariables(...T,w)}
        ${f.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${m.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${m.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${m.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${m.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${m.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${m.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${b?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${b.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${b.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${z(l)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((f,m)=>m!==1).map(f=>f.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(f,m)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:h}},kd=(e,t)=>{let r=e.inputs;Td(r,t),e.compute(Ed(e.inputs,t))},Id=e=>g({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Cd,zd,Ad,Od,zf=S(()=>{Ee(),xe(),v(),ce(),Cd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},zd=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,o=N.normalizeAxis(t.axis,a),u=r[o],l=n.slice(0),d=N.size(l),p=O("input",i,a),h=O("indicesInput",s,n.length),f=ne("output",i,l.length),m=[{type:12,data:d},{type:6,data:u},{type:12,data:o}];return m.push(...I(r,n,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,h,f)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${f.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${f.setByOffset("global_idx","value")};
  }`}},Ad=e=>g({axis:e.axis}),Od=(e,t)=>{let r=e.inputs;Cd(r),e.compute(zd(e.inputs,t))}}),Rd,Md,Bd,Dd,Af=S(()=>{Ee(),xe(),ce(),Rd=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Md=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=Zi.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[a,n];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(n/u),d=Math.ceil(a/u);N.size(o);let p=[{type:12,data:l},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],h=["type","type"];e.length===3&&(p.push(...I(e[2].dims)),h.push("rank")),p.push(...I(o));let f=m=>{let y=O("a",e[0].dataType,e[0].dims),x=O("b",e[1].dataType,e[1].dims),b=null,w=[y,x];e.length===3&&(b=O("c",e[2].dataType,e[2].dims.length),w.push(b));let T=ne("output",e[0].dataType,o.length);w.push(T);let $=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],C="",D="";t.transA&&t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,C="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,C="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,C="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${y.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${x.type.value}(0);
      }
      `,C="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let P=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${m.registerUniforms($).declareVariables(...w)}
  var<workgroup> tile_a: array<array<${y.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${x.type.storage}, ${u}>, ${u}>;
  ${m.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${T.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${D}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${C}
      }
      workgroupBarrier();
    }

    ${P}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${b!=null?`let cOffset = ${b.broadcastedIndicesToOffset("vec2(m, n)",T)}; value += ${T.type.value}(uniforms.beta) * ${b.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:p}),getShaderSource:f}},Bd=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Dd=(e,t)=>{Rd(e.inputs),e.compute(Md(e.inputs,t))}}),Ir,Dr,Oi,Ri,Pd,Ud,Nd,Ld,Vd,Fd,qd,Gd,Wd,jd,Of=S(()=>{Ee(),xe(),v(),ce(),[Ir,Dr,Oi,Ri]=[0,1,2,3],Pd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Ud=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Nd=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Ld=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Vd=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Fd=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ir}] = batch;
     indices[${Dr}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Oi}] = u32(r);
            indices[${Ri}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${Oi}] = u32(clamp(r, 0, H - 1));
          indices[${Ri}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Oi}] = gs_reflect(r, border[1], border[3]);
          indices[${Ri}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,qd=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ir}], indices[${Dr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ir}], indices[${Dr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ir}], indices[${Dr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ir}], indices[${Dr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ir}], indices[${Dr}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ir}], indices[${Dr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Gd=(e,t)=>{let r=O("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=O("grid",e[1].dataType,i.length,2),n=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(n=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ir,Dr,Oi,Ri]=[0,3,1,2]);let s=ne("output",e[0].dataType,n.length),o=r.type.value,u=N.size(n),l=[{type:12,data:u},...I(e[0].dims,i,n)],d=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(r,a,s)}
  ${Ud}
  ${Nd(o)}
  ${Ld(t)}
  ${Vd(t)}
  ${Fd(r,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Oi}]);
      let W_in = i32(uniforms.x_shape[${Ri}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ir}], indices[${Oi}], indices[${Ri}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${qd(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let h=N.size(n);return{outputs:[{dims:n,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:l}},getShaderSource:d}},Wd=(e,t)=>{Pd(e.inputs),e.compute(Gd(e.inputs,t))},jd=e=>g({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Nt,Hd,Kd,Cs,Zd,Ja,Xd,Qd=S(()=>{Ee(),xe(),v(),Ji(),ss(),ce(),De(),Nt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Hd=(e,t)=>{let r=e[0],i=Nt(e,1),a=Nt(e,2),n=Nt(e,3),s=Nt(e,4),o=Nt(e,5),u=Nt(e,6),l=Nt(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=r.dims[0],p=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],f=p,m=0,y=0,x=Math.floor(h/t.numHeads);if(u&&l&&N.size(u.dims)&&N.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=u.dims[2],y=u.dims[2]}else if(u&&N.size(u.dims)||l&&N.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(i&&N.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');b=2,f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,f=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}if(n&&N.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=m+f,T=0;if(s&&N.size(s.dims)>0){T=8;let P=s.dims;throw P.length===1?P[0]===d?T=1:P[0]===3*d+2&&(T=3):P.length===2&&P[0]===d&&P[1]===w&&(T=5),T===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let $=!1,C=h;if(a&&N.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(f!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=a.dims[2]}else{if(f!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=a.dims[1]*a.dims[3],$=!0}}let D=!1;if(s&&N.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&N.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:w,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:h,vHiddenSize:C,headSize:x,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:T,scale:t.scale,broadcastResPosBias:D,passPastInKv:$,qkvFormat:b}},Kd=e=>g({...e}),Cs=g({perm:[0,2,1,3]}),Zd=(e,t,r,i,a,n,s)=>{let o=[i,a,n],u=N.size(o),l=[{type:12,data:u},{type:12,data:s},{type:12,data:n}],d=p=>{let h=ne("qkv_with_bias",t.dataType,o),f=O("qkv",t.dataType,o),m=O("bias",r.dataType,o),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(y).declareVariables(f,m,h)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,r],outputs:[-1]})[0]},Ja=(e,t,r,i,a,n,s,o)=>{let u=n;if(s&&N.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Zd(e,n,s,t,i,r*a,o),u=u.reshape([t,i,r,a]),r===1||i===1?u:e.compute(ct(u,Cs.perm),{inputs:[u],outputs:[-1]})[0]}else return n.dims.length===3&&(u=n.reshape([t,i,r,a])),r===1||i===1?u:e.compute(ct(u,Cs.perm),{inputs:[u],outputs:[-1]})[0]},Xd=(e,t)=>{let r=Hd(e.inputs,t),i=e.inputs[0],a=Nt(e.inputs,1),n=Nt(e.inputs,2),s=Nt(e.inputs,3),o=Nt(e.inputs,4),u=Nt(e.inputs,5),l=Nt(e.inputs,6),d=Nt(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let p=a&&n&&a.dims.length===4&&n.dims.length===4,h=Ja(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(p)return Ka(e,h,a,n,o,void 0,l,d,u,r);if(!a||!n)throw new Error("key and value must be provided");let f=Ja(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),m=Ja(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);Ka(e,h,f,m,o,void 0,l,d,u,r)}}),Yd,Jd,ep,tp,zs,rp,ip,ap=S(()=>{Ee(),xe(),v(),ce(),Yd=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Jd=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),g({numOutputs:i,axis:t.axis,splitSizes:r})},ep=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${L("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,tp=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},zs=(e,t)=>{let r=e[0].dims,i=N.size(r),a=e[0].dataType,n=N.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=O("input",a,r.length),u=new Array(t.numOutputs),l=[],d=[],p=0,h=[{type:12,data:i}];for(let m=0;m<t.numOutputs;m++){p+=t.splitSizes[m],u[m]=p;let y=r.slice();y[n]=t.splitSizes[m],d.push(y),s[m]=ne(`output${m}`,a,y.length),l.push({dims:d[m],dataType:e[0].dataType})}h.push({type:12,data:u},...I(r,...d));let f=m=>`
  ${m.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...s)}
  ${ep(u.length)}
  ${tp(s)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${L("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h})}},rp=(e,t)=>{Yd(e.inputs);let r=e.inputs.length===1?t:Jd(e.inputs,t);e.compute(zs(e.inputs,r),{inputs:[0]})},ip=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return g({axis:t,numOutputs:i,splitSizes:r})}}),np,Bn,sp,op=S(()=>{Ee(),xe(),v(),ce(),np=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!N.areEqual(i.dims,[])&&!N.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!N.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],l=r.dims[r.dims.length-2],d=a.dims[0],p=N.sizeFromDimension(r.dims,1)/l,h=o===0?a.dims[1]*2:p/s;if(o>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(u!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(l!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(h/2!==a.dims[1]&&o/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`)},Bn=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],o=N.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,d=e[2].dims[1],p=a===0?d*2:l/i,h=new Array(s,u,l/p,p-d),f=N.computeStrides(h),m=[{type:1,data:n},{type:12,data:h},{type:12,data:f},...e[0].dims.length===3?new Array({type:12,data:[o,l,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...I(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=x=>{let b=O("input",e[0].dataType,e[0].dims.length),w=O("position_ids",e[1].dataType,e[1].dims.length),T=O("cos_cache",e[2].dataType,e[2].dims.length),$=O("sin_cache",e[3].dataType,e[3].dims.length),C=ne("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:f.length},{name:"input_output_strides",type:"u32",length:f.length}]),`
        ${x.declareVariables(b,w,T,$,C)}

        ${x.mainStart(k)}
          let half_rotary_emb_dim = uniforms.${T.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",ne("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${b.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} -
                ${b.getByOffset("j")} * ${$.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${b.getByOffset("i")} * ${$.get("position_id","bsnh[3]")} +
                ${b.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",b.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:g({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(N.size(h)/k)},programUniforms:m})}},sp=(e,t)=>{np(e.inputs,t),e.compute(Bn(e.inputs,t))}}),up,lp,As,dp,pp,Rf=S(()=>{v(),Ee(),ss(),Qd(),ap(),De(),op(),ce(),up=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=r.dims[0],u=r.dims[1],l=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],d=u,p=0,h=!i||i.dims.length===0,f=Math.floor(h?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);h&&(l=f*t.numHeads);let m=n&&n.dims.length!==0,y=s&&s.dims.length!==0;if(m&&n.dims.length===4&&n.dims[0]===o&&n.dims[1]!==t.kvNumHeads&&n.dims[2]===t.kvNumHeads&&n.dims[3]===f)throw new Error("BSNH pastKey/pastValue is not supported");if(m&&y){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');p=n.dims[2]}else if(m||y)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');d=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==f)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');d=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==f)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');d=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let b=0,w=!1,T=t.kvNumHeads?f*t.kvNumHeads:l;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(d!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=a.dims[2]}else{if(d!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=a.dims[1]*a.dims[3],w=!0}}let $=e.length>4?e[5]:void 0;if($){if($.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let C=$.dims.reduce((D,P)=>D*P,1);if(C!==o)throw new Error(`seqlens_k must have batch_size (${o}) elements, got ${C}.`);for(let D=0;D<$.dims.length;D++)if($.dims[D]!==1&&$.dims[D]!==o)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${o}), got dims[${D}] = ${$.dims[D]}.`)}return{batchSize:o,sequenceLength:u,pastSequenceLength:p,kvSequenceLength:d,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:T,headSize:f,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:w,qkvFormat:x}},lp=g({perm:[0,2,1,3]}),As=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(ct(i,lp.perm),{inputs:[i],outputs:[-1]})[0]),i},dp=(e,t,r,i)=>{let a=7,n=["type","type"],s=[e*t],o=e*t,u=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],l=d=>{let p=O("seq_lens",r.dataType,r.dims),h=O("total_seq_lens",i.dataType,i.dims),f=ne("pos_ids",a,s),m=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${d.registerUniforms(m).declareVariables(p,h,f)}
  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${p.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${f.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${f.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:n},getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:u}),getShaderSource:l}},pp=(e,t)=>{let r=up(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,n=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=r.kvNumHeads?r.kvNumHeads:r.numHeads,p=g({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,d*r.headSize,d*r.headSize]}),[h,f,m]=!a&&!n?e.compute(zs([i],p),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,n],y,x;if(t.doRotary){let $=e.compute(dp(r.batchSize,r.sequenceLength,u,l),{inputs:[u,l],outputs:[-1]})[0],C=e.inputs[7],D=e.inputs[8],P=g({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),H=[h,$,C,D],oe=[-1];y=e.compute(Bn(H,P),{inputs:H,outputs:oe})[0],H.splice(0,1,f);let fe=g({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});x=e.compute(Bn(H,fe),{inputs:H,outputs:oe})[0]}let b=Ja(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?y:h,void 0,0),w=As(e,t.doRotary?x:f,r),T=As(e,m,r);Ka(e,b,w,T,void 0,void 0,s,o,void 0,r,u,l)}}),Os,cp,hp,fp,Mf=S(()=>{Ee(),xe(),De(),ce(),Os=(e,t,r,i,a,n,s,o)=>{let u=M(n),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,p=a*s,h=64;p===1&&(h=256);let f=[a,s,n/u],m=[a,s,2],y=["rank","type","type"],x=[];x.push(...I(f,m));let b=w=>{let T=O("x",t.dataType,3,u),$=O("scale",r.dataType,r.dims),C=O("bias",i.dataType,i.dims),D=ne("output",1,3,2),P=[T,$,C,D];return`
  var<workgroup> workgroup_shared : array<${d}, ${h}>;
  const workgroup_size = ${h}u;
  ${w.declareVariables(...P)}
  ${w.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${T.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${j("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${j("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${h}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:p},programUniforms:x}),getShaderSource:b},{inputs:[t,r,i],outputs:[-1]})[0]},cp=(e,t,r)=>{let i=t[0].dims,a=i,n=2,s=i[0],o=i[1],u=N.sizeFromDimension(i,n),l=M(u),d=N.size(a)/l,p=Os(e,t[0],t[1],t[2],s,u,o,r.epsilon),h=[s,o,u/l],f=[s,o],m=["type","none"],y=x=>{let b=O("x",t[0].dataType,h.length,l),w=O("scale_shift",1,f.length,2),T=ne("output",t[0].dataType,h.length,l),$=[b,w,T];return`
  ${x.registerUniform("output_size","u32").declareVariables(...$)}
  ${x.mainStart()}
  ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${T.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${b.getByOffset("global_idx")} * ${T.type.value}(scale_shift.x) + ${T.type.value}(scale_shift.y);
      ${T.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...I(h,f,h)]}),getShaderSource:y},{inputs:[t[0],p]})},hp=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],o=N.sizeFromDimension(i,1)/s,u=M(s),l=N.size(a)/u,d=[{type:12,data:o},{type:12,data:Math.floor(s/u)}],p=["type","type"],h=!1,f=[0,i.length-1];for(let b=0;b<i.length-2;b++)h=h||i[b+1]!==1,f.push(b+1);h=h&&i[i.length-1]!==1;let m=h?e.compute(ct(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(b,w)=>i[f[w]])),y=Os(e,m,t[1],t[2],n,o,s,r.epsilon),x=b=>{let w=B(t[0].dataType),T=u===1?"vec2f":`mat${u}x2f`,$=P=>{let H=P===0?"x":"y",oe=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${w}(${oe}(scale.${H}))`;case 2:return`vec2<${w}>(${oe}(scale[0].${H}, scale[1].${H}))`;case 4:return`vec4<${w}>(${oe}(scale[0].${H}, scale[1].${H}, scale[2].${H}, scale[3].${H}))`;default:throw new Error(`Not supported compoents ${u}`)}},C=O("input",t[0].dataType,t[0].dims,u),D=ne("output",t[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${T}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${D.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${b.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${$(0)}, ${$(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:x},{inputs:[t[0],y]})},fp=(e,t)=>{t.format==="NHWC"?hp(e,e.inputs,t):cp(e,e.inputs,t)}}),mp,gp,wp,Bf=S(()=>{Ee(),xe(),ce(),mp=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},gp=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],o=a,u=N.normalizeAxis(t.axis,a.length),l=N.sizeToDimension(a,u),d=N.sizeFromDimension(a,u),p=N.size(n.dims),h=s?N.size(s.dims):0;if(p!==d||s&&h!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${h}`);let f=[];for(let C=0;C<a.length;++C)C<u?f.push(a[C]):f.push(1);let m=M(d),y=["type","type"],x=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/m)},{type:1,data:t.epsilon}];s&&y.push("type");let b=r>1,w=r>2,T=C=>{let D=B(e[0].dataType),P=[O("x",e[0].dataType,e[0].dims,m),O("scale",n.dataType,n.dims,m)];s&&P.push(O("bias",s.dataType,s.dims,m)),P.push(ne("output",e[0].dataType,o,m)),b&&P.push(ne("mean_data_output",1,f)),w&&P.push(ne("inv_std_output",1,f));let H=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(H).declareVariables(...P)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${K("f32",m)};
    var mean_square_vector = ${K("f32",m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${te(D,m,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${j("mean_vector",m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${j("mean_square_vector",m)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${te(D,m,"x[j + offset]")};
      let f32scale = ${te(D,m,"scale[j]")};
      output[j + offset] = ${P[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${te(D,m,"bias[j]")}`:""}
      );
    }

    ${b?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},$=[{dims:o,dataType:e[0].dataType}];return b&&$.push({dims:f,dataType:1}),w&&$.push({dims:f,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${m};${r};${i}`,inputDependencies:y},getRunData:()=>({outputs:$,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:x}),getShaderSource:T}},wp=(e,t)=>{mp(e.inputs),e.compute(gp(e.inputs,t,e.outputCount))}}),yp,bp,Df=S(()=>{xe(),fs(),ys(),yp=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},bp=e=>{yp(e.inputs);let t=Sr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(hs(e.inputs,{activation:""},t));else{let a=t[t.length-2],n=N.size(e.inputs[0].dims.slice(0,-2)),s=N.size(e.inputs[1].dims.slice(0,-2));if(n!==1&&a===1&&s===1){let o=e.inputs[0].reshape([1,n,i]),u=e.inputs[1].reshape([1,i,r]),l=[1,n,r],d=[o,u];e.compute(An(d,{activation:""},t,l),{inputs:d})}else e.compute(An(e.inputs,{activation:""},t))}}}),_p,vp,$p,xp,Sp,Pf=S(()=>{Ee(),xe(),v(),ce(),_p=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!N.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(N.size(o)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(N.size(u)!==l)throw new Error("zeroPoints input size error.")}},vp=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,o=r.slice(0,i-2),u=N.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=M(t.k),h=M(l),f=M(s),m=o.concat([a,s]),y=a>1&&s/f%2===0?2:1,x=N.size(m)/f/y,b=64,w=[],T=[u,a,n/p],$=N.convertShape(e[1].dims).slice();$.splice(-1,1,l/h),w.push(...I(T)),w.push(...I($)),w.push(...I(e[2].dims)),e.length===4&&w.push(...I(N.convertShape(e[3].dims)));let C=[u,a,s/f];w.push(...I(C));let D=P=>{let H=T.length,oe=O("a",e[0].dataType,H,p),fe=O("b",12,$.length,h),Pe=O("scales",e[2].dataType,e[2].dims.length),Se=[oe,fe,Pe],ke=e.length===4?O("zero_points",12,e[3].dims.length):void 0;ke&&Se.push(ke);let He=C.length,de=ne("output",e[0].dataType,He,f),be=B(e[0].dataType),Re=(()=>{switch(p){case 1:return`array<${be}, 8>`;case 2:return`mat4x2<${be}>`;case 4:return`mat2x4<${be}>`;default:throw new Error(`${p}-component is not supported.`)}})(),Ne=Math.floor(32/t.bits),Oe=Math.floor(Ne/8),Ve=()=>{let Te="";for(let ye=0;ye<Oe;ye++){let Ot=ye*t.bits*4,Kt=Ot+t.bits;Te+=`
          // reuse a data (pass ${ye})
            var input_offset${ye>0?ye:""} = ${ye===0?oe.indicesToOffset(`${oe.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${ye>0?ye:""}: ${Re};
            for (var j${ye>0?ye:""}: u32 = 0; j${ye>0?ye:""} < ${8/p}; j${ye>0?ye:""}++) {
              a_data${ye>0?ye:""}[j${ye>0?ye:""}] = ${oe.getByOffset(`input_offset${ye>0?ye:""}`)};
              input_offset${ye>0?ye:""}++;
            }
          `;for(let bt=0;bt<f*y;bt++)Te+=`
            b_value = ${h===1?`b${bt}_data`:`b${bt}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${ye*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Ot}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Kt}u) & b_mask);`}
            b_quantized_values = ${Re}(${Array.from({length:4},(Zt,tt)=>`${be}(b_value_lower[${tt}]), ${be}(b_value_upper[${tt}])`).join(", ")});
            b_dequantized_values = ${p===1?`${Re}(${Array.from({length:8},(Zt,tt)=>`(b_quantized_values[${tt}] - ${ke?`zero_point${bt}`:"zero_point"}) * scale${bt}`).join(", ")});`:`(b_quantized_values - ${Re}(${Array(8).fill(`${ke?`zero_point${bt}`:"zero_point"}`).join(",")})) * scale${bt};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(bt/f)}]${f>1?`[${bt%f}]`:""} += ${Array.from({length:8/p},(Zt,tt)=>`${p===1?`a_data${ye>0?ye:""}[${tt}] * b_dequantized_values[${tt}]`:`dot(a_data${ye>0?ye:""}[${tt}], b_dequantized_values[${tt}])`}`).join(" + ")};
          `}return Te},ie=()=>{let Te=`
            var col_index = col * ${f};
            ${ke?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${be}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let ye=0;ye<f*y;ye++)Te+=`
            let scale${ye} = ${Pe.getByOffset("col_index * nBlocksPerCol + block")};
            ${ke?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${ke.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${ye} = ${be}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Te},Ae=()=>{let Te=`col_index = col * ${f};`;for(let ye=0;ye<f*y;ye++)Te+=`
            let b${ye}_data = ${fe.getByIndices(`${fe.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Te+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Re};
            var b_dequantized_values: ${Re};`,Te};return`
        var<workgroup> workgroup_shared: array<${de.type.value}, ${y*b}>;
        ${P.declareVariables(...Se,de)}
        ${P.mainStart([b,1,1])}
          let output_indices = ${de.offsetToIndices(`(global_idx / ${b}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${b}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${ie()}
            for (var word: u32 = 0; word < ${l}; word += ${h}) {
              ${Ae()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${Ve()}
                word_offset += ${Ne/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${de.type.value} = ${de.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${b}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${de.setByIndices(`${de.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${h};${f};${y};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x},programUniforms:w}),getShaderSource:D}},$p=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,o=r.slice(0,i-2),u=N.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=M(t.k),h=M(l),f=o.concat([a,s]),m=128,y=s%8===0?8:s%4===0?4:1,x=m/y,b=Math.floor(32/t.bits),w=x*h*b,T=w/p,$=w/t.blockSize,C=N.size(f)/y,D=[],P=[u,a,n/p],H=N.convertShape(e[1].dims).slice();H.splice(-1,1,l/h),D.push(...I(P)),D.push(...I(H)),D.push(...I(e[2].dims)),e.length===4&&D.push(...I(N.convertShape(e[3].dims)));let oe=[u,a,s];D.push(...I(oe));let fe=Pe=>{let Se=P.length,ke=O("a",e[0].dataType,Se,p),He=O("b",12,H.length,h),de=O("scales",e[2].dataType,e[2].dims.length),be=[ke,He,de],Re=e.length===4?O("zero_points",12,e[3].dims.length):void 0;Re&&be.push(Re);let Ne=oe.length,Oe=ne("output",e[0].dataType,Ne),Ve=B(e[0].dataType),ie=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${Ve}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Ve}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Ve}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Ve}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ke.type.value}, ${T}>;
        var<workgroup> inter_results: array<array<${Oe.type.value}, ${x}>, ${y}>;
        ${Pe.declareVariables(...be,Oe)}
        ${Pe.mainStart([x,y,1])}
          let output_indices = ${Oe.offsetToIndices(`workgroup_index * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${$} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${T};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${T}; a_offset += ${m})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ke.getByIndices(`${ke.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ke.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${$} + local_id.x;
            ${Re?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${Re.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Ve}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${Ve}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${de.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${He.getByIndices(`${He.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${h}; i++) {
              let b_value = ${h===1?"b_data":"b_data[i]"};
              ${(()=>{let Ae=Math.floor(b/8),Te="";for(let ye=0;ye<Ae;ye++){let Ot=ye*t.bits*4,Kt=Ot+t.bits;Te+=`
              ${ie()}
              {${t.bits===2?`
                let half_word = b_value >> ${ye*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Ot}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Kt}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${Ve}>(${Array.from({length:4},(bt,Zt)=>`${Ve}(b_value_lower[${Zt}]), ${Ve}(b_value_upper[${Zt}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${Ve}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(bt,Zt)=>`${`dot(a_data${Zt}, b_dequantized_values[${Zt}])`}`).join(" + ")};
              }
              word_offset += ${8/p};`}return Te})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${y}) {
            var output_value: ${Oe.type.value} = ${Oe.type.value}(0);
            for (var b = 0u; b < ${x}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Oe.setByIndices(`${Oe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${h};${x};${y}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:d}],dispatchGroup:{x:C},programUniforms:D}),getShaderSource:fe}},xp=(e,t)=>{_p(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute($p(e.inputs,t)):e.compute(vp(e.inputs,t))},Sp=e=>g(e)}),Tp,Ep,kp,Ip,Cp,zp,Ap,Op,Rp,Uf=S(()=>{Ee(),xe(),ce(),Tp=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ep=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${L("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${L("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${L("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},kp=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${L("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${L("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${L("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${L("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Ip=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${L("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${L("uniforms.x_shape",a,t)})) {
                  k = i32(${L("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${L("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Cp=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${L("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${L("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${L("uniforms.x_shape",a,t)})) {
                  k -= i32(${L("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${L("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},zp=(e,t,r)=>{switch(r.mode){case 0:return Ep(e,t,r.pads.length);case 1:return kp(e,t,r.pads.length);case 2:return Ip(e,t,r.pads.length);case 3:return Cp(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Ap=(e,t)=>{let r=N.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=N.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...I(e[0].dims,r));let o=["rank"],u=l=>{let d=ne("output",e[0].dataType,r.length),p=O("x",e[0].dataType,i.length),h=p.type.value,f=zp(d,i.length,t),m=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&m.push({name:"constant_value",type:s?h:"f32"}),`
            ${l.registerUniforms(m).declareVariables(p,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${f}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(N.size(r)/64)},programUniforms:n}),getShaderSource:u}},Op=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)n[Number(o[u])]=Number(r[u]),n[Number(o[u])+a]=Number(r[u+o.length])}else r.forEach((o,u)=>n[Number(u)]=Number(o));let s=[];return n.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},Rp=(e,t)=>{Tp(e.inputs);let r=Op(e.inputs,t);e.compute(Ap(e.inputs,r),{inputs:[0]})}}),en,Rs,Ms,Bs,Ds,Mp,Bp,Ps,Us,Dp,Pp,Ns,Up,Np,Ls,Lp,Vp,Fp,qp,Nf=S(()=>{gt(),Ee(),xe(),ce(),en=e=>{if(se.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Rs=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),u=n?t.dilations.slice():[],l=t.pads.slice();Hr.adjustPoolAttributes(r,a,s,o,u,l);let d=Hr.computePoolOutputShape(r,a,o,u,s,l,t.autoPad),p=Object.assign({},t);n?Object.assign(p,{kernelShape:s,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:s,strides:o,pads:l,cacheKey:t.cacheKey});let h=d.slice();return h.push(h.splice(1,1)[0]),[p,i?h:d]},Ms=(e,t)=>{let r=t.format==="NHWC",i=N.size(e),a=N.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],p=!!(l+d);n.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:d}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let f=t.kernelShape[t.kernelShape.length-2],m=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];h=!!(y+x),n.push({type:12,data:f},{type:12,data:m},{type:12,data:y},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,p,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=N.computeStrides(t.kernelShape);n.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,d)=>l+d);return[n,s,!!u,!1,!1]}},Bs=(e,t,r,i,a,n,s,o,u,l,d,p)=>{let h=a.format==="NHWC",f=t.type.value,m=ne("output",t.type.tensor,i);if(a.kernelShape.length<=2){let y="",x="",b="",w=r-(h?2:1);if(d?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let T=r-(h?3:2);p?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${T}] < 0 || xIndices[${T}] >= uniforms.x_shape[${T}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sh - uniforms.phStart + j;
                `,b=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var value = ${f}(${o});
              var pad = 0;
              ${x}
              ${y}
              ${b}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=a.kernelShape.length,x=a.pads.length,b="";return l?b=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:b=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(u).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${m.offsetToIndices("global_idx")};
              var xIndices = ${m.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${f}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${L("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${L("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${L("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${L("uniforms.pads","j - 2u",x)};
                  ${b}
              }
              ${s}

              output[global_idx] = value;
            }`}},Ds=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Mp=e=>`${Ds(e)};${e.countIncludePad}`,Bp=e=>`${Ds(e)};${e.storageOrder};${e.dilations}`,Ps=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Us=(e,t,r,i)=>{let[a,n]=Rs(t,i,r),s=O("x",t.dataType,t.dims.length),o=s.type.value,u="value += x_val;",l="";a.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[d,p,h,f,m]=Ms(n,a);d.push(...I(t.dims,n));let y=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${h};${f};${m}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(N.size(n)/64)},programUniforms:d}),getShaderSource:x=>Bs(x,s,t.dims.length,n.length,a,u,l,0,p,h,f,m)}},Dp=e=>{let t=e.count_include_pad!==0,r=Ps(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Mp(i)}},Pp=(e,t)=>{en(e.inputs),e.compute(Us("AveragePool",e.inputs[0],!1,t))},Ns={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Up=e=>{let t=e.format;return{format:t,...Ns,cacheKey:t}},Np=(e,t)=>{en(e.inputs),e.compute(Us("GlobalAveragePool",e.inputs[0],!0,t))},Ls=(e,t,r,i)=>{let[a,n]=Rs(t,i,r),s=`
      value = max(x_val, value);
    `,o="",u=O("x",t.dataType,t.dims.length),l=["rank"],[d,p,h,f,m]=Ms(n,a);return d.push(...I(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${h};${f};${m}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(N.size(n)/64)},programUniforms:d}),getShaderSource:y=>Bs(y,u,t.dims.length,n.length,a,s,o,t.dataType===10?-65504:-1e5,p,h,f,m)}},Lp=(e,t)=>{en(e.inputs),e.compute(Ls("MaxPool",e.inputs[0],!1,t))},Vp=e=>{let t=e.storage_order,r=e.dilations,i=Ps(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Bp(a)}},Fp=e=>{let t=e.format;return{format:t,...Ns,cacheKey:t}},qp=(e,t)=>{en(e.inputs),e.compute(Ls("GlobalMaxPool",e.inputs[0],!0,t))}}),Gp,Wp,jp,Hp,Lf=S(()=>{Ee(),xe(),v(),ce(),Gp=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Wp=(e,t)=>{let r=N.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,o=N.size(n),u=i===3||i===2,l=u?[Math.ceil(N.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,p=e.length>2?e[2]:void 0,h=p?u?[Math.ceil(N.size(p.dims)/4)]:p.dims:void 0,f=d.length===0||d.length===1&&d[0]===1,m=f===!1&&d.length===1,y=M(o),x=f&&(!u||y===4),b=x?y:1,w=x&&!u?y:1,T=O("input",u?12:i,l.length,w),$=O("scale",s,d.length),C=p?O("zero_point",u?12:i,h.length):void 0,D=ne("output",s,n.length,b),P=[T,$];C&&P.push(C);let H=[l,d];p&&H.push(h);let oe=[{type:12,data:o/b},{type:12,data:r},{type:12,data:t.blockSize},...I(...H,n)],fe=Pe=>{let Se=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Pe.registerUniforms(Se).declareVariables(...P,D)}
      ${Pe.mainStart()}
          ${Pe.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${D.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${T.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${b===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${T.getByOffset("global_idx")};`};

          // Set scale input
          ${f?`let scale_value= ${$.getByOffset("0")}`:m?`
            let scale_index = ${D.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${$.getByOffset("scale_index")};`:`
            var scale_indices: ${$.type.indices} = output_indices;
            let index = ${$.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${$.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${$.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?f?u?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:m?u?`
                let zero_point_index = ${D.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${D.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${$.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${u?a?"i32":"u32":T.type.value}(0);`};
      // Compute and write output
      ${D.setByOffset("global_idx",`${D.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:fe,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(o/b/64),y:1,z:1},programUniforms:oe})}},jp=(e,t)=>{Gp(e.inputs,t),e.compute(Wp(e.inputs,t))},Hp=e=>g({axis:e.axis,blockSize:e.blockSize})}),Kp,Zp,Xp,Vf=S(()=>{gt(),Ee(),ce(),Kp=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},Zp=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...I(n)],u=l=>{let d=ne("output",i,n.length),p=d.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${l.registerUniforms(h).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Xp=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),se.webgpu.validateInputContent&&Kp(t,r,i),e.compute(Zp(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Qp,Yp,Jp,ec,Ff=S(()=>{Ee(),xe(),v(),ce(),Qp=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,n=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${n}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${n}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${n}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${n}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Yp=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,n=1,s=Math.ceil(N.sizeToDimension(i,i.length-1)/n),o=i[i.length-1],u=N.sizeFromDimension(r,o),l=[{type:12,data:s},{type:12,data:o},{type:12,data:u},...I(e[1].dims,e[2].dims,a)],d=p=>{let h=O("indices",e[1].dataType,e[1].dims.length),f=O("updates",e[2].dataType,e[2].dims.length,n),m=t.reduction!=="none"&&t.reduction!==""?nt("output",e[0].dataType,a.length):ne("output",e[0].dataType,a.length,n);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,f,m)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Qp(t.reduction,"output[data_offset + i]","value",m.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:d}},Jp=e=>g({reduction:e.reduction}),ec=(e,t)=>{e.compute(Yp(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),tc,rc,ic,Vs,ac,nc,sc,oc,uc,lc,dc,pc,Fs,cc,hc,fc,mc,gc,wc,yc,qf=S(()=>{Ee(),xe(),v(),ce(),tc=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},rc=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},ic=(e,t,r,i,a,n)=>{let[s,o,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(d=>n.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(d=>i.push(d)),i.length!==0&&i.length!==l&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");tc(i,t),t.axes.length>0&&rc(i,t.axes,l).forEach((d,p)=>i[p]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>a.push(Number(d))),a.length!==0&&a.length!==l&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},Vs=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,ac=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Vs("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Vs("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",nc=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",sc=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},oc=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},uc=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},lc=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${L("uniforms.scales","i",i)};
        var roi_low = ${L("uniforms.roi","i",a)};
        var roi_hi = ${L("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${L("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${L("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,dc=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${L("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${L("uniforms.roi","i",n)};
          var roi_hi = ${L("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${L("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${L("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,pc=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${L("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Fs=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",cc=(e,t,r,i,a)=>{let[n,s,o,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${Fs(e,u,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${s}];
      var col:${l} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},hc=(e,t,r,i,a,n,s,o,u,l)=>{let d=r.length===2,[p,h]=d?[0,1]:[2,3],f=e.type.value,m=y=>{let x=y===p?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[y]},
        ${i[y]}, ${r[y]}, ${n[y]}, ${n[y]} + ${r.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${u};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${f} = originalIdx + ${f}(i);
          if (${x} < 0 || ${x} >= ${r[y]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${x} = max(0, min(${x}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${x})`)};
          data[i + 1] = ${y===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${m(p)};
    ${m(h)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},fc=(e,t,r,i,a)=>{let[n,s,o,u,l]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${Fs(e,l,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${s}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${u}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},mc=(e,t,r,i,a,n)=>{let s=e.dims,o=sc(n,t.axes,s.length),u=oc(s,i,a,t.axes),l=i.slice();i.length===0&&(l=s.map((w,T)=>w===0?1:u[T]/w),t.keepAspectRatioPolicy!=="stretch"&&(u=uc(s,l,t)));let d=ne("output",e.dataType,u.length),p=O("input",e.dataType,s.length),h=N.size(u),f=s.length===u.length&&s.every((w,T)=>w===u[T]),m=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,x=p.type.value,b=w=>`
      ${f?"":`
      ${ac(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${pc(p,s)};
              ${nc(t.nearestMode,r,x)};
              ${dc(p,d,s,u,l.length,o.length,m)};
              `;case"linear":return`
              ${lc(d,s,u,l.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${cc(p,d,s,m,y)}`;if(s.length===3||s.length===5)return`${fc(p,d,s,m,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${hc(p,d,s,u,l,o,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(p,d)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${f?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${a.length>0?a:""}|${o.length>0?o:""}|${f}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:l},{type:1,data:o},...I(s,u)]})}},gc=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},wc=(e,t)=>{let r=[],i=[],a=[],n=gc(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");ic(e.inputs,t,n,r,i,a),e.compute(mc(e.inputs[0],t,n,r,i,a),{inputs:[0]})},yc=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return g({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),bc,_c,vc,Gf=S(()=>{Ee(),xe(),ce(),bc=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},_c=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=N.size(n),o=n,u=s,l=n.slice(-1)[0],d=i?n.slice(0,-1).concat(1):[],p=!a&&e.length>3,h=e.length>4,f=i&&r>1,m=i&&r>2,y=r>3,x=64,b=M(l),w=[{type:12,data:u},{type:12,data:b},{type:12,data:l},{type:1,data:t.epsilon}],T=C=>{let D=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],P=[O("x",e[0].dataType,e[0].dims,b),O("skip",e[1].dataType,e[1].dims,b),O("gamma",e[2].dataType,e[2].dims,b)];p&&P.push(O("beta",e[3].dataType,e[3].dims,b)),h&&P.push(O("bias",e[4].dataType,e[4].dims,b)),P.push(ne("output",e[0].dataType,o,b)),f&&P.push(ne("mean_output",1,d)),m&&P.push(ne("inv_std_output",1,d)),y&&P.push(ne("input_skip_bias_sum",e[0].dataType,o,b));let H=B(e[0].dataType),oe=B(1,b);return`

      ${C.registerUniforms(D).declareVariables(...P)}
      var<workgroup> sum_shared : array<${oe}, ${x}>;
      var<workgroup> sum_squared_shared : array<${oe}, ${x}>;

      ${C.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":H+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${te(H,b,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${j("sum",b)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${j("square_sum",b)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${f?"mean_output[global_idx] = mean;":""}
        ${m?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${H}(mean)`}) *
            ${H}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},$=[{dims:o,dataType:e[0].dataType}];return r>1&&$.push({dims:d,dataType:1}),r>2&&$.push({dims:d,dataType:1}),r>3&&$.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${b};${f};${m};${y}`,inputDependencies:e.map((C,D)=>"type")},getShaderSource:T,getRunData:()=>({outputs:$,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:w})}},vc=(e,t)=>{bc(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(_c(e.inputs,t,e.outputCount,!1),{outputs:r})}}),$c,tn,xc,qs,Sc,Tc,Ec,kc,Wf=S(()=>{Ee(),xe(),v(),ce(),$c=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},tn=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},xc=(e,t)=>{if(e.length>1){let r=tn(e,1),i=tn(e,2),a=tn(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),g({starts:r,ends:i,axes:a})}else return t},qs=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},Sc=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${L("uniforms.input_shape","i",r.length)};
            let steps_i = ${L("uniforms.steps","i",r.length)};
            let signs_i = ${L("uniforms.signs","i",r.length)};
            let starts_i = ${L("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Tc=(e,t)=>{let r=e[0].dims,i=N.size(r),a=t.axes.length>0?N.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=tn(e,4);n.forEach(b=>b!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((b,w)=>qs(b,w,r,a,n)),o=t.ends.map((b,w)=>qs(b,w,r,a,n));if(a.length!==s.length||a.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let b=0;b<r.length;++b)a.includes(b)||(s.splice(b,0,0),o.splice(b,0,r[b]),n.splice(b,0,1));let u=n.map(b=>Math.sign(b));n.forEach((b,w,T)=>{if(b<0){let $=(o[w]-s[w])/b,C=s[w],D=C+$*n[w];s[w]=D,o[w]=C,T[w]=-b}});let l=r.slice(0);a.forEach((b,w)=>{l[b]=Math.ceil((o[b]-s[b])/n[b])});let d={dims:l,dataType:e[0].dataType},p=ne("output",e[0].dataType,l.length),h=O("input",e[0].dataType,e[0].dims.length),f=N.size(l),m=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:n.length}],y=[{type:12,data:f},{type:12,data:s},{type:6,data:u},{type:12,data:n},...I(e[0].dims,l)],x=b=>`
      ${b.registerUniforms(m).declareVariables(h,p)}
        ${Sc(h,p,r)}
        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},Ec=(e,t)=>{$c(e.inputs,t);let r=xc(e.inputs,t);e.compute(Tc(e.inputs,r),{inputs:[0]})},kc=e=>{let t=e.starts,r=e.ends,i=e.axes;return g({starts:t,ends:r,axes:i})}}),Ic,Cc,zc,Ac,jf=S(()=>{Ee(),xe(),v(),De(),ce(),Ic=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Cc=(e,t)=>{let r=e.inputs[0],i=r.dims,a=N.size(i),n=i.length,s=N.normalizeAxis(t.axis,n),o=s<i.length-1,u,l=[];o?(l=Array.from({length:n},(P,H)=>H),l[s]=n-1,l[n-1]=s,u=e.compute(ct(r,l),{inputs:[r],outputs:[-1]})[0]):u=r;let d=u.dims,p=d[n-1],h=a/p,f=M(p),m=p/f,y=64;h===1&&(y=256);let x=(P,H)=>H===4?`max(max(${P}.x, ${P}.y), max(${P}.z, ${P}.w))`:H===2?`max(${P}.x, ${P}.y)`:H===3?`max(max(${P}.x, ${P}.y), ${P}.z)`:P,b=O("x",u.dataType,u.dims,f),w=ne("result",u.dataType,u.dims,f),T=b.type.value,$=B(u.dataType)==="f32"?`var threadMax = ${T}(-3.4028234663852886e+38f);`:`var threadMax = ${T}(-65504.0h);`,C=P=>`
      var<workgroup> rowMaxShared : ${T};
      var<workgroup> rowSumShared : ${T};
      var<workgroup> threadShared : array<${T}, ${y}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${T} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${T}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${P.registerUniform("packedCols","i32").declareVariables(b,w)}
      ${P.mainStart(y)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${y};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${$}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${T}(${x("threadShared[0]",f)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${T}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${T}(${j("threadShared[0]",f)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${T}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,D=e.compute({name:"Softmax",shaderCache:{hint:`${f};${y}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:m}]}),getShaderSource:C},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(ct(D,l),{inputs:[D]})},zc=(e,t)=>{Ic(e.inputs),Cc(e,t)},Ac=e=>g({axis:e.axis})}),Gs,Oc,Rc,Mc,Bc,Hf=S(()=>{Ee(),xe(),ce(),Gs=e=>Array.from(e.getBigInt64Array(),Number),Oc=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Gs(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Rc=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Mc=(e,t)=>{let r=e[0].dims,i=t??Gs(e[1]),a=Rc(r,i),n=N.size(a),s=e[0].dataType,o=O("input",s,r.length),u=ne("output",s,a.length),l=d=>`
      const inputShape = ${o.indices(...r)};
      ${d.registerUniform("output_size","u32").declareVariables(o,u)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...I(e[0].dims,a)]}),getShaderSource:l}},Bc=e=>{Oc(e.inputs),e.compute(Mc(e.inputs),{inputs:[0]})}}),Dc,Pc,Uc,Kf=S(()=>{Ee(),xe(),ce(),Dc=(e,t,r,i,a)=>{let n=ne("output_data",a,r.length,4),s=O("a_data",t[1].dataType,t[1].dims.length,4),o=O("b_data",t[2].dataType,t[2].dims.length,4),u=O("c_data",t[0].dataType,t[0].dims.length,4),l,d=(p,h,f)=>`select(${h}, ${p}, ${f})`;if(!i)l=n.setByOffset("global_idx",d(s.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(h,f,m="")=>{let y=`a_data[index_a${f}][component_a${f}]`,x=`b_data[index_b${f}][component_b${f}]`,b=`bool(c_data[index_c${f}] & (0xffu << (component_c${f} * 8)))`;return`
            let output_indices${f} = ${n.offsetToIndices(`global_idx * 4u + ${f}u`)};
            let offset_a${f} = ${s.broadcastedIndicesToOffset(`output_indices${f}`,n)};
            let offset_b${f} = ${o.broadcastedIndicesToOffset(`output_indices${f}`,n)};
            let offset_c${f} = ${u.broadcastedIndicesToOffset(`output_indices${f}`,n)};
            let index_a${f} = offset_a${f} / 4u;
            let index_b${f} = offset_b${f} / 4u;
            let index_c${f} = offset_c${f} / 4u;
            let component_a${f} = offset_a${f} % 4u;
            let component_b${f} = offset_b${f} % 4u;
            let component_c${f} = offset_c${f} % 4u;
            ${h}[${f}] = ${m}(${d(y,x,b)});
          `};a===9?l=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,o,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},Pc=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(N.areEqual(t,r)&&N.areEqual(r,i)),s=t,o=N.size(t);if(n){let l=Sr.calcShape(Sr.calcShape(t,r,!1),i,!1);if(!l)throw new Error("Can't perform where op on the given tensors");s=l,o=N.size(s)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>Dc(l,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...I(i,t,r,s)]})}},Uc=e=>{e.compute(Pc(e.inputs))}}),Nc,Zf=S(()=>{lf(),ss(),df(),pf(),cf(),hf(),ff(),bf(),vf(),$f(),xf(),Sf(),Tf(),Ef(),kf(),If(),Cf(),zf(),Af(),Of(),Rf(),Mf(),Bf(),Df(),Pf(),Qd(),Uf(),Nf(),Lf(),Vf(),Ff(),is(),qf(),op(),Gf(),Wf(),jf(),ap(),Hf(),De(),ds(),Kf(),Nc=new Map([["Abs",[bu]],["Acos",[_u]],["Acosh",[vu]],["Add",[ul]],["ArgMax",[au,ns]],["ArgMin",[iu,ns]],["Asin",[$u]],["Asinh",[xu]],["Atan",[Su]],["Atanh",[Tu]],["Attention",[du]],["AveragePool",[Pp,Dp]],["BatchNormalization",[fu]],["BiasAdd",[wu]],["BiasSplitGelu",[nl]],["Cast",[ku,Eu]],["Ceil",[zu]],["Clip",[Cu]],["Concat",[$l,xl]],["Conv",[xs,vs]],["ConvTranspose",[Xl,Hl]],["Cos",[Au]],["Cosh",[Ou]],["CumSum",[Yl,Jl]],["DepthToSpace",[id,ad]],["DequantizeLinear",[jp,Hp]],["Div",[ll]],["Einsum",[dd,pd]],["Elu",[Ru,Za]],["Equal",[dl]],["Erf",[Mu]],["Exp",[Bu]],["Expand",[md]],["FastGelu",[wd]],["Floor",[Du]],["FusedConv",[xs,vs]],["Gather",[vd,_d]],["GatherElements",[Od,Ad]],["GatherBlockQuantized",[kd,Id]],["GatherND",[xd,Sd]],["Gelu",[Pu]],["Gemm",[Dd,Bd]],["GlobalAveragePool",[Np,Up]],["GlobalMaxPool",[qp,Fp]],["Greater",[fl]],["GreaterOrEqual",[gl]],["GridSample",[Wd,jd]],["GroupQueryAttention",[pp]],["HardSigmoid",[Wu,Gu]],["InstanceNormalization",[fp]],["LayerNormalization",[wp]],["LeakyRelu",[Uu,Za]],["Less",[ml]],["LessOrEqual",[wl]],["Log",[Ju]],["MatMul",[bp]],["MatMulNBits",[xp,Sp]],["MaxPool",[Lp,Vp]],["Mul",[pl]],["MultiHeadAttention",[Xd,Kd]],["Neg",[Lu]],["Not",[Nu]],["Pad",[Rp]],["Pow",[cl]],["QuickGelu",[rl,Za]],["Range",[Xp]],["Reciprocal",[Vu]],["ReduceMin",[Yo]],["ReduceMean",[Ho]],["ReduceMax",[Qo]],["ReduceSum",[eu]],["ReduceProd",[Jo]],["ReduceL1",[Ko]],["ReduceL2",[Zo]],["ReduceLogSum",[ru]],["ReduceLogSumExp",[Xo]],["ReduceSumSquare",[tu]],["Relu",[Fu]],["Resize",[wc,yc]],["RotaryEmbedding",[sp]],["ScatterND",[ec,Jp]],["Sigmoid",[qu]],["Sin",[ju]],["Sinh",[Hu]],["Slice",[Ec,kc]],["SkipLayerNormalization",[vc]],["Split",[rp,ip]],["Sqrt",[Ku]],["Softmax",[zc,Ac]],["Sub",[hl]],["Tan",[Zu]],["Tanh",[Xu]],["ThresholdedRelu",[Yu,Za]],["Tile",[Bc]],["Transpose",[nr,ja]],["Where",[Uc]]])}),Lc,Xf=S(()=>{gt(),tr(),ce(),Lc=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){dt(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of r)o.push({binding:o.length,resource:{buffer:l.buffer}});a&&o.push({binding:o.length,resource:a});let u=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),pt(e.programInfo.name)}dispose(){}build(e,t){dt(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(l=>{r.features.has(l.feature)&&i.push(`enable ${l.extension};`)});let a=Be(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,o=r.createShaderModule({code:s,label:e.name});Le("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return pt(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Vc={};W(Vc,{WebGpuBackend:()=>Wc});var Fc,qc,Gc,Wc,Qf=S(()=>{gt(),Ee(),tr(),Kr(),ts(),Zf(),Xf(),Fc=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},qc=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Fc(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},Gc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Wc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=o=>t.features.has(o)&&r.push(o)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups"),this.device=await t.requestDevice(i);let n=t,s=t.info??(typeof n.requestAdapterInfo=="function"?await n.requestAdapterInfo():void 0);this.adapterInfo=new Gc(s),this.gpuDataManager=xn(this),this.programManager=new Lc(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ji(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;dt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),o=s.kernelType,u=s.kernelName,l=a.programName,d=a.inputTensorViews,p=a.outputTensorViews,h=t[i*2],f=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let m=Number(h-this.queryTimeBase),y=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(m)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:d.map(x=>({dims:x.dims,dataType:jt(x.dataType)})),outputsMetadata:p.map(x=>({dims:x.dims,dataType:jt(x.dataType)})),kernelId:n,kernelType:o,kernelName:u,programName:l,startTime:m,endTime:y});else{let x="";d.forEach((w,T)=>{x+=`input[${T}]: [${w.dims}] | ${jt(w.dataType)}, `});let b="";p.forEach((w,T)=>{b+=`output[${T}]: [${w.dims}] | ${jt(w.dataType)}, `}),console.log(`[profiling] kernel "${n}|${o}|${u}|${l}" ${x}${b}start time: ${m} ns, execution time: ${y-m} ns`)}Ye("GPU",`${l}::${h}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),pt()}run(e,t,r,i,a,n){dt(e.name);let s=[];for(let w=0;w<t.length;++w){let T=t[w].data;if(T===0)continue;let $=this.gpuDataManager.get(T);if(!$)throw new Error(`no GPU data for input: ${T}`);s.push($)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=r.length===0?o.map((w,T)=>T):r;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);let p=[],h=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(d[w])||d[w]<-3||d[w]>=n)throw new Error(`Invalid output index: ${d[w]}`);if(d[w]===-3)continue;let T=d[w]===-1,$=d[w]===-2,C=T||$?a(o[w].dataType,o[w].dims):i(d[w],o[w].dataType,o[w].dims);if(p.push(C),C.data===0)continue;let D=this.gpuDataManager.get(C.data);if(!D)throw new Error(`no GPU data for output: ${C.data}`);if(T&&this.temporaryData.push(D),$){let P=this.kernelPersistentData.get(this.currentKernelId);P||(P=[],this.kernelPersistentData.set(this.currentKernelId,P)),P.push(D)}h.push(D)}if(s.length!==t.length||h.length!==p.length){if(h.length===0)return pt(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let f;if(l){let w=0,T=[];l.forEach(P=>{let H=typeof P.data=="number"?[P.data]:P.data;if(H.length===0)return;let oe=P.type===10?2:4,fe,Pe;P.type===10?(Pe=H.length>4?16:H.length>2?8:H.length*oe,fe=H.length>4?16:oe*H.length):(Pe=H.length<=2?H.length*oe:16,fe=16),w=Math.ceil(w/Pe)*Pe,T.push(w);let Se=P.type===10?8:4;w+=H.length>4?Math.ceil(H.length/Se)*fe:H.length*oe});let $=16;w=Math.ceil(w/$)*$;let C=new ArrayBuffer(w);l.forEach((P,H)=>{let oe=T[H],fe=typeof P.data=="number"?[P.data]:P.data;if(P.type===6)new Int32Array(C,oe,fe.length).set(fe);else if(P.type===12)new Uint32Array(C,oe,fe.length).set(fe);else if(P.type===10)new Uint16Array(C,oe,fe.length).set(fe);else if(P.type===1)new Float32Array(C,oe,fe.length).set(fe);else throw new Error(`Unsupported uniform type: ${jt(P.type)}`)});let D=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(D.buffer,0,C,0,w),this.gpuDataManager.release(D.id),f={offset:0,size:w,buffer:D.buffer}}let m=this.programManager.normalizeDispatchGroupSize(u),y=m[1]===1&&m[2]===1,x=qc(e,t,y),b=this.programManager.getArtifact(x);if(b||(b=this.programManager.build(e,m),this.programManager.setArtifact(x,b),Le("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),l&&b.uniformVariablesInfo){if(l.length!==b.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${b.uniformVariablesInfo.length}, got ${l.length} in program "${b.programInfo.name}".`);for(let w=0;w<l.length;w++){let T=l[w],$=T.type,C=typeof T.data=="number"?1:T.data.length,[D,P]=b.uniformVariablesInfo[w];if($!==D||C!==P)throw new Error(`Uniform variable ${w} mismatch: expect type ${D} with size ${P}, got type ${$} with size ${C} in program "${b.programInfo.name}".`)}}if(Le("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:b.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(b,s,h,m,f),pt(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Nc.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Le("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(l){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${l}`)),1}finally{u&&r.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${a}] ${n}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await qa(this,e,t);return Tr(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Le("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Le("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Le("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),jc={};W(jc,{init:()=>Kc});var Dn,Hc,Kc,Yf=S(()=>{Ee(),tr(),xe(),Fa(),Dn=class af{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=N.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(N.size(t)!==N.size(this.dims))throw new Error("Invalid new shape");return new af(this.module,this.dataType,this.data,t)}},Hc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,n=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,n));let s=Number(e.getValue(i*a++,n));this.outputCount=Number(e.getValue(i*a++,n)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,n));let o=[];for(let u=0;u<s;u++){let l=Number(e.getValue(i*a++,n)),d=Number(e.getValue(i*a++,"*")),p=Number(e.getValue(i*a++,n)),h=[];for(let f=0;f<p;f++)h.push(Number(e.getValue(i*a++,n)));o.push(new Dn(e,l,d,h))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,o,u)=>new Dn(this.module,o,this.output(s,u),u),n=(s,o)=>{let u=Ht(s,o);if(!u)throw new Error(`Unsupported data type: ${s}`);let l=u>0?this.backend.gpuDataManager.create(u).id:0;return new Dn(this.module,s,l,o)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",n=this.module.stackAlloc((1+t.length)*i);this.module.setValue(n,t.length,a);for(let s=0;s<t.length;s++)this.module.setValue(n+i*(s+1),t[s],a);return this.module._JsepOutput(this.opKernelContext,e,n)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Kc=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=(Qf(),pe(Vc)).WebGpuBackend,s=new n;await s.initialize(r,i),a("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,u,l,d=!1)=>{if(d)Le("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(u)}, size=${Number(l)}`),s.memcpy(Number(o),Number(u));else{Le("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(u)}, size=${Number(l)}`);let p=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(l));s.upload(Number(u),p)}},async(o,u,l)=>{Le("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${u}, size=${l}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+l)>>>0))},(o,u,l)=>s.createKernel(o,Number(u),l,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),o=>s.releaseKernel(o),(o,u,l,d)=>{Le("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${l}, kernel=${o}, contextDataOffset=${u}`);let p=new Hc(t,s,Number(u));return s.computeKernel(Number(o),p,d)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let n=new Va(r);a("webnn",[n,()=>n.reserveTensorId(),s=>n.releaseTensorId(s),async(s,o,u,l,d)=>n.ensureTensor(s,o,u,l,d),(s,o)=>{n.uploadTensor(s,o)},async(s,o)=>n.downloadTensor(s,o),(s,o)=>n.registerMLContext(s,o),!!r.trace])}}}),Zc,Ws,js,Jr,Xc,Hs,Pn,Ks,Zs,Xs,Qs,Ys,Js,Qc=S(()=>{gt(),Jn(),es(),Ee(),Gt(),wi(),Ba(),Zc=(e,t)=>{ze()._OrtInit(e,t)!==0&&$e("Can't initialize onnxruntime.")},Ws=async e=>{Zc(e.wasm.numThreads,bi(e.logLevel))},js=async(e,t)=>{ze().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(Yf(),pe(jc)).init;t==="webgpu"&&await i("webgpu",ze(),e,r),t==="webnn"&&await i("webnn",ze(),e)}},Jr=new Map,Xc=e=>{let t=ze(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&$e("Can't get session input/output count.");let n=i===4?"i32":"i64";return[Number(t.getValue(a,n)),Number(t.getValue(a+i,n))]}finally{t.stackRestore(r)}},Hs=(e,t)=>{let r=ze(),i=r.stackSave(),a=0;try{let n=r.PTR_SIZE,s=r.stackAlloc(2*n);r._OrtGetInputOutputMetadata(e,t,s,s+n)!==0&&$e("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));a=Number(r.getValue(s+n,"*"));let u=r.HEAP32[a/4];if(u===0)return[o,0];let l=r.HEAPU32[a/4+1],d=[];for(let p=0;p<l;p++){let h=Number(r.getValue(a+8+p*n,"*"));d.push(h!==0?r.UTF8ToString(h):Number(r.getValue(a+8+(p+l)*n,"*")))}return[o,u,d]}finally{r.stackRestore(i),a!==0&&r._OrtFree(a)}},Pn=e=>{let t=ze(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Ks=async(e,t)=>{let r,i,a=ze();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Pn(e);let n=0,s=0,o=0,u=[],l=[],d=[];try{if([s,u]=await Ma(t),t?.externalData&&a.mountExternalData){let $=[];for(let C of t.externalData){let D=typeof C=="string"?C:C.path;$.push($i(typeof C=="string"?C:C.data).then(P=>{a.mountExternalData(D,P)}))}await Promise.all($)}for(let $ of t?.executionProviders??[])if((typeof $=="string"?$:$.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof $!="string"){let C=$,D=C?.context,P=C?.gpuDevice,H=C?.deviceType,oe=C?.powerPreference;D?a.currentContext=D:P?a.currentContext=await a.webnnCreateMLContext(P):a.currentContext=await a.webnnCreateMLContext({deviceType:H,powerPreference:oe})}else a.currentContext=await a.webnnCreateMLContext();break}n=await a._OrtCreateSession(r,i,s),a.webgpuOnCreateSession?.(n),n===0&&$e("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(n,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[p,h]=Xc(n),f=!!t?.enableGraphCapture,m=[],y=[],x=[],b=[],w=[];for(let $=0;$<p;$++){let[C,D,P]=Hs(n,$);C===0&&$e("Can't get an input name."),l.push(C);let H=a.UTF8ToString(C);m.push(H),x.push(D===0?{name:H,isTensor:!1}:{name:H,isTensor:!0,type:jt(D),shape:P})}for(let $=0;$<h;$++){let[C,D,P]=Hs(n,$+p);C===0&&$e("Can't get an output name."),d.push(C);let H=a.UTF8ToString(C);y.push(H),b.push(D===0?{name:H,isTensor:!1}:{name:H,isTensor:!0,type:jt(D),shape:P});{if(f&&t?.preferredOutputLocation===void 0){w.push("gpu-buffer");continue}let oe=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[H]??"cpu",fe=a.webnnIsGraphOutput;if(oe==="cpu"&&fe&&fe(n,H)){w.push("ml-tensor-cpu-output");continue}if(oe!=="cpu"&&oe!=="cpu-pinned"&&oe!=="gpu-buffer"&&oe!=="ml-tensor")throw new Error(`Not supported preferred output location: ${oe}.`);if(f&&oe!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${oe}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);w.push(oe)}}let T=null;return w.some($=>$==="gpu-buffer"||$==="ml-tensor"||$==="ml-tensor-cpu-output")&&(o=a._OrtCreateBinding(n),o===0&&$e("Can't create IO binding."),T={handle:o,outputPreferredLocations:w,outputPreferredLocationsEncoded:w.map($=>$==="ml-tensor-cpu-output"?"ml-tensor":$).map($=>qi($))}),Jr.set(n,[n,l,d,T,f,!1]),[n,m,y,x,b]}catch(p){throw l.forEach(h=>a._OrtFree(h)),d.forEach(h=>a._OrtFree(h)),o!==0&&a._OrtReleaseBinding(o)!==0&&$e("Can't release IO binding."),n!==0&&a._OrtReleaseSession(n)!==0&&$e("Can't release session."),p}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s)!==0&&$e("Can't release session options."),u.forEach(p=>a._free(p)),a.unmountExternalData?.()}},Zs=e=>{let t=ze(),r=Jr.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&$e("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&$e("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(u=>t._OrtFree(u)),n.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(i)!==0&&$e("Can't release session."),Jr.delete(e)},Xs=async(e,t,r,i,a,n,s=!1)=>{if(!e){t.push(0);return}let o=ze(),u=o.PTR_SIZE,l=e[0],d=e[1],p=e[3],h=p,f,m;if(l==="string"&&(p==="gpu-buffer"||p==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let b=e[2].gpuBuffer;m=Ht(Wt(l),d);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');f=w(i,n,b,m)}}else if(p==="ml-tensor"){let b=e[2].mlTensor;m=Ht(Wt(l),d);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');f=w(i,b,Wt(l),d)}else{let b=e[2];if(Array.isArray(b)){m=u*b.length,f=o._malloc(m),r.push(f);for(let w=0;w<b.length;w++){if(typeof b[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(f+w*u,mt(b[w],r),"*")}}else{let w=o.webnnIsGraphInput,T=o.webnnIsGraphOutput;if(l!=="string"&&w&&T){let $=o.UTF8ToString(a);if(w(i,$)||T(i,$)){let C=Wt(l);m=Ht(C,d),h="ml-tensor";let D=o.webnnCreateTemporaryTensor,P=o.webnnUploadTensor;if(!D||!P)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let H=await D(i,C,d);P(H,new Uint8Array(b.buffer,b.byteOffset,b.byteLength)),f=H}else m=b.byteLength,f=o._malloc(m),r.push(f),o.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}else m=b.byteLength,f=o._malloc(m),r.push(f),o.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,m),f)}}let y=o.stackSave(),x=o.stackAlloc(4*d.length);try{d.forEach((w,T)=>o.setValue(x+T*u,w,u===4?"i32":"i64"));let b=o._OrtCreateTensor(Wt(l),f,m,x,d.length,qi(h));b===0&&$e(`Can't create tensor for input/output. session=${i}, index=${n}.`),t.push(b)}finally{o.stackRestore(y)}},Qs=async(e,t,r,i,a,n)=>{let s=ze(),o=s.PTR_SIZE,u=Jr.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],p=u[2],h=u[3],f=u[4],m=u[5],y=t.length,x=i.length,b=0,w=[],T=[],$=[],C=[],D=[],P=s.stackSave(),H=s.stackAlloc(y*o),oe=s.stackAlloc(y*o),fe=s.stackAlloc(x*o),Pe=s.stackAlloc(x*o);try{[b,w]=Ca(n),ot("wasm prepareInputOutputTensor");for(let de=0;de<y;de++)await Xs(r[de],T,C,e,d[t[de]],t[de],f);for(let de=0;de<x;de++)await Xs(a[de],$,C,e,p[i[de]],y+i[de],f);ut("wasm prepareInputOutputTensor");for(let de=0;de<y;de++)s.setValue(H+de*o,T[de],"*"),s.setValue(oe+de*o,d[t[de]],"*");for(let de=0;de<x;de++)s.setValue(fe+de*o,$[de],"*"),s.setValue(Pe+de*o,p[i[de]],"*");if(h&&!m){let{handle:de,outputPreferredLocations:be,outputPreferredLocationsEncoded:Re}=h;if(d.length!==y)throw new Error(`input count from feeds (${y}) is expected to be always equal to model's input count (${d.length}).`);ot("wasm bindInputsOutputs");for(let Ne=0;Ne<y;Ne++){let Oe=t[Ne];await s._OrtBindInput(de,d[Oe],T[Ne])!==0&&$e(`Can't bind input[${Ne}] for session=${e}.`)}for(let Ne=0;Ne<x;Ne++){let Oe=i[Ne];a[Ne]?.[3]?(D.push($[Ne]),s._OrtBindOutput(de,p[Oe],$[Ne],0)!==0&&$e(`Can't bind pre-allocated output[${Ne}] for session=${e}.`)):s._OrtBindOutput(de,p[Oe],0,Re[Oe])!==0&&$e(`Can't bind output[${Ne}] to ${be[Ne]} for session=${e}.`)}ut("wasm bindInputsOutputs"),Jr.set(e,[l,d,p,h,f,!0])}s.jsepOnRunStart?.(l),s.webnnOnRunStart?.(l);let Se;h?Se=await s._OrtRunWithBinding(l,h.handle,x,fe,b):Se=await s._OrtRun(l,oe,H,y,Pe,x,fe,b),Se!==0&&$e("failed to call OrtRun().");let ke=[],He=[];ot("wasm ProcessOutputTensor");for(let de=0;de<x;de++){let be=Number(s.getValue(fe+de*o,"*"));if(be===$[de]||D.includes($[de])){ke.push(a[de]),be!==$[de]&&s._OrtReleaseTensor(be)!==0&&$e("Can't release tensor.");continue}let Re=s.stackSave(),Ne=s.stackAlloc(4*o),Oe=!1,Ve,ie=0;try{s._OrtGetTensorData(be,Ne,Ne+o,Ne+2*o,Ne+3*o)!==0&&$e(`Can't access output tensor data on index ${de}.`);let Ae=o===4?"i32":"i64",Te=Number(s.getValue(Ne,Ae));ie=s.getValue(Ne+o,"*");let ye=s.getValue(Ne+o*2,"*"),Ot=Number(s.getValue(Ne+o*3,Ae)),Kt=[];for(let tt=0;tt<Ot;tt++)Kt.push(Number(s.getValue(ye+tt*o,Ae)));s._OrtFree(ye)!==0&&$e("Can't free memory for tensor dims.");let bt=Kt.reduce((tt,_t)=>tt*_t,1);Ve=jt(Te);let Zt=h?.outputPreferredLocations[i[de]];if(Ve==="string"){if(Zt==="gpu-buffer"||Zt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let tt=[];for(let _t=0;_t<bt;_t++){let Pr=s.getValue(ie+_t*o,"*"),im=s.getValue(ie+(_t+1)*o,"*"),am=_t===bt-1?void 0:im-Pr;tt.push(s.UTF8ToString(Pr,am))}ke.push([Ve,Kt,tt,"cpu"])}else if(Zt==="gpu-buffer"&&bt>0){let tt=s.jsepGetBuffer;if(!tt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let _t=tt(ie),Pr=Ht(Te,bt);if(Pr===void 0||!_i(Ve))throw new Error(`Unsupported data type: ${Ve}`);Oe=!0,ke.push([Ve,Kt,{gpuBuffer:_t,download:s.jsepCreateDownloader(_t,Pr,Ve),dispose:()=>{s._OrtReleaseTensor(be)!==0&&$e("Can't release tensor.")}},"gpu-buffer"])}else if(Zt==="ml-tensor"&&bt>0){let tt=s.webnnEnsureTensor,_t=s.webnnIsGraphInputOutputTypeSupported;if(!tt||!_t)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ht(Te,bt)===void 0||!vi(Ve))throw new Error(`Unsupported data type: ${Ve}`);if(!_t(e,Ve,!1))throw new Error(`preferredLocation "ml-tensor" for ${Ve} output is not supported by current WebNN Context.`);let Pr=await tt(e,ie,Te,Kt,!1);Oe=!0,ke.push([Ve,Kt,{mlTensor:Pr,download:s.webnnCreateMLTensorDownloader(ie,Ve),dispose:()=>{s.webnnReleaseTensorId(ie),s._OrtReleaseTensor(be)}},"ml-tensor"])}else if(Zt==="ml-tensor-cpu-output"&&bt>0){let tt=s.webnnCreateMLTensorDownloader(ie,Ve)(),_t=ke.length;Oe=!0,He.push((async()=>{let Pr=[_t,await tt];return s.webnnReleaseTensorId(ie),s._OrtReleaseTensor(be),Pr})()),ke.push([Ve,Kt,[],"cpu"])}else{let tt=yi(Ve),_t=new tt(bt);new Uint8Array(_t.buffer,_t.byteOffset,_t.byteLength).set(s.HEAPU8.subarray(ie,ie+_t.byteLength)),ke.push([Ve,Kt,_t,"cpu"])}}finally{s.stackRestore(Re),Ve==="string"&&ie&&s._free(ie),Oe||s._OrtReleaseTensor(be)}}h&&!f&&(s._OrtClearBoundOutputs(h.handle)!==0&&$e("Can't clear bound outputs."),Jr.set(e,[l,d,p,h,f,!1]));for(let[de,be]of await Promise.all(He))ke[de][2]=be;return ut("wasm ProcessOutputTensor"),ke}finally{s.webnnOnRunEnd?.(l),s.stackRestore(P),T.forEach(Se=>s._OrtReleaseTensor(Se)),$.forEach(Se=>s._OrtReleaseTensor(Se)),C.forEach(Se=>s._free(Se)),b!==0&&s._OrtReleaseRunOptions(b),w.forEach(Se=>s._free(Se))}},Ys=e=>{let t=ze(),r=Jr.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&$e("Can't get an profile file name."),t._OrtFree(a)},Js=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),ei,or,oa,rn,an,Un,eo,Nn,Mi,Bi,Yc,Jc,eh,th,rh,ih,ah,nh,sh=S(()=>{gt(),Qc(),Gt(),hi(),ei=()=>!!se.wasm.proxy&&typeof document<"u",oa=!1,rn=!1,an=!1,Nn=new Map,Mi=(e,t)=>{let r=Nn.get(e);r?r.push(t):Nn.set(e,[t])},Bi=()=>{if(oa||!rn||an||!or)throw new Error("worker not ready")},Yc=e=>{switch(e.data.type){case"init-wasm":oa=!1,e.data.err?(an=!0,eo[1](e.data.err)):(rn=!0,eo[0]()),Un&&(URL.revokeObjectURL(Un),Un=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Nn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Jc=async()=>{if(!rn){if(oa)throw new Error("multiple calls to 'initWasm()' detected.");if(an)throw new Error("previous call to 'initWasm()' failed.");if(oa=!0,ei())return new Promise((e,t)=>{or?.terminate(),Sa().then(([r,i])=>{try{or=i,or.onerror=n=>t(n),or.onmessage=Yc,eo=[e,t];let a={type:"init-wasm",in:se};if(!a.in.wasm.wasmPaths&&r){let n=li();n&&(a.in.wasm.wasmPaths=n)}or.postMessage(a),Un=r}catch(a){t(a)}},t)});try{await gi(se.wasm),await Ws(se),rn=!0}catch(e){throw an=!0,e}finally{oa=!1}}},eh=async e=>{if(ei())return Bi(),new Promise((t,r)=>{Mi("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:se}};or.postMessage(i)});await js(se,e)},th=async e=>ei()?(Bi(),new Promise((t,r)=>{Mi("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};or.postMessage(i,[e.buffer])})):Pn(e),rh=async(e,t)=>{if(ei()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Bi(),new Promise((r,i)=>{Mi("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),or.postMessage(a,n)})}else return Ks(e,t)},ih=async e=>{if(ei())return Bi(),new Promise((t,r)=>{Mi("release",[t,r]);let i={type:"release",in:e};or.postMessage(i)});Zs(e)},ah=async(e,t,r,i,a,n)=>{if(ei()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Bi(),new Promise((s,o)=>{Mi("run",[s,o]);let u=r,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:i,options:n}};or.postMessage(l,Js(u))})}else return Qs(e,t,r,i,a,n)},nh=async e=>{if(ei())return Bi(),new Promise((t,r)=>{Mi("end-profiling",[t,r]);let i={type:"end-profiling",in:e};or.postMessage(i)});Ys(e)}}),to,oh,uh,Jf=S(()=>{gt(),sh(),Ee(),si(),Ba(),to=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},oh=e=>{switch(e[3]){case"cpu":return new Xe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!_i(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Xe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!vi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Xe.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},uh=class{async fetchModelAndCopyToWasmMemory(e){return th(await $i(e))}async loadModel(e,t){dt();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await rh(r,t),pt()}async dispose(){return ih(this.sessionId)}async run(e,t,r){dt();let i=[],a=[];Object.entries(e).forEach(p=>{let h=p[0],f=p[1],m=this.inputNames.indexOf(h);if(m===-1)throw new Error(`invalid input '${h}'`);i.push(f),a.push(m)});let n=[],s=[];Object.entries(t).forEach(p=>{let h=p[0],f=p[1],m=this.outputNames.indexOf(h);if(m===-1)throw new Error(`invalid output '${h}'`);n.push(f),s.push(m)});let o=i.map((p,h)=>to(p,()=>`input "${this.inputNames[a[h]]}"`)),u=n.map((p,h)=>p?to(p,()=>`output "${this.outputNames[s[h]]}"`):null),l=await ah(this.sessionId,a,o,s,u,r),d={};for(let p=0;p<l.length;p++)d[this.outputNames[s[p]]]=n[p]??oh(l[p]);return pt(),d}startProfiling(){}endProfiling(){nh(this.sessionId)}}}),lh={};W(lh,{OnnxruntimeWebAssemblyBackend:()=>io,initializeFlags:()=>ro,wasmBackend:()=>dh});var ro,io,dh,em=S(()=>{gt(),sh(),Jf(),ro=()=>{(typeof se.wasm.initTimeout!="number"||se.wasm.initTimeout<0)&&(se.wasm.initTimeout=0);let e=se.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),se.wasm.simd=!1),typeof se.wasm.proxy!="boolean"&&(se.wasm.proxy=!1),typeof se.wasm.trace!="boolean"&&(se.wasm.trace=!1),typeof se.wasm.numThreads!="number"||!Number.isInteger(se.wasm.numThreads)||se.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)se.wasm.numThreads=1;else{let t=typeof navigator>"u"?q("node:os").cpus().length:navigator.hardwareConcurrency;se.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},io=class{async init(e){ro(),await Jc(),await eh(e)}async createInferenceSessionHandler(e,t){let r=new uh;return await r.loadModel(e,t),r}},dh=new io}),ph={};W(ph,{InferenceSession:()=>Bt,TRACE:()=>Ye,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,default:()=>rm,env:()=>se,registerBackend:()=>ae}),gt(),gt(),gt();var tm="1.27.0",rm=jr;{let e=(em(),pe(lh)).wasmBackend;ae("webgpu",e,5),ae("webnn",e,5),ae("cpu",e,10),ae("wasm",e,10)}return Object.defineProperty(se.versions,"web",{value:tm,enumerable:!0}),pe(ph)})();_.exports=R})(go)),go.exports}var Ui={},wo={},Mh;function Vm(){return Mh||(Mh=1,Object.defineProperty(wo,"__esModule",{value:!0})),wo}var hn={},Bh;function Fm(){if(Bh)return hn;Bh=1;var _;Object.defineProperty(hn,"__esModule",{value:!0}),hn.SileroLegacy=void 0;const A=vn();class R{constructor(Q,Y,U,q,S){this.ortInstance=Q,this._session=Y,this._h=U,this._c=q,this._sr=S,this.reset_state=()=>{const W=Array(128).fill(0);this._h=new this.ortInstance.Tensor("float32",W,[2,1,64]),this._c=new this.ortInstance.Tensor("float32",W,[2,1,64])},this.process=async W=>{const pe={input:new this.ortInstance.Tensor("float32",W,[1,W.length]),h:this._h,c:this._c,sr:this._sr},ue=await this._session.run(pe);this._h=ue.hn,this._c=ue.cn;const[le]=ue.output?.data;return{notSpeech:1-le,isSpeech:le}}}}return hn.SileroLegacy=R,_=R,R.new=async(V,Q)=>{A.log.debug("initializing vad");const Y=await Q(),U=await V.InferenceSession.create(Y),q=new V.Tensor("int64",[16000n]),S=Array(128).fill(0),W=new V.Tensor("float32",S,[2,1,64]),F=new V.Tensor("float32",S,[2,1,64]);return A.log.debug("vad is initialized"),new _(V,U,W,F,q)},hn}var fn={},Dh;function qm(){if(Dh)return fn;Dh=1;var _;Object.defineProperty(fn,"__esModule",{value:!0}),fn.SileroV5=void 0;const A=vn();function R(Q){const Y=Array(256).fill(0);return new Q.Tensor("float32",Y,[2,1,128])}class V{constructor(Y,U,q,S){this._session=Y,this._state=U,this._sr=q,this.ortInstance=S,this.reset_state=()=>{this._state=R(this.ortInstance)},this.process=async W=>{const pe={input:new this.ortInstance.Tensor("float32",W,[1,W.length]),state:this._state,sr:this._sr},ue=await this._session.run(pe);if(!ue.stateN)throw new Error("No state from model");if(this._state=ue.stateN,!ue.output?.data)throw new Error("No output from model");const[le]=ue.output?.data;return{notSpeech:1-le,isSpeech:le}}}}return fn.SileroV5=V,_=V,V.new=async(Q,Y)=>{A.log.debug("Loading VAD...");const U=await Y(),q=await Q.InferenceSession.create(U),S=new Q.Tensor("int64",[16000n]),W=R(Q);return A.log.debug("...finished loading VAD"),new _(q,W,S,Q)},fn}var Ph;function nf(){return Ph||(Ph=1,(function(_){var A=Ui&&Ui.__createBinding||(Object.create?(function(Y,U,q,S){S===void 0&&(S=q);var W=Object.getOwnPropertyDescriptor(U,q);(!W||("get"in W?!U.__esModule:W.writable||W.configurable))&&(W={enumerable:!0,get:function(){return U[q]}}),Object.defineProperty(Y,S,W)}):(function(Y,U,q,S){S===void 0&&(S=q),Y[S]=U[q]})),R=Ui&&Ui.__exportStar||function(Y,U){for(var q in Y)q!=="default"&&!Object.prototype.hasOwnProperty.call(U,q)&&A(U,Y,q)};Object.defineProperty(_,"__esModule",{value:!0}),_.SileroV5=_.SileroLegacy=void 0,R(Vm(),_);var V=Fm();Object.defineProperty(_,"SileroLegacy",{enumerable:!0,get:function(){return V.SileroLegacy}});var Q=qm();Object.defineProperty(_,"SileroV5",{enumerable:!0,get:function(){return Q.SileroV5}})})(Ui)),Ui}var mn={},Uh;function sf(){if(Uh)return mn;Uh=1,Object.defineProperty(mn,"__esModule",{value:!0}),mn.Resampler=void 0;const _=vn();class A{constructor(V){this.options=V,this.process=Q=>{const Y=[];for(const U of Q)for(this.inputBuffer.push(U);this.hasEnoughDataForFrame();){const q=this.generateOutputFrame();Y.push(q)}return Y},V.nativeSampleRate<16e3&&_.log.error("nativeSampleRate is too low. Should have 16000 = targetSampleRate <= nativeSampleRate"),this.inputBuffer=[]}async*stream(V){for(const Q of V)for(this.inputBuffer.push(Q);this.hasEnoughDataForFrame();)yield this.generateOutputFrame()}hasEnoughDataForFrame(){return this.inputBuffer.length*this.options.targetSampleRate/this.options.nativeSampleRate>=this.options.targetFrameSize}generateOutputFrame(){const V=new Float32Array(this.options.targetFrameSize);let Q=0,Y=0;for(;Q<this.options.targetFrameSize;){let U=0,q=0;for(;Y<Math.min(this.inputBuffer.length,(Q+1)*this.options.nativeSampleRate/this.options.targetSampleRate);){const S=this.inputBuffer[Y];S!==void 0&&(U+=S,q++),Y++}V[Q]=U/q,Q++}return this.inputBuffer=this.inputBuffer.slice(Y),V}}return mn.Resampler=A,mn}var Nh;function Gm(){return Nh||(Nh=1,(function(_){var A=Lr&&Lr.__createBinding||(Object.create?(function(ue,le,ae,re){re===void 0&&(re=ae);var _e=Object.getOwnPropertyDescriptor(le,ae);(!_e||("get"in _e?!le.__esModule:_e.writable||_e.configurable))&&(_e={enumerable:!0,get:function(){return le[ae]}}),Object.defineProperty(ue,re,_e)}):(function(ue,le,ae,re){re===void 0&&(re=ae),ue[re]=le[ae]})),R=Lr&&Lr.__setModuleDefault||(Object.create?(function(ue,le){Object.defineProperty(ue,"default",{enumerable:!0,value:le})}):function(ue,le){ue.default=le}),V=Lr&&Lr.__importStar||function(ue){if(ue&&ue.__esModule)return ue;var le={};if(ue!=null)for(var ae in ue)ae!=="default"&&Object.prototype.hasOwnProperty.call(ue,ae)&&A(le,ue,ae);return R(le,ue),le};Object.defineProperty(_,"__esModule",{value:!0}),_.NonRealTimeVAD=_.defaultNonRealTimeVADOptions=void 0;const Q=V(Lm()),Y=tf(),U=Ao(),q=Oo(),S=Qn(),W=nf(),F=sf();_.defaultNonRealTimeVADOptions={...q.defaultFrameProcessorOptions,modelURL:Y.baseAssetPath+"silero_vad_legacy.onnx",modelFetcher:U.defaultModelFetcher};class pe{static async new(le={}){const ae={..._.defaultNonRealTimeVADOptions,...le};(0,q.validateOptions)(ae),ae.ortConfig!==void 0&&ae.ortConfig(Q);const re=()=>ae.modelFetcher(ae.modelURL),_e=await W.SileroLegacy.new(Q,re),qe=new q.FrameProcessor(_e.process,_e.reset_state,{positiveSpeechThreshold:ae.positiveSpeechThreshold,negativeSpeechThreshold:ae.negativeSpeechThreshold,redemptionMs:ae.redemptionMs,preSpeechPadMs:ae.preSpeechPadMs,minSpeechMs:ae.minSpeechMs,submitUserSpeechOnPause:ae.submitUserSpeechOnPause},1536/16);return qe.resume(),new this(re,Q,ae,qe)}constructor(le,ae,re,_e){this.modelFetcher=le,this.ort=ae,this.options=re,this.frameProcessor=_e,this.frameSamples=1536}async*run(le,ae){const re={nativeSampleRate:ae,targetSampleRate:16e3,targetFrameSize:this.frameSamples},_e=new F.Resampler(re);let qe=0,Ze=0,ve=0;for await(const me of _e.stream(le)){const he=[];await this.frameProcessor.process(me,je=>{he.push(je)});for(const je of he)switch(je.msg){case S.Message.SpeechStart:qe=ve*this.frameSamples/16;break;case S.Message.SpeechEnd:Ze=(ve+1)*this.frameSamples/16,yield{audio:je.audio,start:qe,end:Ze};break}ve++}const Ce=[];this.frameProcessor.endSegment(me=>{Ce.push(me)});for(const me of Ce)me.msg===S.Message.SpeechEnd&&(yield{audio:me.audio,start:qe,end:ve*this.frameSamples/16})}}_.NonRealTimeVAD=pe})(Lr)),Lr}var yr={},Lh;function Wm(){if(Lh)return yr;Lh=1,Object.defineProperty(yr,"__esModule",{value:!0}),yr.audioFileToArray=yr.encodeWAV=yr.arrayBufferToBase64=yr.minFramesForTargetMS=void 0;function _(q,S,W=16e3){return Math.ceil(q*W/1e3/S)}yr.minFramesForTargetMS=_;function A(q){const S=new Uint8Array(q),W=S.byteLength,F=new Array(W);for(let pe=0;pe<W;pe++){const ue=S[pe];if(ue===void 0)break;F[pe]=String.fromCharCode(ue)}return btoa(F.join(""))}yr.arrayBufferToBase64=A;function R(q,S=3,W=16e3,F=1,pe=32){const ue=pe/8,le=F*ue,ae=new ArrayBuffer(44+q.length*ue),re=new DataView(ae);return Y(re,0,"RIFF"),re.setUint32(4,36+q.length*ue,!0),Y(re,8,"WAVE"),Y(re,12,"fmt "),re.setUint32(16,16,!0),re.setUint16(20,S,!0),re.setUint16(22,F,!0),re.setUint32(24,W,!0),re.setUint32(28,W*le,!0),re.setUint16(32,le,!0),re.setUint16(34,pe,!0),Y(re,36,"data"),re.setUint32(40,q.length*ue,!0),S===1?Q(re,44,q):V(re,44,q),ae}yr.encodeWAV=R;function V(q,S,W){for(let F=0;F<W.length;F++,S+=4)q.setFloat32(S,W[F],!0)}function Q(q,S,W){for(let F=0;F<W.length;F++,S+=2){const pe=Math.max(-1,Math.min(1,W[F]));q.setInt16(S,pe<0?pe*32768:pe*32767,!0)}}function Y(q,S,W){for(let F=0;F<W.length;F++)q.setUint8(S+F,W.charCodeAt(F))}async function U(q){const S=new OfflineAudioContext(1,1,44100),W=new FileReader;let F=null;if(await new Promise(le=>{W.addEventListener("loadend",()=>{const ae=W.result;S.decodeAudioData(ae,re=>{F=re,S.startRendering().then(()=>{console.log("Rendering completed successfully"),le()}).catch(_e=>{console.error(`Rendering failed: ${_e}`)})},re=>{console.log(`Error with decoding audio data: ${re}`)})}),W.readAsArrayBuffer(q)}),F===null)throw Error("some shit");const pe=F,ue=new Float32Array(pe.length);for(let le=0;le<pe.length;le++)for(let ae=0;ae<pe.numberOfChannels;ae++){const re=pe.getChannelData(ae)[le],_e=ue[le];if(re===void 0||_e===void 0)throw new Error("sample or out[i] is undefined");ue[le]=_e+re}return{audio:ue,sampleRate:pe.sampleRate}}return yr.audioFileToArray=U,yr}var Vr={},yo={exports:{}},Vh;function jm(){return Vh||(Vh=1,(function(_,A){var R=(()=>{var V=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,Y=Object.getOwnPropertyNames,U=Object.prototype.hasOwnProperty,q=(c=>typeof ur<"u"?ur:typeof Proxy<"u"?new Proxy(c,{get:(g,v)=>(typeof ur<"u"?ur:g)[v]}):c)(function(c){if(typeof ur<"u")return ur.apply(this,arguments);throw Error('Dynamic require of "'+c+'" is not supported')}),S=(c,g)=>()=>(c&&(g=c(c=0)),g),W=(c,g)=>{for(var v in g)V(c,v,{get:g[v],enumerable:!0})},F=(c,g,v,k)=>{if(g&&typeof g=="object"||typeof g=="function")for(let E of Y(g))!U.call(c,E)&&E!==v&&V(c,E,{get:()=>g[E],enumerable:!(k=Q(g,E))||k.enumerable});return c},pe=c=>F(V({},"__esModule",{value:!0}),c),ue,le,ae,re,_e,qe=S(()=>{ue=new Map,le=[],ae=(c,g,v)=>{if(g&&typeof g.init=="function"&&typeof g.createInferenceSessionHandler=="function"){let k=ue.get(c);if(k===void 0)ue.set(c,{backend:g,priority:v});else{if(k.priority>v)return;if(k.priority===v&&k.backend!==g)throw new Error(`cannot register backend "${c}" using priority ${v}`)}if(v>=0){let E=le.indexOf(c);E!==-1&&le.splice(E,1);for(let B=0;B<le.length;B++)if(ue.get(le[B]).priority<=v){le.splice(B,0,c);return}le.push(c)}return}throw new TypeError("not a valid backend")},re=async c=>{let g=ue.get(c);if(!g)return"backend not found.";if(g.initialized)return g.backend;if(g.aborted)return g.error;{let v=!!g.initPromise;try{return v||(g.initPromise=g.backend.init(c)),await g.initPromise,g.initialized=!0,g.backend}catch(k){return v||(g.error=`${k}`,g.aborted=!0),g.error}finally{delete g.initPromise}}},_e=async c=>{let g=c.executionProviders||[],v=g.map(M=>typeof M=="string"?M:M.name),k=v.length===0?le:v,E,B=[],z=new Set;for(let M of k){let K=await re(M);typeof K=="string"?B.push({name:M,err:K}):(E||(E=K),E===K&&z.add(M))}if(!E)throw new Error(`no available backend found. ERR: ${B.map(M=>`[${M.name}] ${M.err}`).join(", ")}`);for(let{name:M,err:K}of B)v.includes(M)&&console.warn(`removing requested execution provider "${M}" from session options because it is not available: ${K}`);let I=g.filter(M=>z.has(typeof M=="string"?M:M.name));return[E,new Proxy(c,{get:(M,K)=>K==="executionProviders"?I:Reflect.get(M,K)})]}}),Ze=S(()=>{qe()}),ve,Ce=S(()=>{ve="1.27.0"}),me,he,je=S(()=>{Ce(),me="warning",he={wasm:{},webgl:{},webgpu:{},versions:{common:ve},set logLevel(c){if(c!==void 0){if(typeof c!="string"||["verbose","info","warning","error","fatal"].indexOf(c)===-1)throw new Error(`Unsupported logging level: ${c}`);me=c}},get logLevel(){return me}},Object.defineProperty(he,"logLevel",{enumerable:!0})}),se,Ge=S(()=>{je(),se=he}),et,rt,st=S(()=>{et=(c,g)=>{let v=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);v.width=c.dims[3],v.height=c.dims[2];let k=v.getContext("2d");if(k!=null){let E,B;g?.tensorLayout!==void 0&&g.tensorLayout==="NHWC"?(E=c.dims[2],B=c.dims[3]):(E=c.dims[3],B=c.dims[2]);let z=g?.format!==void 0?g.format:"RGB",I=g?.norm,M,K;I===void 0||I.mean===void 0?M=[255,255,255,255]:typeof I.mean=="number"?M=[I.mean,I.mean,I.mean,I.mean]:(M=[I.mean[0],I.mean[1],I.mean[2],0],I.mean[3]!==void 0&&(M[3]=I.mean[3])),I===void 0||I.bias===void 0?K=[0,0,0,0]:typeof I.bias=="number"?K=[I.bias,I.bias,I.bias,I.bias]:(K=[I.bias[0],I.bias[1],I.bias[2],0],I.bias[3]!==void 0&&(K[3]=I.bias[3]));let te=B*E,j=0,L=te,ge=te*2,O=-1;z==="RGBA"?(j=0,L=te,ge=te*2,O=te*3):z==="RGB"?(j=0,L=te,ge=te*2):z==="RBG"&&(j=0,ge=te,L=te*2);for(let ne=0;ne<B;ne++)for(let nt=0;nt<E;nt++){let Me=(c.data[j++]-K[0])*M[0],we=(c.data[L++]-K[1])*M[1],Be=(c.data[ge++]-K[2])*M[2],ce=O===-1?255:(c.data[O++]-K[3])*M[3];k.fillStyle="rgba("+Me+","+we+","+Be+","+ce+")",k.fillRect(nt,ne,1,1)}if("toDataURL"in v)return v.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},rt=(c,g)=>{let v=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),k;if(v!=null){let E,B,z;g?.tensorLayout!==void 0&&g.tensorLayout==="NHWC"?(E=c.dims[2],B=c.dims[1],z=c.dims[3]):(E=c.dims[3],B=c.dims[2],z=c.dims[1]);let I=g!==void 0&&g.format!==void 0?g.format:"RGB",M=g?.norm,K,te;M===void 0||M.mean===void 0?K=[255,255,255,255]:typeof M.mean=="number"?K=[M.mean,M.mean,M.mean,M.mean]:(K=[M.mean[0],M.mean[1],M.mean[2],255],M.mean[3]!==void 0&&(K[3]=M.mean[3])),M===void 0||M.bias===void 0?te=[0,0,0,0]:typeof M.bias=="number"?te=[M.bias,M.bias,M.bias,M.bias]:(te=[M.bias[0],M.bias[1],M.bias[2],0],M.bias[3]!==void 0&&(te[3]=M.bias[3]));let j=B*E;if(g!==void 0&&(g.format!==void 0&&z===4&&g.format!=="RGBA"||z===3&&g.format!=="RGB"&&g.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let L=4,ge=0,O=1,ne=2,nt=3,Me=0,we=j,Be=j*2,ce=-1;I==="RGBA"?(Me=0,we=j,Be=j*2,ce=j*3):I==="RGB"?(Me=0,we=j,Be=j*2):I==="RBG"&&(Me=0,Be=j,we=j*2),k=v.createImageData(E,B);for(let Tt=0;Tt<B*E;ge+=L,O+=L,ne+=L,nt+=L,Tt++)k.data[ge]=(c.data[Me++]-te[0])*K[0],k.data[O]=(c.data[we++]-te[1])*K[1],k.data[ne]=(c.data[Be++]-te[2])*K[2],k.data[nt]=ce===-1?255:(c.data[ce++]-te[3])*K[3]}else throw new Error("Can not access image data");return k}}),it,ft,Yt,Fe,Rt,Jt,Ct=S(()=>{Qe(),it=(c,g)=>{if(c===void 0)throw new Error("Image buffer must be defined");if(g.height===void 0||g.width===void 0)throw new Error("Image height and width must be defined");if(g.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:v,width:k}=g,E=g.norm??{mean:255,bias:0},B,z;typeof E.mean=="number"?B=[E.mean,E.mean,E.mean,E.mean]:B=[E.mean[0],E.mean[1],E.mean[2],E.mean[3]??255],typeof E.bias=="number"?z=[E.bias,E.bias,E.bias,E.bias]:z=[E.bias[0],E.bias[1],E.bias[2],E.bias[3]??0];let I=g.format!==void 0?g.format:"RGBA",M=g.tensorFormat!==void 0&&g.tensorFormat!==void 0?g.tensorFormat:"RGB",K=v*k,te=M==="RGBA"?new Float32Array(K*4):new Float32Array(K*3),j=4,L=0,ge=1,O=2,ne=3,nt=0,Me=K,we=K*2,Be=-1;I==="RGB"&&(j=3,L=0,ge=1,O=2,ne=-1),M==="RGBA"?Be=K*3:M==="RBG"?(nt=0,we=K,Me=K*2):M==="BGR"&&(we=0,Me=K,nt=K*2);for(let ce=0;ce<K;ce++,L+=j,O+=j,ge+=j,ne+=j)te[nt++]=(c[L]+z[0])/B[0],te[Me++]=(c[ge]+z[1])/B[1],te[we++]=(c[O]+z[2])/B[2],Be!==-1&&ne!==-1&&(te[Be++]=(c[ne]+z[3])/B[3]);return M==="RGBA"?new We("float32",te,[1,4,v,k]):new We("float32",te,[1,3,v,k])},ft=async(c,g)=>{let v=typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement,k=typeof ImageData<"u"&&c instanceof ImageData,E=typeof ImageBitmap<"u"&&c instanceof ImageBitmap,B=typeof c=="string",z,I=g??{},M=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},K=te=>typeof HTMLCanvasElement<"u"&&te instanceof HTMLCanvasElement||te instanceof OffscreenCanvas?te.getContext("2d"):null;if(v){let te=M();te.width=c.width,te.height=c.height;let j=K(te);if(j!=null){let L=c.height,ge=c.width;if(g!==void 0&&g.resizedHeight!==void 0&&g.resizedWidth!==void 0&&(L=g.resizedHeight,ge=g.resizedWidth),g!==void 0){if(I=g,g.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");I.tensorFormat="RGBA",I.height=L,I.width=ge}else I.tensorFormat="RGBA",I.height=L,I.width=ge;j.drawImage(c,0,0),z=j.getImageData(0,0,ge,L).data}else throw new Error("Can not access image data")}else if(k){let te,j;if(g!==void 0&&g.resizedWidth!==void 0&&g.resizedHeight!==void 0?(te=g.resizedHeight,j=g.resizedWidth):(te=c.height,j=c.width),g!==void 0&&(I=g),I.format="RGBA",I.height=te,I.width=j,g!==void 0){let L=M();L.width=j,L.height=te;let ge=K(L);if(ge!=null)ge.putImageData(c,0,0),z=ge.getImageData(0,0,j,te).data;else throw new Error("Can not access image data")}else z=c.data}else if(E){if(g===void 0)throw new Error("Please provide image config with format for Imagebitmap");let te=M();te.width=c.width,te.height=c.height;let j=K(te);if(j!=null){let L=c.height,ge=c.width;return j.drawImage(c,0,0,ge,L),z=j.getImageData(0,0,ge,L).data,I.height=L,I.width=ge,it(z,I)}else throw new Error("Can not access image data")}else{if(B)return new Promise((te,j)=>{let L=M(),ge=K(L);if(!c||!ge)return j();let O=new Image;O.crossOrigin="Anonymous",O.src=c,O.onload=()=>{L.width=O.width,L.height=O.height,ge.drawImage(O,0,0,L.width,L.height);let ne=ge.getImageData(0,0,L.width,L.height);I.height=L.height,I.width=L.width,te(it(ne.data,I))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(z!==void 0)return it(z,I);throw new Error("Input data provided is not supported - aborted tensor creation")},Yt=(c,g)=>{let{width:v,height:k,download:E,dispose:B}=g,z=[1,k,v,4];return new We({location:"texture",type:"float32",texture:c,dims:z,download:E,dispose:B})},Fe=(c,g)=>{let{dataType:v,dims:k,download:E,dispose:B}=g;return new We({location:"gpu-buffer",type:v??"float32",gpuBuffer:c,dims:k,download:E,dispose:B})},Rt=(c,g)=>{let{dataType:v,dims:k,download:E,dispose:B}=g;return new We({location:"ml-tensor",type:v??"float32",mlTensor:c,dims:k,download:E,dispose:B})},Jt=(c,g,v)=>new We({location:"cpu-pinned",type:c,data:g,dims:v??[g.length]})}),lt,zt,At,Mt,Vt=S(()=>{lt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),zt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),At=!1,Mt=()=>{if(!At){At=!0;let c=typeof BigInt64Array<"u"&&BigInt64Array.from,g=typeof BigUint64Array<"u"&&BigUint64Array.from,v=globalThis.Float16Array,k=typeof v<"u"&&v.from;c&&(lt.set("int64",BigInt64Array),zt.set(BigInt64Array,"int64")),g&&(lt.set("uint64",BigUint64Array),zt.set(BigUint64Array,"uint64")),k?(lt.set("float16",v),zt.set(v,"float16")):lt.set("float16",Uint16Array)}}}),ar,Ft,Et=S(()=>{Qe(),ar=c=>{let g=1;for(let v=0;v<c.length;v++){let k=c[v];if(typeof k!="number"||!Number.isSafeInteger(k))throw new TypeError(`dims[${v}] must be an integer, got: ${k}`);if(k<0)throw new RangeError(`dims[${v}] must be a non-negative integer, got: ${k}`);g*=k}return g},Ft=(c,g)=>{switch(c.location){case"cpu":return new We(c.type,c.data,g);case"cpu-pinned":return new We({location:"cpu-pinned",data:c.data,type:c.type,dims:g});case"texture":return new We({location:"texture",texture:c.texture,type:c.type,dims:g});case"gpu-buffer":return new We({location:"gpu-buffer",gpuBuffer:c.gpuBuffer,type:c.type,dims:g});case"ml-tensor":return new We({location:"ml-tensor",mlTensor:c.mlTensor,type:c.type,dims:g});default:throw new Error(`tensorReshape: tensor location ${c.location} is not supported`)}}}),We,Qe=S(()=>{st(),Ct(),Vt(),Et(),We=class{constructor(c,g,v){Mt();let k,E;if(typeof c=="object"&&"location"in c)switch(this.dataLocation=c.location,k=c.type,E=c.dims,c.location){case"cpu-pinned":{let z=lt.get(k);if(!z)throw new TypeError(`unsupported type "${k}" to create tensor from pinned buffer`);if(!(c.data instanceof z))throw new TypeError(`buffer should be of type ${z.name}`);this.cpuData=c.data;break}case"texture":{if(k!=="float32")throw new TypeError(`unsupported type "${k}" to create tensor from texture`);this.gpuTextureData=c.texture,this.downloader=c.download,this.disposer=c.dispose;break}case"gpu-buffer":{if(k!=="float32"&&k!=="float16"&&k!=="int32"&&k!=="int64"&&k!=="uint32"&&k!=="uint8"&&k!=="bool"&&k!=="uint4"&&k!=="int4")throw new TypeError(`unsupported type "${k}" to create tensor from gpu buffer`);this.gpuBufferData=c.gpuBuffer,this.downloader=c.download,this.disposer=c.dispose;break}case"ml-tensor":{if(k!=="float32"&&k!=="float16"&&k!=="int32"&&k!=="int64"&&k!=="uint32"&&k!=="uint64"&&k!=="int8"&&k!=="uint8"&&k!=="bool"&&k!=="uint4"&&k!=="int4")throw new TypeError(`unsupported type "${k}" to create tensor from MLTensor`);this.mlTensorData=c.mlTensor,this.downloader=c.download,this.disposer=c.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let z,I;if(typeof c=="string")if(k=c,I=v,c==="string"){if(!Array.isArray(g))throw new TypeError("A string tensor's data must be a string array.");z=g}else{let M=lt.get(c);if(M===void 0)throw new TypeError(`Unsupported tensor type: ${c}.`);if(Array.isArray(g)){if(c==="float16"&&M===Uint16Array||c==="uint4"||c==="int4")throw new TypeError(`Creating a ${c} tensor from number array is not supported. Please use ${M.name} as data.`);c==="uint64"||c==="int64"?z=M.from(g,BigInt):z=M.from(g)}else if(g instanceof M)z=g;else if(g instanceof Uint8ClampedArray)if(c==="uint8")z=Uint8Array.from(g);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(c==="float16"&&g instanceof Uint16Array&&M!==Uint16Array)z=new globalThis.Float16Array(g.buffer,g.byteOffset,g.length);else throw new TypeError(`A ${k} tensor's data must be type of ${M}`)}else if(I=g,Array.isArray(c)){if(c.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let M=typeof c[0];if(M==="string")k="string",z=c;else if(M==="boolean")k="bool",z=Uint8Array.from(c);else throw new TypeError(`Invalid element type of data array: ${M}.`)}else if(c instanceof Uint8ClampedArray)k="uint8",z=Uint8Array.from(c);else{let M=zt.get(c.constructor);if(M===void 0)throw new TypeError(`Unsupported type for tensor data: ${c.constructor}.`);k=M,z=c}if(I===void 0)I=[z.length];else if(!Array.isArray(I))throw new TypeError("A tensor's dims must be a number array");E=I,this.cpuData=z,this.dataLocation="cpu"}let B=ar(E);if(this.cpuData&&B!==this.cpuData.length&&!((k==="uint4"||k==="int4")&&Math.ceil(B/2)===this.cpuData.length))throw new Error(`Tensor's size(${B}) does not match data length(${this.cpuData.length}).`);this.type=k,this.dims=E,this.size=B}static async fromImage(c,g){return ft(c,g)}static fromTexture(c,g){return Yt(c,g)}static fromGpuBuffer(c,g){return Fe(c,g)}static fromMLTensor(c,g){return Rt(c,g)}static fromPinnedBuffer(c,g,v){return Jt(c,g,v)}toDataURL(c){return et(this,c)}toImageData(c){return rt(this,c)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(c){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let g=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=g,c&&this.disposer&&(this.disposer(),this.disposer=void 0),g}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(c){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Ft(this,c)}}}),Xe,qt=S(()=>{Qe(),Xe=We}),Ye,er,dt,pt,ot,ut,Pt=S(()=>{je(),Ye=(c,g)=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.timeStamp(`${c}::ORT::${g}`)},er=(c,g)=>{let v=new Error().stack?.split(/\r\n|\r|\n/g)||[],k=!1;for(let E=0;E<v.length;E++){if(k&&!v[E].includes("TRACE_FUNC")){let B=`FUNC_${c}::${v[E].trim().split(" ")[1]}`;g&&(B+=`::${g}`),Ye("CPU",B);return}v[E].includes("TRACE_FUNC")&&(k=!0)}},dt=c=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||er("BEGIN",c)},pt=c=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||er("END",c)},ot=c=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.time(`ORT::${c}`)},ut=c=>{(typeof he.trace>"u"?!he.wasm.trace:!he.trace)||console.timeEnd(`ORT::${c}`)}}),vr,Wr=S(()=>{qe(),qt(),Pt(),vr=class of{constructor(g){this.handler=g}async run(g,v,k){dt(),ot("InferenceSession.run");let E={},B={};if(typeof g!="object"||g===null||g instanceof Xe||Array.isArray(g))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let z=!0;if(typeof v=="object"){if(v===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(v instanceof Xe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(v)){if(v.length===0)throw new TypeError("'fetches' cannot be an empty array.");z=!1;for(let K of v){if(typeof K!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(K)===-1)throw new RangeError(`'fetches' contains invalid output name: ${K}.`);E[K]=null}if(typeof k=="object"&&k!==null)B=k;else if(typeof k<"u")throw new TypeError("'options' must be an object.")}else{let K=!1,te=Object.getOwnPropertyNames(v);for(let j of this.outputNames)if(te.indexOf(j)!==-1){let L=v[j];(L===null||L instanceof Xe)&&(K=!0,z=!1,E[j]=L)}if(K){if(typeof k=="object"&&k!==null)B=k;else if(typeof k<"u")throw new TypeError("'options' must be an object.")}else B=v}}else if(typeof v<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let K of this.inputNames)if(typeof g[K]>"u")throw new Error(`input '${K}' is missing in 'feeds'.`);if(z)for(let K of this.outputNames)E[K]=null;let I=await this.handler.run(g,E,B),M={};for(let K in I)if(Object.hasOwnProperty.call(I,K)){let te=I[K];te instanceof Xe?M[K]=te:M[K]=new Xe(te.type,te.data,te.dims)}return ut("InferenceSession.run"),pt(),M}async release(){return this.handler.dispose()}static async create(g,v,k,E){dt(),ot("InferenceSession.create");let B,z={};if(typeof g=="string"){if(B=g,typeof v=="object"&&v!==null)z=v;else if(typeof v<"u")throw new TypeError("'options' must be an object.")}else if(g instanceof Uint8Array){if(B=g,typeof v=="object"&&v!==null)z=v;else if(typeof v<"u")throw new TypeError("'options' must be an object.")}else if(g instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&g instanceof SharedArrayBuffer){let te=g,j=0,L=g.byteLength;if(typeof v=="object"&&v!==null)z=v;else if(typeof v=="number"){if(j=v,!Number.isSafeInteger(j))throw new RangeError("'byteOffset' must be an integer.");if(j<0||j>=te.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${te.byteLength}).`);if(L=g.byteLength-j,typeof k=="number"){if(L=k,!Number.isSafeInteger(L))throw new RangeError("'byteLength' must be an integer.");if(L<=0||j+L>te.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${te.byteLength-j}].`);if(typeof E=="object"&&E!==null)z=E;else if(typeof E<"u")throw new TypeError("'options' must be an object.")}else if(typeof k<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof v<"u")throw new TypeError("'options' must be an object.");B=new Uint8Array(te,j,L)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[I,M]=await _e(z),K=await I.createInferenceSessionHandler(B,M);return ut("InferenceSession.create"),pt(),new of(K)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Bt,$r=S(()=>{Wr(),Bt=vr}),ga=S(()=>{}),ni=S(()=>{}),Vi=S(()=>{}),Fi=S(()=>{}),jr={};W(jr,{InferenceSession:()=>Bt,TRACE:()=>Ye,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,env:()=>se,registerBackend:()=>ae});var gt=S(()=>{Ze(),Ge(),$r(),qt(),ga(),ni(),Pt(),Vi(),Fi()}),si=S(()=>{}),wa={};W(wa,{default:()=>ya});var oi,ui,ya,Yn=S(()=>{Pa(),Gt(),hi(),oi="ort-wasm-proxy-worker",ui=globalThis.self?.name===oi,ui&&(self.onmessage=c=>{let{type:g,in:v}=c.data;try{switch(g){case"init-wasm":gi(v.wasm).then(()=>{Gi(v).then(()=>{postMessage({type:g})},k=>{postMessage({type:g,err:k})})},k=>{postMessage({type:g,err:k})});break;case"init-ep":{let{epName:k,env:E}=v;Wi(E,k).then(()=>{postMessage({type:g})},B=>{postMessage({type:g,err:B})});break}case"copy-from":{let{buffer:k}=v,E=Le(k);postMessage({type:g,out:E});break}case"create":{let{model:k,options:E}=v;tr(k,E).then(B=>{postMessage({type:g,out:B})},B=>{postMessage({type:g,err:B})});break}case"release":Ki(v),postMessage({type:g});break;case"run":{let{sessionId:k,inputIndices:E,inputs:B,outputIndices:z,options:I}=v;N(k,E,B,z,new Array(z.length).fill(null),I).then(M=>{M.some(K=>K[3]!=="cpu")?postMessage({type:g,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:g,out:M},Zi([...B,...M]))},M=>{postMessage({type:g,err:M})});break}case"end-profiling":Hr(v),postMessage({type:g});break;default:}}catch(k){postMessage({type:g,err:k})}}),ya=ui?null:c=>new Worker(c??at,{type:"classic",name:oi})}),ba,_a,at,li,Or,va,$a,di,xa,pi,Sa,ci,Ta,hi=S(()=>{si(),ba=typeof location>"u"?void 0:location.origin,_a=()=>typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0,at=_a(),li=()=>{if(at&&!at.startsWith("blob:"))return at.substring(0,at.lastIndexOf("/")+1)},Or=(c,g)=>{try{let v=g??at;return(v?new URL(c,v):new URL(c)).origin===ba}catch{return!1}},va=(c,g)=>{let v=g??at;try{return(v?new URL(c,v):new URL(c)).href}catch{return}},$a=(c,g)=>`${g??"./"}${c}`,di=async c=>{let g=await(await fetch(c,{credentials:"same-origin"})).blob();return URL.createObjectURL(g)},xa=async c=>(await import(c)).default,pi=(Yn(),pe(wa)).default,Sa=async()=>{if(!at)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Or(at))return[void 0,pi()];let c=await di(at);return[c,pi(c)]},ci=void 0,Ta=async(c,g,v,k)=>{let E=ci&&!(c||g);if(E)if(at)E=Or(at)||k&&!v;else if(k&&!v)E=!0;else throw new Error("cannot determine the script source URL.");if(E)return[void 0,ci];{let B="ort-wasm-simd-threaded.mjs",z=c??va(B,g),I=v&&z&&!Or(z,g),M=I?await di(z):z??$a(B,g);return[I?M:void 0,await xa(M)]}}}),fi,Rr,lr,mi,Ea,ka,Ia,gi,ze,Gt=S(()=>{hi(),Rr=!1,lr=!1,mi=!1,Ea=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ka=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ia=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},gi=async c=>{if(Rr)return Promise.resolve();if(lr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(mi)throw new Error("previous call to 'initializeWebAssembly()' failed.");lr=!0;let g=c.initTimeout,v=c.numThreads;if(c.simd!==!1){if(c.simd==="relaxed"){if(!Ia())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!ka())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let k=Ea();v>1&&!k&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+v+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),c.numThreads=v=1);let E=c.wasmPaths,B=typeof E=="string"?E:void 0,z=E?.mjs,I=z?.href??z,M=E?.wasm,K=M?.href??M,te=c.wasmBinary,[j,L]=await Ta(I,B,v>1,!!te||!!K),ge=!1,O=[];if(g>0&&O.push(new Promise(ne=>{setTimeout(()=>{ge=!0,ne()},g)})),O.push(new Promise((ne,nt)=>{let Me={numThreads:v};if(te)Me.wasmBinary=te,Me.locateFile=we=>we;else if(K||B)Me.locateFile=we=>K??B+we;else if(I&&I.indexOf("blob:")!==0)Me.locateFile=we=>new URL(we,I).href;else if(j){let we=li();we&&(Me.locateFile=Be=>we+Be)}L(Me).then(we=>{lr=!1,Rr=!0,fi=we,ne(),j&&URL.revokeObjectURL(j)},we=>{lr=!1,mi=!0,nt(we)})})),await Promise.race(O),ge)throw new Error(`WebAssembly backend initializing failed due to timeout: ${g}ms`)},ze=()=>{if(Rr&&fi)return fi;throw new Error("WebAssembly is not initialized yet.")}}),mt,Mr,$e,wi=S(()=>{Gt(),mt=(c,g)=>{let v=ze(),k=v.lengthBytesUTF8(c)+1,E=v._malloc(k);return v.stringToUTF8(c,E,k),g.push(E),E},Mr=(c,g,v,k)=>{if(typeof c=="object"&&c!==null){if(v.has(c))throw new Error("Circular reference in options");v.add(c)}Object.entries(c).forEach(([E,B])=>{let z=g?g+E:E;if(typeof B=="object")Mr(B,z+".",v,k);else if(typeof B=="string"||typeof B=="number")k(z,B.toString());else if(typeof B=="boolean")k(z,B?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof B}`)})},$e=c=>{let g=ze(),v=g.stackSave();try{let k=g.PTR_SIZE,E=g.stackAlloc(2*k);g._OrtGetLastError(E,E+k);let B=Number(g.getValue(E,k===4?"i32":"i64")),z=g.getValue(E+k,"*"),I=z?g.UTF8ToString(z):"";throw new Error(`${c} ERROR_CODE: ${B}, ERROR_MESSAGE: ${I}`)}finally{g.stackRestore(v)}}}),Ca,Jn=S(()=>{Gt(),wi(),Ca=c=>{let g=ze(),v=0,k=[],E=c||{};try{if(c?.logSeverityLevel===void 0)E.logSeverityLevel=2;else if(typeof c.logSeverityLevel!="number"||!Number.isInteger(c.logSeverityLevel)||c.logSeverityLevel<0||c.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${c.logSeverityLevel}`);if(c?.logVerbosityLevel===void 0)E.logVerbosityLevel=0;else if(typeof c.logVerbosityLevel!="number"||!Number.isInteger(c.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${c.logVerbosityLevel}`);c?.terminate===void 0&&(E.terminate=!1);let B=0;return c?.tag!==void 0&&(B=mt(c.tag,k)),v=g._OrtCreateRunOptions(E.logSeverityLevel,E.logVerbosityLevel,!!E.terminate,B),v===0&&$e("Can't create run options."),c?.extra!==void 0&&Mr(c.extra,"",new WeakSet,(z,I)=>{let M=mt(z,k),K=mt(I,k);g._OrtAddRunConfigEntry(v,M,K)!==0&&$e(`Can't set a run config entry: ${z} - ${I}.`)}),[v,k]}catch(B){throw v!==0&&g._OrtReleaseRunOptions(v),k.forEach(z=>g._free(z)),B}}}),za,Aa,Oa,Ut,Ra,Ma,es=S(()=>{Gt(),wi(),za=c=>{switch(c){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${c}`)}},Aa=c=>{switch(c){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${c}`)}},Oa=c=>{c.extra||(c.extra={}),c.extra.session||(c.extra.session={});let g=c.extra.session;g.use_ort_model_bytes_directly||(g.use_ort_model_bytes_directly="1"),c.executionProviders&&c.executionProviders.some(v=>(typeof v=="string"?v:v.name)==="webgpu")&&(c.enableMemPattern=!1)},Ut=(c,g,v,k)=>{let E=mt(g,k),B=mt(v,k);ze()._OrtAddSessionConfigEntry(c,E,B)!==0&&$e(`Can't set a session config entry: ${g} - ${v}.`)},Ra=async(c,g,v)=>{let k=g.executionProviders;for(let E of k){let B=typeof E=="string"?E:E.name,z=[];switch(B){case"webnn":if(B="WEBNN",Ut(c,"session.disable_quant_qdq","1",v),Ut(c,"session.disable_qdq_constant_folding","1",v),typeof E!="string"){let j=E?.deviceType;j&&Ut(c,"deviceType",j,v)}break;case"webgpu":if(B="JS",typeof E!="string"){let j=E;if(j?.preferredLayout){if(j.preferredLayout!=="NCHW"&&j.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${j.preferredLayout}`);Ut(c,"preferredLayout",j.preferredLayout,v)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${B}`)}let I=mt(B,v),M=z.length,K=0,te=0;if(M>0){K=ze()._malloc(M*ze().PTR_SIZE),v.push(K),te=ze()._malloc(M*ze().PTR_SIZE),v.push(te);for(let j=0;j<M;j++)ze().setValue(K+j*ze().PTR_SIZE,z[j][0],"*"),ze().setValue(te+j*ze().PTR_SIZE,z[j][1],"*")}await ze()._OrtAppendExecutionProvider(c,I,K,te,M)!==0&&$e(`Can't append execution provider: ${B}.`)}},Ma=async c=>{let g=ze(),v=0,k=[],E=c||{};Oa(E);try{let B=za(E.graphOptimizationLevel??"all"),z=Aa(E.executionMode??"sequential"),I=typeof E.logId=="string"?mt(E.logId,k):0,M=E.logSeverityLevel??2;if(!Number.isInteger(M)||M<0||M>4)throw new Error(`log severity level is not valid: ${M}`);let K=E.logVerbosityLevel??0;if(!Number.isInteger(K)||K<0||K>4)throw new Error(`log verbosity level is not valid: ${K}`);let te=typeof E.optimizedModelFilePath=="string"?mt(E.optimizedModelFilePath,k):0;if(v=g._OrtCreateSessionOptions(B,!!E.enableCpuMemArena,!!E.enableMemPattern,z,!!E.enableProfiling,0,I,M,K,te),v===0&&$e("Can't create session options."),E.executionProviders&&await Ra(v,E,k),E.enableGraphCapture!==void 0){if(typeof E.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${E.enableGraphCapture}`);Ut(v,"enableGraphCapture",E.enableGraphCapture.toString(),k)}if(E.freeDimensionOverrides)for(let[j,L]of Object.entries(E.freeDimensionOverrides)){if(typeof j!="string")throw new Error(`free dimension override name must be a string: ${j}`);if(typeof L!="number"||!Number.isInteger(L)||L<0)throw new Error(`free dimension override value must be a non-negative integer: ${L}`);let ge=mt(j,k);g._OrtAddFreeDimensionOverride(v,ge,L)!==0&&$e(`Can't set a free dimension override: ${j} - ${L}.`)}return E.extra!==void 0&&Mr(E.extra,"",new WeakSet,(j,L)=>{Ut(v,j,L,k)}),[v,k]}catch(B){throw v!==0&&g._OrtReleaseSessionOptions(v)!==0&&$e("Can't release session options."),k.forEach(z=>g._free(z)),B}}}),Wt,jt,Ht,yi,bi,_i,vi,qi,Ee=S(()=>{Wt=c=>{switch(c){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${c}`)}},jt=c=>{switch(c){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${c}`)}},Ht=(c,g)=>{let v=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][c],k=typeof g=="number"?g:g.reduce((E,B)=>E*B,1);return v>0?Math.ceil(k*v):void 0},yi=c=>{switch(c){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${c}`)}},bi=c=>{switch(c){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${c}`)}},_i=c=>c==="float32"||c==="float16"||c==="int32"||c==="int64"||c==="uint32"||c==="uint8"||c==="bool"||c==="uint4"||c==="int4",vi=c=>c==="float32"||c==="float16"||c==="int32"||c==="int64"||c==="uint32"||c==="uint64"||c==="int8"||c==="uint8"||c==="bool"||c==="uint4"||c==="int4",qi=c=>{switch(c){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${c}`)}}}),$i,Ba=S(()=>{si(),$i=async c=>{if(typeof c=="string"){let g=await fetch(c);if(!g.ok)throw new Error(`failed to load external data file: ${c}`);let v=g.headers.get("Content-Length"),k=v?parseInt(v,10):0;if(k<1073741824)return new Uint8Array(await g.arrayBuffer());{if(!g.body)throw new Error(`failed to load external data file: ${c}, no response body.`);let E=g.body.getReader(),B;try{B=new ArrayBuffer(k)}catch(I){if(I instanceof RangeError){let M=Math.ceil(k/65536);B=new WebAssembly.Memory({initial:M,maximum:M}).buffer}else throw I}let z=0;for(;;){let{done:I,value:M}=await E.read();if(I)break;let K=M.byteLength;new Uint8Array(B,z,K).set(M),z+=K}return new Uint8Array(B,0,k)}}else return c instanceof Blob?new Uint8Array(await c.arrayBuffer()):c instanceof Uint8Array?c:new Uint8Array(c)}}),Da,Gi,Wi,xr,ji,Hi,Le,tr,Ki,Sr,N,Hr,Zi,Pa=S(()=>{gt(),Jn(),es(),Ee(),Gt(),wi(),Ba(),Da=(c,g)=>{ze()._OrtInit(c,g)!==0&&$e("Can't initialize onnxruntime.")},Gi=async c=>{Da(c.wasm.numThreads,bi(c.logLevel))},Wi=async(c,g)=>{ze().asyncInit?.();let v=c.webgpu.adapter;if(g==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(v){if(typeof v.limits!="object"||typeof v.features!="object"||typeof v.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let k=c.webgpu.powerPreference;if(k!==void 0&&k!=="low-power"&&k!=="high-performance")throw new Error(`Invalid powerPreference setting: "${k}"`);let E=c.webgpu.forceFallbackAdapter;if(E!==void 0&&typeof E!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${E}"`);if(v=await navigator.gpu.requestAdapter({powerPreference:k,forceFallbackAdapter:E}),!v)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(g==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment")},xr=new Map,ji=c=>{let g=ze(),v=g.stackSave();try{let k=g.PTR_SIZE,E=g.stackAlloc(2*k);g._OrtGetInputOutputCount(c,E,E+k)!==0&&$e("Can't get session input/output count.");let B=k===4?"i32":"i64";return[Number(g.getValue(E,B)),Number(g.getValue(E+k,B))]}finally{g.stackRestore(v)}},Hi=(c,g)=>{let v=ze(),k=v.stackSave(),E=0;try{let B=v.PTR_SIZE,z=v.stackAlloc(2*B);v._OrtGetInputOutputMetadata(c,g,z,z+B)!==0&&$e("Can't get session input/output metadata.");let I=Number(v.getValue(z,"*"));E=Number(v.getValue(z+B,"*"));let M=v.HEAP32[E/4];if(M===0)return[I,0];let K=v.HEAPU32[E/4+1],te=[];for(let j=0;j<K;j++){let L=Number(v.getValue(E+8+j*B,"*"));te.push(L!==0?v.UTF8ToString(L):Number(v.getValue(E+8+(j+K)*B,"*")))}return[I,M,te]}finally{v.stackRestore(k),E!==0&&v._OrtFree(E)}},Le=c=>{let g=ze(),v=g._malloc(c.byteLength);if(v===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${c.byteLength}.`);return g.HEAPU8.set(c,v),[v,c.byteLength]},tr=async(c,g)=>{let v,k,E=ze();Array.isArray(c)?[v,k]=c:c.buffer===E.HEAPU8.buffer?[v,k]=[c.byteOffset,c.byteLength]:[v,k]=Le(c);let B=0,z=0,I=[],M=[],K=[];try{if([z,I]=await Ma(g),g?.externalData&&E.mountExternalData){let we=[];for(let Be of g.externalData){let ce=typeof Be=="string"?Be:Be.path;we.push($i(typeof Be=="string"?Be:Be.data).then(Tt=>{E.mountExternalData(ce,Tt)}))}await Promise.all(we)}for(let we of g?.executionProviders??[])if((typeof we=="string"?we:we.name)==="webnn"){if(E.shouldTransferToMLTensor=!1,typeof we!="string"){let Be=we,ce=Be?.context,Tt=Be?.gpuDevice,kt=Be?.deviceType,kr=Be?.powerPreference;ce?E.currentContext=ce:Tt?E.currentContext=await E.webnnCreateMLContext(Tt):E.currentContext=await E.webnnCreateMLContext({deviceType:kt,powerPreference:kr})}else E.currentContext=await E.webnnCreateMLContext();break}B=await E._OrtCreateSession(v,k,z),E.webgpuOnCreateSession?.(B),B===0&&$e("Can't create a session."),E.jsepOnCreateSession?.(),E.currentContext&&(E.webnnRegisterMLContext(B,E.currentContext),E.currentContext=void 0,E.shouldTransferToMLTensor=!0);let[te,j]=ji(B),L=!!g?.enableGraphCapture,ge=[],O=[],ne=[],nt=[],Me=[];for(let we=0;we<te;we++){let[Be,ce,Tt]=Hi(B,we);Be===0&&$e("Can't get an input name."),M.push(Be);let kt=E.UTF8ToString(Be);ge.push(kt),ne.push(ce===0?{name:kt,isTensor:!1}:{name:kt,isTensor:!0,type:jt(ce),shape:Tt})}for(let we=0;we<j;we++){let[Be,ce,Tt]=Hi(B,we+te);Be===0&&$e("Can't get an output name."),K.push(Be);let kt=E.UTF8ToString(Be);O.push(kt),nt.push(ce===0?{name:kt,isTensor:!1}:{name:kt,isTensor:!0,type:jt(ce),shape:Tt})}return xr.set(B,[B,M,K,null,L,!1]),[B,ge,O,ne,nt]}catch(te){throw M.forEach(j=>E._OrtFree(j)),K.forEach(j=>E._OrtFree(j)),B!==0&&E._OrtReleaseSession(B)!==0&&$e("Can't release session."),te}finally{E._free(v),z!==0&&E._OrtReleaseSessionOptions(z)!==0&&$e("Can't release session options."),I.forEach(te=>E._free(te)),E.unmountExternalData?.()}},Ki=c=>{let g=ze(),v=xr.get(c);if(!v)throw new Error(`cannot release session. invalid session id: ${c}`);let[k,E,B,z,I]=v;z&&(I&&g._OrtClearBoundOutputs(z.handle)!==0&&$e("Can't clear bound outputs."),g._OrtReleaseBinding(z.handle)!==0&&$e("Can't release IO binding.")),g.jsepOnReleaseSession?.(c),g.webnnOnReleaseSession?.(c),g.webgpuOnReleaseSession?.(c),E.forEach(M=>g._OrtFree(M)),B.forEach(M=>g._OrtFree(M)),g._OrtReleaseSession(k)!==0&&$e("Can't release session."),xr.delete(c)},Sr=async(c,g,v,k,E,B,z=!1)=>{if(!c){g.push(0);return}let I=ze(),M=I.PTR_SIZE,K=c[0],te=c[1],j=c[3],L=j,ge,O;if(K==="string"&&(j==="gpu-buffer"||j==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(z&&j!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${B} when enableGraphCapture is true.`);if(j==="gpu-buffer"){let Me=c[2].gpuBuffer;O=Ht(Wt(K),te);{let we=I.jsepRegisterBuffer;if(!we)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');ge=we(k,B,Me,O)}}else if(j==="ml-tensor"){let Me=c[2].mlTensor;O=Ht(Wt(K),te);let we=I.webnnRegisterMLTensor;if(!we)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');ge=we(k,Me,Wt(K),te)}else{let Me=c[2];if(Array.isArray(Me)){O=M*Me.length,ge=I._malloc(O),v.push(ge);for(let we=0;we<Me.length;we++){if(typeof Me[we]!="string")throw new TypeError(`tensor data at index ${we} is not a string`);I.setValue(ge+we*M,mt(Me[we],v),"*")}}else{let we=I.webnnIsGraphInput,Be=I.webnnIsGraphOutput;if(K!=="string"&&we&&Be){let ce=I.UTF8ToString(E);if(we(k,ce)||Be(k,ce)){let Tt=Wt(K);O=Ht(Tt,te),L="ml-tensor";let kt=I.webnnCreateTemporaryTensor,kr=I.webnnUploadTensor;if(!kt||!kr)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let Qr=await kt(k,Tt,te);kr(Qr,new Uint8Array(Me.buffer,Me.byteOffset,Me.byteLength)),ge=Qr}else O=Me.byteLength,ge=I._malloc(O),v.push(ge),I.HEAPU8.set(new Uint8Array(Me.buffer,Me.byteOffset,O),ge)}else O=Me.byteLength,ge=I._malloc(O),v.push(ge),I.HEAPU8.set(new Uint8Array(Me.buffer,Me.byteOffset,O),ge)}}let ne=I.stackSave(),nt=I.stackAlloc(4*te.length);try{te.forEach((we,Be)=>I.setValue(nt+Be*M,we,M===4?"i32":"i64"));let Me=I._OrtCreateTensor(Wt(K),ge,O,nt,te.length,qi(L));Me===0&&$e(`Can't create tensor for input/output. session=${k}, index=${B}.`),g.push(Me)}finally{I.stackRestore(ne)}},N=async(c,g,v,k,E,B)=>{let z=ze(),I=z.PTR_SIZE,M=xr.get(c);if(!M)throw new Error(`cannot run inference. invalid session id: ${c}`);let K=M[0],te=M[1],j=M[2],L=M[3],ge=M[4];M[5];let O=g.length,ne=k.length,nt=0,Me=[],we=[],Be=[],ce=[],Tt=[],kt=z.stackSave(),kr=z.stackAlloc(O*I),Qr=z.stackAlloc(O*I),na=z.stackAlloc(ne*I),Wa=z.stackAlloc(ne*I);try{[nt,Me]=Ca(B),ot("wasm prepareInputOutputTensor");for(let De=0;De<O;De++)await Sr(v[De],we,ce,c,te[g[De]],g[De],ge);for(let De=0;De<ne;De++)await Sr(E[De],Be,ce,c,j[k[De]],O+k[De],ge);ut("wasm prepareInputOutputTensor");for(let De=0;De<O;De++)z.setValue(kr+De*I,we[De],"*"),z.setValue(Qr+De*I,te[g[De]],"*");for(let De=0;De<ne;De++)z.setValue(na+De*I,Be[De],"*"),z.setValue(Wa+De*I,j[k[De]],"*");z.jsepOnRunStart?.(K),z.webnnOnRunStart?.(K);let ct;ct=await z._OrtRun(K,Qr,kr,O,Wa,ne,na,nt),ct!==0&&$e("failed to call OrtRun().");let nr=[],ja=[];ot("wasm ProcessOutputTensor");for(let De=0;De<ne;De++){let rr=Number(z.getValue(na+De*I,"*"));if(rr===Be[De]||Tt.includes(Be[De])){nr.push(E[De]),rr!==Be[De]&&z._OrtReleaseTensor(rr)!==0&&$e("Can't release tensor.");continue}let Sn=z.stackSave(),cr=z.stackAlloc(4*I),Ei=!1,wt,Dt=0;try{z._OrtGetTensorData(rr,cr,cr+I,cr+2*I,cr+3*I)!==0&&$e(`Can't access output tensor data on index ${De}.`);let sa=I===4?"i32":"i64",ki=Number(z.getValue(cr,sa));Dt=z.getValue(cr+I,"*");let Ha=z.getValue(cr+I*2,"*"),Tn=Number(z.getValue(cr+I*3,sa)),xt=[];for(let yt=0;yt<Tn;yt++)xt.push(Number(z.getValue(Ha+yt*I,sa)));z._OrtFree(Ha)!==0&&$e("Can't free memory for tensor dims.");let hr=xt.reduce((yt,ht)=>yt*ht,1);wt=jt(ki);let Yr=L?.outputPreferredLocations[k[De]];if(wt==="string"){if(Yr==="gpu-buffer"||Yr==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let yt=[];for(let ht=0;ht<hr;ht++){let sr=z.getValue(Dt+ht*I,"*"),En=z.getValue(Dt+(ht+1)*I,"*"),kn=ht===hr-1?void 0:En-sr;yt.push(z.UTF8ToString(sr,kn))}nr.push([wt,xt,yt,"cpu"])}else if(Yr==="gpu-buffer"&&hr>0){let yt=z.jsepGetBuffer;if(!yt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ht=yt(Dt),sr=Ht(ki,hr);if(sr===void 0||!_i(wt))throw new Error(`Unsupported data type: ${wt}`);Ei=!0,nr.push([wt,xt,{gpuBuffer:ht,download:z.jsepCreateDownloader(ht,sr,wt),dispose:()=>{z._OrtReleaseTensor(rr)!==0&&$e("Can't release tensor.")}},"gpu-buffer"])}else if(Yr==="ml-tensor"&&hr>0){let yt=z.webnnEnsureTensor,ht=z.webnnIsGraphInputOutputTypeSupported;if(!yt||!ht)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ht(ki,hr)===void 0||!vi(wt))throw new Error(`Unsupported data type: ${wt}`);if(!ht(c,wt,!1))throw new Error(`preferredLocation "ml-tensor" for ${wt} output is not supported by current WebNN Context.`);let sr=await yt(c,Dt,ki,xt,!1);Ei=!0,nr.push([wt,xt,{mlTensor:sr,download:z.webnnCreateMLTensorDownloader(Dt,wt),dispose:()=>{z.webnnReleaseTensorId(Dt),z._OrtReleaseTensor(rr)}},"ml-tensor"])}else if(Yr==="ml-tensor-cpu-output"&&hr>0){let yt=z.webnnCreateMLTensorDownloader(Dt,wt)(),ht=nr.length;Ei=!0,ja.push((async()=>{let sr=[ht,await yt];return z.webnnReleaseTensorId(Dt),z._OrtReleaseTensor(rr),sr})()),nr.push([wt,xt,[],"cpu"])}else{let yt=yi(wt),ht=new yt(hr);new Uint8Array(ht.buffer,ht.byteOffset,ht.byteLength).set(z.HEAPU8.subarray(Dt,Dt+ht.byteLength)),nr.push([wt,xt,ht,"cpu"])}}finally{z.stackRestore(Sn),wt==="string"&&Dt&&z._free(Dt),Ei||z._OrtReleaseTensor(rr)}}L&&!ge&&(z._OrtClearBoundOutputs(L.handle)!==0&&$e("Can't clear bound outputs."),xr.set(c,[K,te,j,L,ge,!1]));for(let[De,rr]of await Promise.all(ja))nr[De][2]=rr;return ut("wasm ProcessOutputTensor"),nr}finally{z.webnnOnRunEnd?.(K),z.stackRestore(kt),we.forEach(ct=>z._OrtReleaseTensor(ct)),Be.forEach(ct=>z._OrtReleaseTensor(ct)),ce.forEach(ct=>z._free(ct)),nt!==0&&z._OrtReleaseRunOptions(nt),Me.forEach(ct=>z._free(ct))}},Hr=c=>{let g=ze(),v=xr.get(c);if(!v)throw new Error("invalid session id");let k=v[0],E=g._OrtEndProfiling(k);E===0&&$e("Can't get an profile file name."),g._OrtFree(E)},Zi=c=>{let g=[];for(let v of c){let k=v[2];!Array.isArray(k)&&"buffer"in k&&g.push(k.buffer)}return g}}),dr,xe,Tr,Kr,Br,Zr,xi,Si,pr,Er,Xi,Qi,Yi,Ua,Na,$n,Xr,La,Va=S(()=>{gt(),Pa(),Gt(),hi(),dr=()=>!!se.wasm.proxy&&typeof document<"u",Tr=!1,Kr=!1,Br=!1,Si=new Map,pr=(c,g)=>{let v=Si.get(c);v?v.push(g):Si.set(c,[g])},Er=()=>{if(Tr||!Kr||Br||!xe)throw new Error("worker not ready")},Xi=c=>{switch(c.data.type){case"init-wasm":Tr=!1,c.data.err?(Br=!0,xi[1](c.data.err)):(Kr=!0,xi[0]()),Zr&&(URL.revokeObjectURL(Zr),Zr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let g=Si.get(c.data.type);c.data.err?g.shift()[1](c.data.err):g.shift()[0](c.data.out);break}}},Qi=async()=>{if(!Kr){if(Tr)throw new Error("multiple calls to 'initWasm()' detected.");if(Br)throw new Error("previous call to 'initWasm()' failed.");if(Tr=!0,dr())return new Promise((c,g)=>{xe?.terminate(),Sa().then(([v,k])=>{try{xe=k,xe.onerror=B=>g(B),xe.onmessage=Xi,xi=[c,g];let E={type:"init-wasm",in:se};if(!E.in.wasm.wasmPaths&&v){let B=li();B&&(E.in.wasm.wasmPaths=B)}xe.postMessage(E),Zr=v}catch(E){g(E)}},g)});try{await gi(se.wasm),await Gi(se),Kr=!0}catch(c){throw Br=!0,c}finally{Tr=!1}}},Yi=async c=>{if(dr())return Er(),new Promise((g,v)=>{pr("init-ep",[g,v]);let k={type:"init-ep",in:{epName:c,env:se}};xe.postMessage(k)});await Wi(se,c)},Ua=async c=>dr()?(Er(),new Promise((g,v)=>{pr("copy-from",[g,v]);let k={type:"copy-from",in:{buffer:c}};xe.postMessage(k,[c.buffer])})):Le(c),Na=async(c,g)=>{if(dr()){if(g?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Er(),new Promise((v,k)=>{pr("create",[v,k]);let E={type:"create",in:{model:c,options:{...g}}},B=[];c instanceof Uint8Array&&B.push(c.buffer),xe.postMessage(E,B)})}else return tr(c,g)},$n=async c=>{if(dr())return Er(),new Promise((g,v)=>{pr("release",[g,v]);let k={type:"release",in:c};xe.postMessage(k)});Ki(c)},Xr=async(c,g,v,k,E,B)=>{if(dr()){if(v.some(z=>z[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(E.some(z=>z))throw new Error("pre-allocated output tensor is not supported for proxy.");return Er(),new Promise((z,I)=>{pr("run",[z,I]);let M=v,K={type:"run",in:{sessionId:c,inputIndices:g,inputs:M,outputIndices:k,options:B}};xe.postMessage(K,Zi(M))})}else return N(c,g,v,k,E,B)},La=async c=>{if(dr())return Er(),new Promise((g,v)=>{pr("end-profiling",[g,v]);let k={type:"end-profiling",in:c};xe.postMessage(k)});Hr(c)}}),Fa,Ji,ea,ta=S(()=>{gt(),Va(),Ee(),si(),Ba(),Fa=(c,g)=>{switch(c.location){case"cpu":return[c.type,c.dims,c.data,"cpu"];case"gpu-buffer":return[c.type,c.dims,{gpuBuffer:c.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[c.type,c.dims,{mlTensor:c.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${c.location} for ${g()}`)}},Ji=c=>{switch(c[3]){case"cpu":return new Xe(c[0],c[2],c[1]);case"gpu-buffer":{let g=c[0];if(!_i(g))throw new Error(`not supported data type: ${g} for deserializing GPU tensor`);let{gpuBuffer:v,download:k,dispose:E}=c[2];return Xe.fromGpuBuffer(v,{dataType:g,dims:c[1],download:k,dispose:E})}case"ml-tensor":{let g=c[0];if(!vi(g))throw new Error(`not supported data type: ${g} for deserializing MLTensor tensor`);let{mlTensor:v,download:k,dispose:E}=c[2];return Xe.fromMLTensor(v,{dataType:g,dims:c[1],download:k,dispose:E})}default:throw new Error(`invalid data location: ${c[3]}`)}},ea=class{async fetchModelAndCopyToWasmMemory(c){return Ua(await $i(c))}async loadModel(c,g){dt();let v;typeof c=="string"?v=await this.fetchModelAndCopyToWasmMemory(c):v=c,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Na(v,g),pt()}async dispose(){return $n(this.sessionId)}async run(c,g,v){dt();let k=[],E=[];Object.entries(c).forEach(j=>{let L=j[0],ge=j[1],O=this.inputNames.indexOf(L);if(O===-1)throw new Error(`invalid input '${L}'`);k.push(ge),E.push(O)});let B=[],z=[];Object.entries(g).forEach(j=>{let L=j[0],ge=j[1],O=this.outputNames.indexOf(L);if(O===-1)throw new Error(`invalid output '${L}'`);B.push(ge),z.push(O)});let I=k.map((j,L)=>Fa(j,()=>`input "${this.inputNames[E[L]]}"`)),M=B.map((j,L)=>j?Fa(j,()=>`output "${this.outputNames[z[L]]}"`):null),K=await Xr(this.sessionId,E,I,z,M,v),te={};for(let j=0;j<K.length;j++)te[this.outputNames[z[j]]]=B[j]??Ji(K[j]);return pt(),te}startProfiling(){}endProfiling(){La(this.sessionId)}}}),Ti={};W(Ti,{OnnxruntimeWebAssemblyBackend:()=>ia,initializeFlags:()=>ra,wasmBackend:()=>aa});var ra,ia,aa,qa=S(()=>{gt(),Va(),ta(),ra=()=>{(typeof se.wasm.initTimeout!="number"||se.wasm.initTimeout<0)&&(se.wasm.initTimeout=0);let c=se.wasm.simd;if(typeof c!="boolean"&&c!==void 0&&c!=="fixed"&&c!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${c}". Reset it to \`false\` and ignore SIMD feature checking.`),se.wasm.simd=!1),typeof se.wasm.proxy!="boolean"&&(se.wasm.proxy=!1),typeof se.wasm.trace!="boolean"&&(se.wasm.trace=!1),typeof se.wasm.numThreads!="number"||!Number.isInteger(se.wasm.numThreads)||se.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)se.wasm.numThreads=1;else{let g=typeof navigator>"u"?q("node:os").cpus().length:navigator.hardwareConcurrency;se.wasm.numThreads=Math.min(4,Math.ceil((g||1)/2))}},ia=class{async init(c){ra(),await Qi(),await Yi(c)}async createInferenceSessionHandler(c,g){let v=new ea;return await v.loadModel(c,g),v}},aa=new ia}),Ga={};W(Ga,{InferenceSession:()=>Bt,TRACE:()=>Ye,TRACE_EVENT_BEGIN:()=>ot,TRACE_EVENT_END:()=>ut,TRACE_FUNC_BEGIN:()=>dt,TRACE_FUNC_END:()=>pt,Tensor:()=>Xe,default:()=>ts,env:()=>se,registerBackend:()=>ae}),gt(),gt(),gt();var xn="1.27.0",ts=jr;{let c=(qa(),pe(Ti)).wasmBackend;ae("cpu",c,10),ae("wasm",c,10)}return Object.defineProperty(se.versions,"web",{value:xn,enumerable:!0}),pe(Ga)})();_.exports=R})(yo)),yo.exports}var Fh;function Hm(){return Fh||(Fh=1,(function(_){var A=Vr&&Vr.__createBinding||(Object.create?(function(ve,Ce,me,he){he===void 0&&(he=me);var je=Object.getOwnPropertyDescriptor(Ce,me);(!je||("get"in je?!Ce.__esModule:je.writable||je.configurable))&&(je={enumerable:!0,get:function(){return Ce[me]}}),Object.defineProperty(ve,he,je)}):(function(ve,Ce,me,he){he===void 0&&(he=me),ve[he]=Ce[me]})),R=Vr&&Vr.__setModuleDefault||(Object.create?(function(ve,Ce){Object.defineProperty(ve,"default",{enumerable:!0,value:Ce})}):function(ve,Ce){ve.default=Ce}),V=Vr&&Vr.__importStar||function(ve){if(ve&&ve.__esModule)return ve;var Ce={};if(ve!=null)for(var me in ve)me!=="default"&&Object.prototype.hasOwnProperty.call(ve,me)&&A(Ce,ve,me);return R(Ce,ve),Ce};Object.defineProperty(_,"__esModule",{value:!0}),_.MicVAD=_.getDefaultRealTimeVADOptions=_.ort=_.DEFAULT_MODEL=void 0;const Q=V(jm()),Y=Ao(),U=Oo(),q=vn(),S=Qn(),W=nf(),F=sf();_.DEFAULT_MODEL="legacy",_.ort=Q;const pe="vad.worklet.bundle.min.js",ue="silero_vad_v5.onnx",le="silero_vad_legacy.onnx",ae=ve=>({...U.defaultFrameProcessorOptions,onFrameProcessed:()=>{},onVADMisfire:()=>{q.log.debug("VAD misfire")},onSpeechStart:()=>{q.log.debug("Detected speech start")},onSpeechEnd:()=>{q.log.debug("Detected speech end")},onSpeechRealStart:()=>{q.log.debug("Detected real speech start")},baseAssetPath:"./",onnxWASMBasePath:"./",model:ve,workletOptions:{},getStream:async()=>await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}}),pauseStream:async Ce=>{Ce.getTracks().forEach(me=>{me.stop()})},resumeStream:async()=>await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,autoGainControl:!0,noiseSuppression:!0}}),ortConfig:Ce=>{Ce.env.logLevel="error"},startOnLoad:!0,processorType:"auto"});_.getDefaultRealTimeVADOptions=ae;const re=ve=>"audioWorklet"in ve&&typeof AudioWorkletNode=="function"?"AudioWorklet":"ScriptProcessor";async function _e(ve,Ce,me,he,je){await me.audioWorklet.addModule(ve),Ce.processorOptions={...Ce.processorOptions??{},frameSamples:he};const se=new AudioWorkletNode(me,"vad-helper-worklet",Ce);return se.port.onmessage=async Ge=>{if(Ge.data?.message===S.Message.AudioFrame){let et=Ge.data.data;et instanceof ArrayBuffer||(et=new ArrayBuffer(Ge.data.data.byteLength),new Uint8Array(et).set(new Uint8Array(Ge.data.data)));const rt=new Float32Array(et);await je(rt)}},se}async function qe(ve,Ce,me){const he=new F.Resampler({nativeSampleRate:ve.sampleRate,targetSampleRate:16e3,targetFrameSize:Ce??480});q.log.debug("using script processor");const se=ve.createScriptProcessor(4096,1,1);let Ge=!1;return se.onaudioprocess=async et=>{if(!Ge){Ge=!0;try{const rt=et.inputBuffer.getChannelData(0);if(et.outputBuffer.getChannelData(0).fill(0),he){const it=he.process(rt);for(const ft of it)await me(ft)}}catch(rt){console.error("Error processing audio:",rt)}finally{Ge=!1}}},se.connect(ve.destination),se}class Ze{constructor(Ce,me,he,je=!1,se=null,Ge=null,et=null,rt=null,st=null,it=null,ft="uninitialized",Yt=!1){this.options=Ce,this.frameProcessor=me,this.frameSamples=he,this.listening=je,this.errored=se,this._stream=Ge,this._audioContext=et,this._vadNode=rt,this._mediaStreamAudioSourceNode=st,this._audioProcessorAdapterType=it,this.initializationState=ft,this.ownsAudioContext=Yt,this.getAudioInstances=()=>{if(this._stream===null||this._audioContext===null||this._vadNode==null||this._mediaStreamAudioSourceNode==null)throw new Error("MicVAD has null stream, audio context, or processor adapter");return{stream:this._stream,audioContext:this._audioContext,vadNode:this._vadNode,mediaStreamAudioSourceNode:this._mediaStreamAudioSourceNode}},this.setErrored=Fe=>{this.initializationState="errored",this.errored=Fe},this.start=async()=>{switch(this.initializationState){case"uninitialized":{q.log.debug("initializing micVAD"),this.initializationState="initializing",this.frameProcessor.resume();try{this._stream=await this.options.getStream()}catch(Fe){throw Fe instanceof Error?this.setErrored(Fe.message):this.setErrored(String(Fe)),Fe}if(this.options.audioContext||(this._audioContext=new AudioContext,this.ownsAudioContext=!0),!this._audioContext)throw this.setErrored("Audio context is null"),Error("Audio context is null");switch(this._audioProcessorAdapterType=this.options.processorType=="auto"?re(this._audioContext):this.options.processorType,this._audioProcessorAdapterType){case"AudioWorklet":this._vadNode=await _e(this.options.baseAssetPath+pe,this.options.workletOptions??{},this._audioContext,this.frameSamples,this.processFrame);break;case"ScriptProcessor":this._vadNode=await qe(this._audioContext,this.frameSamples,this.processFrame);break;default:throw new Error(`Unsupported audio processor adapter type: ${this._audioProcessorAdapterType}`)}this._mediaStreamAudioSourceNode=new MediaStreamAudioSourceNode(this._audioContext,{mediaStream:this._stream}),this._mediaStreamAudioSourceNode.connect(this._vadNode),q.log.debug("started micVAD"),this.listening=!0,this.initializationState="initialized";break}case"initializing":{q.log.warn("start called while initializing");break}case"initialized":{if(this.listening)return;this.listening=!0,this.frameProcessor.resume();const{stream:Fe,audioContext:Rt,vadNode:Jt}=this.getAudioInstances();this._stream=await this.options.resumeStream(Fe);const Ct=new MediaStreamAudioSourceNode(Rt,{mediaStream:this._stream});this._mediaStreamAudioSourceNode=Ct,Ct.connect(Jt);break}case"destroyed":{q.log.warn("start called after destroyed");break}case"errored":{q.log.error("start called after errored");break}default:{q.log.warn("weird initialization state");break}}},this.pause=async()=>{if(!this.listening)return;this.listening=!1;const{stream:Fe,mediaStreamAudioSourceNode:Rt}=this.getAudioInstances();await this.options.pauseStream(Fe),Rt.disconnect(),this.frameProcessor.pause(this.handleFrameProcessorEvent)},this.destroy=()=>{q.log.debug("destroy called"),this.initializationState="destroyed";const{vadNode:Fe}=this.getAudioInstances();Fe instanceof AudioWorkletNode&&Fe.port.postMessage(S.Message.SpeechStop),this.listening&&this.pause(),this.ownsAudioContext&&this._audioContext?.close()},this.setOptions=Fe=>{this.frameProcessor.setOptions(Fe)},this.processFrame=async Fe=>{await this.frameProcessor.process(Fe,this.handleFrameProcessorEvent)},this.handleFrameProcessorEvent=Fe=>{switch(Fe.msg){case S.Message.FrameProcessed:this.options.onFrameProcessed(Fe.probs,Fe.frame);break;case S.Message.SpeechStart:this.options.onSpeechStart();break;case S.Message.SpeechRealStart:this.options.onSpeechRealStart();break;case S.Message.VADMisfire:this.options.onVADMisfire();break;case S.Message.SpeechEnd:this.options.onSpeechEnd(Fe.audio);break}}}static async new(Ce={}){const me={...(0,_.getDefaultRealTimeVADOptions)(Ce.model??_.DEFAULT_MODEL),...Ce};(0,U.validateOptions)(me),_.ort.env.wasm.wasmPaths=me.onnxWASMBasePath,me.ortConfig!==void 0&&me.ortConfig(_.ort);const he=me.model==="v5"?ue:le,je=me.baseAssetPath+he,se=me.model==="v5"?W.SileroV5.new:W.SileroLegacy.new;let Ge;try{Ge=await se(_.ort,()=>(0,Y.defaultModelFetcher)(je))}catch(ft){throw console.error(`Encountered an error while loading model file ${je}`),ft}const et=me.model==="v5"?512:1536,rt=et/16,st=new U.FrameProcessor(Ge.process,Ge.reset_state,{positiveSpeechThreshold:me.positiveSpeechThreshold,negativeSpeechThreshold:me.negativeSpeechThreshold,redemptionMs:me.redemptionMs,preSpeechPadMs:me.preSpeechPadMs,minSpeechMs:me.minSpeechMs,submitUserSpeechOnPause:me.submitUserSpeechOnPause},rt),it=new Ze(me,st,et);if(me.startOnLoad)try{await it.start()}catch(ft){throw console.error("Error starting micVad",ft),ft}return it}}_.MicVAD=Ze})(Vr)),Vr}var qh;function Gh(){return qh||(qh=1,(function(_){Object.defineProperty(_,"__esModule",{value:!0}),_.getDefaultRealTimeVADOptions=_.MicVAD=_.DEFAULT_MODEL=_.utils=_.NonRealTimeVAD=_.Message=_.FrameProcessor=_.defaultModelFetcher=_.baseAssetPath=void 0;var A=tf();Object.defineProperty(_,"baseAssetPath",{enumerable:!0,get:function(){return A.baseAssetPath}});var R=Ao();Object.defineProperty(_,"defaultModelFetcher",{enumerable:!0,get:function(){return R.defaultModelFetcher}});var V=Oo();Object.defineProperty(_,"FrameProcessor",{enumerable:!0,get:function(){return V.FrameProcessor}});var Q=Qn();Object.defineProperty(_,"Message",{enumerable:!0,get:function(){return Q.Message}});var Y=Gm();Object.defineProperty(_,"NonRealTimeVAD",{enumerable:!0,get:function(){return Y.NonRealTimeVAD}});const U=Wm();_.utils={audioFileToArray:U.audioFileToArray,minFramesForTargetMS:U.minFramesForTargetMS,arrayBufferToBase64:U.arrayBufferToBase64,encodeWAV:U.encodeWAV};var q=Hm();Object.defineProperty(_,"DEFAULT_MODEL",{enumerable:!0,get:function(){return q.DEFAULT_MODEL}}),Object.defineProperty(_,"MicVAD",{enumerable:!0,get:function(){return q.MicVAD}}),Object.defineProperty(_,"getDefaultRealTimeVADOptions",{enumerable:!0,get:function(){return q.getDefaultRealTimeVADOptions}})})(mo)),mo}var Wh;function Km(){return Wh||(Wh=1,(function(_){Object.defineProperty(_,"__esModule",{value:!0}),_.useMicVAD=_.getDefaultReactRealTimeVADOptions=_.utils=void 0;const A=Gh(),R=sm();var V=Gh();Object.defineProperty(_,"utils",{enumerable:!0,get:function(){return V.utils}});const Q={userSpeakingThreshold:.6},Y=S=>({...(0,A.getDefaultRealTimeVADOptions)(S),...Q});_.getDefaultReactRealTimeVADOptions=Y;function U(S){const W=S.model??A.DEFAULT_MODEL,F={...(0,_.getDefaultReactRealTimeVADOptions)(W),...S},pe={userSpeakingThreshold:F.userSpeakingThreshold},ue={positiveSpeechThreshold:F.positiveSpeechThreshold,negativeSpeechThreshold:F.negativeSpeechThreshold,redemptionMs:F.redemptionMs,preSpeechPadMs:F.preSpeechPadMs,minSpeechMs:F.minSpeechMs,submitUserSpeechOnPause:F.submitUserSpeechOnPause,onFrameProcessed:F.onFrameProcessed,onVADMisfire:F.onVADMisfire,onSpeechStart:F.onSpeechStart,onSpeechEnd:F.onSpeechEnd,onSpeechRealStart:F.onSpeechRealStart,baseAssetPath:F.baseAssetPath,onnxWASMBasePath:F.onnxWASMBasePath,model:F.model,workletOptions:F.workletOptions,getStream:F.getStream,pauseStream:F.pauseStream,resumeStream:F.resumeStream,startOnLoad:F.startOnLoad,processorType:F.processorType};return F.ortConfig&&(ue.ortConfig=F.ortConfig),F.audioContext&&(ue.audioContext=F.audioContext),[pe,ue]}function q(S){const[W,F]=U(S),pe=S.model??A.DEFAULT_MODEL,[ue,le]=(0,R.useState)(!1),[ae,re]=(0,R.useState)(!0),[_e,qe]=(0,R.useState)(!1),[Ze,ve]=(0,R.useState)(!1),[Ce,me]=(0,R.useState)(null),he=(0,R.useRef)(F.onFrameProcessed),je=(0,R.useRef)(F.onSpeechEnd),se=(0,R.useRef)(F.onSpeechStart),Ge=(0,R.useRef)(F.onSpeechRealStart),et=(0,R.useRef)(F.onVADMisfire),rt=(0,R.useRef)(F.getStream);(0,R.useEffect)(()=>{he.current=F.onFrameProcessed,je.current=F.onSpeechEnd,se.current=F.onSpeechStart,Ge.current=F.onSpeechRealStart,et.current=F.onVADMisfire},[F.onFrameProcessed,F.onSpeechEnd,F.onSpeechStart,F.onSpeechRealStart,F.onVADMisfire]),(0,R.useEffect)(()=>{rt.current=F.getStream},[F.getStream]);const st=F.getStream.toString();(0,R.useEffect)(()=>{let Fe=null,Rt=!1;return(async()=>{try{re(!0),qe(!1);const Ct={...F,onFrameProcessed:(lt,zt)=>{const At=lt.isSpeech>W.userSpeakingThreshold;le(At),he.current(lt,zt)},onSpeechEnd:lt=>{je.current(lt)},onSpeechStart:()=>{se.current()},onSpeechRealStart:()=>{Ge.current()},onVADMisfire:()=>{et.current()},getStream:()=>rt.current()};if(Fe=await A.MicVAD.new(Ct),Rt){Fe.destroy();return}me(Fe),re(!1),F.startOnLoad&&(Fe.start(),ve(!0))}catch(Ct){re(!1),Ct instanceof Error?qe(Ct.message):qe(String(Ct))}})().catch(()=>{}),function(){Rt=!0,Fe&&Fe.destroy(),!ae&&!_e&&ve(!1)}},[st,pe]);const it=(0,R.useCallback)(()=>{!ae&&!_e&&(Ce?.pause(),ve(!1))},[ae,_e,Ce]),ft=(0,R.useCallback)(()=>{!ae&&!_e&&(Ce?.start(),ve(!0))},[ae,_e,Ce]),Yt=(0,R.useCallback)(()=>{Ze?it():ft()},[Ze,it,ft]);return{listening:Ze,errored:_e,loading:ae,userSpeaking:ue,pause:it,start:ft,toggle:Yt}}_.useMicVAD=q})(fo)),fo}var bo=Km();function Zm({bgColor:_,pColor:A,iconColor:R,onVoiceSend:V,handleInterrupt:Q}){const[Y,U]=vt.useState(!1),[q,S]=vt.useState(null);vt.useRef("");const W=ef(),F=bo.useMicVAD({model:"v5",startOnLoad:!1,positiveSpeechThreshold:.6,negativeSpeechThreshold:.3,minSpeechFrames:1,frameSamples:512,onSpeechStart:()=>{console.log("Speech started"),Q?.()},onSpeechEnd:async re=>{if(console.log("Speech ended"),re.length>0){const _e=bo.utils.encodeWAV(re),qe=bo.utils.arrayBufferToBase64(_e);pe(qe)}}});function pe(re){q&&q.readyState===WebSocket.OPEN&&q.send(JSON.stringify({data:re,languageCode:W.code}))}const ue=()=>{{console.error("WebSocket URL is not defined");return}},le=async()=>{try{const re=await navigator.permissions.query({name:"microphone"});return re.state==="granted"?!0:re.state==="prompt"?((await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(qe=>qe.stop()),!0):(alert("Microphone access denied. Please enable it from your browser settings."),!1)}catch(re){return console.error("Error accessing microphone:",re),!1}},ae=async()=>{await le()&&(Y?(q&&q.close(),F.pause(),U(!1)):(ue(),F.start(),U(!0)))};return Ie.jsx("div",{style:{backgroundColor:_,outlineColor:A,color:R},role:"button",tabIndex:0,className:`voice-recorder-icon ${Y?"recording":""}`,onClick:ae,children:cm})}function Xm({design:_,language:A,onSend:R,onChangeLanguage:V,promisesArray:Q,onVoiceSend:Y,clearChat:U,activateVoiceBot:q}){const{placeholder:S="Type your message...",pColor:W,bgColor:F,secBgColor:pe,iconColor:ue,multiLanguageChat:le,translateLanguages:ae}=_||{};let re=_||{};re=[ef()];const[qe,Ze]=vt.useState(""),ve=vt.useRef("");vt.useEffect(()=>{U&&(ve.current="")},[U]);const Ce=()=>{!R||!qe?.trim()||(R({message:qe.trim()}),Ze(""))},me=se=>{se.keyCode===13&&Ce()},he=vt.useCallback(se=>{const Ge=se.currentTarget.value;Ze(Ge)},[]);function je(){Q&&Q.length>0&&Q.map(se=>{se(),Q.pop(se)})}return Ie.jsxs("div",{className:"message-block",children:[le&&Ie.jsx("div",{className:"language-picker-wrapper",children:Ie.jsx(Nm,{pColor:W,value:A,onChange:V,translateLanguages:ae,defaultSelectedLanguage:re})}),Ie.jsx("input",{style:{borderColor:pe,fontSize:13,fontFamily:"inherit"},value:qe,placeholder:S,disabled:!R,onChange:he,onKeyDown:me,id:"messageInputBox"}),Ie.jsxs("div",{className:"action-buttons",children:[q&&Ie.jsx(Zm,{bgColor:F,pColor:W,iconColor:ue,onVoiceSend:Y,handleInterrupt:je}),Ie.jsx("div",{style:{backgroundColor:F,outlineColor:W,color:ue},role:"button",tabIndex:0,className:"send-icon",onClick:Ce,onKeyDown:me,id:"msgSendButton",children:hm})]})]})}function mg({botDesign:_,messages:A,showTime:R,displayComponents:V,disabledMessage:Q,optionsRenderer:Y,onUserMessage:U,onHistoryChange:q,onClear:S,onHide:W,onCallback:F,onLinkClick:pe,hostOrigin:ue,language:le,setLanguage:ae,fullScreen:re,isCustomChatWindow:_e,activateVoiceBot:qe}){const[Ze,ve]=vt.useState([]),[Ce,me]=vt.useState(!1),he=vt.useRef({}),je=vt.useRef([]),se=vt.useRef(null),Ge=vt.useRef(null),et=vt.useRef(!1),rt=vt.useRef([]);he.current.history=Ze,he.current.onUserMessage=U,he.current.onHistoryChange=q;const{window:st={},header:it,body:ft,composer:Yt}=_||{},Fe=st?.chatWindowType||_?.chatWindowType||"default",Rt={width:st.width,height:st.height,marginRight:st.spacingCorner,marginLeft:st.spacingCorner,fontFamily:st.fontFamily,bottom:_e?"0px":(parseFloat(st.height)||500)+(parseFloat(st.spacingBottom)||0)+"px"},Jt=vt.useCallback(async At=>{const{history:Mt,onHistoryChange:Vt,onUserMessage:ar}=he.current;let Ft=Mt.length;const Et=At.message||At;if(typeof Et=="string"){const We=[...Mt,{role:"user",type:"text",content:Et}];Ft=We.length,ve(We),Vt?.(We)}else Vt?.(Mt);me(!0),ar(Et).then(We=>{let Qe=[...he.current.history];Array.isArray(We)?Qe.splice(Ft,0,...We):Qe.splice(Ft,0,We);const Xe=Qe.length-1;Qe=Qe.filter((qt,Ye)=>!ch.includes(qt.type)||Ye===Xe),ve(Qe),Vt?.(Qe)}).finally(()=>{me(!1)})},[]),Ct=vt.useCallback(At=>{const{history:Mt,onHistoryChange:Vt,onUserMessage:ar}=he.current;let Ft=Mt.length;const Et=At.message;et.current&&(et.current=!1);function We(Qe,Xe){let qt,Ye=!1,er=!1;return{userPromises:new Promise((pt,ot)=>{qt=()=>{Ye||(er=!0,Ye=!0,se.current&&(se.current.pause(),se.current.currentTime=0,se.current=null),Ge.current&&(URL.revokeObjectURL(Ge.current),Ge.current=null),ot(new Error("Audio playback cancelled.")))},Qe.then(async ut=>{if(pt(!0),Ye)return;if(er){Ye=!0,ot(new Error("cancelled"));return}let Pt=[...he.current.history];Array.isArray(ut.data)?Pt.splice(Xe,0,...ut.data):Pt.splice(Xe,0,ut.data);const vr=ut.audioUri;if(vr){se.current&&(se.current.pause(),se.current=null),Ge.current&&(URL.revokeObjectURL(Ge.current),Ge.current=null),se.current=new Audio(vr);const Bt=se.current.play();Bt&&typeof Bt.then=="function"&&Bt.catch($r=>{console.log("Audio playback error:",$r),Ye||(Ye=!0,se.current=null,ot(new Error("Audio playback error.")))}),se.current.onended=()=>{Ye||(Ye=!0,At.resetData.current="",se.current=null,Ge.current&&(URL.revokeObjectURL(Ge.current),Ge.current=null),rt.current=[])},se.current.onerror=()=>{Ye||(Ye=!0,se.current=null,Ge.current&&(URL.revokeObjectURL(Ge.current),Ge.current=null),ot(new Error("Audio playback error.")))}}else{Ye||(Ye=!0,ot(new Error("Invalid audio buffer data.")));return}const Wr=Pt.length-1;Pt=Pt.filter((Bt,$r)=>!ch.includes(Bt.type)||$r===Wr),ve(Pt),Vt?.(Pt)}).catch(ut=>{Ye||(Ye=!0,ot(ut))}).finally(()=>{me(!1)})}),cancelPromises:qt}}if(typeof Et=="string")if(Et&&Et?.trim()===""){const Qe=[...Mt,{role:"user",type:"text",content:"Language not detected please try again"}];ve(Qe),Vt?.(Qe)}else{const Qe=[...Mt,{role:"user",type:"text",content:Et}];Ft=Qe.length,ve(Qe),Vt?.(Qe)}else Vt?.(Mt);try{if(Et&&Et.trim()!==""){me(!0),rt.current.push(Et);const{userPromises:Qe,cancelPromises:Xe}=We(rt.current.length===1?ar(Et,!0):ar(rt.current.join(" "),!0),Ft);return Qe.then(()=>{rt.current=[]}).catch(qt=>(console.log("Cancelled or error in userPromises",qt),!1)),console.log(rt.current.length,"inCompletedMessages"),je.current.push(Xe),!0}return!1}catch(Qe){console.log(Qe)}},[se,Ge]),lt=()=>{S&&S(),et.current=!0};vt.useEffect(()=>{ve(A||[])},[A]);const zt=vt.useMemo(()=>V?{...hh,...V}:hh,[V]);return Ie.jsx("div",{className:`${Fe==="default"?"default":"theme-one"}`,children:Ie.jsx("div",{className:`chat-container ${_e?"no-animation":""}`,style:Rt,children:Ie.jsxs("div",{className:`chat-window ${_e?"no-shadow":""}`,children:[!_e&&Ie.jsx(Dm,{design:it,onClear:lt,onHide:W,fullScreen:re}),Ie.jsx(om,{chatWindowType:Fe,design:ft,messages:Ze,displayComponents:zt,showTime:R,showLoader:Ce,optionsRenderer:Y,onSendMessage:U?Jt:void 0,onCallback:F,openLinksInSameTab:st.openLinksInSameTab,onLinkClick:pe,hostOrigin:ue}),Ie.jsx(Xm,{design:Yt,language:le,onSend:Q?void 0:Jt,onChangeLanguage:ae,promisesArray:je.current,onVoiceSend:Ct,clearChat:et.current,activateVoiceBot:qe}),Ie.jsx(Pm,{message:st.disclaimer,hideLivservBranding:st.hideLivservBranding,domainSettings:st?.domainSettings})]})})})}const Hn=[{value:"gpt-4o-mini",label:"GPT 4o Mini Latest (default)",description:"Current Latest Mini model of GPT 4o. Cheaper and faster than GPT 4o."},{value:"gpt-5.4-mini-2026-03-17",label:"gpt-5.4-mini",description:"5 times costly than GPT 4o mini"},{value:"gpt-5.4-nano-2026-03-17",label:"gpt-5.4-nano",description:"Cheapest model for simple high-volume tasks"},{value:"gpt-5-nano-2025-08-07",label:"gpt-5-nano",description:"Cheaper than GPT gpt-5-mini"},{value:"gpt-5-mini-2025-08-07",label:"gpt-5-mini",description:"Cheaper and faster than GPT 4o"},{value:"gpt-4.1-mini-2025-04-14",label:"gpt-4.1-mini",description:"3 times costly than GPT 4o."},{value:"gpt-4.1-nano-2025-04-14",label:"gpt-4.1-nano",description:"Cheaper and faster than GPT 4o"},{value:"gpt-4o-mini-2024-07-18",label:"GPT 4o Mini (July 2024)",description:"Mini model of GPT 4o. Cheaper and faster than GPT 4o."},{value:"gpt-4o",label:"GPT 4o Latest",description:"Latest model of GPT 4o. More capable, cheaper and faster than GPT 4 Turbo."},{value:"gpt-4o-2024-08-06",label:"GPT 4o (Aug 2024)",description:"May 2024 Release of GPT 4o. More capable, cheaper and faster than GPT 4 Turbo."},{value:"gpt-4",label:"GPT 4 Turbo",description:"Latest stable model of GPT 4. More capable, but is 5 times costly then 3.5 models."},{value:"gpt-4-1106-preview",label:"GPT 4 Latest Preview",description:"Latest preview model of GPT 4. Most capable model, but is 3 times costly then 3.5 models."},{value:"gpt-3.5-turbo-0125",label:"GPT 3.5 Latest Stable",description:"Latest stable model of GPT 3.5. More performant. Random minor inconsistency observed sometimes."},{value:"gpt-3.5-turbo-1106",label:"GPT 3.5 Latest Preview",description:"Latest preview model of GPT 3.5. This is more accurate than latest stable, but some times non responsive while on peek loads."}],jh=Hn.reduce((_,A)=>(_[A.value]=A,_),{});function Qm({value:_,hideDescription:A=!1,onChange:R,className:V,...Q}){const Y=Hn.map(W=>({label:W.label,value:W.value}));_&&!jh[_]&&Y.push({label:_,value:_});const U=jh[_]||Hn[0],q=_||Hn[0].value,S=W=>{R&&R(W)};return Ie.jsxs(Ie.Fragment,{children:[Ie.jsx(gm,{...Q,className:V||"w-full border border-gray-300 rounded px-2 py-2",value:q,options:Y,onChange:W=>S(W),showClear:!1,placeholder:"Select a model..."}),!A&&Ie.jsx("div",{className:"text-xs text-gray-600 mt-1",id:"bot-model-description",children:U.description})]})}function gg({message:_,isSuperUser:A,onReplay:R}){const{content:V,searchQuery:Q,passedDocIds:Y,index:U,model:q}=_,[S,W]=zr.useState([]),[F,pe]=zr.useState(q);zr.useEffect(()=>{(async()=>{const ae=await ym(Y);W(ae)})()},[Y]),zr.useEffect(()=>{pe(_.model)},[_]);const ue=ae=>W(re=>re.map(_e=>_e._id===ae._id?ae:_e)),le=vt.useCallback(ae=>pe(ae),[]);return Ie.jsxs("div",{className:"kb-docs-editor",children:[Ie.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[Ie.jsxs("div",{className:"flex items-center gap-2",children:[Ie.jsx("strong",{children:"Selected Bot:"}),Ie.jsx("div",{className:"min-w-[200px]",children:Ie.jsx(Qm,{value:F,hideDescription:!0,onChange:le})})]}),Ie.jsx(wm,{style:{marginLeft:8},variant:"contained",color:"primary",size:"medium",onClick:()=>R&&R(U,F),children:"Replay"})]}),Ie.jsxs("div",{className:"ellipsis",children:[Ie.jsx("strong",{children:"Message: "}),Ie.jsx("span",{title:V,children:V})]}),A&&Q&&Ie.jsxs("div",{className:"ellipsis",children:[Ie.jsx("strong",{children:"Search Query: "}),Ie.jsx("span",{children:Q})]}),Ie.jsx("div",{children:Ie.jsx(mm,{docsList:S,onUpdate:ue})})]})}export{Qm as B,mg as C,gg as K,fg as a,lg as b,pg as c,Qh as d,hg as e,ef as f,cg as g,dg as s};
