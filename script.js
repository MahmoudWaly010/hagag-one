(function(){
var PHONE='201018441144';
var PRODUCT_IMAGES={"watch": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85", "airpods": "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85", "laptop": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85", "cable": "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=85", "mouse": "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85", "keyboard": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85", "headphones": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85", "speaker": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85", "phone": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85", "tablet": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85", "camera": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85", "controller": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=85", "power": "https://cdn.mwave.com.au/images/400/belkin_boostcharge_2000mah_power_bank_space_grey_ac79332_12998.jpg", "desk": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85", "audio": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85", "gaming": "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=85"};
var CATS=[
 {id:'watch',e:'⌚',ar:'ساعات',en:'Watches'},
 {id:'airpods',e:'🎧',ar:'إيربودز',en:'AirPods'},
 {id:'laptop',e:'💻',ar:'لابتوبات',en:'Laptops'},
 {id:'cable',e:'🔌',ar:'كابلات وشواحن',en:'Cables & Chargers'},
 {id:'mouse',e:'🖱️',ar:'ماوس',en:'Mouse'},
  {id:'keyboard',e:'⌨️',ar:'كيبورد',en:'Keyboards'},
 {id:'phone',e:'📱',ar:'موبايلات',en:'Phones'},
 {id:'tablet',e:'▣',ar:'تابلت',en:'Tablets'},
 {id:'audio',e:'🔊',ar:'صوتيات',en:'Audio'},
 {id:'camera',e:'📷',ar:'كاميرات',en:'Cameras'},
 {id:'gaming',e:'🎮',ar:'جيمينج',en:'Gaming'},
 {id:'power',e:'🔋',ar:'باور بانك',en:'Power Banks'}];
var T={
ar:{strip:'تقنية أفضل لكل يوم · اطلب عبر واتساب 01018441144',heroKicker:'اختيارات ذكية لكل يوم',heroBig:'كل اللي بتحبه في عالم التكنولوجيا <span>في مكان واحد</span>',heroDesc:'اكتشف أحدث الإكسسوارات والأجهزة الذكية، واختار اللي يناسبك واطلبه بسهولة.',heroExplore:'اكتشف المنتجات',heroChip1:'تكنولوجيا أقرب ليك',heroChip2:'اختيارات تستاهلها',benefit1:'اطلب بسهولة',benefit2:'تواصل مباشر',benefit3:'دعم ومساعدة',benefit4:'منتجات مختارة',promoSmall:'اختيارات HAGAG ONE',promo1:'عالم الصوتيات',promo2:'ساعات وإكسسوارات',promo3:'تقنية وإنتاجية',promoLink:'تسوق الآن ←',brandTitle:'ماركات بتحبها',nCats:'الفئات',nNew:'الجديد',nProd:'المنتجات',nContact:'تواصل معنا',admin:'الأدمن',heroH:'تقنية أفضل لكل يوم',heroP:'إلكترونيات وإكسسوارات أبل وتقنية ذكية مختارة بعناية.',shop:'تسوّق الآن',waBtn:'كلمنا على واتساب',catsT:'تسوّق حسب الفئة',newT:'أحدث المنتجات',allT:'كل المنتجات',search:'ابحث عن منتج…',all:'كل الفئات',t1:'اطلب بسهولة عبر واتساب',t2:'دعم فني',t3:'إلكترونيات وإكسسوارات أبل',t4:'اتصل بنا مباشرة',follow:'تابعنا',contactT:'تواصل معنا مباشرة',contactP:'اسأل عن منتج، السعر، أو الضمان وهنرد عليك بسرعة.',call:'اتصل بنا',support:'تفاصيل الدعم',tag:'تقنية أفضل لكل يوم',adminT:'دخول الأدمن',pin:'الرقم السري (PIN)',enter:'دخول',close:'إغلاق',wrong:'الرقم السري غير صحيح',addT:'إضافة منتج',nameAr:'الاسم بالعربي',nameEn:'الاسم بالإنجليزي',priceL:'السعر (ج.م)',stockL:'الكمية بالمخزون',catL:'القسم',imgL:'صورة المنتج',save:'حفظ',manage:'إدارة المنتجات',del:'حذف',fill:'اكتب اسم المنتج والسعر على الأقل',added:'تمت إضافة المنتج',deleted:'تم حذف المنتج',chPin:'تغيير الرقم السري',pinDone:'تم تغيير الرقم السري',pinShort:'الرقم السري 4 أرقام على الأقل',order:'اطلب عبر واتساب',left:'متبقي ',out:'نفد المخزون',cur:'ج.م',items:'منتج',none:'لا توجد منتجات مطابقة.',full:'المساحة المخزنة ممتلئة، جرّب صورة أصغر.',waMsg:'مرحباً HAGAG ONE، أريد الاستفسار عن: ',waGen:'مرحباً HAGAG ONE، عندي استفسار.',waSup:'مرحباً HAGAG ONE، محتاج دعم بخصوص طلبي.'},
en:{strip:'Tech for a better everyday · Order on WhatsApp 01018441144',heroKicker:'Smart picks for every day',heroBig:'Everything you love in tech <span>in one place</span>',heroDesc:'Explore smart devices and everyday accessories. Find your next favorite and order with ease.',heroExplore:'Explore products',heroChip1:'Technology made closer',heroChip2:'Picks worth having',benefit1:'Easy ordering',benefit2:'Direct contact',benefit3:'Support & help',benefit4:'Curated products',promoSmall:'HAGAG ONE picks',promo1:'Audio world',promo2:'Watches & accessories',promo3:'Tech & productivity',promoLink:'Shop now ←',brandTitle:'Brands you love',nCats:'Categories',nNew:'New',nProd:'Products',nContact:'Contact',admin:'Admin',heroH:'Tech for a better everyday',heroP:'Premium electronics, Apple accessories and smart tech chosen with care.',shop:'Shop now',waBtn:'Chat on WhatsApp',catsT:'Shop by category',newT:'Latest products',allT:'All products',search:'Search products…',all:'All categories',t1:'Easy ordering on WhatsApp',t2:'Technical support',t3:'Electronics & Apple accessories',t4:'Call us directly',follow:'Follow us',contactT:'Talk to us directly',contactP:'Ask about a product, price or warranty and we’ll reply fast.',call:'Call us',support:'Support details',tag:'Tech for a better everyday',adminT:'Admin sign-in',pin:'PIN',enter:'Sign in',close:'Close',wrong:'Incorrect PIN',addT:'Add a product',nameAr:'Arabic name',nameEn:'English name',priceL:'Price (EGP)',stockL:'Stock quantity',catL:'Category',imgL:'Product image',save:'Save',manage:'Manage products',del:'Delete',fill:'Enter a product name and a price at least',added:'Product added',deleted:'Product deleted',chPin:'Change PIN',pinDone:'PIN changed',pinShort:'PIN must be at least 4 digits',order:'Order on WhatsApp',left:'Left: ',out:'Out of stock',cur:'EGP',items:'items',none:'No matching products.',full:'Storage is full. Try a smaller image.',waMsg:'Hello HAGAG ONE, I’d like to ask about: ',waGen:'Hello HAGAG ONE, I have a question.',waSup:'Hello HAGAG ONE, I need support with my order.'}};

var $=function(s){return document.querySelector(s)};
var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);return true}catch(e){return false}}
var lang=ls('h1_lang')||'ar', theme=ls('h1_theme'), admin=false, adminUser=null, pendingImages=[], tab='';
var localProductsSnapshot=null;
var SB=(window.HAGAG_SUPABASE||{}), supabase=null, remoteReady=!!(window.supabase&&SB.url&&SB.anonKey&&SB.url.indexOf('YOUR_')<0&&SB.anonKey.indexOf('YOUR_')<0);
if(remoteReady){try{supabase=window.supabase.createClient(SB.url,SB.anonKey)}catch(e){remoteReady=false}}
var products;
try{products=JSON.parse(ls('h1_products')||'null')}catch(e){products=null}
if(!Array.isArray(products)){
 products=[
 {id:1,ar:'ساعة ذكية بتصميم عصري',en:'Modern Smart Watch',cat:'watch',price:0,stock:5,img:PRODUCT_IMAGES.watch,t:18},
 {id:2,ar:'سماعة لاسلكية TWS',en:'Wireless TWS Earbuds',cat:'airpods',price:0,stock:8,img:PRODUCT_IMAGES.airpods,t:17},
 {id:3,ar:'لابتوب للأعمال والدراسة',en:'Laptop for Work & Study',cat:'laptop',price:0,stock:2,img:PRODUCT_IMAGES.laptop,t:16},
 {id:4,ar:'كابل وشاحن سريع',en:'Fast Charging Cable',cat:'cable',price:0,stock:20,img:PRODUCT_IMAGES.cable,t:15},
 {id:5,ar:'ماوس لاسلكي مريح',en:'Wireless Ergonomic Mouse',cat:'mouse',price:0,stock:10,img:PRODUCT_IMAGES.mouse,t:14},
 {id:6,ar:'كيبورد مكتبي',en:'Desktop Keyboard',cat:'keyboard',price:0,stock:6,img:PRODUCT_IMAGES.keyboard,t:13},
 {id:7,ar:'سماعة رأس بلوتوث',en:'Bluetooth Headphones',cat:'audio',price:0,stock:7,img:PRODUCT_IMAGES.headphones,t:12},
 {id:8,ar:'سبيكر بلوتوث',en:'Portable Bluetooth Speaker',cat:'audio',price:0,stock:9,img:PRODUCT_IMAGES.speaker,t:11},
 {id:9,ar:'هاتف ذكي',en:'Smartphone',cat:'phone',price:0,stock:4,img:PRODUCT_IMAGES.phone,t:10},
 {id:10,ar:'تابلت ذكي',en:'Smart Tablet',cat:'tablet',price:0,stock:3,img:PRODUCT_IMAGES.tablet,t:9},
 {id:11,ar:'كاميرا رقمية',en:'Digital Camera',cat:'camera',price:0,stock:2,img:PRODUCT_IMAGES.camera,t:8},
 {id:12,ar:'يد تحكم للألعاب',en:'Gaming Controller',cat:'gaming',price:0,stock:5,img:PRODUCT_IMAGES.controller,t:7},
 {id:13,ar:'باور بانك',en:'Power Bank',cat:'power',price:0,stock:12,img:PRODUCT_IMAGES.power,t:6},
 {id:14,ar:'إكسسوارات مكتب',en:'Desk Tech Accessories',cat:'mouse',price:0,stock:6,img:PRODUCT_IMAGES.desk,t:5}];
}
localProductsSnapshot=JSON.parse(JSON.stringify(products));
function persist(){return ls('h1_products',JSON.stringify(products))}
function productFromDb(p){return {id:p.id,ar:p.name_ar||'',en:p.name_en||'',cat:p.category||'audio',price:Number(p.price||0),stock:Number(p.stock||0),img:(p.images&&p.images[0])||'',images:p.images||[],colors:p.colors||[],description:p.description||'',t:new Date(p.created_at||Date.now()).getTime()}}
function productToDb(p){return {name_ar:p.ar||'',name_en:p.en||'',category:p.cat||'audio',price:Number(p.price||0),stock:Number(p.stock||0),images:p.images|| (p.img?[p.img]:[]),colors:p.colors||[],description:p.description||'',is_active:true}}
async function loadRemoteProducts(){
 if(!remoteReady)return;
 var r=await supabase.from('products').select('*').eq('is_active',true).order('created_at',{ascending:false});
 if(r.error){console.error(r.error);toast('تعذر تحميل المنتجات من قاعدة البيانات');return}
 if((r.data||[]).length){products=r.data.map(productFromDb);persist();}render();var route=location.hash.match(/^#product=(.+)$/);if(route)openProduct(decodeURIComponent(route[1]));
 if(!window._hagagRealtime) {window._hagagRealtime=true;supabase.channel('hagag-products-live').on('postgres_changes',{event:'*',schema:'public',table:'products'},loadRemoteProducts).subscribe();}
}
async function uploadProductImages(files){
 var urls=[];
 for(var i=0;i<files.length;i++){
  var file=files[i];if(!file.type.match(/^image\//))continue;
  var path=Date.now()+'-'+Math.random().toString(36).slice(2)+'-'+file.name.replace(/[^a-zA-Z0-9._-]/g,'_');
  var up=await supabase.storage.from('products').upload(path,file,{cacheControl:'3600',upsert:false});
  if(up.error)throw up.error;
  urls.push(supabase.storage.from('products').getPublicUrl(path).data.publicUrl);
 }
 return urls;
}
function t(k){return T[lang][k]||k}
function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
function cat(id){return CATS.filter(function(c){return c.id===id})[0]||CATS[0]}
function name(p){return (lang==='ar'?p.ar||p.en:p.en||p.ar)}
function fmt(n){return Number(n).toLocaleString(lang==='ar'?'ar-EG':'en-US')}
function wa(msg){return 'https://wa.me/'+PHONE+'?text='+encodeURIComponent(msg)}
function toast(m){var e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(toast.h);toast.h=setTimeout(function(){e.classList.remove('on')},2200)}

var heroSlides=[
 {src:'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1400&q=90',alt:'Premium electronics collection'},
 {src:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90',alt:'Modern technology workspace'},
 {src:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=90',alt:'Premium wireless headphones'},
 {src:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=90',alt:'Modern smart watch'}
];
var heroIndex=0,heroTimer;
$('#heroDots').innerHTML=heroSlides.map(function(_,i){return '<button type="button" '+(i===0?'class="active"':'')+' aria-label="الصورة '+(i+1)+'"></button>'}).join('');
function showHeroSlide(i){
 heroIndex=(i+heroSlides.length)%heroSlides.length;
 var im=$('#heroSlideImage');if(!im)return;
 im.style.opacity='0';
 clearTimeout(showHeroSlide.swap);
 showHeroSlide.swap=setTimeout(function(){im.src=heroSlides[heroIndex].src;im.alt=heroSlides[heroIndex].alt;im.style.animation='none';void im.offsetWidth;im.style.animation='';im.style.opacity='1'},220);
 $$('#heroDots button').forEach(function(b,n){b.classList.toggle('active',n===heroIndex);b.setAttribute('aria-current',n===heroIndex?'true':'false')});
}
function startHeroAuto(){clearInterval(heroTimer);heroTimer=setInterval(function(){showHeroSlide(heroIndex+1)},4300)}
$('#heroPrev').onclick=function(){showHeroSlide(heroIndex-1);startHeroAuto()};
$('#heroNext').onclick=function(){showHeroSlide(heroIndex+1);startHeroAuto()};
$('#heroDots').onclick=function(e){var b=e.target.closest('button');if(!b)return;showHeroSlide($$('#heroDots button').indexOf(b));startHeroAuto()};
$('.hero-visual').addEventListener('mouseenter',function(){clearInterval(heroTimer)});
$('.hero-visual').addEventListener('mouseleave',startHeroAuto);
startHeroAuto();

var QUICK_ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';
function cardHtml(p){
 var c=cat(p.cat),out=p.stock<=0,photo=(p.images&&p.images[0])||p.img||PRODUCT_IMAGES[p.cat]||'';
 var badge=out?'<span class="badge out">'+t('out')+'</span>':(p.stock<=5?'<span class="badge">'+t('left')+p.stock+'</span>':'');
 var img=photo?'<img src="'+photo+'" alt="'+esc(name(p))+'" loading="lazy" decoding="async" onload="this.classList.add(\'ld\')" onerror="this.remove()">':'<span class="emo">'+c.e+'</span>';
 var price=p.price>0?'<div class="price">'+fmt(p.price)+' '+t('cur')+'</div>':'<div class="price" style="font-size:14px;color:var(--sub)">—</div>';
 return '<article class="card enter'+(out?' oos':'')+'" data-product="'+esc(String(p.id))+'" tabindex="0" role="link" aria-label="تفاصيل '+esc(name(p))+'"><div class="img"><div class="ph'+(photo.indexOf('data:')===0?' fit':'')+'">'+img+'<span class="glare"></span><span class="details-hint">التفاصيل والصور</span></div>'+badge+'</div><div class="info"><small>'+c[lang]+'</small><h3>'+esc(name(p))+'</h3>'+price+'<button class="btn detail-open" type="button" data-open-product="'+esc(String(p.id))+'">عرض التفاصيل</button></div></article>';
}
function render(){
 $('#catTrack').innerHTML=CATS.map(function(c){
  var n=products.filter(function(p){return p.cat===c.id}).length;
  return '<div class="cat" role="button" tabindex="0" data-c="'+c.id+'"><div class="e"><img src="'+(PRODUCT_IMAGES[c.id]||'')+'" alt="'+c[lang]+'" loading="lazy" onerror="var p=this.parentNode;this.remove();p.textContent=&quot;'+c.e+'&quot;"></div><h3>'+c[lang]+'</h3><small>'+n+' '+t('items')+'</small></div>'}).join('');
 $('#tabs').innerHTML='<button class="tab'+(tab?'':' on')+'" data-tab="">'+t('all')+'</button>'+CATS.map(function(c){return '<button class="tab'+(tab===c.id?' on':'')+'" data-tab="'+c.id+'">'+c[lang]+'</button>'}).join('');
 var sorted=products.filter(function(p){return !tab||p.cat===tab}).sort(function(a,b){return b.t-a.t});
 $('#newTrack').innerHTML=sorted.length?sorted.slice(0,12).map(cardHtml).join(''):'<div class="empty">'+t('none')+'</div>';
 animateCards($('#newTrack'));
 var sel=$('#cf'),cur=sel.value||'';
 sel.innerHTML='<option value="">'+t('all')+'</option>'+CATS.map(function(c){return '<option value="'+c.id+'">'+c[lang]+'</option>'}).join('');
 sel.value=cur;
 $('#fCats').innerHTML=CATS.map(function(c){return '<a href="#products" data-fc="'+c.id+'">'+c[lang]+'</a>'}).join('');
 grid();
 $('#cs').innerHTML=CATS.map(function(c){return '<option value="'+c.id+'">'+c[lang]+'</option>'}).join('');
 mlist();
}
function grid(){
 var q=$('#q').value.trim().toLowerCase(),c=$('#cf').value;
 var list=products.filter(function(p){return (!c||p.cat===c)&&(!q||((p.ar||'')+' '+(p.en||'')).toLowerCase().indexOf(q)>-1)&&(!$('#inStockOnly').checked||p.stock>0)});
  var sort=$('#sortProducts').value;
  list.sort(function(a,b){if(sort==='price-low')return a.price-b.price;if(sort==='price-high')return b.price-a.price;if(sort==='name')return name(a).localeCompare(name(b),lang==='ar'?'ar':'en');return b.t-a.t});
 $('#grid').innerHTML=list.length?list.map(cardHtml).join(''):'<div class="empty">'+t('none')+'</div>';
 animateCards($('#grid'));
 $$('#catTrack .cat').forEach(function(e){e.classList.toggle('on',e.dataset.c===c)});
}
function mlist(){
 $('#mList').innerHTML=products.map(function(p){return '<div class="mrow"><span>'+esc(name(p))+' · '+p.stock+'</span><span class="mrow-actions"><button data-edit="'+p.id+'">تعديل</button><button data-del="'+p.id+'">'+t('del')+'</button></span></div>'}).join('');
}
function applyLang(){
 var h=document.documentElement;h.lang=lang;h.dir=lang==='ar'?'rtl':'ltr';
 $('#langBtn').textContent=lang==='ar'?'EN':'عربي';
 $$('[data-t]').forEach(function(e){if(e.dataset.t==='heroBig'){e.innerHTML=t(e.dataset.t)}else{e.textContent=t(e.dataset.t)}});
 $$('[data-ph]').forEach(function(e){e.placeholder=t(e.dataset.ph)});
 ['#waHero','#waHero2','#waC','#waF'].forEach(function(s){$(s).href=wa(t('waGen'))});$('#waSup').href=wa(t('waSup'));
 document.title=lang==='ar'?'HAGAG ONE | حجاج وان – إلكترونيات وإكسسوارات أبل':'HAGAG ONE | Electronics & Apple Accessories';
 render();
}
function applyTheme(){
 var dark=theme?theme==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;
 document.documentElement.setAttribute('data-theme',dark?'dark':'light');
}
$('#langBtn').onclick=function(){lang=lang==='ar'?'en':'ar';ls('h1_lang',lang);applyLang()};
$('#themeBtn').onclick=function(){theme=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';ls('h1_theme',theme);applyTheme()};
$('#q').oninput=grid;$('#cf').onchange=grid;$('#sortProducts').onchange=grid;$('#inStockOnly').onchange=grid;
$('#q').onkeydown=function(e){if(e.key==='Enter')document.getElementById('products').scrollIntoView()};
$('#tabs').onclick=function(e){var b=e.target.closest('.tab');if(!b)return;tab=b.dataset.tab;render()};
$('#fCats').onclick=function(e){var a=e.target.closest('[data-fc]');if(a){$('#cf').value=a.dataset.fc;grid()}};
$$('[data-sl]').forEach(function(b){b.onclick=function(){var tr=document.getElementById(b.dataset.sl);var dir=document.documentElement.dir==='rtl'?-1:1;tr.scrollBy({left:Number(b.dataset.d)*dir*Math.max(240,tr.clientWidth*.8),behavior:'smooth'})}});
function pickCat(e){var c=e.target.closest('.cat');if(!c)return;var s=$('#cf');s.value=s.value===c.dataset.c?'':c.dataset.c;grid();document.getElementById('products').scrollIntoView()}
$('#catTrack').onclick=pickCat;
$('#catTrack').onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pickCat(e)}};

function openM(){$('#modal').classList.add('open');$('#gate').hidden=admin;$('#panel').hidden=!admin;$('#pinMsg').textContent='';}
function closeM(){$('#modal').classList.remove('open')}
$('#adminBtn').onclick=openM;
$$('[data-close]').forEach(function(b){b.onclick=closeM});
$('#modal').onclick=function(e){if(e.target===this)closeM()};
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeM()});
async function login(){
 if(!remoteReady){$('#pinMsg').textContent='لوحة الإدارة المركزية غير مفعّلة بعد. أضف بيانات مشروع Supabase في supabase-config.js أولاً.';return}
 var email=$('#adminEmail').value.trim(),password=$('#adminPassword').value;
 if(!email||!password){$('#pinMsg').textContent='اكتب البريد الإلكتروني وكلمة المرور';return}
 var auth=await supabase.auth.signInWithPassword({email:email,password:password});
 if(auth.error){$('#pinMsg').textContent='بيانات الدخول غير صحيحة أو الحساب غير معتمد';return}
 var check=await supabase.from('admin_users').select('user_id').eq('user_id',auth.data.user.id).maybeSingle();
 if(check.error||!check.data){await supabase.auth.signOut();$('#pinMsg').textContent='هذا الحساب ليس لديه صلاحية إدارة';return}
 admin=true;adminUser=auth.data.user;$('#adminBtn').hidden=false;$('#gate').hidden=true;$('#panel').hidden=false;mlist();
}
$('#pinOk').onclick=login;
$('#adminLogout').onclick=async function(){if(supabase)await supabase.auth.signOut();admin=false;adminUser=null;$('#adminBtn').hidden=true;$('#panel').hidden=true;$('#gate').hidden=false;closeM();};
$('#importLocal').onclick=async function(){
 if(!admin||!remoteReady)return;
 var source=localProductsSnapshot||products;
 if(!source.length){toast('لا توجد منتجات محلية للاستيراد');return}
 var existing=await supabase.from('products').select('id',{count:'exact',head:true});
 if(existing.error){toast('تعذر فحص قاعدة البيانات');return}
 if(existing.count>0){toast('قاعدة البيانات تحتوي بالفعل على منتجات؛ لن نكرر الاستيراد');return}
 if(!confirm('سيتم استيراد '+source.length+' منتجًا من هذا الجهاز إلى قاعدة البيانات المركزية. هل تريد المتابعة؟'))return;
 var rows=source.map(function(p){return productToDb({ar:p.ar,en:p.en,cat:p.cat,price:p.price,stock:p.stock,images:p.images&&p.images.length?p.images:(p.img?[p.img]:[]),colors:p.colors||[],description:p.description||''})});
 var result=await supabase.from('products').insert(rows);
 if(result.error){toast('تعذر الاستيراد: '+result.error.message);return}
 await loadRemoteProducts();toast('تم استيراد المنتجات إلى قاعدة البيانات المركزية');
};
$('#adminPassword').onkeydown=function(e){if(e.key==='Enter')login()};
$('#im').onchange=function(){pendingImages=Array.prototype.slice.call(this.files||[]);$('#imagePreviews').innerHTML='';pendingImages.forEach(function(f){var im=document.createElement('img');im.src=URL.createObjectURL(f);im.alt=f.name;$('#imagePreviews').appendChild(im)})};
var editingId=null;
async function saveProduct(){
 var ar=$('#nAr').value.trim(),en=$('#nEn').value.trim(),pr=parseFloat($('#pr').value);
 if((!ar&&!en)||isNaN(pr)||pr<0){$('#fMsg').textContent=t('fill');return}
 if(!remoteReady||!admin){$('#fMsg').textContent='لا يمكن الحفظ قبل تفعيل قاعدة البيانات وتسجيل دخول المسؤول.';return}
 var colors=$('#colors').value.split(/[،,]/).map(function(x){return x.trim()}).filter(Boolean);
 var old=editingId?products.find(function(x){return String(x.id)===String(editingId)}):null,images=(old&&old.images)||[];
 try{
  if(pendingImages.length)images=images.concat(await uploadProductImages(pendingImages));
  var payload=productToDb({ar:ar,en:en,cat:$('#cs').value,price:pr,stock:Math.max(0,parseInt($('#st').value,10)||0),images:images,colors:colors,description:$('#description').value.trim()});
  var result=editingId?await supabase.from('products').update(payload).eq('id',editingId).select().single():await supabase.from('products').insert(payload).select().single();
  if(result.error)throw result.error;
  editingId=null;pendingImages=[];$('#nAr').value='';$('#nEn').value='';$('#pr').value='';$('#st').value='1';$('#im').value='';$('#colors').value='';$('#description').value='';$('#imagePreviews').innerHTML='';$('#fMsg').textContent='';
  await loadRemoteProducts();toast('تم حفظ المنتج بنجاح');
 }catch(err){console.error(err);$('#fMsg').textContent='فشل الحفظ: '+(err.message||'راجع إعدادات قاعدة البيانات والصلاحيات')}
}
$('#save').onclick=saveProduct;
$('#mList').onclick=async function(e){
 var del=e.target.dataset.del,edit=e.target.dataset.edit;
 if(del){var r=await supabase.from('products').delete().eq('id',del);if(r.error){toast('تعذر حذف المنتج');return}await loadRemoteProducts();toast(t('deleted'));return}
 if(edit){var p=products.find(function(x){return String(x.id)===String(edit)});if(!p)return;editingId=p.id;$('#nAr').value=p.ar||'';$('#nEn').value=p.en||'';$('#pr').value=p.price||0;$('#st').value=p.stock||0;$('#cs').value=p.cat;$('#colors').value=(p.colors||[]).join('، ');$('#description').value=p.description||'';$('#fMsg').textContent='الصور الحالية محفوظة. اختر صورًا إضافية لإضافتها.';}
};
function openProduct(id){
 var p=products.find(function(x){return String(x.id)===String(id)});if(!p)return;
 var photos=(p.images&&p.images.length?p.images:[p.img||PRODUCT_IMAGES[p.cat]]).filter(Boolean),selectedColor=(p.colors||[])[0]||'';
 $('#products').hidden=true;$('#new').hidden=true;$('#cats').hidden=true;$('#productDetail').hidden=false;
 var gallery='<div class="detail-gallery"><div class="detail-main"><img id="detailMainImage" src="'+(photos[0]||'')+'" alt="'+esc(name(p))+'"></div><div class="detail-thumbs">'+photos.map(function(src,i){return '<button type="button" data-photo="'+i+'" class="'+(i===0?'active':'')+'"><img src="'+src+'" alt="صورة '+(i+1)+'"></button>'}).join('')+'</div></div>';
 var colorHtml=(p.colors&&p.colors.length)?'<div class="detail-colors"><strong>الألوان المتاحة</strong><div>'+p.colors.map(function(c,i){return '<button type="button" class="color-choice '+(i===0?'selected':'')+'" data-color="'+esc(c)+'">'+esc(c)+'</button>'}).join('')+'</div></div>':'';
 $('#detailContent').innerHTML='<div class="detail-layout">'+gallery+'<div class="detail-info"><small>'+cat(p.cat)[lang]+'</small><h1>'+esc(name(p))+'</h1><div class="detail-price">'+(p.price>0?fmt(p.price)+' '+t('cur'):'السعر عند الاستفسار')+'</div><p class="detail-stock">'+(p.stock>0?'متوفر بالمخزون: '+p.stock:'غير متوفر حاليًا')+'</p>'+colorHtml+'<div class="detail-description">'+esc(p.description||'تواصل معنا لمعرفة تفاصيل ومواصفات المنتج.')+'</div><a class="btn wa detail-order" target="_blank" rel="noopener" href="'+wa('مرحباً HAGAG ONE، أريد طلب '+name(p)+(selectedColor?' - اللون: '+selectedColor:''))+'">اطلب عبر واتساب</a></div></div>';
 $('#detailContent').onclick=function(e){
  var ph=e.target.closest('[data-photo]');if(ph){var ix=Number(ph.dataset.photo);$('#detailMainImage').src=photos[ix];$$('.detail-thumbs button').forEach(function(b){b.classList.toggle('active',b===ph)});return}
  var co=e.target.closest('[data-color]');if(co){selectedColor=co.dataset.color;$$('.color-choice').forEach(function(b){b.classList.toggle('selected',b===co)});$('.detail-order').href=wa('مرحباً HAGAG ONE، أريد طلب '+name(p)+' - اللون: '+selectedColor)}
 };
 location.hash='product='+encodeURIComponent(id);window.scrollTo({top:0,behavior:'smooth'});
}
document.addEventListener('click',function(e){var b=e.target.closest('[data-open-product],.card[data-product]');if(!b)return;var id=b.dataset.openProduct||b.dataset.product;if(id)openProduct(id)});
document.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.matches('.card[data-product]')){e.preventDefault();openProduct(e.target.dataset.product)}});
$('#backProducts').onclick=function(){location.hash='';$('#productDetail').hidden=true;$('#products').hidden=false;$('#new').hidden=false;$('#cats').hidden=false;};
window.addEventListener('hashchange',function(){var m=location.hash.match(/^#product=(.+)$/);if(m)openProduct(decodeURIComponent(m[1]));else if(location.hash==='#admin')openM()});
if(location.hash==='#admin')openM();
$('#yr').textContent=new Date().getFullYear();

/* ---- product cards: staggered entrance + cursor tilt ---- */
var FINE=!!(window.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches);
var REDUCE=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches);
function animateCards(root){
 if(!root)return;
 var cards=root.querySelectorAll('.card.enter');
 if(root._io){root._io.disconnect();root._io=null}
 if(!cards.length)return;
 if(!('IntersectionObserver' in window)){for(var i=0;i<cards.length;i++)cards[i].classList.add('in');return}
 root._io=new IntersectionObserver(function(entries){
  var k=0;
  entries.forEach(function(en){
   if(!en.isIntersecting)return;
   var c=en.target;
   c.style.setProperty('--d',(k++%8)*70+'ms');
   c.classList.add('in');
   root._io.unobserve(c);
  });
 },{threshold:.15,rootMargin:'0px 0px -30px 0px'});
 for(var j=0;j<cards.length;j++)root._io.observe(cards[j]);
}
function tiltReset(c){
 c.classList.remove('tilt');
 ['--rx','--ry','--mx','--my','--px','--py'].forEach(function(k){c.style.removeProperty(k)});
 c._r=null;
}
function bindTilt(root){
 if(!root||!FINE||REDUCE)return;
 var cur=null,raf=0,ex=0,ey=0;
 function frame(){
  raf=0;if(!cur)return;
  var r=cur._r||(cur._r=cur.getBoundingClientRect());
  var px=Math.min(1,Math.max(0,(ex-r.left)/r.width)),py=Math.min(1,Math.max(0,(ey-r.top)/r.height));
  var st=cur.style;
  st.setProperty('--ry',((px-.5)*9).toFixed(2)+'deg');
  st.setProperty('--rx',((.5-py)*9).toFixed(2)+'deg');
  st.setProperty('--mx',(px*100).toFixed(1)+'%');
  st.setProperty('--my',(py*100).toFixed(1)+'%');
  st.setProperty('--px',((px-.5)*2).toFixed(3));
  st.setProperty('--py',((py-.5)*2).toFixed(3));
 }
 root.addEventListener('pointermove',function(e){
  var c=e.target.closest?e.target.closest('.card'):null;
  if(c!==cur){if(cur)tiltReset(cur);cur=c;if(cur){cur._r=cur.getBoundingClientRect();cur.classList.add('tilt')}}
  if(!cur)return;
  ex=e.clientX;ey=e.clientY;
  if(!raf)raf=requestAnimationFrame(frame);
 });
 root.addEventListener('pointerleave',function(){if(cur){tiltReset(cur);cur=null}});
 root.addEventListener('scroll',function(){if(cur)cur._r=null},true);
 window.addEventListener('scroll',function(){if(cur)cur._r=null},{passive:true});
}
applyTheme();applyLang();
if(location.hash.indexOf('#product=')===0&&!remoteReady){var initialRoute=location.hash.slice(9);if(initialRoute)openProduct(decodeURIComponent(initialRoute));}
if(remoteReady){supabase.auth.getSession().then(async function(r){if(r.data.session){var c=await supabase.from('admin_users').select('user_id').eq('user_id',r.data.session.user.id).maybeSingle();if(c.data){admin=true;adminUser=r.data.session.user;$('#adminBtn').hidden=false;}}});loadRemoteProducts();}
bindTilt($('#grid'));bindTilt($('#newTrack'));
$$('.reveal').forEach(function(el){el.classList.add('reveal-ready')});
if('IntersectionObserver' in window){
 var revealObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}})},{threshold:.12});
 $$('.reveal').forEach(function(el){revealObserver.observe(el)});
}else{$$('.reveal').forEach(function(el){el.classList.add('is-visible')})}
})();
