import * as React from 'react';
import { ISpace } from '../interfaces';

interface ISpaceItemProps {
  space: ISpace;
}

export const SpaceItem: React.FC<ISpaceItemProps> = (props) => {
  const {space} = props;
  return <div>
    {space.title}
    <hr/>
  </div>
}