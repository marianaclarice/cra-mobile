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
        <Text style={styles.headerTitle}>Auditoria da Jornada</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image 
          source={LogoImg} 
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoCard}>
          <InfoRow icon="calendar-outline" label="Data:" value="28/04/2026" />
          <View style={styles.divider} />
          <InfoRow icon="account-outline" label="Líder:" value="NOME COMPLETO" isBold />
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

        <MetricItem icon="map-marker-distance" label="Total de CP_TRECHOS:" value="12" color="#7ca462" />
        <MetricItem icon="check-circle-outline" label="Executados:" value="10" color="#7ca462" />
        <MetricItem icon="close-circle-outline" label="Não Executados:" value="2" color="#7ca462" />
        <MetricItem icon="alert-outline" label="Sinistros:" value="1" color="#7ca462" />
        <MetricItem icon="speedometer" label="KM Executado:" value="24.7" unit="KM" color="#7ca462" />

        <TouchableOpacity style={styles.exportButton}>
          <MaterialCommunityIcons name="file-pdf-box" color="#FFF" size={24} />
          <Text style={styles.exportButtonText}>Exportar Relatório em PDF</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const InfoRow = ({ icon, label, value, isBold }: any) => (
  <View style={styles.infoRow}>
    <View style={[styles.iconLabel, {flex: 1}]}>
      <MaterialCommunityIcons name={icon} size={28} color="#7f9f76" />
      <Text style={styles.labelText}>{label}</Text>
    </View>
    <Text style={[styles.valueText, isBold && styles.valueTextBold]}>{value}</Text>
  </View>
);

const MetricItem = ({ icon, label, value, unit, color }: any) => (
  <View style={styles.metricItem}>
    <View style={styles.metricLeft}>
      <MaterialCommunityIcons name={icon} size={30} color={color} />
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
    <View style={styles.metricRight}>
      <Text style={[styles.metricValue, { color }]}>{value}</Text>
      {unit && <Text style={styles.metricUnit}>{unit}</Text>}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { backgroundColor: '#003314', height: 100, paddingTop: 40, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 },
  backButton: { width: 40 },
  headerTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold', flex: 1, textAlign: 'center', marginRight: 40 },
  logoContainer: { backgroundColor: '#003314', alignItems: 'center', justifyContent: 'center', paddingBottom: 20},
  logoImage: { width: 250, height: 60 },
  content: { padding: 20 },
  infoCard: { borderWidth: 1, borderColor: '#EEE', borderRadius: 12, padding: 15, marginBottom: 20 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 8 },
  iconLabel: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  labelText: { color: '#444', fontSize: 14 },
  valueText: { color: '#103507', fontSize: 15},
  valueTextBold: { fontWeight: 'bold', fontSize: 12 },
  divider: { height: 1, backgroundColor: '#F0F0F0', marginVertical: 4 },
  statusBadge: { flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'flex-end' },
  statusText: { color: '#9eab95', fontSize: 14, textAlign: 'left', minWidth: 15 },
  metricItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FDFDFD', padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#F0F0F0', marginBottom: 10 },
  metricLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  metricLabel: { color: '#444', fontSize: 14, fontWeight: '600' },
  metricRight: { flexDirection: 'row', alignItems: 'baseline', gap: 4 },
  metricValue: { fontSize: 26, fontWeight: 'bold' },
  metricUnit: { fontSize: 12, color: '#666', fontWeight: 'bold' },
  exportButton: { backgroundColor: '#6c9e4b', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 16, borderRadius: 12, marginTop: 20, gap: 10 },
  exportButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default ResumoDiario;