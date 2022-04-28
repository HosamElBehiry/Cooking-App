const dE = (res, e) => res.status(500).json({ success: false, e, emoji: "😥" });

const dSuc = (res, data) => res.status(200).json({ success: true, data });

const dCre = (res, data) => res.status(201).json({ success: true, data });

module.exports = { dE, dSuc, dCre };
