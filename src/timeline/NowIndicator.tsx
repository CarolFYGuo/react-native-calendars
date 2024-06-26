import React, {useMemo} from 'react';
import {View, TextStyle, ViewStyle} from 'react-native';
import {calcTimeOffset} from './helpers/presenter';
import {HOUR_BLOCK_HEIGHT} from './Packer';

export interface NowIndicatorProps {
  styles: {[key: string]: ViewStyle | TextStyle};
  width: number;
  left: number;
  start: number;
}

const NowIndicator = (props: NowIndicatorProps) => {
  const {styles, width, left, start} = props;

  const indicatorPosition = calcTimeOffset(HOUR_BLOCK_HEIGHT) - start*HOUR_BLOCK_HEIGHT;

  const nowIndicatorStyle = useMemo(() => {
    return [styles.nowIndicator, {top: indicatorPosition, left: left-48}];
  }, [indicatorPosition, left]);

  return (
    <View style={nowIndicatorStyle}>
      <View style={[styles.nowIndicatorLine, {width: width+48}]}/>
      <View style={styles.nowIndicatorKnob}/>
    </View>
  );
};

export default NowIndicator;
