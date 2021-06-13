import {Dimensions} from "react-native";

const {WIDTH, HEIGHT} = Dimensions.get('window');

const designWidth = 375;
const designHeight = 812;

const scaleW = size => (WIDTH / designWidth) * size;
const scaleH = size => (HEIGHT / designHeight) * size;

export {scaleW, scaleH, WIDTH, HEIGHT};