import styles from "../../styles/Overall.module.css";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { firestore } from "../../firebase/FirebaseFirestore";
import {
  collection,
  getDocs,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Head from "next/head";
import Script from "next/script";

export default function Overall() {
  const [names, setNames] = useState([]);
  const [docs, setDocs] = useState([]);
  const [cases, setCases] = useState([]);

  const q = query(collection(firestore, "Data"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cities = [];
    const names = [];
    const cases = [];
    querySnapshot.forEach((doc) => {
      cities.push(doc.data());
      names.push(doc.data().name);
      cases.push(doc.data().totalcases);
      setNames(names);
      setDocs(cities);
      setCases(cases);
    });
    // console.log("Current cities in CA: ", cities.join(", "));
  });

  const data = {
    labels: names,
    datasets: [
      {
        label: "# of Votes",
        data: cases,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      unsubscribe();
    }, 2000);
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <title>CY-BOCK</title>
        <meta name="description" content="Criminal Data Analyist" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
        />
      </Head>
      <h1
        className={`bi bi-arrow-left ${styles.bi}`}
        onClick={(e) => {
          window.open("./HomeScreen", "_self");
        }}
      ></h1>
      {docs ? (
        <div className={styles.head}>
          <h1>Total Most Cases</h1>
          <Bar
            data={data}
            width={400}
            height={200}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}