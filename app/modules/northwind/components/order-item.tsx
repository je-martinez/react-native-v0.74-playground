import { useMemo, useState } from "react";
import { Order, OrderDetail } from "../types";
import { Ionicons } from "@expo/vector-icons"; // Importing Ionicons from Expo Icons
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as dayjs from "dayjs";
import { Collapsible } from "@/ui/components/Collapsible";
import { ThemedText } from "@/ui/components/ThemedText";

interface Props {
  order: Order;
}

export default function OrderItem({ order }: Props) {
  const formattedDate = useMemo(() => {
    if (!order.orderDate) return "";
    const date = new Date(order.orderDate);
    return dayjs.default(date).format("MMMM D, YYYY");
  }, [order.orderDate]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Order Information</Text>
      </View>
      <View style={styles.invoiceContainer}>
        <View style={styles.invoiceInfo}>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Order #:</Text>
            <Text style={styles.value}>{order.id}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Customer ID:</Text>
            <Text style={styles.value}>{order.customerId}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Employee ID:</Text>
            <Text style={styles.value}>{order.employeeId}</Text>
          </View>
          {order.orderDate && (
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Order Date:</Text>
              <Text style={styles.value}>{formattedDate}</Text>
            </View>
          )}
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Freight:</Text>
            <Text style={styles.value}>{order.freight}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Ship Address:</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Text style={styles.value}>
                {order.shipAddress.street}, {order.shipAddress.city},{" "}
                {order.shipAddress.region}, {order.shipAddress.country},{" "}
                {order.shipAddress.postalCode}
              </Text>
            </ScrollView>
          </View>
        </View>

        <Collapsible title="Order Details">
          <View style={styles.detailsContainer}>
            {order.details.map((detail: OrderDetail, index: number) => (
              <View key={index} style={styles.detailItem}>
                <Text style={styles.detailProductName}>
                  {detail.product?.name}
                </Text>
                <Text style={styles.detailQuantity}>
                  Quantity: {detail.quantity}
                </Text>
                <Text style={styles.detailPrice}>
                  Price: ${detail.unitPrice}
                </Text>
              </View>
            ))}
          </View>
        </Collapsible>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  invoiceContainer: {
    padding: 15,
  },
  invoiceInfo: {
    marginBottom: 15,
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
  value: {},
  detailsContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  detailsHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailItem: {
    marginBottom: 5,
  },
  detailProductName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detailQuantity: {
    color: "#666",
  },
  detailPrice: {
    color: "#666",
  },
});
