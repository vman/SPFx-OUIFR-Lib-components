import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { CustomFabricLibrary, ButtonComponent } from 'fabric-lib';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  
  private myInstance;

  constructor(props){
    super(props);
    this.myInstance = new CustomFabricLibrary();
  }
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div>
        <ButtonComponent />
      </div>
    );
  }

  public componentDidMount(){
    
    console.log(this.myInstance.name());
  }
}
