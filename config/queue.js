// queue.js
const { Queue, BullMQ } = require("bullmq");
const { Worker, QueueScheduler } = require("bullmq");
const IoRedis = require("ioredis");
const memberRepository = require('../repositories/memberRepository');

// Create a Redis connection
// const redisClient = redis.createClient({
//   host: "localhost",
//   port: 6379,
// });

const connection = new IoRedis({maxRetriesPerRequest: null});

// Create a new queue
const updateAllMembersQueue = new Queue("update-all-members-queue", {connection});

// Create to process the jobs in Queue.
const updateAllWorker = new Worker("update-all-members-queue", async (job) => {
  const { memberId, updateData } = job.data;
    await memberRepository.getSingleMemberByIdAndUpdate(memberId, updateData);
  }, { connection });





// // Add a QueueScheduler (recommended to handle stalled jobs)
// new QueueScheduler("my-queue", {
//   connection,
// });

// Export the queue
module.exports = { updateAllMembersQueue , connection, Worker};
