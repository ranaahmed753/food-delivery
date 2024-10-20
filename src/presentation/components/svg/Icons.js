import * as React from 'react';
import Svg, {
  Path,
  Rect,
  Circle,
  G,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

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
const CircularMenuIcon = props => {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} fill="#fff" />
      <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} stroke="#EDEDED" />
      <Path
        d="M12.167 18h.008M18 18h.008m5.825 0h.009M13 18a.833.833 0 11-1.667 0A.833.833 0 0113 18zm5.833 0a.833.833 0 11-1.666 0 .833.833 0 011.666 0zm5.834 0A.833.833 0 1123 18a.833.833 0 011.667 0z"
        stroke="#101010"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const OutlineBackIcon = props => {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} fill="#fff" />
      <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} stroke="#EDEDED" />
      <Path
        d="M20.5 23.833L14.667 18l5.833-5.834"
        stroke="#101010"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const OfferIcon = props => {
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
        d="M6.111 3.182A3.193 3.193 0 007.93 2.43a3.193 3.193 0 014.142 0c.512.436 1.148.7 1.818.753a3.193 3.193 0 012.929 2.93c.053.67.317 1.305.752 1.817a3.193 3.193 0 010 4.142 3.194 3.194 0 00-.752 1.817 3.193 3.193 0 01-2.93 2.93 3.194 3.194 0 00-1.817.752 3.193 3.193 0 01-4.142 0 3.193 3.193 0 00-1.818-.752 3.193 3.193 0 01-2.929-2.93 3.194 3.194 0 00-.753-1.817 3.193 3.193 0 010-4.142c.436-.512.7-1.148.753-1.818a3.193 3.193 0 012.93-2.929zm7.664 3.926a.625.625 0 10-.884-.883L6.225 12.89a.625.625 0 00.884.884l6.666-6.667zM7.5 6.458a1.042 1.042 0 100 2.084 1.042 1.042 0 000-2.084zm5 5a1.042 1.042 0 100 2.083 1.042 1.042 0 000-2.083z"
        fill="#FE8C00"
      />
    </Svg>
  );
};

const TrashIcon = props => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.833 5.833l-.722 10.12a1.667 1.667 0 01-1.663 1.547H6.552c-.874 0-1.6-.676-1.663-1.548L4.167 5.833m4.166 3.334v5m3.334-5v5m.833-8.334v-2.5a.833.833 0 00-.833-.833H8.333a.833.833 0 00-.833.833v2.5m-4.167 0h13.334"
        stroke="#F14141"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const OutlinePlusIcon = props => {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect x={0.5} y={0.5} width={27} height={27} rx={13.5} stroke="#EDEDED" />
      <Path
        d="M14 8v6m0 0v6m0-6h6m-6 0H8"
        stroke="#101010"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const OutlineMinusIcon = props => {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect x={0.5} y={0.5} width={27} height={27} rx={13.5} stroke="#EDEDED" />
      <Path
        d="M20 14H8"
        stroke="#878787"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
const CheckboxFull = props => {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4.167 10.834L7.5 14.167l8.333-8.334"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const EmptyCartSvg = props => {
  return (
    <Svg
      width={292}
      height={220}
      viewBox="0 0 292 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle
        cx={146.078}
        cy={103.5}
        r={103.5}
        fill="#FFAF0B"
        fillOpacity={0.14}
      />
      <Circle cx={39.3438} cy={32.3438} r={9.70312} fill="#FE8C00" />
      <Circle cx={34.4922} cy={181.125} r={12.9375} fill="#FE8C00" />
      <Circle cx={265.75} cy={58.2188} r={12.9375} fill="#FE8C00" />
      <Circle cx={247.961} cy={14.5547} r={8.08594} fill="#FE8C00" />
      <G filter="url(#filter0_dd_1007_9214)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M149.312 25.875c-21.776 0-41.04 10.76-52.763 27.255a51.894 51.894 0 00-11.924-1.38c-28.58 0-51.75 23.17-51.75 51.75 0 28.581 23.17 51.75 51.75 51.75H214c25.008 0 45.281-20.273 45.281-45.281S239.008 64.688 214 64.688a45.77 45.77 0 00-5.252.3c-9.912-23.006-32.793-39.113-59.436-39.113z"
          fill="#F9F5FF"
        />
        <Circle
          cx={84.625}
          cy={103.5}
          r={51.75}
          fill="url(#paint0_linear_1007_9214)"
        />
        <Circle
          cx={149.312}
          cy={90.5625}
          r={64.6875}
          fill="url(#paint1_linear_1007_9214)"
        />
        <Circle
          cx={214}
          cy={109.969}
          r={45.2812}
          fill="url(#paint2_linear_1007_9214)"
        />
      </G>
      <G filter="url(#filter1_b_1007_9214)">
        <Rect
          x={100.797}
          y={97.0312}
          width={90.5625}
          height={90.5625}
          rx={45.2812}
          fill="#FE8C00"
        />
        <Path
          d="M163.059 159.293l-6.604-6.604m4.717-11.32c0 8.857-7.18 16.037-16.037 16.037s-16.037-7.18-16.037-16.037 7.18-16.037 16.037-16.037 16.037 7.18 16.037 16.037z"
          stroke="#fff"
          strokeWidth={3.23438}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1007_9214"
          x1={44.8884}
          y1={69.308}
          x2={136.375}
          y2={155.25}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFAF0B" stopOpacity={0.44} />
          <Stop offset={0.997917} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1007_9214"
          x1={99.6417}
          y1={47.8225}
          x2={214}
          y2={155.25}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFAF0B" stopOpacity={0.44} />
          <Stop offset={0.997917} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_1007_9214"
          x1={179.23}
          y1={80.0508}
          x2={259.281}
          y2={155.25}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFAF0B" stopOpacity={0.44} />
          <Stop offset={0.997917} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
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
  CircularMenuIcon,
  OutlineBackIcon,
  OfferIcon,
  TrashIcon,
  OutlinePlusIcon,
  OutlineMinusIcon,
  CheckboxFull,
  EmptyCartSvg,
};
