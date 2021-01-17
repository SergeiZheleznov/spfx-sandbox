import * as React from 'react';
import {ISpaceStore} from '../stores/SpaceStore';

export interface IAppContext {
  spaceStore: ISpaceStore;
}

export const AppContext = React.createContext<IAppContext>({
  spaceStore: undefined
});