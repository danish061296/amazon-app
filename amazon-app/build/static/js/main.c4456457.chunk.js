(this["webpackJsonpamazon-app"]=this["webpackJsonpamazon-app"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),n=c(36),i=c.n(n),r=(c(43),c(12)),o=(c(44),c(13)),l=c(9),j=(c(45),c(74)),d=c(75),b=c(76),m=c(2),h=Object(a.createContext)(),u=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(m.jsx)(h.Provider,{value:Object(a.useReducer)(t,c),children:s})},O=function(){return Object(a.useContext)(h)},p=c(31),x=(p.a.initializeApp({apiKey:"AIzaSyABiYA9zOKMYmqpUxG0HHTeBIsOJE1swRI",authDomain:"app-b8fce.firebaseapp.com",projectId:"app-b8fce",storageBucket:"app-b8fce.appspot.com",messagingSenderId:"485057255180",appId:"1:485057255180:web:046f8330a6b2c614335b29",measurementId:"G-MHGWQKF1F9"}),p.a.auth()),g=function(){var e=O(),t=Object(r.a)(e,1)[0],c=t.cart,a=t.user;return Object(m.jsxs)("nav",{className:"navbar",children:[Object(m.jsx)(o.b,{to:"/",children:Object(m.jsx)("img",{className:"navbar-logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(m.jsxs)("div",{className:"navbar-location",children:[Object(m.jsx)(j.a,{className:"navbar-room-icon"}),Object(m.jsxs)("div",{className:"navbar-address",children:[Object(m.jsx)("span",{className:"navbar-hello-text",children:"Hello"}),Object(m.jsx)("strong",{children:"Select your address"})]})]}),Object(m.jsxs)("div",{className:"navbar-search",children:[Object(m.jsx)("input",{type:"text",className:"navbar-search-input"}),Object(m.jsx)(d.a,{className:"navbar-search-icon"})]}),Object(m.jsxs)("div",{className:"navbar-options",children:[Object(m.jsx)(o.b,{to:!a&&"/login",className:"navbar-link",children:Object(m.jsxs)("div",{onClick:function(){a&&x.signOut()},className:"navbar-option",children:[Object(m.jsxs)("span",{className:"navbar-option-one",children:["Hello ",null===a||void 0===a?void 0:a.email]}),Object(m.jsx)("span",{className:"navbar-option-two",children:a?"Sign Out":"Sign In"})]})}),Object(m.jsx)(o.b,{to:"/",className:"navbar-link",children:Object(m.jsxs)("div",{className:"navbar-option",children:[Object(m.jsx)("span",{className:"navbar-option-one",children:"Returns"}),Object(m.jsx)("span",{className:"navbar-option-two",children:"& Orders"})]})}),Object(m.jsx)(o.b,{to:"/",className:"navbar-link",children:Object(m.jsxs)("div",{className:"navbar-option",children:[Object(m.jsx)("span",{className:"navbar-option-one",children:"Your"}),Object(m.jsx)("span",{className:"navbar-option-two",children:"Prime"})]})}),Object(m.jsx)(o.b,{to:"/checkout",className:"navbar-link",children:Object(m.jsxs)("div",{className:"navbar-basket",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)(b.a,{}),Object(m.jsx)("span",{className:"basket-count",children:null===c||void 0===c?void 0:c.length})]}),Object(m.jsx)("div",{children:Object(m.jsx)("span",{className:"navbar-option-two cart",children:"Cart"})})]})})]})]})},v=(c(54),c(55),c(77)),N=function(e){var t=e.id,c=e.title,a=e.price,s=e.rating,n=e.image,i=O(),o=Object(r.a)(i,2),l=(o[0].cart,o[1]);return Object(m.jsxs)("div",{className:"item",children:[Object(m.jsxs)("div",{className:"item-info",children:[Object(m.jsx)("p",{className:"item-title",children:c}),Object(m.jsxs)("p",{className:"item-price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:a})]}),Object(m.jsx)("div",{className:"item-rating",children:Array(s).fill().map((function(e){return Object(m.jsx)("p",{children:Object(m.jsx)(v.a,{className:"rating-star"})})}))})]}),Object(m.jsxs)("div",{className:"item-bottom-info",children:[Object(m.jsx)("img",{className:"item-image",src:n,alt:""}),Object(m.jsx)("button",{className:"item-button",onClick:function(){l({type:"ADD_TO_CART",item:{id:t,title:c,price:a,rating:s,image:n}})},children:"Add to cart"})]})]})},f=function(){return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)("img",{className:"home-image",src:"https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-3673_SVOD_ValentinesDay/RB-3673_SVOD_ValentinesDay_v2_3000x1200._CB661029042_.jpg",alt:""}),Object(m.jsxs)("div",{className:"home-row",children:[Object(m.jsx)(N,{id:"355363",title:"Juicer Wide Mouth Juice Extractor",price:10.67,rating:5,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFav9oFDbnaFFCMj-4ZalqZ7sAk0bCuwN-MIaO3_7Vlf3CgWccM0YGtJYiDRZM8Imx_FfB9gs&usqp=CAc"}),Object(m.jsx)(N,{id:"732352",title:"Anne Klien",price:30.99,rating:3,image:"https://m.media-amazon.com/images/I/81xCpb+RC1L._AC_UL640_FMwebp_QL65_.jpg"}),Object(m.jsx)(N,{id:"356234",title:"Wrangler Authentics",price:27.01,rating:4,image:"https://m.media-amazon.com/images/I/8110CWXpN5L._AC_UL640_FMwebp_QL65_.jpg"})]}),Object(m.jsxs)("div",{className:"home-row",children:[Object(m.jsx)(N,{id:"845674",title:"Moto E | Unlocked",price:122.99,rating:2,image:"https://m.media-amazon.com/images/I/61HX0rKZ62L._AC_UY436_FMwebp_QL65_.jpg"}),Object(m.jsx)(N,{id:"309539",title:"BESTRIX Magnetic Phone Car",price:79.99,rating:4,image:"https://m.media-amazon.com/images/I/71aQvJVQMLL._QL65_AC_UL640_.jpg"}),Object(m.jsx)(N,{id:"236345",title:"Takid Fuego Hot Chilli Pepper",price:13.93,rating:5,image:"https://m.media-amazon.com/images/I/71Qtj5iVnFL._AC_UL640_FMwebp_QL65_.jpg"}),Object(m.jsx)(N,{id:"777452",title:"Keep Calm and Eat Takis T-shirt",price:16.99,rating:3,image:"https://m.media-amazon.com/images/I/71TCI+XBJFL._AC_UY436_FMwebp_QL65_.jpg"})]})]})},_=(c(56),function(){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("div",{className:"footer-one",children:Object(m.jsxs)("div",{className:"footer-one-headings",children:[Object(m.jsxs)("div",{className:"footer-info",children:[Object(m.jsx)("strong",{className:"footer-headings",children:"Get to Know Us"}),Object(m.jsxs)("div",{className:"footer-sub-headings",children:[Object(m.jsx)("p",{children:"Career"}),Object(m.jsx)("p",{children:"Blog"})]})]}),Object(m.jsxs)("div",{className:"footer-info",children:[Object(m.jsx)("strong",{className:"footer-headings",children:"Make Money with Us"}),Object(m.jsxs)("div",{className:"footer-sub-headings",children:[Object(m.jsx)("p",{children:"Sell products on Amazon"}),Object(m.jsx)("p",{children:"Sell apps on Amazon"})]})]}),Object(m.jsxs)("div",{className:"footer-info",children:[Object(m.jsx)("strong",{className:"footer-headings",children:"Amazon Payment Products"}),Object(m.jsxs)("div",{className:"footer-sub-headings",children:[Object(m.jsx)("p",{children:"Amazon Rewards Visa"}),Object(m.jsx)("p",{children:"Amazon.com Store Card"})]})]}),Object(m.jsxs)("div",{className:"footer-info",children:[Object(m.jsx)("strong",{className:"footer-headings",children:"Let Us Help You"}),Object(m.jsxs)("div",{className:"footer-sub-headings",children:[Object(m.jsx)("p",{children:"Amazon and COVID-19"}),Object(m.jsx)("p",{children:"Your Account"}),Object(m.jsx)("p",{children:"Your Orders"})]})]})]})}),Object(m.jsxs)("div",{className:"footer-two",children:[Object(m.jsx)(o.b,{to:"/",children:Object(m.jsx)("img",{className:"navbar-logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(m.jsx)("button",{className:"footer-two-button",children:"English"}),Object(m.jsx)("button",{className:"footer-two-button",children:"United States"})]})]})}),C=(c(57),c(58),function(e){var t=e.id,c=e.title,a=e.price,s=e.rating,n=e.image,i=O(),o=Object(r.a)(i,2),l=(o[0].cart,o[1]);return Object(m.jsxs)("div",{className:"checkout-item",children:[Object(m.jsx)("img",{className:"checkout-item-image",src:n,alt:""}),Object(m.jsxs)("div",{className:"checkout-item-details",children:[Object(m.jsx)("p",{className:"checkout-item-title",children:c}),Object(m.jsxs)("p",{className:"checkout-item-price",children:[Object(m.jsx)("small",{children:"$"}),Object(m.jsx)("strong",{children:a})]}),Object(m.jsx)("div",{className:"checkout-item-rating",children:Array(s).fill().map((function(e,t){return Object(m.jsx)("p",{children:Object(m.jsx)(v.a,{className:"rating-star"})})}))}),Object(m.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_CART",id:t})},className:"checkout-item-button",children:"Remove from cart"})]})]})}),k=c(37),A=c.n(k),w=(c(60),c(32)),y=c(21),S=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},z=function(e,t){switch(t.type){case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:t.user});case"ADD_TO_CART":return Object(y.a)(Object(y.a)({},e),{},{cart:[].concat(Object(w.a)(e.cart),[t.item])});case"REMOVE_FROM_CART":var c=Object(w.a)(e.cart),a=e.cart.findIndex((function(e){return e.id===t.id}));return a<0?(console.warn("Cant remove the product with id: ".concat(t.id," ")),c.splice(a,1)):c.splice(a,1),Object(y.a)(Object(y.a)({},e),{},{cart:c});default:return e}},I=function(){var e=O(),t=Object(r.a)(e,2),c=t[0].cart;t[1];return Object(m.jsxs)("div",{className:"total-amount",children:[Object(m.jsxs)("div",{className:"total-amount-top",children:[Object(m.jsx)(A.a,{renderText:function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("p",{className:"subtotal",children:["Subtotal (",c.length," items):",Object(m.jsx)("strong",{className:"total-price",children:"".concat(e)})]})})},value:S(c),displayType:"text",decimaleScale:2,thousandSeparator:!0,prefix:"$"}),Object(m.jsx)("button",{className:"total-amount-checkout-button",children:"Proceed to Checkout"})]}),Object(m.jsxs)("div",{className:"total-amount-bottom",children:[Object(m.jsx)(o.b,{className:"total-amount-sign-in",to:"/",children:"Sign In"}),Object(m.jsx)("span",{children:" to turn on 1-Click ordering."})]})]})},M=function(){var e=O(),t=Object(r.a)(e,1)[0].cart;return Object(m.jsxs)("div",{className:"checkout",children:[Object(m.jsxs)("div",{className:"checkout-left",children:[Object(m.jsx)("img",{className:"checkout-ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg",alt:""}),0===(null===t||void 0===t?void 0:t.length)?Object(m.jsxs)("div",{className:"checkout-noitems",children:[Object(m.jsxs)("h2",{className:"checkout-empty-cart",children:[" ","Your shopping cart is empty."]}),Object(m.jsx)("p",{children:'You have no items in your cart. To buy one or more items, click on "Add to cart" below the item.'}),Object(m.jsx)("p",{children:"Thank you!"})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"checkout-message",children:"Your Shopping Cart."}),t.map((function(e,t){return Object(m.jsx)(C,{id:e.id,title:e.title,price:e.price,rating:e.rating,image:e.image},t)}))]})]}),Object(m.jsx)("div",{className:"checkout-right",children:t.length>0&&Object(m.jsx)(I,{})})]})},T=(c(61),function(){var e=Object(l.f)(),t=s.a.useState(""),c=Object(r.a)(t,2),a=c[0],n=c[1],i=s.a.useState(""),j=Object(r.a)(i,2),d=j[0],b=j[1];return Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)(o.b,{to:"/",children:Object(m.jsx)("img",{className:"login-image",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(m.jsxs)("div",{className:"login-container",children:[Object(m.jsx)("h1",{children:"Sign-In"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("h5",{children:"Email"}),Object(m.jsx)("input",{value:a,type:"email",onChange:function(e){return n(e.target.value)}}),Object(m.jsx)("h5",{children:"Password"}),Object(m.jsx)("input",{value:d,type:"password",onChange:function(e){return b(e.target.value)}}),Object(m.jsx)("button",{onClick:function(t){t.preventDefault(),x.signInWithEmailAndPassword(a,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login-button",children:"Continue"}),Object(m.jsx)("p",{children:"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."})]})]}),Object(m.jsxs)("div",{className:"signup-container",children:[Object(m.jsx)("p",{className:"login-new-account",children:"New to Amazon?"}),Object(m.jsx)("button",{onClick:function(t){t.preventDefault(),x.createUserWithEmailAndPassword(a,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"signup-button",children:"Create your Amazon account"})]}),Object(m.jsx)("div",{className:"login-footer",children:Object(m.jsxs)("div",{className:"login-footer-notes",children:[Object(m.jsxs)("div",{className:"login-terms",children:[Object(m.jsx)("p",{children:"Condition of Use"}),Object(m.jsx)("p",{children:"Privacy Notice"}),Object(m.jsx)("p",{children:"Help"})]}),Object(m.jsx)("p",{className:"login-copyright",children:"\xa9 2021, Danish Siddiqui, Amazon-app"})]})})]})}),F=function(){var e=O(),t=Object(r.a)(e,2),c=(t[0].cart,t[1]);return Object(a.useEffect)((function(){var e=x.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),Object(m.jsx)(o.a,{children:Object(m.jsx)("div",{className:"app",children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/login",children:Object(m.jsx)(T,{})}),Object(m.jsxs)(l.a,{path:"/checkout",children:[Object(m.jsx)(g,{}),Object(m.jsx)(M,{}),Object(m.jsx)(_,{})]}),Object(m.jsxs)(l.a,{path:"/",children:[Object(m.jsx)(g,{}),Object(m.jsx)(f,{}),Object(m.jsx)(_,{})]})]})})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(u,{initialState:{cart:[],user:null},reducer:z,children:Object(m.jsx)(F,{})})}),document.getElementById("root")),E()}},[[62,1,2]]]);
//# sourceMappingURL=main.c4456457.chunk.js.map