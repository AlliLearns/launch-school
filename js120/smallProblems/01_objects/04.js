// Student
// Create an object factory for a student object. 
// The student object should have the following methods and 
// it should produce the expected results demonstrated in the 
// sample code: 

// `info`: Logs the name and year of the student.
// `addCourse`: Enrolls student in a course. A course is an object literal that has properties for `name` and `code`.
// `listCourses`: Returns a list of te courses the student has enrolled in.
// `addNote`: Adds a `note` property to a course. Takes a `code` and a `note` as an argument. Notes are appended.
// `updateNote`: Updates a `note` for a course. Updating replaces the existing note with a new one.
// `viewNotes`: Logs the notes for all the courses. Courses without notes are not displayed. 

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"

function createStudent(name, year) {
  const newStudent = {
    name,
    year,
    courses: [],

    info() { 
      console.log(`${this.name} is a ${year} student.`); 
    },

    addCourse(course) { 
      this.courses.push(course) 
    },

    listCourses() { 
      console.log(this.courses); 
    },

    addNote(code, note) {
      const courses = this.courses;
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].code === code) {
          const course = courses[i];
          if (!course.hasOwnProperty('notes')) course.notes = [note];
          else course.notes.push(note);
        }
      }
    },

    updateNote(code, note) {
      const courses = this.courses;
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].code === code) {
          const course = courses[i];
          if (!course.hasOwnProperty('notes')) console.log(`No note to update.`);
          else course.notes = [note];
        }
      }
    },


    viewNotes() {
      const courses = this.courses;
      for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        const name = course.name;
        const notes = course.notes || [];
        if (notes.length > 0) {
          console.log(`${name}: ${notes.join('; ')}`);
        }
      }
    },
  };

  return newStudent;
}