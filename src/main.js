import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import * as THREE from 'three';

const ACTIVE_RUN_STORAGE_KEY = 'tank_realms_active_run_v1';
let startupComplete = false;

window.THREE = THREE;

function setLoadingStatus(message) {
    const status = document.getElementById('loading-status');
    if (status) status.textContent = message;
}

function getSafeErrorMessage(error) {
    const message = error instanceof Error ? error.message : String(error || 'Unknown startup error');
    return message.replace(/\s+/g, ' ').trim().slice(0, 220) || 'Unknown startup error';
}

function showStartupError(error) {
    console.error('Tank Realms startup/runtime failure:', error);
    if (startupComplete && window.TankRealmsApp) {
        try {
            window.TankRealmsApp.handleAppStateChange(false);
        } catch {
            // The recovery screen must remain available even if pausing failed.
        }
    }
    document.body.classList.remove('app-ready', 'graphics-context-lost');
    const loading = document.getElementById('app-loading');
    if (loading) loading.style.display = 'none';
    const detail = document.getElementById('startup-error-detail');
    if (detail) {
        const phase = startupComplete ? 'Runtime error' : 'Startup error';
        detail.textContent = `${phase}: ${getSafeErrorMessage(error)}`;
    }
    document.getElementById('startup-error')?.classList.remove('hidden');
}

document.getElementById('btn-reload-app')?.addEventListener('click', () => {
    window.location.reload();
});

document.getElementById('btn-reset-run')?.addEventListener('click', () => {
    try {
        window.localStorage.removeItem(ACTIVE_RUN_STORAGE_KEY);
        window.location.reload();
    } catch (error) {
        const detail = document.getElementById('startup-error-detail');
        if (detail) {
            detail.textContent = `Could not reset the unfinished run: ${getSafeErrorMessage(error)}`;
        }
    }
});

window.addEventListener('error', (event) => {
    showStartupError(event.error || event.message);
});

window.addEventListener('unhandledrejection', (event) => {
    showStartupError(event.reason);
});

async function startTankRealms() {
    setLoadingStatus('Creating the first realm…');
    try {
        await import('../assets/js/game.js');
        startupComplete = true;
    } catch (error) {
        showStartupError(error);
        return;
    }

    if (!Capacitor.isNativePlatform() || !window.TankRealmsApp) return;

    try {
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
        }).catch(error => console.warn('App state listener unavailable:', error));

        App.addListener('backButton', () => {
            const handled = window.TankRealmsApp.handleBackButton();
            if (!handled && window.confirm('Exit Tank Realms?')) {
                App.exitApp();
            }
        }).catch(error => console.warn('Android Back listener unavailable:', error));
    } catch (error) {
        // Native comfort integrations should never prevent the already-loaded
        // offline game from remaining playable.
        console.warn('Tank Realms native integration unavailable:', error);
    }
}

startTankRealms();
