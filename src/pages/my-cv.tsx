import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

import { type LangueType } from '../components/cv-config';
// Components
const Template1Vi = React.lazy(() => import('../components/cv/vi/template-1'));
const Template2Vi = React.lazy(() => import('../components/cv/vi/template-2'));
const Template3Vi = React.lazy(() => import('../components/cv/vi/template-3'));
const Template1En = React.lazy(() => import('../components/cv/en/template-1'));
const Template2En = React.lazy(() => import('../components/cv/en/template-2'));
const Template3En = React.lazy(() => import('../components/cv/en/template-3'));

import { widthSuspense } from '../helpers';

const TEMPLATES = {
  vi: {
    '1': <Template1Vi />,
    '2': <Template2Vi />,
    '3': <Template3Vi />,
  },
  en: {
    '1': <Template1En />,
    '2': <Template2En />,
    '3': <Template3En />,
  },
} as const;

const wrap = (component: React.ReactElement) => widthSuspense(component);

const MyCv = () => {
  const { lang: language = 'en', templateId = '1' } = useParams<{ lang?: LangueType; templateId?: string }>();
  const navigate = useNavigate();

  const languageStorage = localStorage.getItem('cv-language');

  if (language !== languageStorage) {
    localStorage.setItem('cv-language', language);
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Template 1',
      children: wrap(TEMPLATES[language]['1']),
    },
    {
      key: '2',
      label: 'Template 2',
      children: wrap(TEMPLATES[language]['2']),
    },
    {
      key: '3',
      label: 'Template 3',
      children: wrap(TEMPLATES[language]['3']),
    },
  ];

  const handleChange: TabsProps['onChange'] = (key) => {
    navigate(`/my-cv/${language}/${key}`);
  };

  return (
    <Tabs
      activeKey={templateId}
      items={items}
      onChange={handleChange}
      destroyOnHidden
      centered
    />
  );
};

export default React.memo(MyCv);