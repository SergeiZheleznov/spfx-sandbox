import * as React from 'react';
import { SpaceList } from '../../../containers/SpaceList';
import { AppContext } from '../../../contexts/AppContext';
import { SpaceService } from '../../../services';
import { SpaceStore } from '../../../stores/SpaceStore';

// https://github.com/mobxjs/mobx-react/issues/635
// https://rayudu86.blogspot.com/2019/08/how-to-upgrade-typescript-version-in.html
// https://www.voitanos.io/blog/use-different-typescript-versions-in-sharepoint-framework-projects/
export interface ISpMobXPlaygroundProps {
  description: string;
}

export const SpMobXPlayground: React.FC<ISpMobXPlaygroundProps> = (props)=> {
    const spaceService = new SpaceService();
    const spaceStore = new SpaceStore(spaceService);
    
    return <>
      SpMobXPlayground
      <AppContext.Provider value={{spaceStore}}>
        <h1>AppContext</h1>
        <SpaceList />
      </AppContext.Provider>
    </>;
};
