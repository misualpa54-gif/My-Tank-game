import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import * as THREE from 'three';

window.THREE = THREE;

async function startTankRealms() {
    await import('../assets/js/game.js');

    if (!Capacitor.isNativePlatform() || !window.TankRealmsApp) return;

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
