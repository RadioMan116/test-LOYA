import styles from './MainLayout.module.scss';
import Header from "../Header";
import Table from "../Table";


export default function MainLayout({children}) {


    return (
        <>
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <Header/>
                    <Table/>
                </div>
            </main>
        </>
    );
}
