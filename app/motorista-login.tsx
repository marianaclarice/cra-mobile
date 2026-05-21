import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


    const LogoImg = require('../assets/images/cra-logo.png');

const LogoImgPlaceholder = () => (
    <View style={styles.logoMockup}>
    <MaterialCommunityIcons name="leaf" size={60} color="#7ca462" />
    <View style={styles.logoTextContainer}>
    <Text style={styles.logoTextTop}>CONSÓRCIO</Text>
        <Text style={styles.logoTextBrand}>RECIFE</Text>
        <Text style={styles.logoTextBottom}>AMBIENTAL</Text>
    </View>
    </View>
);

const LoginScreen = () => {
    const [matricula, setMatricula] = useState('');

    return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.contentContainer}>
            <Stack.Screen options={{ headerShown: false }} />

        <View style={styles.darkHeader}>
            <Text style={styles.headerTitle}>Login</Text>
            </View>

            <View style={styles.logoArea}>
            <LogoImgPlaceholder />
            <View style={styles.sloganLine}>
                <View style={styles.sloganSeparator} />
                <Text style={styles.sloganText}>CUIDAR DA CIDADE, ESSE É O NOSSO COMPROMISSO.</Text>
                <View style={styles.sloganSeparator} />
            </View>
            </View>

            <View style={styles.welcomeArea}>
            <View style={styles.welcomeIconCircle}>
            <MaterialCommunityIcons name="account-circle" size={50} color="#7ca462" />
            </View>
            <Text style={styles.welcomeText}>Bem-vindo(a) Motorista!</Text>
            </View>

            <View style={styles.formArea}>
            <Text style={styles.inputLabel}>Últimos 4 dígitos da matrícula</Text>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="format-list-numbered" size={24} color="#7f9f76" style={styles.inputIcon} />
                <TextInput
                style={styles.textInput}
                placeholder="Digite os 4 dígitos"
                placeholderTextColor="#A9A9A9"
                keyboardType="numeric"
                maxLength={4}
                value={matricula}
                onChangeText={setMatricula}
                />
            </View>

            <TouchableOpacity style={styles.enterButton} activeOpacity={0.8}>
                <Text style={styles.enterButtonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.forgotPasswordLink}>
                <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.footerArea}>
            <View style={styles.footerGraphicMockup}>
               {/* <Image source={require('../assets/images/paisagem-footer.png')} style={styles.footerImage} resizeMode="cover" /> */}
            </View>
            </View>

        </SafeAreaView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FAFAFA' },
    contentContainer: { flex: 1 },

    darkHeader: {
    backgroundColor: '#003314',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    }, headerTitle: { color: '#FFF', fontSize: 18, fontWeight: '600',},

    logoArea: { alignItems: 'center', marginTop: 40, marginBottom: 30 },
    logoImage: { width: 300, height: 120 },
    logoMockup: { flexDirection: 'row', alignItems: 'center', gap: 15 },
    logoTextContainer: { alignItems: 'center' },
    logoTextTop: { fontSize: 18, fontWeight: '500', letterSpacing: 2, color: '#003314', marginBottom: -7 },
    logoTextBrand: { fontSize: 34, fontWeight: 'bold', color: '#003314' },
    logoTextBottom: { fontSize: 18, letterSpacing: 2, color: '#7ca462', fontWeight: 'bold' },

    sloganLine: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 15, width: '90%' },
    sloganSeparator: { flex: 1, height: 1, backgroundColor: '#EEE' },
    sloganText: { color: '#7ca462', fontSize: 11, textAlign: 'center', fontWeight: '500' },

    welcomeArea: { alignItems: 'center', marginBottom: 30 },
    welcomeIconCircle: { 
    width: 80, height: 80, 
    borderRadius: 40, 
    borderWidth: 1, borderColor: '#EEE',
    backgroundColor: '#FFF',
    justifyContent: 'center', alignItems: 'center',
    marginBottom: 10,
},
    welcomeText: { color: '#003314', fontSize: 22, fontWeight: 'bold' },

    formArea: { paddingHorizontal: 30, flex: 1, justifyContent: 'flex-start' },
    inputLabel: { color: '#444', fontSize: 14, fontWeight: '600', marginBottom: 8 },
    inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1, borderColor: '#EEE',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 25,
    },
    inputIcon: { marginRight: 10 },
    textInput: { flex: 1, color: '#333', fontSize: 16 },

    enterButton: {
    backgroundColor: '#6c9e4b',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center', alignItems: 'center',
    marginBottom: 15,
    },
    enterButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },

    forgotPasswordLink: { alignSelf: 'center', padding: 10 },
    forgotPasswordText: { color: '#7f9f76', fontSize: 14, textDecorationLine: 'underline' },

    footerArea: { width: '100%', height: 120, position: 'absolute', bottom: 0, alignItems: 'center' },
});

export default LoginScreen;