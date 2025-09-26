// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Label } from '@/components/ui';

export function SystemSelector({
  value,
  onChange
}) {
  const systems = [{
    value: 'default',
    label: '默认系统'
  }, {
    value: 'business',
    label: '商务系统'
  }, {
    value: 'education',
    label: '教育系统'
  }, {
    value: 'entertainment',
    label: '娱乐系统'
  }];
  return <div className="space-y-2">
      <Label>选择系统</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="请选择系统" />
        </SelectTrigger>
        <SelectContent>
          {systems.map(system => <SelectItem key={system.value} value={system.value}>
              {system.label}
            </SelectItem>)}
        </SelectContent>
      </Select>
    </div>;
}