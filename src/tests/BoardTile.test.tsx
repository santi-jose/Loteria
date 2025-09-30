import { describe, it, expect } from 'vitest';

import { Card } from '../game/Card';
import { BoardTile } from '../game/BoardTile';
import cardsData from '../data/cards.json';

describe('BoardTiles', () => {
    it('default value of new BoardTile marked field is false', () => {
        const cardData = cardsData[0];
        const card = new Card(cardData['id'], cardData['name'], cardData['description'], cardData['image']);
        const tile = new BoardTile(card);

        expect(tile.isMarked).toBe(false);
    });

    it('returns Loteria Card 1 object as defined', () => {
        const cardData = cardsData[0];
        const card = new Card(cardData['id'], cardData['name'], cardData['description'], cardData['image']);
        const tile = new BoardTile(card);

        expect(tile.Card.ID).toBe(card.ID);
        expect(tile.Card.Name).toBe(card.Name);
        expect(tile.Card.Description).toBe(card.Description);
        expect(tile.Card.Image).toBe(card.Image);
    });

    it('toggles the boolean value stored within the BoardTile object', () => {
        const cardData = cardsData[0];
        const card = new Card(cardData['id'], cardData['name'], cardData['description'], cardData['image']);
        const tile = new BoardTile(card);

        tile.toggle();
        expect(tile.isMarked).toBe(true);
    });
});