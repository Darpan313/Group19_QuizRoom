import React from "react";
import { UserContext } from "../context/user";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import certi from "../assets/certificate.png";
import logo from "../assets/certilogo.png";
import word from "../assets/certiword.png";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    borderWidth: 10,
    borderColor: "gray",
    borderStyle: "double",
  },
  wordimage: {
    justifyContent: "center",
    width: "600pt",
    height: "150pt",
    marginLeft: 250,
    marginTop: 10,
  },
  logoimage: {
    justifyContent: "center",
    width: "350pt",
    height: "200pt",
    marginLeft: 350,
    marginTop: 10,
  },
  image: {
    marginTop: 10,
    justifyContent: "center",
    width: "170pt",
    height: "170pt",
    marginLeft: 450,
  },
  textWrapper: {
    // padding: 40,
    borderWidth: 10,
    borderColor: "#4D4D4D",
    borderStyle: "outset",
  },
  text: {
    color: "#212121",
    marginTop: 10,
    fontSize: 30,
    textAlign: "center",
    // fontFamily: "Oswald",
  },
  title: {
    fontSize: 22,
    // fontFamily: 'Lato Bold',
    textAlign: "center",
  },
});

export function PdfDocument(props) {
  const trial = "Niharika";
  return (
    <Document>
      <Page style={styles.page} size={[700, 1100]} page orientation="landscape">
        <View style={styles.textWrapper}>
          <Image style={styles.wordimage} src={word}></Image>
          <Image style={styles.image} src={certi}></Image>
          <Text
            render={({ trial }) =>
              `${trial}`
            }
            fixed
          />
          <Text style={styles.text}>Director X.Y.Z</Text>
          <Image style={styles.logoimage} src={logo}></Image>
        </View>
      </Page>
    </Document>
  );
  }
