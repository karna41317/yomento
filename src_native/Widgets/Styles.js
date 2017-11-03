import {    Dimensions} from 'react-native'
const HEIGHT = Dimensions.get('window').height
const styles = {
    header:{
        height:70,
        backgroundColor:'#01cca1',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:18,
        color:'#fff'
    },
    widgetArea:{
        height: HEIGHT/2.5,
        backgroundColor: '#00cb77'
    },
    temp:{
        fontSize:72,
        fontWeight:'bold',
        color:'#fff'
    },
    p:{
        fontWeight:'bold',
        color:'#fff'
    },
    pSmall:{
        fontSize:12,
        color:'#fff'
    },
    buttomView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        padding:15,
        backgroundColor:'#fff'
    },
    increaseText:{
        color:'#0000ff',
        fontWeight:'bold',
        fontSize: 24,
        padding:5
    },
    decreaseText:{
        color:'#ff2b2b',
        fontWeight:'bold',
        fontSize: 24,
        padding:5
    },
    name:{
        fontWeight:'bold'
    }
}

export default styles