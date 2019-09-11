import React,{ useState } from 'react';
import { Container, Form, Message } from 'semantic-ui-react';
import GlobalMenu from '../components/NavMenu';

const statusOptions = [
    { key: 'q', text: 'Queued', value:'queued' },
    { key: 'ip', text: 'In Progress', value: 'in-progress' },
    { key: 's', text: 'Success', value: 'success' },
    { key: 'f', text: 'Failure', value: 'failure' }
];

export default function SubmitNewScanPage(props) {

    const [repositoryName, setRepositoryName ] = useState('');
    const [status, setStatus] = useState('');
    const [findings, setFindings] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleRepositoryName = (e, {value}) => setRepositoryName(value);
    const handleStatus = (e, { value }) => setStatus(value);
    const handleFindings = (e, { value }) => setFindings(value);
    const handleSubmit = async (e) => {
        await fetch('/api/results', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                repositoryName,
                status,
                findings: JSON.parse(findings || '{}'),
            }),
        });
        setSubmitted(true);
        setTimeout(()=> setSubmitted(false), 3000);
    }

    return (
        <Container>
            <br />
            <GlobalMenu {...props} />
            <Message positive hidden={!submitted}>
                <Message.Header>Submitted new scan result successfully</Message.Header>
                <p>
                Go to <b>List Scan Result</b> page to see now.
                </p>
            </Message>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Input 
                        name='repositoryName' 
                        fluid label='Repository Name' 
                        placeholder='Repository Name' width={10}
                        onChange={handleRepositoryName}
                    />
                    <Form.Select
                        width={6}
                        name='status'
                        label='Status'
                        options={statusOptions}
                        placeholder='Scan Status'
                        onChange={handleStatus}
                    />
                </Form.Group>
                <Form.TextArea
                    name='findings' 
                    label='Findings' 
                    placeholder='JSON Findings result ...'
                    rows={10}
                    onChange={handleFindings}
                />
                <Form.Button>Submit</Form.Button>
            </Form>
        </Container>
    );
}
