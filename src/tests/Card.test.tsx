import { describe, it, expect } from 'vitest';
import { Card } from '../game/Card';

describe('Card', () => {
    it('should create a card with given properties', () =>{
        const card = new Card(1, 'El Gallo', 'My sister is scared of El Gallo', 'Placeholder.png');
        
        expect(card.id).toBe(1);
        expect(card.name).toBe('El Gallo');
        expect(card.description).toBe('My sister is scared of El Gallo');
        expect(card.image).toBe('Placeholder.png');
    });
});