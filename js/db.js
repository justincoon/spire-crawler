var db = require('monk')('localhost:27017/test');
var courses = db.get('courses');

module.exports = {
	update: function(course, cb) {
		courses.
updateById(
{id: course.title}, 
course, 
{upsert: true}, 
function(err, doc) { });
	}
};