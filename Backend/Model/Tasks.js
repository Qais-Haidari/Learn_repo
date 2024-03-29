const mongoose = require("mongoose");

let Task = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },

  Short_description: {
    type: String,
    required: true,
  },

  Summary: {
    type: String,
    required: true,
  },

  Priority: {
    type: String,
    enum: ["Critical", "High", "Medium", "Low"],
    required: true,
  },

  start_date_time: {
    type: String,
    required: false,
  },
  end_date_time: {
    type: String,
    required: false,
  },
  end_time: {
    type: String,
    required: false,
  },
  start_time: {
    type: String,
    required: false,
  },
  Duration: {
    type: String,
    required: false,
  },

  Tast_duration: {
    type: String,
    required: false,
  },

  Assign_to_User: {
    type: String,
    required: false,
  },

  Approve_By: {
    type: String,
    required: false,
  },

  Assign_to_Department: {
    type: String,
    required: false,
  },

  Escalated_to_User: {
    type: String,
    required: false,
  },

  Escalated_to_Department: {
    type: String,
    required: false,
  },

  Email_Notify: {
    type: Boolean,
    required: false,
  },

  SMS_Notifiy: {
    type: Boolean,
    required: false,
  },
  Task_Recurrence: {
    type: String,
    required: true,
  },
  Task_Recurrence_Date: {
    type: String,
    required: false,
  },
  Task_Recurrence_Month_On: {
    type: String,
    required: false,
  },
  is_task_done: {
    type: Boolean,
    required: false,
    default: false,
  },
  is_task_rollovered: {
    type: Boolean,
    required: false,
    default: false,
  },

  Task_Date: {
    type: String,
    required: true,
  },

  Monday: {
    type: Boolean,
    required: false,
    default: false,
  },
  Thuesday: {
    type: Boolean,
    required: false,
    default: false,
  },
  Wednesday: {
    type: Boolean,
    required: false,
    default: false,
  },
  Thudesday: {
    type: Boolean,
    required: false,
    default: false,
  },
  Friday: {
    type: Boolean,
    required: false,
    default: false,
  },
  Saturday: {
    type: Boolean,
    required: false,
    default: false,
  },
  Sunday: {
    type: Boolean,
    required: false,
    default: false,
  },

  Actioned: {
    type: Boolean,
    required: false,
    default: false,
  },
});

module.exports = Task = mongoose.model("Tasks", Task);
