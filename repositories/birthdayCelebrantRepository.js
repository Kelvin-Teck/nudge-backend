const { db } = require("../models")

const createBirthdayCelebrant = async (data) => {
    await db.BirthdayCelebrant.create(data);
}

module.exports = {createBirthdayCelebrant}