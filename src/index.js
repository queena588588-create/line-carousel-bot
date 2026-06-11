export default {
  async fetch(request) {
    if (request.method === "GET") {
      return new Response("OK");
    }

    const CHANNEL_ACCESS_TOKEN = "71ojqWmnCBOYIBy4LPI9NIzzTirEezV/44SilTysrV5iUIJtQvgcLt91wnJ74W6xVUTromiUDFUTChaU0qKZNsS88B7ZOj1XpN+CCaFHoD6PQSLNC1gWnqoFEOjH1RnJygV8yqZtQ32EXITztTYARQdB04t89/1O/w1cDnyilFU=";

    const body = await request.json();

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
  },
};

async function replyCarousel(replyToken, token) {
  const message = {
    type: "flex",
    altText: "Queena 購物清單",
    contents: {
      type: "carousel",
      contents: [
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://img.shop.com/Image/240000/246200/246296/skualt/6164914.jpg?plain&size=800x800",
            size: "full",
            aspectRatio: "1:1",
            aspectMode: "cover"
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              { type: "text", text: "仙女霜", weight: "bold", size: "xl" },
              { type: "text", text: "日常保養推薦 All in one", size: "sm", color: "#666666", wrap: true }
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
                  type: "message",
                  label: "我要了解",
                  text: "我要了解仙女霜"

              }
            ]
          }
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://img.shop.com/Image/240000/246200/246290/products/895882809.jpg?plain&size=1600x1600",
            size: "full",
            aspectRatio: "1:1",
            aspectMode: "cover"
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              { type: "text", text: "超好用防曬", weight: "bold", size: "xl" },
              { type: "text", text: "不油不悶", size: "sm", color: "#666666", wrap: true }
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
                  type: "message",
                  label: "我要了解",
                  text: "我要了解好用防曬"
                }
              }
            ]
          }
        },
        {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://picsum.photos/600/600?3",
            size: "full",
            aspectRatio: "1:1",
            aspectMode: "cover"
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              { type: "text", text: "6D 枕頭", weight: "bold", size: "xl" },
              { type: "text", text: "睡眠好物推薦", size: "sm", color: "#666666", wrap: true }
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
                  type: "message",
                  label: "我要了解",
                  text: "我要了解6D枕頭"
                }
              }
            ]
          }
        }
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
