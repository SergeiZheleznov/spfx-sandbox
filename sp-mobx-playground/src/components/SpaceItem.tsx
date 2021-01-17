import * as React from 'react';
import { ISpace } from '../interfaces';

interface ISpaceItemProps {
  space: ISpace;
  onSpaceDelete: (space: ISpace) => Promise<void>;
}

export const SpaceItem: React.FC<ISpaceItemProps> = (props) => {
  const {space, onSpaceDelete} = props;
  return <div>
    {space.title} -
    <button onClick={()=>onSpaceDelete(space)}>Delete</button>
    <hr/>
  </div>
}