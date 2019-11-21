import { Dimensions } from 'react-native'
import { wp, hp } from '../Libraries/index';
const { width, height } = Dimensions.get("window");

const fontSize = {
    Small: hp('2%'),
    Medium: hp('2.3%'),
    large: hp('5%'),
}

const color = {
    black: '#000',
    white: '#ffffff',
    lightGray:'#999999',
}
export { fontSize, color, width, height }