import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, Text, View, Image, StatusBar, Modal, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from "react-native-modal-datetime-picker";

class HealthFacilityDetailScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerStyle: {
                color: '#ffffff',
            },
            headerTintColor: '#000000',
            headerTitle:
                <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000000'}} >{navigation.getParam('healthFacility').name}</Text>
                    <Text style={{fontSize: 10, color: '#000000'}} >{navigation.getParam('healthFacility').type == 1 ? 'rumah sakit' : 'puskesmas'}</Text>
                </View>
        }
    };

    state = {
        visibleModal: false,
        isDateTimePickerVisible: false,
        healthFacility: this.props.navigation.getParam('healthFacility')
    };

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        this.hideDateTimePicker();
    };

    render() {
        const screenHeight = Dimensions.get('window').height;

        return(
            <ScrollView style={styles.container}>
                <Modal transparent={true} visible={this.state.visibleModal} onRequestClose={() => {this.setState({visibleModal: false})}}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.setState({visibleModal: false})} style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                        <TouchableOpacity activeOpacity={1} style={{width: 80 + '%', height: 80 + '%', backgroundColor: '#ffffff', borderRadius: 10}}>
                            <View onStartShouldSetResponder={() => true}  style={{margin: 15}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15}}>
                                    <View style={{width: 100 / 3 + '%', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                        <TouchableOpacity onPress={this.showDateTimePicker} style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                            <Text style={{textAlign: 'left', fontSize: 10, color: '#00818c', fontWeight: 'bold'}}>ubah tanggal</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{width: 100 / 3 + '%', textAlign: 'center', fontSize: 14, color: '#000000', fontWeight: 'bold'}}>Hari Ini</Text>
                                    <View style={{width: 100 / 3 + '%', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                        <TouchableOpacity onPress={() => this.setState({visibleModal: false})} style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                            <Text style={{textAlign: 'right', fontSize: 10, color: '#00818c', fontWeight: 'bold'}}>tutup</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <ScrollView style={{marginBottom: 35}}>
                                    <View style={{width: 100 + '%', height: 1, backgroundColor: '#fafafa'}} />
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
                                        <View style={{flexDirection: 'row', width: 65 + '%', alignItems: 'center'}}>
                                            <Image style={{width: 50, height: 50, borderRadius: 100}} source={require('../../assets/images/dr4.jpg')} />
                                            <Text style={{fontSize: 12, color: '#000000', marginLeft: 10}}>dr. Broto Riyandi </Text>
                                        </View>
                                        <View style={{width: 10 + '%', justifyContent: 'center', alignItems: 'center'}}>
                                            <Icon name={'clock-outline'} color={'#00818c'} size={15} />
                                        </View>
                                        <View style={{width: 25 + '%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                            <Text style={{fontSize: 10, color: '#000000'}}>
                                                09.00 - 12.00
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{width: 100 + '%', height: 1, backgroundColor: '#fafafa'}} />
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
                                        <View style={{flexDirection: 'row', width: 65 + '%', alignItems: 'center'}}>
                                            <Image style={{width: 50, height: 50, borderRadius: 100}} source={require('../../assets/images/dr3.jpg')} />
                                            <Text style={{fontSize: 12, color: '#000000', marginLeft: 10}}>dr. Siska Anita </Text>
                                        </View>
                                        <View style={{width: 10 + '%', justifyContent: 'center', alignItems: 'center'}}>
                                            <Icon name={'clock-outline'} color={'#00818c'} size={15} />
                                        </View>
                                        <View style={{width: 25 + '%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                            <Text style={{fontSize: 10, color: '#000000'}}>
                                                13.00 - 16.00
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{width: 100 + '%', height: 1, backgroundColor: '#fafafa'}} />
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
                                        <View style={{flexDirection: 'row', width: 65 + '%', alignItems: 'center'}}>
                                            <Image style={{width: 50, height: 50, borderRadius: 100}} source={require('../../assets/images/dr2.jpg')} />
                                            <Text style={{fontSize: 12, color: '#000000', marginLeft: 10}}>dr. Saraswati </Text>
                                        </View>
                                        <View style={{width: 10 + '%', justifyContent: 'center', alignItems: 'center'}}>
                                            <Icon name={'clock-outline'} color={'#00818c'} size={15} />
                                        </View>
                                        <View style={{width: 25 + '%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                            <Text style={{fontSize: 10, color: '#000000'}}>
                                                16.00 - 19.00
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{width: 100 + '%', height: 1, backgroundColor: '#fafafa'}} />
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15}}>
                                        <View style={{flexDirection: 'row', width: 65 + '%', alignItems: 'center'}}>
                                            <Image style={{width: 50, height: 50, borderRadius: 100}} source={require('../../assets/images/dr1.jpg')} />
                                            <Text style={{fontSize: 12, color: '#000000', marginLeft: 10}}>dr. Bambang </Text>
                                        </View>
                                        <View style={{width: 10 + '%', justifyContent: 'center', alignItems: 'center'}}>
                                            <Icon name={'clock-outline'} color={'#00818c'} size={15} />
                                        </View>
                                        <View style={{width: 25 + '%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                            <Text style={{fontSize: 10, color: '#000000'}}>
                                                19.00 - 21.00
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{width: 100 + '%', height: 1, backgroundColor: '#fafafa'}} />
                                </ScrollView>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                </Modal>
                <View style={{width: 100 + '%', minHeight: 0, backgroundColor: '#ffffff'}}>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{width: 100, height: 100, borderRadius: 4}} source={this.state.healthFacility.profile_picture} />
                            <View style={{flexDirection: 'column', justifyContent: 'space-between', height: 100, marginLeft: 20}}>
                                <Text style={{fontSize: 16, color: '#000000', fontWeight: 'bold'}}>{this.state.healthFacility.name}</Text>
                                <Text style={{fontSize: 12, color: '#cacaca'}}>Tangerang Selatan - Banten</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{justifyContent: 'center', alignItems: 'center', width: 15, height: 15, backgroundColor: '#00818c', borderRadius: 2}}>
                                        <Text style={{fontSize: 10, color: '#FFFFFF', fontWeight: 'bold'}}>A</Text>
                                    </View>
                                    <Image style={{width: 100, height: 15, marginLeft: 7}} resizeMode={'contain'} source={require('../../assets/images/bpjs.png')} />
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name={'phone-hangup'} size={15} color={'#00818c'} />
                                    <Text style={{fontSize: 12, color: '#c4c4c4', fontWeight: 'bold', marginLeft: 7}}>021-75612345</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text style={{color: '#c4c4c4', fontSize: 10}}>Alamat</Text>
                            <Text style={{color: '#000000', fontSize: 12, marginTop: 5}}>JL. Letnan Soetopo, No. 7, Bumi Serpong Damain, Serpong, Kavling Komplek 3A</Text>
                        </View>
                    </View>
                    <View style={{width: 90 + '%', height: 1, marginLeft: 5 + '%', backgroundColor: '#fafafa'}} />
                </View>
                <View style={{width: 100 + '%', minHeight: 0, backgroundColor: '#ffffff'}}>
                    <View style={styles.content}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Icon name={'directions'} color={'#00818c'} size={15} />
                                <Text style={{fontSize: 12, color: '#00818c', fontWeight: 'bold', marginLeft: 7}}>Petunjuk Arah</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Icon name={'phone'} color={'#00818c'} size={15} />
                                <Text style={{fontSize: 12, color: '#00818c', fontWeight: 'bold', marginLeft: 7}}>Hubungi Faskes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{justifyContent: 'center', width: 100 + '%', height: 25}}>
                    <Text style={{color: '#000000', fontWeight: 'bold', marginLeft: 3 + '%'}}>Fasilitas</Text>
                </View>
                <ScrollView style={{width: 100 + '%', height: screenHeight * 0.45}} nestedScrollEnabled={true}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({visibleModal: true})} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#000000'}}>Poli Anak</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 10, color: '#00818c', fontWeight: 'bold'}}>lihat jadwal</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({visibleModal: true})} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#000000'}}>Poli Penyakit Dalam</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 10, color: '#00818c', fontWeight: 'bold'}}>lihat jadwal</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({visibleModal: true})} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#000000'}}>Poli Gigi</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 10, color: '#00818c', fontWeight: 'bold'}}>lihat jadwal</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({visibleModal: true})} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#000000'}}>IGD</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 10, color: '#00818c', fontWeight: 'bold'}}>lihat jadwal</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({visibleModal: true})} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#000000'}}>ICU</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 10, color: '#00818c', fontWeight: 'bold'}}>lihat jadwal</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({visibleModal: true})} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#000000'}}>Poli Syaraf</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 10, color: '#00818c', fontWeight: 'bold'}}>lihat jadwal</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.setState({visibleModal: true})} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#000000'}}>Poli Mata</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 10, color: '#00818c', fontWeight: 'bold'}}>lihat jadwal</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
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

export default HealthFacilityDetailScreen;