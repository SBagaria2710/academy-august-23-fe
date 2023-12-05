const mongoose = require("mongoose");

const DB =
  "mongodb+srv://shashwawtforwork:LF4d6SelDnRwE2dE@cluster0.wkv4fmi.mongodb.net/my_database?retryWrites=true&w=majority";

mongoose
  .connect(DB, {})
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

// Schema
const courseSchema = new mongoose.Schema({
  name: String,
  creator: String,
  publishedDate: { type: Date, default: Date.now },
  isPublished: Boolean,
  rating: Number,
});

// Model
const Course = mongoose.model("Course", courseSchema);

// Create
async function createCourse() {
  const course = new Course({
    name: "Java",
    creator: "Akshay",
    isPublished: false,
    rating: 4.8,
  });

  await course.save();
}

// Read
async function getCourse() {
  const course = await Course.find({ rating: 4.8 });
  console.log(course);
}

// Update
async function updateCourse(courseId) {
  let course = await Course.findById(courseId);
  if (!course) {
    console.log("Course not found!")
    return;
  };

  course.name = "MERN"
  await course.save();
  console.log("Course updated successfully!")
}
// updateCourse("656f56727f6792d3143f2262");

// Delete
async function deleteCourse(courseId) {
  let courseDeleted = await Course.findByIdAndDelete(courseId);
  console.log(courseDeleted);
}

deleteCourse("656f56bc505e96a4ba1c3f7c");