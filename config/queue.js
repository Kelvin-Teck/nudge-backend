// queue.js
const { Queue, BullMQ } = require("bullmq");
const { Worker, QueueScheduler } = require("bullmq");
const IoRedis = require("ioredis");
const memberRepository = require("../repositories/memberRepository");
const userRepository = require("../repositories/userRepository");

// Create a Redis connection
// const redisClient = redis.createClient({
//   host: "localhost",
//   port: 6379,
// });

const connection = new IoRedis({ maxRetriesPerRequest: null });

// Create a new queue
const updateAllMembersQueue = new Queue("update-all-members-queue", {
  connection,
});

const updateAllUsersQueue = new Queue("update-all-users-queue", {
  connection,
});

const deleteAllMembersQueue = new Queue("delete-all-members-queue", {
  connection,
});
const deleteAllUsersQueue = new Queue("delete-all-users-queue", {
  connection,
});

// Create to process the jobs in Queue.
const updateAllMembersWorker = new Worker(
  "update-all-members-queue",
  async (job) => {
    const { memberId, updateData } = job.data;
    await memberRepository.getSingleMemberByIdAndUpdate(memberId, updateData);
  },
  { connection }
);

const updateAllUsersWorker = new Worker(
  "update-all-users-queue",
  async (job) => {
    const { memberId, updateData } = job.data;
    await userRepository.getSingleUserByIdAndUpdate(memberId, updateData);
  },
  { connection }
);

const deleteAllMembersWorker = new Worker(
  "delete-all-members-queue",
  async (job) => {
    const { memberId } = job.data;
    await memberRepository.deleteSingleMember(memberId);
  },
  { connection }
);

const deleteAllUsersWorker = new Worker(
  "delete-all-users-queue",
  async (job) => {
    const { memberId } = job.data;
    await userRepository.deleteSingleUserById(memberId);
  },
  { connection }
);
// // Add a QueueScheduler (recommended to handle stalled jobs)
// new QueueScheduler("my-queue", {
//   connection,
// });

// Export the queue
module.exports = {
  updateAllMembersQueue,
  updateAllUsersQueue,
  deleteAllMembersQueue,
  deleteAllUsersQueue,
  connection,
  Worker,
};
