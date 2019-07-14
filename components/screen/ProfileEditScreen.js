import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, Image, Text, TextInput, Picker, StyleSheet, StatusBar, Dimensions} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {StackActions} from 'react-navigation';

class ProfileEditScreen extends Component {

    static navigationOptions = {
        headerStyle: {
            color: '#ffffff',
        },
        headerTintColor: '#000000',
        headerTitle:
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000000'}} >Ubah Profil</Text>
            </View>
        ,
    };

    state = {
        editProfileType: this.props.navigation.getParam('editProfileType'),
        gender: 1,
        date: new Date(),
        isDateTimePickerVisible: false,
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    _editProfile() {
        let popAction = StackActions.pop({
            n: 1,
        });
        this.props.navigation.dispatch(popAction);
    };

    _setEditPictureScreen() {
        if(this.state.editProfileType <= 0) {
            return <View style={{backgroundColor: '#ffffff', width: 100 + '%', height: 130}}>
                <TouchableOpacity>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 100 + '%'}}>
                        <View style={{width: 100, height: 100}}>
                            <Image style={{borderRadius: 100, width: 100, height: 100}} source={require('../../assets/images/patient.jpg')} />
                            <View style={{position: 'absolute', width: 30, height: 30, right: 0, bottom: 0}}>
                                <View style={{backgroundColor: '#000000', opacity: 0.4, borderRadius: 100, width: 30, height: 30}}>
                                </View>
                                <Image style={{position: 'absolute', width: 30, height: 30}} source={require('../../assets/images/camera.png')} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        }
    };

    _setEditDataScreen() {
        let type = this.state.editProfileType
        if(type <= 0) {
            return <View style={{margin: 5 + '%'}}>
                <View>
                    <Text style={{color: '#cacaca'}}>Nama</Text>
                    <TextInput value={'Budi Sudrajat'} placeholder={'Nama'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Jenis Kelamin</Text>
                    <View style={{width: 100 + '%', borderBottomColor: '#c4c4c4', borderBottomWidth: 1}}>
                        <Picker
                            selectedValue={this.state.gender}
                            onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}
                        >
                            <Picker.Item label={'Perempuan'} value={0}/>
                            <Picker.Item label={'Laki-laki'} value={1}/>
                        </Picker>
                    </View>
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Tanggal Lahir</Text>
                    <View style={{borderBottomColor: '#c4c4c4', borderBottomWidth: 1}}>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            <TextInput value={'03 / 04 / 2019'} editable={false} selectTextOnFocus={false} style={{color: '#000000', marginLeft: 5}} />
                        </TouchableOpacity>
                    </View>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />
                </View>
            </View>
        } else if(type <= 1) {
            return <View style={{margin: 5 + '%'}}>
                <View>
                    <Text style={{color: '#cacaca'}}>Nomor Identitas</Text>
                    <TextInput value={'10112345678901'} placeholder={'Nomor Identitas'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Nomor BPJS</Text>
                    <TextInput value={'1234567890'} placeholder={'Nomor BPJS'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Nomor Asuransi Lain</Text>
                    <TextInput value={''} placeholder={'Nomor Asuransi Lain'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
            </View>
        } else if(type <= 2) {
            return <View style={{margin: 5 + '%'}}>
                <View>
                    <Text style={{color: '#cacaca'}}>Alamat</Text>
                    <TextInput multiline={true} value={'Jl Juanda Blok C7 No.5'} placeholder={'Alamat'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Kelurahan</Text>
                    <TextInput value={'Rawa Mekar Jaya'} placeholder={'Kelurahan'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Kode Pos</Text>
                    <TextInput keyboardType={'numeric'} value={'15318'} placeholder={'Kode Pos'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
            </View>
        } else if(type <= 3) {
            return <View style={{margin: 5 + '%'}}>
                <View>
                    <Text style={{color: '#cacaca'}}>Agama</Text>
                    <View style={{width: 100 + '%', borderBottomColor: '#c4c4c4', borderBottomWidth: 1}}>
                        <Picker
                            selectedValue={this.state.gender}
                            onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}
                        >
                            <Picker.Item label={'Islam'} value={1}/>
                            <Picker.Item label={'Kristen'} value={2}/>
                            <Picker.Item label={'Katolik'} value={3}/>
                            <Picker.Item label={'Hindu'} value={4}/>
                            <Picker.Item label={'Budha'} value={5}/>
                            <Picker.Item label={'Kong Hu Cu'} value={6}/>
                        </Picker>
                    </View>
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Jenjang Pendidikan Terakhir</Text>
                    <View style={{width: 100 + '%', borderBottomColor: '#c4c4c4', borderBottomWidth: 1}}>
                        <Picker
                            selectedValue={this.state.gender}
                            onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}
                        >
                            <Picker.Item label={'S1'} value={1}/>
                            <Picker.Item label={'S2'} value={2}/>
                            <Picker.Item label={'S3'} value={3}/>
                        </Picker>
                    </View>
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Status Perkawinan</Text>
                    <View style={{width: 100 + '%', borderBottomColor: '#c4c4c4', borderBottomWidth: 1}}>
                        <Picker
                            selectedValue={this.state.gender}
                            onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}
                        >
                            <Picker.Item label={'Belum Kawin'} value={1}/>
                            <Picker.Item label={'Kawin'} value={2}/>
                        </Picker>
                    </View>
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Pekerjaan</Text>
                    <View style={{width: 100 + '%', borderBottomColor: '#c4c4c4', borderBottomWidth: 1}}>
                        <Picker
                            selectedValue={this.state.gender}
                            onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}
                        >
                            <Picker.Item label={'Wiraswasta'} value={1}/>
                            <Picker.Item label={'PNS'} value={2}/>
                            <Picker.Item label={'Pekerja Swasta'} value={3}/>
                        </Picker>
                    </View>
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Suku</Text>
                    <View style={{width: 100 + '%', borderBottomColor: '#c4c4c4', borderBottomWidth: 1}}>
                        <Picker
                            selectedValue={this.state.gender}
                            onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}
                        >
                            <Picker.Item label={'Jawa'} value={1}/>
                            <Picker.Item label={'Sunda'} value={2}/>
                            <Picker.Item label={'Batak'} value={3}/>
                        </Picker>
                    </View>
                </View>
            </View>
        } else if(type <= 4) {
            return <View style={{margin: 5 + '%'}}>
                <View>
                    <Text style={{color: '#cacaca'}}>Email</Text>
                    <TextInput value={'budisudrajat@email.com'} placeholder={'Email'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Handphone</Text>
                    <TextInput keyboardType={'numeric'} value={'081310625161'} placeholder={'Handphone'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Telepon Rumah</Text>
                    <TextInput keyboardType={'numeric'} value={'0215467899'} placeholder={'Telepon Rumah'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Telepon Kantor</Text>
                    <TextInput keyboardType={'numeric'} value={''} placeholder={'Telepon Kantor'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Fax</Text>
                    <TextInput keyboardType={'numeric'} value={''} placeholder={'Fax'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
            </View>
        } else {
            return <View style={{margin: 5 + '%'}}>
                <View>
                    <Text style={{color: '#cacaca'}}>Ayah</Text>
                    <TextInput value={'Budi Sumarsono'} placeholder={'Ayah'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Ibu</Text>
                    <TextInput value={'Siska Ramadhanty'} placeholder={'Ibu'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
                <View style={{marginTop: 2 + '%'}}>
                    <Text style={{color: '#cacaca'}}>Pasangan / Kerabat</Text>
                    <TextInput value={''} placeholder={'Pasangan / Kerabat'} style={{marginLeft: 4, borderBottomColor: '#c4c4c4', borderBottomWidth: 1}} />
                </View>
            </View>
        }
    }

    render () {
        return(
            <View style={styles.firstLayer}>
                <StatusBar backgroundColor={'#00818c'}/>
                <ScrollView>
                    {this._setEditPictureScreen()}
                    <View style={{backgroundColor: '#ffffff', width: 100 + '%', minHeight: 280}}>
                        {this._setEditDataScreen()}
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 100 + '%', height: 80}}>
                        <TouchableOpacity onPress={() => this._editProfile()} style={{backgroundColor: '#00a6fb', justifyContent: 'center', alignItems: 'center', width: 80 + '%', height: 40, borderRadius: 5}}>
                            <Text style={{color: '#ffffff', fontWeight: 'bold'}}>Simpan</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    firstLayer: {
        width: 100 + '%',
        height: 100 + '%',
        backgroundColor: '#f2f5f7'
    }
});

export default ProfileEditScreen;