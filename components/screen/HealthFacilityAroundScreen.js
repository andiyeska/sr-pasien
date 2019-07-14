import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class HealthFacilityAroundScreen extends Component {

    static navigationOptions = {
        headerStyle: {
            color: '#ffffff',
        },
        headerTintColor: '#000000',
        headerTitle:
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000000'}}>Faskes Sekitar</Text>
            </View>
        ,
    };

    state = {
        selectedFilter: 6,
        isOnFocus: false,
        level: ['A', 'B', 'C', 'D', 'E', 'FKTP'],
        levelF: [{name: 'PKM Pondok Aren', profile_picture: require('../../assets/images/pkmpa.jpg'), distance_length: 1000, distance_time: 20, type: 2}],
        levelE: [
            {name: 'RS Antoni', profile_picture: require('../../assets/images/rspib.jpg'), distance_length: 5000, distance_time: 30, type: 1},
            {name: 'RS Julia', profile_picture: require('../../assets/images/rsmed.jpg'), distance_length: 25000, distance_time: 65, type: 1},
            {name: 'RS Halima', profile_picture: require('../../assets/images/rseka.jpg'), distance_length: 15000, distance_time: 60, type: 1}
        ],
        levelD: [
            {name: 'RS Loam', profile_picture: require('../../assets/images/rspib.jpg'), distance_length: 5000, distance_time: 30, type: 1},
            {name: 'RS Selaras', profile_picture: require('../../assets/images/rsmed.jpg'), distance_length: 25000, distance_time: 65, type: 1},
            {name: 'RS Bunda', profile_picture: require('../../assets/images/rseka.jpg'), distance_length: 15000, distance_time: 60, type: 1}
        ],
        levelC: [
            {name: 'RS Dalima', profile_picture: require('../../assets/images/rspib.jpg'), distance_length: 5000, distance_time: 30, type: 1},
            {name: 'RS Putra', profile_picture: require('../../assets/images/rsmed.jpg'), distance_length: 25000, distance_time: 65, type: 1},
            {name: 'RS Telko', profile_picture: require('../../assets/images/rseka.jpg'), distance_length: 15000, distance_time: 60, type: 1}
        ],
        levelB: [
            {name: 'RS Dalima', profile_picture: require('../../assets/images/rspib.jpg'), distance_length: 5000, distance_time: 30, type: 1},
            {name: 'RS Putra', profile_picture: require('../../assets/images/rsmed.jpg'), distance_length: 25000, distance_time: 65, type: 1},
            {name: 'RS Telko', profile_picture: require('../../assets/images/rseka.jpg'), distance_length: 15000, distance_time: 60, type: 1}
        ],
        levelA: [
            {name: 'RS Pondok Indah Bintaro', profile_picture: require('../../assets/images/rspib.jpg'), distance_length: 5000, distance_time: 30, type: 1},
            {name: 'RS Medika', profile_picture: require('../../assets/images/rsmed.jpg'), distance_length: 25000, distance_time: 65, type: 1},
            {name: 'RS Eka', profile_picture: require('../../assets/images/rseka.jpg'), distance_length: 15000, distance_time: 60, type: 1}
            ],
    };

    _setHealthFacilityFilteredScreen() {
        let levelSelected = this.state.selectedFilter;
        let healthFacilities = [];
        if(levelSelected <= 1) {
            healthFacilities = this.state.levelA
        } else if(levelSelected <= 2) {
            healthFacilities = this.state.levelB
        } else if(levelSelected <= 3) {
            healthFacilities = this.state.levelC
        } else if(levelSelected <= 4) {
            healthFacilities = this.state.levelD
        } else if(levelSelected <= 5) {
            healthFacilities = this.state.levelE
        } else if(levelSelected <= 6) {
            healthFacilities = this.state.levelF
        }

        return this._setHealthFacilityScreen(healthFacilities);
    };

    _setHealthFacilityScreen(healthFacilities) {
        let state = this.state;
        let navigate = this.props.navigation.navigate
        let result = healthFacilities.map(function (healthFacility, index) {
            return (
                <View key={index}>
                    <TouchableOpacity
                        onPress={() => navigate('HealthFacilityDetailScreen', {healthFacility: healthFacility})}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginVertical: 20
                    }}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{width: 70, height: 70, borderRadius: 3}}
                                   source={healthFacility.profile_picture}/>
                            <View style={{
                                flexDirection: 'column',
                                height: 70,
                                justifyContent: 'space-evenly',
                                marginLeft: 7
                            }}>
                                <Text style={{fontSize: 12, color: '#000000', fontWeight: 'bold'}}>{healthFacility.name}</Text>
                                <Text style={{fontSize: 10, color: '#cacaca'}}>Pondok Aren</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{
                                        width: (state.selectedFilter < 6 ? 15 : 45),
                                        height: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: (state.selectedFilter < 6 ? '#00818c' : '#c4c4c4'),
                                        borderRadius: 2
                                    }}>
                                        <Text
                                            style={{fontSize: 10, color: '#ffffff', fontWeight: 'bold'}}>{state.level[state.selectedFilter - 1]}</Text>
                                    </View>
                                    <Image style={{width: 100, height: 15, marginLeft: 7}} resizeMode={'contain'}
                                           source={require('../../assets/images/bpjs.png')}/>
                                </View>
                            </View>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Icon size={15} name={'map-marker-distance'} color={'#00818c'}/>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontSize: 10, marginLeft: 10}}>
                                    <Text style={{color: '#00818c', fontWeight: 'bold'}}>{
                                        (Math.floor(healthFacility.distance_time / 60) > 0 ? Math.floor(healthFacility.distance_time / 60) + ' jam ' : '')
                                        || (healthFacility.distance_time % 60 > 0 ? healthFacility.distance_time % 60 + ' menit' : '')
                                    }</Text>
                                    <Text style={{color: '#aeaeae', fontWeight: 'bold'}}> ({
                                        (Math.floor(healthFacility.distance_length / 1000) > 0 ? Math.floor(healthFacility.distance_length / 1000) + ' km ' : '')
                                        || (healthFacility.distance_length % 1000 > 0 ? healthFacility.distance_length % 1000 + ' meter' : '')
                                    })</Text>
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{width: 100 + '%', height: 1, backgroundColor: '#fafafa'}}/>
                </View>
            );
        });

        return result;
    };

    render() {
        const screenHeight = Dimensions.get('window').height;

        return (
            <ScrollView style={styles.container}>
                <View style={{width: 100 + '%', minHeight: 0, backgroundColor: '#ffffff'}}>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontSize: 14, color: '#000000', fontWeight: 'bold'}}>Filter</Text>
                            <TouchableOpacity
                                style={{
                                    width: 25 + '%',
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: (this.state.selectedFilter === 1 ? '#00818c' : '#ffffff'),
                                    borderRadius: 100,
                                    borderWidth: 1,
                                    borderColor: '#00818c',
                                    marginLeft: 3 + '%'
                                }}
                                onPress={() => this.setState({selectedFilter: 1})}
                            >
                                <Text style={{
                                    fontSize: 12,
                                    color: (this.state.selectedFilter === 1 ? '#ffffff' : '#00818c'),
                                    fontWeight: 'bold'
                                }}>Tingkat A</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 25 + '%',
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: (this.state.selectedFilter === 2 ? '#00818c' : '#ffffff'),
                                    borderRadius: 100,
                                    borderWidth: 1,
                                    borderColor: '#00818c',
                                    marginLeft: 3 + '%'
                                }}
                                onPress={() => this.setState({selectedFilter: 2})}
                            >
                                <Text style={{
                                    fontSize: 12,
                                    color: (this.state.selectedFilter === 2 ? '#ffffff' : '#00818c'),
                                    fontWeight: 'bold'
                                }}>Tingkat B</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 25 + '%',
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: (this.state.selectedFilter === 3 ? '#00818c' : '#ffffff'),
                                    borderRadius: 100,
                                    borderWidth: 1,
                                    borderColor: '#00818c',
                                    marginLeft: 3 + '%'
                                }}
                                onPress={() => this.setState({selectedFilter: 3})}
                            >
                                <Text style={{
                                    fontSize: 12,
                                    color: (this.state.selectedFilter === 3 ? '#ffffff' : '#00818c'),
                                    fontWeight: 'bold'
                                }}>Tingkat C</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 3 + '%'}}>
                            <TouchableOpacity
                                style={{
                                    width: 25 + '%',
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: (this.state.selectedFilter === 4 ? '#00818c' : '#ffffff'),
                                    borderRadius: 100,
                                    borderWidth: 1,
                                    borderColor: '#00818c',
                                }}
                                onPress={() => this.setState({selectedFilter: 4})}
                            >
                                <Text style={{
                                    fontSize: 12,
                                    color: (this.state.selectedFilter === 4 ? '#ffffff' : '#00818c'),
                                    fontWeight: 'bold'
                                }}>Tingkat D</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 25 + '%',
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: (this.state.selectedFilter === 5 ? '#00818c' : '#ffffff'),
                                    borderRadius: 100,
                                    borderWidth: 1,
                                    borderColor: '#00818c',
                                    marginLeft: 3 + '%'
                                }}
                                onPress={() => this.setState({selectedFilter: 5})}
                            >
                                <Text style={{
                                    fontSize: 12,
                                    color: (this.state.selectedFilter === 5 ? '#ffffff' : '#00818c'),
                                    fontWeight: 'bold'
                                }}>Tingkat E</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 25 + '%',
                                    height: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: (this.state.selectedFilter === 6 ? '#00818c' : '#ffffff'),
                                    borderRadius: 100,
                                    borderWidth: 1,
                                    borderColor: '#00818c',
                                    marginLeft: 3 + '%'
                                }}
                                onPress={() => this.setState({selectedFilter: 6})}
                            >
                                <Text style={{
                                    fontSize: 12,
                                    color: (this.state.selectedFilter === 6 ? '#ffffff' : '#00818c'),
                                    fontWeight: 'bold'
                                }}>FKTP</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: 100 + '%', marginTop: 5 + '%'}}>
                            <View style={{
                                // borderRadius: 100,
                                borderBottomWidth: 1,
                                borderColor: (this.state.isOnFocus ? '#00818c' : '#cacaca'),
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginHorizontal: 3 + '%'
                                }}>
                                    <Icon name={'magnify'} color={'#cacaca'} size={15}/>
                                    <View style={{width: 1, height: 10, backgroundColor: '#cacaca'}}/>
                                    <TextInput style={{width: 90 + '%', height: 40}}
                                               placeholder={'Cari Faskes Sekitar...'}
                                               placeholderTextColor={'#cacaca'}
                                               onFocus={() => this.setState({isOnFocus: true})}
                                               onBlur={() => this.setState({isOnFocus: false})}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <ScrollView style={{width: 100 + '%', height: screenHeight * 0.65, backgroundColor: '#ffffff'}}
                            nestedScrollEnabled={true}>
                    <View style={{marginHorizontal: 5 + '%'}}>
                        {this._setHealthFacilityFilteredScreen()}
                    </View>
                </ScrollView>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F5F7',
    },
    content: {
        margin: 5 + '%'
    },
});

export default HealthFacilityAroundScreen;