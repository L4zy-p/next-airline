import { Form, Input, Row, Col, Button, DatePicker, Select } from 'antd'
import { UserOutlined } from '@ant-design/icons'

function LogForm(props) {
  const { type, onSubmit, airportList } = props;

  const [form] = Form.useForm()

  const handleSubmit = (formData) => {
    onSubmit({ ...formData, type, timestamp: formData?.timestamp?.format('X') })
    form.resetFields()
  }

  return (
    <div style={{ display: "flex", columnGap: 8 }}>
      <Form form={form} layout='vertical' onFinish={handleSubmit}>
        <Row gutter={[8, 8]}>
          <Col span={8}>
            <Form.Item name='passengerName' label='Passenger Name' rules={[{ required: true }]}>
              <Input prefix={<UserOutlined />} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='airport' label='Airport' rules={[{ required: true }]}>
            <Select
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {
                  airportList?.length > 0 && airportList?.map((ap) => <Select.Option
                    key={ap.objectID}
                    value={ap.city}>
                    {ap.city}</Select.Option>)
                }
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='timestamp' label='Timestamp' rules={[{ required: true }]}>
              <DatePicker showTime placeholder='' format='DD/MM/YYYY HH:mm:ss' />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type='primary' htmlType='submit'>Submit</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default LogForm;
