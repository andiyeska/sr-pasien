import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {HomeStack, HistoryStack, ProfileStack} from '../../stack';
import BottomTabStyle from './BottomTabStyle';

const BottomTab = createBottomTabNavigator(
    {
        HomeStack: {
            screen: HomeStack
        },
        HistoryStack: {
            screen: HistoryStack
        },
        ProfileStack: {
            screen: ProfileStack
        }
    },
    {
        order: ['HomeStack', 'HistoryStack', 'ProfileStack'],
        tabBarComponent: props => <BottomTabStyle {...props} />
    }
);

export default BottomTab;