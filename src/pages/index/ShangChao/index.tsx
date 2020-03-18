// eslint-disable-next-line no-unused-vars
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import SearchBox from '../../../components/searchBox/index'

export default class ShangChao extends Component {

    config: Config = {
        navigationBarTitleText: '商超便利',
        navigationBarBackgroundColor: '#1e90ff'
    }

    render() {
        return (
            <View className='index'>
                <SearchBox placeholder='搜索商家、商品名称' />
            </View>
        )
    }
}