

import { useState } from 'react'
import './admin.css'

import { Header } from "../../components/Header"
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'

import { database } from '../../services/firebaseConnection'
import { 
    addDoc, 
    collection, 
    onSnapshot, 
    query, 
    orderBy, 
    doc, 
    deleteDoc } from 'firebase/firestore'

    import { toast } from 'react-toastify'

export default function Admin() {

    const [nameInput, setNameInput] = useState("")
    const [urlInput, setUrlInput] = useState("")
    const [backgoundColorInput, setBackgroundColorInput] = useState("#f1f1f1")
    const [textColorInput, setTextColorInput] = useState("#121212")


    async function handleResgister(event){
        event.preventDefault()

        if (nameInput === '' || urlInput === '') {
            toast.warn("Preencha todos os campos")
            return
        }

        addDoc(collection(database, "links"), {
            name: nameInput,
            url: urlInput,
            bg: backgoundColorInput,
            color: textColorInput,
            created: new Date()
        })
        .then(()=>{
            setNameInput('')
            setUrlInput('')
            toast.success("Link salvo com sucesso!")
            
        })
        .catch((error) =>{
            toast.error("Ops erro ao salvar link")
        })
    }

    return (
        <div className="adminContainer">
            <Header />
            <Logo />

            <form className='form' onSubmit={handleResgister}>
                <label className='label'>Nome do link</label>

                <Input
                    placeholder="Nome do Link..."
                    value={nameInput}
                    onChange={(event) => setNameInput(event.target.value)}
                />

                <label className='label'>Url do link</label>

                <Input
                    type="url"
                    placeholder="Digite a Url..."
                    value={urlInput}
                    onChange={(event) => setUrlInput(event.target.value)}
                />

                <section className='containerColors'>
                    <div>
                        <label className='label right'>Fundo do link</label>
                        <input type="color"
                            value={backgoundColorInput}
                            onChange={(event) => setBackgroundColorInput(event.target.value)}
                        />

                    </div>

                    <div>
                        <label className='label right'>Cor do link</label>
                        <input type="color"
                            value={textColorInput}
                            onChange={(event) => setTextColorInput(event.target.value)}
                        />

                    </div>

                </section>



                {nameInput !== '' && (
                    <div className='preview'>
                        <label className='label'>Veja como está ficando</label>
                        <article className='list' style={{ marginBottom: 8, marginTop: 8, backgroundColor: backgoundColorInput }} >
                            <p style={{ color: textColorInput }}>{nameInput}</p>
                        </article>
                    </div>
                )}



                <button className='btnRegister' type='submit'>
                    Cadastrar <MdAddLink size={24} color="#fff" />
                </button>
            </form>

            <h2 className='title'>Meus Links</h2>
            <article
                className='list animatePop'
                style={{ backgoundColor: "#000", color: "#fff" }}
            >
                <p>Groupo exclusivo no Discord</p>
                <div>
                    <button className='btnDelete'>
                        <FiTrash2 size={18} color="#fff" />
                    </button>
                </div>
            </article>
        </div>
    )
}