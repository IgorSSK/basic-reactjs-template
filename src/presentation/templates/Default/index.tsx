import { routes } from '@main/routes/routes-map';
import Loading from '@presentation/components/Loading';
import Sidebar from '@presentation/components/Sidebar';
import Topbar from '@presentation/components/Topbar';
import { useUi } from '@presentation/hooks/useUi';
import React from 'react';
import RoutePaths from '../../components/RoutePaths';
import { DefaultTemplateContainer, Main, Body, Section } from './styles';

type DefaultTemplateProps = {
  children: any;
};

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {
  const { loading } = useUi();

  return (
    <DefaultTemplateContainer>
      <Sidebar menuItems={routes} />
      <Section>
        <Topbar />
        <Loading isLoading={loading.active} />
        <Main>
          <RoutePaths />
          <Body>{children}</Body>
        </Main>
      </Section>
    </DefaultTemplateContainer>
  );
};

export default DefaultTemplate;
