import React from 'react';
import { StyleSheet, Text, Button, View, SectionList, ActivityIndicator, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import {styles} from './IrrigationHistoryStyle';

function Mode(item){
  if(item.mode == 'auto') {
    return 'tự động';
  }
  else{
    return 'thủ công';
  }
}

export default function Screen({navigation}) {
  var environment = {
    humidity: 50,
    temperature: 28,
  }
  const day = [
    { day: '11/09/2022', data: [
      { mode: 'auto' , time: '21:47 - 11/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 10/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 09/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 11/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 10/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 09/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 11/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 10/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 09/09/2022', long: 60, environment: environment},
    ]},
    { day: '10/09/2022', data: [
      { mode: 'auto' , time: '21:47 - 11/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 10/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 09/09/2022', long: 60, environment: environment},
    ]},
    { day: '09/09/2022', data: [
      { mode: 'auto' , time: '21:47 - 11/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 10/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 09/09/2022', long: 60, environment: environment},
    ]},
    { day: '08/09/2022', data: [
      { mode: 'auto' , time: '21:47 - 11/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 10/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 09/09/2022', long: 60, environment: environment},
    ]},
    { day: '07/09/2022', data: [
      { mode: 'auto' , time: '21:47 - 11/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 10/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 09/09/2022', long: 60, environment: environment},
    ]},
    { day: '06/09/2022', data: [
      { mode: 'auto' , time: '21:47 - 11/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 10/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 09/09/2022', long: 60, environment: environment},
    ]},
    { day: '05/09/2022', data: [
      { mode: 'auto' , time: '21:47 - 11/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 10/09/2022', long: 60, environment: environment},
      { mode: 'auto' , time: '21:47 - 09/09/2022', long: 60, environment: environment},
    ]}
  ];

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
  <View style={styles.listInfo}>
  <Text style={styles.subtitles} > Lịch sử tưới</Text>
  <View style={styles.searchbar}>
    <Searchbar style={styles.subsearchbar}
      placeholder="Tìm kiếm"
      placeholderTextColor={'#6D6C6C'}
      backgroundColor={'#F8F8F8'}
      icon={() =><Feather name='search' size={25} color='#6D6C6C' />}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  </View>
  <SectionList
    sections={day}
    renderItem={({ item }) => (
      <View style={styles.item}>
        <Entypo style={styles.icon} name='water' size={34} color='#699BF7' />
        <View style={styles.info}>
          <Text style={styles.itemTitle}>
            Tưới nước, chế độ {Mode(item)}
          </Text>
          <Text style={styles.itemTime}>
            {item.time}
          </Text>
          <Text style={styles.itemTime}>
            Thời gian tưới: {item.long} phút
          </Text>
          <Text style={styles.itemEnvironment}>
            Môi trường:
          </Text>
          <Text style={styles.itemEnvironmentItem}>
            Độ ẩm: {item.environment.humidity}
          </Text>
          <Text style={styles.itemEnvironmentItem}>
            Nhiệt độ: {item.environment.temperature}
          </Text>
        </View>
      </View>
    )}
    renderSectionHeader={ ({section}) => (
      <Text style={styles.day}>Ngày {section.day}</Text>
    )}
    stickySectionHeadersEnabled
  />
</View>
  );
} 
function IrrigationHistoryScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <View style={{flex:1, height: 50}}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.appButtonContainer}>
            <Feather name='chevron-left' size={35} style={styles.appButtonIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.mainTitle}>
          Lịch Sử Tưới
        </Text>
      </View>
      <Screen />
    </View>
  );
}



