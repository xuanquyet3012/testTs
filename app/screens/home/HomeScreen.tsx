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
const HomeScreen = ({navigation}) => {


    useEffect(() => {
    }, []);

    // MARK: - Services

    // MARK: - Events

    const reportMembership = () => {
        navigation.navigate('ReportMembershipScreen');
    };

    const reportDepartment = () => {
        navigation.navigate('ReportDepartmentScreen');
    };

    const reportCompany = () => {
        navigation.navigate('ReportCompanyScreen');
    };


    // MARK: - UIs

    return (
        <View style={styles.container}>
            <View>

                <TouchableOpacity style={styles.buttonSignIn} onPress={reportMembership}>
                    <Text style={styles.text}>Report Membership</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSignIn} onPress={reportDepartment}>
                    <Text style={styles.text}>Report Department</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSignIn} onPress={reportCompany}>
                    <Text style={styles.text}>Report Company</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default HomeScreen;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: width / 1.7,
        height: (width / 1.7) * 48 / 100,
        marginTop: width/2.5,
    },
    text: {
        color: 'black',
        fontSize: 15,
    },
    styleUsername: {
        padding: 10,
        borderWidth: 1,
        fontSize: 15,
        borderColor: '#BFBFBF',
        marginHorizontal: 40,
        marginTop: 50
    },
    stylePassword: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#BFBFBF',
        fontSize: 15,
        marginHorizontal: 40,
        marginTop: 10,
    },
    buttonSignIn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#8ac249',
        backgroundColor: '#8ac249',
        fontSize: 15,
        height: 50,
        marginHorizontal: 40,
        marginTop: 20,
    },
    buttonSignUp: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#8ac249',
        fontSize: 15,
        height: 50,
        marginHorizontal: 40,
        marginBottom: 40
    },
    textButtonSignIn: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
    textButtonSignUp: {
        textAlign: 'center',
        fontSize: 20,
        color: '#8ac249',
    },
    support: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgotPassword: {
        marginHorizontal: 40,
        marginTop: 15,
        alignItems: 'flex-end'
    },
});

