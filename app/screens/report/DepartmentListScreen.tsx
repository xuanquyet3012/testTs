import React, {useEffect, useRef, useState} from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

// @ts-ignore
import CardView from 'react-native-cardview'

// @ts-ignore
const ReportDepartmentScreen = ({navigation, route}) => {


    useEffect(() => {
    }, []);

    // MARK: - Services
    const {type} = route.params; // Get MedicalHistory screen
    console.log('type: ', type);
    // MARK: - Events
    const selectedMembership = () => {
        navigation.navigate('ReportMembershipScreen');
    };
    // MARK: - UIs

    // @ts-ignore
    const render = () => {
        if (type === 'HR') {
            return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={selectedMembership}>
                        <View style={styles.detailForm}>
                            <CardView cardElevation={20}
                                      cardMaxElevation={20}
                                      cornerRadius={2}
                                      style={styles.detailCard}>
                                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={{width: 48, height: 48, marginHorizontal: 5, borderRadius: 2}}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text>Name: Nguyễn Xuân Quyết</Text>
                                        <Text>Chức vụ: Nhân viên</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                        <Image source={require('../../resources/images/IconArrowUp.png')}
                                               style={{
                                                   width: 12,
                                                   height: 12,
                                                   marginHorizontal: 5,
                                               }}/>
                                    </View>
                                </View>
                            </CardView>
                        </View>
                        <View style={styles.detailForm}>
                            <CardView cardElevation={20}
                                      cardMaxElevation={20}
                                      cornerRadius={2}
                                      style={styles.detailCard}>
                                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={{width: 48, height: 48, marginHorizontal: 5, borderRadius: 2}}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text>Name: Nguyễn Xuân Quyết</Text>
                                        <Text>Chức vụ: Nhân viên</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                        <Image source={require('../../resources/images/IconArrowUp.png')}
                                               style={{
                                                   width: 12,
                                                   height: 12,
                                                   marginHorizontal: 5,
                                               }}/>
                                    </View>
                                </View>
                            </CardView>
                        </View>
                        <View style={styles.detailForm}>
                            <CardView cardElevation={20}
                                      cardMaxElevation={20}
                                      cornerRadius={2}
                                      style={styles.detailCard}>
                                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={{width: 48, height: 48, marginHorizontal: 5, borderRadius: 2}}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text>Name: Nguyễn Xuân Quyết</Text>
                                        <Text>Chức vụ: Nhân viên</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                        <Image source={require('../../resources/images/IconArrowUp.png')}
                                               style={{
                                                   width: 12,
                                                   height: 12,
                                                   marginHorizontal: 5,
                                               }}/>
                                    </View>
                                </View>
                            </CardView>
                        </View>
                        <View style={styles.detailForm}>
                            <CardView cardElevation={20}
                                      cardMaxElevation={20}
                                      cornerRadius={2}
                                      style={styles.detailCard}>
                                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={{width: 48, height: 48, marginHorizontal: 5, borderRadius: 2}}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text>Name: Nguyễn Xuân Quyết</Text>
                                        <Text>Chức vụ: Nhân viên</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                        <Image source={require('../../resources/images/IconArrowUp.png')}
                                               style={{
                                                   width: 12,
                                                   height: 12,
                                                   marginHorizontal: 5,
                                               }}/>
                                    </View>
                                </View>
                            </CardView>
                        </View>
                        <View style={styles.detailForm}>
                            <CardView cardElevation={20}
                                      cardMaxElevation={20}
                                      cornerRadius={2}
                                      style={styles.detailCard}>
                                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={{width: 48, height: 48, marginHorizontal: 5, borderRadius: 2}}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text>Name: Nguyễn Xuân Quyết</Text>
                                        <Text>Chức vụ: Nhân viên</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                        <Image source={require('../../resources/images/IconArrowUp.png')}
                                               style={{
                                                   width: 12,
                                                   height: 12,
                                                   marginHorizontal: 5,
                                               }}/>
                                    </View>
                                </View>
                            </CardView>
                        </View>
                        <View style={styles.detailForm}>
                            <CardView cardElevation={20}
                                      cardMaxElevation={20}
                                      cornerRadius={2}
                                      style={styles.detailCard}>
                                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={{width: 48, height: 48, marginHorizontal: 5, borderRadius: 2}}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text>Name: Nguyễn Xuân Quyết</Text>
                                        <Text>Chức vụ: Nhân viên</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                        <Image source={require('../../resources/images/IconArrowUp.png')}
                                               style={{
                                                   width: 12,
                                                   height: 12,
                                                   marginHorizontal: 5,
                                               }}/>
                                    </View>
                                </View>
                            </CardView>
                        </View>
                        <View style={styles.detailForm}>
                            <CardView cardElevation={20}
                                      cardMaxElevation={20}
                                      cornerRadius={2}
                                      style={styles.detailCard}>
                                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={{width: 48, height: 48, marginHorizontal: 5, borderRadius: 2}}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text>Name: Nguyễn Xuân Quyết</Text>
                                        <Text>Chức vụ: Nhân viên</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                        <Image source={require('../../resources/images/IconArrowUp.png')}
                                               style={{
                                                   width: 12,
                                                   height: 12,
                                                   marginHorizontal: 5,
                                               }}/>
                                    </View>
                                </View>
                            </CardView>
                        </View>
                        <View style={styles.detailForm}>
                            <CardView cardElevation={20}
                                      cardMaxElevation={20}
                                      cornerRadius={2}
                                      style={styles.detailCard}>
                                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={{width: 48, height: 48, marginHorizontal: 5, borderRadius: 2}}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text>Name: Nguyễn Xuân Quyết</Text>
                                        <Text>Chức vụ: Nhân viên</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                        <Image source={require('../../resources/images/IconArrowUp.png')}
                                               style={{
                                                   width: 12,
                                                   height: 12,
                                                   marginHorizontal: 5,
                                               }}/>
                                    </View>
                                </View>
                            </CardView>
                        </View>
                        <View style={styles.detailForm}>
                            <CardView cardElevation={20}
                                      cardMaxElevation={20}
                                      cornerRadius={2}
                                      style={styles.detailCard}>
                                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={{width: 48, height: 48, marginHorizontal: 5, borderRadius: 2}}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text>Name: Nguyễn Xuân Quyết</Text>
                                        <Text>Chức vụ: Nhân viên</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                        <Image source={require('../../resources/images/IconArrowUp.png')}
                                               style={{
                                                   width: 12,
                                                   height: 12,
                                                   marginHorizontal: 5,
                                               }}/>
                                    </View>
                                </View>
                            </CardView>
                        </View>
                        <View style={styles.detailForm}>
                            <CardView cardElevation={20}
                                      cardMaxElevation={20}
                                      cornerRadius={2}
                                      style={styles.detailCard}>
                                <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={{width: 48, height: 48, marginHorizontal: 5, borderRadius: 2}}/>
                                    <View style={{marginLeft: 10}}>
                                        <Text>Name: Nguyễn Xuân Quyết</Text>
                                        <Text>Chức vụ: Nhân viên</Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row-reverse'}}>
                                        <Image source={require('../../resources/images/IconArrowUp.png')}
                                               style={{
                                                   width: 12,
                                                   height: 12,
                                                   marginHorizontal: 5,
                                               }}/>
                                    </View>
                                </View>
                            </CardView>
                        </View>
                    </TouchableOpacity>

                </View>
            )
        } else {
            return (
                // @ts-ignore
                <ReportCompany/>
            )
        }
    };

    return (
        render()
    );
};

export default ReportDepartmentScreen;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center'
    },
    listView: {
        marginHorizontal: 20,
        borderRadius: 8,
        marginBottom: 15
    },
    detailForm: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailCard: {
        justifyContent: 'center',
        marginTop: 10,
        width: width - 40,
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    detailCardFlatlist: {
        justifyContent: 'center',
        width: width - 40,
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    detailCardNote: {
        justifyContent: 'center',
        marginTop: 10,
        width: width / 2 - 40,
        backgroundColor: 'white',
        marginHorizontal: 20,
    },
    chart: {
        width: width / 2 - 40,
        height: width / 2.5,
        marginHorizontal: 20
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
});

