const Activity = require("../models/Activity");

const logActivity = async ({
  action,
  description,
  user,
  icon,
}) => {
  try {
    await Activity.create({
      action,
      description,
      user,
      icon,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = logActivity;