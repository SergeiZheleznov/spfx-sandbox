import * as React from 'react';
import styles from './ColladaViewer.module.scss';
import { IColladaViewerProps } from './IColladaViewerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as THREE from 'three';
import {ColladaLoader} from 'three/examples/jsm/loaders/ColladaLoader';

const model: any = require('./../assets/elf.dae');

export default class ColladaViewer extends React.Component<IColladaViewerProps, {}> {

  private renderer: THREE.WebGLRenderer;

  public componentDidMount() {


    const container = document.getElementById( 'viewport' );
    let elf = null;


    const camera = new THREE.PerspectiveCamera( 120, window.innerWidth / window.innerHeight, 0.1, 2000 );
    camera.position.set( 8, 10, 8 );
    camera.lookAt( 0, 3, 0 );

    const scene = new THREE.Scene();
    const loadingManager = new THREE.LoadingManager( () => {
      scene.add( elf );
    } );

    const loader = new ColladaLoader( loadingManager );
    loader.load( model, ( collada ) => {
       elf = collada.scene;
    } );

    const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
    scene.add( ambientLight );

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
    directionalLight.position.set( 1, 1, 0 ).normalize();
    scene.add( directionalLight );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( container.offsetWidth, container.offsetHeight);

    container.appendChild( this.renderer.domElement );
    this.renderer.render( scene, camera );
  }

  public render(): React.ReactElement<IColladaViewerProps> {

    return (
      <div id="viewport" className={ styles.colladaViewer }>

      </div>
    );
  }
}
