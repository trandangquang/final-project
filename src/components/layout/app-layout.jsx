import { Suspense } from 'react';

import { Layout, Space } from 'antd';
import { Header } from '../header';
import { Spinner } from '../spinner';
import './app-layout.scss';

const { Content } = Layout;

export const AppLayout = props => {
  const { children } = props;
  return (
    <Space>
      <Layout>
        <Content>
          <Header />
          <Suspense
            fallback={
              <div className="flex h-full w-full items-center justify-center">
                <Spinner />
              </div>
            }
          >
            {children}
          </Suspense>
        </Content>
      </Layout>
    </Space>
  );
};
