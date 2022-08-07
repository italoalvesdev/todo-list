import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import todoLogo from '../../assets/todoLogo.svg'

import styles from './Header.module.css'

interface Props {
  onAddTask: (taskTitle: string) => void
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('');
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo do header escrito todo" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa' 
          value={title}  
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} 
        />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}