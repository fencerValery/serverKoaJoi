"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = async () => {
    return [
        {
            id: 1,
            login: "user1",
            email: "user1@mail.com",
            birthYear: 1993,
            gender: "male",
            password: "123456",
        },
        {
            id: 2,
            login: "user2",
            email: "user2@mail.com",
            gender: "female",
            password: "123456",
        },
        {
            id: 3,
            login: "user3",
            email: "user3@mail.com",
            birthYear: 2001,
            password: "123456",
        },
        {
            id: 4,
            login: "user4",
            email: "user4@mail.com",
            password: "123456",
        }
    ];
};
exports.updateUser = async (payload) => {
    return !!payload;
};
exports.insertUser = async (payload) => {
    return !!payload;
};
//# sourceMappingURL=user.service.js.map