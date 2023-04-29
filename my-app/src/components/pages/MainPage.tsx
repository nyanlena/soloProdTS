import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Input, Row } from 'reactstrap';
import type { ApiRes, CardType } from '../../types/cardTypes';
import OneCard from '../ui/OneCard';
import MyForm from '../ui/MyForm';
import type { FormType, SubmitHandler } from '../../types/subFormData';

export default function MainPage(): JSX.Element {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    axios<ApiRes>('https://hp-api.onrender.com/api/characters')
      .then((res) => setCards(res.data))
      .catch(console.log);
  }, []);

  const deleteHandler = (cardId: number): void => {
    setCards((prev) => prev.filter((el) => el.id !== cardId));
  };

  const submitHandler: SubmitHandler = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as FormType;
    axios<ApiRes>(`https://hp-api.onrender.com/api/characters/house/${data.house.toLowerCase()}`)
      .then((res) => setCards(res.data))
      .catch(console.log);
  };
  return (
    <>
      <Row>
        <Col xs={12}>
          <MyForm submitHandler={submitHandler} />
        </Col>
      </Row>
      <Row>
        {cards.map((card) => (
          <Col key={card.id} xs={4}>
            <OneCard card={card} deleteHandler={deleteHandler} />
          </Col>
        ))}
      </Row>
    </>
  );
}
