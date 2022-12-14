import { StyleSheet, Dimensions } from 'react-native';

var HEIGHT = Dimensions.get('window').height;
var WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00A455',
    },
    back: {
      flexDirection: 'row',
      //alignItems: 'baseline',
    },
    appButtonContainer: {
      flex: 1,
      backgroundColor: "#fff",
      borderRadius: 15,
      width: 50,
      top: 0.08*HEIGHT,
      left: 0.09*WIDTH,
      padding: 7
      
    },
    mainTitle: {
      top: 0.09*HEIGHT,
      flex: 2,
      fontSize: 28,
      fontWeight: 'bold',
      color: "#fff"
    },
    appButtonIcon: {
      // top: 8,
      // left: 6,
      },
    subtitles: {
      paddingBottom: 20,
      fontSize: 26,
      fontWeight: 'bold'
    },
    searchbar: {
      paddingBottom: 20,
      paddingRight: 50
    },
    subsearchbar: {
      borderRadius: 20,
    },
    listInfo: {
      backgroundColor: '#fff',
      paddingHorizontal: 0.06*WIDTH
    },
    day: {
      flex: 1,
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#FFFFFF',
      borderWidth: 2,
      borderColor: '#018E18',
      borderRadius: 10,
      fontSize: 15,
      color: '#000',
    },
    item: {
      flexDirection: 'row',
      marginBottom: 10,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 20,
      backgroundColor: '#FFFFFF',
      borderWidth: 0.5,
      borderColor: '#F0F0F0',
      borderRadius: 20,
      fontSize: 15,
      color: '#000',
    },
    icon: {
      paddingTop: '10%',
      paddingRight: '10%',
      paddingLeft: 10
    },
    info: {
      flex: 2,
      paddingLeft: 0
    }
    ,
    itemTitle: {
      fontSize: 15,
      color: '#000',
    },
    itemTime: {
      fontSize: 10,
    },
    itemEnvironment: {
      fontSize: 15,
      color: '#000',
    },
    itemEnvironmentItem: {
      paddingLeft: 90,
      fontSize: 13,
      color: '#000',
    }
  });