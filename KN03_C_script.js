use cs2

db.key.find(
    { createdAt: { $gte: new Date("2024-02-01T00:00:00Z") } },
    { _id: 0, name: 1, price: 1 }
).pretty();


db.case.find(
    { $or: [ { price: { $gte: 3.00 } }, { name: /CSGO/ } ] },
    { _id: 1, name: 1, price: 1 }
).pretty();


db.skin.find(
    { price: { $gte: 100.00 }, "pattern.pattern": 103 },
    { _id: 0, name: 1, price: 1, "pattern.pattern": 1 }
).pretty();


db.skin.find(
    { name: /Dragon/ },
    { _id: 1, name: 1, price: 1 }
).pretty();