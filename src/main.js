import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import * as THREE from 'three';

window.THREE = THREE;

async function startTankRealms() {
    await import('../assets/js/game.js');

    if (!Capacitor.isNativePlatform() || !window.TankRealmsApp) return;

    window.TankRealmsNative = Object.freeze({
        impact(style = 'light') {
            const impactStyle = style === 'heavy'
                ? ImpactStyle.Heavy
                : style === 'medium'
                    ? ImpactStyle.Medium
                    : ImpactStyle.Light;
            Haptics.impact({ style: impactStyle }).catch(() => {});
        }
    });

    App.addListener('appStateChange', ({ isActive }) => {
        window.TankRealmsApp.handleAppStateChange(isActive);
    });

    App.addListener('backButton', () => {
        const handled = window.TankRealmsApp.handleBackButton();
        if (!handled && window.confirm('Exit Tank Realms?')) {
            App.exitApp();
        }
    });
}

startTankRealms();
