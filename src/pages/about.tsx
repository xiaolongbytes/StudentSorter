import { Container } from 'react-bootstrap';

export default () => {
    return (
        <Container>
            <h1>About StudentSorter</h1>
            <p>
                {' '}
                StudentSorter was built on October 20th-22nd, 2023 for
                BeaverHack's Fall 2023 "Hack Education" Hackathon. The devpost
                can be found{' '}
                <a href="https://beaverhacks-fall-2023.devpost.com/">
                    here
                </a>. <br />
                <br />
                StudentSorter is composed of the following:{' '}
            </p>
            <ul>
                <li>
                    TeamBuild - Creates teams based on a given team size and a
                    student list, and also considers given banned partner
                    information
                </li>
                <li>
                    SeatBuild - Creates a seating chart based on a given number
                    of seat columns and a student list
                </li>
            </ul>
            <p>
                Within the webapp, users may upload .csv files to populate the
                student list. They can also add and delete students as well. The
                results from both pages can be exported by the user. <br />
                <br />
                The github repository can be found{' '}
                <a href="https://github.com/xiaolongbytes/StudentSorter">
                    here
                </a>
                .
            </p>
        </Container>
    );
};
