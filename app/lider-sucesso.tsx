import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image, Platform, TouchableWithoutFeedback} from 'react-native';
/* import success png */ const LogoImg = require('../assets/images/checksuccess.png');

const LiderSucesso6A = () => {
    return (
<SafeAreaView style={styles.container}>
    <View style={styles.darkHeader}></View>

        <Text style={styles.successText}>Sincronização concluída com sucesso!</Text>
        <Text style={styles.descriptionText}>Todos os dados foram enviados corretamente.</Text>
        <Text style={styles.protocoloText}>Protocolo: #SNC-2026-04-28-001</Text> /*precisará de lógica futuramente*/

        <View style={styles.mainArea}>
            <TouchableOpacity style={styles.dashboardButton}>
            <Text style={styles.dashboardButtonText}>Voltar ao Dashboard</Text>
            </TouchableOpacity>
        </View>
</SafeAreaView>
);};

const styles = StyleSheet.create({
    container:{backgroundColor: '#ffffff',},

    darkHeader: {
    backgroundColor: '#193e2b',
    height: 60,
    paddingTop: 25,
    },

    mainArea: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },

    successText:{
        fontSize: 20, fontWeight: '600', letterSpacing: 2, color: '#4f754b', marginBottom: -7,
    },

    descriptionText:{
        fontSize: 12, letterSpacing: 2, color: '#353535', marginBottom: -7
    },

    protocoloText:{
        fontSize: 11, fontWeight: '100', letterSpacing: 2, color: '#626262', marginBottom: -7
    },

    dashboardButton: { backgroundColor: '#6c9e4b', justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 12, marginTop: 20},
    dashboardButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});