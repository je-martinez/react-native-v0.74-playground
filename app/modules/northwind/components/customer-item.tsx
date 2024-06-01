import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Customer } from "../types";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  customer: Customer;
}

export default function CustomerItem({ customer }: Props) {
  const address = `${customer.address.street}, ${customer.address.city}, ${customer.address.region}, ${customer.address.country}, ${customer.address.postalCode}`;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Ionicons name="business" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Company Name:</Text>
        <Text>{customer.companyName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Ionicons name="person" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Contact Name:</Text>
        <Text>{customer.contactName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Ionicons
          name="person-circle"
          size={24}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.label}>Contact Title:</Text>
        <Text>{customer.contactTitle}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Ionicons name="location" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>
          Address: <Text style={styles.address}>{address}</Text>
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Ionicons name="call" size={24} color="black" style={styles.icon} />
        <Text style={styles.label}>Phone:</Text>
        <Text>{customer.address.phone}</Text>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>See Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    marginRight: 5,
  },
  icon: {
    marginRight: 5,
  },
  button: {
    backgroundColor: "#0ea5e9",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  address: {
    fontWeight: "normal",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
