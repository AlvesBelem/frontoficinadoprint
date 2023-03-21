import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from './login.module.scss'
import Image from 'next/image'
import logoImg from '../../../public/logo-transparente.png'
import { Input } from '@/components/UI/Input'
import { Button } from '@/components/UI/Button'
import Link from 'next/link'
import NoLayout from '@/components/NoLayout'



const inter = Inter({ subsets: ['latin'] })

export default function SignUp() {
  return (
    <NoLayout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="logo oficina do print" />

        <div className={styles.login}>
          <form className={styles.form}>
            <Input
              placeholder='Digite seu Nome'
              type="text"
            />
            <Input
              placeholder='Digite seu email'
              type="text"
            />
            <Input
              placeholder='Digite seu senha'
              type="password"
            />
            <Input
              placeholder='Confirme sua senha'
              type="password"
            />

            <Button
              type="submit"
            >
              Cadastrar
            </Button>

          </form>
          <Link href='/signin'>
            <h1>Já tem uma conta? faça seu login!</h1>
          </Link>
        </div>
      </div>

    </NoLayout>
  )
}
