import { Observer } from 'mobx-react-lite';
import * as React from 'react';
import { AppContext } from '../contexts/AppContext';

interface IHeaderProps {

}

export const Header: React.FC<IHeaderProps> = (props) => {
  const {spaceStore} = React.useContext(AppContext);
  return(
    <div>
      <Observer>
        {()=>(<span>{spaceStore.total}</span>)}
      </Observer>
    </div>
  );
}