import React, { Component, useState } from "react"
import { ActivityIndicator, Modal, View } from "react-native";
import styles from "./styles";

const withLoading = Component => props => {

    const [isLoading, setIsLoading] = useState(false);

    console.log(isLoading)
    return (
        <View style={styles.container}>
            {isLoading && (
                <Modal transparent={true} >
                    <View style={styles.spinnerContainer} >
                        <ActivityIndicator size="large" color="white" />
                    </View>
                </Modal>
            )}
            <Component {...props} setIsLoading={setIsLoading} />
        </View>
    )

}

export default withLoading;