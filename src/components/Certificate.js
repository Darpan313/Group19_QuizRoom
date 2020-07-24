import certi from "../assets/certificate.png";
import logo from "../assets/certilogo.png";
import word from "../assets/certiword.png";
import ReactPDF from "@react-pdf/renderer";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";

export default class Certificate extends React.Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 border-right">
              <header>
                <h3 class="text-center">
                  <b>Certificate of Completion</b>
                </h3>
              </header>
              <div class="certificate certificateCompletion">
                <PDFViewer>
                  <MyDocument />
                </PDFViewer>
                {/* <div class="btn-primary">
                  <PDFDownloadLink
                    document={<MyDocument />}
                    fileName="somename.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? "Loading document..." : "Download now!"
                    }
                  </PDFDownloadLink>
                </div> */}
              </div>
            </div>
            <div class="col-md-4 message">
              <header class="text-center">
                <h3>Congratulations!</h3>
              </header>
              <br />
              <section>
                <center>
                  <dl>
                    <dt>Lorem ipsum</dt>
                    <dd>
                      Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
                    </dd>
                    <dt>Lorem ipsum dolor sit amet dolor sit amet</dt>
                    <dd>
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
                    </dd>
                  </dl>
                </center>
              </section>
              <br />
              <section>
                Lorem ipsum dolor sit amet,{" "}
                <strong>consectetur adipiscing elit</strong>. Aliquam eget
                sapien sapien. Curabitur in metus urna. In hac habitasse platea
                dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam
                purus nibh, lacinia non faucibus et, pharetra in dolor. Sed
                iaculis posuere diam ut cursus.{" "}
                <em>
                  Morbi commodo sodales nisi id sodales. Proin consectetur, nisi
                  id commodo imperdiet, metus nunc consequat lectus, id bibendum
                  diam velit et dui.
                </em>{" "}
                Proin massa magna, vulputate nec bibendum nec, posuere nec
                lacus. <br />
                <br />
              </section>
              <br />
              <div class="buttonsDiv">
                <div class="row">
                  <div class="btn-primary col-md-6 certificateButtons">
                  <PDFDownloadLink
                    document={<MyDocument />}
                    fileName="somename.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? "Loading document..." : "Download now!"
                    }
                  </PDFDownloadLink>
                  </div>
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary certificateButtons"
                      type="submit"
                    >
                      Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
    fontFamily: "Oswald",
  },
  title: {
    fontSize: 22,
    // fontFamily: 'Lato Bold',
    textAlign: "center",
  },
});
Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});
const MyDocument = () => (
  <Document>
    <Page style={styles.page} size={[700, 1100]} page orientation="landscape">
      <View style={styles.textWrapper}>
        <Image style={styles.wordimage} src={word}></Image>
        <Image style={styles.image} src={certi}></Image>
        <Text style={styles.text}>
          This is to certify that STUDENT has completed COURSE with GRADE
        </Text>
        <Text style={styles.text}>Director X.Y.Z</Text>
        <Image style={styles.logoimage} src={logo}></Image>
      </View>
    </Page>
  </Document>
);

const App = () => (
  <div>
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
