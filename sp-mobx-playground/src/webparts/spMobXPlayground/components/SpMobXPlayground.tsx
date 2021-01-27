import * as React from 'react';
import { AddSpaceForm } from '../../../components/AddSpaceForm';
import { Header } from '../../../components/Header';
import { SpaceList } from '../../../containers/SpaceList';
import { AppContext } from '../../../contexts/AppContext';
import { ISpace } from '../../../interfaces';
import { SpaceService } from '../../../services';
import { SpaceStore } from '../../../stores/SpaceStore';

// https://dev.to/shevchenkonik/react-typescript-mobx-4mei
// https://github.com/mobxjs/mobx-react/issues/635
// https://rayudu86.blogspot.com/2019/08/how-to-upgrade-typescript-version-in.html
// https://www.voitanos.io/blog/use-different-typescript-versions-in-sharepoint-framework-projects/
export interface ISpMobXPlaygroundProps {
  description: string;
}

export const SpMobXPlayground: React.FC<ISpMobXPlaygroundProps> = (props)=> {
    const spaceService = new SpaceService();
    const spaceStore = new SpaceStore(spaceService);

    const onFormSubmit = async(space: ISpace) => {
      await spaceStore.addSpace(space);
    }

    return <AppContext.Provider value={{spaceStore}}>
      <Header />
      <AddSpaceForm onFormSubmit={onFormSubmit} />
      <hr/>
      <SpaceList />
      <hr/>

    </AppContext.Provider>;
};
