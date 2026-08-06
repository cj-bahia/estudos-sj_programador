import { useState, useEffect, cloneElement } from "react";
import { db, auth } from "./firebaseConnection";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import "./app.css";

interface Post {
  id: string;
  titulo: string;
  autor: string;
}

interface UserDetail {
  uid: string;
  email: string | null;
}

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idPost, setIdPost] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [user, setUser] = useState(false);
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // async function loadPosts() {
    //   const postRef = collection(db, "posts");
    //   await getDocs(postRef);

    //   const unsub = onSnapshot(postRef, (snapshot) => {
    //     let listaPost: Post[] = [];

    //     snapshot.forEach((doc) => {
    //       listaPost.push({
    //         id: doc.id,
    //         titulo: doc.data().titulo,
    //         autor: doc.data().autor,
    //       });
    //     });

    //     setPosts(listaPost);
    //   });
    // }

    // loadPosts();

    let unsub: () => void;

    async function loadPosts() {
      try {
        const postRef = collection(db, "posts");
        await getDocs(postRef);

        unsub = onSnapshot(postRef, (snapshot) => {
          let listaPost: Post[] = [];

          snapshot.forEach((doc) => {
            listaPost.push({
              id: doc.id,
              titulo: doc.data().titulo,
              autor: doc.data().autor,
            });
          });

          setPosts(listaPost);
        });
      } catch (error) {
        console.log("ERRO: " + error);
      }
    }

    loadPosts();

    return () => {
      if (unsub) unsub();
    };
  }, []);

  useEffect(() => {
    async function checkLogin() {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(true);
            setUserDetail({
              uid: user.uid,
              email: user.email,
            });
          } else {
            setUser(false);
            setUserDetail(null);
          }
        });
      } catch {}
    }

    checkLogin();
  }, []);

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
    // Buscando somente um post
    //
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

    //Listando os posts
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

  async function editarPost() {
    try {
      const docRef = doc(db, "posts", idPost);
      await updateDoc(docRef, {
        titulo: titulo,
        autor: autor,
      });

      console.log("POST ATUALIZADO!");
      setIdPost("");
      setTitulo("");
      setAutor("");
    } catch (error) {
      console.log("ERRO AO ATUALZIAR POST: " + error);
    }
  }

  async function excluirPost(id: string) {
    try {
      const docRef = doc(db, "posts", id);
      await deleteDoc(docRef);

      alert("POST DELETADO COM SUCESSO!");
    } catch (error) {
      console.log("ERRO AO TENTAR EXCLUIR ITEM: " + error);
    }
  }

  async function novoUsuario() {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);

      setEmail("");
      setSenha("");

      console.log("USUÁRIO CADASTRADO COM SUCESSO!");
    } catch (error) {
      const err = error as any;
      if (err.code === "auth/weak-password") {
        alert("Senha muito fraca!");
      } else if (err.code === "auth/email-already-in-use") {
        alert("Email já está sendo usado!");
      }
    }
  }

  async function loginUsuario() {
    try {
      const result = await signInWithEmailAndPassword(auth, email, senha);

      setUserDetail({
        uid: result.user.uid,
        email: result.user.email,
      });

      setUser(true);

      setEmail("");
      setSenha("");

      console.log("USUÁRIO LOGADO COM SUCESSO!");
    } catch (error) {
      console.log("ERRO AO FAZER LOGIN! " + error);
    }
  }

  async function fazerLogout() {
    try {
      await signOut(auth);

      setUser(false);
      setUserDetail(null);
    } catch (error) {
      console.log("ERRO AO SAIR DA CONTA: " + error);
    }
  }

  return (
    <div>
      <h1>ReactJS + Firebase</h1>

      {user && (
        <div>
          <strong>Seja bem-vindo(a) (Você está logado!)</strong>
          <br />
          <span>
            ID: {userDetail?.uid} - Email: {userDetail?.email}
          </span>
          <br />
          <br />
          <button onClick={fazerLogout}>Sair da conta</button>
        </div>
      )}

      <hr />

      <div className="container">
        <h2> Usuários</h2>

        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite um email"
        />

        <label>Senha</label>
        <input
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite uma senha"
        />

        <button onClick={novoUsuario}>Cadastrar</button>
        <button onClick={loginUsuario}>Fazer login</button>
      </div>

      <br />
      <br />
      <hr />

      <div className="container">
        <h2>Posts</h2>

        <label>ID do Post:</label>
        <input
          placeholder="Digite o ID do post"
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        />

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

        <button onClick={handleAdd}>Criar post</button>
        <button onClick={buscarPost}>Buscar post</button>
        <button onClick={editarPost}>Atualizar post</button>

        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <strong>ID: {post.id}</strong>
                <br />
                <span>Titulo: {post.titulo} </span>
                <br />
                <span>Autor: {post.autor}</span>
                <br />
                <button onClick={() => excluirPost(post.id)}>Excluir</button>
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
