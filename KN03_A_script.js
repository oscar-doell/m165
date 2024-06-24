use cs2

var keyId1 = new ObjectId();
var keyId2 = new ObjectId();
var keyId3 = new ObjectId();
var keyId4 = new ObjectId();

var caseId1 = new ObjectId();
var caseId2 = new ObjectId();
var caseId3 = new ObjectId();
var caseId4 = new ObjectId();

var skinId1 = new ObjectId();
var skinId2 = new ObjectId();
var skinId3 = new ObjectId();
var skinId4 = new ObjectId();

var patternId1 = new ObjectId();
var patternId2 = new ObjectId();
var patternId3 = new ObjectId();

db.key.insertMany([
    {_id: keyId1, name: "Gamma key", price: 2.20},
    {_id: keyId2, name: "Revolution key", price: 2.20},
    {_id: keyId3, name: "Prisma key", price: 2.20},
    {_id: keyId4, name: "CSGO key", price: 2.20}
]);

db.case.insertMany([
    {_id: caseId1, name: "Gamma 2", price: 2.90, keys: [keyId1]},
    {_id: caseId2, name: "Revolution", price: 3.70, keys: [keyId2, keyId4]},
    {_id: caseId3, name: "Prisma", price: 2.50, keys: [keyId3]},
    {_id: caseId4, name: "CSGO", price: 1.90, keys: [keyId1, keyId2, keyId3, keyId4]}
]);

db.skin.insertOne({
    _id: skinId1,
    name: "AWP | Dragon Lore",
    price: 1500.00,
    pattern: { _id: patternId1, pattern: 103 },
    case: caseId1
});

db.skin.insertMany([
    {
        _id: skinId2,
        name: "AK-47 | Redline",
        price: 25.00,
        pattern: { _id: patternId2, pattern: 505 },
        case: caseId2
    },
    {
        _id: skinId3,
        name: "M4A4 | Howl",
        price: 600.00,
        pattern: { _id: patternId3, pattern: 830 },
        case: caseId3
    },
    {
        _id: skinId4,
        name: "Glock-18 | Fade",
        price: 300.00,
        pattern: { _id: patternId1, pattern: 149 },
        case: caseId4
    }
]);