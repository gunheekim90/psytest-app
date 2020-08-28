import React from "react";
import {TouchableOpacity,View,Text,StyleSheet} from "react-native";

const Category = ({title,selectCategory}) => {
    return (
        <TouchableOpacity onPress={()=>selectCategory(title)}>
            <View style={styles.category}><Text style={styles.categoryTitle}>{title}</Text></View>
        </TouchableOpacity >
    )
}

export default Category;


const styles = StyleSheet.create({
    category:{
        width:100,
        height:30,
        marginTop:30,
        marginRight:5,
        marginLeft:13,
        borderRadius:5,
        borderColor:'#fff',
        borderWidth:1,
        borderStyle:'solid'
      },
      categoryMain:{
        width:100,
        height:30,
        marginTop:30,
        marginRight:5,
        marginLeft:13,
        borderRadius:5,
        borderColor:'hotpink',
        borderWidth:1,
        borderStyle:'solid'
      },
      categoryMainTitle:{
        color:'hotpink',
        textAlign:'center',
        marginTop:6
      },
      categoryTitle: {
        color:'#fff',
        textAlign:'center',
        marginTop:6
      },
  });
  