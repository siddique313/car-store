import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
interface Iproos {
  item: {
    name: string;
    image: any;
    price: number;
    originalPrice?: number;
    rating?: number;
  };
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}
const CareDetailModal = ({ item, modalVisible, setModalVisible }: Iproos) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            style={styles.modalImage}
            source={item.image}
            resizeMode="contain"
          />
          <Text style={styles.modalTitle}>{item.name}</Text>

          <View style={styles.modalDetailRow}>
            <Text style={styles.modalDetailLabel}>Price:</Text>
            <Text style={styles.modalDetailValue}>Rs: {item.price}</Text>
          </View>

          {item.originalPrice && (
            <View style={styles.modalDetailRow}>
              <Text style={styles.modalDetailLabel}>Original Price:</Text>
              <Text style={[styles.modalDetailValue, styles.strikethrough]}>
                Rs: {item.originalPrice}
              </Text>
            </View>
          )}

          <View style={styles.modalDetailRow}>
            <Text style={styles.modalDetailLabel}>Rating:</Text>
            <Text style={styles.modalDetailValue}>⭐ {item.rating || 4.5}</Text>
          </View>

          {/* Add more details as needed */}

          <Pressable
            style={[styles.modalButton, styles.modalCloseButton]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.modalButtonText}>Close</Text>
          </Pressable>

          <Pressable
            style={[styles.modalButton, styles.modalActionButton]}
            onPress={() => {
              // Handle add to cart action
              console.log("Added to cart:", item.name);
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.modalButtonText}>Add to Cart</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default CareDetailModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  modalImage: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  modalDetailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 8,
  },
  modalDetailLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  modalDetailValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2e86de",
  },
  strikethrough: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  modalButton: {
    borderRadius: 10,
    padding: 12,
    elevation: 2,
    width: "100%",
    marginTop: 10,
  },
  modalCloseButton: {
    backgroundColor: "#f1f1f1",
  },
  modalActionButton: {
    backgroundColor: "#2e86de",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
