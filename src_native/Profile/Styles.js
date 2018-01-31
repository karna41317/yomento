import {Dimensions} from 'react-native'
const WIDTH = Dimensions.get('window').width
const styles = {
    cardStyle:{
        flex:3,
        padding: 10,
    },
    articleTitle:{
        paddingBottom: 15,
        fontWeight: 'bold',
    },
    usernameStyle:{
        color:'#fff',
        fontWeight:'bold',
        backgroundColor: 'transparent',
        fontSize: 18,
        textAlign: 'center'
    },
    tabTagline:{
        marginTop: 5,
        color:'#fff',
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize:12,
        marginBottom: 10
    },
    number:{
        color:'#01cca1',
        fontWeight:'bold',
        backgroundColor: 'transparent',
        fontSize: 16,
        textAlign: 'center'
    },
    category:{
        fontWeight:'bold',
        backgroundColor: 'transparent',
        fontSize: 12,
        textAlign: 'center'
    },
    tabItems:{
        flex:1,
        height: 60,
        alignItems: 'center',
        padding: 10
    },
    tabIconStyles:{
        height: 25,
        width: 25,
        tintColor: '#fff'
    },
    inputStyle:{
        height: 40,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor:'rgba(1, 163, 129,0.3)',
        borderWidth: 1,
        borderColor:'rgba(1, 163, 129,0.3)' ,
        borderRadius:20,
        paddingLeft: 15,
        marginBottom: 20,
        color: '#fff',
    },
    formGroup:{
        marginTop:30,
    },
    profileImg:{
        marginTop:10,
        height:WIDTH*0.25 ,
        width: WIDTH*0.25,
        borderRadius: WIDTH*0.25/2
    }
}

export default styles