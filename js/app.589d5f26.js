(function(){"use strict";var t={4963:function(t,a,e){var i=e(9242),n=e(3396);const o=(0,n._)("h1",{class:"animate__animated animate__fadeInDown text"},[(0,n.Uk)(" Welcome To "),(0,n._)("span",null,"Taipei"),(0,n.Uk)("Hiking ")],-1),s=(0,n._)("div",{class:"entBtn animate__animated animate__fadeIn"},[(0,n._)("h3",null,"進入網站")],-1),r=[o,s];function l(t,a,e,o,s,l){const c=(0,n.up)("Navbar"),p=(0,n.up)("router-view"),w=(0,n.up)("Bottom");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.wy)((0,n._)("div",{class:"Welcome",onClick:a[0]||(a[0]=(...t)=>l.WelClick&&l.WelClick(...t))},r,512),[[i.F8,s.isshow]]),(0,n.Wm)(c),(0,n.Wm)(p),(0,n.Wm)(w)],64)}var c=e(7139),p=e.p+"img/Taipei-Hiking-Logo.de052a80.png";const w=t=>((0,n.dD)("data-v-6871b2f5"),t=t(),(0,n.Cn)(),t),m={lang:"en"},g=w((()=>(0,n._)("head",null,[(0,n._)("meta",{charset:"UTF-8"}),(0,n._)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,n._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n._)("title",null,"Document")],-1))),d={class:"logo"},u=w((()=>(0,n._)("img",{src:p,alt:""},null,-1)));function h(t,a){const e=(0,n.up)("router-link"),o=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)("html",m,[g,(0,n._)("body",null,[(0,n.Wm)(i.uT,null,{default:(0,n.w5)((()=>[(0,n._)("nav",{style:(0,c.j5)(t.rwdHeight)},[(0,n._)("div",d,[(0,n.Wm)(e,{to:"/"},{default:(0,n.w5)((()=>[u])),_:1})]),(0,n._)("div",{class:"bar",onClick:a[0]||(a[0]=(...a)=>t.change&&t.change(...a))},[(0,n._)("p",null,[(0,n.Wm)(o,{icon:"fa-solid fa-bars"})])]),(0,n._)("ul",null,[(0,n._)("li",{onClick:a[1]||(a[1]=(...a)=>t.alreadyBtn&&t.alreadyBtn(...a))},[(0,n.Wm)(e,{to:"/explore"},{default:(0,n.w5)((()=>[(0,n.Uk)("探索景點")])),_:1})])])],4)])),_:1})])])}var v={data(){return{enter:!0,Show:!1,rwdHeight:{height:"90px"},fullWidth:0,fullHeight:0}},mounted(){const t=this;t.fullWidth=window.innerWidth,t.fullHeight=window.innerHeight,window.onresize=()=>{t.fullWidth=window.innerWidth,t.fullHeight=window.innerHeight,t.fullWidth>765&&(this.rwdHeight.height="90px")}},methods:{change(){this.Show=!this.Show,!0===this.Show?this.rwdHeight.height="160px":this.rwdHeight.height="90px"},alreadyBtn(){this.Show=!this.Show,this.rwdHeight.height="90px"}}},_=e(89);const f=(0,_.Z)(v,[["render",h],["__scopeId","data-v-6871b2f5"]]);var x=f;const j={class:"Container"};function b(t,a,e,i,o,s){return(0,n.wg)(),(0,n.iD)("div",j)}var k={props:{}};const y=(0,_.Z)(k,[["render",b],["__scopeId","data-v-1aaaa60f"]]);var z=y,M={name:"App",components:{Navbar:x,Bottom:z},data(){return{isshow:!0}},methods:{WelClick(){this.isshow=!1}}};const q=(0,_.Z)(M,[["render",l]]);var C=q,T=e(2483);const O=t=>((0,n.dD)("data-v-6dff715b"),t=t(),(0,n.Cn)(),t),W={lang:"en"},D=O((()=>(0,n._)("head",null,[(0,n._)("meta",{charset:"UTF-8"}),(0,n._)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,n._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n._)("title",null,"Document")],-1))),A={class:"Container"},H={class:"banner"},L={class:"swiper"},U={class:"weather"},I=O((()=>(0,n._)("option",{disabled:"",value:""},"探索景點",-1))),B=["value"],S=O((()=>(0,n._)("div",null,[(0,n._)("input",{class:"messageBox",placeholder:"輸入關鍵字"})],-1))),E=O((()=>(0,n._)("div",null,[(0,n._)("button",{type:"button",class:"searchBtn"},"搜尋")],-1))),P={class:"weatherBox"},F={class:"weatherReport"},N={class:"wp01"},K=O((()=>(0,n._)("h4",null,"目前溫度",-1))),V={class:"lightBox"},Y=O((()=>(0,n._)("h4",null,"紫外線指數",-1))),Z=O((()=>(0,n._)("h4",null,"低量級",-1))),J={class:"wp01"},G=O((()=>(0,n._)("h4",null,"降雨機率",-1))),X={class:"lightBox"},$=O((()=>(0,n._)("h4",null,"空氣品質指標",-1))),R=O((()=>(0,n._)("h4",null,"低量級",-1))),Q={class:"HighHiking"},tt=O((()=>(0,n._)("div",{class:"HighHikingTitle"},[(0,n._)("h2",null,"熱門登山景點")],-1))),at={class:"HighHikingLocation"},et=["onClick"],it={class:"Location"},nt={class:"hoverImage"},ot=["src"],st={class:"LocationTitle"},rt=(0,n.uE)('<div class="TaipeiVideo" data-v-6dff715b><div class="Filter" data-v-6dff715b><h3 data-v-6dff715b>看見台北 - 觀光即時影像</h3><div class="VideoList" data-v-6dff715b><ul data-v-6dff715b><li data-v-6dff715b><div class="VideoHover" data-v-6dff715b><a href="https://www.youtube.com/watch?v=z_fY1pj1VBw&amp;feature=youtu.be" target="_blank" data-v-6dff715b><img src="https://www.travel.taipei/content/images/index/cover-live-camera-107.jpg" alt="" data-v-6dff715b></a></div><p data-v-6dff715b>象山看台北</p></li><li data-v-6dff715b><div class="VideoHover" data-v-6dff715b><a href="https://www.youtube.com/watch?v=Ndo_8RuefH4&amp;feature=youtu.be" target="_blank" data-v-6dff715b><img src="https://www.travel.taipei/content/images/index/cover-live-camera-122.jpg" alt="" data-v-6dff715b></a></div><p data-v-6dff715b>大稻埕碼頭</p></li><li data-v-6dff715b><div class="VideoHover" data-v-6dff715b><a href="https://www.youtube.com/watch?v=fP4ecxfsJos" target="_blank" data-v-6dff715b><img src="https://www.travel.taipei/content/images/index/cover-live-camera-128.jpg" alt="" data-v-6dff715b></a></div><p data-v-6dff715b>大佳河濱公園</p></li><li data-v-6dff715b><div class="VideoHover" data-v-6dff715b><a href="https://www.youtube.com/watch?v=uvwfYzwY8tg" target="_blank" data-v-6dff715b><img src="https://www.travel.taipei/content/images/index/cover-live-camera-129.jpg" alt="" data-v-6dff715b></a></div><p data-v-6dff715b>碧山巌開漳聖王廟</p></li><li data-v-6dff715b><div class="VideoHover" data-v-6dff715b><a href="https://www.youtube.com/watch?v=34h_Cy_n0Ok&amp;feature=youtu.be" target="_blank" data-v-6dff715b><img src="https://www.travel.taipei/content/images/index/cover-live-camera-130.jpg" alt="" data-v-6dff715b></a></div><p data-v-6dff715b>劍潭山微風平台</p></li></ul></div></div></div>',1);function lt(t,a){const e=(0,n.up)("Swiper"),o=(0,n.up)("font-awesome-icon"),s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("html",W,[D,(0,n._)("body",null,[(0,n._)("div",A,[(0,n._)("div",H,[(0,n._)("div",L,[(0,n.Wm)(e)]),(0,n._)("div",U,[(0,n._)("div",null,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":a[0]||(a[0]=a=>t.selected=a),class:"selectBox"},[I,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.cityList,(t=>((0,n.wg)(),(0,n.iD)("option",{value:t},(0,c.zw)(t),9,B)))),256))],512),[[i.bM,t.selected]])]),S,E,(0,n._)("div",P,[(0,n._)("div",F,[(0,n._)("div",N,[(0,n._)("div",null,[K,(0,n._)("span",null,[(0,n.Wm)(o,{icon:"fa-solid fa-cloud"})]),(0,n.Uk)((0,c.zw)(t.taipeiMaxT)+" ° ",1)]),(0,n._)("div",V,[Y,(0,n._)("div",{style:(0,c.j5)(t.UV)},null,4),Z])]),(0,n._)("div",J,[(0,n._)("div",null,[G,(0,n._)("span",null,[(0,n.Wm)(o,{icon:"fa-solid fa-umbrella"})]),(0,n.Uk)((0,c.zw)(t.taipeiPoP)+"% ",1)]),(0,n._)("div",X,[$,(0,n._)("div",{style:(0,c.j5)(t.UV)},null,4),R])])])])])]),(0,n._)("div",Q,[tt,(0,n._)("div",at,[(0,n._)("ul",null,[(0,n.Wm)(s,{to:"/attractions",class:"router"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.HeightLocation,(a=>((0,n.wg)(),(0,n.iD)("li",{onClick:e=>t.HeighLocationClick(a)},[(0,n._)("div",it,[(0,n._)("div",nt,[(0,n._)("img",{src:a.mountain[0].frontCover,alt:""},null,8,ot)]),(0,n._)("div",st,[(0,n._)("h3",null,(0,c.zw)(a.mountain[0].name),1),(0,n._)("p",null,[(0,n._)("span",null,[(0,n.Wm)(o,{icon:"fa-solid fa-location-dot"})]),(0,n.Uk)(" "+(0,c.zw)(a.Area),1)])])])],8,et)))),256))])),_:1})])])]),rt])])])}e(7658);const ct=t=>((0,n.dD)("data-v-5f6b07f0"),t=t(),(0,n.Cn)(),t),pt={lang:"en"},wt=ct((()=>(0,n._)("head",null,[(0,n._)("meta",{charset:"UTF-8"}),(0,n._)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,n._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n._)("title",null,"Document")],-1))),mt=ct((()=>(0,n._)("img",{src:"https://www.travel.taipei/image/222661/?r=1637907889363",alt:""},null,-1))),gt=ct((()=>(0,n._)("img",{src:"https://www.travel.taipei/content/images/attractions/221113/1024x768_attractions-image-ptecd9nfpuyzkeausbgdzw.jpg",alt:""},null,-1))),dt=ct((()=>(0,n._)("img",{src:"https://www.travel.taipei/content/images/attractions/222471/1024x768_attractions-image-llcssbaineqz1_c53ihiow.jpg",alt:""},null,-1))),ut=ct((()=>(0,n._)("img",{src:"https://www.travel.taipei/content/images/attractions/222470/1024x768_attractions-image-f4aqs1fpj0uxlyfy2vkfwg.jpg",alt:""},null,-1))),ht=ct((()=>(0,n._)("img",{src:"https://www.travel.taipei/content/images/attractions/222474/1024x768_attractions-image-0imy8z5vhumhvufdnirqvw.jpg",alt:""},null,-1)));function vt(t,a){const e=(0,n.up)("swiper-slide"),i=(0,n.up)("swiper",!0);return(0,n.wg)(),(0,n.iD)("html",pt,[wt,(0,n._)("body",null,[(0,n.Wm)(i,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:t.modules,class:"mySwiper"},{default:(0,n.w5)((()=>[(0,n.Wm)(e,null,{default:(0,n.w5)((()=>[mt])),_:1}),(0,n.Wm)(e,null,{default:(0,n.w5)((()=>[gt])),_:1}),(0,n.Wm)(e,null,{default:(0,n.w5)((()=>[dt])),_:1}),(0,n.Wm)(e,null,{default:(0,n.w5)((()=>[ut])),_:1}),(0,n.Wm)(e,null,{default:(0,n.w5)((()=>[ht])),_:1})])),_:1},8,["modules"])])])}var _t=e(5032),ft=e(3390),xt={components:{Swiper:_t.tq,SwiperSlide:_t.o5},setup(){return{modules:[ft.pt,ft.tl,ft.W_]}}};const jt=(0,_.Z)(xt,[["render",vt],["__scopeId","data-v-5f6b07f0"]]);var bt=jt,kt=e(5772);const yt="https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-D0047-061?Authorization=CWB-42A0DB50-1C2F-4736-AC60-684BCD54294D&downloadType=WEB&format=JSON",zt="https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-001?Authorization=CWB-42A0DB50-1C2F-4736-AC60-684BCD54294D&downloadType=WEB&format=JSON";var Mt={data(){return{selected:"",search:"",UV:{margin:"0 10px",width:"20px",height:"20px",backgroundColor:"green",borderRadius:"50%",boxShadow:"0 0 5px #6ECCAF"},cityList:[],tapieiWe:[],taipeiPoP:0,taipeiMaxT:0,HeightLocation:[{Area:"北投區",mountain:[{name:"軍艦岩親山步道",introduce:"軍艦岩位於石牌榮民總醫院正北方山區，海拔185.6公尺，登山步道約3公里，全線約5.7公里，步行時間約2小時7分鐘，為大屯山系的著名山嶺。嶺上突出的巨岩聳立在層層山巒間，乍看之下如同海上艦艇，因此得名軍艦岩。日據時代分別與唭哩岸山、丹鳳山、烏尖連山，共稱為烏尖連峰，山頂岩場是座理想的攀岩練習場，也是一處相當熱門的健行路線。",frontCover:"https://www.travel.taipei/image/222668/?r=1637907846783",images:["https://www.travel.taipei/image/222668/?r=1637907846783","https://www.travel.taipei/image/222661/?r=1637907889363","https://www.travel.taipei/image/222665/?r=1637907901443","https://www.travel.taipei/image/222662/?r=1637907959458","https://www.travel.taipei/image/222663/?r=1637907927370"],googleMapLocation:{lat:25.12731,lng:121.51872},information:{reObj:"健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["1.路徑長度：登山步道約3公里，全線約5.7公里","2.海拔高度：210公尺","3.步行時間：約2小時7分鐘"]}}]},{Area:"士林區",mountain:[{name:"天母古道親山步道",introduce:"天母古道親山步道穿越士林華岡地區的西北山坡，也是紗帽山南邊的鞍部，屬於早年魚路古道的後段，涵蓋華岡至天母間的數條步道，沿著大水管構築，潺潺溪水、原始林相，步行其間，讓人倍覺涼爽舒適。步道還可順遊經翠峰瀑布至猴洞產業道路的「翠峰步道」，夾峙在山間林蔭中，走起來特別涼爽舒適。",frontCover:"https://www.travel.taipei/content/images/attractions/221111/1024x768_attractions-image-w4kaypmnoe6o4dw8dzxgya.jpg",images:["https://www.travel.taipei/content/images/attractions/221112/1024x768_attractions-image-koh3in-nfu-z_nh8ixdcua.jpg","https://www.travel.taipei/content/images/attractions/221113/1024x768_attractions-image-ptecd9nfpuyzkeausbgdzw.jpg","https://www.travel.taipei/content/images/attractions/221114/1024x768_attractions-image-xceym0zfyeqd27sgbtki8g.jpg","https://www.travel.taipei/content/images/attractions/221115/1024x768_attractions-image-7bciftctze-y362bd39u1g.jpg","https://www.travel.taipei/content/images/attractions/221106/1024x768_attractions-image-dtfz6smrkusqz0l0h3qo9w.jpg"],googleMapLocation:{lat:25.12764,lng:121.53367},information:{reObj:"健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["1.路徑長度:登山步道約2.6公里，全線約3.75公里","2.海拔高度:約387公尺","3.步行時間:約2小時"]}}]},{Area:"信義區",mountain:[{name:"象山親山步道",introduce:"象山海拔183公尺，步道全長1450公尺，全程約需1小時40分。因外形似象頭而得名，位於臺北盆地東南方的信義區，與虎山地質相同主要由砂岩組成，因造山作用步道中可見黃褐色陡峭的岩壁與巨石，加上自然環境生物、鳥類種類繁多，使得整座山如同一座天然生態樂園般，成為民眾接近淺山、享受戶外綠林悠閒時光的好去處。",frontCover:"https://www.travel.taipei/content/images/attractions/222131/1024x768_attractions-image-99gp_e_5o0m7njnwe5xnqw.jpg",images:["https://www.travel.taipei/content/images/attractions/222132/1024x768_attractions-image-_rcabszr7es60rbkxza4jq.jpg","https://www.travel.taipei/content/images/attractions/222129/1024x768_attractions-image-fjck6hgjre6acqcp2mhcqq.jpg","https://www.travel.taipei/content/images/attractions/222130/1024x768_attractions-image-4cq65cev7eygfr9tlwvarq.jpg","https://www.travel.taipei/content/images/attractions/222133/1024x768_attractions-image-ab0h3r0_xuqxyzwwq4iffg.jpg","https://www.travel.taipei/content/images/attractions/222134/1024x768_attractions-image-fykjglwu_0i2eutg6gprga.jpg"],googleMapLocation:{lat:25.0274,lng:121.57082},information:{reObj:"親子共學、校外教學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["地理位置：臺北市信義區南港山系西北側山麓","路徑長度：登山步道約1.5公里，全線約2.3公里","海拔高度：183公尺","步行時間：約1小時40分鐘","景觀特色：自然生態精彩可期、登高遠望景致盡收眼底","活動方式：賞景、體能訓練、享受芬多精"]}}]},{Area:"內湖區",mountain:[{name:"金面山親山步道",introduce:"金面山為五指山系之西南稜，分金面山與小金面山，這座山地質忠的安山砂岩含有石英，因此當太陽照射石遠望山頂閃閃發光，當地人便稱之為金面山。登山步道約2.3公里，全線約3公里，步行時間約1小時40分鐘。金面山親山步道位於內湖環山路德明財經技術大學旁，步道自起點開始就可見幾近垂直的大岩壁，沿途盡是古樸的砂岩石階，隨著坡度漸漸上升，石階路改由直徑超過100公尺以上的大岩壁取代，登上半山腰，有一處清代採石場的石堡瞭望台，是明顯的地標，山頂巨岩間當然是一處眺望臺北市景、基隆河沿岸的最佳駐腳點。 ",frontCover:"https://www.travel.taipei/content/images/attractions/222470/1024x768_attractions-image-f4aqs1fpj0uxlyfy2vkfwg.jpg",images:["https://www.travel.taipei/content/images/attractions/222470/1024x768_attractions-image-f4aqs1fpj0uxlyfy2vkfwg.jpg","https://www.travel.taipei/content/images/attractions/222471/1024x768_attractions-image-llcssbaineqz1_c53ihiow.jpg","https://www.travel.taipei/content/images/attractions/222472/1024x768_attractions-image-_0xj2sslwe-uqfkevza_gq.jpg","https://www.travel.taipei/content/images/attractions/222473/1024x768_attractions-image-yybsuzm10064lcvsupgtvg.jpg","https://www.travel.taipei/content/images/attractions/222474/1024x768_attractions-image-0imy8z5vhumhvufdnirqvw.jpg"],googleMapLocation:{lat:25.08867,lng:121.56795},information:{reObj:"親子共學、校外教學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["地理位置：臺北市內湖區五指山系西南稜","路徑長度：登山步道約2.3公里，全線約3公里","海拔高度：258公尺","步行時間：約1小時40分鐘","景觀特色：自然生態精彩可期、登高遠望景致盡收眼底。","活動方式：賞景、體能訓練、享受芬多精"]}}]}]}},name:"App",components:{Swiper:bt},mounted(){kt.Z.get(yt).then((t=>{let a=t.data.cwbopendata.dataset.locations.location;a.map((t=>{this.cityList.push(t.locationName)}))})),kt.Z.get(zt).then((t=>{let a=t.data.cwbopendata.dataset.location;this.tapieiWe=a.find((t=>"臺北市"===t.locationName)),this.tapieiWe=this.tapieiWe.weatherElement,this.taipeiPoP=this.tapieiWe.find((t=>"PoP"===t.elementName)),this.taipeiPoP=this.taipeiPoP.time[0].parameter.parameterName,this.taipeiMaxT=this.tapieiWe.find((t=>"MaxT"===t.elementName)),this.taipeiMaxT=this.taipeiMaxT.time[0].parameter.parameterName}))},methods:{HeighLocationClick(t){const a=t.mountain[0];this.$store.commit("setnowCity",t.Area),this.$store.commit({type:"setnowMountain",qty:a})}}};const qt=(0,_.Z)(Mt,[["render",lt],["__scopeId","data-v-6dff715b"]]);var Ct=qt;const Tt=t=>((0,n.dD)("data-v-286ee25e"),t=t(),(0,n.Cn)(),t),Ot={lang:"en"},Wt=Tt((()=>(0,n._)("head",null,[(0,n._)("meta",{charset:"UTF-8"}),(0,n._)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,n._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n._)("title",null,"Document")],-1))),Dt={class:"Container"},At={class:"exploreList"},Ht=Tt((()=>(0,n._)("span",null,"/",-1))),Lt=Tt((()=>(0,n._)("span",null,"/",-1))),Ut={class:"cityList"},It=["onClick"],Bt={class:"mountainList"},St=["onClick"],Et=["src"];function Pt(t,a){const e=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("html",Ot,[Wt,(0,n._)("body",null,[(0,n._)("div",Dt,[(0,n._)("div",At,[(0,n.Wm)(e,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("首頁")])),_:1}),Ht,(0,n.Uk)("探索景點"),Lt,(0,n.Uk)((0,c.zw)(t.city),1)]),(0,n._)("ul",Ut,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.TaipeiArea,(a=>((0,n.wg)(),(0,n.iD)("li",{class:"city",onClick:e=>t.selectArea(a.Area)},(0,c.zw)(a.Area),9,It)))),256))]),(0,n._)("ul",Bt,[(0,n.Wm)(e,{to:"/attractions",class:"router"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.mountainArray,(a=>((0,n.wg)(),(0,n.iD)("li",{class:"mountain",onClick:e=>t.clickMountain(a)},[(0,n._)("img",{src:a.frontCover,alt:""},null,8,Et),(0,n._)("h3",null,(0,c.zw)(a.name),1)],8,St)))),256))])),_:1})])])])])}var Ft=e(65),Nt={name:"Explore",data(){return{mountainArray:[{name:"軍艦岩親山步道",introduce:"軍艦岩位於石牌榮民總醫院正北方山區，海拔185.6公尺，登山步道約3公里，全線約5.7公里，步行時間約2小時7分鐘，為大屯山系的著名山嶺。嶺上突出的巨岩聳立在層層山巒間，乍看之下如同海上艦艇，因此得名軍艦岩。日據時代分別與唭哩岸山、丹鳳山、烏尖連山，共稱為烏尖連峰，山頂岩場是座理想的攀岩練習場，也是一處相當熱門的健行路線。",frontCover:"https://www.travel.taipei/image/222668/?r=1637907846783",images:["https://www.travel.taipei/image/222668/?r=1637907846783","https://www.travel.taipei/image/222661/?r=1637907889363","https://www.travel.taipei/image/222665/?r=1637907901443","https://www.travel.taipei/image/222662/?r=1637907959458","https://www.travel.taipei/image/222663/?r=1637907927370"],googleMapLocation:{lat:25.12731,lng:121.51872},information:{reObj:"健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["1.路徑長度：登山步道約3公里，全線約5.7公里","2.海拔高度：210公尺","3.步行時間：約2小時7分鐘"]}},{name:"忠義山親山步道",introduce:"位於臺北藝術大學後山的忠義山親山步道，沿途林木密集，路徑遮陽率在百分之九十以上，是一條原始幽靜的步道，對怕晒的山友來說，這裡是最佳之選的路徑；只不過沿途多處石階，尤其是登頂前盡是上坡石階，須不錯的腳力和體力才能勝任，呼吸的節奏更應適時調整，否則會走得氣喘吁吁、上氣接不到下氣。。",frontCover:"https://www.travel.taipei/content/images/attractions/63420/1024x768_attractions-image-pzyxjvtk5e2eguldvk1u0w.jpg",images:["https://www.travel.taipei/content/images/attractions/63422/1024x768_attractions-image-tzs_7xcaouq6zcv_kqm_oq.jpg","https://www.travel.taipei/content/images/attractions/63423/1024x768_attractions-image-obnlkcjeqkyazh82liqvhg.jpg","https://www.travel.taipei/content/images/attractions/63420/1024x768_attractions-image-pzyxjvtk5e2eguldvk1u0w.jpg","https://www.travel.taipei/content/images/attractions/63431/1024x768_attractions-image-4hczfljdmksadzijjblx4q.jpg","https://www.travel.taipei/content/images/attractions/63432/1024x768_attractions-image-im71v3rkwuugheahrho_ww.jpg"],googleMapLocation:{lat:25.13728,lng:121.4784},information:{reObj:"親子共學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["1.路徑長度:登山步道約6.8公里","2.海拔高度:224公尺","3.步行時間:約2小時50分鐘"]}},{name:"貴子坑親山步道",introduce:"位於北投稻香里的貴子坑園區佔地約10,000坪，原為瓷土礦場，後因山坡地闢建為休閒活動場而引來人潮。市府所規劃的第一條親山步道，便是串連捷運復興崗站的貴子坑親山步道，其中還包括捷運綠廊步道直通往貴子坑園區。",frontCover:"https://www.travel.taipei/content/images/attractions/63435/1024x768_attractions-image-av_wzawksucjaow4mjexma.jpg",images:["https://www.travel.taipei/content/images/attractions/63435/1024x768_attractions-image-av_wzawksucjaow4mjexma.jpg","https://www.travel.taipei/content/images/attractions/207828/1024x768_attractions-image-czmt4im2pekslu9s6prpiw.jpg","https://www.travel.taipei/content/images/attractions/207829/1024x768_attractions-image-xgdtkeijn0aarrg1x_azjw.jpg","https://www.travel.taipei/content/images/attractions/207830/1024x768_attractions-image-rgupjxzvrkwg8ngvktipvq.jpg","https://www.travel.taipei/content/images/attractions/207831/1024x768_attractions-image-uligxqbcjk6ibq5y7fftwq.jpg"],googleMapLocation:{lat:25.15278,lng:121.49051},information:{reObj:"親子共學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["1.路徑長度:登山步道約2.4公里，全線約7公里","2.海拔高度:291公尺","3.步行時間:約3小時"]}}],city:"北投區"}},computed:{...(0,Ft.rn)(["TaipeiArea"])},methods:{selectArea(t){const a=t,e=this.TaipeiArea.find((function(t){return t.Area===a}));this.mountainArray=e.mountain,this.$store.commit("setnowCity",t),this.city=t,console.log(t)},clickMountain(t){console.log(t),this.$store.commit({type:"setnowMountain",qty:t})}}};const Kt=(0,_.Z)(Nt,[["render",Pt],["__scopeId","data-v-286ee25e"]]);var Vt=Kt;const Yt=t=>((0,n.dD)("data-v-7632e94a"),t=t(),(0,n.Cn)(),t),Zt={lang:"en"},Jt=Yt((()=>(0,n._)("head",null,[(0,n._)("meta",{charset:"UTF-8"}),(0,n._)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,n._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n._)("title",null,"Document")],-1))),Gt={class:"Container"},Xt={class:"exploreList"},$t=Yt((()=>(0,n._)("span",null,"/",-1))),Rt=Yt((()=>(0,n._)("span",null,"/",-1))),Qt=Yt((()=>(0,n._)("span",null,"/",-1))),ta={class:"information"},aa={class:"swiper"},ea={class:"map"},ia=Yt((()=>(0,n._)("div",{class:"mapTitle"},[(0,n._)("h3",null,"景點地圖")],-1))),na={id:"map"},oa={class:"introduce"},sa=Yt((()=>(0,n._)("h4",null,"景點介紹：",-1))),ra={class:"intText"},la={class:"Exinf"},ca=Yt((()=>(0,n._)("h4",null,"景點資訊",-1))),pa=Yt((()=>(0,n._)("li",null,[(0,n._)("div",{class:"ExinfTitle"},"推薦對象"),(0,n.Uk)(" 健行族 ")],-1))),wa=Yt((()=>(0,n._)("li",null,[(0,n._)("div",{class:"ExinfTitle"},"推薦月份"),(0,n.Uk)(" 整年 ")],-1))),ma=Yt((()=>(0,n._)("li",null,[(0,n._)("div",{class:"ExinfTitle"},"管理單位"),(0,n.Uk)(" 臺北市政府工務局大地工程處 ")],-1))),ga=Yt((()=>(0,n._)("li",null,[(0,n._)("div",{class:"ExinfTitle"},"電話"),(0,n.Uk)(" +886-2-27593001 ")],-1))),da={class:"OpenTime"},ua=Yt((()=>(0,n._)("h4",null,"開放時間",-1))),ha={class:"Note"},va=Yt((()=>(0,n._)("h4",null,"小叮嚀",-1)));function _a(t,a){const e=(0,n.up)("router-link"),i=(0,n.up)("SwiperMountain"),o=(0,n.up)("Map");return(0,n.wg)(),(0,n.iD)("html",Zt,[Jt,(0,n._)("body",null,[(0,n._)("div",Gt,[(0,n._)("div",Xt,[(0,n.Wm)(e,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("首頁")])),_:1}),$t,(0,n.Uk)("探索景點"),Rt,(0,n.Uk)((0,c.zw)(t.nowCity),1),Qt,(0,n.Uk)((0,c.zw)(t.nowMountain.name),1)]),(0,n._)("div",ta,[(0,n._)("div",aa,[(0,n.Wm)(i)]),(0,n._)("div",ea,[ia,(0,n._)("div",na,[(0,n.Wm)(o),(0,n.Uk)(">")])])]),(0,n._)("div",oa,[(0,n._)("h3",null,(0,c.zw)(t.nowMountain.name),1),sa,(0,n._)("div",ra,[(0,n._)("p",null,(0,c.zw)(t.nowMountain.introduce),1)]),(0,n._)("div",la,[ca,(0,n._)("ul",null,[pa,wa,ma,ga,(0,n._)("li",null,[(0,n._)("div",da,[ua,(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.nowMountain.information.OpenTime,(t=>((0,n.wg)(),(0,n.iD)("li",null,[(0,n._)("span",null,(0,c.zw)(t),1)])))),256))])])]),(0,n._)("li",null,[(0,n._)("div",ha,[va,(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.nowMountain.information.exhort,(t=>((0,n.wg)(),(0,n.iD)("li",null,(0,c.zw)(t),1)))),256))])])])])])])])])])}const fa={lang:"en"},xa=(0,n.uE)('<head data-v-73ae0e3a><meta charset="UTF-8" data-v-73ae0e3a><meta http-equiv="X-UA-Compatible" content="IE=edge" data-v-73ae0e3a><meta name="viewport" content="width=device-width, initial-scale=1.0" data-v-73ae0e3a><title data-v-73ae0e3a>Document</title></head><body data-v-73ae0e3a><div class="container" data-v-73ae0e3a><div id="map" data-v-73ae0e3a></div></div></body>',2),ja=[xa];function ba(t,a){return(0,n.wg)(),(0,n.iD)("html",fa,ja)}var ka=e(4903);const ya=new ka.aN({apiKey:"AIzaSyC4DPl7G4rZgvzA3onOrIkrpYHD5Xo4dTc",version:"weekly"});var za={name:"map",data(){return{mapdata:[],map:null,lat:25.12731,lng:121.51872,infowindow:null}},computed:{...(0,Ft.rn)(["nowMountain"])},mounted(){this.lat=this.nowMountain.googleMapLocation.lat,this.lng=this.nowMountain.googleMapLocation.lng,this.mapdata=[{name:this.nowMountain.name,lat:this.nowMountain.googleMapLocation.lat,lng:this.nowMountain.googleMapLocation.lng}],this.initMap(),this.setMarker()},methods:{initMap(){ya.load().then((t=>{this.map=new t.maps.Map(document.getElementById("map"),{center:{lat:this.lat,lng:this.lng},zoom:13})}))},setMarker(){ya.load().then((t=>{this.mapdata.forEach((a=>{const e=new t.maps.Marker({position:{lat:a.lat,lng:a.lng},map:this.map}),i=new t.maps.InfoWindow({content:`\n            <div id="content">\n              <p id="firstHeading" class="firstHeading">${a.name}</p>\n            </div>\n          `,maxWidth:200});e.addListener("click",(()=>{this.infowindow&&this.infowindow.close(),i.open(this.map,e),this.infowindow=i}))}))}))}}};const Ma=(0,_.Z)(za,[["render",ba],["__scopeId","data-v-73ae0e3a"]]);var qa=Ma;const Ca=t=>((0,n.dD)("data-v-a1ec83d2"),t=t(),(0,n.Cn)(),t),Ta={lang:"en"},Oa=Ca((()=>(0,n._)("head",null,[(0,n._)("meta",{charset:"UTF-8"}),(0,n._)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,n._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n._)("title",null,"Document")],-1))),Wa=["src"];function Da(t,a){const e=(0,n.up)("swiper-slide"),i=(0,n.up)("swiper");return(0,n.wg)(),(0,n.iD)("html",Ta,[Oa,(0,n._)("body",null,[(0,n.Wm)(i,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:t.modules,class:"mySwiper"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.nowMountain.images,(t=>((0,n.wg)(),(0,n.j4)(e,null,{default:(0,n.w5)((()=>[(0,n._)("img",{src:t,alt:""},null,8,Wa)])),_:2},1024)))),256))])),_:1},8,["modules"])])])}var Aa={data(){return{}},components:{Swiper:_t.tq,SwiperSlide:_t.o5},setup(){return{modules:[ft.pt,ft.tl,ft.W_]}},computed:{...(0,Ft.rn)(["nowMountain"])}};const Ha=(0,_.Z)(Aa,[["render",Da],["__scopeId","data-v-a1ec83d2"]]);var La=Ha,Ua={name:"attractins",data(){return{}},components:{SwiperMountain:La,Map:qa},computed:{...(0,Ft.rn)(["TaipeiArea","nowCity","nowMountain"])},methods:{}};const Ia=(0,_.Z)(Ua,[["render",_a],["__scopeId","data-v-7632e94a"]]);var Ba=Ia;const Sa=[{path:"/",name:"home",component:Ct},{path:"/explore",name:"explore",component:Vt},{path:"/attractions",name:"attractions",component:Ba}],Ea=(0,T.p7)({history:(0,T.PO)(""),routes:Sa});var Pa=Ea,Fa=e(1787),Na=e(2746),Ka=e(3597),Va=(0,Ft.MT)({state:{TaipeiArea:[{Area:"北投區",mountain:[{name:"軍艦岩親山步道",introduce:"軍艦岩位於石牌榮民總醫院正北方山區，海拔185.6公尺，登山步道約3公里，全線約5.7公里，步行時間約2小時7分鐘，為大屯山系的著名山嶺。嶺上突出的巨岩聳立在層層山巒間，乍看之下如同海上艦艇，因此得名軍艦岩。日據時代分別與唭哩岸山、丹鳳山、烏尖連山，共稱為烏尖連峰，山頂岩場是座理想的攀岩練習場，也是一處相當熱門的健行路線。",frontCover:"https://www.travel.taipei/image/222668/?r=1637907846783",images:["https://www.travel.taipei/image/222668/?r=1637907846783","https://www.travel.taipei/image/222661/?r=1637907889363","https://www.travel.taipei/image/222665/?r=1637907901443","https://www.travel.taipei/image/222662/?r=1637907959458","https://www.travel.taipei/image/222663/?r=1637907927370"],googleMapLocation:{lat:25.12731,lng:121.51872},information:{reObj:"健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["1.路徑長度：登山步道約3公里，全線約5.7公里","2.海拔高度：210公尺","3.步行時間：約2小時7分鐘"]}},{name:"忠義山親山步道",introduce:"位於臺北藝術大學後山的忠義山親山步道，沿途林木密集，路徑遮陽率在百分之九十以上，是一條原始幽靜的步道，對怕晒的山友來說，這裡是最佳之選的路徑；只不過沿途多處石階，尤其是登頂前盡是上坡石階，須不錯的腳力和體力才能勝任，呼吸的節奏更應適時調整，否則會走得氣喘吁吁、上氣接不到下氣。。",frontCover:"https://www.travel.taipei/content/images/attractions/63420/1024x768_attractions-image-pzyxjvtk5e2eguldvk1u0w.jpg",images:["https://www.travel.taipei/content/images/attractions/63422/1024x768_attractions-image-tzs_7xcaouq6zcv_kqm_oq.jpg","https://www.travel.taipei/content/images/attractions/63423/1024x768_attractions-image-obnlkcjeqkyazh82liqvhg.jpg","https://www.travel.taipei/content/images/attractions/63420/1024x768_attractions-image-pzyxjvtk5e2eguldvk1u0w.jpg","https://www.travel.taipei/content/images/attractions/63431/1024x768_attractions-image-4hczfljdmksadzijjblx4q.jpg","https://www.travel.taipei/content/images/attractions/63432/1024x768_attractions-image-im71v3rkwuugheahrho_ww.jpg"],googleMapLocation:{lat:25.13728,lng:121.4784},information:{reObj:"親子共學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["1.路徑長度:登山步道約6.8公里","2.海拔高度:224公尺","3.步行時間:約2小時50分鐘"]}},{name:"貴子坑親山步道",introduce:"位於北投稻香里的貴子坑園區佔地約10,000坪，原為瓷土礦場，後因山坡地闢建為休閒活動場而引來人潮。市府所規劃的第一條親山步道，便是串連捷運復興崗站的貴子坑親山步道，其中還包括捷運綠廊步道直通往貴子坑園區。",frontCover:"https://www.travel.taipei/content/images/attractions/63435/1024x768_attractions-image-av_wzawksucjaow4mjexma.jpg",images:["https://www.travel.taipei/content/images/attractions/63435/1024x768_attractions-image-av_wzawksucjaow4mjexma.jpg","https://www.travel.taipei/content/images/attractions/207828/1024x768_attractions-image-czmt4im2pekslu9s6prpiw.jpg","https://www.travel.taipei/content/images/attractions/207829/1024x768_attractions-image-xgdtkeijn0aarrg1x_azjw.jpg","https://www.travel.taipei/content/images/attractions/207830/1024x768_attractions-image-rgupjxzvrkwg8ngvktipvq.jpg","https://www.travel.taipei/content/images/attractions/207831/1024x768_attractions-image-uligxqbcjk6ibq5y7fftwq.jpg"],googleMapLocation:{lat:25.15278,lng:121.49051},information:{reObj:"親子共學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["1.路徑長度:登山步道約2.4公里，全線約7公里","2.海拔高度:291公尺","3.步行時間:約3小時"]}}]},{Area:"士林區",mountain:[{name:"天母古道親山步道",introduce:"天母古道親山步道穿越士林華岡地區的西北山坡，也是紗帽山南邊的鞍部，屬於早年魚路古道的後段，涵蓋華岡至天母間的數條步道，沿著大水管構築，潺潺溪水、原始林相，步行其間，讓人倍覺涼爽舒適。步道還可順遊經翠峰瀑布至猴洞產業道路的「翠峰步道」，夾峙在山間林蔭中，走起來特別涼爽舒適。",frontCover:"https://www.travel.taipei/content/images/attractions/221111/1024x768_attractions-image-w4kaypmnoe6o4dw8dzxgya.jpg",images:["https://www.travel.taipei/content/images/attractions/221112/1024x768_attractions-image-koh3in-nfu-z_nh8ixdcua.jpg","https://www.travel.taipei/content/images/attractions/221113/1024x768_attractions-image-ptecd9nfpuyzkeausbgdzw.jpg","https://www.travel.taipei/content/images/attractions/221114/1024x768_attractions-image-xceym0zfyeqd27sgbtki8g.jpg","https://www.travel.taipei/content/images/attractions/221115/1024x768_attractions-image-7bciftctze-y362bd39u1g.jpg","https://www.travel.taipei/content/images/attractions/221106/1024x768_attractions-image-dtfz6smrkusqz0l0h3qo9w.jpg"],googleMapLocation:{lat:25.12764,lng:121.53367},information:{reObj:"健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["1.路徑長度:登山步道約2.6公里，全線約3.75公里","2.海拔高度:約387公尺","3.步行時間:約2小時"]}}]},{Area:"內湖區",mountain:[{name:"碧湖步道",introduce:"位於大湖街131巷與內湖路三段60巷之間，碧湖步道是一條隱身社區住宅間的美麗步道，因生態豐富、具歷史產業意涵，便規劃為具教育與休憩功能的親山步道，周圍連接了大溝溪溪畔步道、圓覺寺步道與鯉魚山步道，交通方便，適合各個年齡層的遊客前來。 ",frontCover:"https://www.travel.taipei/content/images/attractions/176794/1024x768_attractions-image-upht0lrjcuklz9kowmmfna.jpg",images:["https://www.travel.taipei/content/images/attractions/176794/1024x768_attractions-image-upht0lrjcuklz9kowmmfna.jpg","https://www.travel.taipei/content/images/attractions/176796/1024x768_attractions-image-g1gbf6prwekqo6cv1gxcia.jpg","https://www.travel.taipei/content/images/attractions/89335/1024x768_attractions-image-uwll1usopukkl66j7jsgfa.jpg","https://www.travel.taipei/zh-tw/attraction/details/230","https://www.travel.taipei/content/images/attractions/176802/1024x768_attractions-image-2v-kcdylbeqj33vwaib0dw.jpg"],googleMapLocation:{lat:25.08943,lng:121.59299},information:{reObj:"親子共學、校外教學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["▲步道動線：內湖路3段60巷登山口→鯉魚山南麓(0.7K)→新福本坑礦坑意象(0.6K)→大湖街131巷登山口(0.1K)→大溝溪親水公園(0.8K)","▲開放空間，全程沿線皆設有路燈，可於夜間來行走步道及欣賞夜景。"]}},{name:"金面山親山步道",introduce:"金面山為五指山系之西南稜，分金面山與小金面山，這座山地質忠的安山砂岩含有石英，因此當太陽照射石遠望山頂閃閃發光，當地人便稱之為金面山。登山步道約2.3公里，全線約3公里，步行時間約1小時40分鐘。金面山親山步道位於內湖環山路德明財經技術大學旁，步道自起點開始就可見幾近垂直的大岩壁，沿途盡是古樸的砂岩石階，隨著坡度漸漸上升，石階路改由直徑超過100公尺以上的大岩壁取代，登上半山腰，有一處清代採石場的石堡瞭望台，是明顯的地標，山頂巨岩間當然是一處眺望臺北市景、基隆河沿岸的最佳駐腳點。 ",frontCover:"https://www.travel.taipei/content/images/attractions/222470/1024x768_attractions-image-f4aqs1fpj0uxlyfy2vkfwg.jpg",images:["https://www.travel.taipei/content/images/attractions/222470/1024x768_attractions-image-f4aqs1fpj0uxlyfy2vkfwg.jpg","https://www.travel.taipei/content/images/attractions/222471/1024x768_attractions-image-llcssbaineqz1_c53ihiow.jpg","https://www.travel.taipei/content/images/attractions/222472/1024x768_attractions-image-_0xj2sslwe-uqfkevza_gq.jpg","https://www.travel.taipei/content/images/attractions/222473/1024x768_attractions-image-yybsuzm10064lcvsupgtvg.jpg","https://www.travel.taipei/content/images/attractions/222474/1024x768_attractions-image-0imy8z5vhumhvufdnirqvw.jpg"],googleMapLocation:{lat:25.08867,lng:121.56795},information:{reObj:"親子共學、校外教學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["地理位置：臺北市內湖區五指山系西南稜","路徑長度：登山步道約2.3公里，全線約3公里","海拔高度：258公尺","步行時間：約1小時40分鐘","景觀特色：自然生態精彩可期、登高遠望景致盡收眼底。","活動方式：賞景、體能訓練、享受芬多精"]}}]},{Area:"信義區",mountain:[{name:"虎山親山步道",introduce:"虎山為四獸山市民森林區內之淺山之一，連接區後南港山系構成臺北市東南側的屏障，海拔140公尺，地質屬海相地層之單面山地形，西高東低、視野遼闊，山頂設有一座日晷，可以觀日計時，步道由塊狀砂岩與頁岩交疊而成，因虎山溪流經，山澗型的生態環境同時也是孕育螢火蟲、小綠蛙及蕨類等多元生態的最佳地點，溪岸經整修鞏固及完善水土保持後，虎山溪沿線成為觀賞溼地生態的最佳去處，步道沿線並設置解說牌及路線指標，是郊山健行又可觀賞生態的好去處。",frontCover:"https://angela51.com/wp-content/uploads/20220412200950_62.jpg",images:["https://angela51.com/wp-content/uploads/20220412200950_62.jpg","https://angela51.com/wp-content/uploads/20220412201025_91.jpg","https://angela51.com/wp-content/uploads/20220412200938_49.jpg","https://angela51.com/wp-content/uploads/20220412201022_58.jpg","https://angela51.com/wp-content/uploads/20220412200926_95.jpg"],googleMapLocation:{lat:25.03202,lng:121.58749},information:{reObj:"親子共學、校外教學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["地理位置：臺北市信義區南港山系西北側山區、四獸山最東側","路徑長度：登山步道約2.5公里，全線約3.9公里","海拔高度：140公尺","步行時間：約2小時30分","景觀特色：密林、溪流、相思樹林相、涼亭密集","活動方式：親山近水活動、賞夜景、享受森林浴洗禮"]}},{name:"象山親山步道",introduce:"象山海拔183公尺，步道全長1450公尺，全程約需1小時40分。因外形似象頭而得名，位於臺北盆地東南方的信義區，與虎山地質相同主要由砂岩組成，因造山作用步道中可見黃褐色陡峭的岩壁與巨石，加上自然環境生物、鳥類種類繁多，使得整座山如同一座天然生態樂園般，成為民眾接近淺山、享受戶外綠林悠閒時光的好去處。",frontCover:"https://www.travel.taipei/content/images/attractions/222131/1024x768_attractions-image-99gp_e_5o0m7njnwe5xnqw.jpg",images:["https://www.travel.taipei/content/images/attractions/222132/1024x768_attractions-image-_rcabszr7es60rbkxza4jq.jpg","https://www.travel.taipei/content/images/attractions/222129/1024x768_attractions-image-fjck6hgjre6acqcp2mhcqq.jpg","https://www.travel.taipei/content/images/attractions/222130/1024x768_attractions-image-4cq65cev7eygfr9tlwvarq.jpg","https://www.travel.taipei/content/images/attractions/222133/1024x768_attractions-image-ab0h3r0_xuqxyzwwq4iffg.jpg","https://www.travel.taipei/content/images/attractions/222134/1024x768_attractions-image-fykjglwu_0i2eutg6gprga.jpg"],googleMapLocation:{lat:25.0274,lng:121.57082},information:{reObj:"親子共學、校外教學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["地理位置：臺北市信義區南港山系西北側山麓","路徑長度：登山步道約1.5公里，全線約2.3公里","海拔高度：183公尺","步行時間：約1小時40分鐘","景觀特色：自然生態精彩可期、登高遠望景致盡收眼底","活動方式：賞景、體能訓練、享受芬多精"]}}]},{Area:"南港區",mountain:[{name:"麗山橋口親山步道",introduce:"麗山橋口親山步道位於南港公園的南方，這裡曾是依山傍水的灌溉水源之地，南港區的三大舊埤塘（後山埤、東新埤、三重埤）即位於此地，如今古埤塘不再引水，反而成為池畔垂釣、賞景、環湖散步、單車騎乘的遊山玩水之地。步道前段為北興宮步道，後段才是古意盎然的麗山橋口步道。",frontCover:"https://assetsv4.tripmoment.com/system/azure/15387/d23d0c5f-659e-4ab5-9e0e-4f1359ba1c80.JPG",images:["https://www.naturetrail.org.tw/images/images/4edea23b01fbbf484c5f09b482c65383.JPG","https://www.naturetrail.org.tw/images/images/20cc065f1f3ca6308a4b391abc888640.JPG","https://assetsv4.tripmoment.com/system/azure/15387/66ca1059-c3f3-4fe2-bcdf-56516749926e.JPG","https://assetsv4.tripmoment.com/system/azure/15387/9eb6ab35-adf8-4c13-89b9-d641221017de.JPG"],googleMapLocation:{lat:25.02496,lng:121.59948},information:{reObj:"親子共學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["地理位置：臺北市南港區南港山系東側","路徑長度：登山步道約1.9公里，全線約4.1公里","海拔高度：約195公尺","步行時間：約2小時","景觀特色：天然密林、林蔭遮天，古道幽徑、遺世獨立","活動方式：健行、享受森林浴"]}}]},{Area:"文山區",mountain:[{name:"仙跡岩親山步道",introduce:"仙跡岩位於景美地區，亦稱溪子口山，周邊視野景觀良好，傳說八仙中的呂洞賓曾至此留下足跡，使得仙跡岩聲名大噪，常吸引目睹神跡的好奇者前來遊賞，這裡也是附近居民健行運動的最佳去處。仙跡岩與七星山一樣，擁有一顆一等衛星控制點，自景美景興路243巷牌樓拾級而上，經過78階的長壽梯與100階的登仙坡後，就是濃蔭密佈的綠色步道，沿途種類繁多的綠色植被、山頂的仙跡岩大石上、健康步道及仙岩廟皆可遠眺臺北盆地街景，景色幽靜而宜人。",frontCover:"https://www.travel.taipei/content/images/attractions/64374/1024x768_attractions-image-yd2pm-b-8kqz9jy-1uznuw.jpg",images:["https://www.travel.taipei/content/images/attractions/64375/1024x768_attractions-image-tdpsctqbd0qm50lr_iaopw.jpg","https://www.travel.taipei/content/images/attractions/64376/1024x768_attractions-image-r4mkekh49k2gok1s3go1xg.jpg","https://www.travel.taipei/content/images/attractions/64373/1024x768_attractions-image-r8sfliskhks49-2ms9ajbw.jpg","https://www.travel.taipei/content/images/attractions/64374/1024x768_attractions-image-yd2pm-b-8kqz9jy-1uznuw.jpg"],googleMapLocation:{lat:24.99097,lng:121.54353},information:{reObj:"親子共學、健行族",reMon:"整年",manage:"臺北市政府工務局大地工程處",phone:"+886-2-27593001",OpenTime:["星期日\t24 小時營業","星期一\t24 小時營業","星期二\t24 小時營業","星期三\t24 小時營業","星期四\t24 小時營業","星期五\t24 小時營業","星期六\t24 小時營業"],exhort:["地理位置：臺北市南港山南側文山區境內","路徑長度：登山步道約1.9公里，全線約3.5公里","海拔高度：141公尺","步行時間：約2小時","景觀特色：仙人足跡、天然林生態、鳥類昆蟲種類繁多","活動方式：健行、賞景、享受森林浴"]}}]}],nowCity:"北投區",nowMountain:{}},getters:{},mutations:{setnowCity(t,a){t.nowCity=a},setnowMountain(t,a){t.nowMountain=a.qty}},actions:{},modules:{}});Fa.vI.add(Ka.xiG,Ka.uM9,Ka.$JN,Ka.opg),(0,i.ri)(C).use(Va).use(Pa).component("font-awesome-icon",Na.GN).mount("#app")}},a={};function e(i){var n=a[i];if(void 0!==n)return n.exports;var o=a[i]={exports:{}};return t[i](o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(a,i,n,o){if(!i){var s=1/0;for(p=0;p<t.length;p++){i=t[p][0],n=t[p][1],o=t[p][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(e.O).every((function(t){return e.O[t](i[l])}))?i.splice(l--,1):(r=!1,o<s&&(s=o));if(r){t.splice(p--,1);var c=n();void 0!==c&&(a=c)}}return a}o=o||0;for(var p=t.length;p>0&&t[p-1][2]>o;p--)t[p]=t[p-1];t[p]=[i,n,o]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var i in a)e.o(a,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.p=""}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,i){var n,o,s=i[0],r=i[1],l=i[2],c=0;if(s.some((function(a){return 0!==t[a]}))){for(n in r)e.o(r,n)&&(e.m[n]=r[n]);if(l)var p=l(e)}for(a&&a(i);c<s.length;c++)o=s[c],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(p)},i=self["webpackChunktapieihiking"]=self["webpackChunktapieihiking"]||[];i.forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(4963)}));i=e.O(i)})();
//# sourceMappingURL=app.589d5f26.js.map