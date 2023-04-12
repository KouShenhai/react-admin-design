import { AppRoute } from '../types'
import { BasicLayout } from '../../layout'
import Home from '../../views/home'

// excel module page
const ExcelRoute: AppRoute = {
  path: '/excel',
  element: <BasicLayout />,
  meta: {
      title: 'Excel',
      icon: 'excel'
  },
  children: [
      {
          path: 'export-excel',
          element: <Home />,
          meta: {
              title: '导出Excel'
          }
      },
      {
          path: 'import-excel',
          element: <Home />,
          meta: {
              title: '导入Excel'
          }
      }
  ]
}

export default ExcelRoute