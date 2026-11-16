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
ar:{strip:'تقنية أفضل لكل يوم · اطلب عبر واتساب 01018441144',deals:'عروضنا',heroKicker:'اختيارات ذكية لكل يوم',heroBig:'كل اللي بتحبه في عالم التكنولوجيا <span>في مكان واحد</span>',heroDesc:'اكتشف أحدث الإكسسوارات والأجهزة الذكية، واختار اللي يناسبك واطلبه بسهولة.',heroExplore:'اكتشف المنتجات',heroChip1:'تكنولوجيا أقرب ليك',heroChip2:'اختيارات تستاهلها',benefit1:'اطلب بسهولة',benefit2:'تواصل مباشر',benefit3:'دعم ومساعدة',benefit4:'منتجات مختارة',promoSmall:'اختيارات HAGAG ONE',promo1:'عالم الصوتيات',promo2:'ساعات وإكسسوارات',promo3:'تقنية وإنتاجية',promoLink:'تسوق الآن ←',brandTitle:'ماركات بتحبها',nCats:'الفئات',nNew:'الجديد',nProd:'المنتجات',nContact:'تواصل معنا',admin:'الأدمن',userTitle:'تسجيل الدخول إلى HAGAG ONE',userSubtitle:'سجّل دخولك بآبل أو جوجل. حسابات Gmail تعمل من خلال جوجل.',userGoogle:'المتابعة باستخدام Google / Gmail',userApple:'المتابعة باستخدام Apple',userGoogleNote:'تابع بأمان باستخدام مزود الخدمة الذي تختاره.',userSignedIn:'تم تسجيل الدخول',userLogout:'تسجيل الخروج',userAuthNotReady:'تسجيل الدخول غير مفعّل بعد. يلزم إعداد مشروع Supabase وتفعيل مزودي Google وApple.',userAuthHttps:'يلزم استضافة الموقع على HTTPS وإضافة عنوانه ضمن Redirect URLs في Supabase.',userAuthFailed:'تعذر بدء تسجيل الدخول. تحقق من إعداد مزود تسجيل الدخول في Supabase.',userSignOutFailed:'تعذر تسجيل الخروج. حاول مرة أخرى.',heroH:'تقنية أفضل لكل يوم',heroP:'إلكترونيات وإكسسوارات أبل وتقنية ذكية مختارة بعناية.',shop:'تسوّق الآن',waBtn:'كلمنا على واتساب',catsT:'تسوّق حسب الفئة',newT:'أحدث المنتجات',allT:'كل المنتجات',search:'ابحث عن منتج…',all:'كل الفئات',t1:'اطلب بسهولة عبر واتساب',t2:'دعم فني',t3:'إلكترونيات وإكسسوارات أبل',t4:'اتصل بنا مباشرة',follow:'تابعنا',contactT:'تواصل معنا مباشرة',contactP:'اسأل عن منتج، السعر، أو الضمان وهنرد عليك بسرعة.',call:'اتصل بنا',support:'تفاصيل الدعم',tag:'تقنية أفضل لكل يوم',adminT:'دخول الأدمن',pin:'الرقم السري (PIN)',enter:'دخول',close:'إغلاق',wrong:'الرقم السري غير صحيح',addT:'إضافة منتج',nameAr:'الاسم بالعربي',nameEn:'الاسم بالإنجليزي',priceL:'السعر (ج.م)',stockL:'الكمية بالمخزون',catL:'القسم',imgL:'صورة المنتج',save:'حفظ',manage:'إدارة المنتجات',del:'حذف',fill:'اكتب اسم المنتج والسعر على الأقل',added:'تمت إضافة المنتج',deleted:'تم حذف المنتج',chPin:'تغيير الرقم السري',pinDone:'تم تغيير الرقم السري',pinShort:'الرقم السري 4 أرقام على الأقل',order:'اطلب عبر واتساب',left:'متبقي ',out:'نفد المخزون',cur:'ج.م',items:'منتج',none:'لا توجد منتجات مطابقة.',full:'المساحة المخزنة ممتلئة، جرّب صورة أصغر.',waMsg:'مرحباً HAGAG ONE، أريد الاستفسار عن: ',waGen:'مرحباً HAGAG ONE، عندي استفسار.',waSup:'مرحباً HAGAG ONE، محتاج دعم بخصوص طلبي.'},
en:{strip:'Tech for a better everyday · Order on WhatsApp 01018441144',deals:'Our Offers',heroKicker:'Smart picks for every day',heroBig:'Everything you love in tech <span>in one place</span>',heroDesc:'Explore smart devices and everyday accessories. Find your next favorite and order with ease.',heroExplore:'Explore products',heroChip1:'Technology made closer',heroChip2:'Picks worth having',benefit1:'Easy ordering',benefit2:'Direct contact',benefit3:'Support & help',benefit4:'Curated products',promoSmall:'HAGAG ONE picks',promo1:'Audio world',promo2:'Watches & accessories',promo3:'Tech & productivity',promoLink:'Shop now ←',brandTitle:'Brands you love',nCats:'Categories',nNew:'New',nProd:'Products',nContact:'Contact',admin:'Admin',userTitle:'Sign in to HAGAG ONE',userSubtitle:'Sign in with Apple or Google. Gmail accounts use Google sign-in.',userGoogle:'Continue with Google / Gmail',userApple:'Continue with Apple',userGoogleNote:'Continue securely with your selected provider.',userSignedIn:'Signed in',userLogout:'Sign out',userAuthNotReady:'Sign-in is not enabled yet. Configure Supabase and enable the Google and Apple providers.',userAuthHttps:'Host the site over HTTPS and add its URL to Supabase Redirect URLs.',userAuthFailed:'Could not start sign-in. Check the provider configuration in Supabase.',userSignOutFailed:'Could not sign out. Please try again.',heroH:'Tech for a better everyday',heroP:'Premium electronics, Apple accessories and smart tech chosen with care.',shop:'Shop now',waBtn:'Chat on WhatsApp',catsT:'Shop by category',newT:'Latest products',allT:'All products',search:'Search products…',all:'All categories',t1:'Easy ordering on WhatsApp',t2:'Technical support',t3:'Electronics & Apple accessories',t4:'Call us directly',follow:'Follow us',contactT:'Talk to us directly',contactP:'Ask about a product, price or warranty and we’ll reply fast.',call:'Call us',support:'Support details',tag:'Tech for a better everyday',adminT:'Admin sign-in',pin:'PIN',enter:'Sign in',close:'Close',wrong:'Incorrect PIN',addT:'Add a product',nameAr:'Arabic name',nameEn:'English name',priceL:'Price (EGP)',stockL:'Stock quantity',catL:'Category',imgL:'Product image',save:'Save',manage:'Manage products',del:'Delete',fill:'Enter a product name and a price at least',added:'Product added',deleted:'Product deleted',chPin:'Change PIN',pinDone:'PIN changed',pinShort:'PIN must be at least 4 digits',order:'Order on WhatsApp',left:'Left: ',out:'Out of stock',cur:'EGP',items:'items',none:'No matching products.',full:'Storage is full. Try a smaller image.',waMsg:'Hello HAGAG ONE, I’d like to ask about: ',waGen:'Hello HAGAG ONE, I have a question.',waSup:'Hello HAGAG ONE, I need support with my order.'}};
T.ar.phonesShelf='الموبايلات';T.ar.headphonesShelf='السماعات';
T.en.phonesShelf='Mobile phones';T.en.headphonesShelf='Headphones & earbuds';
T.ar.videoUrlLabel='رابط فيديو المنتج (اختياري)';T.en.videoUrlLabel='Product video link (optional)';
T.ar.videoUrlPlaceholder='الصق رابط YouTube أو TikTok أو أي منصة';T.en.videoUrlPlaceholder='Paste a YouTube, TikTok, or other platform link';
T.ar.videoInvalid='أدخل رابط فيديو صحيحًا يبدأ بـ http أو https.';T.en.videoInvalid='Enter a valid video link starting with http or https.';
T.ar.videoWatch='مشاهدة فيديو المنتج';T.en.videoWatch='Watch product video';
var CHECKOUT_TEXT={
 ar:{
  favorite:'أضف إلى المفضلة',unfavorite:'إزالة من المفضلة',favoriteAdded:'تمت إضافة المنتج للمفضلة',favoriteRemoved:'تمت الإزالة من المفضلة',favoritesStorageError:'تعذر حفظ المفضلة على هذا الجهاز.',
  quantity:'الكمية',addToCart:'أضف إلى السلة',buyNow:'شراء الآن',cartAdded:'تمت إضافة المنتج إلى السلة',cartEmpty:'السلة فارغة',cartStorageError:'تعذر حفظ السلة على هذا الجهاز.',
  checkoutTitle:'إتمام الطلب',checkoutSubtitle:'أدخل بياناتك وعنوان التوصيل لاختيار طريقة الدفع وإرسال الطلب.',backToProduct:'العودة إلى المنتج',backToShop:'العودة للتسوق',
  delivery:'بيانات التوصيل',country:'الدولة / المنطقة',egypt:'مصر',firstName:'الاسم الأول',lastName:'اسم العائلة',address:'العنوان',addressExtra:'شقة، طابق، أو علامة مميزة (اختياري)',city:'المدينة',governorate:'المحافظة',selectGovernorate:'اختر المحافظة',postalCode:'الرمز البريدي (اختياري)',phone:'رقم الهاتف',
  payment:'طريقة الدفع',cod:'الدفع عند الاستلام',codHint:'ادفع قيمة الطلب لمندوب الشحن عند الاستلام.',transfer:'تحويل أو محفظة يدويًا',transferHint:'سيتم إرسال تفاصيل التحويل عبر واتساب بعد حفظ الطلب.',online:'بطاقة أو دفع إلكتروني',onlineHint:'غير متاح حاليًا؛ لم يتم إعداد بوابة دفع بعد.',
  summary:'ملخص الطلب',subtotal:'المجموع الفرعي',shipping:'رسوم الشحن',total:'الإجمالي',priceOnRequest:'السعر عند التأكيد',unknownTotal:'يتم تأكيد الإجمالي بعد مراجعة سعر المنتج',shippingFee:'200 ج.م',confirmOrder:'تأكيد الطلب',emptyCheckout:'لا توجد منتجات في الطلب.',checkoutSetupError:'إرسال الطلب غير مفعّل بعد. أضف إعداد Supabase وشغّل ملف supabase-orders.sql أولًا.',checkoutStockError:'الكمية المطلوبة غير متاحة حاليًا. حدّث السلة وحاول مرة أخرى.',checkoutProductError:'تعذر العثور على أحد المنتجات في الطلب. ارجع إلى المتجر وحدّث السلة.',checkoutError:'تعذر حفظ الطلب في قاعدة البيانات. حاول مرة أخرى أو تواصل معنا.',
  paymentSaved:'تم حفظ طلبك. اضغط لإرساله إلى المتجر عبر واتساب.',sendWhatsapp:'إرسال الطلب عبر واتساب',orderSaved:'تم تسجيل الطلب بنجاح',paymentMethodCod:'الدفع عند الاستلام',paymentMethodTransfer:'تحويل أو محفظة يدويًا',checkoutBackError:'تعذر الرجوع إلى المنتج.',
  governorates:['القاهرة','الجيزة','الإسكندرية','القليوبية','الشرقية','الدقهلية','الغربية','المنوفية','البحيرة','كفر الشيخ','دمياط','بورسعيد','الإسماعيلية','السويس','شمال سيناء','جنوب سيناء','بني سويف','الفيوم','المنيا','أسيوط','سوهاج','قنا','الأقصر','أسوان','البحر الأحمر','الوادي الجديد','مطروح']
 },
 en:{
  favorite:'Add to wishlist',unfavorite:'Remove from wishlist',favoriteAdded:'Added to your wishlist',favoriteRemoved:'Removed from your wishlist',favoritesStorageError:'Could not save your wishlist on this device.',
  quantity:'Quantity',addToCart:'Add to basket',buyNow:'Buy now',cartAdded:'Added to basket',cartEmpty:'Your basket is empty',cartStorageError:'Could not save your basket on this device.',
  checkoutTitle:'Checkout',checkoutSubtitle:'Enter your contact and delivery details, then choose how to pay.',backToProduct:'Back to product',backToShop:'Continue shopping',
  delivery:'Delivery details',country:'Country / region',egypt:'Egypt',firstName:'First name',lastName:'Last name',address:'Address',addressExtra:'Apartment, floor, or landmark (optional)',city:'City',governorate:'Governorate',selectGovernorate:'Select a governorate',postalCode:'Postal code (optional)',phone:'Phone number',
  payment:'Payment method',cod:'Cash on delivery',codHint:'Pay the courier when your order arrives.',transfer:'Manual transfer or wallet',transferHint:'Transfer details will be sent over WhatsApp after the order is saved.',online:'Card or online payment',onlineHint:'Temporarily unavailable; no payment gateway is configured.',
  summary:'Order summary',subtotal:'Subtotal',shipping:'Shipping',total:'Total',priceOnRequest:'Price confirmed by store',unknownTotal:'The total will be confirmed after the product price is reviewed',shippingFee:'EGP 200',confirmOrder:'Place order',emptyCheckout:'There are no items in this order.',checkoutSetupError:'Order submission is not enabled yet. Add Supabase configuration and run supabase-orders.sql first.',checkoutStockError:'The requested quantity is not available. Update your basket and try again.',checkoutProductError:'A product in this order could not be found. Return to the store and refresh your basket.',checkoutError:'Could not save your order to the database. Try again or contact us.',
  paymentSaved:'Your order is saved. Send it to the store on WhatsApp to complete it.',sendWhatsapp:'Send order on WhatsApp',orderSaved:'Order placed successfully',paymentMethodCod:'Cash on delivery',paymentMethodTransfer:'Manual transfer or wallet',checkoutBackError:'Could not return to the product.',
  governorates:['Cairo','Giza','Alexandria','Qalyubia','Sharqia','Dakahlia','Gharbia','Monufia','Beheira','Kafr El Sheikh','Damietta','Port Said','Ismailia','Suez','North Sinai','South Sinai','Beni Suef','Fayoum','Minya','Assiut','Sohag','Qena','Luxor','Aswan','Red Sea','New Valley','Matrouh']
 }
};

var $=function(s){return document.querySelector(s)};
var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);return true}catch(e){return false}}
function loadStoredArray(key){
 var value=ls(key);
 if(!value)return [];
 try{var parsed=JSON.parse(value);if(Array.isArray(parsed))return parsed;throw new Error('Stored value must be an array')}
 catch(error){console.error('Could not read '+key,error);return []}
}
function ui(k){return CHECKOUT_TEXT[lang][k]||k}
var lang=ls('h1_lang')||'ar', theme=ls('h1_theme'), admin=false, adminUser=null, userSession=null, modalView='', pendingImages=[], tab='';
var cartItems=[],favoriteIds=[],checkoutContext=null,detailQuantity=1;
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
var SAMPLE_PRODUCTS=[
 {id:'sample-phone-1',ar:'هاتف ذكي بشاشة كبيرة',en:'Large-screen smartphone',cat:'phone',price:0,stock:5,img:PRODUCT_IMAGES.phone,t:24},
 {id:'sample-phone-2',ar:'هاتف ذكي بتصميم نحيف',en:'Slim-design smartphone',cat:'phone',price:0,stock:5,img:'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=85',t:23},
 {id:'sample-phone-3',ar:'هاتف ذكي بكاميرا متطورة',en:'Smartphone with a high-resolution camera',cat:'phone',price:0,stock:5,img:'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85',t:22},
 {id:'sample-phone-4',ar:'هاتف 5G للاستخدام اليومي',en:'5G smartphone for everyday use',cat:'phone',price:0,stock:5,img:'https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=900&q=85',t:21},
 {id:'sample-earbuds-1',ar:'سماعة أذن لاسلكية TWS',en:'True wireless earbuds',cat:'airpods',price:0,stock:6,img:'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=85',t:20},
 {id:'sample-earbuds-2',ar:'سماعة أذن لاسلكية مدمجة',en:'Compact wireless earbuds',cat:'airpods',price:0,stock:6,img:'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85',t:19},
 {id:'sample-earbuds-3',ar:'سماعة رياضية لاسلكية',en:'Wireless sport earphones',cat:'airpods',price:0,stock:6,img:'https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=900&q=85',t:18},
 {id:'sample-headphones-1',ar:'سماعة رأس لاسلكية',en:'Wireless over-ear headphones',cat:'audio',price:0,stock:4,img:'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85',t:17},
 {id:'sample-headphones-2',ar:'سماعة رأس مريحة للاستخدام اليومي',en:'Comfort-fit everyday headphones',cat:'audio',price:0,stock:4,img:'https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=85',t:16},
 {id:'sample-headphones-3',ar:'سماعة ألعاب سلكية',en:'Wired gaming headset',cat:'audio',price:0,stock:4,img:'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=900&q=85',t:15}
];
SAMPLE_PRODUCTS.forEach(function(product){product.is_sample=true});
var existingProductIds={};
products.forEach(function(product){existingProductIds[String(product.id)]=true});
products=products.concat(SAMPLE_PRODUCTS.filter(function(product){return !existingProductIds[String(product.id)]}));
localProductsSnapshot=JSON.parse(JSON.stringify(products.filter(function(product){return !product.is_sample})));
cartItems=loadStoredArray('h1_cart').filter(function(item){return item&&item.id!==undefined&&Number(item.quantity)>0}).map(function(item){return {id:String(item.id),quantity:Math.floor(Number(item.quantity)),color:item.color||''}});
favoriteIds=loadStoredArray('h1_favorites').map(function(id){return String(id)});
function persist(){return ls('h1_products',JSON.stringify(products))}
function productFromDb(p){return {id:p.id,ar:p.name_ar||'',en:p.name_en||'',cat:p.category||'audio',price:Number(p.price||0),stock:Number(p.stock||0),img:(p.images&&p.images[0])||'',images:p.images||[],colors:p.colors||[],description:p.description||'',videoUrl:p.video_url||'',t:new Date(p.created_at||Date.now()).getTime()}}
function productToDb(p){
 var row={name_ar:p.ar||'',name_en:p.en||'',category:p.cat||'audio',price:Number(p.price||0),stock:Number(p.stock||0),images:p.images|| (p.img?[p.img]:[]),colors:p.colors||[],description:p.description||'',is_active:true};
 var videoUrl=safeVideoUrl(p.videoUrl);
 if(videoUrl)row.video_url=videoUrl;
 return row;
}
async function loadRemoteProducts(){
 if(!remoteReady)return;
 var r=await supabase.from('products').select('*').eq('is_active',true).order('created_at',{ascending:false});
 if(r.error){console.error(r.error);toast('تعذر تحميل المنتجات من قاعدة البيانات');return}
 if((r.data||[]).length){
  var remoteProducts=r.data.map(productFromDb),remoteIds={};
  remoteProducts.forEach(function(product){remoteIds[String(product.id)]=true});
  products=remoteProducts.concat(SAMPLE_PRODUCTS.filter(function(product){return !remoteIds[String(product.id)]}));
  persist();
 }render();var route=location.hash.match(/^#product=(.+)$/);if(route)openProduct(decodeURIComponent(route[1]));
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
function safeVideoUrl(value){
 var raw=String(value||'').trim();if(!raw)return '';
 try{var url=new URL(raw);return (url.protocol==='https:'||url.protocol==='http:')&&!url.username&&!url.password?url.href:''}
 catch(error){return ''}
}
function cat(id){return CATS.filter(function(c){return c.id===id})[0]||CATS[0]}
function name(p){return (lang==='ar'?p.ar||p.en:p.en||p.ar)}
function fmt(n){return Number(n).toLocaleString(lang==='ar'?'ar-EG':'en-US')}
function wa(msg){return 'https://wa.me/'+PHONE+'?text='+encodeURIComponent(msg)}
function toast(m){var e=$('#toast');e.textContent=m;e.classList.add('on');clearTimeout(toast.h);toast.h=setTimeout(function(){e.classList.remove('on')},2200)}
function updateCartButton(){
 var count=cartItems.reduce(function(sum,item){return sum+Number(item.quantity||0)},0),label=lang==='ar'?'السلة':'Basket';
 $('#cartCount').textContent=count;$('#cartCount').hidden=count===0;
 if(count)label+=' ('+count+')';
 $('#cartBtn').title=label;$('#cartBtn').setAttribute('aria-label',label);
}
function saveCart(){
 var saved=ls('h1_cart',JSON.stringify(cartItems));
 updateCartButton();
 if(!saved)toast(ui('cartStorageError'));
 return !!saved;
}
function toggleFavorite(id){
 id=String(id);var index=favoriteIds.indexOf(id),isFavorite=index<0;
 if(isFavorite)favoriteIds.push(id);else favoriteIds.splice(index,1);
 return {selected:isFavorite,saved:!!ls('h1_favorites',JSON.stringify(favoriteIds))};
}
function addProductToCart(product,quantity,color){
 if(!product)return false;
 var requested=Math.max(1,Math.floor(Number(quantity)||1)),stock=Math.max(0,Number(product.stock)||0);
 if(stock<1){toast(t('out'));return false}
 var item=cartItems.find(function(entry){return entry.id===String(product.id)&&(entry.color||'')===(color||'')});
 if(item&&item.quantity+requested>stock){toast(ui('checkoutStockError'));return false}
 if(!item&&requested>stock){toast(ui('checkoutStockError'));return false}
 if(item)item.quantity+=requested;
 else cartItems.push({id:String(product.id),quantity:requested,color:color||''});
 if(saveCart())toast(ui('cartAdded'));return true;
}

var heroSlides=[
 /*{src:'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1400&q=90',alt:'Premium electronics collection'},
 {src:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90',alt:'Modern technology workspace'},
 {src:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=90',alt:'Premium wireless headphones'},
 {src:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=90',alt:'Modern smart watch'}
*/
/* ===== HAGAG ONE - Three Images Slider ===== */
    {
        src: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1400&q=90',
        alt: 'Premium electronics'
    },
    {
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90',
        alt: 'Technology workspace'
    },
    {
        src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=90',
        alt: 'Headphones'
    },
    {
        src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=90',
        alt: 'Smart watch'
    }
];

var heroIndex = 0;
var heroTimer;
var heroGallery = document.querySelector('.hero-gallery');

var heroDots = document.getElementById('heroDots');
if (heroDots) {
    heroDots.innerHTML = heroSlides.map(function(_, i) {
        return '<button type="button" ' + (i === 0 ? 'class="active"' : '') + ' aria-label="الصورة ' + (i + 1) + '"></button>';
    }).join('');
}

function showHeroSlide(index, immediate) {

    var nextIndex = (index + heroSlides.length) % heroSlides.length;
    if (!immediate && nextIndex === heroIndex) return;
    heroIndex = nextIndex;

    var left = document.getElementById('heroLeftImage');
    var center = document.getElementById('heroCenterImage');
    var right = document.getElementById('heroRightImage');

    if (!left || !center || !right) return;
    var leftSlide = heroSlides[(heroIndex - 1 + heroSlides.length) % heroSlides.length];
    var centerSlide = heroSlides[heroIndex];
    var rightSlide = heroSlides[(heroIndex + 1) % heroSlides.length];

    clearTimeout(showHeroSlide.swap);
    if (heroGallery) {
        Array.prototype.forEach.call(heroGallery.querySelectorAll('.hero-flyout'), function(ghost) {
            ghost.remove();
        });
    }

    function updateSlideImages(animate) {
        var images = [left, center, right];
        if (animate) {
            images.forEach(function(img) {
                img.classList.remove('hero-arrive');
            });
        }
        left.src = leftSlide.src;
        left.alt = leftSlide.alt;
        center.src = centerSlide.src;
        center.alt = centerSlide.alt;
        right.src = rightSlide.src;
        right.alt = rightSlide.alt;
        if (!animate) return;
        if (heroGallery) void heroGallery.offsetWidth;
        images.forEach(function(img) {
            img.classList.add('hero-arrive');
        });
    }

    function addOutgoingImage(slot, type, galleryRect) {
        var rect = slot.getBoundingClientRect();
        var ghost = slot.cloneNode(true);
        ghost.className = 'hero-slide hero-flyout hero-flyout-' + type;
        ghost.setAttribute('aria-hidden', 'true');
        ghost.style.left = (rect.left - galleryRect.left) + 'px';
        ghost.style.top = (rect.top - galleryRect.top) + 'px';
        ghost.style.width = rect.width + 'px';
        ghost.style.height = rect.height + 'px';
        var image = ghost.querySelector('img');
        if (image) {
            image.removeAttribute('id');
            image.classList.remove('hero-arrive');
        }
        heroGallery.appendChild(ghost);
    }

    if (immediate) {
        updateSlideImages(false);
    } else {
        if (heroGallery) {
            var galleryRect = heroGallery.getBoundingClientRect();
            addOutgoingImage(center.parentElement, 'center', galleryRect);
        }
        updateSlideImages(true);
        if (heroGallery) {
            showHeroSlide.swap = setTimeout(function() {
                Array.prototype.forEach.call(heroGallery.querySelectorAll('.hero-flyout'), function(ghost) {
                    ghost.remove();
                });
                [left, center, right].forEach(function(img) {
                    img.classList.remove('hero-arrive');
                });
            }, 740);
        }
    }

    if (heroDots) {
        Array.prototype.forEach.call(heroDots.querySelectorAll('button'), function(button, i) {
            button.classList.toggle('active', i === heroIndex);
            button.setAttribute('aria-current', i === heroIndex ? 'true' : 'false');
        });
    }
}

function startHeroAuto() {

    clearInterval(heroTimer);

    heroTimer = setInterval(function() {
        showHeroSlide(heroIndex + 1);
    }, 5000);
}

var heroPrev = document.getElementById('heroPrev');
var heroNext = document.getElementById('heroNext');
if (heroPrev) heroPrev.onclick = function() {
    showHeroSlide(heroIndex - 1);
    startHeroAuto();
};

if (heroNext) heroNext.onclick = function() {
    showHeroSlide(heroIndex + 1);
    startHeroAuto();
};

if (heroDots) heroDots.onclick = function(event) {
    var button = event.target.closest('button');
    if (!button) return;
    showHeroSlide(Array.prototype.indexOf.call(heroDots.querySelectorAll('button'), button));
    startHeroAuto();
};

var heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
    heroVisual.addEventListener('mouseenter', function() {
        clearInterval(heroTimer);
    });
    heroVisual.addEventListener('mouseleave', startHeroAuto);
}

showHeroSlide(0, true);
startHeroAuto();

var QUICK_ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';
function cardHtml(p){
 var c=cat(p.cat),out=p.stock<=0,photo=(p.images&&p.images[0])||p.img||PRODUCT_IMAGES[p.cat]||'';
 var badge=p.is_sample?'<span class="badge">'+ui('priceOnRequest')+'</span>':(out?'<span class="badge out">'+t('out')+'</span>':(p.stock<=5?'<span class="badge">'+t('left')+p.stock+'</span>':''));
 var img=photo?'<img src="'+photo+'" alt="'+esc(name(p))+'" loading="lazy" decoding="async" onload="this.classList.add(\'ld\')" onerror="this.remove()">':'<span class="emo">'+c.e+'</span>';
 var price=p.price>0?'<div class="price">'+fmt(p.price)+' '+t('cur')+'</div>':(p.is_sample?'<div class="price" style="font-size:14px;color:var(--sub)">'+ui('priceOnRequest')+'</div>':'<div class="price" style="font-size:14px;color:var(--sub)">—</div>');
 return '<article class="card enter'+(out?' oos':'')+'" data-product="'+esc(String(p.id))+'" tabindex="0" role="link" aria-label="تفاصيل '+esc(name(p))+'"><div class="img"><div class="ph'+(photo.indexOf('data:')===0?' fit':'')+'">'+img+'<span class="glare"></span><span class="details-hint">التفاصيل والصور</span></div>'+badge+'</div><div class="info"><small>'+c[lang]+'</small><h3>'+esc(name(p))+'</h3>'+price+'<button class="btn detail-open" type="button" data-open-product="'+esc(String(p.id))+'">عرض التفاصيل</button></div></article>';
}
function renderProductShelves(){
 var phones=products.filter(function(p){return ['phone','mobile','mobiles','smartphone'].indexOf(String(p.cat).toLowerCase())!==-1});
 var headphones=products.filter(function(p){
  var category=String(p.cat).toLowerCase(),label=((p.ar||'')+' '+(p.en||''));
  if(['airpods','headphones','earbuds','earphones'].indexOf(category)!==-1)return true;
  return category==='audio'&&!/speaker|سبيكر|مكبر صوت/i.test(label);
 });
 $('#phoneShelf').hidden=!phones.length;
 $('#headphoneShelf').hidden=!headphones.length;
 $('#phoneTrack').innerHTML=phones.map(cardHtml).join('');
 $('#headphoneTrack').innerHTML=headphones.map(cardHtml).join('');
 animateCards($('#phoneTrack'));animateCards($('#headphoneTrack'));
}
var showcaseItems=null,showcaseAdminItems=[],showcaseRenderKey='',showcaseResizeTimer=null;
function renderShowcaseImages(){
 var items;
 if(showcaseItems!==null){
  items=showcaseItems.map(function(item){return {type:item.item_type,content:item.content,label:item.item_type==='image'?'صورة من الشريط المتحرك':item.content}});
 }else{
  var seen={};
  items=products.map(function(p){return {type:'image',content:(p.images&&p.images[0])||p.img||PRODUCT_IMAGES[p.cat]||'',label:name(p)}})
   .filter(function(item){if(!item.content||seen[item.content])return false;seen[item.content]=true;return true}).slice(0,8);
  if(!items.length)items=heroSlides.map(function(slide){return {type:'image',content:slide.src,label:slide.alt}});
 }
 var track=$('#showcaseTrack'),strip=track.parentElement;
 if(!items.length){strip.hidden=true;track.innerHTML='';showcaseRenderKey='';return}
 strip.hidden=false;
 var images=items.map(function(item){
  if(item.type==='text')return '<span class="showcase-message" dir="auto">'+esc(item.content)+'</span>';
  return '<div class="showcase-image"><img src="'+esc(item.content)+'" alt="'+esc(item.label)+'" loading="lazy" decoding="async" onerror="this.hidden=true"></div>';
 }).join('');
 var stripWidth=strip.clientWidth||Math.min(window.innerWidth-32,1240);
 var renderKey=items.map(function(item){return item.type+'\n'+item.content+'\n'+item.label}).join('\n')+'|'+stripWidth;
 if(renderKey===showcaseRenderKey)return;
 var firstSet='<div class="showcase-set">'+images+'</div>',setMarkup='<div class="showcase-set" aria-hidden="true">'+images+'</div>';
 track.innerHTML=firstSet;
 var fallbackImageWidth=Math.max(92,Math.min(144,window.innerWidth*.12));
 var setWidth=track.firstElementChild.getBoundingClientRect().width||items.length*fallbackImageWidth+items.length*10;
 var copiesPerRun=Math.max(2,Math.ceil(stripWidth/setWidth)+1),run=firstSet;
 for(var i=1;i<copiesPerRun;i++)run+=setMarkup;
 track.innerHTML='<div class="showcase-run">'+run+'</div><div class="showcase-run" aria-hidden="true">'+run+'</div>';
 showcaseRenderKey=renderKey;
}
function renderShowcaseAdminList(){
 $('#showcaseAdminList').innerHTML=showcaseAdminItems.map(function(item){
  var preview=item.item_type==='image'?'<img src="'+esc(item.content)+'" alt="">':'<span class="showcase-text-preview">'+esc(item.content)+'</span>';
  return '<div class="showcase-admin-item"><div class="showcase-admin-preview">'+preview+'<span>'+ (item.item_type==='image'?'صورة':'نص متحرك')+'</span></div><button class="btn ghost" type="button" data-showcase-delete="'+esc(String(item.id))+'">حذف</button></div>';
 }).join('');
}
async function loadShowcaseItems(){
 if(!remoteReady||!supabase)return false;
 var result=await supabase.from('showcase_items').select('id,item_type,content,sort_order').order('sort_order',{ascending:true}).order('id',{ascending:true});
 if(result.error){
  console.error('Could not load showcase items',result.error);
  if(admin)$('#showcaseAdminMsg').textContent='تعذر تحميل عناصر الشريط. شغّل supabase-showcase.sql أولًا. '+result.error.message;
  return false;
 }
 showcaseItems=result.data||[];
 showcaseAdminItems=showcaseItems.slice();
 renderShowcaseImages();
 if(admin){renderShowcaseAdminList();$('#showcaseAdminMsg').textContent=''}
 if(!window._hagagShowcaseRealtime){
  window._hagagShowcaseRealtime=true;
  supabase.channel('hagag-showcase-live').on('postgres_changes',{event:'*',schema:'public',table:'showcase_items'},loadShowcaseItems).subscribe();
 }
 return true;
}
window.addEventListener('resize',function(){
 clearTimeout(showcaseResizeTimer);
 showcaseResizeTimer=setTimeout(renderShowcaseImages,150);
});
function render(){
 $('#catTrack').innerHTML=CATS.map(function(c){
  var n=products.filter(function(p){return p.cat===c.id}).length;
  return '<div class="cat" role="button" tabindex="0" data-c="'+c.id+'"><div class="e"><img src="'+(PRODUCT_IMAGES[c.id]||'')+'" alt="'+c[lang]+'" loading="lazy" onerror="var p=this.parentNode;this.remove();p.textContent=&quot;'+c.e+'&quot;"></div><h3>'+c[lang]+'</h3><small>'+n+' '+t('items')+'</small></div>'}).join('');
 $('#tabs').innerHTML='<button class="tab'+(tab?'':' on')+'" data-tab="">'+t('all')+'</button>'+CATS.map(function(c){return '<button class="tab'+(tab===c.id?' on':'')+'" data-tab="'+c.id+'">'+c[lang]+'</button>'}).join('');
 var sorted=products.filter(function(p){return !tab||p.cat===tab}).sort(function(a,b){return b.t-a.t});
 $('#newTrack').innerHTML=sorted.length?sorted.slice(0,12).map(cardHtml).join(''):'<div class="empty">'+t('none')+'</div>';
 animateCards($('#newTrack'));
 renderProductShelves();
 renderShowcaseImages();
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
 $('#mList').innerHTML=products.filter(function(p){return !p.is_sample}).map(function(p){return '<div class="mrow"><span>'+esc(name(p))+' · '+p.stock+'</span><span class="mrow-actions"><button data-edit="'+p.id+'">تعديل</button><button data-del="'+p.id+'">'+t('del')+'</button></span></div>'}).join('');
}
function applyLang(){
 var h=document.documentElement;h.lang=lang;h.dir=lang==='ar'?'rtl':'ltr';
 $('#langBtn').textContent=lang==='ar'?'EN':'عربي';
 $('#adminBtn').setAttribute('aria-label',lang==='ar'?'الأدمن':'Admin');
 $('#heroPrev').textContent=lang==='ar'?'→':'←';
 $('#heroNext').textContent=lang==='ar'?'←':'→';
 $('#heroPrev').setAttribute('aria-label',lang==='ar'?'الصورة السابقة':'Previous slide');
 $('#heroNext').setAttribute('aria-label',lang==='ar'?'الصورة التالية':'Next slide');
 $$('[data-shelf-arrow]').forEach(function(button){var previous=button.dataset.shelfArrow==='prev';button.setAttribute('aria-label',lang==='ar'?(previous?'السابق':'التالي'):(previous?'Previous':'Next'))});
 $$('[data-t]').forEach(function(e){if(e.dataset.t==='heroBig'){e.innerHTML=t(e.dataset.t)}else{e.textContent=t(e.dataset.t)}});
 $$('[data-ph]').forEach(function(e){e.placeholder=t(e.dataset.ph)});
 ['#waC','#waF'].forEach(function(s){$(s).href=wa(t('waGen'))});$('#waSup').href=wa(t('waSup'));
 $('#accountBtn').title=userSession?t('userSignedIn'):t('userTitle');
 $('#accountBtn').setAttribute('aria-label',$('#accountBtn').title);
 document.title=lang==='ar'?'HAGAG ONE | حجاج وان – إلكترونيات وإكسسوارات أبل':'HAGAG ONE | Electronics & Apple Accessories';
 render();refreshHeaderLabels();updateCartButton();
 if(checkoutContext)applyCheckoutLanguage();
}
function applyTheme(){
 var dark=theme?theme==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;
 document.documentElement.setAttribute('data-theme',dark?'dark':'light');
}
$('#langBtn').onclick=function(){lang=lang==='ar'?'en':'ar';ls('h1_lang',lang);applyLang()};
$('#themeBtn').onclick=function(){theme=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';ls('h1_theme',theme);applyTheme()};
function refreshHeaderLabels(){
 $$('.dream-categories [data-cat-label]').forEach(function(el){var c=cat(el.dataset.catLabel);el.textContent=c[lang]});
}
$('#cartBtn').onclick=openCartCheckout;
$('#wishlistBtn').onclick=function(){toast(lang==='ar'?'قائمة المفضلة: اضغط على المنتجات لمعاينتها':'Wishlist: browse products to choose favorites');document.getElementById('products').scrollIntoView({behavior:'smooth'})};
$('#accountBtn').onclick=openUserM;
$$('.dream-categories [data-category]').forEach(function(a){a.addEventListener('click',function(){var c=a.dataset.category;if(c==='desk')c='';$('#cf').value=c;grid()})});

$('#q').oninput=grid;$('#cf').onchange=grid;$('#sortProducts').onchange=grid;$('#inStockOnly').onchange=grid;
$('#q').onkeydown=function(e){if(e.key==='Enter')document.getElementById('products').scrollIntoView()};
$('#tabs').onclick=function(e){var b=e.target.closest('.tab');if(!b)return;tab=b.dataset.tab;render()};
$('#fCats').onclick=function(e){var a=e.target.closest('[data-fc]');if(a){$('#cf').value=a.dataset.fc;grid()}};
$$('[data-sl]').forEach(function(b){b.onclick=function(){var tr=document.getElementById(b.dataset.sl);var dir=document.documentElement.dir==='rtl'?-1:1;tr.scrollBy({left:Number(b.dataset.d)*dir*Math.max(240,tr.clientWidth*.8),behavior:'smooth'})}});
function pickCat(e){var c=e.target.closest('.cat');if(!c)return;var s=$('#cf');s.value=s.value===c.dataset.c?'':c.dataset.c;grid();document.getElementById('products').scrollIntoView()}
$('#catTrack').onclick=pickCat;
$('#catTrack').onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();pickCat(e)}};

function setUserSession(user){
 userSession=user||null;
 $('#accountBtn').title=userSession?t('userSignedIn'):t('userTitle');
 $('#accountBtn').setAttribute('aria-label',$('#accountBtn').title);
 $('#userEmail').textContent=userSession&&(userSession.email||userSession.user_metadata&&userSession.user_metadata.full_name)||'';
 if(modalView==='user'){$('#userGate').hidden=!!userSession;$('#userProfile').hidden=!userSession}
}
function openUserM(){
 modalView='user';$('#modal').classList.add('open','user-auth-mode');
 $('#gate').hidden=true;$('#panel').hidden=true;
 $('#userAuthMsg').textContent='';$('#userProfileAuthMsg').textContent='';
 $('#userGate').hidden=!!userSession;$('#userProfile').hidden=!userSession;
 setUserSession(userSession);
}
function openM(){
 modalView='admin';$('#modal').classList.add('open');$('#modal').classList.remove('user-auth-mode');
 $('#userGate').hidden=true;$('#userProfile').hidden=true;
 $('#gate').hidden=admin;$('#panel').hidden=!admin;$('#pinMsg').textContent='';
 if(admin)loadShowcaseItems();
}
function closeM(){modalView='';$('#modal').classList.remove('open','user-auth-mode')}
$('#adminBtn').onclick=openM;
$('#showcaseType').onchange=function(){
 var imageMode=this.value==='image';
 $('#showcaseImageField').hidden=!imageMode;
 $('#showcaseTextField').hidden=imageMode;
 $('.showcase-entry-form').classList.toggle('text-mode',!imageMode);
};
$('#showcaseType').onchange();
async function addShowcaseItem(){
 var message=$('#showcaseAdminMsg');
 if(!admin||!remoteReady||!supabase){message.textContent='سجّل دخولك كمسؤول بعد تفعيل قاعدة البيانات لإدارة الشريط.';return}
 var button=$('#addShowcaseItem');button.disabled=true;message.textContent='';
 try{
  var type=$('#showcaseType').value,content='';
  if(type==='image'){
   var file=$('#showcaseImageFile').files[0];
   if(!file){message.textContent='اختر صورة أولًا.';return}
   var urls=await uploadProductImages([file]);content=urls[0]||'';
   if(!content)throw new Error('تعذر رفع الصورة');
  }else{
   content=$('#showcaseText').value.trim();
   if(!content){message.textContent='اكتب النص الذي تريد عرضه.';return}
  }
  var highestOrder=showcaseAdminItems.reduce(function(max,item){return Math.max(max,Number(item.sort_order)||0)},-1);
  var result=await supabase.from('showcase_items').insert({item_type:type,content:content,sort_order:highestOrder+1}).select('id,item_type,content,sort_order').single();
  if(result.error)throw result.error;
  if(!await loadShowcaseItems())throw new Error('تم الحفظ لكن تعذر تحديث قائمة الشريط');
  $('#showcaseImageFile').value='';$('#showcaseText').value='';
  message.textContent='تمت إضافة العنصر إلى الشريط المتحرك.';
 }catch(error){
  console.error('Could not add showcase item',error);
  message.textContent='تعذرت إضافة العنصر: '+(error.message||'راجع اتصال قاعدة البيانات والصلاحيات');
 }finally{button.disabled=false}
}
$('#addShowcaseItem').onclick=addShowcaseItem;
$('#showcaseAdminList').onclick=async function(event){
 var button=event.target.closest('[data-showcase-delete]');if(!button)return;
 if(!confirm('هل تريد حذف هذا العنصر من الشريط المتحرك؟'))return;
 var message=$('#showcaseAdminMsg');button.disabled=true;message.textContent='';
 try{
  var result=await supabase.from('showcase_items').delete().eq('id',button.dataset.showcaseDelete);
  if(result.error)throw result.error;
  if(!await loadShowcaseItems())throw new Error('تم الحذف لكن تعذر تحديث الشريط');
  message.textContent='تم حذف العنصر من الشريط.';
 }catch(error){
  console.error('Could not delete showcase item',error);
  message.textContent='تعذر حذف العنصر: '+(error.message||'راجع اتصال قاعدة البيانات والصلاحيات');
 }
};
async function signInWithProvider(provider){
 var message=$('#userAuthMsg');message.textContent='';
 if(!remoteReady||!supabase){message.textContent=t('userAuthNotReady');return}
 if(location.protocol!=='https:'&&location.hostname!=='localhost'&&location.hostname!=='127.0.0.1'){message.textContent=t('userAuthHttps');return}
 try{
  var result=await supabase.auth.signInWithOAuth({provider:provider,options:{redirectTo:location.origin+location.pathname+location.search}});
  if(result.error)message.textContent=t('userAuthFailed')+' '+result.error.message;
 }catch(error){message.textContent=t('userAuthFailed')+(error&&error.message?' '+error.message:'')}
}
$('#googleSignIn').onclick=function(){signInWithProvider('google')};
$('#appleSignIn').onclick=function(){signInWithProvider('apple')};
$('#userLogout').onclick=async function(){
 try{
  var result=await supabase.auth.signOut();
  if(result.error)throw result.error;
  admin=false;adminUser=null;$('#panel').hidden=true;$('#gate').hidden=false;
  setUserSession(null);closeM();
 }catch(error){$('#userProfileAuthMsg').textContent=t('userSignOutFailed')+(error&&error.message?' '+error.message:'')}
};
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
 if(check.error||!check.data){await supabase.auth.signOut();setUserSession(null);$('#pinMsg').textContent='هذا الحساب ليس لديه صلاحية إدارة';return}
 admin=true;adminUser=auth.data.user;setUserSession(auth.data.user);$('#gate').hidden=true;$('#panel').hidden=false;mlist();loadShowcaseItems();
}
$('#pinOk').onclick=login;
$('#adminLogout').onclick=async function(){if(supabase)await supabase.auth.signOut();admin=false;adminUser=null;setUserSession(null);$('#panel').hidden=true;$('#gate').hidden=false;closeM();};
$('#importLocal').onclick=async function(){
 if(!admin||!remoteReady)return;
 var source=localProductsSnapshot||products;
 if(!source.length){toast('لا توجد منتجات محلية للاستيراد');return}
 var existing=await supabase.from('products').select('id',{count:'exact',head:true});
 if(existing.error){toast('تعذر فحص قاعدة البيانات');return}
 if(existing.count>0){toast('قاعدة البيانات تحتوي بالفعل على منتجات؛ لن نكرر الاستيراد');return}
 if(!confirm('سيتم استيراد '+source.length+' منتجًا من هذا الجهاز إلى قاعدة البيانات المركزية. هل تريد المتابعة؟'))return;
 var rows=source.map(function(p){return productToDb({ar:p.ar,en:p.en,cat:p.cat,price:p.price,stock:p.stock,images:p.images&&p.images.length?p.images:(p.img?[p.img]:[]),colors:p.colors||[],description:p.description||'',videoUrl:p.videoUrl||''})});
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
 var rawVideoUrl=$('#videoUrl').value.trim(),videoUrl=safeVideoUrl(rawVideoUrl);
 if(rawVideoUrl&&!videoUrl){$('#fMsg').textContent=t('videoInvalid');return}
 var colors=$('#colors').value.split(/[،,]/).map(function(x){return x.trim()}).filter(Boolean);
 var old=editingId?products.find(function(x){return String(x.id)===String(editingId)}):null,images=(old&&old.images)||[];
 try{
  if(pendingImages.length)images=images.concat(await uploadProductImages(pendingImages));
  var payload=productToDb({ar:ar,en:en,cat:$('#cs').value,price:pr,stock:Math.max(0,parseInt($('#st').value,10)||0),images:images,colors:colors,description:$('#description').value.trim(),videoUrl:videoUrl||(old&&old.videoUrl)||''});
  var result=editingId?await supabase.from('products').update(payload).eq('id',editingId).select().single():await supabase.from('products').insert(payload).select().single();
  if(result.error)throw result.error;
  editingId=null;pendingImages=[];$('#nAr').value='';$('#nEn').value='';$('#pr').value='';$('#st').value='1';$('#im').value='';$('#colors').value='';$('#description').value='';$('#videoUrl').value='';$('#imagePreviews').innerHTML='';$('#fMsg').textContent='';
  await loadRemoteProducts();toast('تم حفظ المنتج بنجاح');
 }catch(err){console.error(err);$('#fMsg').textContent='فشل الحفظ: '+(err.message||'راجع إعدادات قاعدة البيانات والصلاحيات')}
}
$('#save').onclick=saveProduct;
$('#mList').onclick=async function(e){
 var del=e.target.dataset.del,edit=e.target.dataset.edit;
 if(del){var r=await supabase.from('products').delete().eq('id',del);if(r.error){toast('تعذر حذف المنتج');return}await loadRemoteProducts();toast(t('deleted'));return}
 if(edit){var p=products.find(function(x){return String(x.id)===String(edit)});if(!p)return;editingId=p.id;$('#nAr').value=p.ar||'';$('#nEn').value=p.en||'';$('#pr').value=p.price||0;$('#st').value=p.stock||0;$('#cs').value=p.cat;$('#colors').value=(p.colors||[]).join('، ');$('#description').value=p.description||'';$('#videoUrl').value=p.videoUrl||'';$('#fMsg').textContent='الصور الحالية محفوظة. اختر صورًا إضافية لإضافتها.';}
};
var detailImageTimer=null,activeDetailProductId=null,SHIPPING_FEE=200;
function closeProductDetail(){
 if(detailImageTimer){clearInterval(detailImageTimer);detailImageTimer=null}
 activeDetailProductId=null;
 $$('main > section').forEach(function(section){section.hidden=section.id==='productDetail'||section.id==='checkout'});
}
function checkoutSummaryItems(){
 if(!checkoutContext)return [];
 return checkoutContext.items.map(function(item){
  var product=products.find(function(p){return String(p.id)===String(item.id)});
  return {item:item,product:product};
 });
}
function renderCheckoutSummary(){
 if(!checkoutContext||!$('#checkoutItems'))return;
 var entries=checkoutSummaryItems(),subtotal=0,unknownPrice=false;
 $('#checkoutItems').innerHTML=entries.map(function(entry,index){
  if(!entry.product)return '<div class="checkout-item checkout-item-error">'+esc(ui('checkoutProductError'))+'</div>';
  var product=entry.product,item=entry.item,price=Number(product.price)||0,image=(product.images&&product.images[0])||product.img||PRODUCT_IMAGES[product.cat]||'';
  if(price>0)subtotal+=price*item.quantity;else unknownPrice=true;
  return '<article class="checkout-item"><img src="'+esc(image)+'" alt="'+esc(name(product))+'"><div class="checkout-item-info"><strong>'+esc(name(product))+'</strong>'+
   (item.color?'<small>'+esc(item.color)+'</small>':'')+'<small>'+(price>0?fmt(price)+' '+t('cur'):ui('priceOnRequest'))+'</small>'+
   '<div class="checkout-item-controls"><button type="button" data-checkout-action="minus" data-index="'+index+'" aria-label="−" '+(item.quantity<=1?'disabled':'')+'>−</button>'+
   '<span>'+item.quantity+'</span><button type="button" data-checkout-action="plus" data-index="'+index+'" aria-label="+" '+(item.quantity>=Number(product.stock||0)?'disabled':'')+'>+</button>'+
   '<button type="button" class="checkout-remove" data-checkout-action="remove" data-index="'+index+'" aria-label="×">×</button></div></div>'+
   '<b class="checkout-line-total">'+(price>0?fmt(price*item.quantity)+' '+t('cur'):ui('priceOnRequest'))+'</b></article>';
 }).join('');
 var subtotalText=unknownPrice?ui('priceOnRequest'):fmt(subtotal)+' '+t('cur');
 var totalText=unknownPrice?ui('unknownTotal'):fmt(subtotal+SHIPPING_FEE)+' '+t('cur');
 $('#checkoutSubtotalValue').textContent=subtotalText;
 $('#checkoutShippingValue').textContent=fmt(SHIPPING_FEE)+' '+t('cur');
 $('#checkoutTotalValue').textContent=totalText;
}
function applyCheckoutLanguage(){
 $$('#checkout [data-ct]').forEach(function(el){el.textContent=ui(el.dataset.ct)});
 $$('#checkout [data-ctp]').forEach(function(el){el.placeholder=ui(el.dataset.ctp)});
 $$('#checkoutGovernorate [data-gov-index]').forEach(function(el){el.textContent=CHECKOUT_TEXT[lang].governorates[Number(el.dataset.govIndex)]});
 var payment=$('#checkoutContent input[name="payment_method"]:checked');
 if($('#checkoutPaymentHint'))$('#checkoutPaymentHint').textContent=ui(payment&&payment.value==='manual_transfer'?'transferHint':'codHint');
 renderCheckoutSummary();
}
function renderCheckout(){
 if(!checkoutContext)return;
 var backKey=checkoutContext.returnProductId?'backToProduct':'backToShop';
 $('#backCheckout').dataset.ct=backKey;$('#backCheckout').textContent=ui(backKey);
 var govOptions=CHECKOUT_TEXT[lang].governorates.map(function(label,index){
  return '<option value="'+esc(CHECKOUT_TEXT.en.governorates[index])+'" data-gov-index="'+index+'">'+esc(label)+'</option>';
 }).join('');
 $('#checkoutContent').innerHTML='<div class="checkout-heading"><h1 data-ct="checkoutTitle">'+ui('checkoutTitle')+'</h1><p data-ct="checkoutSubtitle">'+ui('checkoutSubtitle')+'</p></div>'+
  '<div class="checkout-layout"><aside class="checkout-summary"><h2 data-ct="summary">'+ui('summary')+'</h2><div id="checkoutItems" class="checkout-items"></div>'+
  '<div class="checkout-totals"><p><span data-ct="subtotal">'+ui('subtotal')+'</span><strong id="checkoutSubtotalValue"></strong></p><p><span data-ct="shipping">'+ui('shipping')+'</span><strong id="checkoutShippingValue"></strong></p><p class="checkout-total"><span data-ct="total">'+ui('total')+'</span><strong id="checkoutTotalValue"></strong></p></div></aside>'+
  '<form class="checkout-form" id="checkoutForm"><section class="checkout-card"><h2 data-ct="delivery">'+ui('delivery')+'</h2><div class="checkout-fields">'+
  '<label class="checkout-field checkout-wide"><span data-ct="country">'+ui('country')+'</span><select name="country" required><option value="Egypt" selected data-ct="egypt">'+ui('egypt')+'</option></select></label>'+
  '<label class="checkout-field"><span data-ct="firstName">'+ui('firstName')+'</span><input name="first_name" autocomplete="given-name" maxlength="80" required></label>'+
  '<label class="checkout-field"><span data-ct="lastName">'+ui('lastName')+'</span><input name="last_name" autocomplete="family-name" maxlength="80" required></label>'+
  '<label class="checkout-field checkout-wide"><span data-ct="address">'+ui('address')+'</span><input name="street_address" autocomplete="street-address" maxlength="250" required></label>'+
  '<label class="checkout-field checkout-wide"><span data-ct="addressExtra">'+ui('addressExtra')+'</span><input name="address_details" data-ctp="addressExtra" maxlength="180"></label>'+
  '<label class="checkout-field"><span data-ct="city">'+ui('city')+'</span><input name="city" autocomplete="address-level2" maxlength="100" required></label>'+
  '<label class="checkout-field"><span data-ct="governorate">'+ui('governorate')+'</span><select id="checkoutGovernorate" name="governorate" autocomplete="address-level1" required><option value="" selected disabled data-ct="selectGovernorate">'+ui('selectGovernorate')+'</option>'+govOptions+'</select></label>'+
  '<label class="checkout-field"><span data-ct="postalCode">'+ui('postalCode')+'</span><input name="postal_code" autocomplete="postal-code" maxlength="20"></label>'+
  '<label class="checkout-field"><span data-ct="phone">'+ui('phone')+'</span><input name="phone" type="tel" autocomplete="tel" inputmode="tel" minlength="8" maxlength="20" dir="ltr" required></label>'+
  '</div></section><section class="checkout-card"><h2 data-ct="payment">'+ui('payment')+'</h2><div class="payment-options">'+
  '<label class="payment-option"><input type="radio" name="payment_method" value="cod" checked><span><strong data-ct="cod">'+ui('cod')+'</strong><small data-ct="codHint">'+ui('codHint')+'</small></span></label>'+
  '<label class="payment-option"><input type="radio" name="payment_method" value="manual_transfer"><span><strong data-ct="transfer">'+ui('transfer')+'</strong><small data-ct="transferHint">'+ui('transferHint')+'</small></span></label>'+
  '<label class="payment-option payment-disabled"><input type="radio" name="payment_method" value="online_gateway" disabled><span><strong data-ct="online">'+ui('online')+'</strong><small data-ct="onlineHint">'+ui('onlineHint')+'</small></span></label>'+
  '</div><p class="payment-hint" id="checkoutPaymentHint" data-ct="codHint">'+ui('codHint')+'</p><div class="msg checkout-error" id="checkoutError" role="alert" aria-live="polite"></div><button class="btn checkout-submit" type="submit" data-ct="confirmOrder">'+ui('confirmOrder')+'</button></section></form></div>';
 applyCheckoutLanguage();
}
function openCheckout(items,source,returnProductId){
 var selected=(items||[]).filter(function(item){return item&&item.id!==undefined&&Number(item.quantity)>0}).map(function(item){return {id:String(item.id),quantity:Math.floor(Number(item.quantity)),color:item.color||''}});
 if(!selected.length){toast(ui('cartEmpty'));return}
 checkoutContext={items:selected,source:source,returnProductId:returnProductId?String(returnProductId):null};
 if(detailImageTimer){clearInterval(detailImageTimer);detailImageTimer=null}
 $$('main > section').forEach(function(section){section.hidden=section.id!=='checkout'});
 setDreamHeaderPageHidden(true);
 renderCheckout();
 if(location.hash!=='#checkout')location.hash='checkout';
 window.scrollTo({top:0,behavior:'smooth'});
}
function openCartCheckout(){
 if(!$('#checkout').hidden)return;
 if(!cartItems.length){toast(ui('cartEmpty'));return}
 var returnId=$('#productDetail').hidden?null:activeDetailProductId;
 openCheckout(cartItems,'cart',returnId);
}
function closeCheckout(){
 var context=checkoutContext;checkoutContext=null;$('#checkout').hidden=true;
 if(context&&context.returnProductId){location.hash='product='+encodeURIComponent(context.returnProductId);openProduct(context.returnProductId);return}
 if(location.hash==='#checkout')location.hash='';
 closeProductDetail();$('#products').scrollIntoView({behavior:'smooth'});
}
function syncCheckoutCart(){
 if(checkoutContext&&checkoutContext.source==='cart'){
  cartItems=checkoutContext.items.map(function(item){return {id:item.id,quantity:item.quantity,color:item.color||''}});
  saveCart();
 }
}
function updateCheckoutItem(action,index){
 if(!checkoutContext||!checkoutContext.items[index])return;
 var item=checkoutContext.items[index],product=products.find(function(p){return String(p.id)===String(item.id)});
 if(action==='remove')checkoutContext.items.splice(index,1);
 else if(!product){$('#checkoutError').textContent=ui('checkoutProductError');return}
 else if(action==='plus'){
  if(item.quantity+1>Number(product.stock||0)){$('#checkoutError').textContent=ui('checkoutStockError');return}
  item.quantity++;
 }else if(action==='minus'){
  if(item.quantity<=1)return;
  item.quantity--;
 }
 $('#checkoutError').textContent='';
 syncCheckoutCart();
 if(!checkoutContext.items.length){closeCheckout();return}
 renderCheckoutSummary();
}
async function submitCheckout(event){
 event.preventDefault();
 var error=$('#checkoutError');error.textContent='';
 if(!checkoutContext||!checkoutContext.items.length){error.textContent=ui('emptyCheckout');return}
 if(!remoteReady||!supabase){error.textContent=ui('checkoutSetupError');return}
 var form=event.target;if(!form.reportValidity())return;
 var formData=new FormData(form),paymentMethod=String(formData.get('payment_method')||'');
 if(paymentMethod!=='cod'&&paymentMethod!=='manual_transfer'){error.textContent=ui('onlineHint');return}
 var orderItems=[],subtotal=0,unknownPrice=false;
 for(var i=0;i<checkoutContext.items.length;i++){
  var item=checkoutContext.items[i],product=products.find(function(p){return String(p.id)===String(item.id)});
  if(!product){error.textContent=ui('checkoutProductError');return}
  if(Number(product.stock||0)<item.quantity){error.textContent=ui('checkoutStockError');return}
  var price=Number(product.price)||0;
  if(price>0)subtotal+=price*item.quantity;else unknownPrice=true;
  orderItems.push({product_id:String(product.id),name:name(product),quantity:item.quantity,unit_price:price>0?price:null,color:item.color||null});
 }
 var payload={
  customer_first_name:String(formData.get('first_name')).trim(),
  customer_last_name:String(formData.get('last_name')).trim(),
  customer_phone:String(formData.get('phone')).trim(),
  country:String(formData.get('country')),
  governorate:String(formData.get('governorate')),
  city:String(formData.get('city')).trim(),
  street_address:String(formData.get('street_address')).trim(),
  address_details:String(formData.get('address_details')||'').trim()||null,
  postal_code:String(formData.get('postal_code')||'').trim()||null,
  payment_method:paymentMethod,
  items:orderItems,
  subtotal:unknownPrice?null:subtotal,
  shipping_fee:SHIPPING_FEE,
  total:unknownPrice?null:subtotal+SHIPPING_FEE
 };
 var address=[payload.country,payload.governorate,payload.city,payload.street_address,payload.address_details,payload.postal_code].filter(Boolean).join('، ');
 var paymentLabel=ui(paymentMethod==='cod'?'paymentMethodCod':'paymentMethodTransfer');
 var totalLabel=unknownPrice?ui('unknownTotal'):fmt(subtotal+SHIPPING_FEE)+' '+t('cur');
 var message=['طلب جديد من HAGAG ONE','الاسم: '+payload.customer_first_name+' '+payload.customer_last_name,'الهاتف: '+payload.customer_phone,'العنوان: '+address,'طريقة الدفع: '+paymentLabel,'المنتجات:'].concat(orderItems.map(function(item){return '- '+item.name+' × '+item.quantity+(item.color?' ('+item.color+')':'')+' — '+(item.unit_price===null?ui('priceOnRequest'):fmt(item.unit_price*item.quantity)+' '+t('cur'))})).concat(['الشحن: '+fmt(SHIPPING_FEE)+' '+t('cur'),'الإجمالي: '+totalLabel]).join('\n');
 var whatsappUrl=wa(message),whatsappWindow=null;
 try{whatsappWindow=window.open('about:blank','_blank');if(whatsappWindow)whatsappWindow.opener=null}catch(openError){console.warn('Could not open WhatsApp window yet',openError)}
 try{
  var result=await supabase.from('store_orders').insert(payload);
  if(result.error)throw result.error;
 }catch(saveError){
  if(whatsappWindow)whatsappWindow.close();
  console.error('Could not save checkout order',saveError);
  error.textContent=ui('checkoutError')+(saveError&&saveError.message?' '+saveError.message:'');
  return;
 }
 if(checkoutContext.source==='cart'){cartItems=[];saveCart()}
 $('#checkoutContent').innerHTML='<div class="checkout-success"><div class="checkout-success-mark" aria-hidden="true">✓</div><h1 data-ct="orderSaved">'+ui('orderSaved')+'</h1><p data-ct="paymentSaved">'+ui('paymentSaved')+'</p><a class="btn wa" id="checkoutWhatsAppLink" href="'+esc(whatsappUrl)+'" target="_blank" rel="noopener" data-ct="sendWhatsapp">'+ui('sendWhatsapp')+'</a></div>';
 applyCheckoutLanguage();
 if(whatsappWindow)whatsappWindow.location.href=whatsappUrl;
}
$('#checkoutContent').addEventListener('click',function(event){
 var action=event.target.closest('[data-checkout-action]');
 if(action)updateCheckoutItem(action.dataset.checkoutAction,Number(action.dataset.index));
});
$('#checkoutContent').addEventListener('change',function(event){
 if(event.target.name==='payment_method')$('#checkoutPaymentHint').textContent=ui(event.target.value==='manual_transfer'?'transferHint':'codHint');
});
$('#checkoutContent').addEventListener('submit',submitCheckout);
$('#backCheckout').onclick=closeCheckout;
var detailImageTimer=null,activeDetailProductId=null;
function closeProductDetail(){
 if(detailImageTimer){clearInterval(detailImageTimer);detailImageTimer=null}
 activeDetailProductId=null;
 $$('main > section').forEach(function(section){section.hidden=section.id==='productDetail'||section.id==='checkout'});
 setDreamHeaderPageHidden(false);
}
function openProduct(id){
 var p=products.find(function(x){return String(x.id)===String(id)});if(!p)return;
 checkoutContext=null;activeDetailProductId=String(p.id);detailQuantity=1;
 if(detailImageTimer){clearInterval(detailImageTimer);detailImageTimer=null}
 var photos=(p.images&&p.images.length?p.images:[p.img||PRODUCT_IMAGES[p.cat]]).filter(Boolean),selectedColor=(p.colors||[])[0]||'';
 $$('main > section').forEach(function(section){section.hidden=section.id!=='productDetail'});
 setDreamHeaderPageHidden(true);
 var gallery='<div class="detail-gallery"><div class="detail-main"><img id="detailMainImage" src="'+esc(photos[0]||'')+'" alt="'+esc(name(p))+'"></div><div class="detail-thumbs">'+photos.map(function(src,i){return '<button type="button" data-photo="'+i+'" class="'+(i===0?'active':'')+'"><img src="'+esc(src)+'" alt="'+esc(name(p))+'"></button>'}).join('')+'</div></div>';
 var colorHtml=(p.colors&&p.colors.length)?'<div class="detail-colors"><strong>الألوان المتاحة</strong><div>'+p.colors.map(function(c,i){return '<button type="button" class="color-choice '+(i===0?'selected':'')+'" data-color="'+esc(c)+'">'+esc(c)+'</button>'}).join('')+'</div></div>':'';
 var inStock=Number(p.stock)>0,maxQuantity=Math.max(1,Number(p.stock)||1),isFavorite=favoriteIds.indexOf(String(p.id))!==-1;
 var stockText=p.is_sample?(lang==='ar'?'السعر والتوفر عند التأكيد':'Price and availability confirmed on request'):(inStock?'متوفر بالمخزون: '+p.stock:'غير متوفر حاليًا');
 var videoUrl=safeVideoUrl(p.videoUrl||p.video_url),videoLink=videoUrl?'<a class="detail-video-link" href="'+esc(videoUrl)+'" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><span>'+t('videoWatch')+'</span></a>':'';
 var actions='<div class="detail-actions"><button type="button" class="detail-favorite" id="detailFavorite" aria-label="'+esc(ui(isFavorite?'unfavorite':'favorite'))+'" aria-pressed="'+(isFavorite?'true':'false')+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.2-8.8 11-8.8 11s-8.8-5.8-8.8-11A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"/></svg></button>'+
  '<button type="button" class="btn detail-add-cart" data-add-to-cart '+(inStock?'':'disabled')+'>'+ui('addToCart')+'</button>'+
  '<div class="detail-quantity"><button type="button" data-qty-change="-1" aria-label="−" disabled>−</button><input id="detailQuantity" type="number" min="1" max="'+maxQuantity+'" value="1" aria-label="'+ui('quantity')+'" '+(inStock?'':'disabled')+'><button type="button" data-qty-change="1" aria-label="+" '+(inStock&&maxQuantity>1?'':'disabled')+'>+</button></div>'+
  '<button type="button" class="btn detail-buy-now" data-buy-now '+(inStock?'':'disabled')+'>'+ui('buyNow')+'</button></div>';
 $('#detailContent').innerHTML='<div class="detail-layout">'+gallery+'<div class="detail-info"><small>'+cat(p.cat)[lang]+'</small><h1>'+esc(name(p))+'</h1><div class="detail-price">'+(p.price>0?fmt(p.price)+' '+t('cur'):ui('priceOnRequest'))+'</div><p class="detail-stock">'+stockText+'</p>'+colorHtml+'<div class="detail-description">'+esc(p.description||'تواصل معنا لمعرفة تفاصيل ومواصفات المنتج.')+'</div>'+videoLink+actions+'</div></div>';
 var currentPhoto=0,mainImage=$('#detailMainImage');
 function selectPhoto(index){
  if(!photos.length)return;
  currentPhoto=(index+photos.length)%photos.length;
  mainImage.src=photos[currentPhoto];mainImage.alt=name(p);
  mainImage.classList.remove('photo-change');void mainImage.offsetWidth;mainImage.classList.add('photo-change');
  $$('.detail-thumbs button').forEach(function(button,i){button.classList.toggle('active',i===currentPhoto)});
 }
 function startDetailImageTimer(){
  if(detailImageTimer)clearInterval(detailImageTimer);
  if(photos.length>1)detailImageTimer=setInterval(function(){selectPhoto(currentPhoto+1)},1000);
 }
 function setQuantity(value){
  detailQuantity=Math.max(1,Math.min(maxQuantity,Math.floor(Number(value)||1)));
  $('#detailQuantity').value=detailQuantity;
  $('#detailContent [data-qty-change="-1"]').disabled=detailQuantity<=1;
  $('#detailContent [data-qty-change="1"]').disabled=detailQuantity>=maxQuantity;
 }
 $('#detailContent').onclick=function(e){
  var photoButton=e.target.closest('[data-photo]');if(photoButton){selectPhoto(Number(photoButton.dataset.photo));startDetailImageTimer();return}
  var colorButton=e.target.closest('[data-color]');if(colorButton){selectedColor=colorButton.dataset.color;$$('.color-choice').forEach(function(b){b.classList.toggle('selected',b===colorButton)});return}
  var quantityButton=e.target.closest('[data-qty-change]');if(quantityButton){setQuantity(detailQuantity+Number(quantityButton.dataset.qtyChange));return}
  if(e.target.closest('#detailFavorite')){
   var favoriteState=toggleFavorite(p.id),favoriteButton=$('#detailFavorite');
   favoriteButton.setAttribute('aria-pressed',favoriteState.selected?'true':'false');
   favoriteButton.setAttribute('aria-label',ui(favoriteState.selected?'unfavorite':'favorite'));
   toast(ui(favoriteState.saved?(favoriteState.selected?'favoriteAdded':'favoriteRemoved'):'favoritesStorageError'));return;
  }
  if(e.target.closest('[data-add-to-cart]')){addProductToCart(p,detailQuantity,selectedColor);return}
  if(e.target.closest('[data-buy-now]'))openCheckout([{id:p.id,quantity:detailQuantity,color:selectedColor}],'product',p.id);
 };
 $('#detailQuantity').onchange=function(){setQuantity(this.value)};
 startDetailImageTimer();
 location.hash='product='+encodeURIComponent(id);window.scrollTo({top:0,behavior:'smooth'});
}
function setDreamHeaderPageHidden(hidden){
 var header=$('.dream-header');if(!header)return;
 header.classList.toggle('is-page-hidden',hidden);
}
document.addEventListener('click',function(e){var b=e.target.closest('[data-open-product],.card[data-product]');if(!b)return;var id=b.dataset.openProduct||b.dataset.product;if(id)openProduct(id)});
document.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.matches('.card[data-product]')){e.preventDefault();openProduct(e.target.dataset.product)}});
$('#backProducts').onclick=function(){location.hash='';closeProductDetail();$('#products').scrollIntoView({behavior:'smooth'});};
window.addEventListener('hashchange',function(){
 var route=location.hash.match(/^#product=(.+)$/);
 if(route){openProduct(decodeURIComponent(route[1]));return}
 if(location.hash==='#checkout'){
  if($('#checkout').hidden&&checkoutContext)openCheckout(checkoutContext.items,checkoutContext.source,checkoutContext.returnProductId);
  else if($('#checkout').hidden&&cartItems.length)openCartCheckout();
  else if($('#checkout').hidden)location.hash='';
  return;
 }
 if(location.hash==='#admin'){openM();return}
 if(!$('#checkout').hidden){checkoutContext=null;closeProductDetail();$('#products').scrollIntoView({behavior:'smooth'});return}
 if(!$('#productDetail').hidden){closeProductDetail();$('#products').scrollIntoView({behavior:'smooth'})}
});
if(location.hash==='#admin')openM();
else if(location.hash==='#checkout'&&cartItems.length)openCartCheckout();
else if(location.hash==='#checkout')location.hash='';
$('#yr').textContent=new Date().getFullYear();

/* ---- product cards: staggered entrance + cursor tilt ---- */
var FINE=!!(window.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches);
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
 if(!root||!FINE)return;
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
if(remoteReady){supabase.auth.getSession().then(async function(r){if(r.data.session){setUserSession(r.data.session.user);var c=await supabase.from('admin_users').select('user_id').eq('user_id',r.data.session.user.id).maybeSingle();if(c.data){admin=true;adminUser=r.data.session.user;}}});loadRemoteProducts();loadShowcaseItems();}
bindTilt($('#grid'));bindTilt($('#newTrack'));bindTilt($('#phoneTrack'));bindTilt($('#headphoneTrack'));
$$('.reveal').forEach(function(el){el.classList.add('reveal-ready')});
if('IntersectionObserver' in window){
 var revealObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}})},{threshold:.12});
 $$('.reveal').forEach(function(el){revealObserver.observe(el)});
}else{$$('.reveal').forEach(function(el){el.classList.add('is-visible')})}
})();
