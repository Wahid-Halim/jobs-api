const getAllJobs = async (req, res) => {
  res.send("get All jobs");
};

const getJob = async (req, res) => {
  res.send("get Job");
};

const createJob = async (req, res) => {
  
};

const updateJob = async (req, res) => {
  res.send("update Job");
};

const deleteJob = async (req, res) => {
  res.send("delete Job");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
