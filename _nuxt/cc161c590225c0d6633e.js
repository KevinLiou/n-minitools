(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{177:function(t,s,e){var a=e(179);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(8).default)("9bec8600",a,!0,{sourceMap:!1})},178:function(t,s,e){"use strict";var a=e(177);e.n(a).a},179:function(t,s,e){(t.exports=e(7)(!1)).push([t.i,"",""])},180:function(t,s,e){"use strict";var a={mounted:function(){window.__sharethis__.load("inline-share-buttons",{id:"my-inline-buttons",enabled:!0,url:document.location.href,networks:["facebook","messenger","twitter","wechat","whatsapp","sharethis"]})}},r=(e(178),e(15)),o=Object(r.a)(a,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row mb-2"},[s("div",{staticClass:"col"},[s("div",{attrs:{id:"my-inline-buttons"}})])])}],!1,null,null,null);o.options.__file="share_this.vue";s.a=o.exports},189:function(t,s,e){var a=e(210);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,e(8).default)("51bb8020",a,!0,{sourceMap:!1})},209:function(t,s,e){"use strict";var a=e(189);e.n(a).a},210:function(t,s,e){(t.exports=e(7)(!1)).push([t.i,"",""])},225:function(t,s,e){"use strict";e.r(s);e(95);var a={components:{share_this:e(180).a},head:{title:"迷你工具 | 隨機抽籤機"},data:function(){return{num:1,seprate_type:"\n",options:"",results:[]}},computed:{},methods:{getResults:function(){var t=this.options.split(this.seprate_type);this.num<1&&(this.num=1),(t=t.filter(function(t){return""!=t})).length<=1?this.results=t:t.length<=this.num?(t=this.shuffle(t),this.results=t):(t=(t=this.shuffle(t)).slice(0,this.num),this.results=t)},shuffle:function(t){for(var s,e,a=t.length;0!==a;)e=Math.floor(Math.random()*a),s=t[a-=1],t[a]=t[e],t[e]=s;return t}}},r=(e(209),e(15)),o=Object(r.a)(a,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("share_this"),e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h5",[t._v("隨機抽籤機")]),e("hr"),e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"ControlSelect1"}},[t._v("選項分隔方式")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.seprate_type,expression:"seprate_type"}],staticClass:"form-control",attrs:{id:"ControlSelect1"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.seprate_type=s.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"\n",selected:""}},[t._v("分行(每行一個選項)")]),e("option",{attrs:{value:","}},[t._v(",(每個選項透過,隔開)")]),e("option",{attrs:{value:"、"}},[t._v("、(每個選項透過、隔開)")]),e("option",{attrs:{value:" "}},[t._v("空白(每個選項透過空白隔開)")])])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("填入所有選項")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.options,expression:"options"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",placeholder:"這裡填入所有選項",rows:"7"},domProps:{value:t.options},on:{input:function(s){s.target.composing||(t.options=s.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"formGroupExampleInput2"}},[t._v("抽幾個")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],staticClass:"form-control",attrs:{id:"formGroupExampleInput2",type:"number",placeholder:"例如: 1",inputmode:"numeric",pattern:"[0-9]*"},domProps:{value:t.num},on:{input:function(s){s.target.composing||(t.num=s.target.value)}}})]),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary float-right",attrs:{type:"button"},on:{click:function(s){t.getResults()}}},[t._v("開始抽")])])])])])]),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h5",[t._v("抽籤結果")]),e("p",[t._v(t._s(t.randomMsg))]),e("hr"),e("ol",t._l(t.results,function(s){return e("li",[e("h5",{staticClass:"inline"},[e("div",{staticClass:"span badge badge-danger ml-3 mr-1"},[t._v(t._s(s))])])])})),e("hr"),e("p",[t._v(t._s(t.results.join(",")))])])])])]),t._m(0)],1)},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 mb-3"},[e("h5",[t._v("說明：")]),e("hr"),e("ol",[e("li",[t._v("選擇分隔方式"),e("br"),e("small",[t._v("＊預設方式是「分行」，也就是每一行代表一個選項。")])]),e("li",[t._v("填入你的所有選項")]),e("li",[t._v("填入要抽的個數")]),e("li",[t._v("點擊開始抽")])]),e("p",[t._v("程式會依照你的輸入，分隔成各種選項，然後幫你隨機抽籤。")])]),e("div",{staticClass:"col-md-6"},[e("h5",[t._v("適用情境")]),e("hr"),e("strong",[t._v("例如: 不知道吃什麼便當的時候...")]),e("p",[t._v("A. 在「填入所有選項」輸入：")]),e("p",[t._v("雞腿便當"),e("br"),t._v("排骨便當"),e("br"),t._v("雞排便當"),e("br"),t._v("控肉便當")]),e("p",[t._v("B. 點擊 "),e("strong",[t._v("開始抽")])]),e("p",[t._v("C. 查看 "),e("strong",[t._v("抽籤結果")])])])])}],!1,null,null,null);o.options.__file="random.vue";s.default=o.exports}}]);