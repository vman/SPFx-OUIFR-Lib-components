import * as React from 'react';
import { DefaultButton, Label, PrimaryButton } from 'office-ui-fabric-react';

interface IButtonComponentProps {
  
}

export class ButtonComponent extends React.Component<IButtonComponentProps, {}> {
  public render(): JSX.Element {

    return (
      <div>
        <div>
          <Label>Standard</Label>
          <DefaultButton
            data-automation-id="test"
            allowDisabledFocus={true}
            disabled={false}
            checked={true}
            text="Button"
          />
        </div>
        <div>
          <Label>Primary</Label>
          <PrimaryButton
            data-automation-id="test"
            disabled={false}
            checked={true}
            text="Button"
            allowDisabledFocus={true}
          />
        </div>
      </div>
    );
  }
}
