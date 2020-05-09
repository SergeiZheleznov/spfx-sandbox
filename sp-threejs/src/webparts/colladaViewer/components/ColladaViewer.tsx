import * as React from 'react';
import styles from './ColladaViewer.module.scss';
import { IColladaViewerProps } from './IColladaViewerProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ColladaViewer extends React.Component<IColladaViewerProps, {}> {
  public render(): React.ReactElement<IColladaViewerProps> {
    return (
      <div className={ styles.colladaViewer }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
