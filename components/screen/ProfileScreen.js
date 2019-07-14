import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, ScrollView, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ProfileScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 0})} activeOpacity={0.9}  style={{backgroundColor: '#ffffff', width: 100 + '%', height: 220}}>
                    <View style={{alignItems: 'center'}}>
                        <View style={{width: 80 + '%', justifyContent: 'center', height: 130, marginTop: 10}}>
                            <View style={{alignItems: 'center', height: 100}}>
                                <Image style={{borderRadius: 100, width: 100, height: 100}} source={require('../../assets/images/patient.jpg')} />
                                <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', right: 0}}>
                                    <Text style={{color: '#00818c', marginRight: 5 + '%'}}>ubah profil</Text>
                                    <Image style={{width: 10, height: 10}} source={require('../../assets/images/edit.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 100 + '%', height: 30}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Budi Sudrajat</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 100 + '%'}}>
                        <View style={{flexDirection:  'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                            <View style={{flexDirection: 'column', alignItems: 'center', width: (100/3) + '%'}}>
                                <Text style={{color: '#019ca9', fontSize: 14}}>Laki-laki</Text>
                                <Text style={{color: '#c4c4c4', fontSize: 10}}>jenis kelamin</Text>
                            </View>
                            <View style={{flexDirection: 'column', alignItems: 'center', width: (100/3) + '%'}}>
                                <Text style={{color: '#019ca9', fontSize: 14}}>20 Januari 1990</Text>
                                <Text style={{color: '#c4c4c4', fontSize: 10}}>tanggal lahir</Text>
                            </View>
                            <View style={{flexDirection: 'column', alignItems: 'center', width: (100/3) + '%'}}>
                                <Text style={{color: '#019ca9', fontSize: 14}}>O</Text>
                                <Text style={{color: '#c4c4c4', fontSize: 10}}>golongan darah</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <ScrollView>
                    <View style={{justifyContent: 'center', width: 100 + '%', height: 25}}>
                        <Text style={{color: '#000000', fontWeight: 'bold', marginLeft: 3 + '%'}}>Asuransi dan Identitas</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 1})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Nomor Identitas</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>10112345678901</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 1})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Nomor BPJS</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>1234567890</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 1})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Nomor Asuransi Lain</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>-</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>

                    <View style={{justifyContent: 'center', width: 100 + '%', height: 25}}>
                        <Text style={{color: '#000000', fontWeight: 'bold', marginLeft: 3 + '%'}}>Tempat Tinggal</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 2})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Alamat</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>Jl Juanda Blok C7 No.5</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 2})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Kelurahan</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>Rawa Mekar Jaya</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 2})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Kode Pos</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>15318</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>

                    <View style={{justifyContent: 'center', width: 100 + '%', height: 25}}>
                        <Text style={{color: '#000000', fontWeight: 'bold', marginLeft: 3 + '%'}}>Data Pribadi</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 3})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Agama</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>Islam</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 3})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Jenjang Pendidikan Terakhir</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>S1</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 3})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Status Perkawinan</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>Belum Kawin</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 3})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Pekerjaan</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>Pekerja Swasta</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 3})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Suku</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>Jawa</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>

                    <View style={{justifyContent: 'center', width: 100 + '%', height: 25}}>
                        <Text style={{color: '#000000', fontWeight: 'bold', marginLeft: 3 + '%'}}>Kontak Pribadi</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 4})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Email</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>budisudrajat@email.com</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 4})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Handphone</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>081310625161</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 4})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Telepon Rumah</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>021-5467899</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 4})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Telepon Kantor</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>-</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 4})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Fax</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>-</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>

                    <View style={{justifyContent: 'center', width: 100 + '%', height: 25}}>
                        <Text style={{color: '#000000', fontWeight: 'bold', marginLeft: 3 + '%'}}>Keluarga dan Kerabat</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 5})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Ayah</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>Budi Sumarsono</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 5})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Ibu</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>Siska Ramadhanty</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity onPress={() => navigate('ProfileEditScreen', {editProfileType: 5})} activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#c4c4c4'}}>Pasangan / Kerabat</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#000000'}}>-</Text>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>

                    <View style={{justifyContent: 'center', width: 100 + '%', height: 25}}>
                        <Text style={{color: '#000000', fontWeight: 'bold', marginLeft: 3 + '%'}}>Lainnya</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#000000'}}>Syarat dan Ketentuan</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#000000'}}>Kebijakan Privasi</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection: 'row', alignItems: 'center', width: 100 + '%', height: 50, backgroundColor: '#ffffff'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 5 + '%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 + '%'}}>
                                <Text style={{fontSize: 12, color: '#000000'}}>Keluar</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name={'chevron-right'} color={'#00818c'} size={20}/>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{backgroundColor: '#fafafa', width: 100 + '%', height: 1}}></View>
                    <View style={{justifyContent: 'center', width: 100 + '%', height: 25}} />
                </ScrollView>
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

export default ProfileScreen;