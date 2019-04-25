import React from 'react';
import Card from './Card';
import './List.css';

function List(props){
    const cardList = props.cards.map(function(card,i) {
        return <Card title={card.title} content={card.content} key={props.id}/>
      });
    return (
        <section className="List">
            <header class="List-header">
                <h2>{props.header}</h2>
            </header>
            <div class="List-cards">
                {cardList}
            </div>
        </section>
    );
}
export default List;