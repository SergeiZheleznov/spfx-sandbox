import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { AppContext } from '../contexts/AppContext';
import { SpaceItem } from '../components/SpaceItem';
import { ISpace } from '../interfaces';

interface ISpaceListProps {

}

export const SpaceList: React.FC<ISpaceListProps> = observer((props)=>{
  const {spaceStore} = React.useContext(AppContext);
  
  React.useEffect(()=>{
    (async()=> await spaceStore.fetchSpaces())();
  }, []);

  const onSpaceDelete = async (space: ISpace) => {
    await spaceStore.removeSpace(space);
  }

  return(<div>
    <h1>Space List</h1>
    {spaceStore.spaces?.map(space=><SpaceItem key={space.id} space={space} onSpaceDelete={onSpaceDelete}/>)}
  </div>);
});