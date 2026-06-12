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

       🎀 About me 🩰
👠 雙寶職業媽也能輕鬆斜槓
✨ 電商合作｜經營開放中

💰 生活消費賺回饋
📱 對網路行銷有興趣
📚 想培養第二專長
✈️ 出國邊玩邊賺錢
以上任一有興趣歡迎私訊 🙋‍♀️

🔕 訊息有點多可關閉提醒

📝 記事本搜尋🔍關鍵字

🛒 找商品｜訂單問題
   ➕ Queena好友

💬 官方Line：@108yssta

輸入「購物車」即可查看近期推薦商品 ❤️`
    );
  }

  if (
    event.type === "message" &&
    event.message.type === "text" &&
    event.message.text === "購物車"
  ) {
    if (
  event.type === "message" &&
  event.message.type === "text" &&
  event.message.text === "私訊"
) {
  await replyPrivateButton(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN
  );
}
    await replyCarousel(event.replyToken, CHANNEL_ACCESS_TOKEN);
  }
}

    return new Response("OK");
  }
};
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
            text: "需要協助嗎？",
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
              label: "💬 私訊 Queena",
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
