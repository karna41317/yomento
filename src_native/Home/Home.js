import React from 'react'
import {View,
    ScrollView,
    Dimensions,
    Text,
    Image,
    TouchableOpacity} from 'react-native'
import ImageSlider from 'react-native-image-slider'
import DetailNews from './DetailNews'
import Hr from 'react-native-hr'
import {Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import {fetchNews,selectedNews} from '../redux/action/News'
import NewsList from './NewsList'
import Spinner from '../comon/Spinner'

class Home extends React.Component {

    static navigationOptions = ({navigation}) =>{
        return{
            title: <Image
                source={require('../images/logo.png')}
                style={{height: 26,width: 26,tintColor: '#fff'}}
            />,
            drawerIcon: <Image
                source={require('../icon/hash.png')}
                style={{width:28,height:28,tintColor:'#fff'}}
            />,
            headerLeft:
                <TouchableOpacity onPress={()=> navigation.navigate('LOGIN')}>
                    <Icon name="power-settings-new" color="white" size={30} style={{marginLeft:5}} />
            </TouchableOpacity>,
            headerRight:
                <TouchableOpacity onPress={()=> navigation.navigate('DrawerOpen')}>
                    <Icon name="menu" color="white" size={30} style={{marginRight:10}} />
            </TouchableOpacity>,
            headerStyle: {
                backgroundColor: '#00c497'
            }
        }
    }
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        this.props.fetchNews()
       // this.renderList(this.props)
    }
    componentwillreceiveprops(nextProps){
        this.renderList(nextProps)
    }
    renderDetail(item){
        this.props.selectedNews(item)
        // navigate
        this.props.navigation.navigate('DetailNews')
    }
    renderList(){
        if(!this.props.loading){
            return <Spinner size={'large'}  />
        }else {
            return this.props.news.map(item =>{
                return(
                    <View key={item._id}>
                        <TouchableOpacity onPress={()=> this.renderDetail(item)}>
                            <View style={[styles.cardStyle,{marginTop:22}]}>
                                <Text style={styles.articleTitle}>{item.title}</Text>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                                        <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                                        <Image
                                            source={require('../icon/clock.png')}
                                            style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5}} />
                                        <Text style={{fontWeight:'bold',fontSize: 12}}>1h ago</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity>
                                            <Text style={{fontWeight:'bold',fontSize: 12}}>{item.category}</Text>
                                        </TouchableOpacity>
                                        <Hr lineColor="#8c8c8c" />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <Hr lineColor="#ccc" />
                    </View>
                )
            })
        }


    }

    componentWillUnmount() {

    }

    render(){
        const HEIGHT = Dimensions.get('window').height
        const WIDTH = Dimensions.get('window').width
        return(
            <ScrollView  style={{backgroundColor:'#fff'}}>

                <Swiper  style={{height:HEIGHT/3}} showsButtons={false} autoplay={true}>
                    <Image source={require('../images/Slider/meros.jpeg')} style={{width:WIDTH}} />
                    <Image source={require('../images/Slider/chery.jpg')} style={{width:WIDTH}} />
                    <Image source={require('../images/Slider/rose.jpeg')} style={{width:WIDTH}} />

                </Swiper>
                {this.renderList(this.renderList.bind(this))}
                { // temporary view, require listView
                    }
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailNews')}>
                        <View style={[styles.cardStyle,{marginTop:22}]}>
                            <Text style={styles.articleTitle}>Lorem Ipsum is simple dummy text of the printing</Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                                    <Text style={{fontSize: 12,marginRight:10}}>CDC</Text>
                                    <Image
                                        source={require('../icon/clock.png')}
                                        style={{tintColor: '#4d4d4d',width:12,height:12,marginRight:5}} />
                                    <Text style={{fontWeight:'bold',fontSize: 12}}>1h ago</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Text style={{fontWeight:'bold',fontSize: 12}}>ENVIRONMENT</Text>
                                    </TouchableOpacity>
                                    <Hr lineColor="#8c8c8c" />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Hr lineColor="#ccc" />

            </ScrollView>
        )
    }
}
const styles = {
    cardStyle:{
        margin: 10,
        marginTop: 15,
        marginBottom: 15,
        padding: 5,
    },
    articleTitle:{
        paddingBottom: 15,
        fontWeight: 'bold',
    },
    timeIconStyle:{
        tintColor: '#4d4d4d',
        width:12,
        height:12,
        marginRight:5
    },
    slideImage:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
};


const mapStateToProps = ({ news }) => {
    return { news: news.allNews,loading: news.loading}
}

export default connect(mapStateToProps,{fetchNews,selectedNews})(Home)
//export default HomeNav


