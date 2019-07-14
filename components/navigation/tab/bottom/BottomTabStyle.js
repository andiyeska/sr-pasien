import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class BottomTabStyle extends Component {
    render() {
        const {navigation} = this.props;
        const {navigate} = navigation;
        const {index, routes} = navigation.state;

        return(
            <View style={styles.bottomTab}>
                <TouchableOpacity style={styles.tabBox} onPress={() => navigate('HomeStack')}>
                    <Icon name={'home'} size={24} color={index == 0 ? '#00818c' : '#aeaeae'} />
                    <Text style={[styles.tabTitle, {color: (index == 0 ? '#00818c' : '#aeaeae')}]}>Beranda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabBox} onPress={() => navigate('HistoryStack')}>
                    <Icon name={'history'} size={24} color={index == 1 ? '#00818c' : '#aeaeae'} />
                    <Text style={[styles.tabTitle, {color: (index == 1 ? '#00818c' : '#aeaeae')}]}>Riwayat Rujukan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabBox} onPress={() => navigate('ProfileStack')}>
                    <Icon name={'account'} size={24} color={index == 2 ? '#00818c' : '#aeaeae'} />
                    <Text style={[styles.tabTitle, {color: (index == 2 ? '#00818c' : '#aeaeae')}]}>Profil</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottomTab: {
        flexDirection: 'row',
        height: 60,
        width: 100 + '%',
        backgroundColor: '#ffffff',
    },
    tabBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: (100/3) + '%',
    },
    tabIcon: {
        width: 24,
        height: 24,
    },
    tabTitle: {
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default BottomTabStyle;