import { useState } from "react";
import { db } from "./firebaseConnection";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import "./app.css";

interface Post {
  id: string;
  titulo: string;
  autor: string;
}

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  async function handleAdd() {
    // try {
    //   await setDoc(doc(db, "posts", "12345"), {
    //     titulo: titulo,
    //     autor: autor,
    //   });
    //   console.log("DADOS REGISTRADOS NO BANCO!")
    // } catch (error) {
    //   console.log("GEROU ERRO: " + error);
    // }
    try {
      await addDoc(collection(db, "posts"), {
        titulo: titulo,
        autor: autor,
      });

      console.log("DADOS REGISTRADOS NO BANCO!");

      setTitulo("");
      setAutor("");
    } catch (error) {
      console.log("GEROU ERRO: " + error);
    }
  }

  async function buscarPost() {
    // try {
    //   const postRef = doc(db, "posts", "3Pj4UQQh9kJxoqwU5N2Q");
    //   const snapshot = await getDoc(postRef);
    //   const data = snapshot.data();

    //   if (data) {
    //     setTitulo(data.titulo ?? "");
    //     setAutor(data.autor ?? "");
    //   }
    // } catch (error) {
    //   console.log("ERRO AO BUSCAR" + error);
    // }

    try {
      const postRef = collection(db, "posts");
      const snapshot = await getDocs(postRef);
      let lista: Post[] = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,
        });
      });

      setPosts(lista);
    } catch (error) {
      console.log("DEU ERRO AO BUSCAR: " + error);
    }
  }

  return (
    <div>
      <h1>ReactJS + Firebase</h1>

      <div className="container">
        <label>Título:</label>
        <textarea
          placeholder="digite o título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPost}>Buscar post</button>

        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <span>Titulo: {post.titulo} </span>
                <br />
                <span>Autor: {post.autor}</span>
                <br />
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
