import React, { Component } from 'react';
import { ScrollView,Text,View,Dimensions,Image,TouchableOpacity } from 'react-native';

const WIDTH = Dimensions.get('window').width

export default class Slides extends Component{
    constructor(props){
        super(props)
    }
    changeButton(index){
        {
            if(this.props.data.length - 1 === index){
                return(
                        <Text style={styles.textStyle}>Continue To App</Text>
                    )

            }return(
            <Text style={styles.textStyle}>Skip To App</Text>
        )
        }
    }
    renderSlide(){
        return this.props.data.map((slide,index)=>{
            return(
                <View key={slide.text} style={styles.containerStyle}>
                    <View>
                        <Text style={styles.textStyle}>{index + 1} of {this.props.data.length}</Text>
                    </View>
                    <View>
                        <Image source={slide.image} style={{height:100,width:100}} />
                    </View>
                    <View style={{width:200}}>
                        <Text style={styles.textStyle}>{slide.text}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnStyle}>
                            {this.changeButton(index)}
                        </TouchableOpacity>
                    </View>
                </View>

            )
        })
    }
    render(){
        return(
            <ScrollView
                style={{flex:1,backgroundColor: '#01cca1'}}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
            >
                {this.renderSlide()}
            </ScrollView>
        )
    }
}
const styles={
    containerStyle:{
        width: WIDTH,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#01cca1'
    },
    textStyle:{
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnStyle:{
        backgroundColor: '#01a381',
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    }

}