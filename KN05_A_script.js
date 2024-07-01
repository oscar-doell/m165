use cs2

db.createUser({
    user: 'Micheal',
    pwd: '1234',
    roles: [
        {role: "read", db: "cs2"}
    ]
})
use admin

db.createUser({
    user: 'Markus',
    pwd: '1234',
    roles: [
        {role: 'readWrite', db: 'cs2'}
    ]
})
