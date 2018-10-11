import React, { Component } from 'react';
import { Card, Icon, Image, Button, Segment } from 'semantic-ui-react'

const BookCard = book => {
    const { title, author, price, image, addToCart, addedCount} = book;
    return (
    <Card>
        <Image src={image} />
        <Card.Content>
            <Card.Header>
                {title}
            </Card.Header>
            <Card.Meta>
                <span className='date'>
                 {author}
                </span>
            </Card.Meta>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='rub' />
                {price}
            </a>
        </Card.Content>
        <Segment inverted>
            <div className={'ui center aligned container'}>
                <Button onClick={addToCart.bind(this, book )} inverted>
                    Добавить в корзину {addedCount > 0 && `(${addedCount})`}
                </Button>
            </div>
        </Segment>
    </Card>
  )
};

export default BookCard;