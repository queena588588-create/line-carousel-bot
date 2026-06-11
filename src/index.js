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

  if (event.type === "memberJoined") {
    await replyText(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN,
      `🛒 歡迎加入塞爆購物車 🛒

About me～

👉 雙寶職業媽咪也能輕鬆斜槓
✨ 電商合作經營開放中

💰 生活消費賺回饋
📱 對網路行銷有興趣
📚 想培養第二專長
✈️ 出國邊玩邊賺錢

以上任一有興趣歡迎私訊 🙋‍♀️

🔕 訊息有點多可關閉提醒

📝 記事本搜尋🔍關鍵字

🛒 買東西｜找商品｜訂單問題
➕ Queena好友

📷 IG搜尋：queena.520日常
💬 官方Line：@108yssta

輸入「商品」即可查看近期推薦商品 ❤️`
    );
  }

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
          "https://img.shop.com/Image/240000/246200/246290/skualt/40634.jpg?plain&size=800x800",
          "https://www.google.com"
        ),
        productCard(
          "冰冰衣",
          "降溫＋防曬＋對抗光老化",
          "https://shoplineimg.com/562a466de37ec6fdbb000012/6a0c330a018eb10693cf22bc/800x.webp?source_format=jpg",
          "https://forms.gle/FGgQcesTW8YHfdZN9"
        ),
        productCard(
          "雞排",
          "方便料理，加熱即可享用",
          "https://drive.google.com/file/d/1x47Jdve6hAgkr4FMO1q-Ybu0lF5lNtpN/view?usp=sharing",
          "https://forms.gle/sE16zUJx3Tb359qq7"
        ),
        productCard(
          "櫻桃",
          "夏季限定 香甜多汁",
          "https://drive.google.com/file/d/1xjr2AUGkAB65yphmFWJcgthKQE5aGpvN/view?usp=sharing",
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
      aspectRatio: "16:9",
      aspectMode: "cover"
    },
    body: {
  type: "box",
  layout: "vertical",
  paddingAll: "6px",
  contents: [
    {
      type: "text",
      text: title,
      weight: "bold",
      size: "md",
      align: "center"
    }
  ]
},
    footer: {
      type: "box",
      layout: "vertical",
      contents: [
        {
         type: "button",
height: "sm",
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

async function replyText(replyToken, token, text) {
  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      replyToken,
      messages: [
        {
          type: "text",
          text: text
        }
      ]
    })
  });
}
