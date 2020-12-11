import * as React from 'react';
import {Image} from 'react-native';
import {StackNavigator} from './StackNavigator';
import BookRequest from '../screens/BookRequest';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export const TabNavigator = createBottomTabNavigator({
    BookDonate:{
        screen:StackNavigator,
        navigationOptions:{
            tabBarIcon:<Image source ={require('../assets/request-list.png')} style={{width:20,height:20}}/>,
            tabBarLabel:'Donate Books'
        }
    },
    BookRequest:{
        screen:BookRequest,
        navigationOptions:{
            tabBarIcon:<Image source ={require('../assets/request-book.png')} style={{width:20,height:20}}/>,
            tabBarLabel:'Request Books'
        }
    }
})