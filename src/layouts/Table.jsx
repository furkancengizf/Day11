import React from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";

const TableExampleApprove = () => (
  <Table compact celled definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>İdentity Number</Table.HeaderCell>
        <Table.HeaderCell>Email Address</Table.HeaderCell>
        <Table.HeaderCell>Date Of Birth</Table.HeaderCell>
        <Table.HeaderCell>Language</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Furkan </Table.Cell>
        <Table.Cell>Cengiz</Table.Cell>
        <Table.Cell> 11111111</Table.Cell>
        <Table.Cell>furkancengizf@gmail.com</Table.Cell>
        <Table.Cell>20.10.2003</Table.Cell>
        <Table.Cell>Java-React</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Engin </Table.Cell>
        <Table.Cell>Demiroğ</Table.Cell>
        <Table.Cell> 11111111</Table.Cell>
        <Table.Cell>engindemirog@gmail.com</Table.Cell>
        <Table.Cell>01.01.1985</Table.Cell>
        <Table.Cell>Java,React,C#,Angular</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell collapsing>
          <Checkbox slider />
        </Table.Cell>
        <Table.Cell>Cengizhan</Table.Cell>
        <Table.Cell>Cengiz</Table.Cell>
        <Table.Cell> 11111111</Table.Cell>
        <Table.Cell>cengizhancengiz@gmail.com</Table.Cell>
        <Table.Cell>01.01.2000</Table.Cell>
        <Table.Cell>Java-React</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan="4">
          <Button
            floated="right"
            icon
            labelPosition="left"
            primary
            size="small"
          >
            <Icon name="Candidate" /> Add Candidate
          </Button>
          <Button size="small">Approve</Button>
          <Button disabled size="small">
            Approve All
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default TableExampleApprove;
