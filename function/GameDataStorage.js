import AsyncStorage from '@react-native-async-storage/async-storage';

const saveGameData = async (data) => {
    try {
        await AsyncStorage.setItem('gameData', JSON.stringify(data));
        console.log('Dữ liệu game đã được lưu trữ.');
    } catch (error) {
        console.error('Lỗi khi lưu dữ liệu game:', error);
    }
};
const loadGameData = async () => {
    try {
        const storedData = await AsyncStorage.getItem('gameData');
        if (storedData) {
            const gameData = JSON.parse(storedData);
            console.log('Dữ liệu game đã được tải:', gameData);
            return gameData;
        }
    } catch (error) {
        console.error('Lỗi khi tải dữ liệu game:', error);
    }
    return null;
};

export { saveGameData, loadGameData };
