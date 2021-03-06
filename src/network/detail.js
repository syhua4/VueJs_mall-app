import { request } from "./request";

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}

export function getRecommend() {
  return request({
    url: "/recommend"
  });
}

export class Product {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.discountColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
  }
}

export class Seller {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParams {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.info = info.set;
    this.size = rule.tables;
  }
}
