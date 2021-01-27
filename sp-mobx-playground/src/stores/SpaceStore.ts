import {action, makeObservable, observable, computed} from 'mobx';
import { ISpace, ISpaceService } from '../interfaces';

export interface ISpaceStore {
  spaces: ISpace[];
  addSpace: (spaceToAdd: ISpace) => Promise<void>;
  removeSpace: (spaceToRemove: ISpace) => Promise<void>;
  fetchSpaces: ()=> Promise<void>;
  total: number;
}

export class SpaceStore implements ISpaceStore {

  constructor(private spaceService: ISpaceService){
    makeObservable(this,
      {
        spaces: observable,
        addSpace: action,
        removeSpace: action,
        fetchSpaces: action,
        total: computed,
      });
  }

  public get total(): number {
    return this.spaces.length;
  } 
  
  public spaces: ISpace[] = [];

  public async addSpace(spaceToAdd) {
    try {
      const {spaceService} = this;
      const result = await spaceService.add(spaceToAdd);
      if (result) {
        this.spaces.push(result);
      }
      return Promise.resolve(undefined);
    } catch (error) {
      console.log(error);
    }
  }

  public async removeSpace(spaceToRemove: ISpace) {
    try {
      const {spaceService} = this;
      const result = await spaceService.remove(spaceToRemove);
      if (result) {
        this.spaces = this.spaces.filter(el=>el.id !== spaceToRemove.id);
      }
      return Promise.resolve(undefined);
    } catch (error) {
      console.log(error);
    }
  }

  public async fetchSpaces() {
    try {
      const {spaceService} = this;
      const result = await spaceService.getAll();
      this.spaces = result;
    } catch (error) {
      console.log(error);
    }
  }
}