import {createStackNavigator} from 'react-navigation-stack';
import BookDonate from '../screens/BookDonate';
import ReceiverScreen from '../screens/ReceiverScreen';

export const StackNavigator = createStackNavigator({
    bookDonateList:{
        screen:BookDonate,
        navigationOptions:{
            headerShown:false,
        }
    }, 
    receiverScreen:{
        screen:ReceiverScreen,
        navigationOptions:{
            headerShown:false,
        }
    },
},{
    initialRouteName:"bookDonateList"
},)