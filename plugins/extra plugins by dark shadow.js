const data = require("xvideos-dl");
cmd({pattern: "x", alias: ["xvideodl", "xvideos", "xvideo"], react: "🔞", desc: "Download x videos", category: "download", use: ".x <url>", filename: __filename}, async (_0x1ba1e9, _0x4233ca, _0x47810c, {from: _0x5d78e2, l: _0x3933ab, quoted: _0x166ffc, body: _0x46887a, isCmd: _0x5e512c, command: _0x261299, args: _0x239327, q: _0x3d2288, isGroup: _0x519090, sender: _0x3690bf, senderNumber: _0x15680d, botNumber2: _0x1e6c33, botNumber: _0x1132ac, pushname: _0x507a30, isMe: _0x30ec30, isOwner: _0x5524a7, groupMetadata: _0x128828, groupName: _0x2372cd, participants: _0x17f0ad, groupAdmins: _0x10cc9d, isBotAdmins: _0x287c04, isAdmins: _0x155e72, reply: _0x1c716b}) => {
  if (!_0x3d2288) {
    return _0x1c716b("*Please give me a Query*\n*eg:- .x fuck*");
  }
  _0x1c716b("*පොඩ්ඩක් ඉදපන් උබේ වැ# downloading 😋");
  let _0x22e9d1 = await data.searchVideo({search: "" + _0x3d2288, sort: "relevance", pagination: 1});
  await _0x1ba1e9.sendMessage(_0x5d78e2, {react: {text: "⬇️", key: _0x4233ca.key}});
  const _0x5b90f3 = Math.floor(Math.random() * _0x22e9d1.length);
  const _0x3025c0 = _0x22e9d1[_0x5b90f3];
  let _0x577fda = await data.getVideoData({proxy: true, videoUrl: _0x3025c0.video});
  await _0x1ba1e9.sendMessage(_0x5d78e2, {react: {text: "⬆️", key: _0x4233ca.key}});
  const _0x2743cc = await _0x1ba1e9.sendMessage(_0x5d78e2, {video: {url: _0x577fda.contentUrl}, caption: "_" + _0x577fda.name + "_\Noty බොටා 🌝"}, {quoted: _0x4233ca});
  await _0x1ba1e9.sendMessage(_0x5d78e2, {react: {text: "🔞", key: _0x2743cc.key}});
  await _0x1ba1e9.sendMessage(_0x5d78e2, {react: {text: "✅", key: _0x4233ca.key}});
});
cmd({pattern: "ig", alias: ["igdl", "instagram"], react: "🔖", desc: "Download instagram videos and photos", category: "download", use: ".ig <url>", filename: __filename}, async (_0x1bdc9e, _0x4ebe82, _0x198559, {from: _0x363cc2, l: _0x1f2c07, quoted: _0x313ee4, body: _0x41cadd, isCmd: _0x8b5f40, command: _0x498a21, args: _0x97c89b, q: _0x3f8ebc, isGroup: _0x525ac6, sender: _0x5cc914, senderNumber: _0x2407ba, botNumber2: _0x4210c3, botNumber: _0xed4423, pushname: _0xf355ef, isMe: _0x3518a5, isOwner: _0x4c97e6, groupMetadata: _0x1b9a67, groupName: _0x38fdc2, participants: _0x1ccbdb, groupAdmins: _0x2af51e, isBotAdmins: _0x17da22, isAdmins: _0x5c9c8a, reply: _0x5c494c}) => {
  try {
    if (!_0x3f8ebc) {
      return _0x5c494c("*Please give me a Intragram url*");
    }
    let _0x7b21e6 = await fetchJson("https://vihangayt.me/download/instagram?url=" + _0x3f8ebc);
    let _0x15fcab = _0x7b21e6.data.data[0].url;
    let _0x3e0521 = _0x7b21e6.data.data[0].type;
    let _0x5b3c9e = await getBuffer(_0x15fcab);
    if (_0x3e0521 === "video") {
      await _0x1bdc9e.sendMessage(_0x363cc2, {video: _0x5b3c9e, caption: "ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴊᴀɴɪʏᴀ 🌝"}, {quoted: _0x4ebe82});
    } else if (_0x3e0521 === "image") {
      await _0x1bdc9e.sendMessage(_0x363cc2, {image: _0x5b3c9e, caption: "ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴊᴀɴɪʏᴀ 🌝"}, {quoted: _0x4ebe82});
    }
  } catch (_0x2baab5) {
    _0x5c494c("" + _0x2baab5);
    _0x1f2c07(_0x2baab5);
  }
});
cmd({pattern: "fmmods", alias: ["fmmod", "wamod"], react: "🪀", desc: "Download fouad whatsapp", category: "download", use: ".fmmods", filename: __filename}, async (_0x28429c, _0x547077, _0x4fb5c2, {from: _0x22fef4, l: _0x16a31f, quoted: _0x1aa4d0, body: _0x335513, isCmd: _0x3587c9, command: _0x23e22c, args: _0x106cb6, q: _0x5e4803, isGroup: _0x233cc8, sender: _0x68c238, senderNumber: _0x39d5a, botNumber2: _0xd21328, botNumber: _0x4a8109, pushname: _0x2084be, isMe: _0x18ebd6, isOwner: _0x392405, groupMetadata: _0x4d85c8, groupName: _0x488491, participants: _0x1631fc, groupAdmins: _0x25c510, isBotAdmins: _0x50e770, isAdmins: _0x12eb14, reply: _0x3664ad}) => {
  await _0x28429c.sendMessage(_0x22fef4, {image: {url: "https://static.republika.co.id/uploads/member/images/news/bkbcutlj9d.jpg"}, caption: "\n───────────────────\n*🪀 JANIYA V 2.0 WHATSAPP MOD DOWNLOADER*\n───────────────────\n\n*_🔢 Reply the number you want to select_*\n\n─────────────────\n*1.1 WHATSAPP*\n*1.2 FM WHATSAPP*\n*1.3 GB WHATSAPP*\n*1.4 YO WHATSAPP*\n─────────────────\n\nɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴊᴀɴɪʏᴀ 🌝\n"}, {quoted: _0x547077});
});
cmd({on: "body"}, async (_0x29ec83, _0x14a932, _0x260233, {from: _0xf16d8a, l: _0x33764b, quoted: _0x200136, body: _0x2973ff, isCmd: _0x473045, command: _0x376349, args: _0x4ea1b7, q: _0x106b27, isGroup: _0x1c74c1, sender: _0x5d8b22, senderNumber: _0x29540d, botNumber2: _0x405969, botNumber: _0x14a572, pushname: _0x5ba824, isMe: _0x2d6942, isOwner: _0x253489, groupMetadata: _0x164810, groupName: _0x3cc2c1, participants: _0x2cc0bc, groupAdmins: _0x3d2b59, isBotAdmins: _0x939661, isAdmins: _0x2eebae, reply: _0x700a84}) => {
  try {
    if (_0x2973ff === "1.1") {
      if (!_0x260233.quoted) {
        return;
      }
      if (_0x260233.quoted.sender !== _0x405969) {
        return;
      }
      if (_0x260233.quoted.videoMessage) {
        return;
      }
      if (_0x260233.quoted.documentMessage) {
        return;
      }
      if (_0x260233.quoted.stickerMessage) {
        return;
      }
      if (_0x260233.quoted.audioMessage) {
        return;
      }
      if (!_0x260233.quoted.imageMessage) {
        return;
      }
      if (_0x260233.quoted.imageMessage.caption.includes("*🪀 JANIYA V 2.0 WHATSAPP MOD DOWNLOADER*")) {
        await _0x29ec83.sendMessage(_0xf16d8a, {react: {text: "⬇️", key: _0x14a932.key}});
        let _0x25ff9c = await fetchJson("https://vihangayt.me/download/fmmods");
        const _0x2b470 = _0x25ff9c.data.com_whatsapp.name;
        const _0x33658c = _0x25ff9c.data.com_whatsapp.link;
        await _0x29ec83.sendMessage(_0xf16d8a, {react: {text: "⬆️", key: _0x14a932.key}});
        let _0x4c3858 = await _0x29ec83.sendMessage(_0xf16d8a, {document: {url: _0x33658c}, mimetype: "application/vnd.android.package-archive", fileName: "" + _0x2b470, caption: "ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴊᴀɴɪʏᴀ 🌝"}, {quoted: _0x14a932});
        await _0x29ec83.sendMessage(_0xf16d8a, {react: {text: "🪀", key: _0x4c3858.key}});
        await _0x29ec83.sendMessage(_0xf16d8a, {react: {text: "✔️", key: _0x14a932.key}});
      }
    }
  } catch (_0x20ecbb) {
    _0x700a84("" + _0x20ecbb);
    _0x33764b(_0x20ecbb);
  }
});
cmd({on: "body"}, async (_0x4cd38e, _0x2fe12f, _0x564647, {from: _0x5357f2, l: _0x54f586, quoted: _0x2dc065, body: _0x3c55a9, isCmd: _0x108386, command: _0x1d747c, args: _0x56d535, q: _0x2d8d87, isGroup: _0x282a2a, sender: _0x39b1b3, senderNumber: _0x193dfb, botNumber2: _0x1c2ebb, botNumber: _0x4c80af, pushname: _0x57feb8, isMe: _0xf0d682, isOwner: _0x37ed20, groupMetadata: _0x5743ef, groupName: _0x11bf98, participants: _0x49de41, groupAdmins: _0xd52699, isBotAdmins: _0xcadbff, isAdmins: _0x81147a, reply: _0x4f1f80}) => {
  try {
    if (_0x3c55a9 === "1.2") {
      if (!_0x564647.quoted) {
        return;
      }
      if (_0x564647.quoted.sender !== _0x1c2ebb) {
        return;
      }
      if (_0x564647.quoted.videoMessage) {
        return;
      }
      if (_0x564647.quoted.documentMessage) {
        return;
      }
      if (_0x564647.quoted.stickerMessage) {
        return;
      }
      if (_0x564647.quoted.audioMessage) {
        return;
      }
      if (!_0x564647.quoted.imageMessage) {
        return;
      }
      if (_0x564647.quoted.imageMessage.caption.includes("*🪀 JANIYA V 2.0 WHATSAPP MOD DOWNLOADER*")) {
        await _0x4cd38e.sendMessage(_0x5357f2, {react: {text: "⬇️", key: _0x2fe12f.key}});
        let _0x3e357b = await fetchJson("https://vihangayt.me/download/fmmods");
        const _0x244515 = _0x3e357b.data.com_fmwhatsapp.name;
        const _0x4bca09 = _0x3e357b.data.com_fmwhatsapp.link;
        await _0x4cd38e.sendMessage(_0x5357f2, {react: {text: "⬆️", key: _0x2fe12f.key}});
        let _0xfcc47e = await _0x4cd38e.sendMessage(_0x5357f2, {document: {url: _0x4bca09}, mimetype: "application/vnd.android.package-archive", fileName: "" + _0x244515, caption: "ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴊᴀɴɪʏᴀ 🌝"}, {quoted: _0x2fe12f});
        await _0x4cd38e.sendMessage(_0x5357f2, {react: {text: "🪀", key: _0xfcc47e.key}});
        await _0x4cd38e.sendMessage(_0x5357f2, {react: {text: "✔️", key: _0x2fe12f.key}});
      }
    }
  } catch (_0x109e50) {
    _0x4f1f80("" + _0x109e50);
    _0x54f586(_0x109e50);
  }
});
cmd({on: "body"}, async (_0x37383d, _0x79493f, _0x11257f, {from: _0x526e31, l: _0x2b24fc, quoted: _0x2eb66d, body: _0x20d4a9, isCmd: _0x133828, command: _0x211905, args: _0x11146a, q: _0x66ee76, isGroup: _0x3728c3, sender: _0x28a972, senderNumber: _0x5bbc10, botNumber2: _0x8fb603, botNumber: _0x36a195, pushname: _0x1f6978, isMe: _0x231446, isOwner: _0x31b016, groupMetadata: _0x26c730, groupName: _0xd6a9a0, participants: _0x3a1b37, groupAdmins: _0x2a934a, isBotAdmins: _0x22e28d, isAdmins: _0x5825b8, reply: _0x506669}) => {
  try {
    if (_0x20d4a9 === "1.3") {
      if (!_0x11257f.quoted) {
        return;
      }
      if (_0x11257f.quoted.sender !== _0x8fb603) {
        return;
      }
      if (_0x11257f.quoted.videoMessage) {
        return;
      }
      if (_0x11257f.quoted.documentMessage) {
        return;
      }
      if (_0x11257f.quoted.stickerMessage) {
        return;
      }
      if (_0x11257f.quoted.audioMessage) {
        return;
      }
      if (!_0x11257f.quoted.imageMessage) {
        return;
      }
      if (_0x11257f.quoted.imageMessage.caption.includes("*🪀 JANIYA V 2.0 WHATSAPP MOD DOWNLOADER*")) {
        await _0x37383d.sendMessage(_0x526e31, {react: {text: "⬇️", key: _0x79493f.key}});
        let _0x1febbe = await fetchJson("https://vihangayt.me/download/fmmods");
        const _0x1f2511 = _0x1febbe.data.com_gbwhatsapp.name;
        const _0x92deb5 = _0x1febbe.data.com_gbwhatsapp.link;
        await _0x37383d.sendMessage(_0x526e31, {react: {text: "⬆️", key: _0x79493f.key}});
        let _0x24902b = await _0x37383d.sendMessage(_0x526e31, {document: {url: _0x92deb5}, mimetype: "application/vnd.android.package-archive", fileName: "" + _0x1f2511, caption: "ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴊᴀɴɪʏᴀ 🌝"}, {quoted: _0x79493f});
        await _0x37383d.sendMessage(_0x526e31, {react: {text: "🪀", key: _0x24902b.key}});
        await _0x37383d.sendMessage(_0x526e31, {react: {text: "✔️", key: _0x79493f.key}});
      }
    }
  } catch (_0x17a2dc) {
    _0x506669("" + _0x17a2dc);
    _0x2b24fc(_0x17a2dc);
  }
});
cmd({on: "body"}, async (_0x331079, _0x1369ac, _0x2e644e, {from: _0x55998c, l: _0x58ca3e, quoted: _0x30a936, body: _0x2a7a75, isCmd: _0x117933, command: _0x28824b, args: _0x183ed8, q: _0x54750f, isGroup: _0x4e6eae, sender: _0x24e635, senderNumber: _0x33126f, botNumber2: _0x1e714b, botNumber: _0x321776, pushname: _0x3ef8d1, isMe: _0x3e5604, isOwner: _0x44334b, groupMetadata: _0x7d0c39, groupName: _0x46db6e, participants: _0x36b222, groupAdmins: _0x31f3d7, isBotAdmins: _0x48d6dc, isAdmins: _0xb32673, reply: _0x25c583}) => {
  try {
    if (_0x2a7a75 === "1.4") {
      if (!_0x2e644e.quoted) {
        return;
      }
      if (_0x2e644e.quoted.sender !== _0x1e714b) {
        return;
      }
      if (_0x2e644e.quoted.videoMessage) {
        return;
      }
      if (_0x2e644e.quoted.documentMessage) {
        return;
      }
      if (_0x2e644e.quoted.stickerMessage) {
        return;
      }
      if (_0x2e644e.quoted.audioMessage) {
        return;
      }
      if (!_0x2e644e.quoted.imageMessage) {
        return;
      }
      if (_0x2e644e.quoted.imageMessage.caption.includes("*🪀 JANIYA V 2.0 WHATSAPP MOD DOWNLOADER*")) {
        await _0x331079.sendMessage(_0x55998c, {react: {text: "⬇️", key: _0x1369ac.key}});
        let _0x39abef = await fetchJson("https://vihangayt.me/download/fmmods");
        const _0x3bac03 = _0x39abef.data.com_yowhatsapp.name;
        const _0x375f48 = _0x39abef.data.com_yowhatsapp.link;
        await _0x331079.sendMessage(_0x55998c, {react: {text: "⬆️", key: _0x1369ac.key}});
        let _0x25edeb = await _0x331079.sendMessage(_0x55998c, {document: {url: _0x375f48}, mimetype: "application/vnd.android.package-archive", fileName: "" + _0x3bac03, caption: "ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴊᴀɴɪʏᴀ 🌝"}, {quoted: _0x1369ac});
        await _0x331079.sendMessage(_0x55998c, {react: {text: "🪀", key: _0x25edeb.key}});
        await _0x331079.sendMessage(_0x55998c, {react: {text: "✔️", key: _0x1369ac.key}});
      }
    }
  } catch (_0x2b7f5b) {
    _0x25c583("" + _0x2b7f5b);
    _0x58ca3e(_0x2b7f5b);
  }
});
- [ ] 
