import { Audio } from 'expo-av';

export async function playSound() {
    try {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../srcmusic/music_bg.mp3'));
        console.log('Sound Loaded');
        console.log('Playing Sound');
        await sound.playAsync();
        console.log('Sound Played');
    } catch (error) {
        console.error('Error playing sound', error);
    }
}
