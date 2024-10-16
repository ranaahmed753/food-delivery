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
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.3 9.716l-1.886 1.886a2 2 0 01-2.828 0L3.7 9.716a4.667 4.667 0 116.6 0z"
        stroke="#FE8C00"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.75 6.417a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0z"
        stroke="#FE8C00"
        strokeWidth={1.5}
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
const CircularBackIcon = props => {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} stroke="#EDEDED" />
      <Path
        d="M20.5 23.833L14.667 18l5.833-5.834"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const CircularHeartIcon = props => {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} stroke="#EDEDED" />
      <Path
        d="M11.598 13.265a3.75 3.75 0 000 5.303L18 24.97l6.402-6.402a3.75 3.75 0 00-5.304-5.303L18 14.363l-1.098-1.098a3.75 3.75 0 00-5.304 0z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const LeftArrowBackIcon = props => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12.5 15.833L6.667 10 12.5 4.167"
        stroke="#403A3A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const ClockIcon = props => {
  return (
    <Svg
      width={14}
      height={15}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 14.5a7 7 0 100-14 7 7 0 000 14zm1.4-9.8a.7.7 0 10-1.4 0v2.8H4.9a.7.7 0 100 1.4h2.8a.7.7 0 00.7-.7V4.7z"
        fill="#FE8C00"
      />
    </Svg>
  );
};
const DollarIcon = props => {
  return (
    <Svg
      width={10}
      height={23}
      viewBox="0 0 10 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.225 13.91c0 .57-.155 1.095-.465 1.575-.3.47-.745.85-1.335 1.14-.58.29-1.28.45-2.1.48v1.2H4.38v-1.23c-1.1-.1-2-.435-2.7-1.005C.99 15.5.625 14.725.585 13.745H3.72c.04.51.26.845.66 1.005v-1.92c-.84-.23-1.5-.44-1.98-.63-.48-.2-.91-.52-1.29-.96-.37-.44-.555-1.04-.555-1.8 0-.63.165-1.175.495-1.635.34-.47.8-.83 1.38-1.08a5.47 5.47 0 011.95-.45V5.06h.945v1.215c1.11.08 1.99.4 2.64.96.66.56 1.025 1.33 1.095 2.31H5.895c-.04-.46-.23-.765-.57-.915v1.905l.375.12c.72.2 1.315.41 1.785.63.48.21.89.53 1.23.96.34.42.51.975.51 1.665zM3.69 9.305c0 .36.23.655.69.885V8.54c-.46.08-.69.335-.69.765zm1.635 5.52c.24-.05.43-.145.57-.285.14-.15.21-.335.21-.555 0-.35-.26-.635-.78-.855v1.695z"
        fill="#FE8C00"
      />
    </Svg>
  );
};
const PlusIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        stroke="#101010"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const MinusIcon = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18 12H6"
        stroke="#101010"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const CartIcon = props => {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3 2.5h1.667L5 4.167m1.333 6.666h8.334L18 4.167H5m1.333 6.666L5 4.167m1.333 6.666l-1.91 1.911c-.525.525-.154 1.423.589 1.423h9.655m0 0a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333zM8 15.833a1.667 1.667 0 11-3.333 0 1.667 1.667 0 013.333 0z"
        stroke="#fff"
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
  CircularBackIcon,
  CircularHeartIcon,
  LeftArrowBackIcon,
  ClockIcon,
  DollarIcon,
  PlusIcon,
  MinusIcon,
  CartIcon,
};
