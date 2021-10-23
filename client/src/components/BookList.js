import React from 'react'
import { Card, CardText, CardHeader, CardTitle, CardBody } from 'reactstrap'

const BookList = ({books}) => {
    if(!books.length) {
        return <h3>Thare no books currently in the library...</h3>
    }

    return (
        <div>
            {books
                && books.map((book) => (
                    <Card>
                        <CardHeader>Title: {book.title}</CardHeader>
                        <CardBody>
                            <CardTitle>Author: {book.author}</CardTitle>
                            <CardText>Number of pages: {book.pages}</CardText>
                        </CardBody>
                    </Card>
                ))}
        </div>
    )
}

export default BookList