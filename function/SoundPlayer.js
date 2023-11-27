import { Audio } from 'expo-av';

let soundInstance = null;

export async function playSound() {
    try {
        if (soundInstance) {
            await soundInstance.stopAsync(); // Dừng âm thanh đang phát nếu có
            await soundInstance.unloadAsync(); // Giải phóng âm thanh hiện tại
        }

        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../srcmusic/music_bg.mp3'),
            { shouldPlay: true },
            onPlaybackStatusUpdate
        );

        console.log('Sound Loaded');
        console.log('Playing Sound');
        await sound.playAsync();
        console.log('Sound Played');

        soundInstance = sound; // Lưu trữ tham chiếu tới âm thanh để quản lý
    } catch (error) {
        console.error('Error playing sound', error);
    }
}

const onPlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
        soundInstance.replayAsync(); // Phát lại âm thanh khi kết thúc
    }
};

export async function stopSound() {
    try {
        if (soundInstance) {
            await soundInstance.stopAsync();
            await soundInstance.unloadAsync();
            soundInstance = null;
        }
    } catch (error) {
        console.error('Error stopping sound', error);
    }
}
