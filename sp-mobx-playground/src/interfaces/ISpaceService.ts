import { ISpace } from ".";

export interface ISpaceService {
  getAll(): Promise<ISpace[]>;
  add(spaceToAdd: ISpace): Promise<ISpace>;
  remove(spaceToRemove: ISpace): Promise<boolean>;
}