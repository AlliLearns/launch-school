// School
// Create a `school` object. The `school` object uses the `student` object from the 
// previous exercise. It has methods that use and update information about the 
// student. Be sure to check out the previous exercise for the other arguments that
// might be needed by the `school` object. Implement the following methods for the 
// school object: 

// `addStudent`: Adds a student by creating a new student and adding the student to 
// a collection of students. The method adds a constraint that the year can only be 
// any of the following values: `1st`, `2nd`, `3rd`, `4th` or `5th`. Returns a student
// object if year is valid otherwise it logs `'Invalid Year'`.

// `enrollStudent`: Enrolls a student in a course.
// `addGrade`: Adds the grade of a student for a course.
// `getReportCard`: Logs the grades of a student for all courses. If the course has no grade, it returns `'in progress'`.
// `courseReport`: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

// To test your code, use the three student objects listed below. Using the three student objects, produce 
// the following values from the `getReportCard` and `courseReport` methods respectively. 

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
// foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

// ---------------------------------------------------------

// > school.getReportCard(foo);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

// ---------------------------------------------------------

// > school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

// > school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

// > school.courseReport('Physics');
// = undefined

function createCourse(name, code) {
  const newCourse = {
    name,
    code,
    notes: '',
    grade: null,

    addGrade(grade) {
      if (typeof grade === 'number' && !Number.isNaN(grade)) {
        this.grade = grade;
      }
    }
  };

  return newCourse;
}

function createStudent(name, year) {
  const newStudent = {
    name,
    year,
    courseObjs: [],

    info() { 
      console.log(`${this.name} is a ${year} student.`); 
    },

    addCourse(courseName, courseCode) { 
      this.courseObjs.push(createCourse(courseName, courseCode));
    },

    listCourses() { 
      return this.courseObjs;
    },

    addNote(code, note) {
      const courses = this.courseObjs;
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].code === code) {
          const course = courses[i];
          if (course.notes.length === 0) course.notes = note;
          else course.note += `; ${note}`;
        }
      }
    },

    updateNote(code, note) {
      const courses = this.courseObjs;
      for (let i = 0; i < courses.length; i++) {
        if (courses[i].code === code) {
          const course = courses[i];
          course.notes = note;
        }
      }
    },


    viewNotes() {
      const courses = this.courseObjs;
      for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        const name = course.name;
        const notes = course.notes;
        if (notes.length > 0) console.log(`${name}: ${notes}.`);
        else console.log(`${name}: Has no notes.`);
      }
    },
  };

  return newStudent;
}

const school = {
  students: [],

  addStudent(name, year) {
    const validYears = ['1st', '2nd', '3rd', '4th', '5th'];
    if (!validYears.includes(year)) {
      console.log('Invalid Year');
      return;
    }

    const newStudent = createStudent(name, year);
    this.students.push(newStudent);
    return newStudent;
  },

  enrollStudent(student, courseName, courseCode) {
    const students = this.students;
    if (students.includes(student)) {
      student.addCourse(courseName, courseCode);
    }
  },

  addGrade(student, courseName, grade) {
    const students = this.students;
    if (students.includes(student)) {
      const course = student.listCourses().filter(course => {
        return course.name === courseName;
      })[0];

      course.addGrade(grade);
    }
  },

  getReportCard(student) {
    student.listCourses().forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${String(course.grade)}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },


  courseReport() {},
}

const foo = school.addStudent('foo', '3rd');
const bar = school.addStudent('bar', '1st');
const qux = school.addStudent('qux', '2nd');

school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
 
school.enrollStudent(bar, 'Math', 101);
 
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);

school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);
school.addGrade(bar, 'Math', 91);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);

school.getReportCard(foo);


