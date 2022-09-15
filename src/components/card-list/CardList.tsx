import './card-list.css';

import Card from '../card/Card';

import type { Monster } from '../../types/Monster';

interface CardListProps {
  monsters: Monster[];
}

const CardList: React.FC<CardListProps> = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
