import { StyleSheet, Text, View,Modal } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';

const ConfirmationPop = ({visibility,onClose}) => {
    return (
		<Modal
			transparent={true}
			visible={visibility}
			// onRequestClose={onCancel}
			animationType='slide'

		>
			<View style={styles.modal}>
				<View
					style={{
						width: "85%",
						height: "25%",
						borderRadius: 20,
						backgroundColor: "#fff",
					}}>
					<View style={styles.confirmTexT}>	
						<Text style={{ color: 'green', fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>Sign in successfull</Text>	
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'center', }}>
						<Button
							title='ok'
							containerStyle={{width:"20%",borderRadius:10}} buttonStyle={{backgroundColor:'orange'}}
							onPress={onClose}
						/>
					</View>
				</View>
			</View>

		</Modal>
	)
}

export default ConfirmationPop

const styles = StyleSheet.create({
    modal: {
		alignSelf: 'center',
		height: "100%",
		width: "100%",
		backgroundColor: '#00000066',
		// borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
    confirmTexT: {
		paddingTop: 50,
		alignItems: "center",
        paddingBottom:10
	}
})