import React,{useEffect, useState} from 'react';
import { Button, View } from 'react-native';
import { ImageBackground,StyleSheet ,Text,SafeAreaView,Image} from 'react-native';

let state=true,data,x;
let loading=true;
function Welcome(props) {
    
    const url='https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1'
    
x=        fetch(url)
          .then((resp) => resp.json())
          .then((json) => { console.log(json);namee=json['name'];return (json)})
          .catch((error) => console.error(error))
          .finally(() => loading=false);
      
          console.log(x)
    // fetch(url).then((response)=>response.json()).then((data)=>{ y = data } ) 
    // console.log(y)
    

    return (<>

    <SafeAreaView style={{flex:1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
    }}>
        <View style={{alignItems: 'center',
     justifyContent: 'center',margin:20,display:'flex',flexDirection:'row'}}>
   
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Select Dish</Text>        
   </View>


<View style={{backgroundColor:'black',height:50,width:'100%'}}></View>

<View style={{backgroundColor:'white',height:50,width:'100%',alignItems: 'center',
     justifyContent: 'center',}}>
    
<View style={{backgroundColor:'white',height:50,width:'90%',alignItems: 'center',
     justifyContent: 'center',marginTop:-55,borderRadius:25,borderBottomColor:'black',borderWidth:0.1}}> 
    <View style={{display:'flex',flexDirection:'row',width:'80%',alignItems: 'center',
     justifyContent: 'center'}}>
<Text style={{fontSize:10,flex:1,fontWeight:'bold'}}>21 May 2021</Text>
<Text style={{fontSize:10,flex:1,fontWeight:'bold'}}>10:30pm-12:30pm</Text>

</View>
</View>

</View>

<Text style={{fontSize:30,margin:10,fontWeight:'bold'}}>Popular Dish</Text>
<View style={{display:'flex',flexDirection:'row'}}>
<Image style={{ height:100,width:100,margin:10,borderRadius:100}} source={require('../IMG/download.jpg')}>    
</Image>
<Image style={{ height:100,width:100,margin:10,borderRadius:100}} source={require('../IMG/download.jpg')}>    
</Image>
<Image style={{ height:100,width:100,margin:10,borderRadius:100}} source={require('../IMG/download.jpg')}>    
</Image>
<Image style={{ height:100,width:100,margin:10,borderRadius:100}} source={require('../IMG/download.jpg')}>    
</Image>

</View>





<View style={{display:'flex',flexDirection:'row'}}>
<Text style={{fontSize:30,margin:10,fontWeight:'bold',flex:1}}>Recomended</Text>
{/* <Button title="menu" style={{padding:10,backgroundColor:'black',margin:10}}></Button> */}
<Text style={{fontSize:10,margin:10,fontWeight:'bold',backgroundColor:'black',color:'white',padding:10}}>Menue</Text>

</View>


{/* data={data} */}
<View style={{display:'flex',flexDirection:'row',borderBottomColor:'black',borderWidth:1}}>
<View style={{display:'flex',flexDirection:'column',flex:1}}>
<Text style={{fontSize:20,margin:10,fontWeight:'bold',flex:1}}>Masala Mughlai</Text>
<Text style={{fontSize:20,margin:10,fontWeight:1,flex:1}}>Recomended</Text>

</View>
<Image style={{ height:100,width:100,margin:20,borderRadius:10}} source={require('../IMG/download.jpg')}>    
</Image>

</View>



<View style={{display:'flex',flexDirection:'row',borderBottomColor:'black',borderWidth:1}}>
<View style={{display:'flex',flexDirection:'column',flex:1}}>
<Text style={{fontSize:20,margin:10,fontWeight:'bold',flex:1}}>Masala Mughlai</Text>
<Text style={{fontSize:20,margin:10,fontWeight:1,flex:1}}>Recomended</Text>

</View>
<Image style={{ height:100,width:100,margin:20,borderRadius:10}} source={require('../IMG/download.jpg')}>    
</Image>

</View>



<View style={{display:'flex',flexDirection:'row',borderBottomColor:'black',borderWidth:1}}>
<View style={{display:'flex',flexDirection:'column',flex:1}}>
<Text style={{fontSize:20,margin:10,fontWeight:'bold',flex:1}}>Masala Mughlai</Text>
<Text style={{fontSize:20,margin:10,fontWeight:1,flex:1}}>Recomended</Text>

</View>
<Image style={{ height:100,width:100,margin:20,borderRadius:10}} source={require('../IMG/download.jpg')}>    
</Image>

</View>
















{/* 

    <View style={{display:'flex',flexDirection:'row'}}>


<Image style={{ height:100,width:100}} source={require('../IMG/PI.png')}>    
</Image>

        <Text style={{
    flex:1,
    backgroundColor: '#f3f',
    // alignItems: 'center',
    // justifyContent: 'center',
  }}>hellowf iujf</Text>
</View>

<View style={{justifyContent:'flex-end'}}>
<View style={{justifyContent:'center',alignItems:'center',width:'100%',height:50,backgroundColor:'green'}}>
<Text style={{fontSize:30}}>Login</Text>
</View>
<View style={{justifyContent:'center',alignItems:'center',width:'100%',height:50,backgroundColor:'#e67'}}>
<Text style={{fontSize:30}}>Signup</Text>
</View>
</View> */}

</SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
})

export default Welcome;

