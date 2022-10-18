import React, { useEffect, useRef, useState } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

interface WithSplashProps {
    isAppReady?: boolean;
    children: any
}

export function WithSplash({ isAppReady, children }: WithSplashProps) {
    return (
        <>
            {isAppReady && children}
            <Splash isAppReady={isAppReady}/>
        </>
    )
}

interface SplashProps {
    isAppReady?: boolean;
}

export function Splash({ isAppReady }: SplashProps) {
    const [hideSplash, setHideSplash] = useState(false);
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (isAppReady) {
            setTimeout(() => {
                Animated.timing(
                    opacity,
                    {
                        toValue: 0,
                        duration: 1000,
                        useNativeDriver: true
                    }
                ).start();
                setTimeout(() => { setHideSplash(true) }, 1100)
            }, 2000);
        } else {
            setHideSplash(false);
            Animated.timing(
                opacity,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            ).start();
        }
    }, [isAppReady]);

    return (
        <>
            {!hideSplash ? <Animated.View style={[styles.splashContainer, { opacity }]}>
                <Text>Something</Text>
            </Animated.View> : null}
        </>
    )
}

const styles = StyleSheet.create({
    splashContainer: {
        ...StyleSheet.absoluteFillObject,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "black"
    }
}); 