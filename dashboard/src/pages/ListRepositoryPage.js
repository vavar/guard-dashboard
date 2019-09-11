import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Label } from 'semantic-ui-react';
import GlobalMenu from '../components/NavMenu';

export default function ListRepositoryPage(props) {
    const { history } = props;
    const [results, setResults] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/results', {
                method: 'get',
            });
            const data = await response.json();
            setResults(data);
        }
        fetchData();
    },[]);

    const showButton = (id, count) => {
        if (count > 0) {
            return (
                <div>
                    <Label color='red'>{count}</Label>
                    <Button size='mini'
                        as='a'
                        className='item'
                        onClick={() => (history.push(`/repositories/${id}/findings`))}>
                        View Detail
                    </Button>
                </div>
            );
        }
        return (<Label color='green' >{count}</Label>)
    }
    return (
        <Container>
            <br />
            <GlobalMenu {...props} />
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>Repository Name</Table.HeaderCell>
                        <Table.HeaderCell width={3}>Status</Table.HeaderCell>
                        <Table.HeaderCell width={3}>Timestamp</Table.HeaderCell>
                        <Table.HeaderCell width={3}>Finding Count</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {_.map(results, (e, index) => {
                        return (
                            <Table.Row key={index} positive={e.findings === 0}>
                                <Table.Cell>{e.repositoryName}</Table.Cell>
                                <Table.Cell>{e.status}</Table.Cell>
                                <Table.Cell>{e.timestamp}</Table.Cell>
                                <Table.Cell>{showButton(e.id, e.findings)}</Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </Container>
    );
}