import * as React from 'react';

import {Item, Input} from 'native-base';

export default function TextField({
  placeholder,
  onChangeText,
}: {
  placeholder: string;
  onChangeText: (text: string) => void;
}): JSX.Element {
  return (
    <Item>
      <Input
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
        returnKeyType="done"
      />
    </Item>
  );
}
