import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, Text, View, Image, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ReferralDetailScreen extends Component{
    static navigationOptions = {
        headerStyle: {
            color: '#ffffff',
        },
        headerTintColor: '#000000',
        headerTitle:
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000000'}} >RJK1231DWA4</Text>
                <Text style={{fontSize: 10, color: '#000000'}} >nomor rujukan</Text>
            </View>
        ,
    };

    state = {
        healthFacility: this.props.navigation.getParam('healthFacility')
    };

    render() {
        const {navigate} = this.props.navigation;

        return(
            <ScrollView style={styles.container}>
                <View style={{width: 100 + '%', minHeight: 0, backgroundColor: '#ffffff'}}>
                    <View style={styles.content}>
                        <Text style={{color: '#00818c', fontSize: 10}}>Tujuan Rujukan</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', width: 75 + '%', height: 113, backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: 4}}>
                                <TouchableOpacity onPress={() => navigate('HealthFacilityDetailScreen', {healthFacility: {name: this.state.healthFacility.name, profile_picture: this.state.healthFacility.profile_picture, type: 1}})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 99 + '%', height: 110, backgroundColor: '#ffffff', borderRadius: 4}}>
                                    <Image style={{width: 80, height: 80, borderRadius: 4, marginLeft: 10}} source={this.state.healthFacility.profile_picture} />
                                    <View style={{flexDirection: 'column', justifyContent: 'space-between', height: 80, marginLeft: 20}}>
                                        <Text style={{fontSize: 14, color: '#002E52', fontWeight: 'bold', width: 65 + '%'}}>{this.state.healthFacility.name}</Text>
                                        <Text style={{color: '#cacaca', fontSize: 10}}>Pondok Aren</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <View style={{justifyContent: 'center', alignItems: 'center', width: 15, height: 15, backgroundColor: '#00818c', borderRadius: 2}}>
                                                <Text style={{fontSize: 10, color: '#FFFFFF', fontWeight: 'bold'}}>A</Text>
                                            </View>
                                            <Image style={{width: 50 + '%', height: 15, marginLeft: 7}} resizeMode={'contain'} source={require('../../assets/images/bpjs.png')} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={{fontSize: 14, color: '#00818c', fontWeight: 'bold', textAlign: 'right'}}>Senin</Text>
                                <Text style={{fontSize: 10, color: '#000000', textAlign: 'right'}}>4 Maret 2019</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: 70, height: 20, backgroundColor: '#00a6fb', borderRadius: 2}}>
                                        <Text style={{fontSize: 12, color: '#ffffff', fontWeight: 'bold'}}>Poliklinik</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                                    <Text style={{fontSize: 12, color: '#c4c4c4', width: 50, textAlign: 'right'}}>Poli Penyakit Dalam</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', height: 50}}>
                            <View style={{width: 3, height: 5, backgroundColor: '#00818c', marginLeft: 4}} />
                            <View style={{width: 3, height: 5, backgroundColor: '#39969D', marginLeft: 4, marginTop: 3}} />
                            <View style={{width: 3, height: 5, backgroundColor: '#71AAAF', marginLeft: 4, marginTop: 4}} />
                            <View style={{width: 3, height: 5, backgroundColor: '#cacaca', marginLeft: 4, marginTop: 3}} />
                        </View>
                        <Text style={{color: '#c4c4c4', fontSize: 10}}>Asal Rujukan</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', width: 75 + '%', height: 113, backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: 4}}>
                                <TouchableOpacity onPress={() => navigate('HealthFacilityDetailScreen', {healthFacility: {name: 'PKM Pondok Aren', profile_picture: require('../../assets/images/pkmpa.jpg'), type: 1}})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 99 + '%', height: 110, backgroundColor: '#ffffff', borderRadius: 4}}>
                                    <Image style={{width: 80, height: 80, borderRadius: 4, marginLeft: 10}} source={require('../../assets/images/pkmpa.jpg')} />
                                    <View style={{flexDirection: 'column', justifyContent: 'space-between', height: 80, marginLeft: 20}}>
                                        <Text style={{fontSize: 14, color: '#002E52', fontWeight: 'bold', width: 65 + '%'}}>PKM Pondok Aren</Text>
                                        <Text style={{color: '#cacaca', fontSize: 10}}>Pondok Aren</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <View style={{justifyContent: 'center', alignItems: 'center', width: 45, height: 15, backgroundColor: '#c4c4c4', borderRadius: 2}}>
                                                <Text style={{fontSize: 10, color: '#FFFFFF', fontWeight: 'bold'}}>FKTP</Text>
                                            </View>
                                            <Image style={{width: 50 + '%', height: 15, marginLeft: 7}} resizeMode={'contain'} source={require('../../assets/images/bpjs.png')} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{justifyContent: 'center', width: 100 + '%', height: 25}}>
                    <Text style={{color: '#000000', fontWeight: 'bold', marginLeft: 3 + '%'}}>Deskripsi Rujukan</Text>
                </View>
                <View style={{width: 100 + '%', minHeight: 0, backgroundColor: '#ffffff'}}>
                    <View style={styles.content}>
                        <View>
                            <Text style={{color: '#c4c4c4', fontSize: 10}}>Pembuat Rujukan</Text>
                            <Text style={{color: '#000000', fontSize: 14, fontWeight: 'bold', marginTop: 5}}>dr Sutan Efendi</Text>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text style={{color: '#c4c4c4', fontSize: 10}}>Alasan Rujukan</Text>
                            <Text style={{color: '#000000', fontSize: 14, textAlign: 'justify', marginTop: 5}}>
                                Fasilitas kesehatan perujuk sudah terlalu penuh dan tidak memiliki peralatan yang memadai. Sedangkan pasien sudah berada di kondisi kritis sehingga membutuhkan bantuan segera. Saya mohon bantuannyaa.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{justifyContent: 'center', width: 100 + '%', height: 25}}>
                    <Text style={{color: '#000000', fontWeight: 'bold', marginLeft: 3 + '%'}}>Tindakan Awal</Text>
                </View>
                <View style={{backgroundColor: '#ffffff', width: 100 + '%', minHeight: 0}}>
                    <View style={{margin: 5 + '%'}}>
                        <View>
                            <Text style={{color: '#c4c4c4', fontSize: 10}}>Tindakan yang Diberikan</Text>
                            <Text style={{color: '#000000', fontSize: 14, textAlign: 'justify', marginTop: 5}}>
                                Pemberian obat untuk tindakan pertama terhadap kondisi pasien.
                            </Text>
                        </View>
                    </View>
                </View>
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

export default ReferralDetailScreen;