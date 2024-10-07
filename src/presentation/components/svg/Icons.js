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

const ArrowDownIcon = props => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.667 6L8 10.667 3.333 6"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LocationIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RoundedSearchIcon = props => {
  return (
    <Svg
      width={40}
      height={41}
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect x={0.5} y={1} width={39} height={39} rx={19.5} stroke="#fff" />
      <Path
        d="M29 29.5l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const RoundedNotificationIcon = props => {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect x={0.5} y={0.5} width={39} height={39} rx={19.5} stroke="#fff" />
      <Path
        d="M23 25h5l-1.405-1.405A2.032 2.032 0 0126 22.16V19a6.003 6.003 0 00-4-5.659V13a2 2 0 10-4 0v.341c-2.33.824-4 3.047-4 5.659v3.159c0 .538-.214 1.055-.595 1.436L12 25h5m6 0v1a3 3 0 11-6 0v-1m6 0h-6"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StarIcon = props => {
  return (
    <Svg
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.524.464a.5.5 0 01.952 0l1.208 3.718a.5.5 0 00.475.346h3.91a.5.5 0 01.294.904L10.2 7.731a.5.5 0 00-.182.559l1.209 3.719a.5.5 0 01-.77.559l-3.163-2.299a.5.5 0 00-.588 0l-3.163 2.299a.5.5 0 01-.77-.56L3.982 8.29a.5.5 0 00-.182-.56L.636 5.433a.5.5 0 01.294-.904h3.91a.5.5 0 00.476-.346L6.524.464z"
        fill="#FE8C00"
      />
    </Svg>
  );
};

const OutlineHeartIcon = props => {
  return (
    <Svg
      width={18}
      height={15}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2.598 2.265a3.75 3.75 0 000 5.303L9 13.97l6.402-6.402a3.75 3.75 0 00-5.304-5.303L9 3.363 7.902 2.265a3.75 3.75 0 00-5.304 0z"
        stroke="#F14141"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export {
  RightArrowIcon,
  CircleArrowIcon,
  ArrowDownIcon,
  LocationIcon,
  RoundedSearchIcon,
  RoundedNotificationIcon,
  StarIcon,
  OutlineHeartIcon,
};
