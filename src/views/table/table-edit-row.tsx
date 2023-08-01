import type { ColumnType } from 'antd/es/table'
import { Button, Table, Select, Switch, InputNumber, Input, DatePicker, Radio, Checkbox, Card, Popconfirm, Space } from 'antd'
import { PageWrapper } from '@/components/Page'
import dayjs from 'dayjs'
import { cloneDeep } from 'lodash-es'
import { TABLE_EDIT_COMPO } from '@/settings/websiteSetting'
import { tableData, DataItem } from '../excel/export-excel/data'

const theadMap = {
  key: '数字输入框',
  name: '输入框',
  sex: '单选框',
  birth: '日期选择框',
  education: '选择器',
  hobby: '多选框',
  forbid: '开关',
  action: '按钮'
}

const TableEditRow = () => {
  const { Column } = Table

  return (
    <PageWrapper plugin={TABLE_EDIT_COMPO}>
      <Card bordered={false}>
        <Table
          dataSource={tableData}
          pagination={false}
        >
          <Column
            title='编号'
            dataIndex='id'
            align='center'
            sorter
          />
        </Table>
      </Card>
    </PageWrapper>
  )
}

export default TableEditRow