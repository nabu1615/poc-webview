import React, { useState, useRef } from 'react';

import { View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

import Navigation from "./Navigation";

const styles = {
    container: {
        flex: 1,
        marginTop: 20,
    },
    loader: {
        position: "absolute",
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const ContentView = () => {
    const webViewRef = useRef();

    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanForward] = useState(false);

    const handleBackPress = () => {
        webViewRef.current.goBack();
    };

    const handleForwardPress = () => {
        webViewRef.current.goForward();
    };

    const loader = () => {
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="blue" />
        </View>
    }

    return (
        <View style={styles.container}>
            <WebView
                ref={webViewRef}
                source={{ uri: 'https://babymodyo.modyo.cloud/javiers-channel-example/' }}
                originWhitelist={['*']}
                onNavigationStateChange={state => {
                    const back = state.canGoBack;
                    const forward = state.canGoForward;

                    setCanGoBack(back);
                    setCanForward(forward);
                }}
                startInLoadingState
                renderLoading={loader}
            />
            <Navigation
                onBackPress={handleBackPress}
                onForwardPress={handleForwardPress}
                canGoBack={canGoBack}
                canGoForward={canGoForward}
            />
        </View>
    )
}

export default ContentView;