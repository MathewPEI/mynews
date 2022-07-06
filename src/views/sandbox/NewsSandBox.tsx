import TopHeader from '../../components/sandbox/TopHeader'
import SideMenu from '../../components/sandbox/SideMenu'
import { Button, Layout } from 'antd'

const NewsSandBox: React.FC = () => {
  return (
    <>
      <Layout>
        <SideMenu></SideMenu>
        <TopHeader></TopHeader>
      </Layout>
    </>
  )
}

export default NewsSandBox