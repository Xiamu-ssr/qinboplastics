/* ===== 秦帛产品中心 · 品牌/牌号实拍图增强 =====
 * 来源：业务员提供的现货包装图，2026-06-15 人工审图后按「品牌 + 牌号」绑定。
 * 仅当图片上的品牌/料种不冲突时使用；已存在更精确牌号图的产品不覆盖。
 */
(function () {
  var db = window.QB_PRODUCTS;
  if (!db) return;
  var map = db.brandGradeMeta = db.brandGradeMeta || {};

  function set(brand, grades, image, thumb) {
    grades.forEach(function (grade) {
      map[brand + "|" + grade] = { image: image, thumb: thumb };
    });
  }

  set("韩国晓星", ["R701", "J740"],
    "assets/img/photos/real/product-pp-hyosung-r200p-r701-j740-stock.jpg",
    "assets/img/photos/thumbs/product-pp-hyosung-r200p-r701-j740-stock-thumb.jpg");

  set("韩国SK", ["R380Y"],
    "assets/img/photos/real/product-pp-sk-r370y-r520y-r380y-stock.jpg",
    "assets/img/photos/thumbs/product-pp-sk-r370y-r520y-r380y-stock-thumb.jpg");

  set("台湾化纤", ["K8009", "K8025", "K8003", "K8050", "K4515", "K4715", "K1011"],
    "assets/img/photos/real/product-pp-fcfc-k8009-k8025-k8003-k8050-k4515-k4715-k1011-stock.jpg",
    "assets/img/photos/thumbs/product-pp-fcfc-k8009-k8025-k8003-k8050-k4515-k4715-k1011-stock-thumb.jpg");

  set("燕山石化", ["K8303", "4220", "B8101"],
    "assets/img/photos/real/product-pp-sinopec-yanshan-k8303-4220-b8101-stock.jpg",
    "assets/img/photos/thumbs/product-pp-sinopec-yanshan-k8303-4220-b8101-stock-thumb.jpg");

  set("韩华道达尔", ["RJ580"],
    "assets/img/photos/real/product-pp-hanwha-total-hj730-rj580-stock.jpg",
    "assets/img/photos/thumbs/product-pp-hanwha-total-hj730-rj580-stock-thumb.jpg");

  set("李长荣", ["ST868M", "6331"],
    "assets/img/photos/real/product-pp-lcy-st868m-6331-stock.jpg",
    "assets/img/photos/thumbs/product-pp-lcy-st868m-6331-stock-thumb.jpg");

  set("台湾聚合", ["LH606", "NA248", "NA208"],
    "assets/img/photos/real/product-pe-usi-lh606-na248-na208-stock.jpg",
    "assets/img/photos/thumbs/product-pe-usi-lh606-na248-na208-stock-thumb.jpg");

  set("陶氏杜邦", ["KT10000"],
    "assets/img/photos/real/product-pe-dow-kt10000-stock.jpg",
    "assets/img/photos/thumbs/product-pe-dow-kt10000-stock-thumb.jpg");

  set("镇江奇美", ["757K", "707K", "D-1000", "D-1200", "D-2400", "749SK", "757KF"],
    "assets/img/photos/real/product-abs-zhenjiang-chimei-757k-707k-d1000-d1200-d2400-749sk-757kf-stock.jpg",
    "assets/img/photos/thumbs/product-abs-zhenjiang-chimei-757k-707k-d1000-d1200-d2400-749sk-757kf-stock-thumb.jpg");

  set("北京有机", ["14-2"],
    "assets/img/photos/real/product-eva-beijing-organic-14-2-stock.jpg",
    "assets/img/photos/thumbs/product-eva-beijing-organic-14-2-stock-thumb.jpg");

  set("台湾塑胶", ["7350M"],
    "assets/img/photos/real/product-eva-fpc-7350m-stock.jpg",
    "assets/img/photos/thumbs/product-eva-fpc-7350m-stock-thumb.jpg");

  set("陶氏杜邦", ["40W", "260", "460", "250"],
    "assets/img/photos/real/product-eva-dow-40w-260-460-250-stock.jpg",
    "assets/img/photos/thumbs/product-eva-dow-40w-260-460-250-stock-thumb.jpg");

  set("菲利普", ["KR01", "KR03"],
    "assets/img/photos/real/product-kresin-ineos-kr01-kr03-stock.jpg",
    "assets/img/photos/thumbs/product-kresin-ineos-kr01-kr03-stock-thumb.jpg");

  set("巴斯夫", ["684D", "3G33", "2G66"],
    "assets/img/photos/real/product-kresin-basf-684d-3g33-2g66-stock.jpg",
    "assets/img/photos/thumbs/product-kresin-basf-684d-3g33-2g66-stock-thumb.jpg");

  set("塞拉尼斯", ["101L", "70G33L", "101F", "ST801", "FR50", "70G30HSRL"],
    "assets/img/photos/real/product-pa-celanese-101l-70g33l-101f-st801-fr50-70g30hsrl-stock.jpg",
    "assets/img/photos/thumbs/product-pa-celanese-101l-70g33l-101f-st801-fr50-70g30hsrl-stock-thumb.jpg");

  set("旭化成", ["1300S"],
    "assets/img/photos/real/product-pa-asahi-kasei-1300s-stock.jpg",
    "assets/img/photos/thumbs/product-pa-asahi-kasei-1300s-stock-thumb.jpg");

  set("宝理", ["M90-44"],
    "assets/img/photos/real/product-pom-polyplastics-m90-44-stock.jpg",
    "assets/img/photos/thumbs/product-pom-polyplastics-m90-44-stock-thumb.jpg");

  set("塞拉尼斯", ["C9021", "M90", "CE66", "KP20", "M25", "M270", "C13021", "C27021", "C9021TF"],
    "assets/img/photos/real/product-pom-celanese-hostaform-stock.jpg",
    "assets/img/photos/thumbs/product-pom-celanese-hostaform-stock-thumb.jpg");

  set("韩国工程", ["F20-02"],
    "assets/img/photos/real/product-pom-kepital-f20-02-stock.jpg",
    "assets/img/photos/thumbs/product-pom-kepital-f20-02-stock-thumb.jpg");

  set("韩国可隆", ["K300", "K700", "K500", "K900"],
    "assets/img/photos/real/product-pom-kolon-k300-k700-k500-k900-stock.jpg",
    "assets/img/photos/thumbs/product-pom-kolon-k300-k700-k500-k900-stock-thumb.jpg");

  set("陶氏杜邦", ["100P", "500P"],
    "assets/img/photos/real/product-pom-delrin-100p-500p-stock.jpg",
    "assets/img/photos/thumbs/product-pom-delrin-100p-500p-stock-thumb.jpg");

  set("云天化", ["M90", "M270", "M25"],
    "assets/img/photos/real/product-pom-yuntianhua-m90-m270-m25-stock.jpg",
    "assets/img/photos/thumbs/product-pom-yuntianhua-m90-m270-m25-stock-thumb.jpg");

  set("神华/龙宇", ["MC90"],
    "assets/img/photos/real/product-pom-longyu-mc90-stock.jpg",
    "assets/img/photos/thumbs/product-pom-longyu-mc90-stock-thumb.jpg");

  set("沙伯基础", ["945A", "943A", "940A", "500R"],
    "assets/img/photos/real/product-pc-sabic-945a-943a-940a-500r-stock.jpg",
    "assets/img/photos/thumbs/product-pc-sabic-945a-943a-940a-500r-stock-thumb.jpg");

  set("科思创", ["2405", "2407", "2807"],
    "assets/img/photos/real/product-pc-covestro-2405-2407-2807-stock.jpg",
    "assets/img/photos/thumbs/product-pc-covestro-2405-2407-2807-stock-thumb.jpg");

  set("台湾台化", ["AC2000", "AC2300", "AC2500", "AC3100", "AC3108"],
    "assets/img/photos/real/product-pcabs-fcfc-ac2000-ac2300-ac2500-ac3100-ac3108-stock.jpg",
    "assets/img/photos/thumbs/product-pcabs-fcfc-ac2000-ac2300-ac2500-ac3100-ac3108-stock-thumb.jpg");
})();
