import { FunctionComponent } from 'react';

const Name: FunctionComponent<{
    name: string;
}> = ({ name }) => {
    return <h1>Hello {name}</h1>;
};

const TeamBuilder = () => {
    return (
        <>
            <h1>Hello darkness my old friend:</h1>
            <Name name="darkness" />
        </>
    );
};

export default TeamBuilder;
