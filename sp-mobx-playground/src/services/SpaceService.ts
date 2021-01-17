import { ISpace, ISpaceService } from "../interfaces";
import { Guid } from '@microsoft/sp-core-library';

export class SpaceService implements ISpaceService {

  public getAll() {
    return Promise.resolve([
      {
        id: (Guid.newGuid()).toString(),
        title: 'space 1'
      },
      {
        id: (Guid.newGuid()).toString(),
        title: 'space 2'
      },
      {
        id: (Guid.newGuid()).toString(),
        title: 'space 3'
      },
    ]);
  }
  public add(spaceToAdd: ISpace): Promise<ISpace> {
    return Promise.resolve(spaceToAdd);
  }
  public remove(spaceToRemove: ISpace): Promise<boolean> {
    return Promise.resolve(true);
  }
}