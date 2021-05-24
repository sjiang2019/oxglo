import * as React from 'react';

import {Button, View} from 'react-native';
import {Icon} from 'native-base';

interface SaveCancelHeaderProps {
  showSave: boolean;
  showCancel: boolean;
  saveText?: string;
  cancelText?: string;
  onSave?: () => void;
  onCancel?: () => void;
}

export default function SaveCancelHeader(
  props: SaveCancelHeaderProps,
): JSX.Element {
  if (
    (props.showSave && !props.onSave) ||
    (props.showCancel && !props.onCancel)
  ) {
    throw 'Expected onSave or onCancel function to be defined';
  }

  return (
    <View style={{flexDirection: 'row', marginTop: 40}}>
      {props.showCancel && (
        <View style={{flex: 0, position: 'absolute', left: 30, top: 5}}>
          {props.cancelText ? (
            <Button onPress={props.onCancel} title={props.cancelText} />
          ) : (
            <Icon
              name="close-sharp"
              style={{fontSize: 30, height: 80, color: 'white'}}
              onPress={props.onCancel}
            />
          )}
        </View>
      )}
      {props.showSave && (
        <View style={{flex: 0, position: 'absolute', right: 30, top: 5}}>
          <Button onPress={props.onSave} title={props.saveText || 'Save'} />
        </View>
      )}
    </View>
  );
}
