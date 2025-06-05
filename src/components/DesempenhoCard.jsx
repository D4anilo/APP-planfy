import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DesempenhoCard = ({ dados = {} }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.header}>Desempenho do Usuário</Text>
  
        <View style={styles.row}>
          <Text style={styles.label}>Dias perfeitos</Text>
          <Text style={styles.value}>
            {dados.diasPerfeitos ?? 0} <Text style={styles.sufixo}>dia</Text>
          </Text>
        </View>
  
        <View style={styles.row}>
          <Text style={styles.label}>Melhores sequências</Text>
          <Text style={styles.value}>
            {dados.sequencias ?? 0} <Text style={styles.sufixo}>dia</Text>
          </Text>
        </View>
  
        <View style={styles.row}>
          <Text style={styles.label}>Tarefa concluída Total</Text>
          <Text style={styles.value}>{dados.totalTarefas ?? 0}</Text>
        </View>
  
        <View style={styles.row}>
          <Text style={styles.label}>Tarefa realizada este mês</Text>
          <Text style={styles.value}>{dados.tarefasMes ?? 0}</Text>
        </View>
  
        <View style={styles.row}>
          <Text style={styles.label}>Taxa geral</Text>
          <Text style={styles.value}>
            {dados.taxaGeral ?? 0} <Text style={styles.sufixo}>%</Text>
          </Text>
        </View>
  
        <View style={styles.row}>
          <Text style={styles.label}>Taxa mensal</Text>
          <Text style={styles.value}>
            {dados.taxaMensal ?? 0} <Text style={styles.sufixo}>%</Text>
          </Text>
        </View>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1E293B', // azul escuro
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomColor: '#E2E8F0',
    borderBottomWidth: 1,
  },
  label: {
    fontSize: 15,
    color: '#334155',
  },
  value: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  sufixo: {
    fontSize: 13,
    fontWeight: 'normal',
    color: '#64748B',
  },
});

export default DesempenhoCard;
