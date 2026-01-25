import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BudgetScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Budget</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add Expense</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Monthly Budget</Text>
        <Text style={styles.summaryAmount}>$2,500</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '65%' }]} />
        </View>
        <Text style={styles.summarySubtext}>$1,625 spent • $875 remaining</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Expenses</Text>
        
        <View style={styles.expenseItem}>
          <View style={styles.expenseIcon}>
            <Text style={styles.expenseEmoji}>🍔</Text>
          </View>
          <View style={styles.expenseDetails}>
            <Text style={styles.expenseName}>Food & Dining</Text>
            <Text style={styles.expenseDate}>Today</Text>
          </View>
          <Text style={styles.expenseAmount}>-$45.00</Text>
        </View>

        <View style={styles.expenseItem}>
          <View style={styles.expenseIcon}>
            <Text style={styles.expenseEmoji}>🚗</Text>
          </View>
          <View style={styles.expenseDetails}>
            <Text style={styles.expenseName}>Transportation</Text>
            <Text style={styles.expenseDate}>Yesterday</Text>
          </View>
          <Text style={styles.expenseAmount}>-$25.00</Text>
        </View>

        <View style={styles.expenseItem}>
          <View style={styles.expenseIcon}>
            <Text style={styles.expenseEmoji}>📚</Text>
          </View>
          <View style={styles.expenseDetails}>
            <Text style={styles.expenseName}>Education</Text>
            <Text style={styles.expenseDate}>2 days ago</Text>
          </View>
          <Text style={styles.expenseAmount}>-$120.00</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  summaryCard: {
    backgroundColor: '#2563eb',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    marginBottom: 30,
  },
  summaryLabel: {
    color: '#93c5fd',
    fontSize: 14,
    marginBottom: 8,
  },
  summaryAmount: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#fff',
  },
  summarySubtext: {
    color: '#dbeafe',
    fontSize: 14,
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  expenseIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  expenseEmoji: {
    fontSize: 20,
  },
  expenseDetails: {
    flex: 1,
  },
  expenseName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  expenseDate: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ef4444',
  },
});