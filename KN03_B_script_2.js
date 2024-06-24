use cs2

var skinIdToDelete = ObjectId("66796e99a4251bd2ebaf8060");

db.skin.deleteOne({_id: skinIdToDelete});

var caseIdToDelete1 = ObjectId("66796e99a4251bd2ebaf805c");
var caseIdToDelete2 = ObjectId("66796e99a4251bd2ebaf805d");

db.case.deleteMany({
    $or: [
        {_id: caseIdToDelete1},
        {_id: caseIdToDelete2}
    ]
});