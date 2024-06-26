import { Collapsible } from "@/ui/components/Collapsible";
import * as dayjs from "dayjs";
import { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Order, OrderDetail } from "../types";

interface Props {
  order: Order;
}

export default function OrderItem({ order }: Props) {
  const formattedDate = useMemo(() => {
    if (!order.orderDate) return "";
    const date = new Date(order.orderDate);
    return dayjs.default(date).format("MMMM D, YYYY");
  }, [order.orderDate]);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Order Information</Text>
      </View>
      <View style={styles.invoiceContainer}>
        <View style={styles.invoiceInfo}>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Order #:</Text>
            <Text style={styles.labelNormal}>{order.id}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>
              Customer:{" "}
              <Text style={styles.labelNormal}>
                {order.customer?.companyName}
              </Text>
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Employee ID:</Text>
            <Text style={styles.labelNormal}>{order.employeeId}</Text>
          </View>
          {order.orderDate && (
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Order Date:</Text>
              <Text style={styles.labelNormal}>{formattedDate}</Text>
            </View>
          )}
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Freight:</Text>
            <Text style={styles.labelNormal}>{order.freight}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>
              Ship Address:{" "}
              <Text style={styles.labelNormal}>
                {order.shipAddress.street}, {order.shipAddress.city},{" "}
                {order.shipAddress.region}, {order.shipAddress.country},{" "}
                {order.shipAddress.postalCode}
              </Text>
            </Text>
          </View>
        </View>

        <Collapsible key={order.id} title="Order Details">
          <View style={styles.detailsContainer}>
            {order.details.map((detail: OrderDetail, index: number) => (
              <View
                key={`${order.id}-${detail.productId}-${index}}`}
                style={styles.detailItem}
              >
                <Text style={styles.detailProductName}>
                  {detail.product?.name}
                </Text>
                <View style={styles.detailLine}>
                  <Text style={styles.detailQuantity}>Quantity</Text>
                  <Text style={styles.detaiAmount}>{detail.quantity}</Text>
                </View>

                <View style={styles.detailLine}>
                  <Text style={styles.detailPrice}>Price</Text>
                  <Text style={styles.detaiAmount}>
                    {formatCurrency(detail.unitPrice)}
                  </Text>
                </View>

                <View
                  style={StyleSheet.compose(
                    styles.totalMargin,
                    styles.detailLine
                  )}
                >
                  <Text style={styles.detailTotal}>Total</Text>
                  <Text style={styles.detaiAmountTotal}>
                    {formatCurrency(detail.quantity * detail.unitPrice)}
                  </Text>
                </View>
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
    marginBottom: 5,
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
  labelNormal: {
    fontWeight: "normal",
    marginRight: 5,
  },
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
  detailLine: {
    flex: 1,
    flexDirection: "row",
  },
  totalMargin: {
    marginTop: 10,
  },
  detailQuantity: {
    flex: 1,
    textAlign: "left",
    color: "#666",
  },
  detaiAmount: {
    flex: 0.5,
    textAlign: "right",
    color: "#666",
  },
  detaiAmountTotal: {
    flex: 1,
    textAlign: "right",
    fontWeight: "bold",
    color: "#666",
  },
  detailPrice: {
    flex: 1,
    color: "#666",
  },
  detailTotal: {
    flex: 1,
    fontWeight: "bold",
    color: "#666",
  },
});
