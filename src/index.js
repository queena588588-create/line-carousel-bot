export default {
  async fetch(request) {

    if (request.method === "GET") {
      return new Response("OK");
    }

    const CHANNEL_ACCESS_TOKEN = "yN2nn/Jk1J0I1KJXn2nUHf5Cpif1L6hef0D8AO+CZZ3Z6TPRiaG3Gg46fG0lUHLaVUTromiUDFUTChaU0qKZNsS88B7ZOj1XpN+CCaFHoD7TU7gM1cDlt+N4FHgQuNap6hGvZmk9pTQTlxgIfX+SjwdB04t89/1O/w1cDnyilFU=";

    try {
      const data = await request.json();

      if (!data.events) {
        return new Response("OK");
      }

      for (const event of data.events) {

        if (event.type === "memberJoined") {
          await fetch("https://api.line.me/v2/bot/message/reply", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + CHANNEL_ACCESS_TOKEN
            },
            body: JSON.stringify({
              replyToken: event.replyToken,
              messages: [
                {
                  type: "image",
                  originalContentUrl: "https://drive.google.com/file/d/1TI9cimJXKO_ofP_i1tHWvaJ-JJ-QCXlO/view",
                  previewImageUrl: "https://drive.google.com/file/d/1sbX8PM18iaE6QR5YlgswzHD1XL_KrP8F/view"
                },
                {
                  type: "text",
                  text: `🛒 歡迎加入塞爆購物車 🛒

        🎀 About me 🩰
  👠 雙寶職業媽也能輕鬆斜槓
  ✨ 電商合作｜經營開放中

  💰 生活消費賺回饋
  📱 對網路行銷有興趣
  📚 想培養第二專長
  ✈️ 出國邊玩邊賺錢
  🙋‍♀️任一有興趣者歡迎私訊
  💬 官方Line：@108yssta

🔕 訊息有點多可關閉提醒

✈️【Queena 好物推薦 × 購物避雷指南】

近期推薦單品❤️
🛒 輸入「購物車」

🎯超值・不踩坑日記
輸入「聰明挖寶趣」
      
🚚 商品問題｜訂單問題
輸入「私訊」一對一私訊聊聊`

    
         }
      ]
    })
  });
}

 if (
  event.type === "message" &&
  event.message.type === "text" &&
  event.message.text === "購物車"
) {
  await replyCarousel(event.replyToken, CHANNEL_ACCESS_TOKEN);
}

if (
  event.type === "message" &&
  event.message.type === "text" &&
  event.message.text === "私訊"
) {
  await replyPrivateButton(event.replyToken, CHANNEL_ACCESS_TOKEN);
}
if (event.type === "message" && event.message.type === "text") {
const text = event.message.text;

if (text === "聰明挖寶趣") {
  await replyFolderButton(event.replyToken, CHANNEL_ACCESS_TOKEN);
}

if (text === "抗風晴雨傘" || text === "雨傘") {
  await replyProduct(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    "https://github.com/queena588588-create/line-carousel-bot/blob/main/image.png?raw=true",
    "☂️ 超大傘面\晴雨兩用 ⚡ 黑膠防曬 買一送一 $850"
  );
}
if (text === "洗衣球" || text === "洗衣") {
  await replyProduct(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    "https://github.com/queena588588-create/line-carousel-bot/blob/main/%E6%B4%97%E8%A1%A3%E7%90%83.png?raw=true",
    "三效合一洗衣膠球 ☘️→ 買一送一  $777"
  );
} 
if (text === "冰淇淋被" || text === "被子") {
  await replyProduct(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    "https://github.com/queena588588-create/line-carousel-bot/blob/main/%E5%86%B0%E6%B7%87%E6%B7%8B%E8%A2%AB-1.jpg?raw=true",
    "冰淇淋被 🌸→ 買一送一  $999"
  );
} 
  if (text === "行動電源" || text === "洗衣") {
  await replyProduct(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    "https://github.com/queena588588-create/line-carousel-bot/blob/main/%E5%BF%AB%E5%85%85%E8%A1%8C%E5%8B%95%E9%9B%BB%E6%BA%90_%E9%99%90%E5%8B%951.png?raw=true",
    "馬卡龍行動電源 🔋 買一送一  $599"
  );
} 
  if (
  text === "枕頭" ||
  text === "止鼾枕" ||
  text === "6D枕頭"
) {
  await replyMultiProduct(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    [
      "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/6D%E9%9B%B2%E6%9C%B5%E6%9E%95.jpg",
      "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/EC30A28D-F36B-455A-B85C-FFF6FB800638.jpeg",
    ],
    "☁️ 6D蝶型涼感記憶枕 ☁️ 買一送一 $1280"
  );
}
if (text === "牛排") {
  await replyProduct(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    "https://github.com/queena588588-create/line-carousel-bot/blob/main/image%20(3).png?raw=true",
    "🥩 加拿大 PRIME 雪花凝脂牛排\n\n4片/320g/包 4包組"
  );
}
}
return new Response("OK");

    } catch (error) {
      console.error(error);
      return new Response("ERROR", { status: 500 });
    }
  }
};

async function replySimple(replyToken, token, text) {
  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
   "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages: [{
        type: "text",
        text: text
      }]
    })
  });
}


async function replyMultiProduct(
  replyToken,
  token,
  imageUrls,
  text
) {
  const imageMessages = imageUrls.map((imageUrl) => ({
    type: "image",
    originalContentUrl: imageUrl,
    previewImageUrl: imageUrl
  }));

  const messages = [
    ...imageMessages,
    {
      type: "text",
      text: text
    }
  ];

  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages
    })
  });
}



async function replyInflationZone(replyToken, token) {
  const message = {
    type: "text",
 text: "聰明挖寶趣\n\n☂️ 抗風晴雨傘\n🧺 三效合一洗衣膠球\n🛏️ 冰淇淋被\n🔋 馬卡龍行動電源\n☁️ 6D蝶型涼感記憶枕\n\n輸入商品名稱即可查看詳細資訊"

};
  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
     "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages: [message]
    })
  });
}
async function replyPrivateButton(replyToken, token) {
  const message = {
    type: "flex",
    altText: "私訊 Queena",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "⚡︎ 偷偷點一下，沒人會發現😅",
            weight: "bold",
            size: "lg"
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
              label: "💻 私訊 Queena",
              uri: "https://line.me/ti/p/~0921730505"
            }
          }
        ]
      }
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




async function replyCarousel(replyToken, token) {
  const message = {
    type: "flex",
    altText: "Queena 的避坑指南⚡",
    contents: {
      type: "carousel",
      contents: [
        productCard(
          "仙女霜",
          "日常保養推薦 All in one",
          "https://lh7-rt.googleusercontent.com/formsz/AN7BsVBrKuvlr-PQtwilr8ARq2sdSIx_JVNmPeTSsk4tnpFyNxvh-YKoMIvqJxxDxxhUJ6__N4dSddx_TS4uvUzaL2QlqIyIQMgltUv9lr5MaJVTpAvWeodGJvCPK68WGkdYs9YWzPHD5UibRiXdUAwmM7JYYwbne-SefIcWO9GZ33ZLuTirs91Zd--qP3JMyDtjVbmGWGCsFY8EKnsgv_M_=w241?key=MPUY86i8CDh0wU0JOyGFfA",
          "https://forms.gle/qQpqMWLf9YAfNCW37"
        ),
        productCard(
          "青春極致防曬乳",
          "SPF50+ 保濕防曬不黏膩",
          "https://lh7-rt.googleusercontent.com/formsz/AN7BsVDfZOKlefTWzPb_KlcTJ901nrbLBnfinIk1KV4_ztHjFd4g5quwzTYv_EdUsCD_VQkTscBpGUWjgfPjJHmitqFnLk_9pEspGdqyoqI6zYiF4dMxf20NMi9YwYLfHuRpDdPrhnxNia8p6Z6HHvqNuiwgVju8-SNmVMvUzmwNrys1kAitMLYLnMsq8DTLvOk7Jhn4LbHwUhzv1ZCRXw_U=w214?key=f2LYPwSrb6A4LdgRRxN6Tw",
          "https://forms.gle/tob2zb6KYonW5ph98"
        ),
        productCard(
          "冰冰衣",
          "降溫＋防曬＋對抗光老化",
          "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNmEyYWYzNmNkOWEwODE5MWJjYTdmN2UwMTJiYTM1OGI6ZmlsZV8wMDAwMDAwMGU4ZTg3MjA5YTRhOWRiMjBmNmVjNjE4NSIsInRzIjoiMjA2MTUiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6IjI4NzZkOGIzMWY5YTMzMmYxYTEwNjEwY2JhZWZkZWM1MWNiNTA4ZjEyM2ZkMDc0Yzk2N2NkYTAxMWEzMzljOWEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY2RuIjpudWxsLCJmbiI6bnVsbCwiY2QiOm51bGwsImNwIjpudWxsLCJtYSI6bnVsbH0=",
          "https://forms.gle/FGgQcesTW8YHfdZN9"
        ),
        productCard(
          "雞排",
          "方便料理，加熱即可享用",
          "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNmEyYWY1MjExMzY0ODE5MWIzNzY3M2MzZDJiZjQ0OTQ6ZmlsZV8wMDAwMDAwMGUwZjQ3MjA5OWEzMDc5NmYxMDNiYTYyNyIsInRzIjoiMjA2MTUiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6IjExNzNjNTdkMWFmM2E5MGYwN2Y2MTM5ZWRmOTAyZTYxNmVjZmE0YTM2N2RkZDk2YTkxOTJkYzJhZDdhNzYzZjYiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY2RuIjpudWxsLCJmbiI6bnVsbCwiY2QiOm51bGwsImNwIjpudWxsLCJtYSI6bnVsbH0=",
          "https://forms.gle/sE16zUJx3Tb359qq7"
        ),
        productCard(
          "櫻桃",
          "夏季限定 香甜多汁",
          "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNmEyYWY1YzdhY2Q0ODE5MThkMGViZDNmZjljYjQzZDI6ZmlsZV8wMDAwMDAwMDc4ZjA3MjA5YTc2OTE3MTViOWZmM2ZlZiIsInRzIjoiMjA2MTUiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6IjY0OGI0MDViY2ZmYzQ2ZjE2YzIzMTMwZDcwY2YxNzQ0OTg4NjM5NjQzZTY2YTg2YzYxM2M0NDJlMzNkOGI0ODIiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY2RuIjpudWxsLCJmbiI6bnVsbCwiY2QiOm51bGwsImNwIjpudWxsLCJtYSI6bnVsbH0=",
          "https://forms.gle/9no8dTweGKEZzJwG6"
        ),
 productCard(
      "▸ 𝘘𝘶𝘦𝘦𝘯𝘢’𝘴 𝘚𝘌𝘓𝘌𝘊𝘛",
  "⌛ 日常生活提案 ✖ 限時特搜話題新品速報 🛒",
  "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNmEyYWY5YWE5NTk4ODE5MWEzNWIxZjhiOWI1MjU5Mzk6ZmlsZV8wMDAwMDAwMDI2ZGM3MjA5OWQ4M2U1NzVjMmIxM2FjMCIsInRzIjoiMjA2MTUiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6ImNkYjJiZjc4ZTYyMmI2ZTJiOTdkYzM5NGE4NzQzYjViMDI3YjU1ZGRkMzgzOGE1MDYyMWI4NDQ4MWU5N2IyNDUiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY2RuIjpudWxsLCJmbiI6bnVsbCwiY2QiOm51bGwsImNwIjpudWxsLCJtYSI6bnVsbH0=",
  "https://www.instagram.com/queena.520/",
  "𝘕𝘌𝘞 𝘐𝘕 🔓 ─── [ 𝘓𝘖𝘈𝘋𝘐𝘕𝘎... ]"
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

function productCard(title, desc, imageUrl, linkUrl, buttonText = "近期賣出,去逛逛!") {
  return {
    type: "bubble",
    hero: {
      type: "image",
      url: imageUrl,
size: "full",
      aspectRatio: "20:11",
aspectMode: "cover"
    },
  body: {
type: "box",
layout: "vertical",
spacing: "sm",
paddingAll: "6px",
contents: [
{
type: "text",
text: title,
weight: "bold",
size: "lg",
wrap: true
},
{
type: "text",
text: desc,
size: "xs",
color: "#888888",
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
height: "sm",
style: "primary",
          action: {
            type: "uri",
           label: buttonText,
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
async function replyProduct(replyToken, token, imageUrl, text) {
  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages: [
        {
          type: "image",
          originalContentUrl: imageUrl,
          previewImageUrl: imageUrl
        },
        {
          type: "text",
          text: text
        }
      ]
    })
  });
}

async function replyFolderButton(replyToken, token) {
  const message = {
    type: "flex",
    altText: "聰明挖寶趣 ",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        paddingAll: "16px",
        contents: [
          {
            type: "text",
            text: " ",
            weight: "bold",
            size: "lg",
            color: "#333333",
            wrap: true
          },
          {
            type: "text",
            text: "聰明挖寶趣",
            weight: "bold",
            size: "xl",
            margin: "lg",
            wrap: true
          },
          {
            type: "text",
            text: "☂️ 抗風晴雨傘｜買一送一 $850\n🧺 3效合1洗衣球｜買一送一 $777\n🛏️ 冰淇淋被｜買一送一 $999\n☁️ 6D蝶型涼感記憶枕｜買一送一 $1280\n🔋 行動電源｜買一送一 $599",
            size: "sm",
            color: "#555555",
            margin: "md",
            wrap: true
          },
          {
            type: "button",
            style: "primary",
            color: "#06C755",
            height: "sm",
            margin: "xl",
            action: {
              type: "uri",
              label: "📂 查看照片與影片",
              uri: "https://drive.google.com/drive/folders/1n0dPszGQg5HEGqj2lxelfgsY7xX5g8M0?usp=sharing"
            }
          }
        ]
      }
    }
  };

  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages: [message]
    })
  });
}
