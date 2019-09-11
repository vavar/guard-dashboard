import _ from 'lodash';
import React, {useState, useEffect} from 'react';
import { Container, Header, Button, Item, Segment, Label} from 'semantic-ui-react';

export default function FindingViewPage(props){
    const { history, match } = props;
    const [scanResult , setScanResult] = useState({});
    const [findings, setFindings ] = useState([]);
    const id = match.params.id;

    useEffect(() => {
        async function fetchData() {
            if (!id) {
                return;
            }
            const response = await fetch(`/api/repository/${id}/findings`, {
                method: 'get',
            });
            const data = await response.json();
            setScanResult(data);
            const { findings:column = {} } = data;
            const { findings = [] } = column;
            setFindings(findings);
        }
        fetchData();
    },[id]);

    return (
        <Container>
            <br />
            <Segment.Group>
                <Segment padded>
                    <Header size='large'>Repository : {scanResult.repositoryName}</Header>
                </Segment>
                <Segment padded>
                    <Header size='medium' color='orange'>Findings</Header>
                    <Item.Group divided>
                        {_.map(findings, (f = {}, index)=>{
                            const { location = {}, metadata = {}} = f;
                            const { description = '', severity = '' } = metadata;
                            const { path = '', positions = {}} = location;
                            const { begin = {} } = positions;
                            const { line } = begin;
                            return (<Item key={index}>
                                <Item.Content>
                                    <Item.Header>{f.ruleId} : {description}</Item.Header>
                                    <Item.Meta>
                                        <Label>Location:</Label> {path} &nbsp;&nbsp;
                                        <Label>Line:</Label> {line}
                                    </Item.Meta>
                                    <Item.Extra>
                                        <Label icon='globe' color='yellow' content={`Severity: ${severity}`} />
                                    </Item.Extra>
                                </Item.Content>
                                </Item>)
                        })}
                    </Item.Group>
                </Segment>
                <Segment textAlign='center'>
                    <Button onClick={() => history.goBack() }>Back</Button>
                </Segment>
            </Segment.Group>
        </Container>
    );
}