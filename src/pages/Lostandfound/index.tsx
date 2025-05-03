import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {getDatabase, ref, onValue} from 'firebase/database';
import Gap from '../../components/atom/Gap';
import Header from '../../components/molocules/Header';
import {Fullscreenicon} from '../../assets';
import Button from '../../components/atom/Button';

const Lostandfound = ({navigation}) => {
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    const db = getDatabase();

    const lostItemsRef = ref(db, 'lostItems/');
    onValue(lostItemsRef, snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const items = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setLostItems(items);
      } else {
        setLostItems([]);
      }
    });

    const foundItemsRef = ref(db, 'foundItems/');
    onValue(foundItemsRef, snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const items = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setFoundItems(items);
      } else {
        setFoundItems([]);
      }
    });
  }, []);

  return (
    <View style={styles.page}>
      <Header title="Lost and Found" />
      <View style={styles.Latest}>
        <Text style={styles.sectionTitle}>Lost and Found</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.Latest2}>
          <Text style={styles.sectionTitle1}>Lost</Text>
        </View>
        {lostItems.map(item => (
          <View key={item.id} style={styles.card}>
            {item.imageBase64 ? (
              <Image
                source={{uri: `data:image/jpeg;base64,${item.imageBase64}`}}
                style={styles.image}
              />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={styles.imageText}>No Image</Text>
              </View>
            )}
            <Gap height={12} />
            <Text style={styles.eventTitle}>{item.itemName}</Text>
            <Gap height={3} />
            <Text style={styles.eventDate}>{item.lostTime}</Text>
            <Gap height={11} />
            <View style={styles.cardFooter}>
              <Fullscreenicon width={16} height={20} />
            </View>
          </View>
        ))}
        <Gap height={24} />
        <View style={styles.Latest2}>
          <Text style={styles.sectionTitle2}>Found</Text>
        </View>
        {foundItems.map(item => (
          <View key={item.id} style={styles.card}>
            {item.imageBase64 ? (
              <Image
                source={{uri: `data:image/jpeg;base64,${item.imageBase64}`}}
                style={styles.image}
              />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={styles.imageText}>No Image</Text>
              </View>
            )}
            <Gap height={12} />
            <Text style={styles.eventTitle}>{item.itemName}</Text>
            <Gap height={3} />
            <Text style={styles.eventDate}>{item.foundTime}</Text>
            <Gap height={11} />
            <View style={styles.cardFooter}>
              <Fullscreenicon width={16} height={20} />
            </View>
          </View>
        ))}
        <Gap height={50} />
        <Button
          label="Report Lost Item"
          color="#578FCA"
          onPress={() => navigation.navigate('Lostreport')}
        />
        <Gap height={13} />
        <Button
          label="Report Found Item"
          color="#4AC8F9"
          onPress={() => navigation.navigate('Foundreport')}
        />
      </ScrollView>
    </View>
  );
};

export default Lostandfound;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    paddingHorizontal: 38,
    alignItems: 'center',
  },
  Latest: {
    paddingLeft: 38,
    marginTop: 57,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 16,
    color: '#000000',
  },
  Latest2: {
    paddingRight: 250,
    paddingTop: 20,
  },
  sectionTitle2: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 16,
    color: '#000000',
  },
  sectionTitle1: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 16,
    color: '#000000',
    paddingRight: 20,
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 10,
    padding: 16,
    shadowColor: '#3674B5',
    marginHorizontal: 10,
    alignItems: 'center',
    width: 318,
    marginBottom: 20,
  },
  image: {
    width: 190,
    height: 182,
    borderRadius: 8,
  },
  imagePlaceholder: {
    width: 190,
    height: 182,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  imageText: {
    fontSize: 14,
    color: '#888',
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  eventDate: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#000000',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});
