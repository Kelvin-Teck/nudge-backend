const { updateAllMembersQueue } = require("../config/queue");

const addUpdateAllMembersToQueue = async (memberId, updateData) => {
  await updateAllMembersQueue.add("update-all-members", {memberId, updateData});
};

module.exports = { addUpdateAllMembersToQueue };
