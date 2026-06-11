export default {
async fetch(request) {
if (request.method === "GET") {
return new Response("OK");
}

```
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
```

},
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
"方便料理，加熱就能享用",
"https://picsum.photos/600/600?4",
"https://www.google.com"
),
productCard(
"櫻桃",
"夏季限定，香甜多汁",
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
{ type: "text", text: title, weight: "bold", size: "xl" },
{ type: "text", text: desc, size: "sm", color: "#666666", wrap: true }
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
