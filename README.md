# React Typescript with Tailwind (React 18.2.0, Typescript 4.8.2 and Tailwind 3.1.8)

## Features

The project is to build an exam score sheet web application with basic data handling and responsive designing.

- [React 18](https://reactjs.org)
- [Tailwind 3](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Installing and Running

### Procedures:

1. Clone this repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start`
4. Run `npm run watch:css` to update the css from the tailwind
5. Run `npm run test` for unit testing
6. Happy hacking.

## Structure

All your extension's code must be placed in the `src` folder.

### Folder Structure

    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── src                     # Source files (alternatively `lib` or `app`)
    │   ├── assets              # Tailwind css
    │   ├── components          # Component for reusable
    │   │   ├── __test__        # unit testing
    │   │   └── ...             # etc
    │   ├── layouts             # Routing
    │   ├── screens             # Page view folder
    │   │   ├── __test__        # unit testing
    │   │   └── ...             # etc
    │   ├── services            # Fetch data
    │   ├── index.tsx           # index file.
    │   └── ...                 # etc.
    ├── LICENSE
    ├── README.md
    └── package.json

### Code Structure

The web app code structure are following below:

```
1. React with Typescript
2. .tsx extention
3. Interface creation
4. Data stores in the localStorage
```

### Functionalities

The web app functionalities are following below:

```
1. Display a table that contains three fields:
    a. "Student Name" (string),
    b. "Score" (integer) and
    c. "Class" (A/B/C)
2. Create a record to the table
3. Delete a record from the table
4. Filter the records by score and class
```

### Additional Implementation

The web app functionalities are following below:

```
1. To Implemented the Pagination of the list
2. LocalStorage data retrive
3. Popup box for add/filter student

```

### UI Design

The web app ui design are following below:

```
1. Using Tailwind css
2. Responsive web design
3. Creation of Admin panal
4. Modal box for add and filter the student information
   (Popup box)
```

## Screenshots

### Student List

![My Image](public/studentpage.JPG)

### Student Add

![My Image](public/studentadd.JPG)

### Student Filter

![My Image](public/studentfilter.JPG)
