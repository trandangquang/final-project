import { Card } from 'antd';
// import { Col, Row } from 'antd';

export const ProductCard = () => {
  return (
    // <div >
    //   <div>
    //     <Row className='bg-white flex items-center justify-center h-[200px] pt-8 '>
    //       <Col
    //         span={24}
    //         className=' w-full text-4xl font-bold items-center justify-center flex'
    //       >
    //         Cac dong xe
    //       </Col>
    //     </Row>
    //   </div>

    // <div>
    <Card
      headStyle={{ width: '368px', height: '207px' }}
      hoverable
      style={{
        width: 368,
      }}
      bodyStyle={{ padding: 20 }}
      cover={
        <img
          className="h-[207px] object-contain"
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <div className="text-lg ">
        <div className="hover:text-red-700 text-2xl">718</div>
        <div className="hover:text-red-700">All car models</div>
      </div>
    </Card>
    /* </div> */
    // </div>
  );
};
