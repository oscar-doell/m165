use cs2

var keyId1 = ObjectId("66796fb4a4251bd2ebaf8067");
var skinId2 = ObjectId("66796fb4a4251bd2ebaf8070");
var caseId2 = ObjectId("66796fb4a4251bd2ebaf806c");

db.key.updateOne(
    { _id: keyId1 },
    { $set: { price: 2.50 } }
);


db.case.updateMany(
    { $or: [ { price: { $gte: 3.00 } }, { name: /CSGO/ } ] },
    { $set: { price: 3.00 } }
);


db.skin.replaceOne(
    { name: "AK-47 | Redline" },
    {
        _id: skinId2,
        name: "AK-47 | Redline",
        price: 30.00,
        pattern: { _id: patternId2, pattern: 104 },
        case: caseId2,
        createdAt: new Date("2024-02-01T12:00:00Z")
    }
);
