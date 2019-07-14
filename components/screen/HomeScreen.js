import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, Text, View, Image, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class HomeScreen extends Component {
    static navigationOptions = {
        header: (
            <View style={{height: 45, marginHorizontal: 3 + '%'}}>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{width: 24, height: 24}}
                               source={require('../../assets/images/logo.png')}/>
                        <View style={{flexDirection: 'row', paddingLeft: 6 + '%'}}>
                            <Text style={{fontWeight: 'bold'}}>Si</Text>
                            <Text>Rujuk</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>Budi Sudrajat</Text>
                    </View>
                </View>
            </View>
        ),
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'#00818c'} />
                <View activeOpacity={0.7} style={{width: 100 + '%', minHeight: 0, backgroundColor: '#ffffff'}}>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'row', width: 100 + '%'}}>
                            <View style={{flexDirection: 'row', width: 70 + '%', alignItems: 'center'}}>
                                <Text style={{fontSize: 16, color: '#000000', fontWeight: 'bold'}}>Jadwal Rujukan Terbaru</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigate('ReferralDetailScreen', {healthFacility: {name: 'RS Pondok Indah Bintaro', profile_picture: require('../../assets/images/rspib.jpg')}})} style={{width: 30 + '%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{fontSize: 14, color: '#00818c', fontWeight: 'bold', textAlign: 'right'}}>lihat rujukan</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 20, width: 100 + '%'}}>
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
                                    PKM Jurangmangu
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{width: 100 + '%', minHeight: 0, marginTop: 20, backgroundColor: '#ffffff'}}>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'row', width: 100 + '%'}}>
                            <View style={{flexDirection: 'row', width: 70 + '%', alignItems: 'center'}}>
                                <Text style={{fontSize: 14, color: '#000000', fontWeight: 'bold'}}>Fasilitas Kesehatan Sekitar</Text>
                            </View>
                            <View style={{width: 30 + '%'}}>
                                <TouchableOpacity onPress={() => navigate('HealthFacilityAroundScreen')} style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                    <Text style={{fontSize: 14, color: '#00818c', fontWeight: 'bold'}}>lihat semua</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <ScrollView style={{marginTop: 10}} horizontal={true} >
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{flexDirection: 'row', width: 283, height: 113, backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: 4}}>
                                    <TouchableOpacity onPress={() => navigate('HealthFacilityDetailScreen', {healthFacility: {name: 'RS Pondok Indah Bintaro', profile_picture: require('../../assets/images/rspib.jpg'), type: 1}})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 280, height: 110, backgroundColor: '#ffffff', borderRadius: 4}}>
                                        <Image style={{width: 80, height: 80, borderRadius: 4, marginLeft: 10}} source={require('../../assets/images/rspib.jpg')} />
                                        <View style={{flexDirection: 'column', justifyContent: 'space-between', height: 80, marginLeft: 20}}>
                                            <Text style={{fontSize: 14, color: '#002E52', fontWeight: 'bold', width: 170}}>RS Pondok Indah Bintaro</Text>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <View style={{justifyContent: 'center', alignItems: 'center', width: 15, height: 15, backgroundColor: '#00818c', borderRadius: 2}}>
                                                    <Text style={{fontSize: 10, color: '#FFFFFF', fontWeight: 'bold'}}>A</Text>
                                                </View>
                                                <Image style={{width: 100, height: 15, marginLeft: 7}} resizeMode={'contain'} source={require('../../assets/images/bpjs.png')} />
                                            </View>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Icon size={15} name={'map-marker-distance'} color={'#00818c'} />
                                                <Text style={{fontSize: 10, marginLeft: 10}}>
                                                    <Text style={{color: '#00818c', fontWeight: 'bold'}}>30 menit </Text>
                                                    <Text style={{color: '#aeaeae', fontWeight: 'bold'}}>(5 km)</Text>
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{flexDirection: 'row', width: 283, height: 113, backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: 4, marginLeft: 10}}>
                                    <TouchableOpacity onPress={() => navigate('HealthFacilityDetailScreen', {healthFacility: {name: 'RS Medika', profile_picture: require('../../assets/images/rsmed.jpg'), type: 1}})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 280, height: 110, backgroundColor: '#ffffff', borderRadius: 4}}>
                                        <Image style={{width: 80, height: 80, borderRadius: 4, marginLeft: 10}} source={require('../../assets/images/rsmed.jpg')} />
                                        <View style={{flexDirection: 'column', justifyContent: 'space-between', height: 80, marginLeft: 20}}>
                                            <Text style={{fontSize: 14, color: '#002E52', fontWeight: 'bold', width: 170}}>RS Medika</Text>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <View style={{justifyContent: 'center', alignItems: 'center', width: 15, height: 15, backgroundColor: '#00818c', borderRadius: 2}}>
                                                    <Text style={{fontSize: 10, color: '#FFFFFF', fontWeight: 'bold'}}>A</Text>
                                                </View>
                                                <Image style={{width: 100, height: 15, marginLeft: 7}} resizeMode={'contain'} source={require('../../assets/images/bpjs.png')} />
                                            </View>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Icon size={15} name={'map-marker-distance'} color={'#00818c'} />
                                                <Text style={{fontSize: 10, marginLeft: 10}}>
                                                    <Text style={{color: '#00818c', fontWeight: 'bold'}}>1 jam 5 menit </Text>
                                                    <Text style={{color: '#aeaeae', fontWeight: 'bold'}}>(25 km)</Text>
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{flexDirection: 'row', width: 283, height: 113, backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: 4, marginLeft: 10}}>
                                    <TouchableOpacity onPress={() => navigate('HealthFacilityDetailScreen', {healthFacility: {name: 'RS Eka', profile_picture: require('../../assets/images/rseka.jpg'), type: 1}})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 280, height: 110, backgroundColor: '#ffffff', borderRadius: 4}}>
                                        <Image style={{width: 80, height: 80, borderRadius: 4, marginLeft: 10}} source={require('../../assets/images/rseka.jpg')} />
                                        <View style={{flexDirection: 'column', justifyContent: 'space-between', height: 80, marginLeft: 20}}>
                                            <Text style={{fontSize: 14, color: '#002E52', fontWeight: 'bold', width: 170}}>RS Eka</Text>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <View style={{justifyContent: 'center', alignItems: 'center', width: 15, height: 15, backgroundColor: '#00818c', borderRadius: 2}}>
                                                    <Text style={{fontSize: 10, color: '#FFFFFF', fontWeight: 'bold'}}>A</Text>
                                                </View>
                                                <Image style={{width: 100, height: 15, marginLeft: 7}} resizeMode={'contain'} source={require('../../assets/images/bpjs.png')} />
                                            </View>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <Icon size={15} name={'map-marker-distance'} color={'#00818c'} />
                                                <Text style={{fontSize: 10, marginLeft: 10}}>
                                                    <Text style={{color: '#00818c', fontWeight: 'bold'}}>1 jam </Text>
                                                    <Text style={{color: '#aeaeae', fontWeight: 'bold'}}>(15 km)</Text>
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
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

export default HomeScreen;