import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class HistoryScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        const {navigate} = this.props.navigation

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigate('ReferralDetailScreen', {healthFacility: {name: 'RS Pondok Indah Bintaro', profile_picture: require('../../assets/images/rspib.jpg')}})} activeOpacity={0.7} style={{width: 100 + '%', minHeight: 0, backgroundColor: '#ffffff'}}>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'row', width: 100 + '%'}}>
                            <View style={{flexDirection: 'row', width: 70 + '%', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, color: '#002E52'}}>
                                    No. Rujukan:
                                    <Text style={{fontWeight: 'bold'}}>
                                        RJK1231DWA4
                                    </Text>
                                </Text>
                            </View>
                            <View style={{width: 30 + '%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, color: '#000000', textAlign: 'right'}}>Minggu, 10 Februari 2019</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 20, width: 100 + '%'}}>
                            <View style={{flexDirection: 'row', width: 70 + '%', alignItems: 'center'}}>
                                <Image style={{width: 10, height: 10}} source={require('../../assets/images/to.png')} />
                                <Text style={{fontSize: 12, color: '#000000', fontWeight: 'bold', marginLeft: 10}}>
                                    RS Pondok Indah Bintaro
                                </Text>
                            </View>
                            <View style={{width: 30 + '%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4', textAlign: 'right'}}>Poli Penyakit Dalam</Text>
                            </View>
                        </View>
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4}} />
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4, marginTop: 3}} />
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4, marginTop: 4}} />
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4, marginTop: 3}} />
                        <View style={{flexDirection: 'row', width: 100 + '%'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image style={{width: 10, height: 10}} source={require('../../assets/images/from.png')} />
                                <Text style={{fontSize: 12, color: '#000000', fontWeight: 'bold', marginLeft: 10}}>
                                    PKM Pondok Aren
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{backgroundColor: '#eeeeee', width: 100 + '%', height: 1}}/>

                <TouchableOpacity onPress={() => navigate('ReferralDetailScreen', {healthFacility: {name: 'RS Medika', profile_picture: require('../../assets/images/rsmed.jpg')}})} activeOpacity={0.7} style={{width: 100 + '%', minHeight: 0, backgroundColor: '#ffffff'}}>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'row', width: 100 + '%'}}>
                            <View style={{flexDirection: 'row', width: 70 + '%', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, color: '#002E52'}}>
                                    No. Rujukan:
                                    <Text style={{fontWeight: 'bold'}}>
                                        RJK1231DWA4
                                    </Text>
                                </Text>
                            </View>
                            <View style={{width: 30 + '%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, color: '#000000', textAlign: 'right'}}>Rabu, 27 Januari 2019</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 20, width: 100 + '%'}}>
                            <View style={{flexDirection: 'row', width: 70 + '%', alignItems: 'center'}}>
                                <Image style={{width: 10, height: 10}} source={require('../../assets/images/to.png')} />
                                <Text style={{fontSize: 12, color: '#000000', fontWeight: 'bold', marginLeft: 10}}>
                                    RS Medika
                                </Text>
                            </View>
                            <View style={{width: 30 + '%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4', textAlign: 'right'}}>Poli Penyakit Dalam</Text>
                            </View>
                        </View>
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4}} />
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4, marginTop: 3}} />
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4, marginTop: 4}} />
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4, marginTop: 3}} />
                        <View style={{flexDirection: 'row', width: 100 + '%'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image style={{width: 10, height: 10}} source={require('../../assets/images/from.png')} />
                                <Text style={{fontSize: 12, color: '#000000', fontWeight: 'bold', marginLeft: 10}}>
                                    PKM Pondok Aren
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={{backgroundColor: '#eeeeee', width: 100 + '%', height: 1}}/>

                <TouchableOpacity onPress={() => navigate('ReferralDetailScreen', {healthFacility: {name: 'RS Eka', profile_picture: require('../../assets/images/rseka.jpg')}})} activeOpacity={0.7} style={{width: 100 + '%', minHeight: 0, backgroundColor: '#ffffff'}}>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'row', width: 100 + '%'}}>
                            <View style={{flexDirection: 'row', width: 70 + '%', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, color: '#002E52'}}>
                                    No. Rujukan:
                                    <Text style={{fontWeight: 'bold'}}>
                                        RJK1231DWA4
                                    </Text>
                                </Text>
                            </View>
                            <View style={{width: 30 + '%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, color: '#000000', textAlign: 'right'}}>Senin, 4 Maret 2019</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 20, width: 100 + '%'}}>
                            <View style={{flexDirection: 'row', width: 70 + '%', alignItems: 'center'}}>
                                <Image style={{width: 10, height: 10}} source={require('../../assets/images/to.png')} />
                                <Text style={{fontSize: 12, color: '#000000', fontWeight: 'bold', marginLeft: 10}}>
                                    RS Eka
                                </Text>
                            </View>
                            <View style={{width: 30 + '%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4', textAlign: 'right'}}>Poli Penyakit Dalam</Text>
                            </View>
                        </View>
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4}} />
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4, marginTop: 3}} />
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4, marginTop: 4}} />
                        <View style={{width: 1, height: 5, backgroundColor: '#cacaca', marginLeft: 4, marginTop: 3}} />
                        <View style={{flexDirection: 'row', width: 100 + '%'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image style={{width: 10, height: 10}} source={require('../../assets/images/from.png')} />
                                <Text style={{fontSize: 12, color: '#000000', fontWeight: 'bold', marginLeft: 10}}>
                                    PKM Pondok Aren
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
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

export default HistoryScreen;