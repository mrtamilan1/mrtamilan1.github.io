(function(g,e){function f(bt,d){function bu(i){return bO.preferFlash&&X&&!bO.ignoreFlash&&bO.flash[i]!==e&&bO.flash[i]}function S(i){return function(k){var j=this._s;return !j||!j._a?null:i.call(this,k)}}this.setupOptions={url:bt||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1000,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,html5Test:/^(probably|maybe)$/i,preferFlash:!1,noSWFCache:!1,idPrefix:"sound"};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs\x3d"mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs\x3d"mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs\x3dvorbis"],required:!1},opus:{type:["audio/ogg; codecs\x3dopus","audio/opus"],required:!1},wav:{type:['audio/wav; codecs\x3d"1"',"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=d||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20131201";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var bN,bO=this,au=null,bT=null,bv,U=navigator.userAgent,Q=g.location.href.toString(),bW=document,ba,aw,u,bU,Z=[],b1=!1,b3=!1,R=!1,ab=!1,L=!1,b4,Y,bP,bw,av,I,M,N,bm,b,ay,bx,n,bz,D,O,bM,b5,at,q,P,C,bj,bL,t,ar,b6=null,bl=null,bn,B,bY,y,a,T,bp=!1,bd=!1,bh,s,bk,bV=0,bq=null,bb,A=[],br,W=null,by,l,bs,aq,bf,v,aa,V,bg=Array.prototype.slice,E=!1,bZ,X,bQ,be,F,w,p=0,b0=U.match(/(ipad|iphone|ipod)/i),bi=U.match(/android/i),G=U.match(/msie/i),x=U.match(/webkit/i),bR=U.match(/safari/i)&&!U.match(/chrome/i),ax=U.match(/opera/i),c=U.match(/(mobile|pre\/|xoom)/i)||b0||bi,H=!Q.match(/usehtml5audio/i)&&!Q.match(/sm2\-ignorebadua/i)&&bR&&!U.match(/silk/i)&&U.match(/OS X 10_6_([3-7])/i),a0=bW.hasFocus!==e?bW.hasFocus():null,az=bR&&(bW.hasFocus===e||!bW.hasFocus()),z=!az,bo=/(mp3|mp4|mpa|m4a|m4b)/i,r=bW.location?bW.location.protocol.match(/http/i):null,bX=!r?"http://":"",bc=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,m="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),b2=RegExp("\\.("+m.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!r;var K;try{K=Audio!==e&&(ax&&opera!==e&&10>opera.version()?new Audio(null):new Audio).canPlayType!==e}catch(bS){K=!1}this.hasHTML5=K;this.setup=function(j){var i=!bO.url;j!==e&&R&&W&&bO.ok();bP(j);j&&(i&&(b5&&j.url!==e)&&bO.beginDelayedInit(),!b5&&(j.url!==e&&"complete"===bW.readyState)&&setTimeout(O,1));return bO};this.supported=this.ok=function(){return W?R&&!ab:bO.useHTML5Audio&&bO.hasHTML5};this.getMovie=function(i){return bv(i)||bW[i]||g[i]};this.createSound=function(j,o){function k(){i=y(i);bO.sounds[i.id]=new bN(i);bO.soundIDs.push(i.id);return bO.sounds[i.id]}var i,J=null;if(!R||!bO.ok()){return !1}o!==e&&(j={id:j,url:o});i=Y(j);i.url=bb(i.url);void 0===i.id&&(i.id=bO.setupOptions.idPrefix+p++);if(T(i.id,!0)){return bO.sounds[i.id]}if(l(i)){J=k(),J._setup_html5(i)}else{if(bO.html5Only||bO.html5.usingFlash&&i.url&&i.url.match(/data\:/i)){return k()}8<bU&&null===i.isMovieStar&&(i.isMovieStar=!(!i.serverURL&&!(i.type&&i.type.match(bc)||i.url&&i.url.match(b2))));i=a(i,void 0);J=k();8===bU?bT._createSound(i.id,i.loops||1,i.usePolicyFile):(bT._createSound(i.id,i.url,i.usePeakData,i.useWaveformData,i.useEQData,i.isMovieStar,i.isMovieStar?i.bufferTime:!1,i.loops||1,i.serverURL,i.duration||null,i.autoPlay,!0,i.autoLoad,i.usePolicyFile),i.serverURL||(J.connected=!0,i.onconnect&&i.onconnect.apply(J)));!i.serverURL&&(i.autoLoad||i.autoPlay)&&J.load(i)}!i.serverURL&&i.autoPlay&&J.play();return J};this.destroySound=function(j,o){if(!T(j)){return !1}var k=bO.sounds[j],i;k._iO={};k.stop();k.unload();for(i=0;i<bO.soundIDs.length;i++){if(bO.soundIDs[i]===j){bO.soundIDs.splice(i,1);break}}o||k.destruct(!0);delete bO.sounds[j];return !0};this.load=function(j,i){return !T(j)?!1:bO.sounds[j].load(i)};this.unload=function(i){return !T(i)?!1:bO.sounds[i].unload()};this.onposition=this.onPosition=function(j,o,k,i){return !T(j)?!1:bO.sounds[j].onposition(o,k,i)};this.clearOnPosition=function(j,i,k){return !T(j)?!1:bO.sounds[j].clearOnPosition(i,k)};this.start=this.play=function(j,o){var k=null,i=o&&!(o instanceof Object);if(!R||!bO.ok()){return !1}if(T(j,i)){i&&(o={url:o})}else{if(!i){return !1}i&&(o={url:o});o&&o.url&&(o.id=j,k=bO.createSound(o).play())}null===k&&(k=bO.sounds[j].play(o));return k};this.setPosition=function(j,i){return !T(j)?!1:bO.sounds[j].setPosition(i)};this.stop=function(i){return !T(i)?!1:bO.sounds[i].stop()};this.stopAll=function(){for(var i in bO.sounds){bO.sounds.hasOwnProperty(i)&&bO.sounds[i].stop()}};this.pause=function(i){return !T(i)?!1:bO.sounds[i].pause()};this.pauseAll=function(){var i;for(i=bO.soundIDs.length-1;0<=i;i--){bO.sounds[bO.soundIDs[i]].pause()}};this.resume=function(i){return !T(i)?!1:bO.sounds[i].resume()};this.resumeAll=function(){var i;for(i=bO.soundIDs.length-1;0<=i;i--){bO.sounds[bO.soundIDs[i]].resume()}};this.togglePause=function(i){return !T(i)?!1:bO.sounds[i].togglePause()};this.setPan=function(j,i){return !T(j)?!1:bO.sounds[j].setPan(i)};this.setVolume=function(j,i){return !T(j)?!1:bO.sounds[j].setVolume(i)};this.mute=function(j){var i=0;j instanceof String&&(j=null);if(j){return !T(j)?!1:bO.sounds[j].mute()}for(i=bO.soundIDs.length-1;0<=i;i--){bO.sounds[bO.soundIDs[i]].mute()}return bO.muted=!0};this.muteAll=function(){bO.mute()};this.unmute=function(i){i instanceof String&&(i=null);if(i){return !T(i)?!1:bO.sounds[i].unmute()}for(i=bO.soundIDs.length-1;0<=i;i--){bO.sounds[bO.soundIDs[i]].unmute()}bO.muted=!1;return !0};this.unmuteAll=function(){bO.unmute()};this.toggleMute=function(i){return !T(i)?!1:bO.sounds[i].toggleMute()};this.getMemoryUse=function(){var i=0;bT&&8!==bU&&(i=parseInt(bT._getMemoryUse(),10));return i};this.disable=function(j){var i;j===e&&(j=!1);if(ab){return !1}ab=!0;for(i=bO.soundIDs.length-1;0<=i;i--){bL(bO.sounds[bO.soundIDs[i]])}b4(j);V.remove(g,"load",M);return !0};this.canPlayMIME=function(j){var i;bO.hasHTML5&&(i=bs({type:j}));!i&&W&&(i=j&&bO.ok()?!!(8<bU&&j.match(bc)||j.match(bO.mimePattern)):null);return i};this.canPlayURL=function(j){var i;bO.hasHTML5&&(i=bs({url:j}));!i&&W&&(i=j&&bO.ok()?!!j.match(bO.filePattern):null);return i};this.canPlayLink=function(i){return i.type!==e&&i.type&&bO.canPlayMIME(i.type)?!0:bO.canPlayURL(i.href)};this.getSoundById=function(j,i){return !j?null:bO.sounds[j]};this.onready=function(j,i){if("function"===typeof j){i||(i=g),av("onready",j,i),I()}else{throw bn("needFunction","onready")}return !0};this.ontimeout=function(j,i){if("function"===typeof j){i||(i=g),av("ontimeout",j,i),I({type:"ontimeout"})}else{throw bn("needFunction","ontimeout")}return !0};this._wD=this._writeDebug=function(j,i){return !0};this._debug=function(){};this.reboot=function(j,o){var k,i,J;for(k=bO.soundIDs.length-1;0<=k;k--){bO.sounds[bO.soundIDs[k]].destruct()}if(bT){try{G&&(bl=bT.innerHTML),b6=bT.parentNode.removeChild(bT)}catch(ac){}}bl=b6=W=bT=null;bO.enabled=b5=R=bp=bd=b1=b3=ab=E=bO.swfLoaded=!1;bO.soundIDs=[];bO.sounds={};p=0;if(j){Z=[]}else{for(k in Z){if(Z.hasOwnProperty(k)){i=0;for(J=Z[k].length;i<J;i++){Z[k][i].fired=!1}}}}bO.html5={usingFlash:null};bO.flash={};bO.html5Only=!1;bO.ignoreFlash=!1;g.setTimeout(function(){D();o||bO.beginDelayedInit()},20);return bO};this.reset=function(){return bO.reboot(!0,!0)};this.getMoviePercent=function(){return bT&&"PercentLoaded" in bT?bT.PercentLoaded():null};this.beginDelayedInit=function(){L=!0;O();setTimeout(function(){if(bd){return !1}q();bz();return bd=!0},20);N()};this.destruct=function(){bO.disable(!0)};bN=function(al){var o,k,ah=this,J,am,aj,ai,j,ad,ae=!1,ac=[],af=0,ak,an,ag=null,i;k=o=null;this.sID=this.id=al.id;this.url=al.url;this._iO=this.instanceOptions=this.options=Y(al);this.pan=this.options.pan;this.volume=this.options.volume;this.isHTML5=!1;this._a=null;i=this.url?!1:!0;this.id3={};this._debug=function(){};this.load=function(aB){var ap=null,ao;aB!==e?ah._iO=Y(aB,ah.options):(aB=ah.options,ah._iO=aB,ag&&ag!==ah.url&&(ah._iO.url=ah.url,ah.url=null));ah._iO.url||(ah._iO.url=ah.url);ah._iO.url=bb(ah._iO.url);ao=ah.instanceOptions=ah._iO;if(!ao.url&&!ah.url){return ah}if(ao.url===ah.url&&0!==ah.readyState&&2!==ah.readyState){return 3===ah.readyState&&ao.onload&&w(ah,function(){ao.onload.apply(ah,[!!ah.duration])}),ah}ah.loaded=!1;ah.readyState=1;ah.playState=0;ah.id3={};if(l(ao)){ap=ah._setup_html5(ao),ap._called_load||(ah._html5_canplay=!1,ah.url!==ao.url&&(ah._a.src=ao.url,ah.setPosition(0)),ah._a.autobuffer="auto",ah._a.preload="auto",ah._a._called_load=!0)}else{if(bO.html5Only||ah._iO.url&&ah._iO.url.match(/data\:/i)){return ah}try{ah.isHTML5=!1,ah._iO=a(y(ao)),ao=ah._iO,8===bU?bT._load(ah.id,ao.url,ao.stream,ao.autoPlay,ao.usePolicyFile):bT._load(ah.id,ao.url,!!ao.stream,!!ao.autoPlay,ao.loops||1,!!ao.autoLoad,ao.usePolicyFile)}catch(aA){P({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}}ah.url=ao.url;return ah};this.unload=function(){0!==ah.readyState&&(ah.isHTML5?(ai(),ah._a&&(ah._a.pause(),ag=bf(ah._a))):8===bU?bT._unload(ah.id,"about:blank"):bT._unload(ah.id),J());return ah};this.destruct=function(ao){ah.isHTML5?(ai(),ah._a&&(ah._a.pause(),bf(ah._a),E||aj(),ah._a._s=null,ah._a=null)):(ah._iO.onfailure=null,bT._destroySound(ah.id));ao||bO.destroySound(ah.id,!0)};this.start=this.play=function(aE,ap){var ao,aA,aC,aB,aD;aA=!0;aA=null;ap=ap===e?!0:ap;aE||(aE={});ah.url&&(ah._iO.url=ah.url);ah._iO=Y(ah._iO,ah.options);ah._iO=Y(aE,ah._iO);ah._iO.url=bb(ah._iO.url);ah.instanceOptions=ah._iO;if(!ah.isHTML5&&ah._iO.serverURL&&!ah.connected){return ah.getAutoPlay()||ah.setAutoPlay(!0),ah}l(ah._iO)&&(ah._setup_html5(ah._iO),j());1===ah.playState&&!ah.paused&&(ao=ah._iO.multiShot,ao||(ah.isHTML5&&ah.setPosition(ah._iO.position),aA=ah));if(null!==aA){return aA}aE.url&&aE.url!==ah.url&&(!ah.readyState&&!ah.isHTML5&&8===bU&&i?i=!1:ah.load(ah._iO));ah.loaded||(0===ah.readyState?(!ah.isHTML5&&!bO.html5Only?(ah._iO.autoPlay=!0,ah.load(ah._iO)):ah.isHTML5?ah.load(ah._iO):aA=ah,ah.instanceOptions=ah._iO):2===ah.readyState&&(aA=ah));if(null!==aA){return aA}!ah.isHTML5&&(9===bU&&0<ah.position&&ah.position===ah.duration)&&(aE.position=0);if(ah.paused&&0<=ah.position&&(!ah._iO.serverURL||0<ah.position)){ah.resume()}else{ah._iO=Y(aE,ah._iO);if(null!==ah._iO.from&&null!==ah._iO.to&&0===ah.instanceCount&&0===ah.playState&&!ah._iO.serverURL){ao=function(){ah._iO=Y(aE,ah._iO);ah.play(ah._iO)};if(ah.isHTML5&&!ah._html5_canplay){ah.load({_oncanplay:ao}),aA=!1}else{if(!ah.isHTML5&&!ah.loaded&&(!ah.readyState||2!==ah.readyState)){ah.load({onload:ao}),aA=!1}}if(null!==aA){return aA}ah._iO=an()}(!ah.instanceCount||ah._iO.multiShotEvents||ah.isHTML5&&ah._iO.multiShot&&!E||!ah.isHTML5&&8<bU&&!ah.getAutoPlay())&&ah.instanceCount++;ah._iO.onposition&&0===ah.playState&&ad(ah);ah.playState=1;ah.paused=!1;ah.position=ah._iO.position!==e&&!isNaN(ah._iO.position)?ah._iO.position:0;ah.isHTML5||(ah._iO=a(y(ah._iO)));ah._iO.onplay&&ap&&(ah._iO.onplay.apply(ah),ae=!0);ah.setVolume(ah._iO.volume,!0);ah.setPan(ah._iO.pan,!0);ah.isHTML5?2>ah.instanceCount?(j(),aA=ah._setup_html5(),ah.setPosition(ah._iO.position),aA.play()):(aC=new Audio(ah._iO.url),aB=function(){V.remove(aC,"ended",aB);ah._onfinish(ah);bf(aC);aC=null},aD=function(){V.remove(aC,"canplay",aD);try{aC.currentTime=ah._iO.position/1000}catch(aF){}aC.play()},V.add(aC,"ended",aB),void 0!==ah._iO.volume&&(aC.volume=Math.max(0,Math.min(1,ah._iO.volume/100))),ah.muted&&(aC.muted=!0),ah._iO.position?V.add(aC,"canplay",aD):aC.play()):(aA=bT._start(ah.id,ah._iO.loops||1,9===bU?ah.position:ah.position/1000,ah._iO.multiShot||!1),9===bU&&!aA&&ah._iO.onplayerror&&ah._iO.onplayerror.apply(ah))}return ah};this.stop=function(ap){var ao=ah._iO;1===ah.playState&&(ah._onbufferchange(0),ah._resetOnPosition(0),ah.paused=!1,ah.isHTML5||(ah.playState=0),ak(),ao.to&&ah.clearOnPosition(ao.to),ah.isHTML5?ah._a&&(ap=ah.position,ah.setPosition(0),ah.position=ap,ah._a.pause(),ah.playState=0,ah._onTimer(),ai()):(bT._stop(ah.id,ap),ao.serverURL&&ah.unload()),ah.instanceCount=0,ah._iO={},ao.onstop&&ao.onstop.apply(ah));return ah};this.setAutoPlay=function(ao){ah._iO.autoPlay=ao;ah.isHTML5||(bT._setAutoPlay(ah.id,ao),ao&&!ah.instanceCount&&1===ah.readyState&&ah.instanceCount++)};this.getAutoPlay=function(){return ah._iO.autoPlay};this.setPosition=function(aA){aA===e&&(aA=0);var ao=ah.isHTML5?Math.max(aA,0):Math.min(ah.duration||ah._iO.duration,Math.max(aA,0));ah.position=ao;aA=ah.position/1000;ah._resetOnPosition(ah.position);ah._iO.position=ao;if(ah.isHTML5){if(ah._a){if(ah._html5_canplay){if(ah._a.currentTime!==aA){try{ah._a.currentTime=aA,(0===ah.playState||ah.paused)&&ah._a.pause()}catch(ap){}}}else{if(aA){return ah}}ah.paused&&ah._onTimer(!0)}}else{aA=9===bU?ah.position:aA,ah.readyState&&2!==ah.readyState&&bT._setPosition(ah.id,aA,ah.paused||!ah.playState,ah._iO.multiShot)}return ah};this.pause=function(ao){if(ah.paused||0===ah.playState&&1!==ah.readyState){return ah}ah.paused=!0;ah.isHTML5?(ah._setup_html5().pause(),ai()):(ao||ao===e)&&bT._pause(ah.id,ah._iO.multiShot);ah._iO.onpause&&ah._iO.onpause.apply(ah);return ah};this.resume=function(){var ao=ah._iO;if(!ah.paused){return ah}ah.paused=!1;ah.playState=1;ah.isHTML5?(ah._setup_html5().play(),j()):(ao.isMovieStar&&!ao.serverURL&&ah.setPosition(ah.position),bT._pause(ah.id,ao.multiShot));!ae&&ao.onplay?(ao.onplay.apply(ah),ae=!0):ao.onresume&&ao.onresume.apply(ah);return ah};this.togglePause=function(){if(0===ah.playState){return ah.play({position:9===bU&&!ah.isHTML5?ah.position:ah.position/1000}),ah}ah.paused?ah.resume():ah.pause();return ah};this.setPan=function(ap,ao){ap===e&&(ap=0);ao===e&&(ao=!1);ah.isHTML5||bT._setPan(ah.id,ap);ah._iO.pan=ap;ao||(ah.pan=ap,ah.options.pan=ap);return ah};this.setVolume=function(ap,ao){ap===e&&(ap=100);ao===e&&(ao=!1);ah.isHTML5?ah._a&&(bO.muted&&!ah.muted&&(ah.muted=!0,ah._a.muted=!0),ah._a.volume=Math.max(0,Math.min(1,ap/100))):bT._setVolume(ah.id,bO.muted&&!ah.muted||ah.muted?0:ap);ah._iO.volume=ap;ao||(ah.volume=ap,ah.options.volume=ap);return ah};this.mute=function(){ah.muted=!0;ah.isHTML5?ah._a&&(ah._a.muted=!0):bT._setVolume(ah.id,0);return ah};this.unmute=function(){ah.muted=!1;var ao=ah._iO.volume!==e;ah.isHTML5?ah._a&&(ah._a.muted=!1):bT._setVolume(ah.id,ao?ah._iO.volume:ah.options.volume);return ah};this.toggleMute=function(){return ah.muted?ah.unmute():ah.mute()};this.onposition=this.onPosition=function(aA,ao,ap){ac.push({position:parseInt(aA,10),method:ao,scope:ap!==e?ap:ah,fired:!1});return ah};this.clearOnPosition=function(ap,aA){var ao;ap=parseInt(ap,10);if(isNaN(ap)){return !1}for(ao=0;ao<ac.length;ao++){if(ap===ac[ao].position&&(!aA||aA===ac[ao].method)){ac[ao].fired&&af--,ac.splice(ao,1)}}};this._processOnPosition=function(){var ap,ao;ap=ac.length;if(!ap||!ah.playState||af>=ap){return !1}for(ap-=1;0<=ap;ap--){ao=ac[ap],!ao.fired&&ah.position>=ao.position&&(ao.fired=!0,af++,ao.method.apply(ao.scope,[ao.position]))}return !0};this._resetOnPosition=function(ap){var aA,ao;aA=ac.length;if(!aA){return !1}for(aA-=1;0<=aA;aA--){ao=ac[aA],ao.fired&&ap<=ao.position&&(ao.fired=!1,af--)}return !0};an=function(){var aC=ah._iO,ao=aC.from,aA=aC.to,ap,aB;aB=function(){ah.clearOnPosition(aA,aB);ah.stop()};ap=function(){if(null!==aA&&!isNaN(aA)){ah.onPosition(aA,aB)}};null!==ao&&!isNaN(ao)&&(aC.position=ao,aC.multiShot=!1,ap());return aC};ad=function(){var ap,ao=ah._iO.onposition;if(ao){for(ap in ao){if(ao.hasOwnProperty(ap)){ah.onPosition(parseInt(ap,10),ao[ap])}}}};ak=function(){var ap,ao=ah._iO.onposition;if(ao){for(ap in ao){ao.hasOwnProperty(ap)&&ah.clearOnPosition(parseInt(ap,10))}}};j=function(){ah.isHTML5&&bh(ah)};ai=function(){ah.isHTML5&&s(ah)};J=function(ao){ao||(ac=[],af=0);ae=!1;ah._hasTimer=null;ah._a=null;ah._html5_canplay=!1;ah.bytesLoaded=null;ah.bytesTotal=null;ah.duration=ah._iO&&ah._iO.duration?ah._iO.duration:null;ah.durationEstimate=null;ah.buffered=[];ah.eqData=[];ah.eqData.left=[];ah.eqData.right=[];ah.failures=0;ah.isBuffering=!1;ah.instanceOptions={};ah.instanceCount=0;ah.loaded=!1;ah.metadata={};ah.readyState=0;ah.muted=!1;ah.paused=!1;ah.peakData={left:0,right:0};ah.waveformData={left:[],right:[]};ah.playState=0;ah.position=null;ah.id3={}};J();this._onTimer=function(aB){var ao,ap=!1,aA={};if(ah._hasTimer||aB){if(ah._a&&(aB||(0<ah.playState||1===ah.readyState)&&!ah.paused)){ao=ah._get_html5_duration(),ao!==o&&(o=ao,ah.duration=ao,ap=!0),ah.durationEstimate=ah.duration,ao=1000*ah._a.currentTime||0,ao!==k&&(k=ao,ap=!0),(ap||aB)&&ah._whileplaying(ao,aA,aA,aA,aA)}return ap}};this._get_html5_duration=function(){var ao=ah._iO;return(ao=ah._a&&ah._a.duration?1000*ah._a.duration:ao&&ao.duration?ao.duration:null)&&!isNaN(ao)&&Infinity!==ao?ao:null};this._apply_loop=function(ao,ap){ao.loop=1<ap?"loop":""};this._setup_html5=function(aB){aB=Y(ah._iO,aB);var ao=E?au:ah._a,aA=decodeURI(aB.url),ap;E?aA===decodeURI(bZ)&&(ap=!0):aA===decodeURI(ag)&&(ap=!0);if(ao){if(ao._s){if(E){ao._s&&(ao._s.playState&&!ap)&&ao._s.stop()}else{if(!E&&aA===decodeURI(ag)){return ah._apply_loop(ao,aB.loops),ao}}}ap||(ag&&J(!1),ao.src=aB.url,bZ=ag=ah.url=aB.url,ao._called_load=!1)}else{aB.autoLoad||aB.autoPlay?(ah._a=new Audio(aB.url),ah._a.load()):ah._a=ax&&10>opera.version()?new Audio(null):new Audio,ao=ah._a,ao._called_load=!1,E&&(au=ao)}ah.isHTML5=!0;ah._a=ao;ao._s=ah;am();ah._apply_loop(ao,aB.loops);aB.autoLoad||aB.autoPlay?ah.load():(ao.autobuffer=!1,ao.preload="auto");return ao};am=function(){if(ah._a._added_events){return !1}var ao;ah._a._added_events=!0;for(ao in F){F.hasOwnProperty(ao)&&ah._a&&ah._a.addEventListener(ao,F[ao],!1)}return !0};aj=function(){var ao;ah._a._added_events=!1;for(ao in F){F.hasOwnProperty(ao)&&ah._a&&ah._a.removeEventListener(ao,F[ao],!1)}};this._onload=function(ap){var ao=!!ap||!ah.isHTML5&&8===bU&&ah.duration;ah.loaded=ao;ah.readyState=ao?3:2;ah._onbufferchange(0);ah._iO.onload&&w(ah,function(){ah._iO.onload.apply(ah,[ao])});return !0};this._onbufferchange=function(ao){if(0===ah.playState||ao&&ah.isBuffering||!ao&&!ah.isBuffering){return !1}ah.isBuffering=1===ao;ah._iO.onbufferchange&&ah._iO.onbufferchange.apply(ah);return !0};this._onsuspend=function(){ah._iO.onsuspend&&ah._iO.onsuspend.apply(ah);return !0};this._onfailure=function(aA,ao,ap){ah.failures++;if(ah._iO.onfailure&&1===ah.failures){ah._iO.onfailure(ah,aA,ao,ap)}};this._onfinish=function(){var ao=ah._iO.onfinish;ah._onbufferchange(0);ah._resetOnPosition(0);ah.instanceCount&&(ah.instanceCount--,ah.instanceCount||(ak(),ah.playState=0,ah.paused=!1,ah.instanceCount=0,ah.instanceOptions={},ah._iO={},ai(),ah.isHTML5&&(ah.position=0)),(!ah.instanceCount||ah._iO.multiShotEvents)&&ao&&w(ah,function(){ao.apply(ah)}))};this._whileloading=function(aC,ao,aA,ap){var aB=ah._iO;ah.bytesLoaded=aC;ah.bytesTotal=ao;ah.duration=Math.floor(aA);ah.bufferLength=ap;ah.durationEstimate=!ah.isHTML5&&!aB.isMovieStar?aB.duration?ah.duration>aB.duration?ah.duration:aB.duration:parseInt(ah.bytesTotal/ah.bytesLoaded*ah.duration,10):ah.duration;ah.isHTML5||(ah.buffered=[{start:0,end:ah.duration}]);(3!==ah.readyState||ah.isHTML5)&&aB.whileloading&&aB.whileloading.apply(ah)};this._whileplaying=function(aD,ao,aA,ap,aB){var aC=ah._iO;if(isNaN(aD)||null===aD){return !1}ah.position=Math.max(0,aD);ah._processOnPosition();!ah.isHTML5&&8<bU&&(aC.usePeakData&&(ao!==e&&ao)&&(ah.peakData={left:ao.leftPeak,right:ao.rightPeak}),aC.useWaveformData&&(aA!==e&&aA)&&(ah.waveformData={left:aA.split(","),right:ap.split(",")}),aC.useEQData&&(aB!==e&&aB&&aB.leftEQ)&&(aD=aB.leftEQ.split(","),ah.eqData=aD,ah.eqData.left=aD,aB.rightEQ!==e&&aB.rightEQ&&(ah.eqData.right=aB.rightEQ.split(","))));1===ah.playState&&(!ah.isHTML5&&(8===bU&&!ah.position&&ah.isBuffering)&&ah._onbufferchange(0),aC.whileplaying&&aC.whileplaying.apply(ah));return !0};this._oncaptiondata=function(ao){ah.captiondata=ao;ah._iO.oncaptiondata&&ah._iO.oncaptiondata.apply(ah,[ao])};this._onmetadata=function(aC,ao){var aA={},ap,aB;ap=0;for(aB=aC.length;ap<aB;ap++){aA[aC[ap]]=ao[ap]}ah.metadata=aA;ah._iO.onmetadata&&ah._iO.onmetadata.apply(ah)};this._onid3=function(aC,ao){var aA=[],ap,aB;ap=0;for(aB=aC.length;ap<aB;ap++){aA[aC[ap]]=ao[ap]}ah.id3=Y(ah.id3,aA);ah._iO.onid3&&ah._iO.onid3.apply(ah)};this._onconnect=function(ao){ao=1===ao;if(ah.connected=ao){ah.failures=0,T(ah.id)&&(ah.getAutoPlay()?ah.play(e,ah.getAutoPlay()):ah._iO.autoLoad&&ah.load()),ah._iO.onconnect&&ah._iO.onconnect.apply(ah,[ao])}};this._ondataerror=function(ao){0<ah.playState&&ah._iO.ondataerror&&ah._iO.ondataerror.apply(ah)}};at=function(){return bW.body||bW.getElementsByTagName("div")[0]};bv=function(i){return bW.getElementById(i)};Y=function(j,o){var k=j||{},i,J;i=o===e?bO.defaultOptions:o;for(J in i){i.hasOwnProperty(J)&&k[J]===e&&(k[J]="object"!==typeof i[J]||null===i[J]?i[J]:Y(k[J],i[J]))}return k};w=function(j,i){!j.isHTML5&&8===bU?g.setTimeout(i,0):i()};bw={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};bP=function(j,o){var k,i=!0,J=o!==e,ac=bO.setupOptions;for(k in j){if(j.hasOwnProperty(k)){if("object"!==typeof j[k]||null===j[k]||j[k] instanceof Array||j[k] instanceof RegExp){J&&bw[o]!==e?bO[o][k]=j[k]:ac[k]!==e?(bO.setupOptions[k]=j[k],bO[k]=j[k]):bw[k]===e?i=!1:bO[k] instanceof Function?bO[k].apply(bO,j[k] instanceof Array?j[k]:[j[k]]):bO[k]=j[k]}else{if(bw[k]===e){i=!1}else{return bP(j[k],k)}}}}return i};V=function(){function j(J){J=bg.call(J);var ac=J.length;o?(J[1]="on"+J[1],3<ac&&J.pop()):3===ac&&J.push(!1);return J}function k(ae,J){var ad=ae.shift(),ac=[i[J]];if(o){ad[ac](ae[0],ae[1])}else{ad[ac].apply(ad,ae)}}var o=g.attachEvent,i={add:o?"attachEvent":"addEventListener",remove:o?"detachEvent":"removeEventListener"};return{add:function(){k(j(arguments),"add")},remove:function(){k(j(arguments),"remove")}}}();F={abort:S(function(){}),canplay:S(function(){var j=this._s,k;if(j._html5_canplay){return !0}j._html5_canplay=!0;j._onbufferchange(0);k=j._iO.position!==e&&!isNaN(j._iO.position)?j._iO.position/1000:null;if(j.position&&this.currentTime!==k){try{this.currentTime=k}catch(i){}}j._iO._oncanplay&&j._iO._oncanplay()}),canplaythrough:S(function(){var i=this._s;i.loaded||(i._onbufferchange(0),i._whileloading(i.bytesLoaded,i.bytesTotal,i._get_html5_duration()),i._onload(!0))}),ended:S(function(){this._s._onfinish()}),error:S(function(){this._s._onload(!1)}),loadeddata:S(function(){var i=this._s;!i._loaded&&!bR&&(i.duration=i._get_html5_duration())}),loadedmetadata:S(function(){}),loadstart:S(function(){this._s._onbufferchange(1)}),play:S(function(){this._s._onbufferchange(0)}),playing:S(function(){this._s._onbufferchange(0)}),progress:S(function(j){var k=this._s,o,i,J=0,J=j.target.buffered;o=j.loaded||0;var ac=j.total||1;k.buffered=[];if(J&&J.length){o=0;for(i=J.length;o<i;o++){k.buffered.push({start:1000*J.start(o),end:1000*J.end(o)})}J=1000*(J.end(0)-J.start(0));o=Math.min(1,J/(1000*j.target.duration))}isNaN(o)||(k._onbufferchange(0),k._whileloading(o,ac,k._get_html5_duration()),o&&(ac&&o===ac)&&F.canplaythrough.call(this,j))}),ratechange:S(function(){}),suspend:S(function(j){var i=this._s;F.progress.call(this,j);i._onsuspend()}),stalled:S(function(){}),timeupdate:S(function(){this._s._onTimer()}),waiting:S(function(){this._s._onbufferchange(1)})};l=function(i){return !i||!i.type&&!i.url&&!i.serverURL?!1:i.serverURL||i.type&&bu(i.type)?!1:i.type?bs({type:i.type}):bs({url:i.url})||bO.html5Only||i.url.match(/data\:/i)};bf=function(j){var i;j&&(i=bR?"about:blank":bO.html5.canPlayType("audio/wav")?"data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w\x3d\x3d":"about:blank",j.src=i,void 0!==j._called_unload&&(j._called_load=!1));E&&(bZ=null);return i};bs=function(j){if(!bO.useHTML5Audio||!bO.hasHTML5){return !1}var o=j.url||null;j=j.type||null;var k=bO.audioFormats,i;if(j&&bO.html5[j]!==e){return bO.html5[j]&&!bu(j)}if(!aq){aq=[];for(i in k){k.hasOwnProperty(i)&&(aq.push(i),k[i].related&&(aq=aq.concat(k[i].related)))}aq=RegExp("\\.("+aq.join("|")+")(\\?.*)?$","i")}i=o?o.toLowerCase().match(aq):null;!i||!i.length?j&&(o=j.indexOf(";"),i=(-1!==o?j.substr(0,o):j).substr(6)):i=i[1];i&&bO.html5[i]!==e?o=bO.html5[i]&&!bu(i):(j="audio/"+i,o=bO.html5.canPlayType({type:j}),o=(bO.html5[i]=o)&&bO.html5[j]&&!bu(j));return o};aa=function(){function j(af){var ag,ae=ag=!1;if(!o||"function"!==typeof o.canPlayType){return ag}if(af instanceof Array){ac=0;for(ag=af.length;ac<ag;ac++){if(bO.html5[af[ac]]||o.canPlayType(af[ac]).match(bO.html5Test)){ae=!0,bO.html5[af[ac]]=!0,bO.flash[af[ac]]=!!af[ac].match(bo)}}ag=ae}else{af=o&&"function"===typeof o.canPlayType?o.canPlayType(af):!1,ag=!(!af||!af.match(bO.html5Test))}return ag}if(!bO.useHTML5Audio||!bO.hasHTML5){return W=bO.html5.usingFlash=!0,!1}var o=Audio!==e?ax&&10>opera.version()?new Audio(null):new Audio:null,k,i,J={},ad,ac;ad=bO.audioFormats;for(k in ad){if(ad.hasOwnProperty(k)&&(i="audio/"+k,J[k]=j(ad[k].type),J[i]=J[k],k.match(bo)?(bO.flash[k]=!0,bO.flash[i]=!0):(bO.flash[k]=!1,bO.flash[i]=!1),ad[k]&&ad[k].related)){for(ac=ad[k].related.length-1;0<=ac;ac--){J["audio/"+ad[k].related[ac]]=J[k],bO.html5[ad[k].related[ac]]=J[k],bO.flash[ad[k].related[ac]]=J[k]}}}J.canPlayType=o?j:null;bO.html5=Y(bO.html5,J);bO.html5.usingFlash=by();W=bO.html5.usingFlash;return !0};n={};bn=function(){};y=function(i){8===bU&&(1<i.loops&&i.stream)&&(i.stream=!1);return i};a=function(j,i){if(j&&!j.usePolicyFile&&(j.onid3||j.usePeakData||j.useWaveformData||j.useEQData)){j.usePolicyFile=!0}return j};ba=function(){return !1};bL=function(j){for(var i in j){j.hasOwnProperty(i)&&"function"===typeof j[i]&&(j[i]=ba)}};t=function(i){i===e&&(i=!1);(ab||i)&&bO.disable(i)};ar=function(j){var i=null;if(j){if(j.match(/\.swf(\?.*)?$/i)){if(i=j.substr(j.toLowerCase().lastIndexOf(".swf?")+4)){return j}}else{j.lastIndexOf("/")!==j.length-1&&(j+="/")}}j=(j&&-1!==j.lastIndexOf("/")?j.substr(0,j.lastIndexOf("/")+1):"./")+bO.movieURL;bO.noSWFCache&&(j+="?ts\x3d"+(new Date).getTime());return j};ay=function(){bU=parseInt(bO.flashVersion,10);8!==bU&&9!==bU&&(bO.flashVersion=bU=8);var i=bO.debugMode||bO.debugFlash?"_debug.swf":".swf";bO.useHTML5Audio&&(!bO.html5Only&&bO.audioFormats.mp4.required&&9>bU)&&(bO.flashVersion=bU=9);bO.version=bO.versionNumber+(bO.html5Only?" (HTML5-only mode)":9===bU?" (AS3/Flash 9)":" (AS2/Flash 8)");8<bU?(bO.defaultOptions=Y(bO.defaultOptions,bO.flash9Options),bO.features.buffering=!0,bO.defaultOptions=Y(bO.defaultOptions,bO.movieStarOptions),bO.filePatterns.flash9=RegExp("\\.(mp3|"+m.join("|")+")(\\?.*)?$","i"),bO.features.movieStar=!0):bO.features.movieStar=!1;bO.filePattern=bO.filePatterns[8!==bU?"flash9":"flash8"];bO.movieURL=(8===bU?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",i);bO.features.peakData=bO.features.waveformData=bO.features.eqData=8<bU};C=function(j,i){if(!bT){return !1}bT._setPolling(j,i)};bj=function(){};T=this.getSoundById;bY=function(){var i=[];bO.debugMode&&i.push("sm2_debug");bO.debugFlash&&i.push("flash_debug");bO.useHighPerformance&&i.push("high_performance");return i.join(" ")};B=function(){bn("fbHandler");var j=bO.getMoviePercent(),i={type:"FLASHBLOCK"};if(bO.html5Only){return !1}bO.ok()?bO.oMC&&(bO.oMC.className=[bY(),"movieContainer","swf_loaded"+(bO.didFlashBlock?" swf_unblocked":"")].join(" ")):(W&&(bO.oMC.className=bY()+" movieContainer "+(null===j?"swf_timedout":"swf_error")),bO.didFlashBlock=!0,I({type:"ontimeout",ignoreInit:!0,error:i}),P(i))};av=function(j,k,i){Z[j]===e&&(Z[j]=[]);Z[j].push({method:k,scope:i||null,fired:!1})};I=function(j){j||(j={type:bO.ok()?"onready":"ontimeout"});if(!R&&j&&!j.ignoreInit||"ontimeout"===j.type&&(bO.ok()||ab&&!j.ignoreInit)){return !1}var o={success:j&&j.ignoreInit?bO.ok():!ab},k=j&&j.type?Z[j.type]||[]:[],i=[],J,o=[o],ac=W&&!bO.ok();j.error&&(o[0].error=j.error);j=0;for(J=k.length;j<J;j++){!0!==k[j].fired&&i.push(k[j])}if(i.length){j=0;for(J=i.length;j<J;j++){i[j].scope?i[j].method.apply(i[j].scope,o):i[j].method.apply(this,o),ac||(i[j].fired=!0)}}return !0};M=function(){g.setTimeout(function(){bO.useFlashBlock&&B();I();"function"===typeof bO.onload&&bO.onload.apply(g);bO.waitForWindowLoad&&V.add(g,"load",M)},1)};bQ=function(){if(X!==e){return X}var j=!1,k=navigator,o=k.plugins,i,J=g.ActiveXObject;if(o&&o.length){(k=k.mimeTypes)&&(k["application/x-shockwave-flash"]&&k["application/x-shockwave-flash"].enabledPlugin&&k["application/x-shockwave-flash"].enabledPlugin.description)&&(j=!0)}else{if(J!==e&&!U.match(/MSAppHost/i)){try{i=new J("ShockwaveFlash.ShockwaveFlash")}catch(ac){i=null}j=!!i}}return X=j};by=function(){var j,i,k=bO.audioFormats;if(b0&&U.match(/os (1|2|3_0|3_1)/i)){bO.hasHTML5=!1,bO.html5Only=!0,bO.oMC&&(bO.oMC.style.display="none")}else{if(bO.useHTML5Audio&&(!bO.html5||!bO.html5.canPlayType)){bO.hasHTML5=!1}}if(bO.useHTML5Audio&&bO.hasHTML5){for(i in br=!0,k){if(k.hasOwnProperty(i)&&k[i].required){if(bO.html5.canPlayType(k[i].type)){if(bO.preferFlash&&(bO.flash[i]||bO.flash[k[i].type])){j=!0}}else{br=!1,j=!0}}}}bO.ignoreFlash&&(j=!1,br=!0);bO.html5Only=bO.hasHTML5&&bO.useHTML5Audio&&!j;return !bO.html5Only};bb=function(j){var o,k,i=0;if(j instanceof Array){o=0;for(k=j.length;o<k;o++){if(j[o] instanceof Object){if(bO.canPlayMIME(j[o].type)){i=o;break}}else{if(bO.canPlayURL(j[o])){i=o;break}}}j[i].url&&(j[i]=j[i].url);j=j[i]}return j};bh=function(i){i._hasTimer||(i._hasTimer=!0,!c&&bO.html5PollingInterval&&(null===bq&&0===bV&&(bq=setInterval(bk,bO.html5PollingInterval)),bV++))};s=function(i){i._hasTimer&&(i._hasTimer=!1,!c&&bO.html5PollingInterval&&bV--)};bk=function(){var i;if(null!==bq&&!bV){return clearInterval(bq),bq=null,!1}for(i=bO.soundIDs.length-1;0<=i;i--){bO.sounds[bO.soundIDs[i]].isHTML5&&bO.sounds[bO.soundIDs[i]]._hasTimer&&bO.sounds[bO.soundIDs[i]]._onTimer()}};P=function(i){i=i!==e?i:{};"function"===typeof bO.onerror&&bO.onerror.apply(g,[{type:i.type!==e?i.type:null}]);i.fatal!==e&&i.fatal&&bO.disable()};be=function(){if(!H||!bQ()){return !1}var j=bO.audioFormats,i,k;for(k in j){if(j.hasOwnProperty(k)&&("mp3"===k||"mp4"===k)){if(bO.html5[k]=!1,j[k]&&j[k].related){for(i=j[k].related.length-1;0<=i;i--){bO.html5[j[k].related[i]]=!1}}}}};this._setSandboxType=function(i){};this._externalInterfaceOK=function(i){if(bO.swfLoaded){return !1}bO.swfLoaded=!0;az=!1;H&&be();setTimeout(u,G?100:1)};q=function(j,J){function k(aj,ak){return'\x3cparam name\x3d"'+aj+'" value\x3d"'+ak+'" /\x3e'}if(b1&&b3){return !1}if(bO.html5Only){return ay(),bO.oMC=bv(bO.movieID),u(),b3=b1=!0,!1}var i=J||bO.url,ac=bO.altURL||i,ae=at(),ad=bY(),af=null,af=bW.getElementsByTagName("html")[0],ag,ah,ai,af=af&&af.dir&&af.dir.match(/rtl/i);j=j===e?bO.id:j;ay();bO.url=ar(r?i:ac);J=bO.url;bO.wmode=!bO.wmode&&bO.useHighPerformance?"transparent":bO.wmode;if(null!==bO.wmode&&(U.match(/msie 8/i)||!G&&!bO.useHighPerformance)&&navigator.platform.match(/win32|win64/i)){A.push(n.spcWmode),bO.wmode=null}ae={name:j,id:j,src:J,quality:"high",allowScriptAccess:bO.allowScriptAccess,bgcolor:bO.bgColor,pluginspage:bX+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:bO.wmode,hasPriority:"true"};bO.debugFlash&&(ae.FlashVars="debug\x3d1");bO.wmode||delete ae.wmode;if(G){i=bW.createElement("div"),ah=['\x3cobject id\x3d"'+j+'" data\x3d"'+J+'" type\x3d"'+ae.type+'" title\x3d"'+ae.title+'" classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase\x3d"'+bX+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version\x3d6,0,40,0"\x3e',k("movie",J),k("AllowScriptAccess",bO.allowScriptAccess),k("quality",ae.quality),bO.wmode?k("wmode",bO.wmode):"",k("bgcolor",bO.bgColor),k("hasPriority","true"),bO.debugFlash?k("FlashVars",ae.FlashVars):"","\x3c/object\x3e"].join("")}else{for(ag in i=bW.createElement("embed"),ae){ae.hasOwnProperty(ag)&&i.setAttribute(ag,ae[ag])}}bj();ad=bY();if(ae=at()){if(bO.oMC=bv(bO.movieID)||bW.createElement("div"),bO.oMC.id){ai=bO.oMC.className,bO.oMC.className=(ai?ai+" ":"movieContainer")+(ad?" "+ad:""),bO.oMC.appendChild(i),G&&(ag=bO.oMC.appendChild(bW.createElement("div")),ag.className="sm2-object-box",ag.innerHTML=ah),b3=!0}else{bO.oMC.id=bO.movieID;bO.oMC.className="movieContainer "+ad;ag=ad=null;bO.useFlashBlock||(bO.useHighPerformance?ad={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}:(ad={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},af&&(ad.left=Math.abs(parseInt(ad.left,10))+"px")));x&&(bO.oMC.style.zIndex=10000);if(!bO.debugFlash){for(ai in ad){ad.hasOwnProperty(ai)&&(bO.oMC.style[ai]=ad[ai])}}try{G||bO.oMC.appendChild(i),ae.appendChild(bO.oMC),G&&(ag=bO.oMC.appendChild(bW.createElement("div")),ag.className="sm2-object-box",ag.innerHTML=ah),b3=!0}catch(o){throw Error(bn("domError")+" \n"+o.toString())}}}return b1=!0};bz=function(){if(bO.html5Only){return q(),!1}if(bT||!bO.url){return !1}bT=bO.getMovie(bO.id);bT||(b6?(G?bO.oMC.innerHTML=bl:bO.oMC.appendChild(b6),b6=null,b1=!0):q(bO.id,bO.url),bT=bO.getMovie(bO.id));"function"===typeof bO.oninitmovie&&setTimeout(bO.oninitmovie,1);return !0};N=function(){setTimeout(bm,1000)};b=function(){g.setTimeout(function(){bO.setup({preferFlash:!1}).reboot();bO.didFlashBlock=!0;bO.beginDelayedInit()},1)};bm=function(){var j,i=!1;if(!bO.url||bp){return !1}bp=!0;V.remove(g,"load",N);if(X&&az&&!a0){return !1}R||(j=bO.getMoviePercent(),0<j&&100>j&&(i=!0));setTimeout(function(){j=bO.getMoviePercent();if(i){return bp=!1,g.setTimeout(N,1),!1}!R&&z&&(null===j?bO.useFlashBlock||0===bO.flashLoadTimeout?bO.useFlashBlock&&B():!bO.useFlashBlock&&br?b():I({type:"ontimeout",ignoreInit:!0,error:{type:"INIT_FLASHBLOCK"}}):0!==bO.flashLoadTimeout&&(!bO.useFlashBlock&&br?b():t(!0)))},bO.flashLoadTimeout)};bx=function(){if(a0||!az){return V.remove(g,"focus",bx),!0}a0=z=!0;bp=!1;N();V.remove(g,"focus",bx);return !0};b4=function(j){if(R){return !1}if(bO.html5Only){return R=!0,M(),!0}var i=!0,k;if(!bO.useFlashBlock||!bO.flashLoadTimeout||bO.getMoviePercent()){R=!0}k={type:!X&&W?"NO_FLASH":"INIT_TIMEOUT"};if(ab||j){bO.useFlashBlock&&bO.oMC&&(bO.oMC.className=bY()+" "+(null===bO.getMoviePercent()?"swf_timedout":"swf_error")),I({type:"ontimeout",error:k,ignoreInit:!0}),P(k),i=!1}ab||(bO.waitForWindowLoad&&!L?V.add(g,"load",M):M());return i};aw=function(){var j,i=bO.setupOptions;for(j in i){i.hasOwnProperty(j)&&(bO[j]===e?bO[j]=i[j]:bO[j]!==i[j]&&(bO.setupOptions[j]=bO[j]))}};u=function(){if(R){return !1}if(bO.html5Only){return R||(V.remove(g,"load",bO.beginDelayedInit),bO.enabled=!0,b4()),!0}bz();try{bT._externalInterfaceTest(!1),C(!0,bO.flashPollingInterval||(bO.useHighPerformance?10:50)),bO.debugMode||bT._disableDebug(),bO.enabled=!0,bO.html5Only||V.add(g,"unload",ba)}catch(i){return P({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),t(!0),b4(),!1}b4();V.remove(g,"load",bO.beginDelayedInit);return !0};O=function(){if(b5){return !1}b5=!0;aw();bj();!X&&bO.hasHTML5&&bO.setup({useHTML5Audio:!0,preferFlash:!1});aa();!X&&W&&(A.push(n.needFlash),bO.setup({flashLoadTimeout:1}));bW.removeEventListener&&bW.removeEventListener("DOMContentLoaded",O,!1);bz();return !0};v=function(){"complete"===bW.readyState&&(O(),bW.detachEvent("onreadystatechange",v));return !0};bM=function(){L=!0;V.remove(g,"load",bM)};D=function(){if(c&&(bO.setupOptions.useHTML5Audio=!0,bO.setupOptions.preferFlash=!1,b0||bi&&!U.match(/android\s2\.3/i))){b0&&(bO.ignoreFlash=!0),E=!0}};D();bQ();V.add(g,"focus",bx);V.add(g,"load",N);V.add(g,"load",bM);bW.addEventListener?bW.addEventListener("DOMContentLoaded",O,!1):bW.attachEvent?bW.attachEvent("onreadystatechange",v):P({type:"NO_DOM2_EVENTS",fatal:!0})}var h=null;if(void 0===g.SM2_DEFER||!SM2_DEFER){h=new f}g.SoundManager=f;g.soundManager=h})(window);