import { Search, TableView, Pagination } from '../components';

export default function Home(props) {

  return (
    <div className='px-8 py-4 gap-2 flex flex-col'>
      <Search />
      <TableView records={props.records} />
      <Pagination />
    </div>
  )
}

export async function getServerSideProps() {
  const recordsRaw = await fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
  const records = await recordsRaw.json();
  return {
    props: {
      records
    }
  }
} 