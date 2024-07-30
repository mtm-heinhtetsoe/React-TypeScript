import { Badge, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, ListGroupItem } from "react-bootstrap"

export const Item = (props: any) => {
    const { id, category, title, description, author, authoredDate } = props.data;
    return (
        <Card bg='dark' key={id} style={{ width: '500px', color: 'white', margin: "10px auto" }}>
            <CardHeader>{category? <Badge bg="primary" pill>{category}</Badge> : ''}</CardHeader>
            <CardBody>
                <CardTitle>{title?? ''}</CardTitle>
                <CardText>{description?? ''}</CardText>
            </CardBody>
            <CardFooter>
                <CardText>By {author} at {authoredDate}</CardText>
            </CardFooter>
        </Card>
    )
}