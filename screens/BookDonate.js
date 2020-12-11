import * as React from 'react';
import {View, Text, TouchableOpacity,StyleSheet, FlatList, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import db from '../Config';


export default class BookDonate extends React.Component{
    constructor(){
        super();
        this.state={
            bookList:[],
        }
        this.requestRef=null;
    }

    componentDidMount=()=>{
        this.getBookList();
    }

    getBookList=()=>{
        this.requestRef=db.collection('bookRequest').onSnapshot((data)=>{
            var bookList = data.docs.map(document=>
                document.data()
            )
            this.setState({
                bookList:bookList
            })
        })
        console.log('this.state.bookList' + this.state.bookList)
    }

    keyExtractor=(item,index)=>{
        index.toString()
    }
    renderItem=({item,i})=>{
        return(
            <ListItem
                key={i}
                title={item.bookName}
                subtitle={item.reason}
                titleStyle={{
                    color:'black',
                    fontWeight:'bold',
                }}
                rightElement={
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{
                            this.props.navigation.navigate("receiverScreen",{"Details":1})
                        }}
                    >
                        <Text style={{color:"#ffffff"}}>
                            View
                        </Text>
                    </TouchableOpacity>
                }
                bottomDivider
            />
        );
    }

    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Donate Books"/>
                <View style={{flex:1}}>
                    {   this.state.bookList===[]
                        ? 
                            (
                                <View style={styles.subContainer}>
                                    <Text>List Of Requested Books</Text>
                                </View>
                            )
                        :
                            (
                                <FlatList
                                    keyExtractor={this.keyExtractor}
                                    data={this.state.bookList}
                                    renderItem={this.renderItem}
                                />
                            )
                    }
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
});