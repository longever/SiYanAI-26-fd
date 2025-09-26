// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Label } from '@/components/ui';

export function DigitalHumanSystemSelector({
  value,
  onChange,
  systems = []
}) {
  return <div className="space-y-2">
      <Label>选择系统</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
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