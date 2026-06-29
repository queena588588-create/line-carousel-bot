export default {
  async fetch(request) {

    if (request.method === "GET") {
      return new Response("OK");
    }

    const CHANNEL_ACCESS_TOKEN = "F2vHBmUgcMhzxNWCsmC1K7dJcpvNt2Xu0GoIKuvWnmmAMWT+n0sGx61LCPBBCMQTVUTromiUDFUTChaU0qKZNsS88B7ZOj1XpN+CCaFHoD6r1BtcZ9ful1AvxMl8avqesyrwL8v0ooO1QYfIC4L6mAdB04t89/1O/w1cDnyilFU=";
const SHEET_ID = "1Invheigi_6zJCZTeITb5KaiezsUSPdcuEMsTogQ4Ijs";
const SHEET_NAME = "商品資料庫";
    const VIDEO_SHEET_ID = "1Invheigi_6zJCZTeITb5KaiezsUSPdcuEMsTogQ4Ijs";
    try {
      const data = await request.json();

      if (!data.events) {
        return new Response("OK");
      }

      for (const event of data.events) {
if (event.type === "postback") {
  const text = event.postback.data;

  if (text === "購物車") {
    await replyCarouselFromSheet(event.replyToken, CHANNEL_ACCESS_TOKEN);
    continue;
  }

  if (text === "私訊") {
    await replyPrivateButton(event.replyToken, CHANNEL_ACCESS_TOKEN);
    continue;
  }

  if (text === "聰明挖寶趣") {
  try {
    await replySmartFlex(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN
    );
  } catch (err) {
    await replySimple(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN,
      "挖寶趣錯誤：" + err.message
    );
  }
  continue;
}
 if (text === "影片") {
  await replyVideoButtons(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN
  );
  continue;
}
if (text === "小幫手指令") {
  await replyHelperButtons(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN
  );
  continue;
}
  if (text === "搜尋") {
    await replySimple(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN,
      `🔍 商品搜尋功能

直接輸入商品名稱即可查詢`
    );
    continue;
  }
if (text === "雨傘") {
  await replyMultiProduct(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    [
      "https://github.com/queena588588-create/line-carousel-bot/blob/main/image.png?raw=true",
      "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/%E9%9B%A8%E5%82%98.jpg"
    ],
    "☂️ 超大傘面\晴雨兩用\n⚡黑膠防曬 買一送一 $850"
  );
  continue;
}

if (text === "洗衣球") {
  await replyMultiProduct(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    [
      "https://github.com/queena588588-create/line-carousel-bot/blob/main/%E6%B4%97%E8%A1%A3%E7%90%83.png?raw=true",
      "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/%E6%B4%97%E8%A1%A3%E7%90%83%E4%BD%BF%E7%94%A8%E6%95%99%E5%AD%B8.jpg"
    ],
"🧺 三效合一洗衣膠球\n🍀 買一送一 $777"
  );
  continue;
}

if (text.startsWith("看影片 ")) {
  const keyword = text.replace("看影片 ", "").trim();
  const videoData = await findVideoSafe(keyword);

  if (videoData) {
    await replyVideoInfo(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN,
      videoData
    );
  } else {
    await replySimple(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN,
      "找不到此影片：" + keyword
    );
  }

  continue;
}
 try {
  const sheetProduct = await findProductFromSheet(text, SHEET_ID, SHEET_NAME);

  if (sheetProduct) {
    await replySheetProduct(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN,
      sheetProduct
    );
    continue;
  }

  await replySimple(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    "找不到商品：" + text
  );
  continue;

} catch (err) {
  await replySimple(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    "商品搜尋錯誤：" + err.message
  );
  continue;
}
 
}
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
                  previewImageUrl: "https://github.com/queena588588-create/line-carousel-bot/blob/main/%E7%BE%A4%E7%B5%84%E6%AD%A1%E8%BF%8E%E5%9C%96.png?raw=true"
                },
                {
                  type: "text",
                  text: `🛒 歡迎加入塞爆購物車 🛒

        🎀 About me 🩰
  👠 雙寶媽也能輕鬆斜槓
  👠 雙寶媽也能輕鬆斜槓
  ✨ 電商合作｜經營開放中

  💰 生活消費賺回饋
  📱 對網路行銷有興趣
  📚 想培養第二專長
  ✈️ 出國邊玩邊賺錢
  🙋‍♀️任一有興趣者歡迎私訊
  💬 官方Line：@108yssta

🔕 訊息有點多可關閉提醒

✈️【Queena 購物避雷指南】

近期推薦單品❤️
🛒 輸入「購物車」

🎯超值・不踩坑日記
輸入「聰明挖寶趣」
      
🚚 商品問題｜訂單問題
輸入「私訊」一對一私訊聊聊`


        },
      
             {
  type: "template",
  altText: "小幫手指令",
  template: {
    type: "buttons",
    title: "🤖 購物車小幫手",
    text: "點擊開啟功能選單",
    actions: [
      {
        type: "postback",
        label: "🤖 小幫手指令",
        data: "小幫手指令"
      }
    ]
  }
} 
     ]
 })
  });
}


if (
  event.type === "message" &&
  event.message.type === "text" &&
  event.message.text === "私訊"
) {
  await replyPrivateButton(event.replyToken, CHANNEL_ACCESS_TOKEN);
}

if (event.type === "message" && event.message.type === "text") {
  const text = event.message.text.trim();
if (text === "收單" || text === "結單" || text === "即將結單") {
  await replyClosingFlexList(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN
  );
  continue;
}
if (text === "購物車") {
  try {
    await replyCarouselFromSheet(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN
    );
  } catch (err) {
    await replySimple(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN,
      "輪播錯誤：" + err.message
    );
  }
  continue;
}

  if (text === "影片") {
    await replyVideoButtons(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN
    );
    continue;
  }

  
if (text.startsWith("看影片 ")) {
  try {
    const keyword = text.replace("看影片 ", "").trim();
    const videoData = await findVideoSafe(keyword);

    if (videoData) {
      await replyVideoInfo(
        event.replyToken,
        CHANNEL_ACCESS_TOKEN,
        videoData
      );
    } else {
      await replySimple(
        event.replyToken,
        CHANNEL_ACCESS_TOKEN,
        "找不到此影片：" + keyword
      );
    }
  } catch (err) {
    await replySimple(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN,
      "看影片錯誤：" + err.message
    );
  }

  continue;
}
  try {
  const sheetProduct = await findProductFromSheet(text, SHEET_ID, SHEET_NAME);

  if (sheetProduct) {
    await replySheetProduct(event.replyToken, CHANNEL_ACCESS_TOKEN, sheetProduct);
    continue;
  }
} catch (err) {
  await replySimple(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    "商品搜尋錯誤：" + err.message
  );
  continue;
}
if (text === "聰明挖寶趣") {
  try {
    await replySmartFlex(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN
    );
  } catch (err) {
    await replySimple(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN,
      "挖寶趣錯誤：" + err.message
    );
  }
  continue;
}
if (text === "小幫手指令") {
  await replyHelperButtons(event.replyToken, CHANNEL_ACCESS_TOKEN);
  continue;
}


if (text === "搜尋") {
  await replySimple(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    `🔍 商品搜尋功能

直接輸入商品名稱即可查詢`
  );
  continue;
}
// Google Sheet 商品搜尋

// 預告、活動：試算表讀圖片＋文字
if (text === "預告" || text === "活動") {
  const data = await findNoticeFromSheet(text);

  if (data) {
    await replyImageText(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN,
      data.imageUrl,
      data.message
    );
    continue;
  }
}

// 影片清單
// 影片清單





 

if (text.startsWith("看影片")) {
  try {
    const keyword = text.replace("看影片", "").trim();

    const videoData = await findVideoSafe(keyword);

    if (videoData) {
      await replyVideoInfo(
        event.replyToken,
        CHANNEL_ACCESS_TOKEN,
        videoData
      );
    } else {
      await replySimple(
        event.replyToken,
        CHANNEL_ACCESS_TOKEN,
        "找不到此影片：" + keyword
      );
    }
  } catch (err) {
    await replySimple(
      event.replyToken,
      CHANNEL_ACCESS_TOKEN,
      "看影片錯誤：" + err.message
    );
  }

 
}
if (text === "抗風晴雨傘" || text === "雨傘") {
 await replyMultiProduct(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    [
    "https://github.com/queena588588-create/line-carousel-bot/blob/main/image.png?raw=true",
  "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/%E9%9B%A8%E5%82%98.jpg"
       ],
     "☂️ 超大傘面\晴雨兩用\n⚡黑膠防曬 買一送一 $850"
  );
}
if (text === "洗衣球" || text === "洗衣") {
   await replyMultiProduct(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    [
    "https://github.com/queena588588-create/line-carousel-bot/blob/main/%E6%B4%97%E8%A1%A3%E7%90%83.png?raw=true",
      "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/%E6%B4%97%E8%A1%A3%E7%90%83%E4%BD%BF%E7%94%A8%E6%95%99%E5%AD%B8.jpg"
       ],
"🧺 三效合一洗衣膠球\n🍀 買一送一 $777"
  );
} 



  } // 關閉文字訊息區塊
} // 關閉 for (const event of data.events)
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
text: "聰明挖寶趣\n\n☂️ 抗風晴雨傘\n🧺 三效合一洗衣膠球\n\n輸入商品名稱即可查看詳細資訊"

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
      "▸ 𝘘𝘶𝘦𝘦𝘯𝘢’𝘴 𝘚𝘌𝘓𝘌𝘊𝘛",
  "⌛ 日常生活提案 ✖ 限時特搜話題新品速報 🛒",
  "https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNmEyYWY5YWE5NTk4ODE5MWEzNWIxZjhiOWI1MjU5Mzk6ZmlsZV8wMDAwMDAwMDI2ZGM3MjA5OWQ4M2U1NzVjMmIxM2FjMCIsInRzIjoiMjA2MTUiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6ImNkYjJiZjc4ZTYyMmI2ZTJiOTdkYzM5NGE4NzQzYjViMDI3YjU1ZGRkMzgzOGE1MDYyMWI4NDQ4MWU5N2IyNDUiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY2RuIjpudWxsLCJmbiI6bnVsbCwiY2QiOm51bGwsImNwIjpudWxsLCJtYSI6bnVsbH0=",
  "https://www.instagram.com/queena.520/",
  "𝘕𝘌𝘞 𝘐𝘕 🔓 ─── [ 𝘓𝘖𝘈𝘋𝘐𝘕𝘎... ]"
),
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
async function replyCarouselFromSheet(replyToken, token) {
 
 const url =
  "https://docs.google.com/spreadsheets/d/1c_WxcSIf0z6YuouQRdBtLjGP7Nd_wBu51DSPU1KQiTE/gviz/tq?tqx=out:json&sheet=" +
  encodeURIComponent("輪播專區");

const res = await fetch(url);

 
  const raw = await res.text();
  const data = JSON.parse(raw.substring(raw.indexOf("{"), raw.lastIndexOf("}") + 1));

  const bubbles = (data.table.rows || [])
    .map(row => ({
      category: String(row.c?.[0]?.v || "").trim(),
      sort: Number(row.c?.[1]?.v || 999),
      image: String(row.c?.[2]?.v || "").trim(),
      title: String(row.c?.[3]?.v || "").trim(),
      desc: String(row.c?.[4]?.v || "").trim(),
      keyword: String(row.c?.[5]?.v || "").trim(),
      video: String(row.c?.[6]?.v || "").trim(),
      show: String(row.c?.[7]?.v || "").trim()
    }))
    .filter(item => item.category === "購物車" && item.show === "是")
    .sort((a, b) => a.sort - b.sort)
    .slice(0, 10)
    .map(item => {
      const buttons = [];

     
if (item.keyword) {
  const mainKeyword = item.keyword.split(",")[0].trim();

  if (mainKeyword === "IG" && item.video.startsWith("http")) {
    buttons.push({
      type: "button",
      style: "primary",
      height: "sm",
      action: {
        type: "uri",
        label: "前往 IG",
        uri: item.video
      }
    });
  } else {
    buttons.push({
      type: "button",
      style: "primary",
      height: "sm",
      action: {
        type: "message",
        label: "商品介紹",
        text: mainKeyword
      }
    });
  }
}


     if (item.video.startsWith("http") && String(item.keyword || "").split(",")[0].trim() !== "IG") {
  buttons.push({
    type: "button",
    style: "secondary",
    height: "sm",
    action: {
      type: "uri",
      label: "觀看影片",
      uri: item.video
    }
  });
}

      return {
       type: "bubble",
size: "kilo",
hero: {
          type: "image",
          url: item.image,
          size: "full",
          aspectRatio: "20:10",
          aspectMode: "cover"
        },
        body: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          flex: 1,
          contents: [
            {
              type: "text",
              text: item.title || "未命名商品",
              weight: "bold",
              size: "lg",
              wrap: true
            },
            {
              type: "text",
              text: item.desc || " ",
              size: "sm",
              color: "#666666",
              wrap: true
            }
          ]
        },
        footer: {
          type: "box",
          layout: "vertical",
          spacing: "sm",
          contents: buttons
        }
      };
    });

  if (bubbles.length === 0) {
    await replySimple(replyToken, token, "目前輪播專區沒有資料");
    return;
  }

 const lineRes = await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages: [{
        type: "flex",
        altText: "購物車輪播",
        contents: {
          type: "carousel",
          contents: bubbles
        }
      }]
    })
  });
  if (!lineRes.ok) {
  const errorText = await lineRes.text();
  throw new Error("LINE拒絕輪播：" + lineRes.status + " " + errorText);
}
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
          text: "☂️ 抗風晴雨傘｜買一送一 $850\n🧺 三效合一洗衣球｜買一送一 $777",
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

  async function replyHelperButtons(replyToken, token) {
  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
      replyToken: replyToken,
      messages: [
        {
          type: "text",
          text: "Queena 好物小幫手\n\n請直接點選：\n\n🛒 購物車\n🎯 聰明挖寶趣\n🚚 私訊"
        }
      ]
    })
  });
}
}
async function replyHelperButtons(replyToken, token) {
  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages: [{
        type: "template",
        altText: "小幫手",
        template: {
          type: "buttons",
          title: "小幫手",
          text: "請選擇功能",
          actions: [

{
  type: "postback",
  label: "🛒 購物車",
  data: "購物車"
},
{
  type: "postback",
  label: "🎯 聰明挖寶趣",
  data: "聰明挖寶趣"
},
{
  type: "postback",
  label: "🚚 私訊",
  data: "私訊"
}
           ]

        }
      }]
    })
  });
}

async function findProductFromSheet(keyword, SHEET_ID, SHEET_NAME) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}`;

  const res = await fetch(url);
  const csv = await res.text();

 const rows = csv
  .split("\n")
  .map(row =>
    row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)
      ?.map(cell => cell.replace(/^"|"$/g, "").trim()) || []
  );

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];

    const sheetKeyword = row[0] || "";
    const photo = row[1] || "";
    const productName = row[2] || "";
    const intro = row[3] || "";
    const buyMethod = row[4] || "";



if (
  sheetKeyword
    .split(",")
    .map(k => k.trim())
    .includes(keyword)
) {
  return {
    keyword: sheetKeyword,
    photo,
    productName,
    intro,
    buyMethod
  };
}
      
  }

  return null;
}
async function getCountdownText(productKeyword) {
  const url =
  "https://docs.google.com/spreadsheets/d/1OtOYLa1ZwYape5BAeC2y1knja2bG3qKJPRqOxNqJVrg/gviz/tq?tqx=out:json&sheet=" +
    encodeURIComponent("結單倒數");

  const res = await fetch(url);

  if (!res.ok) {
    return "";
  }

  const raw = await res.text();
  const jsonText = raw.substring(
    raw.indexOf("{"),
    raw.lastIndexOf("}") + 1
  );

  const data = JSON.parse(jsonText);

  const productKeys = String(productKeyword || "")
    .split(",")
    .map(k => k.trim())
    .filter(Boolean);

  for (const row of data.table.rows || []) {
    const countdownKeyword = String(row.c?.[0]?.v || "").trim();
    const displayName = String(row.c?.[1]?.v || countdownKeyword).trim();
    const deadlineText = String(
      row.c?.[2]?.f || row.c?.[2]?.v || ""
    ).trim();
    const closingText = String(row.c?.[3]?.v || "").trim();
    const show = String(row.c?.[4]?.v || "").trim();

    if (show !== "是" || !countdownKeyword || !deadlineText) {
      continue;
    }

    const matched =
      productKeys.includes(countdownKeyword) ||
      productKeys.some(k =>
        k.includes(countdownKeyword) ||
        countdownKeyword.includes(k)
      );

    if (!matched) {
      continue;
    }

    const match = deadlineText.match(
      /(\d{4})[\/-](\d{1,2})[\/-](\d{1,2})\s+(\d{1,2}):(\d{2})/
    );

    if (!match) {
      return "";
    }

    const [, year, month, day, hour, minute] = match;

    const deadline = new Date(
      `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${minute}:00+08:00`
    );

    const remainingMs = deadline.getTime() - Date.now();

    if (remainingMs <= 0) {
      return `⏰ ${displayName}已結單${
        closingText ? "\n\n" + closingText : ""
      }`;
    }

    const totalMinutes = Math.floor(remainingMs / 60000);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;

    const parts = [];

    if (days > 0) parts.push(`${days}天`);
    if (hours > 0) parts.push(`${hours}小時`);
    parts.push(`${minutes}分鐘`);

   return `📢 ${displayName}收單倒數‼️‼️

只剩🚨 ${parts.join("")}，🆘系統即將關單，逾期不候‼️${
  closingText ? "\n\n" + closingText : ""
}`;
  }

  return "";
}
async function replySheetProduct(replyToken, token, product) {
  const text = `🛒 ${product.productName}

${product.intro}

${product.buyMethod || "🛒購買請留言+1或✔️私訊Queena"}`;

  const messages = [];
  const countdownText = await getCountdownText(
  product.keyword || product.productName
);

 if (product.photo) {
  const photos = product.photo
    .split(",")
    .map(url => url.trim())
    .filter(url => url.startsWith("http"));

 for (const photoUrl of photos.slice(0, 3)) {
    messages.push({
      type: "image",
      originalContentUrl: photoUrl,
      previewImageUrl: photoUrl
    });
  }
}

  messages.push({
    type: "text",
    text
  });
if (countdownText) {
  messages.push({
    type: "text",
    text: countdownText
  });
}
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
async function readSheetCsv(sheetName) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  const res = await fetch(url);
  const csv = await res.text();

  return csv
    .split("\n")
    .map(row =>
      row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)
        ?.map(cell => cell.replace(/^"|"$/g, "").trim()) || []
    );
}

async function findNoticeFromSheet(command) {
  const rows = await readSheetCsv("預告");

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];

    const cmd = row[0] || "";
    const imageUrl = row[1] || "";
    const message = row[2] || "";

    if (cmd === command) {
      return { imageUrl, message };
    }
  }

  return null;
}

async function getVideoListFromSheet() {
  const rows = await readSheetCsv("影片");
  let list = "📹 商品影片專區\n\n請輸入想看的商品：\n\n";

  for (let i = 1; i < rows.length; i++) {
    const keyword = rows[i][0] || "";
    if (keyword) {
      list += `🔸 ${keyword}\n`;
    }
  }

  return list;
}

async function findVideoFromSheet(keyword) {
  const rows = await readSheetCsv("影片");

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];

    const key = row[0] || "";
    const imageUrl = row[1] || "";
    const title = row[2] || "";
    const intro = row[3] || "";
    const videoUrl = row[4] || "";

    if (key === keyword) {
      return { imageUrl, title, intro, videoUrl };
    }
  }

  return null;
}

async function replyImageText(replyToken, token, imageUrl, message) {
  const messages = [];

  if (imageUrl) {
    messages.push({
      type: "image",
      originalContentUrl: imageUrl,
      previewImageUrl: imageUrl
    });
  }

  if (message) {
    messages.push({
      type: "text",
      text: message
    });
  }

  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages
    })
  });
}

async function replyVideoInfo(replyToken, token, videoData) {
  const messages = [];

  

  if (videoData.imageUrl) {
  messages.push({
    type: "image",
    originalContentUrl: videoData.imageUrl,
    previewImageUrl: videoData.imageUrl
  });
}

const videoText = videoData.videoUrl
  ? "\n\n觀看影片：\n" + videoData.videoUrl
  : "";

messages.push({
  type: "text",
  text: "🎬 " + videoData.title +
    "\n\n" + (videoData.videoIntro || "點我看使用分享") +
    videoText
});
  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages
    })
  });
}

async function findVideoSafe(keyword) {
  const url =
    "https://docs.google.com/spreadsheets/d/1Invheigi_6zJCZTeITb5KaiezsUSPdcuEMsTogQ4Ijs/gviz/tq?tqx=out:json&sheet=" +
    encodeURIComponent("商品資料庫");

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("商品資料庫讀取失敗：" + res.status);
  }

  const raw = await res.text();
  const jsonText = raw.substring(
    raw.indexOf("{"),
    raw.lastIndexOf("}") + 1
  );
  const data = JSON.parse(jsonText);

  const target = String(keyword || "").trim();

  for (const row of data.table.rows || []) {
    const sheetKeyword = String(row.c?.[0]?.v || "").trim();
    const imageUrl = String(row.c?.[1]?.v || "").trim();
    const title = String(row.c?.[2]?.v || "").trim();
    const intro = String(row.c?.[3]?.v || "").trim();
    const videoUrl = String(row.c?.[5]?.v || "").trim();
const videoIntro = String(row.c?.[7]?.v || "").trim();
    const keys = sheetKeyword
      .split(",")
      .map(k => k.trim())
      .filter(Boolean);

    const matched =
      keys.includes(target) ||
      keys.some(k => target.includes(k) || k.includes(target)) ||
      title === target;

    if (matched) {
     
      return {
  imageUrl,
  title,
  intro,
  videoUrl,
  videoIntro
};
    }
  }

  return null;
}
async function replyVideoButtons(replyToken, token) {
  const url =
    "https://docs.google.com/spreadsheets/d/1Invheigi_6zJCZTeITb5KaiezsUSPdcuEMsTogQ4Ijs/gviz/tq?tqx=out:json&sheet=" +
    encodeURIComponent("商品資料庫");

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("試算表讀取失敗：" + res.status);
  }

  const raw = await res.text();
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  const data = JSON.parse(raw.slice(start, end + 1));

  const items = (data.table.rows || [])
    .map(row => {
      const keyword = String(row.c?.[0]?.v || "").trim();
      const imageUrl = String(row.c?.[1]?.v || "").split(",")[0].trim();
      const title = String(row.c?.[2]?.v || keyword).trim();
      const videoUrl = String(row.c?.[5]?.v || "").trim();
      const videoIntro = String(row.c?.[7]?.v || "").trim();
const videoShow = String(row.c?.[8]?.v || "").trim();
      return {
  keyword,
  imageUrl,
  title,
  videoUrl,
  videoIntro,
  videoShow
};
    })
   .filter(item => item.keyword && item.videoUrl.startsWith("http") && item.videoShow === "是")
    .slice(0, 12);

  if (items.length === 0) {
    await replySimple(replyToken, token, "目前沒有設定商品影片");
    return;
  }

  const itemRows = items.map(item => ({
    type: "box",
    layout: "horizontal",
    spacing: "sm",
    margin: "md",
    action: {
      type: "message",
      label: item.title.slice(0, 20),
      text: "看影片 " + String(item.keyword || "")
        .split(",")[0]
        .trim()
    },
    contents: [
      {
        type: "image",
        url: item.imageUrl || "https://dummyimage.com/120x120/f5f5f5/999999.png&text=VIDEO",
        size: "sm",
        aspectRatio: "1:1",
        aspectMode: "cover",
        flex: 1
      },
      {
        type: "box",
        layout: "vertical",
        flex: 3,
        contents: [
          {
            type: "text",
            text: item.title,
            weight: "bold",
            size: "sm",
            color: "#333333",
            wrap: true,
            maxLines: 1
          },
          {
            type: "text",
            text: "🎬 點我看影片",
            size: "xs",
            color: "#7B1FA2",
            weight: "bold",
            margin: "xs"
          },
          {
            type: "text",
            text: item.videoIntro || "使用分享｜商品介紹｜實拍影片",
            size: "xs",
            color: "#666666",
            wrap: true,
            maxLines: 2,
            margin: "xs"
          }
        ]
      }
    ]
  }));

  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages: [{
        type: "flex",
        altText: "商品影片專區",
        contents: {
          type: "bubble",
          body: {
            type: "box",
            layout: "vertical",
            spacing: "xs",
            contents: [
              {
                type: "text",
                text: "🎬 商品影片專區",
                weight: "bold",
                size: "lg",
                color: "#333333"
              },
              {
                type: "text",
                text: "點選想看的影片",
                size: "xs",
                color: "#666666",
                margin: "xs"
              },
              {
                type: "separator",
                margin: "md"
              },
              ...itemRows
            ]
          }
        }
      }]
    })
  });
} 
async function replySmartFlex(replyToken, token) {
  const url = "https://docs.google.com/spreadsheets/d/1Invheigi_6zJCZTeITb5KaiezsUSPdcuEMsTogQ4Ijs/gviz/tq?tqx=out:json&sheet=" + encodeURIComponent("商品資料庫");

  const res = await fetch(url);
  const raw = await res.text();
  const jsonText = raw.substring(raw.indexOf("{"), raw.lastIndexOf("}") + 1);
  const data = JSON.parse(jsonText);

  const items = (data.table.rows || [])
    .map(row => ({
      label: String(row.c?.[0]?.v || "").trim(),
      keyword: String(row.c?.[0]?.v || "").trim(),
      show: String(row.c?.[6]?.v || "").trim()
    }))
    .filter(item => item.label && item.show === "是")
    .slice(0, 8);

  const allItems = [
  ...items,
  { label: "搜尋商品", keyword: "搜尋" }
];

  const rows = [];
  for (let i = 0; i < allItems.length; i += 2) {
    const rowItems = allItems.slice(i, i + 2);

    rows.push({
      type: "box",
      layout: "horizontal",
      spacing: "xs",
      margin: "xs",
      contents: rowItems.map(item => ({
        type: "box",
        layout: "vertical",
        flex: 1,
        backgroundColor: "#F0F2F5",
        cornerRadius: "md",
        paddingAll: "sm",
        action: {
          type: "message",
          label: String(item.label || "")
            .split(",")[0]
            .trim()
            .slice(0, 20),
          text: String(item.keyword || "")
            .split(",")[0]
            .trim()
        },
        contents: [
          {
            type: "text",
            text: String(item.label || "")
              .split(",")[0]
              .trim(),
            align: "center",
            size: "sm",
            weight: "bold",
            color: "#333333",
            wrap: true
          }
        ]
      }))
    });
  }

  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages: [{
        type: "flex",
        altText: "商品選單",
        contents: {
          type: "bubble",
          size: "mega",
          body: {
            type: "box",
            layout: "vertical",
            spacing: "xs",
            contents: [
              {
                type: "text",
                text: "🛒 聰明挖寶趣",
                weight: "bold",
                size: "lg"
              },
              {
                type: "text",
                text: "點選想看的商品",
                size: "sm",
                color: "#666666",
                margin: "xs"
              },
              ...rows
            ]
          }
        }
      }]
    })
  });
}
async function replyClosingFlexList(replyToken, token) {
  const url = "https://docs.google.com/spreadsheets/d/1OtOYLa1ZwYape5BAeC2y1knja2bG3qKJPRqOxNqJVrg/gviz/tq?tqx=out:json&sheet=" + encodeURIComponent("結單倒數");

  const res = await fetch(url);
  const raw = await res.text();
  const jsonText = raw.substring(raw.indexOf("{"), raw.lastIndexOf("}") + 1);
  const data = JSON.parse(jsonText);

  const now = Date.now();

  const items = (data.table.rows || [])
    .map(row => {
      const keyword = String(row.c?.[0]?.v || "").trim();
      const displayName = String(row.c?.[1]?.v || keyword).trim();
      const deadlineText = String(row.c?.[2]?.f || row.c?.[2]?.v || "").trim();
      const closingText = String(row.c?.[3]?.v || "").trim();
      const show = String(row.c?.[4]?.v || "").trim();
      const imageUrl = String(row.c?.[5]?.v || "").trim();

      if (show !== "是") return null;

      const match = deadlineText.match(/(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2}).*?(\d{1,2}):(\d{2})/);
      if (!match) return null;

      const [, year, month, day, hour, minute] = match;

      const deadline = new Date(
        `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${minute}:00+08:00`
      );

      const remainingMs = deadline.getTime() - now;

      const totalMinutes = Math.floor(remainingMs / 60000);
      const days = Math.floor(totalMinutes / 1440);
      const hours = Math.floor((totalMinutes % 1440) / 60);
      const minutes = totalMinutes % 60;

      let timeText = "";

      if (remainingMs <= 0) {
        timeText = "已結單";
      } else {
        const parts = [];
        if (days > 0) parts.push(`${days}天`);
        if (hours > 0) parts.push(`${hours}小時`);
        parts.push(`${minutes}分鐘`);
        timeText = `剩 ${parts.join("")}`;
      }

      return {
        displayName,
        closingText,
        imageUrl,
        deadline,
        timeText,
        keyword
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.deadline - b.deadline)
    .slice(0, 6);

  if (items.length === 0) {
    await replySimple(replyToken, token, "目前沒有設定即將結單商品");
    return;
  }

  const itemRows = items.map(item => ({
    type: "box",
    layout: "horizontal",
    spacing: "sm",
    margin: "md",
    action: {
      type: "message",
      label: item.displayName.slice(0, 20),
      text: item.keyword
    },
    contents: [
      {
        type: "image",
        url: item.imageUrl || "https://dummyimage.com/120x120/f5f5f5/999999.png&text=SALE",
        size: "sm",
        aspectRatio: "1:1",
        aspectMode: "cover",
        flex: 1
      },
      {
        type: "box",
        layout: "vertical",
        flex: 3,
        contents: [
          {
            type: "text",
            text: item.displayName,
            weight: "bold",
            size: "sm",
            color: "#333333",
            wrap: true,
            maxLines: 1
          },
          {
            type: "text",
            text: "⏰ " + item.timeText,
            size: "xs",
            color: "#D32F2F",
            weight: "bold",
            margin: "xs"
          },
          {
            type: "text",
            text: item.closingText || "想要的快留言＋1",
            size: "xs",
            color: "#666666",
            wrap: true,
            maxLines: 2,
            margin: "xs"
          }
        ]
      }
    ]
  }));

  await fetch("https://api.line.me/v2/bot/message/reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify({
      replyToken,
      messages: [{
        type: "flex",
        altText: "最近結單清單",
        contents: {
          type: "bubble",
          body: {
            type: "box",
            layout: "vertical",
            spacing: "xs",
            contents: [
              {
                type: "text",
                text: "⏰ 最近結單清單",
                weight: "bold",
                size: "lg",
                color: "#333333"
              },
              {
                type: "text",
                text: "👑 Queena 私心推薦 💥逾期不候",
                size: "xs",
                color: "#666666",
                margin: "xs"
              },
              {
                type: "separator",
                margin: "md"
              },
              ...itemRows
            ]
          }
        }
      }]
    })
  });
}
