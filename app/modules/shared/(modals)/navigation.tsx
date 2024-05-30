import { StyleSheet, View, Text, SectionList } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    title: "Home",
    paths: {
      "/": "/modules/home",
      "/explore": "/modules/home/explore",
    },
    data: ["/", "/explore"],
  },
  {
    title: "JSON Placeholder",
    data: ["/", "/posts", "/comments"],
    paths: {
      "/": "/modules/json-placeholder",
      "/posts": "/modules/json-placeholder/posts",
      "/comments": "/modules/json-placeholder/comments",
    },
  },
  {
    title: "Northwind",
    data: ["/", "/customers", "/orders"],
    paths: {
      "/": "/modules/northwind",
      "/customers": "/modules/northwind/customers",
      "/orders": "/modules/northwind/orders",
    },
  },
];

export default function NavigationModal() {
  const isPresented = router.canGoBack();

  const getPath = (section: string, path: string) => {
    const sectionData = DATA.find((data) => data.title === section);
    if (!sectionData) return path;
    return (sectionData?.paths as unknown as { [key: string]: string })?.[path];
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {isPresented && (
        <Link
          suppressHighlighting={true}
          style={styles.dismissButton}
          href="../"
        >
          Close
        </Link>
      )}
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ section, item }) => (
          <View>
            <Link
              replace={true}
              suppressHighlighting={true}
              href={getPath(section.title, item)}
              style={styles.item}
            >
              <Text style={styles.title}>{item}</Text>
            </Link>
            <View style={styles.iconItem}>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color={"white"}
              />
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  iconItem: {
    position: "absolute",
    right: "5%",
    top: "35%",
    zIndex: 50,
  },
  dismissButton: {
    borderWidth: 3,
    borderColor: "white",
    padding: 10,
    marginTop: 10,
    marginHorizontal: 150,
    borderRadius: 20,
    overflow: "hidden",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#0ea5e9",
    textAlign: "center",
  },
  item: {
    backgroundColor: "#0ea5e9",
    borderRadius: 20,
    marginHorizontal: 10,
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
