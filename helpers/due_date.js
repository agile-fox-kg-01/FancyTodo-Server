
const moment = require("moment")

function due_dateFormat(date) {

  return moment(date).format("dddd, Do MMMM YYYY")

}

module.exports = {
  due_dateFormat
}
