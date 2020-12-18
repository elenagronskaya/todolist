import PageHeader from '../../components/common/page-header';
import Main from '../../components/common/main';
import TodosList from '../../components/todos-list';

export default function Todos(){
    return(
        <Main>
            <PageHeader title="Todos page"/>
            <TodosList/>
        </Main>
        
    )
}