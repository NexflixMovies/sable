// ==================== SABLE — Main Script ====================

var PRODUCTS = [
  {id:1,name:"Classic Obsidian Tee",price:1299,originalPrice:1799,category:"T-Shirts",sizes:["XS","S","M","L","XL"],colors:["Black","White","Charcoal"],description:"Premium 100% Supima cotton. Pre-shrunk, ultra-soft, built for those who live in the dark.",image:"hoodie.png",images:["hoodie.png"],badge:"Bestseller"},
  {id:2,name:"Midnight Denim Jacket",price:4999,originalPrice:6499,category:"Jackets",sizes:["S","M","L","XL","XXL"],colors:["Dark Wash","Black"],description:"Raw-edge denim, midnight wash. Double stitched for eternity. Structured yet rebellious.",image:"suit1.png",images:["suit1.png"],badge:"New"},
  {id:3,name:"Shadow Slim Chinos",price:2499,originalPrice:3199,category:"Bottoms",sizes:["28","30","32","34","36"],colors:["Charcoal","Olive","Black"],description:"Tailored fit. Stretch twill. Move like shadow, look like sculpture.",image:"hoodie3.png",images:["hoodie3.png"]},
  {id:4,name:"Noir Silk Dress",price:5499,originalPrice:7199,category:"Dresses",sizes:["XS","S","M","L"],colors:["Black","Midnight Blue"],description:"100% silk charmeuse. Moves with your body. Handwashed. Limited pieces.",image:"hoodie4.png",images:["hoodie4.png"],badge:"Limited"},
  {id:5,name:"Obsidian Blazer",price:7999,originalPrice:10499,category:"Jackets",sizes:["S","M","L","XL"],colors:["Black","Deep Navy"],description:"Italian wool blend. Fully lined. The kind of blazer that closes deals.",image:"suit1.png",images:["suit1.png"]},
  {id:6,name:"Coal Graphic Hoodie",price:2999,originalPrice:3999,category:"Hoodies",sizes:["S","M","L","XL","XXL"],colors:["Black","Ash Grey"],description:"500gsm heavyweight fleece. Brushed interior. SABLE embossed on chest.",image:"hoodie.png",images:["hoodie.png","hoodie2.png","hoodie3.png","hoodie4.png"],badge:"Bestseller"},
  {id:7,name:"Phantom Wide Jeans",price:3499,originalPrice:4499,category:"Bottoms",sizes:["28","30","32","34"],colors:["Black Raw","Indigo"],description:"Wide leg silhouette. Japanese selvedge denim. Stiff, dark, uncompromising.",image:"hoodie2.png",images:["hoodie2.png"]},
  {id:8,name:"Eclipse Bomber",price:5999,originalPrice:7499,category:"Jackets",sizes:["S","M","L","XL"],colors:["Black","Forest"],description:"Nylon shell. Satin lining. Ribbed collar and cuffs. Built for nights that last forever.",image:"hoodie3.png",images:["hoodie3.png"],badge:"New"},
  {id:9,name:"Sable Crop Top",price:999,originalPrice:1499,category:"Tops",sizes:["XS","S","M","L"],colors:["Black","White","Burgundy"],description:"Ribbed stretch cotton. Cropped. Barely there. Impossible to forget.",image:"hoodie4.png",images:["hoodie4.png"]},
  {id:10,name:"Mist Knit Sweater",price:3299,originalPrice:4299,category:"Tops",sizes:["S","M","L","XL"],colors:["Ash","Charcoal","Off White"],description:"Merino wool blend. Relaxed silhouette. Handwashed gentle. Season-less.",image:"hoodie2.png",images:["hoodie2.png"]},
  {id:11,name:"Raven Linen Shirt",price:2199,originalPrice:2899,category:"Shirts",sizes:["S","M","L","XL"],colors:["Black","Sand","Olive"],description:"100% European linen. Washes softer each time. Slightly oversized. Effortless.",image:"hoodie.png",images:["hoodie.png"]},
  {id:12,name:"Void Track Pants",price:2799,originalPrice:3599,category:"Bottoms",sizes:["XS","S","M","L","XL"],colors:["Black","Dark Grey"],description:"Recycled polyester. Tapered leg. Gold SABLE side stripe. Court to street.",image:"hoodie3.png",images:["hoodie3.png"]},
  {id:13,name:"Dusk Maxi Skirt",price:2899,originalPrice:3799,category:"Bottoms",sizes:["XS","S","M","L"],colors:["Black","Midnight"],description:"Satin-finish polyester. Floor length. Side slit. Drama without trying.",image:"suit1.png",images:["suit1.png"]},
  {id:14,name:"Ash Windbreaker",price:4499,originalPrice:5799,category:"Jackets",sizes:["S","M","L","XL"],colors:["Ash Grey","Black"],description:"Packable. Water-resistant. Mesh lining. Goes anywhere. Stays effortless.",image:"hoodie4.png",images:["hoodie4.png"]},
  {id:15,name:"Iron Cargo Pants",price:3199,originalPrice:4199,category:"Bottoms",sizes:["28","30","32","34","36"],colors:["Black","Olive","Khaki"],description:"6-pocket utility. Relaxed fit. Reinforced knees. Fashion meets function.",image:"hoodie2.png",images:["hoodie2.png"]},
  {id:16,name:"Storm Turtleneck",price:1899,originalPrice:2499,category:"Tops",sizes:["XS","S","M","L","XL"],colors:["Black","Charcoal","Burgundy"],description:"Ribbed modal blend. High neck. Slim fit. The foundation of a SABLE wardrobe.",image:"hoodie.png",images:["hoodie.png"]},
  {id:17,name:"Onyx Leather Belt",price:1499,originalPrice:1999,category:"Accessories",sizes:["S","M","L"],colors:["Black","Dark Brown"],description:"Full-grain leather. Gunmetal buckle. Ages with you. Gets better with time.",image:"hoodie.png",images:["hoodie.png"]},
  {id:18,name:"Smoke Cashmere Scarf",price:2299,originalPrice:2999,category:"Accessories",sizes:["One Size"],colors:["Charcoal","Black","Cream"],description:"Pure cashmere. Woven in Scotland. Oversized. The finishing touch.",image:"hoodie2.png",images:["hoodie2.png"]},
  {id:19,name:"Noir Structured Cap",price:1199,originalPrice:1599,category:"Accessories",sizes:["One Size"],colors:["Black","Dark Grey"],description:"6-panel. Structured front. Tonal embroidery. The quiet signature.",image:"hoodie3.png",images:["hoodie3.png"]},
  {id:20,name:"Shadow Trench Coat",price:11999,originalPrice:15999,category:"Jackets",sizes:["XS","S","M","L","XL"],colors:["Black","Camel"],description:"Belted. Double-breasted. Storm flap. Water-repellent wool blend. The coat for every era.",image:"suit1.png",images:["suit1.png"],badge:"Limited"}
];

// ==================== CART ====================
var CART_KEY = 'sable_cart';
function getCart(){return JSON.parse(localStorage.getItem(CART_KEY)||'[]');}
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c));}
function addToCart(id,size,color){
  var c=getCart();
  var ex=c.find(function(i){return i.id===id&&i.size===size;});
  if(ex){ex.qty++;}else{
    var p=PRODUCTS.find(function(p){return p.id===id;});
    c.push({id:id,name:p.name,price:p.price,image:p.image,size:size,color:color,qty:1});
  }
  saveCart(c);updateCartBadges();
}
function removeFromCart(id,size){saveCart(getCart().filter(function(i){return!(i.id===id&&i.size===size);}));updateCartBadges();}
function updateQty(id,size,qty){
  if(qty<=0){removeFromCart(id,size);return;}
  var c=getCart();var item=c.find(function(i){return i.id===id&&i.size===size;});
  if(item)item.qty=qty;saveCart(c);updateCartBadges();
}
function cartCount(){return getCart().reduce(function(s,i){return s+i.qty;},0);}
function cartTotal(){return getCart().reduce(function(s,i){return s+i.price*i.qty;},0);}
function fmtPrice(n){return '\u20b9'+n.toLocaleString('en-IN');}
function updateCartBadges(){
  var badges=document.querySelectorAll('.cart-badge');
  var c=cartCount();
  badges.forEach(function(b){b.textContent=c;b.style.display=c?'flex':'none';});
}

// ==================== TOAST ====================
function showToast(msg){
  var t=document.getElementById('toast');
  if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);}
  t.textContent=msg;t.classList.add('show');
  setTimeout(function(){t.classList.remove('show');},2800);
}

// ==================== DUST PARTICLES ====================
function spawnParticles(){
  var count=24;
  for(var i=0;i<count;i++){
    (function(idx){
      setTimeout(function(){
        var p=document.createElement('div');
        p.className='gate-particle';
        var size=Math.random()*4+1;
        var startX=window.innerWidth*0.25+Math.random()*window.innerWidth*0.5;
        var startY=window.innerHeight*0.15+Math.random()*window.innerHeight*0.7;
        var dx=(Math.random()-0.5)*320;
        var dy=-(Math.random()*160+60);
        var dur=Math.random()*1.6+1.0;
        p.style.cssText=['width:'+size+'px','height:'+size+'px','left:'+startX+'px','top:'+startY+'px','--dx:'+dx+'px','--dy:'+dy+'px','--dur:'+dur+'s','opacity:0.9'].join(';');
        document.body.appendChild(p);
        setTimeout(function(){p.remove();},dur*1000+200);
      },idx*40);
    })(i);
  }
}

// ==================== MOBILE DETECTION ====================
function isMobile(){
  return window.innerWidth<=768;
}

// ==================== MOBILE SABLE STROKE ANIMATION ====================
function initMobileIntro(){
  var intro=document.getElementById('mobile-intro');
  if(!intro)return;

  var navbar=document.getElementById('navbar');
  var mainContent=document.getElementById('main-content');

  if(sessionStorage.getItem('sable_intro_seen')){
    intro.style.display='none';
    if(navbar)navbar.classList.add('visible');
    if(mainContent)mainContent.classList.add('visible');
    return;
  }

  // Letter IDs and their sequential start times (ms)
  var letters=[
    {id:'sl-s', start:180,  dur:820},
    {id:'sl-a', start:880,  dur:860},
    {id:'sl-b', start:1620, dur:920},
    {id:'sl-l', start:2420, dur:680},
    {id:'sl-e', start:2980, dur:860}
  ];

  letters.forEach(function(l){
    var el=document.getElementById(l.id);
    if(!el)return;
    // Each letter: set its own animation duration then add .draw class after delay
    setTimeout(function(){
      el.style.animationDuration=l.dur+'ms';
      el.classList.add('draw');
    }, l.start);
  });

  // After all letters drawn, light up outer glow and tagline
  var totalDraw=letters[letters.length-1].start + letters[letters.length-1].dur;

  setTimeout(function(){
    var glowBg=document.getElementById('sable-glow-bg');
    if(glowBg){
      glowBg.style.transition='opacity 0.7s ease';
      glowBg.style.opacity='0.6';
      // Mirror drawn state to glow layer
      letters.forEach(function(l){
        var mirror=glowBg.querySelectorAll('.sl')[letters.indexOf(l)];
        if(mirror){
          mirror.style.strokeDashoffset='0';
          mirror.style.transition='none';
        }
      });
    }
    intro.classList.add('reveal');
  }, totalDraw + 100);

  // Fade out, show content
  setTimeout(function(){
    intro.classList.add('gone');
    sessionStorage.setItem('sable_intro_seen','1');
    setTimeout(function(){intro.style.display='none';},900);
    if(navbar)navbar.classList.add('visible');
    if(mainContent)mainContent.classList.add('visible');
  }, totalDraw + 1100);
}

// ==================== GATE ANIMATION (Desktop/Tablet) ====================
function initGate(){
  var gate=document.getElementById('gate');
  var leftDoor=document.getElementById('door-left');
  var rightDoor=document.getElementById('door-right');
  var hint=document.getElementById('scroll-hint');
  var navbar=document.getElementById('navbar');
  var mainContent=document.getElementById('main-content');
  var gateLight=document.getElementById('gate-light');
  var gateRays=document.getElementById('gate-rays');
  var gateGone=false;
  var particlesSpawned=false;

  if(!gate||!leftDoor||!rightDoor)return;

  if(sessionStorage.getItem('sable_gate_seen')){
    gate.style.display='none';
    if(hint)hint.style.display='none';
    var spacer=document.getElementById('gate-spacer');
    if(spacer){spacer.style.height='0';spacer.style.display='none';}
    if(navbar)navbar.classList.add('visible');
    if(mainContent)mainContent.classList.add('visible');
    return;
  }

  leftDoor.style.transformOrigin='left center';
  rightDoor.style.transformOrigin='right center';

  // Cubic ease-out for main rotation
  function easeOutCubic(t){return 1-Math.pow(1-t,3);}
  // Extra ease for the final dramatic swing
  function easeOutQuint(t){return 1-Math.pow(1-t,5);}

  function onScroll(){
    if(gateGone)return;
    var scrollY=window.scrollY||window.pageYOffset;
    var threshold=window.innerHeight*0.85;
    var rawProgress=Math.min(scrollY/threshold,1);
    var progress=easeOutCubic(rawProgress);

    // Doors swing open up to 105 degrees for dramatic reveal
    var angle=progress*105;
    leftDoor.style.transform='perspective(2600px) rotateY('+(-angle)+'deg)';
    rightDoor.style.transform='perspective(2600px) rotateY('+angle+'deg)';

    // Scroll hint fades quickly
    if(hint)hint.style.opacity=rawProgress<0.05?1:Math.max(0,1-(rawProgress-0.05)/0.12);

    // Light & rays intensity tied to progress
    if(gateLight)gateLight.style.opacity=Math.min(easeOutQuint(rawProgress)*1.1,0.95);

    // Rays appear from ~25% progress
    if(gateRays){
      var rayOpacity=rawProgress>0.25?Math.min((rawProgress-0.25)/0.35,1)*0.75:0;
      gateRays.style.opacity=rayOpacity;
      // Rays also scale up as doors open
      var rayScale=0.4+rawProgress*0.9;
      gateRays.style.transform='translate(-50%,-50%) scale('+rayScale+')';
      if(rawProgress>0.25)gate.classList.add('opening');
    }

    // Navbar slides in early
    if(progress>0.38&&navbar)navbar.classList.add('visible');
    // Content fades in a bit later
    if(progress>0.58&&mainContent)mainContent.classList.add('visible');
    // Particles burst as doors are mostly open
    if(rawProgress>0.55&&!particlesSpawned){particlesSpawned=true;spawnParticles();}

    if(rawProgress>=1&&!gateGone){
      gateGone=true;
      // Brief bright flash before gate disappears
      if(gateLight){
        gateLight.style.transition='opacity 0.15s ease';
        gateLight.style.opacity='1';
        setTimeout(function(){
          gateLight.style.transition='opacity 0.4s ease';
          gateLight.style.opacity='0';
        },140);
      }
      gate.classList.add('gone');
      sessionStorage.setItem('sable_gate_seen','1');
      setTimeout(function(){
        gate.style.display='none';
        var spacer=document.getElementById('gate-spacer');
        if(spacer){spacer.style.height='0';spacer.style.display='none';}
        window.scrollTo(0,0);
      },520);
    }
  }

  window.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
}

// ==================== ENTRANCE INIT ====================
function initEntrance(){
  var gate=document.getElementById('gate');
  var mobileIntro=document.getElementById('mobile-intro');

  if(isMobile()){
    if(gate){gate.style.display='none';}
    var spacer=document.getElementById('gate-spacer');
    if(spacer){spacer.style.height='0';spacer.style.display='none';}
    var hint=document.getElementById('scroll-hint');
    if(hint){hint.style.display='none';}
    if(mobileIntro){
      mobileIntro.style.display='flex';
      initMobileIntro();
    }else{
      var navbar=document.getElementById('navbar');
      var mainContent=document.getElementById('main-content');
      if(navbar)navbar.classList.add('visible');
      if(mainContent)mainContent.classList.add('visible');
    }
  }else{
    if(mobileIntro){mobileIntro.style.display='none';}
    if(gate){initGate();}
  }
}

// ==================== WARDROBE RENDER ====================
function initWardrobe(){
  var grid=document.getElementById('products-grid');
  var searchInput=document.getElementById('search-input');
  var noResults=document.getElementById('no-results');
  var catBtns=document.querySelectorAll('.cat-btn');
  var currentCat='All';
  var searchTerm='';

  function render(){
    var filtered=PRODUCTS.filter(function(p){
      var matchCat=currentCat==='All'||p.category===currentCat;
      var matchSearch=!searchTerm||
        p.name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1||
        p.category.toLowerCase().indexOf(searchTerm.toLowerCase())>-1;
      return matchCat&&matchSearch;
    });

    if(filtered.length===0){
      grid.innerHTML='';
      noResults.style.display='block';
      return;
    }
    noResults.style.display='none';

    grid.innerHTML=filtered.map(function(p){
      var badge=p.badge?'<div class="p-badge">'+p.badge+'</div>':'';
      var oprice=p.originalPrice?'<span class="p-oprice">'+fmtPrice(p.originalPrice)+'</span>':'';

      return '<div class="almirah-box">'+
        '<div class="box-cornice"></div>'+
        '<div class="box-rod-shelf"><div class="box-rod"></div></div>'+
        '<a class="product-card" href="product.html?id='+p.id+'">'+
          '<div class="p-img-wrap">'+badge+
            '<img src="'+p.image+'" alt="'+p.name+'" loading="lazy" decoding="async">'+
            '<div class="p-img-vignette"></div>'+
            '<div class="p-overlay"><span>View Piece</span></div>'+
          '</div>'+
          '<div class="p-info">'+
            '<div class="p-name">'+p.name+'</div>'+
            '<div class="p-tag">'+
              '<span class="p-price">'+fmtPrice(p.price)+'</span>'+oprice+
            '</div>'+
          '</div>'+
        '</a>'+
      '</div>';
    }).join('');
  }

  if(searchInput){
    searchInput.addEventListener('input',function(){searchTerm=this.value;render();});
  }
  catBtns.forEach(function(btn){
    btn.addEventListener('click',function(){
      catBtns.forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      currentCat=btn.dataset.cat;
      render();
    });
  });

  render();
}

// ==================== PRODUCT DETAIL PAGE ====================
function initProductPage(){
  var params=new URLSearchParams(window.location.search);
  var id=parseInt(params.get('id'));
  var product=PRODUCTS.find(function(p){return p.id===id;});
  if(!product){window.location.href='index.html';return;}

  var selectedSize=product.sizes[0];
  var selectedColor=product.colors[0];
  document.title='SABLE \u2014 '+product.name;
  var el=function(sel){return document.querySelector(sel);};

  var mainImg=el('#pd-img');
  mainImg.src=product.image;mainImg.alt=product.name;

  var badgeEl=el('#pd-img-badge');
  if(product.badge&&badgeEl){badgeEl.textContent=product.badge;badgeEl.style.display='block';}

  el('#pd-cat').textContent=product.category;
  el('#pd-name').textContent=product.name;
  el('#pd-price').textContent=fmtPrice(product.price);

  var oEl=el('#pd-oprice');
  if(oEl)oEl.textContent=product.originalPrice?fmtPrice(product.originalPrice):'';
  var discEl=el('#pd-discount');
  if(discEl&&product.originalPrice){
    var pct=Math.round((1-(product.price/product.originalPrice))*100);
    discEl.textContent=pct+'% off';
  }
  el('#pd-desc').textContent=product.description;

  var thumbWrap=el('#pd-thumbs');
  if(thumbWrap&&product.images&&product.images.length){
    thumbWrap.innerHTML=product.images.map(function(imgSrc,idx){
      return '<div class="pd-thumb'+(idx===0?' active':'')+'"><img src="'+imgSrc+'" alt="'+product.name+'" loading="lazy"></div>';
    }).join('');
    thumbWrap.querySelectorAll('.pd-thumb').forEach(function(thumb,idx){
      thumb.addEventListener('click',function(){
        thumbWrap.querySelectorAll('.pd-thumb').forEach(function(t){t.classList.remove('active');});
        thumb.classList.add('active');
        mainImg.style.opacity='0';
        setTimeout(function(){mainImg.src=product.images[idx];mainImg.style.opacity='1';},180);
      });
    });
  }

  var sizeWrap=el('#pd-sizes');
  sizeWrap.innerHTML=product.sizes.map(function(s){
    return '<button class="sz-btn'+(s===selectedSize?' sel':'')+'">'+s+'</button>';
  }).join('');
  sizeWrap.addEventListener('click',function(e){
    if(e.target.classList.contains('sz-btn')){
      document.querySelectorAll('.sz-btn').forEach(function(b){b.classList.remove('sel');});
      e.target.classList.add('sel');selectedSize=e.target.textContent;
    }
  });

  var colorWrap=el('#pd-colors');
  colorWrap.innerHTML=product.colors.map(function(c){
    return '<button class="cl-btn'+(c===selectedColor?' sel':'')+'">'+c+'</button>';
  }).join('');
  colorWrap.addEventListener('click',function(e){
    if(e.target.classList.contains('cl-btn')){
      document.querySelectorAll('.cl-btn').forEach(function(b){b.classList.remove('sel');});
      e.target.classList.add('sel');selectedColor=e.target.textContent;
    }
  });

  el('#btn-cart').addEventListener('click',function(){
    addToCart(product.id,selectedSize,selectedColor);
    showToast('Added to cart \u2014 '+product.name+' ('+selectedSize+')');
  });
  el('#btn-buy').addEventListener('click',function(){
    addToCart(product.id,selectedSize,selectedColor);
    window.location.href='checkout.html';
  });
}

// ==================== CART PAGE ====================
function initCartPage(){
  var wrap=document.getElementById('cart-body');
  var emptyDiv=document.getElementById('cart-empty');
  var summaryDiv=document.getElementById('cart-summary');
  var totalSpan=document.getElementById('cart-total-price');

  function render(){
    var cart=getCart();
    if(cart.length===0){
      if(emptyDiv)emptyDiv.style.display='block';
      if(wrap)wrap.innerHTML='';
      if(summaryDiv)summaryDiv.style.display='none';return;
    }
    if(emptyDiv)emptyDiv.style.display='none';
    if(summaryDiv)summaryDiv.style.display='flex';
    if(totalSpan)totalSpan.textContent=fmtPrice(cartTotal());
    if(wrap){
      wrap.innerHTML=cart.map(function(item){
        return '<div class="cart-row">'+
          '<div class="cart-img-wrap"><img class="cart-img" src="'+item.image+'" alt="'+item.name+'" loading="lazy"></div>'+
          '<div>'+
            '<div class="ci-name">'+item.name+'</div>'+
            '<div class="ci-meta">'+item.size+' &nbsp;&middot;&nbsp; '+item.color+'</div>'+
          '</div>'+
          '<div><div class="qty-ctrl">'+
            '<button class="qty-btn" data-id="'+item.id+'" data-size="'+item.size+'" data-action="dec">&#8722;</button>'+
            '<div class="qty-num">'+item.qty+'</div>'+
            '<button class="qty-btn" data-id="'+item.id+'" data-size="'+item.size+'" data-action="inc">+</button>'+
          '</div></div>'+
          '<div class="ci-price">'+fmtPrice(item.price*item.qty)+'</div>'+
          '<button class="rm-btn" data-id="'+item.id+'" data-size="'+item.size+'" title="Remove">&times;</button>'+
        '</div>';
      }).join('');
      wrap.querySelectorAll('.qty-btn').forEach(function(btn){
        btn.addEventListener('click',function(){
          var id=parseInt(this.dataset.id);var size=this.dataset.size;
          var cart=getCart();var item=cart.find(function(i){return i.id===id&&i.size===size;});
          if(!item)return;var newQty=this.dataset.action==='inc'?item.qty+1:item.qty-1;
          updateQty(id,size,newQty);render();
        });
      });
      wrap.querySelectorAll('.rm-btn').forEach(function(btn){
        btn.addEventListener('click',function(){removeFromCart(parseInt(this.dataset.id),this.dataset.size);render();});
      });
    }
  }
  render();
}

// ==================== CHECKOUT PAGE ====================
function initCheckoutPage(){
  var summaryWrap=document.getElementById('co-summary-items');
  var totalSpan=document.getElementById('co-total');
  var form=document.getElementById('checkout-form');
  var modal=document.getElementById('success-modal');
  var cart=getCart();
  if(summaryWrap){
    summaryWrap.innerHTML=cart.map(function(item){
      return '<div class="sum-item"><span class="sum-name">'+item.name+' \u00d7'+item.qty+'</span><span class="sum-price">'+fmtPrice(item.price*item.qty)+'</span></div>';
    }).join('');
  }
  if(totalSpan)totalSpan.textContent=fmtPrice(cartTotal());
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();saveCart([]);updateCartBadges();
      if(modal)modal.classList.add('show');
    });
  }
  var closeBtn=document.getElementById('success-close');
  if(closeBtn){closeBtn.addEventListener('click',function(){window.location.href='index.html';});}
}

// ==================== HAMBURGER ====================
function initHamburger(){
  var ham=document.getElementById('hamburger');
  var menu=document.getElementById('mobile-menu');
  var close=document.getElementById('menu-close');
  if(ham&&menu){
    ham.addEventListener('click',function(){menu.classList.add('open');});
    if(close)close.addEventListener('click',function(){menu.classList.remove('open');});
    menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.classList.remove('open');});});
  }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded',function(){
  updateCartBadges();
  initHamburger();
  if(document.getElementById('gate')||document.getElementById('mobile-intro'))initEntrance();
  if(document.getElementById('products-grid'))initWardrobe();
  if(document.getElementById('pd-img'))initProductPage();
  if(document.getElementById('cart-body')||document.getElementById('cart-empty'))initCartPage();
  if(document.getElementById('checkout-form'))initCheckoutPage();
});
