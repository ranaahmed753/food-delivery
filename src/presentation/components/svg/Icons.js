import * as React from 'react';
import Svg, {Path, Rect, Circle} from 'react-native-svg';

const RightArrowIcon = props => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        fill="#fff"
      />
    </Svg>
  );
};

const CircleArrowIcon = props => {
  return (
    <Svg
      width={96}
      height={96}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect x={17} y={17} width={62} height={62} rx={31} fill="#fff" />
      <Path
        d="M40 47.726a.75.75 0 01.648-.743l.102-.007h13.184l-4.763-4.743a.75.75 0 01.974-1.136l.084.073 6.05 6.024a.751.751 0 01.22.503l.001.029v.029l-.003.044.003-.073a.753.753 0 01-.148.446l-.006.01a.753.753 0 01-.066.074l-6.05 6.026a.75.75 0 01-1.132-.98l.073-.083 4.761-4.743H40.75a.75.75 0 01-.75-.75z"
        fill="#FE8C00"
      />
      <Circle
        opacity={0.08}
        cx={48}
        cy={48}
        r={47}
        stroke="#fff"
        strokeWidth={2}
      />
      <Path
        d="M1 48c0 25.957 21.043 47 47 47s47-21.043 47-47S73.957 1 48 1"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
};
export {RightArrowIcon, CircleArrowIcon};
