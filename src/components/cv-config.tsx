import React from 'react'
import { Form, Select, Switch, type SelectProps } from 'antd'
import { Icon } from '@iconify/react'

const languageOptions: SelectProps['options'] = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'Vietnamese' }
];

export type ConfigFormProps = React.HTMLAttributes<HTMLDivElement> & {}
const ConfigForm = (props: ConfigFormProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { className } = props;

  return (
    <div className={`flex justify-end items-center gap-3 ${className}`}>
      <Switch
        className={`h-6! pt-0.5! ${isDarkMode ? 'bg-primary!': ''}`}
        checked={isDarkMode}
        onChange={(checked) => setIsDarkMode(checked)}
        checkedChildren={<Icon icon="tdesign:mode-dark" width="18" height="18" className='' />}
        unCheckedChildren={<Icon icon="tdesign:mode-light" width="18" height="18" className='' />}
      />
      <Select options={languageOptions} defaultValue={'en'} />
    </div>
  )
}

export default React.memo(ConfigForm);