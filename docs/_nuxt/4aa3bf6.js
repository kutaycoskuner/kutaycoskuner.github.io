(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{292:function(e,t,n){var r=n(27),o=n(206);e.exports=r?o:function(e){return Map.prototype.entries.call(e)}},293:function(e,t,n){var r=n(71),o=n(12),c=n(14),l=n(16).f,d=n(100),h=n(298),f=d("meta"),v=0,y=Object.isExtensible||function(){return!0},m=function(e){l(e,f,{value:{objectID:"O"+ ++v,weakData:{}}})},meta=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!c(e,f)){if(!y(e))return"F";if(!t)return"E";m(e)}return e[f].objectID},getWeakData:function(e,t){if(!c(e,f)){if(!y(e))return!0;if(!t)return!1;m(e)}return e[f].weakData},onFreeze:function(e){return h&&meta.REQUIRED&&y(e)&&!c(e,f)&&m(e),e}};r[f]=!0},294:function(e,t,n){var r=n(2),o=n(295),c=n(98);r({target:"Array",proto:!0},{fill:o}),c("fill")},295:function(e,t,n){"use strict";var r=n(26),o=n(99),c=n(17);e.exports=function(e){for(var t=r(this),n=c(t.length),l=arguments.length,d=o(l>1?arguments[1]:void 0,n),h=l>2?arguments[2]:void 0,f=void 0===h?n:o(h,n);f>d;)t[d++]=e;return t}},296:function(e,t,n){"use strict";var r=n(297),o=n(299);e.exports=r("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),o)},297:function(e,t,n){"use strict";var r=n(2),o=n(5),c=n(72),l=n(18),d=n(293),h=n(205),f=n(132),v=n(12),y=n(3),m=n(133),w=n(58),k=n(137);e.exports=function(e,t,n){var x=-1!==e.indexOf("Map"),E=-1!==e.indexOf("Weak"),I=x?"set":"add",_=o[e],A=_&&_.prototype,M=_,R={},T=function(e){var t=A[e];l(A,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(E&&!v(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return E&&!v(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(E&&!v(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(c(e,"function"!=typeof _||!(E||A.forEach&&!y((function(){(new _).entries().next()})))))M=n.getConstructor(t,e,x,I),d.REQUIRED=!0;else if(c(e,!0)){var S=new M,C=S[I](E?{}:-0,1)!=S,z=y((function(){S.has(1)})),O=m((function(e){new _(e)})),Q=!E&&y((function(){for(var e=new _,t=5;t--;)e[I](t,t);return!e.has(-0)}));O||((M=t((function(t,n){f(t,M,e);var r=k(new _,t,M);return null!=n&&h(n,r[I],{that:r,AS_ENTRIES:x}),r}))).prototype=A,A.constructor=M),(z||Q)&&(T("delete"),T("has"),x&&T("get")),(Q||C)&&T(I),E&&A.clear&&delete A.clear}return R[e]=M,r({global:!0,forced:M!=_},R),w(M,e),E||n.setStrong(M,e,x),M}},298:function(e,t,n){var r=n(3);e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},299:function(e,t,n){"use strict";var r=n(16).f,o=n(48),c=n(135),l=n(57),d=n(132),h=n(205),f=n(134),v=n(136),y=n(13),m=n(293).fastKey,w=n(37),k=w.set,x=w.getterFor;e.exports={getConstructor:function(e,t,n,f){var v=e((function(e,r){d(e,v,t),k(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),y||(e.size=0),null!=r&&h(r,e[f],{that:e,AS_ENTRIES:n})})),w=x(t),E=function(e,t,n){var r,o,c=w(e),l=I(e,t);return l?l.value=n:(c.last=l={index:o=m(t,!0),key:t,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),y?c.size++:e.size++,"F"!==o&&(c.index[o]=l)),e},I=function(e,t){var n,r=w(e),o=m(t);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==t)return n};return c(v.prototype,{clear:function(){for(var e=w(this),data=e.index,t=e.first;t;)t.removed=!0,t.previous&&(t.previous=t.previous.next=void 0),delete data[t.index],t=t.next;e.first=e.last=void 0,y?e.size=0:this.size=0},delete:function(e){var t=this,n=w(t),r=I(t,e);if(r){var o=r.next,c=r.previous;delete n.index[r.index],r.removed=!0,c&&(c.next=o),o&&(o.previous=c),n.first==r&&(n.first=o),n.last==r&&(n.last=c),y?n.size--:t.size--}return!!r},forEach:function(e){for(var t,n=w(this),r=l(e,arguments.length>1?arguments[1]:void 0,3);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!I(this,e)}}),c(v.prototype,n?{get:function(e){var t=I(this,e);return t&&t.value},set:function(e,t){return E(this,0===e?0:e,t)}}:{add:function(e){return E(this,e=0===e?0:e,e)}}),y&&r(v.prototype,"size",{get:function(){return w(this).size}}),v},setStrong:function(e,t,n){var r=t+" Iterator",o=x(t),c=x(r);f(e,t,(function(e,t){k(this,{type:r,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=c(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),v(t)}}},300:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(301);r({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},301:function(e,t,n){"use strict";var r=n(8),o=n(69);e.exports=function(){for(var e,t=r(this),n=o(t.delete),c=!0,l=0,d=arguments.length;l<d;l++)e=n.call(t,arguments[l]),c=c&&e;return!!c}},302:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(8),l=n(57),d=n(292),h=n(205);r({target:"Map",proto:!0,real:!0,forced:o},{every:function(e){var map=c(this),t=d(map),n=l(e,arguments.length>1?arguments[1]:void 0,3);return!h(t,(function(e,t,r){if(!n(t,e,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},303:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(35),l=n(8),d=n(69),h=n(57),f=n(97),v=n(292),y=n(205);r({target:"Map",proto:!0,real:!0,forced:o},{filter:function(e){var map=l(this),t=v(map),n=h(e,arguments.length>1?arguments[1]:void 0,3),r=new(f(map,c("Map"))),o=d(r.set);return y(t,(function(e,t){n(t,e,map)&&o.call(r,e,t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},304:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(8),l=n(57),d=n(292),h=n(205);r({target:"Map",proto:!0,real:!0,forced:o},{find:function(e){var map=c(this),t=d(map),n=l(e,arguments.length>1?arguments[1]:void 0,3);return h(t,(function(e,t,r){if(n(t,e,map))return r(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},305:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(8),l=n(57),d=n(292),h=n(205);r({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(e){var map=c(this),t=d(map),n=l(e,arguments.length>1?arguments[1]:void 0,3);return h(t,(function(e,t,r){if(n(t,e,map))return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},306:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(8),l=n(292),d=n(307),h=n(205);r({target:"Map",proto:!0,real:!0,forced:o},{includes:function(e){return h(l(c(this)),(function(t,n,r){if(d(n,e))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},307:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},308:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(8),l=n(292),d=n(205);r({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(e){return d(l(c(this)),(function(t,n,r){if(n===e)return r(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},309:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(35),l=n(8),d=n(69),h=n(57),f=n(97),v=n(292),y=n(205);r({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(e){var map=l(this),t=v(map),n=h(e,arguments.length>1?arguments[1]:void 0,3),r=new(f(map,c("Map"))),o=d(r.set);return y(t,(function(e,t){o.call(r,n(t,e,map),t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},310:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(35),l=n(8),d=n(69),h=n(57),f=n(97),v=n(292),y=n(205);r({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(e){var map=l(this),t=v(map),n=h(e,arguments.length>1?arguments[1]:void 0,3),r=new(f(map,c("Map"))),o=d(r.set);return y(t,(function(e,t){o.call(r,e,n(t,e,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},311:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(8),l=n(69),d=n(205);r({target:"Map",proto:!0,real:!0,forced:o},{merge:function(e){for(var map=c(this),t=l(map.set),i=0;i<arguments.length;)d(arguments[i++],t,{that:map,AS_ENTRIES:!0});return map}})},312:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(8),l=n(69),d=n(292),h=n(205);r({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(e){var map=c(this),t=d(map),n=arguments.length<2,r=n?void 0:arguments[1];if(l(e),h(t,(function(t,o){n?(n=!1,r=o):r=e(r,o,t,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty map with no initial value");return r}})},313:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(8),l=n(57),d=n(292),h=n(205);r({target:"Map",proto:!0,real:!0,forced:o},{some:function(e){var map=c(this),t=d(map),n=l(e,arguments.length>1?arguments[1]:void 0,3);return h(t,(function(e,t,r){if(n(t,e,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},314:function(e,t,n){"use strict";var r=n(2),o=n(27),c=n(8),l=n(69);r({target:"Map",proto:!0,real:!0,forced:o},{update:function(e,t){var map=c(this),n=arguments.length;l(t);var r=map.has(e);if(!r&&n<3)throw TypeError("Updating absent value");var o=r?map.get(e):l(n>2?arguments[2]:void 0)(e,map);return map.set(e,t(o,e,map)),map}})},335:function(e,t,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("05af7e7b",content,!0,{sourceMap:!1})},376:function(e){e.exports=JSON.parse('{"data":[{"title":"Renewable Energy: Shaping the Future of Sustainability","paragraphs":["Renewable energy sources such as solar, wind, and hydroelectric power play a crucial role in transitioning towards a sustainable future. Unlike fossil fuels, renewables generate electricity without emitting greenhouse gases, mitigating climate change impacts. Solar photovoltaic technology, for instance, converts sunlight into electricity through solar panels installed on rooftops or in solar farms.","One of the key challenges in scaling renewable energy adoption lies in grid integration and storage solutions. Renewable energy generation fluctuates with weather conditions, necessitating efficient energy storage systems like batteries and pumped hydro storage to stabilize grid operations. Innovations in energy storage technologies are crucial for maximizing the reliability and cost-effectiveness of renewable energy sources.","The future of renewable energy is closely linked to policy frameworks and investment in clean energy infrastructure. Governments worldwide are incentivizing renewable energy deployment through subsidies, tax incentives, and renewable portfolio standards. Collaborative efforts between public and private sectors are essential for accelerating the transition to a low-carbon economy and achieving global climate targets.","Looking ahead, projections for renewable energy growth are optimistic, driven by advancements in technology and declining costs of renewable energy systems. Industries, communities, and households are increasingly adopting renewable energy solutions to reduce dependency on fossil fuels, enhance energy security, and create green jobs.","Despite the benefits of renewable energy, challenges such as intermittency and geographical limitations exist. Overcoming these challenges requires innovation in grid management, transmission infrastructure, and international cooperation to develop interconnected renewable energy networks."],"answers":["In which paragraph do the authors describe the role of renewable energy in mitigating climate change?","Which paragraph emphasizes challenges related to grid integration and energy storage in renewable energy?","Where do the authors discuss policy frameworks and incentives driving renewable energy adoption?","In which paragraph do the authors project optimistic growth for renewable energy?","Where do the authors highlight challenges facing renewable energy despite its benefits?","Which paragraph discusses innovations needed to overcome challenges in renewable energy adoption?"],"correctAnswerKeys":[0,1,2,3,4,1]},{"title":"Blockchain Technology: Revolutionizing Digital Transactions","paragraphs":["Blockchain technology, originally developed for cryptocurrencies like Bitcoin, has evolved into a transformative tool for secure and transparent digital transactions. Unlike traditional centralized systems, blockchain operates on a decentralized network of computers, ensuring data integrity and reducing the risk of fraud or manipulation.","One of the key innovations in blockchain technology is smart contracts, self-executing agreements with terms and conditions directly written into code. Smart contracts automate and enforce contract terms without intermediaries, streamlining processes in industries such as finance, supply chain management, and healthcare.","The future of blockchain extends beyond financial applications to include sectors like governance, healthcare, and logistics. Governments are exploring blockchain for enhancing transparency in public sector operations, improving identity management systems, and facilitating secure voting processes.","Looking ahead, projections for blockchain adoption across industries are promising. Companies are increasingly integrating blockchain solutions to enhance data security, streamline operations, and create new business models based on decentralized platforms and tokenized assets.","Despite the potential of blockchain, challenges such as scalability, interoperability, and regulatory frameworks remain significant barriers to widespread adoption. Innovations in blockchain technology are essential for addressing these challenges and realizing its full potential in transforming digital ecosystems.","Ethical considerations in blockchain technology include privacy concerns, data ownership, and ensuring inclusive access to decentralized networks while mitigating risks of cyberattacks and misuse of blockchain-enabled applications."],"answers":["In which paragraph do the authors describe blockchain as a tool for secure digital transactions?","Which paragraph discusses smart contracts and their applications?","Where do the authors explore blockchain applications beyond finance?","In which paragraph do the authors project promising adoption of blockchain across industries?","Where do the authors highlight challenges facing widespread blockchain adoption?","Which paragraph discusses ethical considerations in blockchain technology?"],"correctAnswerKeys":[0,1,2,3,4,5]},{"title":"Space Exploration: Pioneering the Final Frontier","paragraphs":["Space exploration represents humanity\'s quest to explore and understand the universe beyond Earth. Advances in space technology have enabled missions to distant planets, asteroids, and celestial bodies, providing valuable insights into planetary formation, origins of life, and potential for future colonization.","One of the key challenges in space exploration is developing sustainable technologies for long-duration missions and space habitats. Innovations in propulsion systems, life support technologies, and resource utilization are critical for enabling human presence on Mars and beyond.","The future of space exploration is driven by international collaborations and private sector investments in space tourism, lunar exploration, and Mars colonization projects. Initiatives like the Artemis program aim to return humans to the Moon and establish a sustainable lunar presence as a stepping stone for future deep space missions.","Looking ahead, projections for space exploration include advancements in robotics, artificial intelligence, and in-situ resource utilization to support autonomous exploration missions. Technologies like 3D printing and autonomous rovers enhance efficiency and reduce reliance on Earth-based logistics.","Despite the progress in space exploration, challenges such as space debris, radiation exposure, and geopolitical tensions in space governance persist. International cooperation and regulatory frameworks are crucial for ensuring the sustainable and peaceful use of outer space.","Ethical considerations in space exploration encompass planetary protection protocols, ensuring minimal impact on celestial bodies, and ethical frameworks for commercial space activities and resource extraction."],"answers":["In which paragraph do the authors describe advances in space technology and missions?","Which paragraph emphasizes challenges in developing sustainable technologies for space exploration?","Where do the authors discuss international collaborations and private sector investments in space?","In which paragraph do the authors project future advancements in space exploration technologies?","Where do the authors highlight challenges facing space exploration despite technological progress?","Which paragraph discusses ethical considerations in space exploration?"],"correctAnswerKeys":[0,1,2,3,4,5]},{"title":"Cybersecurity: Safeguarding Digital Assets in the Digital Age","paragraphs":["Cybersecurity plays a critical role in protecting digital assets, including sensitive data, from cyber threats such as malware, phishing attacks, and data breaches. As organizations and individuals increasingly rely on digital platforms, robust cybersecurity measures are essential to mitigate risks and ensure data confidentiality and integrity.","One of the key challenges in cybersecurity is the evolving nature of cyber threats and the sophistication of cybercriminal tactics. Threats like ransomware attacks and zero-day vulnerabilities require continuous adaptation of cybersecurity strategies, including threat intelligence, incident response, and proactive defense measures.","The future of cybersecurity is shaped by technological advancements in artificial intelligence and machine learning. AI-powered cybersecurity solutions analyze vast amounts of data to detect anomalies and patterns indicative of cyber threats, enabling proactive threat detection and mitigation.","Looking ahead, projections for cybersecurity trends emphasize the adoption of integrated security platforms, encryption technologies, and security automation to enhance resilience against cyber attacks. Industries such as finance, healthcare, and government are investing in cybersecurity measures to safeguard critical infrastructure and digital operations.","Despite advancements in cybersecurity technology, challenges such as skills shortages, regulatory compliance, and the global nature of cyber threats pose ongoing challenges. Collaboration between cybersecurity experts, policymakers, and industry stakeholders is crucial for developing comprehensive strategies to address these challenges.","Ethical considerations in cybersecurity include privacy protection, data governance, and ethical use of AI in cybersecurity operations to balance security needs with individual rights and freedoms."],"answers":["In which paragraph do the authors describe the role of cybersecurity in protecting digital assets?","Which paragraph emphasizes challenges related to evolving cyber threats?","Where do the authors discuss technological advancements in AI and machine learning in cybersecurity?","In which paragraph do the authors project trends in cybersecurity adoption?","Where do the authors highlight ongoing challenges in cybersecurity despite technological advancements?","Which paragraph discusses ethical considerations in cybersecurity?"],"correctAnswerKeys":[0,1,2,3,4,5]}]}')},377:function(e,t,n){"use strict";n(335)},378:function(e,t,n){var r=n(9)((function(i){return i[1]}));r.push([e.i,'@media (min-width:1025px){.center-page[data-v-25e6d08d]{align-items:center;display:flex;height:100vh;justify-content:center}.canvas[data-v-25e6d08d]{background-color:var(--bg);border-radius:2px;box-shadow:var(--box-shadow);display:flex;height:80%;justify-content:space-around;margin-top:-1em;max-width:1900px;width:94%}.box[data-v-25e6d08d]:first-child{box-shadow:2px 0 5px rgba(0,0,0,.1);width:60%}.box[data-v-25e6d08d]:first-child,.box[data-v-25e6d08d]:last-child{border:none;max-height:100%;overflow-y:auto;padding:20px;text-align:left}.box[data-v-25e6d08d]:last-child{box-shadow:none;width:40%}h2[data-v-25e6d08d]{padding-left:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none}p[data-v-25e6d08d]{font-size:.8em;padding:10px}.dropslot[data-v-25e6d08d]:hover{opacity:.8}.dropslot-occupied[data-v-25e6d08d]{border-bottom:1px dashed #aaa;color:gray;cursor:pointer}.draggable[data-v-25e6d08d]{border:1px solid #ccc;border-radius:4px;cursor:grab;font-size:.9em;margin:5px 0;padding:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.draggable .tag[data-v-25e6d08d]{text-transform:uppercase}.draggable .tag[data-v-25e6d08d]:after{content:")"}.draggable-disabled[data-v-25e6d08d]{color:gray;opacity:.6}.keyboard-shortcuts[data-v-25e6d08d]{bottom:4em;display:flex;gap:1em;opacity:.8;position:fixed;right:4em;-webkit-user-select:none;-moz-user-select:none;user-select:none}.keyboard-key-block[data-v-25e6d08d]{display:inline-flex}.keyboard-key-desc[data-v-25e6d08d]{font-size:.6em;padding-top:.2em;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.reverse[data-v-25e6d08d]{transform:scaleX(-1)}.keyboard-key[data-v-25e6d08d]{align-items:center;background-color:var(--bg);border:1px solid #ccc;border-radius:4px;box-shadow:0 2px 1px rgba(0,0,0,.4);color:#333;display:flex;font-size:.6em;font-weight:700;height:1em;justify-content:center;margin-right:.2em;padding:.2em}.keyboard-key[data-v-25e6d08d]:hover{border:2px solid rgba(0,0,0,.2);box-shadow:none;cursor:pointer}.overlay[data-v-25e6d08d]{align-items:center;background-color:hsla(0,0%,88%,.8);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%}.overlay-close[data-v-25e6d08d]{cursor:pointer;display:inline-block;position:fixed;right:4.2em;top:3em;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-close-text[data-v-25e6d08d]{font-size:.7em;padding-right:.5em;text-transform:uppercase}.overlay-close-icon[data-v-25e6d08d]{font-size:1.1em;position:absolute;top:-.03em}.overlay-content[data-v-25e6d08d]{align-items:stretch;background-color:#fff;border-radius:var(--border-radius);box-shadow:0 4px 8px rgba(0,0,0,.2);display:grid;grid-template-columns:24% 76%;margin-top:-4em;min-width:600px;padding:1em}.overlay-content .overlay-menu[data-v-25e6d08d]{border-right:1px solid #ccc;display:flex;flex-direction:column;justify-content:center}.overlay-content .overlay-menu svg[data-v-25e6d08d]{height:1.1em;padding-right:1em;width:1.1em}.overlay-content ul[data-v-25e6d08d]{list-style-type:none;padding:0}.overlay-content .overlay-menu ul li[data-v-25e6d08d]{cursor:pointer;font-size:.8em;padding:.8em;text-align:left;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-content .overlay-menu ul li[data-v-25e6d08d]:hover{background:var(--color-link-hover-bg);font-weight:700}.overlay-content .overlay-submenu[data-v-25e6d08d]{display:flex;flex-direction:column;justify-content:center;margin-left:1em;text-align:center}.overlay-content .overlay-submenu ul li[data-v-25e6d08d]{cursor:pointer;font-size:.8em;padding:.8em;text-align:center;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-content .overlay-submenu ul li[data-v-25e6d08d]:hover{font-weight:700}.overlay-content input[type=file][data-v-25e6d08d]{display:none}.overlay-content .overlay-submenu a[data-v-25e6d08d]{color:inherit;text-align:center;-webkit-text-decoration:none;text-decoration:none}.overlay-content .overlay-submenu a[data-v-25e6d08d],.overlay-content label[data-v-25e6d08d]{cursor:pointer;display:inline-block;opacity:.8;-webkit-user-select:none;-moz-user-select:none;user-select:none}.overlay-content label[data-v-25e6d08d]{border:1px dashed var(--color-border);font-size:.8em;font-style:italic;padding:1em 6em;text-transform:uppercase}.answer-true[data-v-25e6d08d]{background:rgba(100,255,100,.1);border:1px dashed green;border-radius:var(--border-radius);color:green}.answer-false[data-v-25e6d08d],.answer-true[data-v-25e6d08d]{padding-left:.5em;padding-right:.5em}.answer-false[data-v-25e6d08d]{background:hsla(0,100%,70%,.1);border:1px dashed red;border-radius:var(--border-radius);color:red}.no-wrap[data-v-25e6d08d]{white-space:nowrap}.italic-bold[data-v-25e6d08d]{font-style:italic;font-weight:700}}',""]),r.locals={},e.exports=r},425:function(e,t,n){"use strict";n.r(t);var r=n(20),o=(n(294),n(296),n(11),n(29),n(300),n(302),n(303),n(304),n(305),n(306),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(31),n(24),n(40),n(28),n(138),n(44),n(41),n(45),n(36),n(25),n(30),n(46),n(47),n(376));function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var d={name:"imge",layout:"blank",data:function(){return{questions:o.data,currentQuestionIndex:0,droppedItems:Array(6).fill(null),dropMap:new Map([[0,[]],[1,[]],[2,[]],[3,[]],[4,[]],[5,[]]]),userAnswerMap:new Map([[0,null],[1,null],[2,null],[3,null],[4,null],[5,null]]),answerMap:new Map([[0,"0"],[1,"1"],[2,"2"],[3,"3"],[4,"4"],[5,"5"]]),overlayVisible:!0,selectedOverlayMenu:"exercises",randomMode:!1,isAnswersShuffled:!1,reRenderQuestion:0}},computed:{currentQuestion:function(){return this.questions[this.currentQuestionIndex]}},mounted:function(){var e=this;this.setCurrentQuestion(),window.addEventListener("keydown",(function(t){"Enter"===t.key?e.checkAnswers():"ArrowRight"===t.key?e.nextQuestion():"ArrowLeft"===t.key?e.prevQuestion():"Escape"===t.key?e.toggleOverlay():"r"===t.key?e.toggleRandomMode():"t"===t.key&&e.showCorrectAnswers()}))},beforeDestroy:function(){var e=this;window.removeEventListener("keydown",(function(t){"Enter"===t.key&&e.checkAnswers()}))},methods:{styleDroppedElement:function(e){e.style.fontSize="0.9em",e.style.display="inline",e.style.border="1px dashed #aaa",e.style.paddingLeft="1em",e.style.paddingRight="1em",e.style.userSelect="none",e.style.marginRight="1em",e.style.textTransform="uppercase",e.style.fontStyle="italic",e.style.opacity="0.8",e.style.whiteSpace="nowrap"},styleAnswer:function(e,t){e.style.color="red",e.style.background="rgba(255, 100, 100, 0.1)",e.style.border="1px dashed red",t&&(e.style.color="green",e.style.border="1px dashed green",e.style.background="rgba(100, 255, 100, 0.1)"),e.style.borderRadius="var(--border-radius)",e.style.paddingLeft=".5em",e.style.paddingRight=".5em"},showCorrectAnswers:function(){var e=this;this.cleanTextFromAnswers(),this.currentQuestion.answers.forEach((function(t,n){var r=e.currentQuestion.correctAnswerKeys[n];document.getElementById("dropslot".concat(r));e.insertItem(r,n.toString());var o=document.getElementById("drop".concat(n));e.styleAnswer(o,!0);var c=document.getElementById("sentence".concat(e.answerMap.get(n)+1));c.classList.add("draggable-disabled"),c.setAttribute("draggable","false")}))},nextRandomQuestion:function(){var e;do{e=Math.floor(Math.random()*this.questions.length)}while(e===this.currentQuestionIndex);this.currentQuestionIndex=e,this.setCurrentQuestion()},toggleRandomMode:function(){this.randomMode=!this.randomMode,this.randomMode&&this.nextRandomQuestion()},handleFileUpload:function(e){var t=this,n=e.target.files[0];if(n&&"application/json"===n.type){var r=new FileReader;r.onload=function(e){try{var n=JSON.parse(e.target.result);t.questions=n.data,t.currentQuestionIndex=0,t.setCurrentQuestion()}catch(e){console.error("Invalid JSON format:",e)}},r.readAsText(n),this.toggleOverlay()}else alert("Please upload a valid JSON file.")},toggleOverlay:function(){this.overlayVisible=!this.overlayVisible},onDragStart:function(e,t){e.dataTransfer.setData("text/plain",t)},onDragOver:function(e){e.preventDefault()},onDrop:function(e,t){e.preventDefault();var n=e.dataTransfer.getData("text/plain");this.insertItem(t,n)},insertItem:function(e,t){if(null===this.dropMap.get(e)||this.dropMap.get(e)){null===this.dropMap.get(e)&&this.dropMap.set(e,[]);var n=document.getElementById("sentence".concat(parseInt(t)+1)).innerText;this.$set(this.droppedItems,e,n);var r=document.getElementById("sentence".concat(parseInt(t)+1));r.classList.add("draggable-disabled"),r.setAttribute("draggable","false");var o=document.getElementById("dropslot".concat(e));o.classList.remove("answer-true","answer-false");var span=document.createElement("span");span.innerText=n;Number(t);span.id="drop"+t,this.styleDroppedElement(span),this.dropMap.get(e).length<1&&o.prepend(document.createElement("br")),o.prepend(span),this.dropMap.get(e).push(t),this.userAnswerMap.set(Number(t),e)}},removeItem:function(e,t){var n=e.currentTarget;if(null!=this.dropMap.get(t)&&this.dropMap.get(t).length>0){var r=n.querySelector("span"),br=n.querySelector("br");r&&n.removeChild(r);var o=this.dropMap.get(t),c=Number(o[o.length-1])+1,l=c-1;o.pop(),o.length<1&&n.removeChild(br);var d=document.getElementById("sentence".concat(c));d&&(d.classList.remove("draggable-disabled"),d.setAttribute("draggable","true")),this.userAnswerMap.get(l)&&this.userAnswerMap.set(l,null)}},checkAnswers:function(){var e,t=c(this.answerMap);try{for(t.s();!(e=t.n()).done;){var n=Object(r.a)(e.value,2),o=n[0],l=(n[1],document.getElementById("drop".concat(o)));l&&(this.answerMap.get(o)==this.userAnswerMap.get(o)?this.styleAnswer(l,!0):this.styleAnswer(l,!1))}}catch(e){t.e(e)}finally{t.f()}},setAnswerMap:function(){var e=this;this.currentQuestion.correctAnswerKeys.forEach((function(t,n){e.answerMap.set(n,t)}))},nextQuestion:function(){this.randomMode?this.nextRandomQuestion():this.currentQuestionIndex<this.questions.length-1&&(this.currentQuestionIndex++,this.setCurrentQuestion())},prevQuestion:function(){this.currentQuestionIndex>0&&(this.currentQuestionIndex--,this.setCurrentQuestion())},cleanTextFromAnswers:function(){for(var i=0;i<6;i++){var element=document.getElementById("drop".concat(i));element&&element.parentNode.removeChild(element)}var e=document.getElementsByTagName("br");if(e)for(;e.length>0;)e[0].parentNode.removeChild(e[0])},setCurrentQuestion:function(){var e=this.questions[this.currentQuestionIndex];if(this.droppedItems=Array(6).fill(null),this.cleanTextFromAnswers(),this.dropMap=new Map(Array.from({length:6},(function(e,i){return[i,null]}))),e){if(this.isAnswersShuffled){var t=this.shuffleArray(e.answers);this.currentQuestion.answers=t}this.setAnswerMap();for(var i=0;i<8;i++){var n=document.getElementById("drop".concat(i+1));n&&(n.innerText=this.defaultDropTexts[i],n.classList.remove("answer-true"),n.classList.remove("answer-false"),n.classList.add("dropslot"),n.classList.remove("dropslot-occupied"));var r=document.getElementById("sentence".concat(i+1));r&&(r.classList.remove("draggable-disabled"),r.setAttribute("draggable","true"))}this.reRenderQuestion++}},shuffleArray:function(e){for(var t=e.map((function(e,t){return t})),i=t.length-1;i>0;i--){var n=Math.floor(Math.random()*(i+1)),r=[t[n],t[i]];t[i]=r[0],t[n]=r[1]}var o=t.map((function(t){return e[t]})),c=new Array(e.length);t.forEach((function(e,t){c[e]=t}));for(var l=0;l<this.currentQuestion.correctAnswerKeys.length;l++)for(var d=0;d<c.length;d++)if(this.currentQuestion.correctAnswerKeys[l]==d){this.currentQuestion.correctAnswerKeys[l]=c[d];break}return o}}},h=(n(377),n(7)),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center-page"},[n("div",{staticClass:"canvas"},[n("div",{staticClass:"box",attrs:{id:"box1"}},[n("h2",[e._v(e._s(e.currentQuestion.title))]),e._v(" "),n("div",e._l(e.currentQuestion.paragraphs,(function(t,r){return n("p",{key:"paragraph"+r,staticClass:"dropslot",attrs:{id:"dropslot"+r},on:{dragover:e.onDragOver,drop:function(t){return e.onDrop(t,r)},click:function(t){return e.removeItem(t,r)}}},[e._v("\n                    "+e._s(t)+"\n                ")])})),0)]),e._v(" "),n("div",{staticClass:"box",attrs:{id:"box2"}},[n("h2",[e._v("Questions")]),e._v(" "),e._l(e.currentQuestion.answers,(function(t,r){return n("div",{key:"sentence"+r,staticClass:"answer draggable",attrs:{draggable:"true"},on:{dragstart:function(t){return e.onDragStart(t,r)}}},[n("span",{staticClass:"tag"},[e._v(e._s(String.fromCharCode(97+r)))]),e._v(" "),n("span",{staticClass:"content",attrs:{id:"sentence"+(r+1)}},[e._v(e._s(t))])])}))],2)]),e._v(" "),n("div",{staticClass:"keyboard-shortcuts"},[n("div",{staticClass:"keyboard-key-block"},[n("div",{staticClass:"keyboard-key",on:{click:function(t){return e.toggleRandomMode()}}},[e._v("R")]),e._v(" "),n("div",{staticClass:"keyboard-key-desc"},[e._v("random mode : "),n("strong",[e._v(e._s(e.randomMode))])])]),e._v(" "),n("div",{staticClass:"keyboard-key-block"},[n("div",{staticClass:"keyboard-key",on:{click:function(t){return e.showCorrectAnswers()}}},[e._v("T")]),e._v(" "),n("div",{staticClass:"keyboard-key-desc"},[e._v("show answers")])]),e._v(" "),n("div",{staticClass:"keyboard-key-block"},[n("div",{staticClass:"keyboard-key",on:{click:function(t){return e.checkAnswers()}}},[e._v("Enter")]),e._v(" "),n("div",{staticClass:"keyboard-key-desc"},[e._v("Check answers")])]),e._v(" "),n("div",{staticClass:"keyboard-key-block"},[n("div",{staticClass:"keyboard-key reverse",on:{click:function(t){return e.prevQuestion()}}},[e._v("➜")]),e._v(" "),n("div",{staticClass:"keyboard-key-desc"},[e._v("Prev")])]),e._v(" "),n("div",{staticClass:"keyboard-key-block"},[n("div",{staticClass:"keyboard-key",on:{click:function(t){return e.nextQuestion()}}},[e._v("➜")]),e._v(" "),n("div",{staticClass:"keyboard-key-desc"},[e._v("next")])]),e._v(" "),n("div",{staticClass:"keyboard-key-block"},[n("div",{staticClass:"keyboard-key",on:{click:function(t){return e.toggleOverlay()}}},[e._v("ESC")]),e._v(" "),n("div",{staticClass:"keyboard-key-desc"},[e._v("settings")])])]),e._v(" "),e.overlayVisible?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-close",on:{click:function(t){return e.toggleOverlay()}}},[n("span",{staticClass:"overlay-close-text"},[e._v("close")]),e._v(" "),n("span",{staticClass:"overlay-close-icon"},[e._v(" ⨯ ")])]),e._v(" "),n("div",{staticClass:"overlay-content"},[n("div",{staticClass:"overlay-menu"},[n("ul",[n("li",{on:{click:function(t){e.selectedOverlayMenu="exercises"}}},[n("svg",{staticClass:"w-6 h-6 text-gray-800 dark:text-white",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"}},[n("path",{attrs:{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"}})]),e._v("\n\n                        exercises\n                    ")]),e._v(" "),n("li",{on:{click:function(t){e.selectedOverlayMenu="upload"}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3"}})]),e._v("\n                        upload\n                    ")])])]),e._v(" "),n("div",{staticClass:"overlay-submenu"},["upload"===e.selectedOverlayMenu?n("div",[n("label",{staticClass:"custom-file-upload"},[n("input",{staticClass:"default-input",attrs:{type:"file",accept:".json"},on:{change:e.handleFileUpload}}),e._v("\n                        Click to upload your data\n                    ")])]):"exercises"===e.selectedOverlayMenu?n("div",[e._m(0)]):e._e()])])]):e._e()])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"/project/blackboard"}},[e._v("text construction")])]),e._v(" "),n("li",[n("a",{staticClass:"italic-bold",attrs:{href:"/project/blackboard2"}},[e._v("selective reading")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/project/blackboard3"}},[e._v("detail understanding")])]),e._v(" "),n("li",[n("a",{attrs:{href:"/project/blackboard4"}},[e._v("grammar training")])])])}],!1,null,"25e6d08d",null);t.default=component.exports}}]);