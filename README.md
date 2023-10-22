# StudentSorter

StudentSorter was built on October 20th-22nd, 2023 for BeaverHack's Fall 2023 "Hack Education" Hackathon. The devpost can be found [here](https://beaverhacks-fall-2023.devpost.com/)

StudentSorter is composed of the following:

-   TeamBuild - Creates teams based on a given team size and a student list, and also considers given banned partner information
-   SeatBuild - Creates a seating chart based on a given number of seat columns and a student list

Within the webapp, users may upload .csv files to populate the student list. They can also add and delete students as well.
The results from both pages can be exported by the user.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Live Website:

Play with the webapp [here, hosted on Vercel](https://student-sorter-delta.vercel.app/).

-   You can test the "Choose File" and "Upload CSV" functionality with the "example_csv.csv" file provided in the "data" folder to start! Don't worry about deleting the default students provided, those will be cleared by importing new data.
-   Or play around with the default students, add your own using the "Add Student" button, the webapp is your oyster!

## Installation/User Guide:

First, verify that you have `npm` installed with

```bash
npm --version
```

(you should see some number; if an error occurs, install `npm`).

Then clone this repository:

```bash
git clone https://github.com/xiaolongbytes/StudentSorter.git
cd StudentSorter
```

Install dependencies from the package-lock.json file

```bash
npm ci
```

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
