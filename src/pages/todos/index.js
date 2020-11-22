import PageHeader from '../../components/common/page-header';
import Main from '../../components/common/main';
import styles from './styles.module.css';

export default function Todos(){
    return(
        <Main>
            <PageHeader title="Todos"/>
            <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste ipsum enim totam obcaecati aliquid nihil,
                 temporibus ab, cumque exercitationem sit eos amet animi adipisci earum maxime ducimus repellat natus!
                 </div>
        </Main>
    )
}