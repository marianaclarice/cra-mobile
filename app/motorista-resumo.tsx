import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/* import logo */ const LogoImg = require('../assets/images/cra-logo-branco.png');

const ResumoDiario = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="chevron-left" size={32} color="#FFF" />
        </TouchableOpacity>
      
      <View style={styles.logoContainer}>
        <Image 
          source={LogoImg} 
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>Resumo diário</Text>
      </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoCard}>
          <InfoRow icon="calendar-outline" label="Data:" value="28/04/2026" />
          <View style={styles.divider} />
          <InfoRow icon="account-outline" label="Motorista:" value="NOME COMPLETO" isBold />
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <View style={styles.iconLabel}>
              <MaterialCommunityIcons name="cloud-check-outline" size={20} color="#666" />
              <Text style={styles.labelText}>Jornada Status:</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Sincronizada</Text>
              <MaterialCommunityIcons name="check-circle" size={16} color="#7ca462" />
            </View>
          </View>
        </View>
<View style={styles.grid}>
          <View style={styles.miniCard}>
            <View style={styles.miniCardIconCircle}>
              <MaterialCommunityIcons name="map-marker" size={24} color="#4C7B4E" />
            </View>
            <View style={styles.miniCardTextContainer}>
              <Text style={styles.miniCardLabel}>Total de Pontos:</Text>
              <Text style={styles.miniCardValue}>15</Text>
            </View>
          </View>

          <View style={styles.miniCard}>
            <View style={styles.miniCardIconCircle}>
              <MaterialCommunityIcons name="check" size={24} color="#4C7B4E" />
            </View>
            <View style={styles.miniCardTextContainer}>
              <Text style={styles.miniCardLabel}>Pontos Coletados:</Text>
              <Text style={styles.miniCardValue}>14</Text>
            </View>
          </View>

          <View style={styles.miniCard}>
            <View style={styles.miniCardIconCircle}>
              <MaterialCommunityIcons name="map-marker-remove" size={24} color="#4C7B4E" />
            </View>
            <View style={styles.miniCardTextContainer}>
              <Text style={styles.miniCardLabel}>Pontos Não Coletados:</Text>
              <Text style={styles.miniCardValue}>1</Text>
            </View>
          </View>

          <View style={styles.miniCard}>
            <View style={styles.miniCardIconCircle}>
              <MaterialCommunityIcons name="road-variant" size={24} color="#4C7B4E" />
            </View>
            <View style={styles.miniCardTextContainer}>
              <Text style={styles.miniCardLabel}>KM Percorrido:</Text>
              <Text style={styles.miniCardValue}>45.3 KM</Text>
            </View>
          </View>

          <View style={styles.miniCard}>
            <View style={styles.miniCardIconCircle}>
              <MaterialCommunityIcons name="clock-outline" size={24} color="#4C7B4E" />
            </View>
            <View style={styles.miniCardTextContainer}>
              <Text style={styles.miniCardLabel}>Tempo Produtivo:</Text>
              <Text style={styles.miniCardValue}>6h 30m</Text>
            </View>
          </View>

          <View style={styles.miniCard}>
            <View style={styles.miniCardIconCircle}>
              <MaterialCommunityIcons name="pause" size={24} color="#4C7B4E" />
            </View>
            <View style={styles.miniCardTextContainer}>
              <Text style={styles.miniCardLabel}>Tempo Improdutivo:</Text>
              <Text style={styles.miniCardValue}>1h 30m</Text>
            </View>
          </View>

        </View>

        <TouchableOpacity style={styles.exportButton} activeOpacity={0.8}>
          <MaterialCommunityIcons name="file-pdf-box" size={26} color="#FFF" />
          <Text style={styles.exportButtonText}>Exportar Relatório em PDF</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const InfoRow = ({ icon, label, value, isBold }: any) => (
  <View style={styles.infoRow}>
    <View style={[styles.iconLabel, {flex: 1}]}>
      <MaterialCommunityIcons name={icon} size={28} color="#7f9f76" />
      <Text style={styles.labelText}>{label}</Text>
    </View>
    <Text style={[styles.valueText, isBold && styles.valueTextBold]}>{value}</Text>
  </View>
);


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { backgroundColor: '#003314', height: 130, paddingTop: 40, paddingBottom: 20, flexDirection: 'row', alignItems: 'center', },
  backButton: { width: 40 },
  headerTitle: { color: '#FFF', fontSize: 17, fontWeight: 'bold', flex: 1, textAlign: 'center' },
  logoContainer: { backgroundColor: '#003314', alignItems: 'center', justifyContent: 'center'},
  logoImage: { width: 250, height: 60 },
  
  content: { padding: 20 },
  infoCard: { borderWidth: 1, borderColor: '#EEE', borderRadius: 12, padding: 15, marginBottom: 20 },
  divider: { height: 1, backgroundColor: '#F0F0F0', marginVertical: 4 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8 },
  iconLabel: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  labelText: { color: '#444', fontSize: 14 },
  valueText: { color: '#103507', fontSize: 15},
  valueTextBold: { fontWeight: 'bold', fontSize: 12 },

  borderTop: {borderTopWidth: 1, borderTopColor: '#F1F1F1',},
  iconCircle: {width: 36,height: 36,borderRadius: 18,backgroundColor: '#EDF4ED',justifyContent: 'center',alignItems: 'center',marginRight: 14,},
  infoLabel: {fontSize: 15,color: '#555', fontWeight: '500',},
  infoValue: {fontSize: 15,color: '#0D2C16',fontWeight: '600',marginLeft: 'auto',},
  grid: {flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',},
  miniCard: {backgroundColor: '#FFF', width: '50%', borderRadius: 14, padding: 7, marginBottom: 12, flexDirection: 'row', alignItems: 'center', shadowColor: '#000',shadowOffset: { width: 0, height: 1 },shadowOpacity: 0.04,shadowRadius: 4,elevation: 1,},
  miniCardIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EDF4ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,},
  miniCardTextContainer: {flex: 1,justifyContent: 'center',},
  miniCardLabel: {fontSize: 12,color: '#777',marginBottom: 2,},
  miniCardValue: {fontSize: 18,fontWeight: 'bold',color: '#0D2C16',},
  exportButton: { backgroundColor: '#6c9e4b', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 16, borderRadius: 12, marginTop: 20, gap: 10 },
  exportButtonText: { color: '#FFF', fontSize: 13, fontWeight: 'bold' },
  statusBadge: { flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'flex-end' },
  statusText: { color: '#9eab95', fontSize: 14, textAlign: 'left', minWidth: 15 },
});

export default ResumoDiario;