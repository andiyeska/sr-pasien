import {createStackNavigator} from 'react-navigation';
import {HealthFacilityDetailScreen, HistoryScreen, ReferralDetailScreen} from '../../screen';

const HistoryStack = createStackNavigator(
    {
        HistoryScreen: {
            screen: HistoryScreen
        },
        ReferralDetailScreen: {
            screen: ReferralDetailScreen
        },
        HealthFacilityDetailScreen: {
            screen: HealthFacilityDetailScreen
        }
    }
);

HistoryStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

export default HistoryStack;