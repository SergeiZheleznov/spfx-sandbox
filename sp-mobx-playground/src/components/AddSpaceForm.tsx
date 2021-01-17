import * as React from 'react';
import { ISpace } from '../interfaces';

interface IAddSpaceFormProps {
  onFormSubmit: (space: ISpace) => Promise<void>;
}

export const AddSpaceForm: React.FC<IAddSpaceFormProps> = (props) => {

  const [space, setSpace] = React.useState<ISpace>({
    title: ''
  });

  const {onFormSubmit} = props;

  return <div style={{border: '1px solid #ccc'}}>
    <input onChange={(ev)=>setSpace({...space, title: ev.target.value})} value={space.title} type="text"/>
    <hr/>
    <button onClick={()=>onFormSubmit(space)}>Add</button>
  </div>;
}