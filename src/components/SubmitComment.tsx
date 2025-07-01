import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const SubmitComment = () => {
  return (
      <div className="flex flex-col gap-2">
        <label className="font-medium">امتیاز</label>
        <Select>
          <SelectTrigger className="w-[580px]">
            <SelectValue placeholder="انتخاب امتیاز" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">عالی</SelectItem>
            <SelectItem value="system">خوب</SelectItem>
            <SelectItem value="system">متوسط</SelectItem>
            <SelectItem value="system">ضعیف</SelectItem>
          </SelectContent>
        </Select>
        <label className="font-medium">نظر</label>
        <Textarea placeholder="نظر خود را وارد نمایید" className="w-[580px]" />
        <Button size={'sm'}>ثبت نظر</Button>
      </div>
  );
}

export default SubmitComment