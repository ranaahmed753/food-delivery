import {View, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from '../../helper/Helper';
import Assets from '../../../assets';
import {theme} from '../../styles/Theme';
import {
  CheckboxFull,
  MinusIcon,
  OutlineMinusIcon,
  OutlinePlusIcon,
  PlusIcon,
  TrashIcon,
} from '../svg/Icons';

const CartItem = ({item}) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: scale(12),
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.18,
        shadowRadius: 3.84,
        elevation: 15,
        backgroundColor: theme.colors.white,
        padding: 12,
        marginHorizontal: theme.sizes.basePadding,
      }}>
      <Pressable
        style={{
          backgroundColor: item?.isChecked
            ? theme.colors.primary
            : theme.colors.white,
          borderRadius: 4,
          borderColor: item?.isChecked ? 'none' : theme.colors.primary,
          borderWidth: item?.isChecked ? 0 : 1,
        }}>
        <CheckboxFull />
      </Pressable>

      <View style={{flexDirection: 'row'}}>
        <Image
          style={{
            height: scale(82),
            width: scale(85),
            borderRadius: scale(8),
            marginLeft: 16,
          }}
          source={Assets.burger_full}
        />
        <View style={{marginLeft: 16}}>
          <Text
            style={{
              ...theme.typography.Inter_16_Normal,
              color: theme.colors.black,
            }}
            numberOfLines={1}>
            Burger with meat
          </Text>
          <Text
            style={{
              ...theme.typography.Inter_16_Normal,
              color: theme.colors.primary,
            }}>
            $1200
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity>
                <OutlineMinusIcon />
              </TouchableOpacity>

              <Text
                style={{
                  ...theme.typography.Inter_16_Normal,
                  color: theme.colors.black,
                  marginHorizontal: 8,
                }}>
                0
              </Text>
              <TouchableOpacity>
                <OutlinePlusIcon />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <TrashIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CartItem;
