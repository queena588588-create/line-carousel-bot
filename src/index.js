export default {
  async fetch(request) {
    if (request.method === "GET") {
      return new Response("OK");
    }

    const CHANNEL_ACCESS_TOKEN = "yN2nn/Jk1J0I1KJXn2nUHf5Cpif1L6hef0D8AO+CZZ3Z6TPRiaG3Gg46fG0lUHLaVUTromiUDFUTChaU0qKZNsS88B7ZOj1XpN+CCaFHoD7TU7gM1cDlt+N4FHgQuNap6hGvZmk9pTQTlxgIfX+SjwdB04t89/1O/w1cDnyilFU=";

    let body = {};

    try {
      body = await request.json();
    } catch (e) {
      return new Response("OK");
    }

    if (!body.events) {
      return new Response("OK");
    }

    for (const event of body.events) {
      if (
        event.type === "message" &&
        event.message.type === "text" &&
        event.message.text === "商品"
      ) {
        await replyCarousel(event.replyToken, CHANNEL_ACCESS_TOKEN);
      }
    }

    return new Response("OK");
  }
};

async function replyCarousel(replyToken, token) {
  const message = {
    type: "flex",
    altText: "Queena 購物清單",
    contents: {
      type: "carousel",
      contents: [
        productCard(
          "仙女霜",
          "日常保養推薦 All in one",
          "https://img.shop.com/Image/240000/246200/246296/skualt/6164914.jpg?plain&size=800x800",
          "https://www.google.com"
        ),
        productCard(
          "青春極致防曬乳",
          "SPF50+ 保濕防曬不黏膩",
          "https://img.shop.com/Image/240000/246200/246290/products/895882809.jpg?plain&size=1600x1600",
          "https://www.google.com"
        ),
        productCard(
          "冰冰衣",
          "降溫＋防曬＋對抗光老化",
          "https://picsum.photos/600/600?3",
          "https://www.google.com"
        ),
        productCard(
          "雞排",
          "方便料理，加熱即可享用",
          "https://scontent-sin2-1.cdninstagram.com/v/t51.82787-15/702677192_18322302067285160_5035159655161140196_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=100&ig_cache_key=MzkwMDM2MDM0NDc1NzczOTM1Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IlNUT1JZLnhwaWRzLjEyOTAuc2RyLnJlZ3VsYXJfcGhvdG8uQzMifQ%3D%3D&_nc_ohc=tLQsrUDbZnoQ7kNvwH6br74&_nc_oc=AdpnzWo3H7J2CsZMBVpA0n0dUC-dx7KF66YxigpYdXNrk_WoCEIPa8aiRXsFsLzgfaFA1i4rwr6LJ03dQQiFqeGp&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-sin2-1.cdninstagram.com&_nc_gid=nlRaAGJhxwgfsXFTcSrMdg&_nc_ss=7a22e&oh=00_Af8BweOUn80mo6JcTWe6-tsvBysUHyD7kjTQHYF_2_i9xg&oe=6A3057BF",
          "https://www.google.com"
        ),
        productCard(
          "櫻桃",
          "夏季限定 香甜多汁",
          "https://picsum.photos/600/600?5",
          "https://www.google.com"
        )
      ]
    }
  };

  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      replyToken,
      messages: [message]
    })
  });
}

function productCard(title, desc, imageUrl, linkUrl) {
  return {
    type: "bubble",
    hero: {
      type: "image",
      url: imageUrl,
      size: "full",
      aspectRatio: "1:1",
      aspectMode: "cover"
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: title,
          weight: "bold",
          size: "xl"
        },
        {
          type: "text",
          text: desc,
          size: "sm",
          color: "#666666",
          wrap: true
        }
      ]
    },
    footer: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "button",
          style: "primary",
          action: {
            type: "uri",
            label: "查看商品",
            uri: linkUrl
          }
        }
      ]
    }
  };
}
