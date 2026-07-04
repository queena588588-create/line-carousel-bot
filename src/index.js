var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.js
var recentMessages = /* @__PURE__ */ new Map();
var index_default = {
  async fetch(request, env) {
   if (request.method === "GET") {
  const url = new URL(request.url);
if (url.pathname === "/menu-v2/1040" || url.pathname === "/menu-v3/1040") {
  const img = await fetch(
    "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/1040.png"
  );

  return new Response(img.body, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

if (url.pathname === "/menu-v2/700" || url.pathname === "/menu-v3/700") {
  const img = await fetch(
    "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/700.png.png"
  );

  return new Response(img.body, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

return new Response("OK");
}
    const CHANNEL_ACCESS_TOKEN = "F2vHBmUgcMhzxNWCsmC1K7dJcpvNt2Xu0GoIKuvWnmmAMWT+n0sGx61LCPBBCMQTVUTromiUDFUTChaU0qKZNsS88B7ZOj1XpN+CCaFHoD6r1BtcZ9ful1AvxMl8avqesyrwL8v0ooO1QYfIC4L6mAdB04t89/1O/w1cDnyilFU=";
    const SHEET_ID2 = "1Invheigi_6zJCZTeITb5KaiezsUSPdcuEMsTogQ4Ijs";
    const SHEET_NAME = "\u5546\u54C1\u8CC7\u6599\u5EAB";
    const VIDEO_SHEET_ID = "1Invheigi_6zJCZTeITb5KaiezsUSPdcuEMsTogQ4Ijs";
    try {
      const data = await request.json();
      if (!data.events) {
        return new Response("OK");
      }
      for (const event of data.events) {
        if (event.type === "postback") {
          const text = event.postback.data;
          if (text === "\u8CFC\u7269\u8ECA") {
            await replyCarouselFromSheet(event.replyToken, CHANNEL_ACCESS_TOKEN);
            continue;
          }
          if (text === "\u79C1\u8A0A") {
            await replyPrivateButton(event.replyToken, CHANNEL_ACCESS_TOKEN);
            continue;
          }
          if (text === "\u5F71\u7247") {
            await replyVideoButtons(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN
            );
            continue;
          }
          if (text === "\u5929\u6C23") {
            await replyMorningWeather(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN
            );
            continue;
          }
        
    
          if (text === "\u5206\u985E") {
            await replySmartFlex(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN
            );
            continue;
          }
          if (text === "\u641C\u5C0B") {
            await replySimple(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              `\u{1F50E} \u5546\u54C1\u641C\u5C0B\u529F\u80FD

\u76F4\u63A5\u8F38\u5165\u5546\u54C1\u540D\u7A31\u5373\u53EF\u67E5\u8A62`
            );
            continue;
          }
          if (text === "\u641C\u5C0B") {
            await replySimple(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              `\u{1F50D} \u5546\u54C1\u641C\u5C0B\u529F\u80FD

\u76F4\u63A5\u8F38\u5165\u5546\u54C1\u540D\u7A31\u5373\u53EF\u67E5\u8A62`
            );
            continue;
          }
          if (text === "\u96E8\u5098") {
            await replyMultiProduct(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              [
                "https://github.com/queena588588-create/line-carousel-bot/blob/main/image.png?raw=true",
                "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/%E9%9B%A8%E5%82%98.jpg"
              ],
              "\u2602\uFE0F \u8D85\u5927\u5098\u9762\u6674\u96E8\u5169\u7528\n\u26A1\u9ED1\u81A0\u9632\u66EC \u8CB7\u4E00\u9001\u4E00 $850"
            );
            continue;
          }
          if (text === "\u6D17\u8863\u7403") {
            await replyMultiProduct(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              [
                "https://github.com/queena588588-create/line-carousel-bot/blob/main/%E6%B4%97%E8%A1%A3%E7%90%83.png?raw=true",
                "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/%E6%B4%97%E8%A1%A3%E7%90%83%E4%BD%BF%E7%94%A8%E6%95%99%E5%AD%B8.jpg"
              ],
              "\u{1F9FA} \u4E09\u6548\u5408\u4E00\u6D17\u8863\u81A0\u7403\n\u{1F340} \u8CB7\u4E00\u9001\u4E00 $777"
            );
            continue;
          }
          if (text.startsWith("\u770B\u5F71\u7247 ")) {
            const keyword = text.replace("\u770B\u5F71\u7247 ", "").trim();
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
                "\u627E\u4E0D\u5230\u6B64\u5F71\u7247\uFF1A" + keyword
              );
            }
            continue;
          }
          try {
            const sheetProduct = await findProductFromSheet(text, SHEET_ID2, SHEET_NAME);
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
              "\u627E\u4E0D\u5230\u5546\u54C1\uFF1A" + text
            );
            continue;
          } catch (err) {
            await replySimple(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              "\u5546\u54C1\u641C\u5C0B\u932F\u8AA4\uFF1A" + err.message
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
                  text: `\u{1F6D2} \u6B61\u8FCE\u52A0\u5165\u585E\u7206\u8CFC\u7269\u8ECA \u{1F6D2}

        \u{1F380} About me \u{1FA70}
  \u{1F460} \u96D9\u5BF6\u5ABD\u4E5F\u80FD\u8F15\u9B06\u659C\u69D3
  \u2728 \u96FB\u5546\u5408\u4F5C\uFF5C\u7D93\u71DF\u958B\u653E\u4E2D

  \u{1F4B0} \u751F\u6D3B\u6D88\u8CBB\u8CFA\u56DE\u994B
  \u{1F4F1} \u5C0D\u7DB2\u8DEF\u884C\u92B7\u6709\u8208\u8DA3
  \u{1F4DA} \u60F3\u57F9\u990A\u7B2C\u4E8C\u5C08\u9577
  \u2708\uFE0F \u51FA\u570B\u908A\u73A9\u908A\u8CFA\u9322
  \u{1F64B}\u200D\u2640\uFE0F\u4EFB\u4E00\u6709\u8208\u8DA3\u8005\u6B61\u8FCE\u79C1\u8A0A
  \u{1F4AC} \u5B98\u65B9Line\uFF1A@108yssta

\u{1F515} \u8A0A\u606F\u6709\u9EDE\u591A\u53EF\u95DC\u9589\u63D0\u9192

\u2708\uFE0F\u3010Queena \u8CFC\u7269\u907F\u96F7\u6307\u5357\u3011

\u8FD1\u671F\u63A8\u85A6\u55AE\u54C1\u2764\uFE0F
\u{1F6D2} \u8F38\u5165\u300C\u8CFC\u7269\u8ECA\u300D

\u{1F4C2} \u5546\u54C1\u5206\u985E
\u8F38\u5165\u300C\u5206\u985E\u300D
      
\u{1F69A} \u5546\u54C1\u554F\u984C\uFF5C\u8A02\u55AE\u554F\u984C
\u8F38\u5165\u300C\u79C1\u8A0A\u300D\u4E00\u5C0D\u4E00\u79C1\u8A0A\u804A\u804A`
                },
                {
                  type: "template",
                  altText: "\u5C0F\u5E6B\u624B\u6307\u4EE4",
                  template: {
                    type: "buttons",
                    title: "\u{1F916} \u8CFC\u7269\u8ECA\u5C0F\u5E6B\u624B",
                    text: "\u9EDE\u64CA\u958B\u555F\u529F\u80FD\u9078\u55AE",
                    actions: [
                      {
                        type: "postback",
                        label: "\u{1F916} \u5C0F\u5E6B\u624B\u6307\u4EE4",
                        data: "\u5C0F\u5E6B\u624B\u6307\u4EE4"
                      }
                    ]
                  }
                }
              ]
            })
          });
        }
        if (event.type === "message" && event.message.type === "text" && event.message.text === "\u79C1\u8A0A") {
          await replyPrivateButton(event.replyToken, CHANNEL_ACCESS_TOKEN);
        }
        if (event.type === "message" && event.message.type === "text") {
          const text = event.message.text.trim();
         
      if (text === "天氣速報") {
  await replyWeatherSummary(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    env
  );
  continue;
}

if (text === "天氣速報" || text === "天氣" || text === "今日天氣") {
  await replyMorningWeather(
    event.replyToken,
    CHANNEL_ACCESS_TOKEN,
    env
  );
  continue;
}
          if (text === "\u9996\u9801") {
            await replyCuteHome(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN
            );
            continue;
          }
          const sourceId = event.source.groupId || event.source.roomId || event.source.userId || "unknown";
          const userId = event.source.userId || "unknown";
          const dedupeKey = `${sourceId}:${userId}:${text}`;
          const nowTime = Date.now();
          if (recentMessages.has(dedupeKey)) {
            const lastTime = recentMessages.get(dedupeKey);
            if (nowTime - lastTime < 3e4) {
              continue;
            }
          }
          recentMessages.set(dedupeKey, nowTime);
          if (text === "\u7D2B\u5916\u7DDA" || text === "\u76EE\u524D\u7D2B\u5916\u7DDA" || text === "\u5317\u4E2D\u5357\u7D2B\u5916\u7DDA") {
            await replyUvOnly(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              env
            );
            continue;
          }
          if (text === "\u5546\u54C1\u5206\u985E" || text === "\u5206\u985E" || text === "\u901B\u901B") {
            await replyProductCategoryHome(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              SHEET_ID2,
              SHEET_NAME
            );
            continue;
          }
          const categoryMatch = text.match(/^(保養美妝|營養保健|居家生活|生鮮美食|3C|服飾|香氛美學)(\d+)?$/);
          if (categoryMatch) {
            const category = categoryMatch[1];
            const page = Number(categoryMatch[2] || 1);
            await replyProductCategoryList(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              SHEET_ID2,
              SHEET_NAME,
              category,
              page
            );
            continue;
          }
          if (text === "\u6536\u55AE" || text === "\u7D50\u55AE" || text === "\u5373\u5C07\u7D50\u55AE") {
            await replyClosingFlexList(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN
            );
            continue;
          }
          if (text === "\u8CFC\u7269\u8ECA") {
            try {
              await replyCarouselFromSheet(
                event.replyToken,
                CHANNEL_ACCESS_TOKEN
              );
            } catch (err) {
              await replySimple(
                event.replyToken,
                CHANNEL_ACCESS_TOKEN,
                "\u8F2A\u64AD\u932F\u8AA4\uFF1A" + err.message
              );
            }
            continue;
          }
          if (text === "\u5F71\u7247") {
            await replyVideoButtons(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN
            );
            continue;
          }
          if (text.startsWith("\u770B\u5F71\u7247 ")) {
            try {
              const keyword = text.replace("\u770B\u5F71\u7247 ", "").trim();
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
                  "\u627E\u4E0D\u5230\u6B64\u5F71\u7247\uFF1A" + keyword
                );
              }
            } catch (err) {
              await replySimple(
                event.replyToken,
                CHANNEL_ACCESS_TOKEN,
                "\u770B\u5F71\u7247\u932F\u8AA4\uFF1A" + err.message
              );
            }
            continue;
          }
          try {
            let sheetProduct = await findProductFromSheet(text, SHEET_ID2, SHEET_NAME);
            if (!sheetProduct) {
              await new Promise((resolve) => setTimeout(resolve, 500));
              sheetProduct = await findProductFromSheet(text, SHEET_ID2, SHEET_NAME);
            }
            if (sheetProduct) {
              await replySheetProduct(
                event.replyToken,
                CHANNEL_ACCESS_TOKEN,
                sheetProduct
              );
              continue;
            }
          } catch (err) {
            await replySimple(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              "\u5546\u54C1\u641C\u5C0B\u932F\u8AA4\uFF1A" + err.message
            );
            continue;
          }
          if (text === "\u5C0F\u5E6B\u624B\u6307\u4EE4") {
            await replyHelperButtons(event.replyToken, CHANNEL_ACCESS_TOKEN);
            continue;
          }
          if (text === "\u641C\u5C0B") {
            await replySimple(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              `\u{1F50D} \u5546\u54C1\u641C\u5C0B\u529F\u80FD

\u76F4\u63A5\u8F38\u5165\u5546\u54C1\u540D\u7A31\u5373\u53EF\u67E5\u8A62`
            );
            continue;
          }
          if (text === "\u9810\u544A" || text === "\u6D3B\u52D5") {
            const data2 = await findNoticeFromSheet(text);
            if (data2) {
              await replyImageText(
                event.replyToken,
                CHANNEL_ACCESS_TOKEN,
                data2.imageUrl,
                data2.message
              );
              continue;
            }
          }
          if (text.startsWith("\u770B\u5F71\u7247")) {
            try {
              const keyword = text.replace("\u770B\u5F71\u7247", "").trim();
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
                  "\u627E\u4E0D\u5230\u6B64\u5F71\u7247\uFF1A" + keyword
                );
              }
            } catch (err) {
              await replySimple(
                event.replyToken,
                CHANNEL_ACCESS_TOKEN,
                "\u770B\u5F71\u7247\u932F\u8AA4\uFF1A" + err.message
              );
            }
          }
          if (text === "\u6297\u98A8\u6674\u96E8\u5098" || text === "\u96E8\u5098") {
            await replyMultiProduct(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              [
                "https://github.com/queena588588-create/line-carousel-bot/blob/main/image.png?raw=true",
                "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/%E9%9B%A8%E5%82%98.jpg"
              ],
              "\u2602\uFE0F \u8D85\u5927\u5098\u9762\u6674\u96E8\u5169\u7528\n\u26A1\u9ED1\u81A0\u9632\u66EC \u8CB7\u4E00\u9001\u4E00 $850"
            );
          }
          if (text === "\u6D17\u8863\u7403" || text === "\u6D17\u8863") {
            await replyMultiProduct(
              event.replyToken,
              CHANNEL_ACCESS_TOKEN,
              [
                "https://github.com/queena588588-create/line-carousel-bot/blob/main/%E6%B4%97%E8%A1%A3%E7%90%83.png?raw=true",
                "https://raw.githubusercontent.com/queena588588-create/line-carousel-bot/refs/heads/main/%E6%B4%97%E8%A1%A3%E7%90%83%E4%BD%BF%E7%94%A8%E6%95%99%E5%AD%B8.jpg"
              ],
              "\u{1F9FA} \u4E09\u6548\u5408\u4E00\u6D17\u8863\u81A0\u7403\n\u{1F340} \u8CB7\u4E00\u9001\u4E00 $777"
            );
          }
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
        text
      }]
    })
  });
}
__name(replySimple, "replySimple");
async function replyMultiProduct(replyToken, token, imageUrls, text) {
  const imageMessages = imageUrls.map((imageUrl) => ({
    type: "image",
    originalContentUrl: imageUrl,
    previewImageUrl: imageUrl
  }));
  const messages = [
    ...imageMessages,
    {
      type: "text",
      text
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
__name(replyMultiProduct, "replyMultiProduct");
async function replyPrivateButton(replyToken, token) {
  const message = {
    type: "flex",
    altText: "\u79C1\u8A0A Queena",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "\u26A1\uFE0E \u5077\u5077\u9EDE\u4E00\u4E0B\uFF0C\u6C92\u4EBA\u6703\u767C\u73FE\u{1F605}",
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
              label: "\u{1F4BB} \u79C1\u8A0A Queena",
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
__name(replyPrivateButton, "replyPrivateButton");
async function replyCarouselFromSheet(replyToken, token) {
  const url = "https://docs.google.com/spreadsheets/d/1c_WxcSIf0z6YuouQRdBtLjGP7Nd_wBu51DSPU1KQiTE/gviz/tq?tqx=out:json&sheet=" + encodeURIComponent("\u8F2A\u64AD\u5C08\u5340");
  const res = await fetch(url);
  const raw = await res.text();
  const data = JSON.parse(raw.substring(raw.indexOf("{"), raw.lastIndexOf("}") + 1));
  const bubbles = (data.table.rows || []).map((row) => ({
    category: String(row.c?.[0]?.v || "").trim(),
    sort: Number(row.c?.[1]?.v || 999),
    image: String(row.c?.[2]?.v || "").trim(),
    title: String(row.c?.[3]?.v || "").trim(),
    desc: String(row.c?.[4]?.v || "").trim(),
    keyword: String(row.c?.[5]?.v || "").trim(),
    video: String(row.c?.[6]?.v || "").trim(),
    show: String(row.c?.[7]?.v || "").trim()
  })).filter((item) => item.category === "\u8CFC\u7269\u8ECA" && item.show === "\u662F").sort((a, b) => a.sort - b.sort).slice(0, 10).map((item) => {
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
            label: "\u524D\u5F80 IG",
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
            label: "\u5546\u54C1\u4ECB\u7D39",
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
          label: "\u89C0\u770B\u5F71\u7247",
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
            text: item.title || "\u672A\u547D\u540D\u5546\u54C1",
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
    await replySimple(replyToken, token, "\u76EE\u524D\u8F2A\u64AD\u5C08\u5340\u6C92\u6709\u8CC7\u6599");
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
        altText: "\u8CFC\u7269\u8ECA\u8F2A\u64AD",
        contents: {
          type: "carousel",
          contents: bubbles
        }
      }]
    })
  });
  if (!lineRes.ok) {
    const errorText = await lineRes.text();
    throw new Error("LINE\u62D2\u7D55\u8F2A\u64AD\uFF1A" + lineRes.status + " " + errorText);
  }
}
__name(replyCarouselFromSheet, "replyCarouselFromSheet");
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
        altText: "\u5C0F\u5E6B\u624B",
        template: {
          type: "buttons",
          title: "\u5C0F\u5E6B\u624B",
          text: "\u8ACB\u9078\u64C7\u529F\u80FD",
          actions: [
            {
              type: "message",
              label: "\u{1F6D2} \u8CFC\u7269\u8ECA",
              text: "\u8CFC\u7269\u8ECA"
            },
            {
              type: "message",
              label: "\u{1F4C2} \u5206\u985E\u901B\u901B",
              text: "\u5206\u985E"
            },
            {
              type: "postback",
              label: "\u{1F69A} \u79C1\u8A0A",
              data: "\u79C1\u8A0A"
            }
          ]
        }
      }]
    })
  });
}
__name(replyHelperButtons, "replyHelperButtons");
async function findProductFromSheet(keyword, SHEET_ID2, SHEET_NAME) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID2}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}`;
  const res = await fetch(url);
  const csv = await res.text();
  const rows = csv.split("\n").map(
    (row) => row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)?.map((cell) => cell.replace(/^"|"$/g, "").trim()) || []
  );
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const sheetKeyword = row[0] || "";
    const photo = row[1] || "";
    const productName = row[2] || "";
    const intro = row[3] || "";
    const buyMethod = row[4] || "";
    if (sheetKeyword.split(",").map((k) => k.trim()).includes(keyword)) {
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
__name(findProductFromSheet, "findProductFromSheet");
async function getCountdownText(productKeyword) {
  const url = "https://docs.google.com/spreadsheets/d/1OtOYLa1ZwYape5BAeC2y1knja2bG3qKJPRqOxNqJVrg/gviz/tq?tqx=out:json&sheet=" + encodeURIComponent("\u7D50\u55AE\u5012\u6578");
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
  const productKeys = String(productKeyword || "").split(",").map((k) => k.trim()).filter(Boolean);
  for (const row of data.table.rows || []) {
    const countdownKeyword = String(row.c?.[0]?.v || "").trim();
    const displayName = String(row.c?.[1]?.v || countdownKeyword).trim();
    const deadlineText = String(
      row.c?.[2]?.f || row.c?.[2]?.v || ""
    ).trim();
    const closingText = String(row.c?.[3]?.v || "").trim();
    const show = String(row.c?.[4]?.v || "").trim();
    if (show !== "\u662F" || !countdownKeyword || !deadlineText) {
      continue;
    }
    const matched = productKeys.includes(countdownKeyword) || productKeys.some(
      (k) => k.includes(countdownKeyword) || countdownKeyword.includes(k)
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
    const deadline = /* @__PURE__ */ new Date(
      `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${minute}:00+08:00`
    );
    const remainingMs = deadline.getTime() - Date.now();
    if (remainingMs <= 0) {
      return `\u23F0 ${displayName}\u5DF2\u7D50\u55AE${closingText ? "\n\n" + closingText : ""}`;
    }
    const totalMinutes = Math.floor(remainingMs / 6e4);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor(totalMinutes % 1440 / 60);
    const minutes = totalMinutes % 60;
    const parts = [];
    if (days > 0) parts.push(`${days}\u5929`);
    if (hours > 0) parts.push(`${hours}\u5C0F\u6642`);
    parts.push(`${minutes}\u5206\u9418`);
    return `\u{1F4E2} ${displayName}\u6536\u55AE\u5012\u6578\u203C\uFE0F\u203C\uFE0F

\u53EA\u5269\u{1F6A8} ${parts.join("")}\uFF0C\u{1F198}\u7CFB\u7D71\u5373\u5C07\u95DC\u55AE\uFF0C\u903E\u671F\u4E0D\u5019\u203C\uFE0F${closingText ? "\n\n" + closingText : ""}`;
  }
  return "";
}
__name(getCountdownText, "getCountdownText");
async function replySheetProduct(replyToken, token, product) {
  const text = `\u{1F6D2} ${product.productName}

${product.intro}

${product.buyMethod || "\u{1F6D2}\u8CFC\u8CB7\u8ACB\u7559\u8A00+1\u6216\u2714\uFE0F\u79C1\u8A0AQueena"}`;
  const messages = [];
  const countdownText = await getCountdownText(
    product.keyword || product.productName
  );
  if (product.photo) {
    const photos = product.photo.split(",").map((url) => url.trim()).filter((url) => url.startsWith("http"));
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
__name(replySheetProduct, "replySheetProduct");
async function readSheetCsv(sheetName) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  const res = await fetch(url);
  const csv = await res.text();
  return csv.split("\n").map(
    (row) => row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)?.map((cell) => cell.replace(/^"|"$/g, "").trim()) || []
  );
}
__name(readSheetCsv, "readSheetCsv");
async function findNoticeFromSheet(command) {
  const rows = await readSheetCsv("\u9810\u544A");
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
__name(findNoticeFromSheet, "findNoticeFromSheet");
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
__name(replyImageText, "replyImageText");
async function replyVideoInfo(replyToken, token, videoData) {
  const messages = [];
  if (videoData.imageUrl) {
    messages.push({
      type: "image",
      originalContentUrl: videoData.imageUrl,
      previewImageUrl: videoData.imageUrl
    });
  }
  const videoText = videoData.videoUrl ? "\n\n\u89C0\u770B\u5F71\u7247\uFF1A\n" + videoData.videoUrl : "";
  messages.push({
    type: "text",
    text: "\u{1F3AC} " + videoData.title + "\n\n" + (videoData.videoIntro || "\u9EDE\u6211\u770B\u4F7F\u7528\u5206\u4EAB") + videoText
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
__name(replyVideoInfo, "replyVideoInfo");
async function findVideoSafe(keyword) {
  const url = "https://docs.google.com/spreadsheets/d/1Invheigi_6zJCZTeITb5KaiezsUSPdcuEMsTogQ4Ijs/gviz/tq?tqx=out:json&sheet=" + encodeURIComponent("\u5546\u54C1\u8CC7\u6599\u5EAB");
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("\u5546\u54C1\u8CC7\u6599\u5EAB\u8B80\u53D6\u5931\u6557\uFF1A" + res.status);
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
    const keys = sheetKeyword.split(",").map((k) => k.trim()).filter(Boolean);
    const matched = keys.includes(target) || keys.some((k) => target.includes(k) || k.includes(target)) || title === target;
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
__name(findVideoSafe, "findVideoSafe");
async function replyVideoButtons(replyToken, token) {
  const url = "https://docs.google.com/spreadsheets/d/1Invheigi_6zJCZTeITb5KaiezsUSPdcuEMsTogQ4Ijs/gviz/tq?tqx=out:json&sheet=" + encodeURIComponent("\u5546\u54C1\u8CC7\u6599\u5EAB");
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("\u8A66\u7B97\u8868\u8B80\u53D6\u5931\u6557\uFF1A" + res.status);
  }
  const raw = await res.text();
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  const data = JSON.parse(raw.slice(start, end + 1));
  const items = (data.table.rows || []).map((row) => {
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
  }).filter((item) => item.keyword && item.videoUrl.startsWith("http") && item.videoShow === "\u662F").slice(0, 12);
  if (items.length === 0) {
    await replySimple(replyToken, token, "\u76EE\u524D\u6C92\u6709\u8A2D\u5B9A\u5546\u54C1\u5F71\u7247");
    return;
  }
  const itemRows = items.map((item) => ({
    type: "box",
    layout: "horizontal",
    spacing: "sm",
    margin: "md",
    action: {
      type: "message",
      label: item.title.slice(0, 20),
      text: "\u770B\u5F71\u7247 " + String(item.keyword || "").split(",")[0].trim()
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
            text: "\u{1F3AC} \u9EDE\u6211\u770B\u5F71\u7247",
            size: "xs",
            color: "#7B1FA2",
            weight: "bold",
            margin: "xs"
          },
          {
            type: "text",
            text: item.videoIntro || "\u4F7F\u7528\u5206\u4EAB\uFF5C\u5546\u54C1\u4ECB\u7D39\uFF5C\u5BE6\u62CD\u5F71\u7247",
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
        altText: "\u5546\u54C1\u5F71\u7247\u5C08\u5340",
        contents: {
          type: "bubble",
          body: {
            type: "box",
            layout: "vertical",
            spacing: "xs",
            contents: [
              {
                type: "text",
                text: "\u{1F3AC} \u5546\u54C1\u5F71\u7247\u5C08\u5340",
                weight: "bold",
                size: "lg",
                color: "#333333"
              },
              {
                type: "text",
                text: "\u9EDE\u9078\u60F3\u770B\u7684\u5F71\u7247",
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
__name(replyVideoButtons, "replyVideoButtons");
async function replySmartFlex(replyToken, token) {
  const url = "https://docs.google.com/spreadsheets/d/1Invheigi_6zJCZTeITb5KaiezsUSPdcuEMsTogQ4Ijs/gviz/tq?tqx=out:json&sheet=" + encodeURIComponent("\u5546\u54C1\u8CC7\u6599\u5EAB");
  const res = await fetch(url);
  const raw = await res.text();
  const jsonText = raw.substring(raw.indexOf("{"), raw.lastIndexOf("}") + 1);
  const data = JSON.parse(jsonText);
  const items = (data.table.rows || []).map((row) => ({
    label: String(row.c?.[0]?.v || "").trim(),
    keyword: String(row.c?.[0]?.v || "").trim(),
    show: String(row.c?.[6]?.v || "").trim()
  })).filter((item) => item.label && item.show === "\u662F").slice(0, 8);
  const allItems = [
    ...items,
    { label: "\u{1F50D} \u641C\u5C0B\u5546\u54C1", keyword: "\u641C\u5C0B" }
  ];
  const rows = [];
  for (let i = 0; i < allItems.length; i += 1) {
    const rowItems = allItems.slice(i, i + 1);
    rows.push({
      type: "box",
      layout: "horizontal",
      spacing: "xs",
      margin: "xs",
      contents: rowItems.map((item) => ({
        type: "box",
        layout: "vertical",
        flex: 1,
        backgroundColor: "#F0F2F5",
        cornerRadius: "md",
        paddingAll: "sm",
        action: {
          type: "message",
          label: String(item.label || "").split(",")[0].trim().slice(0, 20),
          text: String(item.keyword || "").split(",")[0].trim()
        },
        contents: [
          {
            type: "text",
            text: String(item.label || "").split(",")[0].trim(),
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
        altText: "\u5546\u54C1\u9078\u55AE",
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
                text: "\u{1F6D2} \u8070\u660E\u6316\u5BF6\u8DA3",
                weight: "bold",
                size: "lg"
              },
              {
                type: "text",
                text: "\u9EDE\u9078\u5206\u985E \u67E5\u770B\u5546\u54C1",
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
__name(replySmartFlex, "replySmartFlex");
async function replyClosingFlexList(replyToken, token) {
  const url = "https://docs.google.com/spreadsheets/d/1OtOYLa1ZwYape5BAeC2y1knja2bG3qKJPRqOxNqJVrg/gviz/tq?tqx=out:json&sheet=" + encodeURIComponent("\u7D50\u55AE\u5012\u6578");
  const res = await fetch(url);
  const raw = await res.text();
  const jsonText = raw.substring(raw.indexOf("{"), raw.lastIndexOf("}") + 1);
  const data = JSON.parse(jsonText);
  const now = Date.now();
  const items = (data.table.rows || []).map((row) => {
    const keyword = String(row.c?.[0]?.v || "").trim();
    const displayName = String(row.c?.[1]?.v || keyword).trim();
    const deadlineText = String(row.c?.[2]?.f || row.c?.[2]?.v || "").trim();
    const closingText = String(row.c?.[3]?.v || "").trim();
    const show = String(row.c?.[4]?.v || "").trim();
    const imageUrl = String(row.c?.[5]?.v || "").trim();
    if (show !== "\u662F") return null;
    const match = deadlineText.match(/(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2}).*?(\d{1,2}):(\d{2})/);
    if (!match) return null;
    const [, year, month, day, hour, minute] = match;
    const deadline = /* @__PURE__ */ new Date(
      `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${minute}:00+08:00`
    );
    const remainingMs = deadline.getTime() - now;
    const totalMinutes = Math.floor(remainingMs / 6e4);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor(totalMinutes % 1440 / 60);
    const minutes = totalMinutes % 60;
    let timeText = "";
    if (remainingMs <= 0) {
      timeText = "\u5DF2\u7D50\u55AE";
    } else {
      const parts = [];
      if (days > 0) parts.push(`${days}\u5929`);
      if (hours > 0) parts.push(`${hours}\u5C0F\u6642`);
      parts.push(`${minutes}\u5206\u9418`);
      timeText = `\u5269 ${parts.join("")}`;
    }
    return {
      displayName,
      closingText,
      imageUrl,
      deadline,
      timeText,
      keyword
    };
  }).filter(Boolean).sort((a, b) => a.deadline - b.deadline).slice(0, 6);
  if (false) {
    await replySimple(replyToken, token, "\u76EE\u524D\u6C92\u6709\u8A2D\u5B9A\u5373\u5C07\u7D50\u55AE\u5546\u54C1");
    return;
  }
  const itemRows = [
    ...items,
    { displayName: "\u{1F50D} \u641C\u5C0B\u5546\u54C1", keyword: "\u641C\u5C0B" }
  ].map((item) => ({
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
            text: "\u23F0 " + item.timeText,
            size: "xs",
            color: "#D32F2F",
            weight: "bold",
            margin: "xs"
          },
          {
            type: "text",
            text: item.closingText || "\u60F3\u8981\u7684\u5FEB\u7559\u8A00\uFF0B1",
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
        altText: "\u6700\u8FD1\u7D50\u55AE\u6E05\u55AE",
        contents: {
          type: "bubble",
          body: {
            type: "box",
            layout: "vertical",
            spacing: "xs",
            contents: [
              {
                type: "text",
                text: "\u23F0 \u6700\u8FD1\u7D50\u55AE\u6E05\u55AE",
                weight: "bold",
                size: "lg",
                color: "#333333"
              },
              {
                type: "text",
                text: "\u{1F451} Queena \u79C1\u5FC3\u63A8\u85A6 \u{1F4A5}\u903E\u671F\u4E0D\u5019",
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
__name(replyClosingFlexList, "replyClosingFlexList");
async function getProductCategoryItems(sheetId, sheetName) {
  const url = "https://docs.google.com/spreadsheets/d/" + sheetId + "/gviz/tq?tqx=out:json&sheet=" + encodeURIComponent(sheetName);
  const res = await fetch(url);
  const text = await res.text();
  const jsonText = text.substring(
    text.indexOf("{"),
    text.lastIndexOf("}") + 1
  );
  const data = JSON.parse(jsonText);
  const rows = data.table?.rows || [];
  return rows.map((row) => {
    const c = row.c || [];
    const keyword = String(c[0]?.v || "").trim();
    const productName = String(c[2]?.v || "").trim();
    const category = String(c[9]?.v || "").trim();
    const isMain = String(c[10]?.v || "").trim();
    const sort = Number(c[11]?.v || 999);
    const firstKeyword = keyword.split(",")[0].split("\uFF0C")[0].trim();
    return {
      keyword,
      firstKeyword: firstKeyword || productName,
      productName,
      category,
      isMain,
      sort
    };
  }).filter((item) => item.keyword && item.productName);
}
__name(getProductCategoryItems, "getProductCategoryItems");
async function replyQuickButtons(replyToken, token, text, buttons) {
  const rows = [];
  for (let i = 0; i < buttons.length; i += 2) {
    const rowButtons = buttons.slice(i, i + 2).map((btn) => ({
      type: "button",
      style: "primary",
      height: "sm",
      action: {
        type: "message",
        label: String(btn.label).slice(0, 20),
        text: String(btn.text)
      }
    }));
    rows.push({
      type: "box",
      layout: "horizontal",
      spacing: "sm",
      contents: rowButtons
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
      messages: [
        {
          type: "flex",
          altText: "\u5546\u54C1\u5206\u985E",
          contents: {
            type: "bubble",
            size: "mega",
            body: {
              type: "box",
              layout: "vertical",
              spacing: "md",
              contents: [
                {
                  type: "text",
                  text,
                  weight: "bold",
                  size: "md",
                  wrap: true
                },
                {
                  type: "separator",
                  margin: "md"
                },
                ...rows
              ]
            }
          }
        }
      ]
    })
  });
}
__name(replyQuickButtons, "replyQuickButtons");
async function replyProductCategoryHome(replyToken, token, sheetId, sheetName) {
  const products = await getProductCategoryItems(sheetId, sheetName);
  const categories = [
    { label: "\u{1F484} \u4FDD\u990A\u7F8E\u599D", text: "\u4FDD\u990A\u7F8E\u599D" },
    { label: "\u{1F4AA} \u71DF\u990A\u4FDD\u5065", text: "\u71DF\u990A\u4FDD\u5065" },
    { label: "\u{1F3E0} \u5C45\u5BB6\u751F\u6D3B", text: "\u5C45\u5BB6\u751F\u6D3B" },
    { label: "\u{1F357} \u751F\u9BAE\u7F8E\u98DF", text: "\u751F\u9BAE\u7F8E\u98DF" },
    { label: "\u{1F4F1} 3C", text: "3C" },
    { label: "\u{1F455} \u670D\u98FE", text: "\u670D\u98FE" },
    { label: "\u{1F338} \u9999\u6C1B\u7F8E\u5B78", text: "\u9999\u6C1B\u7F8E\u5B78" }
  ];
  const mainProducts = products.filter((item) => item.isMain === "\u662F").sort((a, b) => a.sort - b.sort).slice(0, 6);
  const buttons = [
    ...categories,
    { label: "\u{1F3AC} \u5F71\u7247\u5C08\u5340", text: "\u5F71\u7247" },
    { label: "\u{1F50D} \u641C\u5C0B\u5546\u54C1", text: "\u641C\u5C0B" },
    ...mainProducts.map((item) => ({
      label: item.productName,
      text: item.firstKeyword
    }))
  ];
  const mainText = mainProducts.length ? mainProducts.map((item) => "\u30FB" + item.productName).join("\n") : "\u76EE\u524D\u5C1A\u672A\u8A2D\u5B9A\u4E3B\u6253\u5546\u54C1";
  const msg = "\u{1F4C2} \u5206\u985E\u901B\u901B\n\u9EDE\u9078\u5206\u985E \u67E5\u770B\u5546\u54C1\u{1F440}\n\n\u{1F380} \u7CBE\u9078\n" + mainText;
  await replyQuickButtons(replyToken, token, msg, buttons);
}
__name(replyProductCategoryHome, "replyProductCategoryHome");
async function replyProductCategoryList(replyToken, token, sheetId, sheetName, category, page = 1) {
  const products = await getProductCategoryItems(sheetId, sheetName);
  const pageSize = 8;
  const list = products.filter((item) => item.category === category).sort((a, b) => a.sort - b.sort);
  if (list.length === 0) {
    await replySimple(
      replyToken,
      token,
      "\u76EE\u524D\u300C" + category + "\u300D\u5206\u985E\u9084\u6C92\u6709\u5546\u54C1\u3002"
    );
    return;
  }
  const totalPages = Math.ceil(list.length / pageSize);
  const safePage = Math.min(Math.max(page, 1), totalPages);
  const start = (safePage - 1) * pageSize;
  const pageItems = list.slice(start, start + pageSize);
  const buttons = pageItems.map((item) => ({
    label: item.productName,
    text: item.firstKeyword
  }));
  if (safePage > 1) {
    buttons.push({
      label: "\u4E0A\u4E00\u9801",
      text: category + (safePage - 1)
    });
  }
  if (safePage < totalPages) {
    buttons.push({
      label: "\u4E0B\u4E00\u9801",
      text: category + (safePage + 1)
    });
  }
  const productText = pageItems.map((item, index) => start + index + 1 + ". " + item.productName).join("\n");
  const msg = "\u{1F4C2} " + category + "\u5206\u985E" + (totalPages > 1 ? " \u7B2C " + safePage + "/" + totalPages + " \u9801" : "") + "\n\n\u8ACB\u9EDE\u4E0B\u65B9\u5546\u54C1\u67E5\u770B\u4ECB\u7D39\uFF1A\n\n" + productText;
  await replyQuickButtons(replyToken, token, msg, buttons);
}
__name(replyProductCategoryList, "replyProductCategoryList");
async function replyUvOnly(replyToken, token, env) {
  if (!env || !env.CWA_API_KEY) {
    await replySimple(replyToken, token, "\u7D2B\u5916\u7DDA\u67E5\u8A62\u5931\u6557\uFF1ACWA_API_KEY \u5C1A\u672A\u8A2D\u5B9A");
    return;
  }
  const url = "https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=" + encodeURIComponent(env.CWA_API_KEY) + "&format=JSON";
  const res = await fetch(url);
  const data = await res.json();
  const stations = data.records?.Station || [];
  const areas = [
    { label: "\u5317\u90E8\uFF5C\u53F0\u5317", id: "466920", names: ["\u81FA\u5317", "\u53F0\u5317"] },
    { label: "\u4E2D\u90E8\uFF5C\u53F0\u4E2D", id: "467490", names: ["\u81FA\u4E2D", "\u53F0\u4E2D", "\u81FA\u4E2D\u5E02", "\u53F0\u4E2D\u5E02", "\u68A7\u68F2"] },
    { label: "\u5357\u90E8\uFF5C\u9AD8\u96C4", id: "467440", names: ["\u9AD8\u96C4"] }
  ];
  function uvLevel(n) {
    n = Number(n);
    if (isNaN(n)) return "\u5C1A\u672A\u6293\u5230\u8CC7\u6599";
    if (n <= 2) return "\u4F4E\u91CF\u7D1A \u2600\u7D2B\u5916\u7DDA\u8F03\u4F4E";
    if (n <= 5) return "\u4E2D\u91CF\u7D1A \u{1F4A7}\u66EC\u9ED1";
    if (n <= 7) return "\u9AD8\u91CF\u7D1A \u{1F321}\uFE0F\u66EC\u50B7";
    if (n <= 10) return "\u904E\u91CF\u7D1A \u26A0\uFE0F\u66EC\u50B7 \u8001\u5316";
    return "\u5371\u96AA\u7D1A \u{1F6A8}\u975E\u5E38\u6BD2";
  }
  __name(uvLevel, "uvLevel");
  function uvAdvice(n) {
    n = Number(n);
    if (isNaN(n)) return "";
    if (n <= 2) return "\u{1F495}\uFF1A\u{1F324}\uFE0F \u7D2B\u5916\u7DDA\u8F03\u4F4E\uFF0C\u9752\u6625\u9632\u66EC\u8A18\u5F97\u64E6";
    if (n <= 5) return "\u{1F495}\uFF1A\u{1F9F4} \u9752\u6625\u9632\u66EC\u8A18\u5F97\u64E6\uFF0C\u9069\u6642\u88DC\u6C34\u6216\u8292\u679C\u8336";
    return "";
  }
  __name(uvAdvice, "uvAdvice");
  function getUv(area) {
    const station = stations.find((s) => {
      const stationId = String(s.StationId || s.stationId || s.StationID || "");
      const stationName = String(s.StationName || s.stationName || s.StationNameZh || "");
      const countyName = String(s.GeoInfo?.CountyName || s.geoInfo?.countyName || "");
      return stationId === area.id || area.names.some(
        (name) => stationName.includes(name) || countyName.includes(name)
      );
    });
    if (!station) return null;
    const w = station.WeatherElement || {};
    const uv = w.UVIndex ?? w.UVI ?? station.UVIndex ?? station.UVI;
    const n = Number(uv);
    if (isNaN(n) || n < 0) return null;
    return n;
  }
  __name(getUv, "getUv");
  const uvValues = [];
  const blocks = areas.map((area) => {
    const uv = getUv(area);
    const advice = uvAdvice(uv);
    if (uv !== null) uvValues.push(uv);
    return area.label + "\n\u76EE\u524D\uFF1A" + (uv === null ? "-" : uv) + " " + uvLevel(uv) + (advice ? "\n" + advice : "");
  });
  const maxUv = uvValues.length ? Math.max(...uvValues) : 0;
  const msg = "\u26F1\uFE0F \u76EE\u524D\u7D2B\u5916\u7DDA\u6307\u6578\n\n" + blocks.join("\n\n") + (maxUv >= 6 ? "\n\n\u2500\u2500 \u{1F495} \u8CBC\u5FC3\u63D0\u9192 \u2500\u2500\n\u{1F9F4} \u64E6\u9752\u6625\u9632\u66EC\uFF0B\u88DC\u6C34\u6216\u8292\u679C\u8336\n\u{1F452} \u5E3D\u5B50\uFF0F\u967D\u5098\uFF0F\u51B0\u51B0\u8863\n\u{1F319} \u665A\u4E0A\u8A18\u5F97\u539A\u6577\u5E73\u6CF0\u79C0" : "");
  await replySimple(replyToken, token, msg);
}
__name(replyUvOnly, "replyUvOnly");
async function replyMorningWeather(replyToken, token, env) {
  if (!env || !env.CWA_API_KEY) {
    await replySimple(replyToken, token, "即時天氣查詢失敗：CWA_API_KEY 尚未設定");
    return;
  }

  const url =
    "https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001" +
    "?Authorization=" + encodeURIComponent(env.CWA_API_KEY) +
    "&format=JSON";

  const res = await fetch(url);
  const data = await res.json();
  const stations = data.records?.Station || [];

  const areas = [
{ label: "北部｜台北", id: "466930", names: ["板橋", "新北", "臺北", "台北"] },
    { label: "中部｜台中", id: "467490", names: ["臺中", "台中", "梧棲"] },
{ label: "南部｜高雄", id: "高雄" }
  ];

  function uvLevel(n) {
    n = Number(n);
    if (isNaN(n)) return "尚未抓到資料";
    if (n <= 2) return "低量級 ☀️紫外線較低";
    if (n <= 5) return "中量級 💧曬黑";
    if (n <= 7) return "高量級 🌡️曬傷";
    if (n <= 10) return "過量級 ⚠️曬傷 老化";
    return "危險級 🚨非常毒";
  }

  function findStation(area) {
    return stations.find(s => {
      const stationId = String(s.StationId || s.stationId || s.StationID || "");
      const stationName = String(s.StationName || s.stationName || s.StationNameZh || "");
      const countyName = String(s.GeoInfo?.CountyName || s.geoInfo?.CountyName || "");
      return stationId === area.id || area.names.some(name => stationName.includes(name) || countyName.includes(name));
    });
  }

  const blocks = areas.map(area => {
    const s = findStation(area);
    if (!s) {
      return area.label + "\n目前溫度：尚未抓到資料";
    }

    const w = s.WeatherElement || {};
    const temp = w.AirTemperature ?? w.airTemperature ?? "-";
    const uv = w.UVIndex ?? w.UVI ?? s.UVIndex ?? s.UVI ?? "-";
    const showTemp = Number(temp) <= -90 ? "暫無資料" : temp + "°C";
const showUv = Number(uv) <= -90 ? "暫無資料" : uv + " " + uvLevel(uv);

   return area.label + "\n" +
  "目前溫度：" + showTemp;
  });

  const msg =
    "👑 Queena 即時天氣\n\n" +
    blocks.join("\n\n") +
    "\n\n. . .💕 貼心提醒 . . .\n" +
    "🧴擦 青春防曬＋補水 芒果茶\n" +
    "👒 帽子／陽傘／冰冰衣";

  await replySimple(replyToken, token, msg);
}
__name(replyMorningWeather, "replyMorningWeather");
async function replyWeatherSummary(replyToken, token, env) {
  if (!env || !env.CWA_API_KEY) {
    await replySimple(replyToken, token, "天氣速報功能尚未設定完成");
    return;
  }

  const url =
    "https://opendata.cwa.gov.tw/api/v1/rest/datastore/O-A0003-001" +
    "?Authorization=" + encodeURIComponent(env.CWA_API_KEY) +
    "&format=JSON";

  const res = await fetch(url);
  const data = await res.json();
  const stations = data.records?.Station || [];

  const areas = [
    { label: "北部｜台北", id: "466930" },
    { label: "中部｜台中", id: "467490" },
{ label: "南部｜高雄", id: "467441" }
  ];

  const blocks = areas.map(area => {
   const s = stations.find(x =>
  String(x.StationId || x.stationId || "") === area.id
);

    if (!s) return `${area.label}｜尚未抓到資料`;

    const w = s.WeatherElement || {};
    const temp = w.AirTemperature ?? w.airTemperature ?? "--";

    return `${area.label} ${temp}°C`;
  });

  await replySimple(
    replyToken,
    token,
    `🌤 目前氣溫\n\n${blocks.join("\n")}\n\n輸入「紫外線」查看即時指數`
  );
}
async function replyCuteHome(replyToken, token) {
  const message = {
  type: "imagemap",
  baseUrl: "https://line-carousel-bot.queena-588-588.workers.dev/menu-v3",
  altText: "👑Queena 不踩雷指南",
  baseSize: {
  width: 1040,
  height: 1200
},
  actions: [
      {
        type: "message",
        text: "\u8CFC\u7269\u8ECA",
       area: { x: 0, y: 430, width: 520, height: 180 }
      },
      {
        type: "message",
        text: "\u5206\u985E",
       area: { x: 520, y: 430, width: 520, height: 180 }
      },
      {
        type: "message",
        text: "\u5F71\u7247",
        area: { x: 0, y: 630, width: 520, height: 180 }
      },
      {
        type: "message",
        text: "\u641C\u5C0B",
        area: { x: 520, y: 630, width: 520, height: 180 }
      },
      {
        type: "message",
text: "天氣速報",
        area: { x: 0, y: 830, width: 520, height: 180 }
      },
      {
        type: "message",
        text: "\u7D2B\u5916\u7DDA",
        area: { x: 520, y: 830, width: 520, height: 180 }
      },
      {
        type: "message",
        text: "\u79C1\u8A0A",
        area: { x: 0, y: 1020, width: 1040, height: 160 }
      }
    ]
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

__name(replyCuteHome, "replyCuteHome");
export {
  index_default as default
};

//# sourceMappingURL=index.js.map
