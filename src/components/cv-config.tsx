import React from 'react'
import { Icon } from '@iconify/react'
import { Select, Switch, type SelectProps } from 'antd'
import { useNavigate, useParams, useLocation } from 'react-router'

export type LangueType = 'en' | 'vi';
export type ConfigFormProps = React.HTMLAttributes<HTMLDivElement> & {}

const languageOptions: SelectProps['options'] = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'Vietnamese' }
];

const ConfigForm = (props: ConfigFormProps) => {
  const { className } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const { lang = 'en', templateId = '1' } = useParams<{ lang?: LangueType; templateId?: string }>();
  
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleLanguageChange = React.useCallback<NonNullable<SelectProps['onChange']>>((value) => {
    const isCvRootPath = ['/', '/my-cv'].includes(location.pathname);

    if (isCvRootPath) {
      navigate(`/my-cv/${value}`);
      return
    }

    if (location.pathname.startsWith('/my-cv')) {
      navigate(`/my-cv/${value}/${templateId}`);
      return
    }
  }, [location, templateId, navigate]);

  return (
    <div className={`flex justify-end items-center gap-3 ${className}`}>
      <Select options={languageOptions} defaultValue={lang} onChange={handleLanguageChange} />
      <Switch
        className={`h-6! pt-0.5! ${isDarkMode ? 'bg-primary!' : ''}`}
        checked={isDarkMode}
        onChange={(checked) => setIsDarkMode(checked)}
        checkedChildren={<Icon icon="tdesign:mode-dark" width="18" height="18" className='' />}
        unCheckedChildren={<Icon icon="tdesign:mode-light" width="18" height="18" className='' />}
      />
    </div>
  )
}

export default React.memo(ConfigForm);