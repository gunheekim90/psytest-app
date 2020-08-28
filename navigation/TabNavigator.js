//탭 페이지가 열리자마자 제목을 설정하기 위해 useEffect 훅을 사용합니다
import React,{useEffect} from "react";
//탭 버튼에 사용할 아이콘을 가져옵니다. 이미 Expo에 준비되어 있습니다
import {Ionicons} from "@expo/vector-icons";
//탭 버튼에 아이콘을 사용 할텐데 안드로이드와 IOS 각각 아이콘 이름이 조금 다릅니다.
//따라서 안드로이드인지 IOS인지 구분하기 위한 기능을 가져옵니다 
import {Platform} from "react-native"
//탭 버튼 생성 도구입니다
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//탭 버튼에 연결되어 페이지가 될 컴포넌트들을 가져옵니다
import Main from '../page/Main';
import History from '../page/History';

//하단 탭 네비게이터 생성 도구를 이용해, 탭 객체를 만듭니다
//이 탭 객체에는 탭 버튼을 생성할때 필요한 도구들이 몽땅 들어있습니다
const Tabs = createBottomTabNavigator();

//탭 네비게이터도 페이지를 만들어주는 스택 네비게이터의 한 페이지일 뿐입니다.
//탭 네비게이터가 여러 페이지를 가지고 있는 구조죠
//따라서 컴포넌트의 형식이며 스택 네비게이터가 페이지들에게 주는
//여러 정보가 담겨 있는 navigation, route 객체를 건네 줍니다.
const TabNavigator = ({navigation,route}) =>{
  
    useEffect(()=>{
        navigation.setOptions({
            title:'오늘은 심리테스트 각!'
        })
    },[])
    return (
    <Tabs.Navigator
        screenOptions={({route}) => ({
            tabBarIcon:({focused}) =>{

              //현재 이 앱을 구동하고 있는 디바이스가 뭔지 Platform.OS 을 통해 확인 할 수 있음
                let iconName = Platform.OS === "ios" ? "ios-" : "md-"
              
                  if (route.name === "Main") {
                    iconName += "list";
                  } else if (route.name === "History") {
                    iconName += "heart";
                  }
                  return (
                    <Ionicons
                      name={iconName}
                      color={focused ? "hotpink" : "grey"}
                      size={26}
                    />
                  );
            }
        })}
        tabBarOptions={{
            //버튼 밑에 탭 스크린 name을 보여줄기 결정합니다
            showLabel: false,
            style: {
              backgroundColor: "black",
              borderTopColor: "black",
              height:80
            }
        }}
    >
        {/* 탭 스크린 코드 순서에 따라 버튼 순서도 바뀝니다! */}
        <Tabs.Screen name="Main" component={Main}/>
        <Tabs.Screen name="History" component={History}/>
        
    </Tabs.Navigator>
    
    )
}

export default TabNavigator