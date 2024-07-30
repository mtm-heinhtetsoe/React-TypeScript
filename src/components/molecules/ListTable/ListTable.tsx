import { Table } from "react-bootstrap";

type Props = {
    children: React.ReactNode;
}
export const ListTable = ({ children }: Props) => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Author</th>
            <th>AuthoredDate</th>
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </Table>
    )
}