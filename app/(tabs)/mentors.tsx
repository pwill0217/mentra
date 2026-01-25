import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MentorsScreen() {
  // Dummy data for now
  const mentors = [
    { id: '1', name: 'Sarah Johnson', expertise: 'Budgeting & Savings', rating: 4.8 },
    { id: '2', name: 'Mike Chen', expertise: 'Investment Basics', rating: 4.9 },
    { id: '3', name: 'Emily Davis', expertise: 'Debt Management', rating: 4.7 },
  ];

  const renderMentor = ({ item }: any) => (
    <TouchableOpacity style={styles.mentorCard}>
      <View style={styles.mentorAvatar}>
        <Text style={styles.mentorInitial}>{item.name[0]}</Text>
      </View>
      <View style={styles.mentorInfo}>
        <Text style={styles.mentorName}>{item.name}</Text>
        <Text style={styles.mentorExpertise}>{item.expertise}</Text>
        <Text style={styles.mentorRating}>⭐ {item.rating}</Text>
      </View>
      <TouchableOpacity style={styles.connectButton}>
        <Text style={styles.connectButtonText}>Connect</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find a Mentor</Text>
      <FlatList
        data={mentors}
        renderItem={renderMentor}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 20,
    gap: 15,
  },
  mentorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  mentorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2563eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  mentorInitial: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mentorInfo: {
    flex: 1,
  },
  mentorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  mentorExpertise: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
  mentorRating: {
    fontSize: 14,
    marginTop: 4,
  },
  connectButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  connectButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});