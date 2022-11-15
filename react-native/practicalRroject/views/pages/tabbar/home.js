import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TextInput, SafeAreaView, ScrollView, StatusBar, ImageBackground, Platform } from 'react-native'
import dp2px from '../../utils/common/dp2px';
import SelectedServices from '../../components/home/selectedServices'
import AskBox from '../../components/home/askBox'
import EightPro from '../../components/home/eightPro'
import FixedSearch from '../../components/home/fixedSearch'
import SearchBg from '../../components/home/searchBg'
import WtClass from '../../components/home/wtClass'
import TabPro from '../../components/home/tabPro'
import ComStatusBar from '../../components/common/comStatusBar';
import DeviceInfo from 'react-native-device-info'

export default function Home(props) {
  const proRef = useRef()
  const [showHead, setShowHead] = useState(false)
  const [modelType, setModelType] = useState('')
  const [iosList] = useState(['X', 'Xs', '11', '12', '13', '14'])

  useEffect(() => {
    if (DeviceInfo.getModel() && DeviceInfo.getModel().indexOf('iPhone') != '-1') {
      let arr = DeviceInfo.getModel().slice(7).split(' ')
      setModelType(arr.length > 0 ? arr[0] : '')
    }
  }, [modelType])

  useEffect(() => {
    // console.log(process.env.NODE_ENV, "输出当前环境配置")
  }, [showHead])

  // 触底判断
  const reachBottom = (event) => {
    const offSetY = event.nativeEvent.contentOffset.y; // 获取滑动的距离
    const contentSizeHeight = event.nativeEvent.contentSize.height; // scrollView  contentSize 高度
    const oriageScrollHeight = event.nativeEvent.layoutMeasurement.height; // scrollView高度
    if (offSetY + oriageScrollHeight >= contentSizeHeight - 50) {
      proRef.current.getReachList()
    }
  };

  const onScroll = (event) => {
    const offSetY = event.nativeEvent.contentOffset.y;
    offSetY > 80 ? setShowHead(true) : setShowHead(false)
  }

  return (
    <View>
      {/* 状态栏 */}
      <ComStatusBar />
      <SafeAreaView>
        <View style={styles.mainContain}>
          <FixedSearch showHead={showHead}></FixedSearch>
          <ScrollView stickyHeaderIndices={[]} onScroll={(e) => onScroll(e)} scrollEventThrottle={0} showsVerticalScrollIndicator={false} onScrollEndDrag={(e) => reachBottom(e)}>

            {/* 搜索/背景图区域 */}
            <SearchBg></SearchBg>

            {/* 八大产品区域 */}
            <EightPro props={props}></EightPro>

            {/* 咨询框表单 */}
            <AskBox></AskBox>

            {/* 精选服务 */}
            <SelectedServices props={props}></SelectedServices>

            {/* 卧涛课堂 */}
            <WtClass props={props}></WtClass>

            {/* tab产品 */}
            <TabPro proRef={proRef} props={props}></TabPro>
          </ScrollView>
          <Image style={[styles.askSty, Platform.OS == 'ios' ? {
            bottom: dp2px(iosList.includes(modelType) ? 150 : 90)
          } : '']} source={require('../../images/home/icon-ask.png')}></Image>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContain: {
    position: 'relative',
    backgroundColor: '#F5F7FB',
  },
  askSty: {
    position: 'absolute',
    bottom: dp2px(50),
    right: dp2px(8),
    width: dp2px(54),
    height: dp2px(50)
  }
})
