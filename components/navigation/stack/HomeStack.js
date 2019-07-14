import {createStackNavigator} from 'react-navigation';
import {HomeScreen, ReferralDetailScreen, HealthFacilityDetailScreen, HealthFacilityAroundScreen} from '../../screen';

const HomeStack = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen
        },
        ReferralDetailScreen: {
            screen: ReferralDetailScreen
        },
        HealthFacilityDetailScreen: {
            screen: HealthFacilityDetailScreen
        },
        HealthFacilityAroundScreen: {
            screen: HealthFacilityAroundScreen
        }
    }
);

HomeStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

export default HomeStack;