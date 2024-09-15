const {
  updateAllMembersQueue,
  deleteAllMembersQueue,
  deleteAllUsersQueue,
  updateAllUsersQueue,
} = require("../config/queue");

const addUpdateAllMembersToQueue = async (memberId, updateData) => {
  await updateAllMembersQueue.add("update-all-members", {
    memberId,
    updateData,
  });
};

const addDeleteAllMembersToQueue = async (memberId) => {
  await deleteAllMembersQueue.add("delete-all-members", {
    memberId,
  });
};

const addDeleteAllUsersToQueue = async (memberId) => {
  await deleteAllUsersQueue.add("delete-all-users", {
    memberId,
  });
};

const addUpdateAllUsersToQueue = async (memberId, updateData) => {
  await updateAllUsersQueue.add("update-all-users", {
    memberId,
    updateData,
  });
};

module.exports = {
  addUpdateAllMembersToQueue,
  addDeleteAllMembersToQueue,
  addDeleteAllUsersToQueue,
  addUpdateAllUsersToQueue,
};
