// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Label } from '@/components/ui';

export function SystemSelector({
  value,
  onChange,
  label = "选择系统",
  placeholder = "请选择系统"
}) {
  const systems = [{
    value: 'text-to-video',
    label: '文本转视频'
  }, {
    value: 'image-to-video',
    label: '图片转视频'
  }, {
    value: 'digital-human',
    label: '数字人视频'
  }];
  return <div className="space-y-2">
      <Label>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {systems.map(system => <SelectItem key={system.value} value={system.value}>
              {system.label}
            </SelectItem>)}
        </SelectContent>
      </Select>
    </div>;
}