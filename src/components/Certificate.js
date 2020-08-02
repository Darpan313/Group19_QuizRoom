import certi from "../assets/certificate.png";
import logo from "../assets/certilogo.png";
import word from "../assets/certiword.png";
import ReactPDF from "@react-pdf/renderer";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import { useState, useEffect } from 'react';
import axios from 'axios';


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


export default function Certificate() {
  const [quiz_name, setQuiz_name] =  useState([]);
  const [publish, setPublish] = useState([]);
  const [className, setClassName] = useState([]);
  const [marks, setMarks] = useState([]);


  // useEffect(() => {
  //   (async () => {
  //     const result = await axios(
  //       "http://localhost:5000/getcertificate"
  //     );
  //     console.log(`HELLOOO+${result["data"]}`);

  //     setMarks(result["data"]);
  //   })();
  // }, []);

  
  // useEffect(() => {
  //   console.log("inside useeffect");
  //   fetch('http://localhost:5000/getcertificate').then(res => res.json()).then(data => {
  //     setMarks(data.marks);
  //   });
  // }, []);


  const MyDocument = () => (

    <Document>
      <Page style={styles.page} size={[700, 1100]} page orientation="landscape">
        <View style={styles.textWrapper}>
          <Image style={styles.wordimage} src={word}></Image>
          <Image style={styles.image} src={certi}></Image>
          <Text style={styles.text}>
            This is to certify that Student has completed CSCI5875 Cloud Computing with A grade.
          </Text>
          <Text style={styles.text}>Director X.Y.Z</Text>
          <Image style={styles.logoimage} src={logo}></Image>
        </View>
      </Page>
    </Document>
  );

  // const App = () => (

  //   <div>
  //     <PDFViewer>
  //       <MyDocument />
  //     </PDFViewer>
  //     <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
  //       {({ blob, url, loading, error }) =>
  //         loading ? "Loading document..." : "Download now!"
  //       }
  //     </PDFDownloadLink>
  //   </div>
  // );

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
              <div class="row certificate certificateCompletion">
                <PDFViewer className="col-md-12">
                  <MyDocument />
                </PDFViewer>
               
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
                    <dt>Course completed successfully</dt>
                    <dd>
                      You can now download the PDF version of your course certifcate. Selects the Download now button!
                    </dd>

                  </dl>
                </center>
              </section>
              <br />
              <br />
              <div class="buttonsDiv">
                <div class="row">
                <div class="col-md-6">
                  <div class = "btn btn-primary certificateButtons">
                  <PDFDownloadLink
                    document={<MyDocument />}
                    fileName="certificate.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? "Loading document..." : "Download"
                    }
                  </PDFDownloadLink>
                  </div>
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
        // ReactDOM.render(<App />, document.getElementById("root"));


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


// const MyDocument = () => (

//   <Document>
//     <Page style={styles.page} size={[700, 1100]} page orientation="landscape">
//       <View style={styles.textWrapper}>
//         <Image style={styles.wordimage} src={word}></Image>
//         <Image style={styles.image} src={certi}></Image>
//         <Text style={styles.text}>
//           This is to certify that {currentTime} has completed COURSE with GRADE
//         </Text>
//         <Text style={styles.text}>Director X.Y.Z</Text>
//         <Image style={styles.logoimage} src={logo}></Image>
//       </View>
//     </Page>
//   </Document>
// );

// const App = () => (

//   <div>
//     <PDFViewer>
//       <MyDocument />
//     </PDFViewer>
//     <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
//       {({ blob, url, loading, error }) =>
//         loading ? "Loading document..." : "Download now!"
//       }
//     </PDFDownloadLink>
//   </div>
// );
// ReactDOM.render(<App />, document.getElementById("root"));